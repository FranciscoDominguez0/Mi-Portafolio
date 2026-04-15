import Image from 'next/image'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-24 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/10 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
              Hola, soy{' '}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent whitespace-nowrap">
                Francisco Domínguez
              </span>
              .
            </h1>

            <div className="mb-6 flex items-center justify-center lg:justify-start gap-2 text-sm text-white/70">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400/40 animate-ping" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
              </span>
              Disponible para proyectos
            </div>

            <p className="text-xl text-gray-300 mb-3">Desarrollador de Software</p>
            <p className="text-gray-400 mb-8 max-w-xl lg:max-w-none mx-auto lg:mx-0">
              Construyo aplicaciones web modernas centradas en el usuario, cuidando el diseño, la performance y la calidad del producto.
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-2">
              <a
                href="https://github.com/FranciscoDominguez0"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="h-11 w-11 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 grid place-items-center transition-all"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-white/85">
                  <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.4-4-1.4-.5-1.2-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.8 2.1 2.1 2.6.9.3 1.9.1 2.4-.2.1-.7.4-1.2.7-1.5-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.2 11.2 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.2 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6A12 12 0 0 0 12 .3Z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/francisco-dominguez-77953b33a/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="h-11 w-11 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 grid place-items-center transition-all"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-white/85">
                  <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.62-1.85 3.33-1.85 3.56 0 4.21 2.34 4.21 5.38v6.36ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.23 0Z" />
                </svg>
              </a>
            </div>

            <div className="mt-6 flex items-center justify-center lg:justify-start gap-3 flex-wrap">
              <a
                href="/CV_FranciscoDominguez.pdf"
                download
                className="bg-purple-600 hover:bg-purple-500 text-white px-5 py-2.5 rounded-xl text-sm transition-all font-medium shadow-[0_10px_30px_-12px_rgba(124,58,237,0.95)]"
              >
                Descargar CV
              </a>
              <a
                href="#contacto"
                className="border border-purple-500/30 hover:border-purple-500 text-purple-300 bg-purple-500/10 hover:bg-purple-500/15 px-5 py-2.5 rounded-xl text-sm transition-all"
              >
                Contactar
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px]">
              <div className="absolute inset-[-18%] rounded-full bg-gradient-to-br from-purple-500/35 to-blue-500/20 blur-2xl" />
              <div className="absolute inset-[-6%] rounded-full border border-purple-500/30 bg-white/[0.03] backdrop-blur-sm" />
              <div className="absolute inset-[0%] rounded-full bg-gradient-to-br from-purple-500/10 to-blue-500/10" />
              <Image
                src="/foto-perfil.jpeg"
                alt="Francisco Domínguez"
                fill
                sizes="(min-width: 1024px) 320px, 260px"
                className="rounded-full object-cover ring-2 ring-purple-500/40 relative z-10"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}