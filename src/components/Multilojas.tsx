'use client'

import { Store, Package, BarChart3, Users, FileText, Layers } from 'lucide-react'

export default function Multilojas() {
  const items = [
    {
      icon: Store,
      title: 'Várias lojas, um painel',
      description: 'Troque entre lojas em um clique e gerencie todas no mesmo lugar.',
    },
    {
      icon: Package,
      title: 'Produtos por loja',
      description: 'Cadastre e controle estoque, preços e categorias de cada loja separadamente.',
    },
    {
      icon: BarChart3,
      title: 'Relatórios por unidade',
      description: 'Vendas, comissões e métricas por loja ou consolidadas em um único dashboard.',
    },
    {
      icon: Users,
      title: 'Clientes e equipe',
      description: 'Gerencie cadastros e permissões de vendedores por loja ou em todas.',
    },
    {
      icon: FileText,
      title: 'Dados isolados ou compartilhados',
      description: 'Cada loja com seus próprios dados ou compartilhe produtos e clientes quando quiser.',
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Banner principal em destaque */}
        <div className="relative rounded-3xl md:rounded-[2rem] overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-accent-700 p-8 md:p-12 lg:p-16 shadow-2xl animate-fade-in">
          {/* Decoração de fundo */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
          </div>

          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-bold mb-6">
                  <Layers className="w-5 h-5" />
                  <span>FUNCIONALIDADE MULTILOJAS</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-bold text-white mb-4 leading-tight">
                  Gerencie dados e produtos de{' '}
                  <span className="text-white drop-shadow-lg underline decoration-4 decoration-white/40 underline-offset-4">
                    várias lojas
                  </span>
                  {' '}em um só lugar
                </h2>
                <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto lg:mx-0 mb-6">
                  Uma única conta, um único sistema. Cadastre quantas lojas precisar e alterne entre elas sem sair do painel. Produtos, estoque, vendas e relatórios organizados por loja.
                </p>
                <ul className="flex flex-wrap justify-center lg:justify-start gap-3 text-white/95 text-sm md:text-base font-medium">
                  <li className="flex items-center gap-2 bg-white/15 px-3 py-1.5 rounded-full">✓ Produtos por loja</li>
                  <li className="flex items-center gap-2 bg-white/15 px-3 py-1.5 rounded-full">✓ Estoque separado</li>
                  <li className="flex items-center gap-2 bg-white/15 px-3 py-1.5 rounded-full">✓ Relatórios por unidade</li>
                  <li className="flex items-center gap-2 bg-white/15 px-3 py-1.5 rounded-full">✓ Troca rápida entre lojas</li>
                </ul>
              </div>

              {/* Ícone visual multilojas */}
              <div className="flex-shrink-0 flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 shadow-xl">
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <Store className="w-10 h-10 text-white" />
                      <span className="text-xl font-bold text-white">Loja 1</span>
                    </div>
                    <div className="h-1 w-full bg-white/30 rounded-full mb-4" />
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Store className="w-8 h-8 text-white/90" />
                      <span className="text-lg font-semibold text-white/90">Loja 2</span>
                    </div>
                    <div className="h-1 w-full bg-white/20 rounded-full mb-2" />
                    <div className="flex items-center justify-center gap-2">
                      <Store className="w-6 h-6 text-white/70" />
                      <span className="text-base font-medium text-white/80">+ Mais lojas</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cards de benefícios multilojas */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 mt-10 md:mt-14">
          {items.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-xl border border-gray-100 hover:border-primary-200 transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <div className="bg-gradient-to-br from-primary-500 to-accent-600 p-3 rounded-xl w-fit mb-3 group-hover:scale-110 transition-transform">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">{item.title}</h3>
              <p className="text-xs sm:text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
