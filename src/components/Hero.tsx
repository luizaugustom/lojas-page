'use client'

import { ArrowRight, CheckCircle2, Shield, TrendingUp } from 'lucide-react'

export default function Hero() {
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <h1 className="font-display text-3xl min-[375px]:text-4xl md:text-5xl lg:text-6xl font-bold text-surface-900 mb-4 sm:mb-6 leading-tight animate-fade-in">
              O Sistema Mais Completo para{' '}
              <span className="gradient-text">Gestão da Sua Loja</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-surface-600 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 animate-fade-in animation-delay-100">
              Desenvolvido em parceria com donos de lojas, o Sistema Montshop é o mais completo do mercado.
              Multilojas, PDV, NFC-e automática, estoque, comissões, boletos e parcelamento — tudo em um só lugar.
            </p>

            <div className="inline-flex flex-wrap items-center gap-2 bg-primary-50 border border-primary-200 text-primary-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-6 sm:mb-8 animate-fade-in animation-delay-200">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span>Criado em parceria com donos de lojas</span>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {[
                'Multilojas: várias lojas em um só painel',
                'PDV com busca por código de barras',
                'Emissão NFC-e automática',
                'Estoque, comissões e boletos',
                'Web, Desktop e Mobile',
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-surface-700 animate-fade-in"
                  style={{ animationDelay: `${120 + index * 80}ms` }}
                >
                  <CheckCircle2 className="text-primary-500 flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-xs sm:text-sm font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <a
                href={`https://wa.me/5548998482590?text=${encodeURIComponent('Olá! Tenho interesse no Sistema Montshop e gostaria de experimentar grátis por 7 dias.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-primary-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-primary-700 shadow-soft hover:shadow-glow transition-all flex items-center justify-center gap-2"
              >
                <span>Experimentar Grátis por 7 Dias</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="#recursos"
                className="bg-white text-primary-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg border-2 border-primary-500 hover:bg-primary-50 transition-all shadow-soft flex items-center justify-center gap-2"
              >
                Ver Recursos
              </a>
            </div>

            <div className="mt-8 sm:mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs sm:text-sm text-surface-600">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Shield className="text-primary-500 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span>Dados 100% Seguros</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <TrendingUp className="text-primary-600 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span>98% Satisfação</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <CheckCircle2 className="text-primary-600 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span className="hidden min-[375px]:inline">Suporte 24/7 via WhatsApp</span>
                <span className="min-[375px]:hidden">Suporte 24/7</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 bg-primary-50 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
                <span className="font-semibold text-primary-700 text-xs sm:text-sm">Sua marca no sistema</span>
              </div>
            </div>
          </div>

          <div className="relative lg:pl-8 animate-fade-in animation-delay-200">
            <div className="relative">
              <div className="glass rounded-3xl p-6 sm:p-8 shadow-card hover:shadow-card-hover transition-shadow duration-300 border border-white/80">
                <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-6 mb-6">
                  <div className="flex items-center justify-between text-white mb-4">
                    <span className="text-sm font-semibold opacity-90">Dashboard</span>
                    <span className="text-xl font-display font-bold">
                      <span className="text-white/70">Sistema </span>Montshop
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
                      <div className="text-xs text-white/80 mb-1">Vendas Hoje</div>
                      <div className="text-2xl font-bold text-white">R$ 12.450,00</div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
                        <div className="text-xs text-white/80 mb-1">Produtos</div>
                        <div className="text-xl font-bold text-white">1.284</div>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
                        <div className="text-xs text-white/80 mb-1">Clientes</div>
                        <div className="text-xl font-bold text-white">842</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { label: 'NFC-e emitidas', value: '45', color: 'bg-primary-100 text-primary-700' },
                    { label: 'Vendas realizadas', value: '67', color: 'bg-accent-100 text-accent-700' },
                    { label: 'Estoque atualizado', value: '100%', color: 'bg-primary-100 text-primary-700' },
                  ].map((stat, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-surface-600 text-sm">{stat.label}</span>
                      <span className={`${stat.color} px-3 py-1 rounded-lg text-sm font-semibold`}>
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-white rounded-xl sm:rounded-2xl p-2 sm:p-4 shadow-card animate-float hidden sm:block border border-surface-100">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="bg-primary-100 p-1.5 sm:p-2 rounded-lg">
                    <CheckCircle2 className="text-primary-600 w-4 h-4 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-xs text-surface-500">Status</div>
                    <div className="font-bold text-primary-600 text-xs sm:text-sm">Online</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 bg-white rounded-xl sm:rounded-2xl p-2 sm:p-4 shadow-card animate-float animation-delay-400 hidden sm:block border border-surface-100">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="bg-primary-100 p-1.5 sm:p-2 rounded-lg">
                    <TrendingUp className="text-primary-600 w-4 h-4 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-xs text-surface-500">Crescimento</div>
                    <div className="font-bold text-primary-600 text-xs sm:text-sm">+35%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
