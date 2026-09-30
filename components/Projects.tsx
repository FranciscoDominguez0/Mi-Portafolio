'use client'

import { useState } from 'react'
import Image from 'next/image'
import ProjectModal, { ProjectData } from './ProjectModal'

const projects: ProjectData[] = [
  {
    tag: 'Proyecto Destacado',
    title: 'PayMe Panamá',
    description: 'Plataforma administrativa para PYMEs con gestión de catálogo, control de inventario, ventas e integración de pagos con Stripe.',
    longDescription: 'PayMe Panamá es una solución integral diseñada para que las pequeñas y medianas empresas administren su presencia digital y ventas. Facilita la creación de catálogos de productos, control de stock y automatización del flujo de ventas.',
    features: [
      'Gestión de inventario y reposición de stock',
      'Integración nativa con Stripe para pagos seguros',
      'Panel administrativo y reportes en tiempo real',
      'Roles de usuario para vendedores y administradores'
    ],
    tech: ['Laravel', 'Blade', 'Tailwind', 'Stripe'],
    image: '/PayMe.png?v=2',
    gallery: ['/PayMe.png?v=2', '/Pyme2.png'],
    demo: 'https://pyme.rsfsecure.site/',
    code: 'https://github.com/FranciscoDominguez0/ecommerce-pyme-panama',
  },
  {
    tag: 'Proyecto Destacado',
    title: 'VigiFact',
    description: 'Sistema de facturación y dashboard analítico con métricas en tiempo real, gestión de ventas, clientes y reportes.',
    longDescription: 'VigiFact centraliza la operación financiera de la empresa, permitiendo emitir, rastrear y gestionar facturas. Su dashboard principal ofrece un panorama claro de los ingresos, deudas y comportamiento de los clientes, todo en tiempo real.',
    features: [
      'Emisión y control de facturas (próxima integración DGI)',
      'Dashboard con métricas visuales y gráficos',
      'Gestión de cartera de clientes e historial crediticio',
      'Exportación de reportes contables'
    ],
    tech: ['PHP', 'Laravel', 'PostgreSQL', 'Blade'],
    image: '/VigiFact.png?v=2',
    gallery: ['/VigiFact.png?v=2', '/VigiFact2.png'],
    demo: 'https://facturacion.salome-studio.com/',
    code: 'https://github.com/FranciscoDominguez0/Sistema-Facturacion',
  },
  {
    tag: 'Proyecto Destacado',
    title: 'Sistema de Tickets',
    description: 'Plataforma de gestión de soporte empresarial con seguimiento en tiempo real, asignación de agentes y panel de métricas.',
    longDescription: 'Una herramienta robusta de HelpDesk (Mesa de Ayuda) para manejar consultas y problemas técnicos. Permite a los clientes abrir tickets y a los agentes asignarlos, responderlos y cerrarlos de manera organizada, mejorando drásticamente el tiempo de respuesta.',
    features: [
      'Sistema de estados y prioridades (Alta, Media, Baja)',
      'Asignación automática o manual a agentes de soporte',
      'Historial de actividad y comentarios por ticket',
      'Filtros de búsqueda avanzada'
    ],
    tech: ['PHP', 'MySQL', 'JavaScript', 'CSS'],
    image: '/Tickets.png?v=2',
    gallery: ['/Tickets.png?v=2', '/Tickets2.png'],
    demo: 'https://soporte.vigitecpanama.com/',
    code: 'https://github.com/FranciscoDominguez0/Tickets',
  },
  {
    tag: 'Proyecto Destacado',
    title: 'Sistema de Notificaciones',
    description: 'Plataforma de alertas y recordatorios multicanal con soporte para email, SMS y notificaciones push.',
    tech: ['Node.js', 'Express', 'React', 'TypeScript', 'Nodemailer'],
    image: '/Notificaciones.png',
    demo: '#',
    code: 'https://github.com/FranciscoDominguez0/sistema-recordatorios',
  },
  {
    tag: 'Proyecto Destacado',
    title: 'Sistema de Gestión Agrícola',
    description: 'Control de cultivos, recursos hídricos e insumos agrícolas con reportes exportables y alertas automáticas.',
    tech: ['PHP', 'MySQL', 'JavaScript', 'CSS'],
    image: '/sistema-agricola.png',
    demo: '#',
    code: 'https://github.com/FranciscoDominguez0/CooperativaAgricola',
  },
  {
    tag: 'Proyecto Destacado',
    title: 'Control de Documentos',
    description: 'Sistema de gestión documental empresarial con control de versiones, permisos por rol y búsqueda avanzada.',
    tech: ['Java', 'Swing', 'MySQL'],
    image: '/Gestion_de_documentos_UP.png',
    demo: '#',
    code: 'https://github.com/FranciscoDominguez0/GraduacionUP',
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null)

  const previewSizes = '(min-width: 640px) 560px, 92vw'

  return (
    <section id="proyectos" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-12 sm:mb-16">
          <p className="text-blue-500 text-xs sm:text-sm font-bold mb-3 tracking-[0.2em] uppercase">Proyectos Destacados</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">Parte de mi trabajo reciente</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((p, index) => (
            <div
              key={p.title}
              className="flex flex-col bg-[#111118] border border-white/5 hover:border-white/10 rounded-2xl overflow-hidden group transition-colors"
            >
              {/* Top Image Section */}
              <div className="relative aspect-[4/3] w-full bg-[#0a0a0f] p-4 sm:p-6 overflow-hidden">
                <span className="absolute top-4 left-5 text-white/90 font-bold text-sm z-10">
                  {String(index + 1).padStart(2, '0')}
                </span>
                
                <button
                  type="button"
                  onClick={() => setSelectedProject(p)}
                  className="relative w-full h-full mt-4 rounded-xl border border-white/10 overflow-hidden shadow-2xl group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7)] transition-all duration-300 text-left block"
                  aria-label={`Ver detalles de ${p.title}`}
                >
                  <Image
                    src={p.image}
                    alt={`Captura del proyecto: ${p.title}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-contain"
                    unoptimized={true}
                  />
                </button>
              </div>

              {/* Bottom Text Section */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-3">{p.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">{p.description}</p>
                
                <div className="flex justify-between items-center mt-auto pt-4 border-t border-white/5">
                  <div className="flex gap-2">
                    {p.tech.slice(0, 3).map(t => (
                      <span key={t} className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(p)}
                      className="flex items-center gap-1.5 text-blue-500 hover:text-blue-400 text-sm font-medium transition-colors group/link"
                    >
                      Ver Proyecto
                      <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}

      </div>
    </section>
  )
}