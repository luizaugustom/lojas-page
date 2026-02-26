'use client'

import { useState, useEffect } from 'react'
import { Menu, X, PlayCircle, Globe, Download, X as CloseIcon } from 'lucide-react'
import Image from 'next/image'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isVideosModalOpen, setIsVideosModalOpen] = useState(false)
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null)
  const [isLoadingDownload, setIsLoadingDownload] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false)
        setIsVideosModalOpen(false)
      }
    }
    
    if (isModalOpen || isVideosModalOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleEscape)
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleEscape)
    }
  }, [isModalOpen, isVideosModalOpen])

  // Buscar link de download mais recente do GitHub
  useEffect(() => {
    const fetchDownloadUrl = async () => {
      try {
        setIsLoadingDownload(true)
        const response = await fetch('/api/latest-release')
        if (response.ok) {
          const data = await response.json()
          // Usar o endpoint de download direto ao invés do link do GitHub
          setDownloadUrl('/api/download')
        }
      } catch (error) {
        console.error('Erro ao buscar link de download:', error)
      } finally {
        setIsLoadingDownload(false)
      }
    }

    fetchDownloadUrl()
  }, [])

  const navItems = [
    { label: 'Recursos', href: '#recursos' },
    { label: 'Planos', href: '#planos' },
    { label: 'FAQ', href: '#faq' },
  ]

  const videoOptions = [
    {
      label: 'Ver utilização como gestor',
      href: 'https://www.youtube.com/watch?v=u_Sg5bHk8Ew&list=PLVRgzWLdnp7K6_6cjoVTExA-wX_JELqkG',
    },
    {
      label: 'Ver utilização como Vendedor',
      href: 'https://www.youtube.com/watch?v=neonCYcK2u4&list=PLVRgzWLdnp7KT7Y564KSY7VhKa0o8rLQ_',
    },
    {
      label: 'Ver Instalação Completa',
      href: 'https://www.youtube.com/watch?v=N_-SREI1848&list=PLVRgzWLdnp7J25IAPRPQItvdWF6SqkVxP',
    },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Image 
              src="/logo.png" 
              alt="Sistema Montshop Logo" 
              width={40} 
              height={40}
              className="h-10 w-10 object-contain"
            />
            <span className="text-2xl font-bold">
              <span className="text-gray-600">Sistema </span>
              <span className="gradient-text">Montshop</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-gray-600 hover:text-gray-900 text-sm font-normal transition-colors"
            >
              Acesse o Sistema
            </button>
            <button
              onClick={() => setIsVideosModalOpen(true)}
              className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors border-2 border-primary-600 px-4 py-2 rounded-full hover:bg-primary-50"
            >
              <PlayCircle size={18} />
              <span>Veja o sistema</span>
            </button>
            <a
              href={`https://wa.me/5548998482590?text=${encodeURIComponent('Olá! Tenho interesse no Sistema Montshop e gostaria de começar o teste gratuito de 7 dias.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-primary-700 transform hover:scale-105 transition-all shadow-lg hover:shadow-xl"
            >
              Começar Grátis
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-700 hover:text-primary-600"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 bg-white rounded-lg shadow-xl mt-2 animate-slide-down">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => {
                setIsModalOpen(true)
                setIsMobileMenuOpen(false)
              }}
              className="block w-full text-left px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors border-t border-gray-100 mt-2"
            >
              Acesse o Sistema
            </button>
            <button
              onClick={() => {
                setIsVideosModalOpen(true)
                setIsMobileMenuOpen(false)
              }}
              className="flex items-center gap-2 px-4 py-3 mx-4 mt-2 text-primary-600 hover:bg-primary-50 rounded-lg font-medium transition-colors border border-primary-200 w-full text-left"
            >
              <PlayCircle size={18} />
              <span>Veja o Sistema</span>
            </button>
            <a
              href={`https://wa.me/5548998482590?text=${encodeURIComponent('Olá! Tenho interesse no Sistema Montshop e gostaria de começar o teste gratuito de 7 dias.')}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block mx-4 mt-2 text-center bg-primary-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-primary-700 transition-colors"
            >
              Começar Grátis
            </a>
          </div>
        )}

        {/* Modal de Acesso ao Sistema */}
        {isModalOpen && (
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm min-h-screen overflow-y-auto"
            onClick={() => setIsModalOpen(false)}
          >
            <div 
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 sm:p-8 animate-fade-in my-auto max-h-[calc(100vh-2rem)] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Acessar Sistema</h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <CloseIcon size={24} />
                </button>
              </div>
              
              <div className="space-y-4">
                <a
                  href="https://montshop.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border-2 border-primary-600 rounded-xl hover:bg-primary-50 transition-all group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                    <Globe className="text-primary-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Acessar pela Web</h3>
                    <p className="text-sm text-gray-500">Use o sistema direto no navegador</p>
                  </div>
                </a>
                
                <a
                  href={downloadUrl || '#'}
                  onClick={(e) => {
                    if (!downloadUrl) {
                      e.preventDefault()
                      alert('Carregando link de download...')
                    }
                  }}
                  download
                  className={`flex items-center gap-4 p-4 border-2 rounded-xl transition-all group ${
                    downloadUrl 
                      ? 'border-gray-300 hover:bg-gray-50 hover:border-primary-600' 
                      : 'border-gray-200 opacity-60 cursor-wait'
                  }`}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-primary-100 transition-colors">
                    {isLoadingDownload ? (
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary-600"></div>
                    ) : (
                      <Download className="text-gray-600 group-hover:text-primary-600" size={24} />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">
                      {isLoadingDownload ? 'Carregando...' : 'Baixar Desktop'}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {isLoadingDownload ? 'Buscando versão mais recente...' : 'Instale e use no seu computador'}
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Modal de Vídeos - Veja o Sistema */}
        {isVideosModalOpen && (
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm min-h-screen overflow-y-auto"
            onClick={() => setIsVideosModalOpen(false)}
          >
            <div 
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 sm:p-8 animate-fade-in my-auto max-h-[calc(100vh-2rem)] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Veja o Sistema</h2>
                <button
                  onClick={() => setIsVideosModalOpen(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <CloseIcon size={24} />
                </button>
              </div>
              
              <div className="space-y-4">
                {videoOptions.map((option) => (
                  <a
                    key={option.href}
                    href={option.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 border-2 border-primary-600 rounded-xl hover:bg-primary-50 transition-all group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                      <PlayCircle className="text-primary-600" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{option.label}</h3>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

