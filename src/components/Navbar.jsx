import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur border-b border-gray-800 px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">

        {/* Logo */}
        <a href="#hero" className="text-white font-bold text-lg">
          Fidelia <span className="text-green-400">GBAGUIDI</span>
        </a>

        {/* Liens desktop */}
        <div className="hidden md:absolute md:flex md:left-1/2 md:-translate-x-1/2 gap-8 text-sm text-gray-300">
          <a href="#hero" className="hover:text-green-400 transition-colors">Accueil</a>
          <a href="#about" className="hover:text-green-400 transition-colors">À propos</a>
          <a href="#skills" className="hover:text-green-400 transition-colors">Compétences</a>
          <a href="#projects" className="hover:text-green-400 transition-colors">Projets</a>
          <a href="#contact" className="hover:text-green-400 transition-colors">Contact</a>
        </div>

        {/* Bouton desktop */}
        <a
          href="#contact"
          className="hidden md:block text-xs font-semibold px-4 py-2 rounded-lg border border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all"
        >
          Me contacter
        </a>

        {/* Hamburger mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-300 hover:text-green-400 transition-colors"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* Menu mobile déroulant */}
      {open && (
        <div className="md:hidden mt-4 pb-4 border-t border-gray-800 flex flex-col gap-4 pt-4 px-2">
          <a onClick={() => setOpen(false)} href="#hero" className="text-gray-300 hover:text-green-400 transition-colors text-sm">Accueil</a>
          <a onClick={() => setOpen(false)} href="#about" className="text-gray-300 hover:text-green-400 transition-colors text-sm">À propos</a>
          <a onClick={() => setOpen(false)} href="#skills" className="text-gray-300 hover:text-green-400 transition-colors text-sm">Compétences</a>
          <a onClick={() => setOpen(false)} href="#projects" className="text-gray-300 hover:text-green-400 transition-colors text-sm">Projets</a>
          <a onClick={() => setOpen(false)} href="#contact" className="text-gray-300 hover:text-green-400 transition-colors text-sm">Contact</a>
          <a
            onClick={() => setOpen(false)}
            href="#contact"
            className="text-xs font-semibold px-4 py-2 rounded-lg border border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all text-center"
          >
            Me contacter
          </a>
        </div>
      )}
    </nav>
  )
}