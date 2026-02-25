import { NextResponse } from 'next/server'

// Forçar rota dinâmica para evitar ISR (Incremental Static Regeneration)
// Isso previne que a Vercel tente fazer cache do arquivo binário grande
export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

export async function GET() {
  try {
    // Buscar releases do GitHub
    const releaseResponse = await fetch(
      'https://api.github.com/repos/luizaugustom/lojas-desktop/releases/latest',
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
        },
        // Remover cache no build time para evitar ISR
        cache: 'no-store'
      }
    )

    if (!releaseResponse.ok) {
      throw new Error(`GitHub API error: ${releaseResponse.status}`)
    }

    const release = await releaseResponse.json()

    // Procurar o arquivo .exe nos assets
    const setupFile = release.assets?.find((asset: any) => 
      asset.name.toLowerCase().includes('montshop-desktop-setup') && asset.name.endsWith('.exe')
    )

    if (!setupFile) {
      return NextResponse.json(
        { error: 'Arquivo de instalação não encontrado' },
        { status: 404 }
      )
    }

    // Redirecionar diretamente para o GitHub em vez de fazer proxy do arquivo
    // Isso evita problemas com tamanho de arquivo e é mais eficiente
    return NextResponse.redirect(setupFile.browser_download_url, {
      status: 302,
      headers: {
        'Cache-Control': 'public, max-age=3600, s-maxage=3600', // Cache de 1 hora
      },
    })
  } catch (error) {
    console.error('Erro ao fazer download do arquivo:', error)
    return NextResponse.json(
      { error: 'Erro ao fazer download do arquivo' },
      { status: 500 }
    )
  }
}

