'use client'

import { Phone, MapPin, Instagram, Youtube, MessageCircle } from 'lucide-react'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Tangerine } from 'next/font/google'

const tangerine = Tangerine({ weight: '700', subsets: ['latin'] })

const frasesBiblicas = [
    "Tudo posso naquele que me fortalece. - Filipenses 4:13",
    "Porque eu bem sei os pensamentos que tenho a vosso respeito, diz o Senhor; pensamentos de paz, e não de mal. - Jeremias 29:11",
    "Entrega o teu caminho ao Senhor; confia nele, e ele o fará. - Salmos 37:5",
    "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito. - João 3:16",
    "O Senhor é o meu pastor; nada me faltará. - Salmos 23:1",
    "Lança sobre o Senhor o teu cuidado, e ele te susterá. - Salmos 55:22",
    "Confia no Senhor de todo o teu coração. - Provérbios 3:5",
    "Buscai primeiro o reino de Deus e a sua justiça. - Mateus 6:33",
    "Não temas, porque eu sou contigo. - Isaías 41:10",
    "O Senhor é a minha luz e a minha salvação. - Salmos 27:1",
    "Porque todo o que pede, recebe. - Mateus 7:8",
    "Bem-aventurado o homem que confia no Senhor. - Jeremias 17:7",
    "Ainda que eu ande pelo vale da sombra da morte, não temerei mal algum. - Salmos 23:4",
    "Porque a palavra de Deus é viva e eficaz. - Hebreus 4:12",
    "Eis que eu estou convosco todos os dias. - Mateus 28:20",
    "O Senhor é o meu auxílio, não temerei. - Hebreus 13:6",
    "Porque onde estiver o teu tesouro, aí estará também o teu coração. - Mateus 6:21",
    "Tudo tem o seu tempo determinado. - Eclesiastes 3:1",
    "O Senhor é a minha força e o meu cântico. - Êxodo 15:2",
    "Bem-aventurados os que têm fome e sede de justiça. - Mateus 5:6",
    "Não se turbe o vosso coração. - João 14:1",
    "A vossa fé seja a vossa esperança. - Hebreus 11:1",
    "Porque Deus não nos deu o espírito de temor, mas de poder. - 2 Timóteo 1:7",
    "O Senhor é bom, um refúgio em tempos de angústia. - Naum 1:7",
    "Buscai ao Senhor enquanto se pode achar. - Isaías 55:6",
    "Porque o Senhor é bom, e eterna é a sua misericórdia. - Salmos 100:5",
    "Espera no Senhor, anima-te, e ele fortalecerá o teu coração. - Salmos 27:14",
    "Porque eu sou o Senhor teu Deus que te segura pela tua mão direita. - Isaías 41:13",
    "O Senhor é a minha rocha, e o meu lugar forte. - Salmos 18:2",
    "Porque Deus é o que opera em vós tanto o querer como o efetuar. - Filipenses 2:13",
    "Bem-aventurado o homem que não anda no conselho dos ímpios. - Salmos 1:1",
    "Porque os meus pensamentos não são os vossos pensamentos. - Isaías 55:8",
    "O Senhor é a minha força e o meu escudo. - Salmos 28:7",
    "Buscai ao Senhor e a sua força. - 1 Crônicas 16:11",
    "Porque o Senhor é o nosso Deus, nós somos o povo do seu pasto. - Salmos 95:7",
    "Ainda que a figueira não floresça, eu me alegrarei no Senhor. - Habacuque 3:17-18",
    "Porque o Senhor é bom, a sua misericórdia dura para sempre. - Salmos 136:1",
    "O Senhor é o meu ajudador, não temerei o que me possa fazer o homem. - Hebreus 13:6",
    "Bem-aventurado o homem que não se deixa levar pelo conselho dos ímpios. - Salmos 1:1",
    "Porque eu sei os pensamentos que tenho a vosso respeito, diz o Senhor. - Jeremias 29:11",
    "O Senhor é a minha luz e a minha salvação; de quem terei medo? - Salmos 27:1",
    "Porque o Senhor é a minha defesa; e o meu Deus é a rocha do meu refúgio. - Salmos 94:22",
    "Buscai primeiro o reino de Deus, e todas estas coisas vos serão acrescentadas. - Mateus 6:33",
    "Porque o Senhor é bom, e eterna é a sua misericórdia. - Salmos 136:1",
    "O Senhor é o meu pastor; de nada terei falta. - Salmos 23:1",
    "Porque Deus não nos deu espírito de covardia, mas de poder, de amor e de moderação. - 2 Timóteo 1:7",
    "Espera no Senhor e tem bom ânimo. - Salmos 27:14",
    "Porque o Senhor é a minha força e o meu cântico. - Êxodo 15:2",
    "Bem-aventurado o homem que confia no Senhor, e cuja esperança é o Senhor. - Jeremias 17:7",
    "Porque eu sou o Senhor que te sara. - Êxodo 15:26",
    "O Senhor é a minha rocha, e o meu lugar forte, e o meu libertador. - Salmos 18:2",
    "Porque o Senhor é bom, um refúgio em tempos de angústia. - Naum 1:7",
    "Buscai ao Senhor enquanto se pode achar, invocai-o enquanto está perto. - Isaías 55:6",
    "Porque o Senhor é o nosso Deus, nós somos o povo do seu pasto e ovelhas da sua mão. - Salmos 95:7",
    "O Senhor é a minha luz e a minha salvação; a quem temerei? - Salmos 27:1",
    "Porque o Senhor é a minha defesa; e o meu Deus é a rocha do meu refúgio. - Salmos 94:22",
    "Buscai primeiro o reino de Deus e a sua justiça, e todas estas coisas vos serão acrescentadas. - Mateus 6:33",
    "Porque o Senhor é bom, e eterna é a sua misericórdia para com os que o temem. - Salmos 103:17",
    "O Senhor é o meu pastor; nada me faltará. - Salmos 23:1",
    "Porque Deus não nos deu espírito de medo, mas de poder, de amor e de moderação. - 2 Timóteo 1:7",
    "Espera no Senhor e tem bom ânimo, e ele fortalecerá o teu coração. - Salmos 27:14",
    "Porque o Senhor é a minha força e o meu cântico, e se tornou a minha salvação. - Êxodo 15:2",
    "Bem-aventurado o homem que confia no Senhor, e cuja esperança é o Senhor. - Jeremias 17:7",
    "Porque eu sou o Senhor que te sara. - Êxodo 15:26",
    "O Senhor é a minha rocha, e o meu lugar forte, e o meu libertador. - Salmos 18:2",
    "Porque o Senhor é bom, um refúgio em tempos de angústia. - Naum 1:7",
    "Buscai ao Senhor enquanto se pode achar, invocai-o enquanto está perto. - Isaías 55:6",
    "Porque o Senhor é o nosso Deus, nós somos o povo do seu pasto e ovelhas da sua mão. - Salmos 95:7",
    "O Senhor é a minha luz e a minha salvação; a quem temerei? - Salmos 27:1",
    "Porque o Senhor é a minha defesa; e o meu Deus é a rocha do meu refúgio. - Salmos 94:22",
    "Buscai primeiro o reino de Deus e a sua justiça, e todas estas coisas vos serão acrescentadas. - Mateus 6:33",
    "Porque o Senhor é bom, e eterna é a sua misericórdia para com os que o temem. - Salmos 103:17",
    "O Senhor é o meu pastor; nada me faltará. - Salmos 23:1",
    "Porque Deus não nos deu espírito de medo, mas de poder, de amor e de moderação. - 2 Timóteo 1:7",
    "Espera no Senhor e tem bom ânimo, e ele fortalecerá o teu coração. - Salmos 27:14",
    "Porque o Senhor é a minha força e o meu cântico, e se tornou a minha salvação. - Êxodo 15:2",
    "Bem-aventurado o homem que confia no Senhor, e cuja esperança é o Senhor. - Jeremias 17:7",
    "Porque eu sou o Senhor que te sara. - Êxodo 15:26",
    "O Senhor é a minha rocha, e o meu lugar forte, e o meu libertador. - Salmos 18:2",
    "Porque o Senhor é bom, um refúgio em tempos de angústia. - Naum 1:7",
    "Buscai ao Senhor enquanto se pode achar, invocai-o enquanto está perto. - Isaías 55:6",
    "Porque o Senhor é o nosso Deus, nós somos o povo do seu pasto e ovelhas da sua mão. - Salmos 95:7",
    "O Senhor é a minha luz e a minha salvação; a quem temerei? - Salmos 27:1",
    "Porque o Senhor é a minha defesa; e o meu Deus é a rocha do meu refúgio. - Salmos 94:22",
    "Buscai primeiro o reino de Deus e a sua justiça, e todas estas coisas vos serão acrescentadas. - Mateus 6:33",
    "Porque o Senhor é bom, e eterna é a sua misericórdia para com os que o temem. - Salmos 103:17",
    "O Senhor é o meu pastor; nada me faltará. - Salmos 23:1",
    "Porque Deus não nos deu espírito de medo, mas de poder, de amor e de moderação. - 2 Timóteo 1:7",
    "Espera no Senhor e tem bom ânimo, e ele fortalecerá o teu coração. - Salmos 27:14",
    "Porque o Senhor é a minha força e o meu cântico, e se tornou a minha salvação. - Êxodo 15:2",
    "Bem-aventurado o homem que confia no Senhor, e cuja esperança é o Senhor. - Jeremias 17:7",
    "Porque eu sou o Senhor que te sara. - Êxodo 15:26",
    "O Senhor é a minha rocha, e o meu lugar forte, e o meu libertador. - Salmos 18:2",
    "Porque o Senhor é bom, um refúgio em tempos de angústia. - Naum 1:7",
    "Buscai ao Senhor enquanto se pode achar, invocai-o enquanto está perto. - Isaías 55:6",
    "Porque o Senhor é o nosso Deus, nós somos o povo do seu pasto e ovelhas da sua mão. - Salmos 95:7",
    "O Senhor é a minha luz e a minha salvação; a quem temerei? - Salmos 27:1",
    "Porque o Senhor é a minha defesa; e o meu Deus é a rocha do meu refúgio. - Salmos 94:22",
    "Buscai primeiro o reino de Deus e a sua justiça, e todas estas coisas vos serão acrescentadas. - Mateus 6:33",
    "Porque o Senhor é bom, e eterna é a sua misericórdia para com os que o temem. - Salmos 103:17"
]

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  const [fraseAleatoria, setFraseAleatoria] = useState('')

  useEffect(() => {
    const indiceAleatorio = Math.floor(Math.random() * frasesBiblicas.length)
    setFraseAleatoria(frasesBiblicas[indiceAleatorio])
  }, [])

  return (
    <footer id="contato" className="bg-gray-900 text-gray-300 pt-4 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Divine Message */}
        <div className="text-center mb-4 pb-4 border-b border-gray-800">
          <p className={`${tangerine.className} text-4xl sm:text-5xl text-yellow-500 drop-shadow-lg`}>
            Deus é Fiel
          </p>
        </div>

        {/* Main Footer Content */}
        <div className="flex flex-col sm:flex-row justify-between gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Image 
                src="/logo.png" 
                alt="Sistema Montshop Logo" 
                width={40} 
                height={40}
                className="h-10 w-10 object-contain"
              />
              <span className="text-2xl font-bold text-white">
                <span className="text-gray-400">Sistema </span>
                <span className="text-white">Montshop</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Sistema completo de gestão para lojas. Simplifique sua rotina e venda mais.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/mont_tecnologia"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-primary-600 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-primary-600 transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
            {fraseAleatoria && (
              <p className="text-gray-500 text-sm mt-6 italic max-w-xs">
                {fraseAleatoria}
              </p>
            )}
          </div>

          {/* Contact */}
          <div className="sm:text-right">
            <h3 className="text-white font-bold text-lg mb-4">Contato</h3>
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
                className="inline-block bg-primary-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-primary-700 transition-colors"
              >
                Começar Grátis
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
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

        {/* SEO Keywords Footer (hidden but indexed) */}
        <div className="sr-only">
          Sistema para lojas, sistema de caixa, PDV, ponto de venda, gestão de estoque, 
          controle de estoque, emissão de nota fiscal, NFC-e, sistema comercial, 
          ERP para lojas, controle de vendas, sistema de vendas, software para comércio,
          gestão comercial, sistema PDV, frente de caixa, controle financeiro
        </div>
      </div>
    </footer>
  )
}

