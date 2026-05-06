export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#0a0a0f]/80 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center gap-4">
        <span className="font-bold text-white tracking-tight text-base sm:text-lg">
          FD<span className="text-purple-500">.</span>
        </span>
        <div className="flex flex-wrap justify-end gap-4 sm:gap-8 text-xs sm:text-sm text-gray-400">
          <a href="#sobre-mi"    className="hover:text-purple-400 transition-colors">Sobre mí</a>
          <a href="#tecnologias" className="hover:text-purple-400 transition-colors">Tecnologías</a>
          <a href="#proyectos"   className="hover:text-purple-400 transition-colors">Proyectos</a>
          <a href="#contacto"    className="hover:text-purple-400 transition-colors">Contacto</a>
        </div>
      </div>
    </nav>
  )
}