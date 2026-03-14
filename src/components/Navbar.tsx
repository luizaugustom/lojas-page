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

  useEffect(() => {
    const fetchDownloadUrl = async () => {
      try {
        setIsLoadingDownload(true)
        const response = await fetch('/api/latest-release')
        if (response.ok) {
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
    { label: 'Ver utilização como gestor', href: 'https://www.youtube.com/watch?v=u_Sg5bHk8Ew&list=PLVRgzWLdnp7K6_6cjoVTExA-wX_JELqkG' },
    { label: 'Ver utilização como Vendedor', href: 'https://www.youtube.com/watch?v=neonCYcK2u4&list=PLVRgzWLdnp7KT7Y564KSY7VhKa0o8rLQ_' },
    { label: 'Ver Instalação Completa', href: 'https://www.youtube.com/watch?v=N_-SREI1848&list=PLVRgzWLdnp7J25IAPRPQItvdWF6SqkVxP' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass shadow-soft' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center space-x-3">
            <Image
              src="/logo.png"
              alt="Sistema Montshop Logo"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
            />
            <span className="text-xl md:text-2xl font-display font-bold">
              <span className="text-surface-600">Sistema </span>
              <span className="gradient-text">Montshop</span>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-surface-600 hover:text-primary-600 font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-surface-500 hover:text-surface-800 text-sm font-medium transition-colors"
            >
              Acesse o Sistema
            </button>
            <button
              onClick={() => setIsVideosModalOpen(true)}
              className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium border-2 border-primary-500 px-4 py-2 rounded-xl hover:bg-primary-50 transition-all"
            >
              <PlayCircle size={18} />
              Veja o sistema
            </button>
            <a
              href={`https://wa.me/5548998482590?text=${encodeURIComponent('Olá! Tenho interesse no Sistema Montshop e gostaria de começar o teste gratuito de 7 dias.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-600 text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-primary-700 shadow-soft hover:shadow-card transition-all"
            >
              Começar Grátis
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-surface-700 hover:text-primary-600 p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 bg-white rounded-2xl shadow-card mt-2 animate-slide-down border border-surface-100">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-surface-700 hover:bg-primary-50/50 hover:text-primary-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => { setIsModalOpen(true); setIsMobileMenuOpen(false); }}
              className="block w-full text-left px-4 py-3 text-surface-600 hover:bg-surface-50 border-t border-surface-100 mt-2"
            >
              Acesse o Sistema
            </button>
            <button
              onClick={() => { setIsVideosModalOpen(true); setIsMobileMenuOpen(false); }}
              className="flex items-center gap-2 px-4 py-3 mx-4 mt-2 text-primary-600 hover:bg-primary-50 rounded-xl font-medium border border-primary-200 w-full text-left"
            >
              <PlayCircle size={18} />
              Veja o Sistema
            </button>
            <a
              href={`https://wa.me/5548998482590?text=${encodeURIComponent('Olá! Tenho interesse no Sistema Montshop e gostaria de começar o teste gratuito de 7 dias.')}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block mx-4 mt-2 text-center bg-primary-600 text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-primary-700"
            >
              Começar Grátis
            </a>
          </div>
        )}

        {isModalOpen && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm min-h-screen overflow-y-auto"
            onClick={() => setIsModalOpen(false)}
          >
            <div
              className="bg-white rounded-2xl shadow-card max-w-md w-full p-6 sm:p-8 animate-fade-in my-auto max-h-[calc(100vh-2rem)] overflow-y-auto border border-surface-100"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-display font-bold text-surface-900">Acessar Sistema</h2>
                <button onClick={() => setIsModalOpen(false)} className="text-surface-400 hover:text-surface-600">
                  <CloseIcon size={24} />
                </button>
              </div>
              <div className="space-y-4">
                <a
                  href="https://montshop.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border-2 border-primary-500 rounded-xl hover:bg-primary-50 transition-all group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center group-hover:bg-primary-200">
                    <Globe className="text-primary-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-surface-900">Acessar pela Web</h3>
                    <p className="text-sm text-surface-500">Use o sistema direto no navegador</p>
                  </div>
                </a>
                <a
                  href={downloadUrl || '#'}
                  onClick={(e) => { if (!downloadUrl) { e.preventDefault(); alert('Carregando link de download...'); } }}
                  download
                  className={`flex items-center gap-4 p-4 border-2 rounded-xl transition-all group ${
                    downloadUrl ? 'border-surface-200 hover:bg-surface-50 hover:border-primary-500' : 'border-surface-200 opacity-60 cursor-wait'
                  }`}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-surface-100 rounded-xl flex items-center justify-center group-hover:bg-primary-100">
                    {isLoadingDownload ? (
                      <div className="animate-spin rounded-full h-6 w-6 border-2 border-primary-600 border-t-transparent" />
                    ) : (
                      <Download className="text-surface-600 group-hover:text-primary-600" size={24} />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-surface-900">{isLoadingDownload ? 'Carregando...' : 'Baixar Desktop'}</h3>
                    <p className="text-sm text-surface-500">{isLoadingDownload ? 'Buscando versão mais recente...' : 'Instale e use no seu computador'}</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        )}

        {isVideosModalOpen && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm min-h-screen overflow-y-auto"
            onClick={() => setIsVideosModalOpen(false)}
          >
            <div
              className="bg-white rounded-2xl shadow-card max-w-md w-full p-6 sm:p-8 animate-fade-in my-auto max-h-[calc(100vh-2rem)] overflow-y-auto border border-surface-100"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-display font-bold text-surface-900">Veja o Sistema</h2>
                <button onClick={() => setIsVideosModalOpen(false)} className="text-surface-400 hover:text-surface-600">
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
                    className="flex items-center gap-4 p-4 border-2 border-primary-500 rounded-xl hover:bg-primary-50 transition-all group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center group-hover:bg-primary-200">
                      <PlayCircle className="text-primary-600" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-surface-900">{option.label}</h3>
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
