'use client'

import { ArrowRight, Check, PlayCircle } from 'lucide-react'

export default function CTA() {
  // Link para a playlist do curso MontShop no YouTube
  const courseLink = 'https://www.youtube.com/playlist?list=PLVRgzWLdnp7K9QqWLw_DXgiHU7bhyEInL'
  
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600">
      <div className="max-w-5xl mx-auto text-center">
        <div className="animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Pronto para transformar a gestão da sua loja?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-6 max-w-3xl mx-auto">
            Junte-se aos lojistas que já estão economizando tempo e aumentando suas vendas com o Sistema Montshop
          </p>
          
          {/* Partnership Message */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-8">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Sistema mais completo, desenvolvido em parceria com quem entende do seu negócio</span>
          </div>

          {/* Benefits List */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 md:mb-12">
            {[
              '7 dias grátis',
              'Sem cartão de crédito',
              'Cancele quando quiser',
              'Suporte via WhatsApp',
            ].map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-1.5 sm:gap-2 text-white animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Check className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8">
            <a
              href={`https://wa.me/5548998482590?text=${encodeURIComponent('Olá! Tenho interesse no Sistema Montshop e gostaria de começar o teste gratuito de 7 dias.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white text-primary-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-gray-100 transform hover:scale-105 transition-all shadow-2xl flex items-center justify-center gap-2"
            >
              Começar Teste Grátis Agora
              <ArrowRight className="group-hover:translate-x-1 transition-transform w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a
              href={courseLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/10 backdrop-blur-sm text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg border-2 border-white hover:bg-white/20 transform hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              <PlayCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              Ver o Sistema Completo
            </a>
            <a
              href="#contato"
              className="bg-transparent text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg border-2 border-white hover:bg-white/10 transform hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              Ver demonstração
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

