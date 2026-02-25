'use client'

import { Sparkles, CheckCircle2 } from 'lucide-react'

export default function Pricing() {
  const benefits = [
    'PDV completo e intuitivo',
    'Controle de estoque em tempo real',
    'Gestão de vendedores e comissões',
    'Relatórios detalhados',
    'Backup automático diário',
    'Suporte dedicado',
  ]

  return (
    <section id="planos" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            PLANOS E PREÇOS
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Planos que cabem no{' '}
            <span className="gradient-text">seu bolso</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções completas para gestão do seu negócio com o melhor custo-benefício
          </p>
        </div>

        {/* Main Pricing Card */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl blur-xl opacity-20"></div>
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-primary-600 to-accent-600 px-6 py-4 text-center">
              <div className="flex items-center justify-center gap-2 text-white">
                <Sparkles className="w-5 h-5" />
                <span className="font-semibold">Teste Grátis por 7 Dias</span>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="mb-4">
                  <span className="text-gray-600 text-lg">Planos a partir de</span>
                </div>
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className="text-5xl md:text-6xl lg:text-7xl font-bold gradient-text">
                    R$ 49,90
                  </span>
                  <span className="text-xl md:text-2xl text-gray-600">/mês</span>
                </div>
                <p className="text-gray-600 mt-2">
                  Sem cartão de crédito • Cancele quando quiser
                </p>
              </div>

              {/* Benefits Grid */}
              <div className="grid md:grid-cols-2 gap-3 md:gap-4 mb-8 max-w-2xl mx-auto">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-primary-50 transition-colors"
                  >
                    <CheckCircle2 className="flex-shrink-0 w-5 h-5 text-green-500" />
                    <span className="text-gray-700 text-sm md:text-base">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="text-center">
                <a
                  href="https://wa.me/5548998482590?text=Olá!%20Gostaria%20de%20fazer%20um%20orçamento%20mensal%20do%20Sistema%20Montshop."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary-600 to-accent-600 text-white px-8 md:px-12 py-4 md:py-5 rounded-full font-bold text-base md:text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <Sparkles className="w-5 h-5" />
                  Fazer Orçamento Mensal
                </a>
                <p className="text-sm text-gray-500 mt-4">
                  Resposta rápida via WhatsApp
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 text-sm md:text-base">
            💡 Todos os planos incluem <strong>suporte dedicado</strong> e <strong>atualizações gratuitas</strong>
          </p>
        </div>
      </div>
    </section>
  )
}

