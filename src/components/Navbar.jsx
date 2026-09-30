export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur border-b border-gray-800 px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <a href="#hero" className="text-white font-bold text-xl">
          Fidelia <span className="text-green-400">GBAGUIDI</span>
        </a>
        <div className="absolute left-1/2 -translate-x-1/2 flex gap-8 text-sm text-gray-300">
          <a href="#hero" className="hover:text-green-400 transition-colors">Accueil</a>
          <a href="#about" className="hover:text-green-400 transition-colors">A propos</a>
          <a href="#skills" className="hover:text-green-400 transition-colors">Competences</a>
          <a href="#projects" className="hover:text-green-400 transition-colors">Projets</a>
          <a href="#contact" className="hover:text-green-400 transition-colors">Contact</a>
        </div>
        <a href="#contact" className="text-xs font-semibold px-4 py-2 rounded-lg border border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all">
          Me contacter
        </a>
      </div>
    </nav>
  )
}