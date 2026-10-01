'use client'

import { useState } from 'react'
import Image from 'next/image'
import ProjectModal, { ProjectData } from './ProjectModal'

const projects: ProjectData[] = [
  {
    tag: 'Proyecto Destacado',
    title: 'Landing Page Vigitec',
    description: 'Landing page moderna y profesional para Vigitec Panamá, con sistema de contacto automatizado.',
    longDescription: 'Página web de aterrizaje para la empresa tecnológica Vigitec Panamá. Desarrollada con un enfoque en rendimiento, SEO y alta conversión. Implementa un sistema de manejo de correos electrónicos robusto para la comunicación directa con los clientes.',
    features: [
      'Formulario de contacto integrado con Resend',
      'Diseño 100% responsivo y animaciones fluidas',
      'Tipado estricto para mayor mantenibilidad del código',
      'Estructura modular y escalable'
    ],
    tech: ['Node.js', 'Resend', 'TypeScript', 'Tailwind'],
    image: '/Vigitec.png',
    gallery: ['/Vigitec.png', '/Vigitec2.png'],
    demo: 'https://vigitecpanama.com',
    code: '#',
  },
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
    image: '/Notificaciones1.png',
    gallery: ['/Notificaciones1.png', '/Notificaciones2.png'],
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
  const [showAll, setShowAll] = useState(false)

  const previewSizes = '(min-width: 640px) 560px, 92vw'

  return (
    <section id="proyectos" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-12 sm:mb-16">
          <p className="text-sky-300 text-xs sm:text-sm font-bold mb-3 tracking-[0.2em] uppercase">Proyectos Destacados</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">Parte de mi trabajo reciente</h2>
          <div className="h-1 w-20 bg-sky-300 mx-auto mt-6 rounded-full" />
        </div>

        <div className="flex flex-col gap-24 sm:gap-32 mt-8">
          {projects.slice(0, showAll ? projects.length : 4).map((p, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={p.title} 
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}
              >
                
                {/* Text Column */}
                <div className="w-full lg:w-1/2 flex flex-col items-start text-left z-10">
                  <p className="text-sky-400 text-lg sm:text-xl font-medium tracking-widest mb-3 uppercase">
                    PROYECTO {index + 1}
                  </p>
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                    {p.title}
                  </h3>

                  {/* Mobile Image (Between Title and Description) */}
                  <div className="block lg:hidden w-full mb-8">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(p)}
                      className="relative z-10 w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#171717] border border-white/10 shadow-xl block group"
                      aria-label={`Ver detalles de ${p.title}`}
                    >
                      <Image
                        src={p.image}
                        alt={`Captura del proyecto: ${p.title}`}
                        fill
                        sizes="100vw"
                        className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                        unoptimized
                      />
                    </button>
                  </div>

                  <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8">
                    {p.longDescription || p.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-10">
                    {p.tech.map(t => (
                      <span key={t} className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-gray-300">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <button
                    type="button"
                    onClick={() => setSelectedProject(p)}
                    className="flex items-center gap-4 text-white hover:text-sky-300 font-semibold transition-colors group text-sm sm:text-base tracking-wide"
                  >
                    <svg className="w-6 h-6 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    Ver detalles
                  </button>
                </div>

                {/* Image Column (Desktop) */}
                <div className="hidden lg:block w-full lg:w-1/2 relative mt-8 lg:mt-0">
                   {/* Decorative Offset */}
                   <div className={`hidden sm:block absolute top-6 bottom-[-1.5rem] w-full rounded-2xl z-0 ${isEven ? 'bg-sky-500 left-[-1.5rem]' : 'border-[6px] border-sky-500 right-[-1.5rem]'}`} />
                   
                   <button
                     type="button"
                     onClick={() => setSelectedProject(p)}
                     className="relative z-10 w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#171717] border border-white/10 shadow-2xl transition-transform hover:-translate-y-2 duration-300 block group"
                     aria-label={`Ver detalles de ${p.title}`}
                   >
                     <Image
                       src={p.image}
                       alt={`Captura del proyecto: ${p.title}`}
                       fill
                       sizes="(min-width: 1024px) 50vw, 100vw"
                       className="object-contain p-4 sm:p-8 group-hover:scale-105 transition-transform duration-500"
                       unoptimized
                     />
                   </button>
                </div>

              </div>
            );
          })}
        </div>

        {!showAll && projects.length > 4 && (
          <div className="mt-20 flex justify-center">
            <button
              onClick={() => setShowAll(true)}
              className="bg-sky-200 hover:bg-sky-300 text-neutral-900 py-3.5 px-10 rounded-xl text-sm font-bold transition-all"
            >
              Ver todos
            </button>
          </div>
        )}

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