export default function About() {
  return (
    <section id="sobre-mi" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-blue-900/10 pointer-events-none" />
      <div className="absolute -top-20 left-1/3 w-[520px] h-[520px] bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 right-1/4 w-[420px] h-[420px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative">
        <div className="max-w-4xl">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
              Sobre Mi
            </span>
          </h2>
          <div className="mt-4 h-px w-full bg-gradient-to-r from-purple-400/60 via-white/10 to-transparent" />

          <p className="mt-5 text-gray-400 leading-relaxed">
            Soy desarrollador de software enfocado en crear aplicaciones web centradas en el usuario. Me especializo en
            construir experiencias rápidas, claras y escalables, cuidando el diseño, la performance y la calidad del
            producto de principio a fin.
          </p>
        </div>
      </div>
    </section>
  )
}

