'use client'

import { 
  ShoppingCart, 
  Package, 
  FileText, 
  BarChart2, 
  Users,
  Smartphone,
  TrendingUp,
  DollarSign,
  Calendar,
  CheckCircle2,
  MessageCircle,
  Star,
  Search,
  Heart,
  ShoppingBag,
  X
} from 'lucide-react'

export default function Screenshots() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-surface-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            INTERFACE MODERNA
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-surface-900 mb-4">
            Conheça o <span className="gradient-text">Sistema por Dentro</span>
          </h2>
          <p className="text-lg md:text-xl text-surface-600 max-w-3xl mx-auto">
            Interface intuitiva e moderna, desenvolvida pensando na experiência do usuário
          </p>
        </div>

        {/* Cards em Scroll Horizontal */}
        <div className="mb-16 relative">
          {/* Máscara de fade nas bordas */}
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 md:w-24 lg:w-32 bg-gradient-to-r from-surface-50/80 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 md:w-24 lg:w-32 bg-gradient-to-l from-surface-50/80 to-transparent z-10 pointer-events-none"></div>
          
          <div className="overflow-x-auto overflow-y-hidden scrollbar-hide -mx-4 sm:-mx-6 md:mx-0 px-4 sm:px-6 md:px-0">
            <div className="flex gap-3 sm:gap-4 md:gap-6 animate-scroll-infinite" style={{ width: 'fit-content' }}>
            {/* Dashboard Principal */}
            <div className="flex-shrink-0 w-[280px] min-[375px]:w-[300px] sm:w-[340px] md:w-[380px] animate-fade-in">
              <div className="bg-white rounded-2xl shadow-card p-3 sm:p-4 md:p-5 border border-surface-100 h-full">
            <div className="flex items-center justify-between mb-3 sm:mb-4 pb-2 sm:pb-3 border-b border-gray-200">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-400"></div>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-yellow-400"></div>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-400"></div>
              </div>
              <span className="text-[10px] sm:text-xs text-gray-500 font-mono">Dashboard</span>
            </div>

            <div className="space-y-2 sm:space-y-3">
              {/* Header */}
              <div className="flex items-center justify-between mb-2 sm:mb-3">
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-gray-900">Dashboard</h3>
                  <p className="text-gray-600 text-[10px] sm:text-xs">Visão geral</p>
                </div>
                <div className="flex items-center gap-1 sm:gap-1.5 bg-green-100 text-green-700 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-lg">
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-[10px] sm:text-xs font-semibold">Online</span>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg p-2 sm:p-3 text-white">
                  <div className="flex items-center justify-between mb-1 sm:mb-1.5">
                    <DollarSign size={14} className="sm:w-4 sm:h-4" />
                    <TrendingUp size={12} className="sm:w-3.5 sm:h-3.5 text-white/60" />
                  </div>
                  <div className="text-[10px] sm:text-xs text-white/80 mb-0.5">Vendas Hoje</div>
                  <div className="text-base sm:text-lg font-bold">R$ 12.450</div>
                  <div className="text-[10px] sm:text-xs text-white/80 mt-0.5 sm:mt-1">+15% vs ontem</div>
                </div>

                <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-2 sm:p-3 text-white">
                  <div className="flex items-center justify-between mb-1 sm:mb-1.5">
                    <ShoppingCart size={14} className="sm:w-4 sm:h-4" />
                    <CheckCircle2 size={12} className="sm:w-3.5 sm:h-3.5 text-white/60" />
                  </div>
                  <div className="text-[10px] sm:text-xs text-white/80 mb-0.5">Pedidos</div>
                  <div className="text-base sm:text-lg font-bold">67</div>
                  <div className="text-[10px] sm:text-xs text-white/80 mt-0.5 sm:mt-1">NFC-e automática</div>
                </div>

                <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-2 sm:p-3 text-white">
                  <div className="flex items-center justify-between mb-1 sm:mb-1.5">
                    <Package size={14} className="sm:w-4 sm:h-4" />
                    <BarChart2 size={12} className="sm:w-3.5 sm:h-3.5 text-white/60" />
                  </div>
                  <div className="text-[10px] sm:text-xs text-white/80 mb-0.5">Produtos</div>
                  <div className="text-base sm:text-lg font-bold">1.284</div>
                  <div className="text-[10px] sm:text-xs text-white/80 mt-0.5 sm:mt-1">Em estoque</div>
                </div>

                <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg p-2 sm:p-3 text-white">
                  <div className="flex items-center justify-between mb-1 sm:mb-1.5">
                    <Users size={14} className="sm:w-4 sm:h-4" />
                    <TrendingUp size={12} className="sm:w-3.5 sm:h-3.5 text-white/60" />
                  </div>
                  <div className="text-[10px] sm:text-xs text-white/80 mb-0.5">Clientes</div>
                  <div className="text-base sm:text-lg font-bold">842</div>
                  <div className="text-[10px] sm:text-xs text-white/80 mt-0.5 sm:mt-1">Cadastrados</div>
                </div>
              </div>

              {/* Chart Area */}
              <div className="bg-gray-50 rounded-lg p-2 sm:p-3">
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <h4 className="text-[10px] sm:text-xs font-bold text-gray-900">Vendas 7 Dias</h4>
                  <div className="flex items-center gap-0.5 sm:gap-1">
                    <Calendar size={10} className="sm:w-3 sm:h-3 text-gray-500" />
                    <span className="text-[10px] sm:text-xs text-gray-600">01/10-07/10</span>
                  </div>
                </div>
                <div className="flex items-end justify-between h-20 sm:h-24 gap-1 sm:gap-1.5">
                  {[65, 85, 72, 95, 88, 78, 92].map((height, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center">
                      <div 
                        className="w-full bg-gradient-to-t from-primary-600 to-primary-400 rounded-t transition-all hover:opacity-80 cursor-pointer"
                        style={{ height: `${height}%` }}
                      ></div>
                      <span className="text-[10px] sm:text-xs text-gray-500 mt-0.5 sm:mt-1">
                        {['S', 'T', 'Q', 'Q', 'S', 'S', 'D'][i]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
            </div>

          {/* Catálogo Público - Loja Online */}
          <div className="flex-shrink-0 w-[280px] min-[375px]:w-[300px] sm:w-[340px] md:w-[380px] animate-fade-in animation-delay-100">
            <div className="bg-white rounded-2xl shadow-card p-3 sm:p-4 md:p-5 border border-surface-100 h-full">
            <div className="flex items-center justify-between mb-3 sm:mb-4 pb-2 sm:pb-3 border-b border-gray-200">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-400"></div>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-yellow-400"></div>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-400"></div>
              </div>
              <span className="text-[10px] sm:text-xs text-gray-500 font-mono">Catálogo Digital</span>
            </div>

            <div className="space-y-2 sm:space-y-3">
              {/* Header do Catálogo */}
              <div className="bg-gradient-to-r from-primary-600 to-primary-500 rounded-lg p-2 sm:p-3 text-white">
                <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold mb-0.5">Loja Exemplo</h3>
                    <p className="text-white/90 text-[10px] sm:text-xs">Produtos de qualidade</p>
                  </div>
                  <div className="flex items-center gap-0.5 sm:gap-1 bg-white/20 backdrop-blur-sm px-1.5 sm:px-2 py-0.5 rounded-full">
                    <MessageCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                    <span className="text-[10px] sm:text-xs font-semibold">WhatsApp</span>
                  </div>
                </div>
                <div className="relative">
                  <Search className="absolute left-1.5 sm:left-2 top-1/2 transform -translate-y-1/2 text-white/70 w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  <input
                    type="text"
                    placeholder="Buscar produtos..."
                    className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg pl-6 sm:pl-8 pr-1.5 sm:pr-2 py-1 sm:py-1.5 text-white text-[10px] sm:text-xs placeholder-white/70 focus:outline-none focus:ring-1 focus:ring-white/50"
                  />
                </div>
              </div>

              {/* Produtos e Carrinho lado a lado */}
              <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                {/* Grid de Produtos */}
                <div className="space-y-1.5 sm:space-y-2">
                  {[
                    { 
                      name: 'Notebook Dell', 
                      price: 'R$ 2.899', 
                      discount: '12% OFF',
                      stock: true,
                      badge: 'Mais Vendido'
                    },
                    { 
                      name: 'Mouse Logitech', 
                      price: 'R$ 349', 
                      stock: true,
                      badge: null
                    },
                  ].map((product, i) => (
                    <div key={i} className="bg-gray-50 rounded-lg p-1 sm:p-1.5 hover:shadow-md transition-all border border-gray-200 hover:border-primary-300 relative group">
                      {product.badge && (
                        <div className="absolute top-0.5 sm:top-1 right-0.5 sm:right-1 bg-gradient-to-r from-red-500 to-orange-500 text-white text-[9px] sm:text-[10px] font-bold px-0.5 sm:px-1 py-0.5 rounded-full shadow-lg z-10">
                          {product.badge}
                        </div>
                      )}
                      {product.discount && (
                        <div className="absolute top-0.5 sm:top-1 left-0.5 sm:left-1 bg-green-500 text-white text-[9px] sm:text-[10px] font-bold px-0.5 sm:px-1 py-0.5 rounded-full shadow-lg z-10">
                          {product.discount}
                        </div>
                      )}
                      
                      {/* Imagem do Produto */}
                      <div className="w-full h-12 sm:h-16 bg-gradient-to-br from-primary-100 to-accent-100 rounded-lg mb-1 sm:mb-1.5 flex items-center justify-center relative overflow-hidden">
                        <Package className="text-primary-400 w-4 h-4 sm:w-5 sm:h-5" />
                        <div className="absolute top-0.5 right-0.5">
                          <Heart className="text-gray-400 hover:text-red-500 cursor-pointer transition-colors w-2.5 h-2.5 sm:w-3 sm:h-3" />
                        </div>
                      </div>

                      {/* Info do Produto */}
                      <div className="space-y-0.5">
                        <h4 className="font-bold text-gray-900 text-[9px] sm:text-[10px] line-clamp-2 leading-tight">{product.name}</h4>

                        {/* Preço */}
                        <div className="space-y-0.5">
                          <div className="text-xs sm:text-sm font-bold text-primary-600">{product.price}</div>
                          <div className="text-[9px] sm:text-[10px] text-gray-600">
                            {product.stock ? (
                              <span className="text-green-600 font-semibold">✓ Em estoque</span>
                            ) : (
                              <span className="text-red-600">✗ Indisponível</span>
                            )}
                          </div>
                        </div>

                        {/* Botão Adicionar */}
                        <button className="w-full bg-gradient-to-r from-primary-600 to-accent-600 text-white py-0.5 rounded-lg font-semibold text-[9px] sm:text-[10px] hover:from-primary-700 hover:to-accent-700 transition-all transform hover:scale-105 flex items-center justify-center gap-0.5">
                          <ShoppingBag size={9} className="sm:w-2.5 sm:h-2.5" />
                          Adicionar
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Carrinho Flutuante */}
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-1.5 sm:p-2 border-2 border-primary-200 shadow-lg flex flex-col">
                  <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                    <div className="flex items-center gap-1 sm:gap-1.5">
                      <div className="p-0.5 bg-primary-100 rounded-lg">
                        <ShoppingCart className="text-primary-600 w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-[9px] sm:text-[10px]">Carrinho</h4>
                        <p className="text-[9px] sm:text-[10px] text-gray-600">2 itens</p>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-[9px] sm:text-[10px] font-bold rounded-full w-3 h-3 sm:w-3.5 sm:h-3.5 flex items-center justify-center">
                        2
                      </div>
                    </div>
                  </div>

                  {/* Itens do Carrinho */}
                  <div className="space-y-0.5 sm:space-y-1 mb-1.5 sm:mb-2 flex-1 overflow-y-auto max-h-28 sm:max-h-32">
                    {[
                      { name: 'Notebook Dell', qty: 1, price: 'R$ 2.899' },
                      { name: 'Mouse Logitech', qty: 2, price: 'R$ 699' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between bg-white rounded-lg p-0.5 sm:p-1 border border-gray-200">
                        <div className="flex items-center gap-0.5 sm:gap-1 flex-1 min-w-0">
                          <div className="w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-br from-primary-100 to-accent-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Package className="text-primary-400 w-2 h-2 sm:w-2.5 sm:h-2.5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-gray-900 text-[9px] sm:text-[10px] truncate">{item.name}</div>
                            <div className="text-[9px] sm:text-[10px] text-gray-600">Qtd: {item.qty}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-0.5 sm:gap-1">
                          <span className="font-bold text-gray-900 text-[9px] sm:text-[10px]">{item.price}</span>
                          <button className="text-red-500 hover:text-red-700 transition-colors">
                            <X size={8} className="sm:w-2.5 sm:h-2.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Total e Finalização */}
                  <div className="border-t border-gray-200 pt-1 sm:pt-1.5 space-y-0.5 sm:space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-gray-700 text-[9px] sm:text-[10px]">Total:</span>
                      <span className="text-xs sm:text-sm font-bold text-primary-600">R$ 3.598</span>
                    </div>
                    
                    <div className="bg-green-50 border border-green-200 rounded-lg p-0.5 sm:p-1 mb-0.5 sm:mb-1">
                      <div className="flex items-center gap-0.5 text-green-700">
                        <CheckCircle2 size={8} className="sm:w-2.5 sm:h-2.5" />
                        <span className="text-[9px] sm:text-[10px] font-semibold">Frete grátis</span>
                      </div>
                    </div>

                    <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-1 sm:py-1.5 rounded-lg font-bold text-[9px] sm:text-[10px] hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-0.5 sm:gap-1">
                      <MessageCircle size={10} className="sm:w-3 sm:h-3" />
                      Finalizar via WhatsApp
                    </button>
                    
                    <p className="text-center text-[9px] sm:text-[10px] text-gray-500">
                      Enviado automaticamente
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
            </div>

          {/* PDV Screen */}
          <div className="flex-shrink-0 w-[280px] min-[375px]:w-[300px] sm:w-[340px] md:w-[380px] animate-fade-in animation-delay-200">
            <div className="bg-white rounded-2xl shadow-card p-3 sm:p-4 md:p-5 border border-surface-100 h-full">
              <div className="flex items-center justify-between mb-3 sm:mb-4 pb-2 sm:pb-3 border-b border-gray-200">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-400"></div>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-yellow-400"></div>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-400"></div>
                </div>
                <span className="text-[10px] sm:text-xs text-gray-500 font-mono">PDV - Ponto de Venda</span>
              </div>
              
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                  <div className="p-1 sm:p-1.5 bg-primary-100 rounded-lg">
                    <ShoppingCart className="text-primary-600 w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-gray-900">Ponto de Venda</h3>
                    <p className="text-[10px] sm:text-xs text-gray-600">Interface rápida</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-primary-50 to-purple-50 rounded-lg p-2 sm:p-3">
                  <div className="flex justify-between items-center mb-1.5 sm:mb-2">
                    <span className="text-[10px] sm:text-xs font-semibold text-gray-700">Total</span>
                    <span className="text-lg sm:text-xl font-bold text-primary-600">R$ 127,50</span>
                  </div>
                  <div className="space-y-1 sm:space-y-1.5">
                    {[
                      { name: 'Produto A', qty: 2, price: 'R$ 45,00' },
                      { name: 'Produto B', qty: 1, price: 'R$ 37,50' },
                    ].map((item, i) => (
                      <div key={i} className="flex justify-between items-center bg-white/80 rounded-lg p-1.5 sm:p-2">
                        <div>
                          <div className="font-medium text-gray-900 text-[10px] sm:text-xs">{item.name}</div>
                          <div className="text-[10px] sm:text-xs text-gray-600">Qtd: {item.qty}</div>
                        </div>
                        <div className="font-bold text-gray-900 text-[10px] sm:text-xs">{item.price}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                  <button className="bg-primary-600 text-white py-1.5 sm:py-2 rounded-lg font-semibold text-[10px] sm:text-xs hover:bg-primary-700 transition-colors">
                    Finalizar Venda
                  </button>
                  <button className="bg-gray-100 text-gray-700 py-1.5 sm:py-2 rounded-lg font-semibold text-[10px] sm:text-xs hover:bg-gray-200 transition-colors">
                    Cancelar
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Estoque Screen */}
          <div className="flex-shrink-0 w-[280px] min-[375px]:w-[300px] sm:w-[340px] md:w-[380px] animate-fade-in animation-delay-400">
            <div className="bg-white rounded-2xl shadow-card p-3 sm:p-4 md:p-5 border border-surface-100 h-full">
              <div className="flex items-center justify-between mb-3 sm:mb-4 pb-2 sm:pb-3 border-b border-gray-200">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-400"></div>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-yellow-400"></div>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-400"></div>
                </div>
                <span className="text-[10px] sm:text-xs text-gray-500 font-mono">Gestão de Estoque</span>
              </div>
              
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                  <div className="p-1 sm:p-1.5 bg-purple-100 rounded-lg">
                    <Package className="text-purple-600 w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-gray-900">Controle de Estoque</h3>
                    <p className="text-[10px] sm:text-xs text-gray-600">Produtos em estoque</p>
                  </div>
                </div>
                
                <div className="space-y-1.5 sm:space-y-2">
                  {[
                    { name: 'Notebook Dell', stock: 12, status: 'ok' },
                    { name: 'Mouse Logitech', stock: 45, status: 'ok' },
                    { name: 'Teclado Mecânico', stock: 3, status: 'low' },
                    { name: 'Monitor LG 24"', stock: 8, status: 'ok' },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center bg-gray-50 rounded-lg p-2 sm:p-2.5 hover:bg-gray-100 transition-colors">
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <div className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full ${
                          item.status === 'ok' ? 'bg-green-500' : 'bg-orange-500'
                        }`}></div>
                        <div>
                          <div className="font-medium text-gray-900 text-[10px] sm:text-xs">{item.name}</div>
                          <div className="text-[10px] sm:text-xs text-gray-600">Estoque: {item.stock} un.</div>
                        </div>
                      </div>
                      {item.status === 'low' && (
                        <span className="text-[10px] sm:text-xs bg-orange-100 text-orange-700 px-1.5 sm:px-2 py-0.5 rounded-full font-semibold">
                          Baixo
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Duplicação dos cards para loop infinito */}
          {/* Dashboard Principal */}
          <div className="flex-shrink-0 w-[280px] min-[375px]:w-[300px] sm:w-[340px] md:w-[380px]">
            <div className="bg-white rounded-2xl shadow-card p-3 sm:p-4 md:p-5 border border-surface-100 h-full">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-400"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                </div>
                <span className="text-xs text-gray-500 font-mono">Dashboard</span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="text-base font-bold text-gray-900">Dashboard</h3>
                    <p className="text-gray-600 text-xs">Visão geral</p>
                  </div>
                  <div className="flex items-center gap-1.5 bg-green-100 text-green-700 px-2 py-1 rounded-lg">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-xs font-semibold">Online</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg p-3 text-white">
                    <div className="flex items-center justify-between mb-1.5">
                      <DollarSign size={16} />
                      <TrendingUp size={14} className="text-white/60" />
                    </div>
                    <div className="text-xs text-white/80 mb-0.5">Vendas Hoje</div>
                    <div className="text-lg font-bold">R$ 12.450</div>
                    <div className="text-xs text-white/80 mt-1">+15% vs ontem</div>
                  </div>

                  <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-3 text-white">
                    <div className="flex items-center justify-between mb-1.5">
                      <ShoppingCart size={16} />
                      <CheckCircle2 size={14} className="text-white/60" />
                    </div>
                    <div className="text-xs text-white/80 mb-0.5">Pedidos</div>
                    <div className="text-lg font-bold">67</div>
                    <div className="text-xs text-white/80 mt-1">NFC-e automática</div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-3 text-white">
                    <div className="flex items-center justify-between mb-1.5">
                      <Package size={16} />
                      <BarChart2 size={14} className="text-white/60" />
                    </div>
                    <div className="text-xs text-white/80 mb-0.5">Produtos</div>
                    <div className="text-lg font-bold">1.284</div>
                    <div className="text-xs text-white/80 mt-1">Em estoque</div>
                  </div>

                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg p-3 text-white">
                    <div className="flex items-center justify-between mb-1.5">
                      <Users size={16} />
                      <TrendingUp size={14} className="text-white/60" />
                    </div>
                    <div className="text-xs text-white/80 mb-0.5">Clientes</div>
                    <div className="text-lg font-bold">842</div>
                    <div className="text-xs text-white/80 mt-1">Cadastrados</div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xs font-bold text-gray-900">Vendas 7 Dias</h4>
                    <div className="flex items-center gap-1">
                      <Calendar size={12} className="text-gray-500" />
                      <span className="text-xs text-gray-600">01/10-07/10</span>
                    </div>
                  </div>
                  <div className="flex items-end justify-between h-24 gap-1.5">
                    {[65, 85, 72, 95, 88, 78, 92].map((height, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center">
                        <div 
                          className="w-full bg-gradient-to-t from-primary-600 to-primary-400 rounded-t transition-all hover:opacity-80 cursor-pointer"
                          style={{ height: `${height}%` }}
                        ></div>
                        <span className="text-xs text-gray-500 mt-1">
                          {['S', 'T', 'Q', 'Q', 'S', 'S', 'D'][i]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Catálogo Público - Loja Online */}
          <div className="flex-shrink-0 w-[280px] min-[375px]:w-[300px] sm:w-[340px] md:w-[380px]">
            <div className="bg-white rounded-2xl shadow-card p-3 sm:p-4 md:p-5 border border-surface-100 h-full">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-400"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                </div>
                <span className="text-xs text-gray-500 font-mono">Catálogo Digital</span>
              </div>

              <div className="space-y-3">
                <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-lg p-3 text-white">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="text-sm font-bold mb-0.5">Loja Exemplo</h3>
                      <p className="text-white/90 text-xs">Produtos de qualidade</p>
                    </div>
                    <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded-full">
                      <MessageCircle size={12} />
                      <span className="text-xs font-semibold">WhatsApp</span>
                    </div>
                  </div>
                  <div className="relative">
                    <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white/70" size={14} />
                    <input
                      type="text"
                      placeholder="Buscar produtos..."
                      className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg pl-8 pr-2 py-1.5 text-white text-xs placeholder-white/70 focus:outline-none focus:ring-1 focus:ring-white/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-2">
                    {[
                      { name: 'Notebook Dell', price: 'R$ 2.899', discount: '12% OFF', stock: true, badge: 'Mais Vendido' },
                      { name: 'Mouse Logitech', price: 'R$ 349', stock: true, badge: null },
                    ].map((product, i) => (
                      <div key={i} className="bg-gray-50 rounded-lg p-1.5 hover:shadow-md transition-all border border-gray-200 hover:border-primary-300 relative group">
                        {product.badge && (
                          <div className="absolute top-1 right-1 bg-gradient-to-r from-red-500 to-orange-500 text-white text-[10px] font-bold px-1 py-0.5 rounded-full shadow-lg z-10">
                            {product.badge}
                          </div>
                        )}
                        {product.discount && (
                          <div className="absolute top-1 left-1 bg-green-500 text-white text-[10px] font-bold px-1 py-0.5 rounded-full shadow-lg z-10">
                            {product.discount}
                          </div>
                        )}
                        <div className="w-full h-16 bg-gradient-to-br from-primary-100 to-accent-100 rounded-lg mb-1.5 flex items-center justify-center relative overflow-hidden">
                          <Package className="text-primary-400" size={20} />
                          <div className="absolute top-0.5 right-0.5">
                            <Heart className="text-gray-400 hover:text-red-500 cursor-pointer transition-colors" size={12} />
                          </div>
                        </div>
                        <div className="space-y-0.5">
                          <h4 className="font-bold text-gray-900 text-[10px] line-clamp-2 leading-tight">{product.name}</h4>
                          <div className="space-y-0.5">
                            <div className="text-sm font-bold text-primary-600">{product.price}</div>
                            <div className="text-[10px] text-gray-600">
                              {product.stock ? (
                                <span className="text-green-600 font-semibold">✓ Em estoque</span>
                              ) : (
                                <span className="text-red-600">✗ Indisponível</span>
                              )}
                            </div>
                          </div>
                          <button className="w-full bg-gradient-to-r from-primary-600 to-accent-600 text-white py-0.5 rounded-lg font-semibold text-[10px] hover:from-primary-700 hover:to-accent-700 transition-all transform hover:scale-105 flex items-center justify-center gap-0.5">
                            <ShoppingBag size={10} />
                            Adicionar
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-2 border-2 border-primary-200 shadow-lg flex flex-col">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-1.5">
                        <div className="p-0.5 bg-primary-100 rounded-lg">
                          <ShoppingCart className="text-primary-600" size={14} />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 text-[10px]">Carrinho</h4>
                          <p className="text-[10px] text-gray-600">2 itens</p>
                        </div>
                      </div>
                      <div className="relative">
                        <div className="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-[10px] font-bold rounded-full w-3.5 h-3.5 flex items-center justify-center">
                          2
                        </div>
                      </div>
                    </div>
                    <div className="space-y-1 mb-2 flex-1 overflow-y-auto max-h-32">
                      {[
                        { name: 'Notebook Dell', qty: 1, price: 'R$ 2.899' },
                        { name: 'Mouse Logitech', qty: 2, price: 'R$ 699' },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between bg-white rounded-lg p-1 border border-gray-200">
                          <div className="flex items-center gap-1 flex-1 min-w-0">
                            <div className="w-5 h-5 bg-gradient-to-br from-primary-100 to-accent-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <Package className="text-primary-400" size={10} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="font-medium text-gray-900 text-[10px] truncate">{item.name}</div>
                              <div className="text-[10px] text-gray-600">Qtd: {item.qty}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            <span className="font-bold text-gray-900 text-[10px]">{item.price}</span>
                            <button className="text-red-500 hover:text-red-700 transition-colors">
                              <X size={10} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="border-t border-gray-200 pt-1.5 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-gray-700 text-[10px]">Total:</span>
                        <span className="text-sm font-bold text-primary-600">R$ 3.598</span>
                      </div>
                      <div className="bg-green-50 border border-green-200 rounded-lg p-1 mb-1">
                        <div className="flex items-center gap-0.5 text-green-700">
                          <CheckCircle2 size={10} />
                          <span className="text-[10px] font-semibold">Frete grátis</span>
                        </div>
                      </div>
                      <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-1.5 rounded-lg font-bold text-[10px] hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-1">
                        <MessageCircle size={12} />
                        Finalizar via WhatsApp
                      </button>
                      <p className="text-center text-[10px] text-gray-500">
                        Enviado automaticamente
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PDV Screen */}
          <div className="flex-shrink-0 w-[280px] min-[375px]:w-[300px] sm:w-[340px] md:w-[380px]">
            <div className="bg-white rounded-2xl shadow-card p-3 sm:p-4 md:p-5 border border-surface-100 h-full">
              <div className="flex items-center justify-between mb-3 sm:mb-4 pb-2 sm:pb-3 border-b border-gray-200">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-400"></div>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-yellow-400"></div>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-400"></div>
                </div>
                <span className="text-[10px] sm:text-xs text-gray-500 font-mono">PDV - Ponto de Venda</span>
              </div>
              
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                  <div className="p-1 sm:p-1.5 bg-primary-100 rounded-lg">
                    <ShoppingCart className="text-primary-600 w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-gray-900">Ponto de Venda</h3>
                    <p className="text-[10px] sm:text-xs text-gray-600">Interface rápida</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-primary-50 to-purple-50 rounded-lg p-2 sm:p-3">
                  <div className="flex justify-between items-center mb-1.5 sm:mb-2">
                    <span className="text-[10px] sm:text-xs font-semibold text-gray-700">Total</span>
                    <span className="text-lg sm:text-xl font-bold text-primary-600">R$ 127,50</span>
                  </div>
                  <div className="space-y-1 sm:space-y-1.5">
                    {[
                      { name: 'Produto A', qty: 2, price: 'R$ 45,00' },
                      { name: 'Produto B', qty: 1, price: 'R$ 37,50' },
                    ].map((item, i) => (
                      <div key={i} className="flex justify-between items-center bg-white/80 rounded-lg p-1.5 sm:p-2">
                        <div>
                          <div className="font-medium text-gray-900 text-[10px] sm:text-xs">{item.name}</div>
                          <div className="text-[10px] sm:text-xs text-gray-600">Qtd: {item.qty}</div>
                        </div>
                        <div className="font-bold text-gray-900 text-[10px] sm:text-xs">{item.price}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                  <button className="bg-primary-600 text-white py-1.5 sm:py-2 rounded-lg font-semibold text-[10px] sm:text-xs hover:bg-primary-700 transition-colors">
                    Finalizar Venda
                  </button>
                  <button className="bg-gray-100 text-gray-700 py-1.5 sm:py-2 rounded-lg font-semibold text-[10px] sm:text-xs hover:bg-gray-200 transition-colors">
                    Cancelar
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Estoque Screen */}
          <div className="flex-shrink-0 w-[280px] min-[375px]:w-[300px] sm:w-[340px] md:w-[380px]">
            <div className="bg-white rounded-2xl shadow-card p-3 sm:p-4 md:p-5 border border-surface-100 h-full">
              <div className="flex items-center justify-between mb-3 sm:mb-4 pb-2 sm:pb-3 border-b border-gray-200">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-400"></div>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-yellow-400"></div>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-400"></div>
                </div>
                <span className="text-[10px] sm:text-xs text-gray-500 font-mono">Gestão de Estoque</span>
              </div>
              
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                  <div className="p-1 sm:p-1.5 bg-purple-100 rounded-lg">
                    <Package className="text-purple-600 w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-gray-900">Controle de Estoque</h3>
                    <p className="text-[10px] sm:text-xs text-gray-600">Produtos em estoque</p>
                  </div>
                </div>
                
                <div className="space-y-1.5 sm:space-y-2">
                  {[
                    { name: 'Notebook Dell', stock: 12, status: 'ok' },
                    { name: 'Mouse Logitech', stock: 45, status: 'ok' },
                    { name: 'Teclado Mecânico', stock: 3, status: 'low' },
                    { name: 'Monitor LG 24"', stock: 8, status: 'ok' },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center bg-gray-50 rounded-lg p-2 sm:p-2.5 hover:bg-gray-100 transition-colors">
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <div className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full ${
                          item.status === 'ok' ? 'bg-green-500' : 'bg-orange-500'
                        }`}></div>
                        <div>
                          <div className="font-medium text-gray-900 text-[10px] sm:text-xs">{item.name}</div>
                          <div className="text-[10px] sm:text-xs text-gray-600">Estoque: {item.stock} un.</div>
                        </div>
                      </div>
                      {item.status === 'low' && (
                        <span className="text-[10px] sm:text-xs bg-orange-100 text-orange-700 px-1.5 sm:px-2 py-0.5 rounded-full font-semibold">
                          Baixo
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
            </div>
          </div>
        </div>

        {/* Mobile App Preview */}
        <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-white animate-fade-in animation-delay-600">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6">
                <Smartphone size={14} className="sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm font-semibold">Web, Desktop e Mobile</span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                Gerencie de Qualquer Lugar
              </h3>
              <p className="text-base sm:text-lg text-white/90 mb-4 sm:mb-6">
                Tenha acesso completo ao seu negócio através da web, aplicativo desktop ou mobile para Android e iOS.
              </p>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  'Visualize vendas em tempo real',
                  'Consulte estoque rapidamente',
                  'Receba notificações importantes',
                  'Emita relatórios na hora',
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 sm:gap-3">
                    <CheckCircle2 size={18} className="sm:w-5 sm:h-5 flex-shrink-0" />
                    <span className="text-sm sm:text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative mt-8 md:mt-0">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-white/20">
                <div className="bg-gray-900 rounded-xl sm:rounded-2xl p-3 sm:p-4 h-[400px] sm:h-[450px] md:h-[500px] flex flex-col">
                  {/* Mobile Header */}
                  <div className="flex items-center justify-between mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-gray-700">
                    <span className="text-white font-bold text-sm sm:text-base">
                      <span className="text-gray-400">Sistema </span>
                      <span className="text-white">Montshop</span>
                    </span>
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-400"></div>
                  </div>

                  {/* Mobile Stats */}
                  <div className="space-y-3 sm:space-y-4 flex-1">
                    <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg sm:rounded-xl p-3 sm:p-4">
                      <div className="text-white/80 text-xs sm:text-sm mb-1 sm:mb-2">Vendas do Dia</div>
                      <div className="text-xl sm:text-2xl font-bold text-white">R$ 12.450,00</div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                      <div className="bg-gray-800 rounded-lg sm:rounded-xl p-3 sm:p-4">
                        <div className="text-gray-400 text-[10px] sm:text-xs mb-1 sm:mb-2">Pedidos</div>
                        <div className="text-lg sm:text-xl font-bold text-white">67</div>
                      </div>
                      <div className="bg-gray-800 rounded-lg sm:rounded-xl p-3 sm:p-4">
                        <div className="text-gray-400 text-[10px] sm:text-xs mb-1 sm:mb-2">Produtos</div>
                        <div className="text-lg sm:text-xl font-bold text-white">1.284</div>
                      </div>
                    </div>

                    <div className="bg-gray-800 rounded-lg sm:rounded-xl p-3 sm:p-4">
                      <div className="flex items-center justify-between mb-2 sm:mb-3">
                        <span className="text-white text-xs sm:text-sm font-semibold">Últimas Vendas</span>
                        <FileText size={14} className="sm:w-4 sm:h-4 text-gray-400" />
                      </div>
                      <div className="space-y-1.5 sm:space-y-2">
                        {['R$ 127,50', 'R$ 89,90', 'R$ 245,00'].map((value, i) => (
                          <div key={i} className="flex items-center justify-between text-xs sm:text-sm">
                            <span className="text-gray-400">Venda #{67 - i}</span>
                            <span className="text-white font-semibold">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Mobile Bottom Nav */}
                  <div className="flex items-center justify-around pt-3 sm:pt-4 border-t border-gray-700">
                    <ShoppingCart size={16} className="sm:w-5 sm:h-5 text-primary-400" />
                    <Package size={16} className="sm:w-5 sm:h-5 text-gray-500" />
                    <BarChart2 size={16} className="sm:w-5 sm:h-5 text-gray-500" />
                    <Users size={16} className="sm:w-5 sm:h-5 text-gray-500" />
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

