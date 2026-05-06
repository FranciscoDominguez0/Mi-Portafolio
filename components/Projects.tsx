'use client'

import { useState } from 'react'

const projects = [
  {
    tag: 'Proyecto Destacado',
    title: 'Sistema de Tickets',
    description: 'Plataforma de gestión de soporte empresarial con seguimiento en tiempo real, asignación de agentes y panel de métricas.',
    tech: ['PHP', 'MySQL', 'JavaScript', 'CSS'],
    image: '/Tickets.png',
    demo: 'https://soporte.vigitecpanama.com/',
    code: 'https://github.com/FranciscoDominguez0/Tickets',
    align: 'left',
  },
  {
    tag: 'Proyecto Destacado',
    title: 'Sistema de Notificaciones',
    description: 'Plataforma de alertas y recordatorios multicanal con soporte para email, SMS y notificaciones push.',
    tech: ['Node.js', 'Express', 'React', 'TypeScript', 'Nodemailer'],
    image: '/Notificaciones.png',
    demo: '#',
    code: 'https://github.com/FranciscoDominguez0/sistema-recordatorios',
    align: 'right',
  },
  {
    tag: 'Proyecto Destacado',
    title: 'Sistema de Gestión Agrícola',
    description: 'Control de cultivos, recursos hídricos e insumos agrícolas con reportes exportables y alertas automáticas.',
    tech: ['PHP', 'MySQL', 'JavaScript', 'CSS'],
    image: '/sistema-agricola.png',
    demo: '#',
    code: 'https://github.com/FranciscoDominguez0/CooperativaAgricola',
    align: 'left',
  },
  {
    tag: 'Proyecto Destacado',
    title: 'Control de Documentos',
    description: 'Sistema de gestión documental empresarial con control de versiones, permisos por rol y búsqueda avanzada.',
    tech: ['Java', 'Swing', 'MySQL'],
    image: '/Gestion_de_documentos_UP.png',
    demo: '#',
    code: 'https://github.com/FranciscoDominguez0/GraduacionUP',
    align: 'right',
  },
]

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null)

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
              <div
                className={`flex-1 w-full bg-[#0f0f14] border border-white/5 rounded-2xl overflow-hidden flex items-center justify-center text-gray-600 text-sm ${
                  p.title === 'Sistema de Tickets' ||
                  p.title === 'Sistema de Notificaciones' ||
                  p.title === 'Sistema de Gestión Agrícola' ||
                  p.title === 'Control de Documentos'
                    ? 'aspect-[4/3] sm:aspect-[16/10]'
                    : 'aspect-video'
                }`}
              >
                {p.image && p.title === 'Sistema de Tickets' ? (
                  <div className="relative h-full w-full overflow-hidden p-3 sm:p-4">
                    <div
                      className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#24123a] from-[5%] via-[#3b1d5c]/75 via-[48%] to-[#7a2e6d] to-[95%]"
                      aria-hidden
                    />
                    <div
                      className="pointer-events-none absolute -left-12 top-0 h-52 w-52 rounded-full bg-[#7a2e6d]/50 blur-[64px]"
                      aria-hidden
                    />
                    <div
                      className="pointer-events-none absolute -bottom-16 right-1/4 h-72 w-72 rounded-full bg-[#24123a]/45 blur-[80px]"
                      aria-hidden
                    />
                    <div className="relative z-10 flex h-full min-h-0 w-full flex-col rounded-xl border border-white/15 bg-black/10 p-2 sm:p-3">
                      <div className="min-h-0 flex-1 overflow-hidden rounded-lg border border-white/15 bg-black shadow-[0_14px_50px_rgba(0,0,0,0.55)]">
                        <button
                          type="button"
                          onClick={() => setSelectedImage({ src: p.image, title: p.title })}
                          className="h-full w-full cursor-zoom-in"
                          aria-label={`Ampliar imagen de ${p.title}`}
                        >
                          <img
                            src={p.image}
                            alt={`Vista previa de ${p.title}`}
                            className="h-full w-full object-contain p-0"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                ) : p.image && p.title === 'Sistema de Notificaciones' ? (
                  <div className="relative h-full w-full overflow-hidden p-3 sm:p-4">
                    <div
                      className="pointer-events-none absolute inset-0 bg-gradient-to-tl from-[#24123a] from-[12%] via-[#3b1d5c]/60 via-[38%] to-[#7a2e6d]/85 to-[82%]"
                      aria-hidden
                    />
                    <div
                      className="pointer-events-none absolute -right-8 top-1/4 h-60 w-60 -translate-y-1/2 rounded-full bg-[#3b1d5c]/55 blur-[72px]"
                      aria-hidden
                    />
                    <div
                      className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 translate-y-1/4 rounded-full bg-[#7a2e6d]/40 blur-[56px]"
                      aria-hidden
                    />
                    <div className="relative z-10 flex h-full min-h-0 w-full flex-col rounded-xl border border-white/15 bg-black/10 p-2 sm:p-3">
                      <div className="min-h-0 flex-1 overflow-hidden rounded-lg border border-white/15 bg-black shadow-[0_14px_50px_rgba(0,0,0,0.55)]">
                        <button
                          type="button"
                          onClick={() => setSelectedImage({ src: p.image, title: p.title })}
                          className="h-full w-full cursor-zoom-in"
                          aria-label={`Ampliar imagen de ${p.title}`}
                        >
                          <img
                            src={p.image}
                            alt={`Vista previa de ${p.title}`}
                            className="h-full w-full object-contain p-0"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                ) : p.image && p.title === 'Sistema de Gestión Agrícola' ? (
                  <div className="relative h-full w-full overflow-hidden p-3 sm:p-4">
                    <div
                      className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#24123a]/90 from-[8%] via-[#3b1d5c] via-[52%] to-[#7a2e6d]/80 to-[90%]"
                      aria-hidden
                    />
                    <div
                      className="pointer-events-none absolute left-1/2 top-1/2 h-[min(90%,22rem)] w-[min(95%,28rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3b1d5c]/35 blur-[96px]"
                      aria-hidden
                    />
                    <div
                      className="pointer-events-none absolute -bottom-10 left-0 h-48 w-48 rounded-full bg-[#7a2e6d]/45 blur-[52px]"
                      aria-hidden
                    />
                    <div className="relative z-10 flex h-full min-h-0 w-full flex-col rounded-xl border border-white/15 bg-black/10 p-2 sm:p-3">
                      <div className="min-h-0 flex-1 overflow-hidden rounded-lg border border-white/15 bg-black shadow-[0_14px_50px_rgba(0,0,0,0.55)]">
                        <button
                          type="button"
                          onClick={() => setSelectedImage({ src: p.image, title: p.title })}
                          className="h-full w-full cursor-zoom-in"
                          aria-label={`Ampliar imagen de ${p.title}`}
                        >
                          <img
                            src={p.image}
                            alt={`Vista previa de ${p.title}`}
                            className="h-full w-full object-contain p-0"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                ) : p.image && p.title === 'Control de Documentos' ? (
                  <div className="relative h-full w-full overflow-hidden p-3 sm:p-4">
                    <div
                      className="pointer-events-none absolute inset-0 bg-gradient-to-bl from-[#24123a] from-[10%] via-[#3b1d5c]/80 via-[56%] to-[#7a2e6d]/70 to-[92%]"
                      aria-hidden
                    />
                    <div
                      className="pointer-events-none absolute -left-6 top-1/3 h-56 w-56 -translate-y-1/2 rounded-full bg-[#3b1d5c]/45 blur-[70px]"
                      aria-hidden
                    />
                    <div
                      className="pointer-events-none absolute -right-10 bottom-0 h-64 w-64 translate-y-1/4 rounded-full bg-[#7a2e6d]/50 blur-[64px]"
                      aria-hidden
                    />
                    <div className="relative z-10 flex h-full min-h-0 w-full flex-col rounded-xl border border-white/15 bg-black/10 p-2 sm:p-3">
                      <div className="min-h-0 flex-1 overflow-hidden rounded-lg border border-white/15 bg-black shadow-[0_14px_50px_rgba(0,0,0,0.55)]">
                        <button
                          type="button"
                          onClick={() => setSelectedImage({ src: p.image, title: p.title })}
                          className="h-full w-full cursor-zoom-in"
                          aria-label={`Ampliar imagen de ${p.title}`}
                        >
                          <img
                            src={p.image}
                            alt={`Vista previa de ${p.title}`}
                            className="h-full w-full object-contain p-0"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                ) : p.image ? (
                  <button
                    type="button"
                    onClick={() => setSelectedImage({ src: p.image, title: p.title })}
                    className="h-full w-full cursor-zoom-in"
                    aria-label={`Ampliar imagen de ${p.title}`}
                  >
                    <img
                      src={p.image}
                      alt={`Vista previa de ${p.title}`}
                      className={`h-full w-full object-contain ${
                        p.title === 'Sistema de Tickets' ||
                        p.title === 'Sistema de Notificaciones' ||
                        p.title === 'Sistema de Gestión Agrícola' ||
                        p.title === 'Control de Documentos'
                          ? 'p-0'
                          : 'p-2'
                      }`}
                    />
                  </button>
                ) : (
                  'Vista previa del proyecto'
                )}
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
                    Ver mas
                  </a>
                  <a href={p.code} className="border border-white/10 bg-white/5 hover:bg-white/10 text-white text-sm px-5 py-2.5 rounded-xl transition-all">
                    Ver Código
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedImage ? (
          <div
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm p-4 sm:p-8 flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative w-full max-w-6xl max-h-[90vh] bg-[#0f0f14] border border-white/10 rounded-2xl p-3 sm:p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="absolute right-3 top-3 h-9 w-9 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-white text-lg leading-none"
                aria-label="Cerrar visor"
              >
                ×
              </button>
              <img
                src={selectedImage.src}
                alt={`Imagen ampliada de ${selectedImage.title}`}
                className="w-full max-h-[82vh] object-contain rounded-xl"
              />
            </div>
          </div>
        ) : null}

      </div>
    </section>
  )
}