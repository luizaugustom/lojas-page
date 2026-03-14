import type { Metadata } from 'next'
import { Outfit, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Sistema Montshop - Sistema Completo para Gestão de Lojas | PDV e Controle de Estoque',
  description: 'Sistema completo de gestão para lojas com PDV, controle de estoque, emissão de nota fiscal eletrônica (NFC-e), relatórios completos e muito mais. Experimente grátis!',
  keywords: [
    'sistema para lojas',
    'sistema de caixa',
    'PDV',
    'ponto de venda',
    'gestão de estoque',
    'controle de estoque',
    'emissão de nota fiscal',
    'NFC-e',
    'sistema comercial',
    'ERP para lojas',
    'controle de vendas',
    'sistema de vendas',
    'software para comércio',
    'gestão comercial',
    'sistema PDV',
    'frente de caixa',
    'controle financeiro',
    'sistema para varejo'
  ],
  authors: [{ name: 'Sistema Montshop' }],
  creator: 'Sistema Montshop',
  publisher: 'Sistema Montshop',
  robots: 'index, follow',
  icons: {
    icon: [
      { url: '/logo.png', type: 'image/png' },
      { url: '/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/logo.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://montshop.com.br',
    title: 'Sistema Montshop - Sistema Completo para Gestão de Lojas',
    description: 'Sistema completo de gestão para lojas com PDV, controle de estoque, emissão de nota fiscal eletrônica (NFC-e), relatórios completos e muito mais.',
    siteName: 'Sistema Montshop',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sistema Montshop - Sistema Completo para Gestão de Lojas',
    description: 'Sistema completo de gestão para lojas com PDV, controle de estoque e emissão de NFC-e',
  },
  verification: {
    google: 'google-site-verification-code', // Adicionar código real do Google Search Console
  },
  alternates: {
    canonical: 'https://montshop.com.br',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        {/* Google Tag Manager / Google Ads - Adicionar IDs reais */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
        
        {/* Structured Data for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'Sistema Montshop',
              applicationCategory: 'BusinessApplication',
              offers: {
                '@type': 'AggregateOffer',
                priceCurrency: 'BRL',
                lowPrice: '49.90',
                highPrice: '289.90',
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.8',
                ratingCount: '1250',
              },
              operatingSystem: 'Web, Windows, Android, iOS',
              description: 'Sistema completo de gestão para lojas com PDV, controle de estoque, emissão de nota fiscal eletrônica',
            }),
          }}
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Sistema Montshop',
              url: 'https://montshop.com.br',
              logo: 'https://montshop.com.br/logo.png',
              description: 'Sistema completo para gestão de lojas',
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Vendas',
                email: 'montsoftwares@gmail.com',
              },
            }),
          }}
        />
      </head>
      <body className={`${outfit.variable} ${plusJakarta.variable} font-body`}>
        {children}
      </body>
    </html>
  )
}

