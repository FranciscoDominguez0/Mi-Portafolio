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
    <section id="proyectos" className="py-24">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-purple-400 text-sm font-medium mb-2 tracking-widest uppercase">Trabajo</p>
          <h2 className="text-4xl font-bold text-white">Proyectos Destacados</h2>
        </div>

        <div className="flex flex-col gap-20">
          {projects.map((p) => (
            <div
              key={p.title}
              className={`flex flex-col ${p.align === 'right' ? 'sm:flex-row-reverse' : 'sm:flex-row'} gap-10 items-center`}
            >
              {/* Preview */}
              <div className="flex-1 w-full bg-white/[0.03] border border-white/5 rounded-2xl aspect-video flex items-center justify-center text-gray-600 text-sm">
                Vista previa del proyecto
              </div>

              {/* Texto */}
              <div className="flex-1 w-full">
                <p className="text-purple-400 text-xs font-medium tracking-widest uppercase mb-2">{p.tag}</p>
                <h3 className="text-2xl font-bold text-white mb-4">{p.title}</h3>
                <div className="bg-[#13131a] border border-white/5 rounded-xl p-5 mb-4">
                  <p className="text-gray-400 text-sm leading-relaxed">{p.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tech.map(t => (
                    <span key={t} className="text-xs text-purple-300 bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a href={p.demo} className="bg-purple-600 hover:bg-purple-500 text-white text-sm px-5 py-2.5 rounded-xl transition-all font-medium">
                    Ver Demo
                  </a>
                  <a href={p.code} className="border border-white/10 bg-white/5 hover:bg-white/10 text-white text-sm px-5 py-2.5 rounded-xl transition-all">
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