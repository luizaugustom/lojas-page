import { NextResponse } from 'next/server'

// Forçar rota dinâmica para evitar ISR
export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

export async function GET() {
  try {
    // Buscar releases do GitHub
    const response = await fetch(
      'https://api.github.com/repos/luizaugustom/lojas-desktop/releases/latest',
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
        },
        // Remover cache no build time para evitar ISR
        cache: 'no-store'
      }
    )

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`)
    }

    const release = await response.json()

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

    return NextResponse.json({
      downloadUrl: setupFile.browser_download_url,
      version: release.tag_name,
      versionName: release.name,
      publishedAt: release.published_at,
    }, {
      headers: {
        'Cache-Control': 'public, max-age=300, s-maxage=300', // Cache de 5 minutos
      },
    })
  } catch (error) {
    console.error('Erro ao buscar release do GitHub:', error)
    return NextResponse.json(
      { error: 'Erro ao buscar versão mais recente' },
      { status: 500 }
    )
  }
}

