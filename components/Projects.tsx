const projects = [
  {
    tag: 'Proyecto Destacado',
    title: 'Sistema de Tickets',
    description: 'Plataforma de gestión de soporte empresarial con seguimiento en tiempo real, asignación de agentes y panel de métricas.',
    tech: ['Java', 'Spring Boot', 'MySQL', 'React'],
    demo: '#',
    code: '#',
    align: 'left',
  },
  {
    tag: 'Proyecto Destacado',
    title: 'Sistema de Notificaciones',
    description: 'Plataforma de alertas y recordatorios multicanal con soporte para email, SMS y notificaciones push.',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    demo: '#',
    code: '#',
    align: 'right',
  },
  {
    tag: 'Proyecto Destacado',
    title: 'Sistema de Gestión Agrícola',
    description: 'Control de cultivos, recursos hídricos e insumos agrícolas con reportes exportables y alertas automáticas.',
    tech: ['HTML', 'JavaScript', 'PHP', 'MySQL'],
    demo: '#',
    code: '#',
    align: 'left',
  },
  {
    tag: 'Proyecto Destacado',
    title: 'Control de Documentos',
    description: 'Sistema de gestión documental empresarial con control de versiones, permisos por rol y búsqueda avanzada.',
    tech: ['Java', 'Swing', 'MySQL', 'PHP'],
    demo: '#',
    code: '#',
    align: 'right',
  },
]

export default function Projects() {
  return (
    <section
      id="proyectos"
      className="py-24 bg-[radial-gradient(120%_80%_at_50%_0%,rgba(124,58,237,0.18),rgba(10,10,15,0)_55%),linear-gradient(180deg,#09090f_0%,#0a0a12_100%)]"
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-purple-300 text-sm font-medium mb-2 tracking-widest uppercase">Trabajo</p>
          <h2 className="text-4xl font-bold text-white">Proyectos Destacados</h2>
        </div>

        <div className="flex flex-col gap-24">
          {projects.map((p) => (
            <div
              key={p.title}
              className={`flex flex-col ${p.align === 'right' ? 'sm:flex-row-reverse' : 'sm:flex-row'} gap-10 items-center`}
            >
              <div className="flex-1 bg-gradient-to-br from-[#181529] via-[#141323] to-[#0f101a] border border-purple-400/15 rounded-2xl aspect-video flex items-center justify-center text-purple-200/60 text-sm shadow-[0_20px_60px_-35px_rgba(124,58,237,0.9)]">
                Preview del proyecto
              </div>

              <div className="flex-1">
                <p className="text-purple-300 text-xs font-medium tracking-widest uppercase mb-2">{p.tag}</p>
                <h3 className="text-2xl font-bold text-white mb-4">{p.title}</h3>
                <div className="bg-gradient-to-br from-[#171727] to-[#11111d] border border-purple-400/10 rounded-xl p-5 mb-4 backdrop-blur-sm">
                  <p className="text-slate-300 text-sm leading-relaxed">{p.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tech.map(t => (
                    <span key={t} className="text-xs text-purple-200 bg-purple-500/15 border border-purple-400/30 px-3 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a href={p.demo}
                    className="bg-purple-600 hover:bg-purple-500 text-white text-sm px-5 py-2.5 rounded-xl transition-all font-medium shadow-[0_10px_30px_-12px_rgba(124,58,237,0.95)]">
                    Ver Demo
                  </a>
                  <a href={p.code}
                    className="border border-purple-300/25 bg-purple-500/10 hover:bg-purple-500/15 text-purple-100 text-sm px-5 py-2.5 rounded-xl transition-all">
                    Ver Código
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}