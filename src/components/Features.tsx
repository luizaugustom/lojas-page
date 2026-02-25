'use client'

import {
  ShoppingCart,
  Package,
  FileText,
  Users,
  BarChart2,
  Smartphone,
  CreditCard,
  Bell,
  Settings,
  TrendingUp,
  Printer,
  Database,
  Percent,
  Receipt,
  Calendar,
  MessageCircle,
  Globe,
  Wallet,
  ArrowUpDown,
  ClipboardList,
  Layers,
} from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: Layers,
      title: '🏪 Multilojas – Várias lojas em um só lugar',
      description: 'Gerencie dados e produtos de várias lojas em um único painel. Troque entre lojas em um clique, cadastre produtos e estoque por loja, relatórios por unidade ou consolidados. Ideal para redes e quem tem mais de uma loja.',
    },
    {
      icon: Globe,
      title: '🌐 Catálogo Digital Público',
      description: 'Transforme sua loja em uma vitrine online! Crie um catálogo digital público personalizado para seus clientes navegarem produtos, preços e estoques. Link único, busca e filtros avançados.',
    },
    {
      icon: MessageCircle,
      title: '💬 Mensagens Automáticas de Cobrança',
      description: 'Sistema inteligente que envia mensagens WhatsApp automáticas quando vendas a prazo vencem. Configure mensagens personalizadas e aumente seu índice de recebimento.',
    },
    {
      icon: Settings,
      title: '🎨 100% Personalizável com sua Marca',
      description: 'Use sua logo e as cores da sua empresa! Personalize completamente o visual do sistema, NFC-e, impressora e muito mais para refletir a identidade do seu negócio.',
    },
    {
      icon: ShoppingCart,
      title: 'PDV Completo',
      description: 'Sistema de ponto de venda rápido e intuitivo. Busque produtos por código de barras ou nome e finalize vendas em segundos.',
    },
    {
      icon: Package,
      title: 'Controle de Estoque',
      description: 'Gestão completa com alertas de estoque baixo, controle de entrada/saída e movimentações detalhadas.',
    },
    {
      icon: FileText,
      title: 'Emissão de NFC-e Automática',
      description: 'Emita notas fiscais eletrônicas integrado com Focus NFe/SEFAZ. Configuração simples e emissão instantânea.',
    },
    {
      icon: Users,
      title: 'Gestão de Clientes',
      description: 'Cadastre clientes com CPF/CNPJ, endereço completo. Histórico de compras e gestão de fidelidade.',
    },
    {
      icon: Percent,
      title: 'Sistema de Comissões',
      description: 'Controle de comissões por vendedor com relatórios detalhados e gestão de desempenho individual.',
    },
    {
      icon: BarChart2,
      title: 'Relatórios Completos',
      description: 'Dashboard com métricas, produtos mais vendidos, vendas por período, comissões e fluxo de caixa.',
    },
    {
      icon: Smartphone,
      title: 'Web, Desktop e Mobile',
      description: 'Acesse de qualquer lugar! Disponível para navegador web, aplicativo desktop e mobile para Android e iOS. Gerencie sua loja de qualquer dispositivo.',
    },
    {
      icon: CreditCard,
      title: 'Múltiplas Formas de Pagamento',
      description: 'Dinheiro, débito, crédito, PIX e parcelamento. Controle de troco automático.',
    },
    {
      icon: Receipt,
      title: 'Parcelamento',
      description: 'Vendas parceladas com controle de prestações e datas de vencimento. Gestão completa de parcelas.',
    },
    {
      icon: Calendar,
      title: 'Contas a Pagar',
      description: 'Controle de contas com alertas de vencimento, boletos, status de pagamento e gestão de fornecedores.',
    },
    {
      icon: Wallet,
      title: 'Fechamento de Caixa',
      description: 'Abertura e fechamento de caixa por vendedor com totalizadores, validação e relatórios.',
    },
    {
      icon: Printer,
      title: 'Impressão de Cupons',
      description: 'Suporte para impressoras térmicas. Reimpressão de cupons fiscais e não fiscais.',
    },
    {
      icon: ClipboardList,
      title: 'Orçamentos Personalizados',
      description: 'Crie orçamentos profissionais com dados personalizados da sua empresa. Logo, cores, informações de contato e muito mais.',
    },
    {
      icon: Bell,
      title: 'Notificações em Tempo Real',
      description: 'Receba alertas sobre vendas, estoque baixo, vencimentos e novidades do sistema.',
    },
  ]

  return (
    <section id="recursos" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-primary-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            RECURSOS COMPLETOS
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Tudo que você precisa para{' '}
            <span className="gradient-text">gerenciar sua loja</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Uma plataforma completa com todas as ferramentas necessárias para o sucesso do seu negócio
          </p>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-50 to-accent-50 border border-primary-200 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span>Mais de 18 funcionalidades criadas com donos de lojas para donos de lojas</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, index) => {
            // Detectar se é multilojas, catálogo digital, mensagens automáticas ou personalizável
            const isHighlight = feature.title.includes('Multilojas') ||
                               feature.title.includes('Catálogo Digital') || 
                               feature.title.includes('Mensagens Automáticas') ||
                               feature.title.includes('Personalizável');
            
            return (
            <div
              key={index}
              className={`group p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in ${
                isHighlight 
                  ? 'bg-gradient-to-br from-primary-500 to-accent-600 text-white border-2 border-primary-400' 
                  : 'bg-white'
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className={`flex-shrink-0 p-2 sm:p-3 rounded-xl group-hover:scale-110 transition-transform ${
                  (isHighlight || feature.title.includes('Personalizável') || feature.title.includes('Multilojas')) 
                    ? 'bg-white/20' 
                    : 'bg-gradient-to-br from-primary-500 to-accent-600'
                }`}>
                  <feature.icon className="text-white w-5 h-5 sm:w-6 sm:h-6" size={24} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className={`text-base sm:text-lg font-bold mb-1 sm:mb-2 ${
                    (isHighlight || feature.title.includes('Personalizável') || feature.title.includes('Multilojas')) ? 'text-white' : 'text-gray-900'
                  }`}>{feature.title}</h3>
                  <p className={`text-xs sm:text-sm ${
                    (isHighlight || feature.title.includes('Personalizável') || feature.title.includes('Multilojas')) ? 'text-white/90' : 'text-gray-600'
                  }`}>{feature.description}</p>
                </div>
              </div>
            </div>
            )
          })}
        </div>

        {/* Extra CTA */}
        <div className="mt-16 text-center">
          <a
            href="#planos"
            className="inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-700 transform hover:scale-105 transition-all shadow-xl"
          >
            Ver Planos e Preços
          </a>
        </div>
      </div>
    </section>
  )
}

