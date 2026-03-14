'use client'

import { Clock, DollarSign, BarChart3, Shield } from 'lucide-react'

export default function Benefits() {
  const benefits = [
    {
      icon: Clock,
      title: 'Economize Tempo',
      description: 'Automatize processos e reduza em até 70% o tempo gasto com gestão manual.',
      color: 'bg-primary-100 text-primary-600',
    },
    {
      icon: DollarSign,
      title: 'Aumente as Vendas',
      description: 'Relatórios inteligentes ajudam você a identificar oportunidades e vender mais.',
      color: 'bg-primary-100 text-primary-600',
    },
    {
      icon: BarChart3,
      title: 'Controle Total',
      description: 'Tenha visão 360° do seu negócio com dashboards e relatórios em tempo real.',
      color: 'bg-primary-100 text-primary-600',
    },
    {
      icon: Shield,
      title: '100% Seguro',
      description: 'Seus dados protegidos com criptografia de ponta e backup automático.',
      color: 'bg-primary-100 text-primary-600',
    },
    {
      icon: BarChart3,
      title: 'Personalize com sua Marca',
      description: 'Use sua logo e as cores da sua empresa para criar uma identidade única no sistema.',
      color: 'bg-primary-600 text-white',
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-surface-900 mb-4">
            Por que escolher o <span className="text-surface-600">Sistema </span><span className="gradient-text">Montshop?</span>
          </h2>
          <p className="text-lg md:text-xl text-surface-600 max-w-3xl mx-auto mb-4">
            O sistema mais completo do mercado, desenvolvido em parceria com donos de lojas
          </p>
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Feito por quem entende do seu dia a dia</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group text-center p-4 sm:p-6 rounded-2xl bg-surface-50/50 hover:bg-white border border-transparent hover:border-primary-100 shadow-soft hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`inline-flex p-2.5 sm:p-3 md:p-4 rounded-2xl ${benefit.color} mb-3 sm:mb-4 group-hover:scale-110 transition-transform`}>
                <benefit.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
              </div>
              <h3 className="font-display text-base sm:text-lg md:text-xl font-bold text-surface-900 mb-1 sm:mb-2">{benefit.title}</h3>
              <p className="text-xs sm:text-sm md:text-base text-surface-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
