export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#0a0a0f]/80 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="font-bold text-white tracking-tight">
          FD<span className="text-purple-500">.</span>
        </span>
        <div className="flex gap-8 text-sm text-gray-400">
          <a href="#tecnologias" className="hover:text-purple-400 transition-colors">Tecnologías</a>
          <a href="#proyectos" className="hover:text-purple-400 transition-colors">Proyectos</a>
          <a href="#contacto" className="hover:text-purple-400 transition-colors">Contacto</a>
        </div>
      </div>
    </nav>
  )
}