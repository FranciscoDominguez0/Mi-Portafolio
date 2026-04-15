import Image from 'next/image'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/10 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <div className="relative inline-block mb-8">
          <div className="absolute inset-0 bg-purple-500/30 rounded-full blur-xl scale-110" />
          <Image
            src="/foto-perfil.jpeg"
            alt="Francisco Domínguez"
            width={130}
            height={130}
            className="rounded-full relative z-10 ring-2 ring-purple-500/50 object-cover"
          />
        </div>

        <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-1.5 text-xs text-purple-400 mb-6">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Disponible para proyectos
        </div>

        <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4 leading-tight">
          Hola, soy{' '}
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Francisco Domínguez
          </span>
        </h1>

        <p className="text-xl text-gray-400 mb-3">Desarrollador de Software</p>
        <p className="text-gray-500 mb-10 max-w-xl mx-auto">
          Construyo soluciones reales con tecnología. Enfocado en crear experiencias web rápidas, escalables y con buen diseño.
        </p>

        <div className="flex justify-center gap-3 flex-wrap">
          <a
            href="https://github.com/tu-usuario"
            target="_blank"
            className="flex items-center gap-2 border border-white/10 bg-white/5 hover:bg-white/10 text-white px-5 py-2.5 rounded-xl text-sm transition-all"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/tu-usuario"
            target="_blank"
            className="flex items-center gap-2 border border-white/10 bg-white/5 hover:bg-white/10 text-white px-5 py-2.5 rounded-xl text-sm transition-all"
          >
            LinkedIn
          </a>
          <a
            href="/CV_FranciscoDominguez.pdf"
            download
            className="flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-5 py-2.5 rounded-xl text-sm transition-all font-medium"
          >
            Descargar CV
          </a>
          <a
            href="#contacto"
            className="flex items-center gap-2 border border-purple-500/30 hover:border-purple-500 text-purple-400 px-5 py-2.5 rounded-xl text-sm transition-all"
          >
            Contactar
          </a>
        </div>
      </div>
    </section>
  )
}