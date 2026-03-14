'use client'

import { Phone, MapPin, Instagram, Youtube, MessageCircle } from 'lucide-react'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Tangerine } from 'next/font/google'

const tangerine = Tangerine({ weight: '700', subsets: ['latin'] })

const frasesBiblicas = [
  'Tudo posso naquele que me fortalece. - Filipenses 4:13',
  'Entrega o teu caminho ao Senhor; confia nele, e ele o fará. - Salmos 37:5',
  'Não temas, porque eu sou contigo. - Isaías 41:10',
  'O Senhor é o meu pastor; nada me faltará. - Salmos 23:1',
  'Confia no Senhor de todo o teu coração. - Provérbios 3:5',
]

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [fraseAleatoria, setFraseAleatoria] = useState('')

  useEffect(() => {
    const indiceAleatorio = Math.floor(Math.random() * frasesBiblicas.length)
    setFraseAleatoria(frasesBiblicas[indiceAleatorio])
  }, [])

  return (
    <footer id="contato" className="bg-surface-900 text-surface-300 pt-8 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 pb-6 border-b border-surface-700">
          <p className={`${tangerine.className} text-3xl sm:text-4xl text-primary-400`}>
            Deus é Fiel
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-8 sm:gap-12 mb-8 sm:mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/logo.png"
                alt="Sistema Montshop Logo"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
              <span className="text-xl font-display font-bold text-white">
                <span className="text-surface-400">Sistema </span>
                <span className="text-white">Montshop</span>
              </span>
            </div>
            <p className="text-surface-400 mb-4">
              Sistema completo de gestão para lojas. Simplifique sua rotina e venda mais.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/mont_tecnologia"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-surface-800 p-2 rounded-xl hover:bg-primary-600 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-surface-800 p-2 rounded-xl hover:bg-primary-600 transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
            {fraseAleatoria && (
              <p className="text-surface-500 text-sm mt-6 italic max-w-xs">
                {fraseAleatoria}
              </p>
            )}
          </div>

          <div className="sm:text-right">
            <h3 className="text-white font-display font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 sm:justify-end">
                <MessageCircle className="flex-shrink-0 mt-1 text-primary-400" size={18} />
                <a href="https://wa.me/5548998482590" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">
                  Suporte via WhatsApp
                </a>
              </li>
              <li className="flex items-start gap-2 sm:justify-end">
                <Phone className="flex-shrink-0 mt-1 text-primary-400" size={18} />
                <a href="tel:+5548998482590" className="hover:text-primary-400 transition-colors">
                  (48) 99848-2590
                </a>
              </li>
              <li className="flex items-start gap-2 sm:justify-end">
                <MapPin className="flex-shrink-0 mt-1 text-primary-400" size={18} />
                <span>
                  Biguaçu-SC<br />
                  Brasil
                </span>
              </li>
            </ul>
            <div className="mt-6 sm:text-right">
              <a
                href={`https://wa.me/5548998482590?text=${encodeURIComponent('Olá! Tenho interesse no Sistema Montshop e gostaria de começar o teste gratuito de 7 dias.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary-600 text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-primary-700 transition-colors"
              >
                Começar Grátis
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-surface-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-surface-400 text-sm text-center md:text-left">
              © {currentYear} Sistema Montshop. Todos os direitos reservados.
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="/termos-de-uso" className="hover:text-primary-400 transition-colors">
                Termos de Uso
              </a>
              <a href="/politica-de-privacidade" className="hover:text-primary-400 transition-colors">
                Política de Privacidade
              </a>
              <a href="/politica-de-privacidade#cookies" className="hover:text-primary-400 transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>

        <div className="sr-only">
          Sistema para lojas, sistema de caixa, PDV, ponto de venda, gestão de estoque,
          controle de estoque, emissão de nota fiscal, NFC-e, sistema comercial,
          ERP para lojas, controle de vendas, sistema de vendas, software para comércio,
          gestão comercial, sistema PDV, frente de caixa, controle financeiro, boletos
        </div>
      </div>
    </footer>
  )
}
