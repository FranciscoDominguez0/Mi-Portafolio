export default function About() {
  return (
    <section id="sobre-mi" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column */}
          <div>
            <div className="inline-block bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg mb-6">
              <span className="text-sky-300 text-xs font-bold tracking-[0.2em] uppercase">Sobre mí</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Me apasiona crear soluciones digitales
            </h2>
            
            <p className="text-gray-400 leading-relaxed text-lg mb-8">
              Soy desarrollador de software enfocado en crear aplicaciones web centradas en el usuario.
              Me especializo en construir experiencias rápidas, claras y escalables, cuidando el diseño,
              la performance y la calidad del producto de principio a fin.
            </p>
            
            <a
              href="#contacto"
              className="inline-flex items-center gap-3 border border-white/10 hover:border-white/20 bg-[#171717] hover:bg-[#262626] text-white px-6 py-3 rounded-xl transition-all font-medium text-sm"
            >
              Conocer más sobre mí
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </a>
          </div>

          {/* Right Column */}
          <div className="relative border border-white/5 rounded-3xl bg-[#171717]/50 p-2 sm:p-0">
            {/* Inner Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 relative">
              {/* Divider lines for desktop */}
              <div className="hidden sm:block absolute top-1/2 left-4 right-4 h-px bg-white/5 -translate-y-1/2" />
              <div className="hidden sm:block absolute top-4 bottom-4 left-1/2 w-px bg-white/5 -translate-x-1/2" />
              
              {/* Stat 1 */}
              <div className="p-6 sm:p-8 flex items-center gap-5 border-b border-white/5 sm:border-none">
                <div className="shrink-0 w-14 h-14 bg-sky-200 rounded-2xl flex items-center justify-center text-neutral-900 shadow-lg shadow-sky-200/10">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white leading-none mb-1.5">1</h3>
                  <p className="text-gray-400 text-sm">Año de Exp.</p>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="p-6 sm:p-8 flex items-center gap-5 border-b border-white/5 sm:border-none">
                <div className="shrink-0 w-14 h-14 bg-sky-200 rounded-2xl flex items-center justify-center text-neutral-900 shadow-lg shadow-sky-200/10">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white leading-none mb-1.5">10+</h3>
                  <p className="text-gray-400 text-sm">Proyectos</p>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="p-6 sm:p-8 flex items-center gap-5 border-b border-white/5 sm:border-none">
                <div className="shrink-0 w-14 h-14 bg-sky-300/10 border border-sky-300/30 rounded-2xl flex items-center justify-center text-sky-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white leading-none mb-1.5">Full Stack</h3>
                  <p className="text-gray-400 text-sm">Desarrollo Web</p>
                </div>
              </div>

              {/* Stat 4 */}
              <div className="p-6 sm:p-8 flex items-center gap-5">
                <div className="shrink-0 w-14 h-14 bg-sky-200 rounded-2xl flex items-center justify-center text-neutral-900 shadow-lg shadow-sky-200/10">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white leading-none mb-1.5">100%</h3>
                  <p className="text-gray-400 text-sm">Compromiso</p>
                </div>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
