export default function Contact() {
  return (
    <section id="contacto" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 to-transparent pointer-events-none" />
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <p className="text-purple-400 text-sm font-medium mb-2 tracking-widest uppercase">¿Hablamos?</p>
          <h2 className="text-4xl font-bold text-white">Contacto</h2>
          <p className="text-gray-500 mt-3 max-w-md mx-auto">
            Contáctame para colaborar en proyectos o prácticas profesionales.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Estoy abierto a oportunidades de trabajo, proyectos freelance y colaboraciones. Si tienes una idea o proyecto en mente, me encantaría escucharte.
            </p>
            <div className="flex flex-col gap-3">
              <a href="https://github.com/tu-usuario" target="_blank"
                className="flex items-center gap-3 border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] px-4 py-3 rounded-xl text-sm text-gray-300 transition-all">
                GitHub
              </a>
              <a href="https://linkedin.com/in/tu-usuario" target="_blank"
                className="flex items-center gap-3 border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] px-4 py-3 rounded-xl text-sm text-gray-300 transition-all">
                LinkedIn
              </a>
              <a href="mailto:francisco@email.com"
                className="flex items-center gap-3 border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] px-4 py-3 rounded-xl text-sm text-gray-300 transition-all">
                francisco@email.com
              </a>
            </div>
          </div>

          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Nombre"
              className="bg-white/[0.03] border border-white/10 focus:border-purple-500/50 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-colors"
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-white/[0.03] border border-white/10 focus:border-purple-500/50 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-colors"
            />
            <input
              type="text"
              placeholder="Asunto"
              className="bg-white/[0.03] border border-white/10 focus:border-purple-500/50 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-colors"
            />
            <textarea
              placeholder="Mensaje"
              rows={4}
              className="bg-white/[0.03] border border-white/10 focus:border-purple-500/50 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-colors resize-none"
            />
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-500 text-white py-3 rounded-xl text-sm font-medium transition-all"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}