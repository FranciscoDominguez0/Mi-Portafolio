'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export interface ProjectData {
  tag?: string;
  title: string;
  description: string;
  longDescription?: string;
  features?: string[];
  tech: string[];
  image: string;
  gallery?: string[];
  demo?: string;
  code?: string;
}

interface ProjectModalProps {
  project: ProjectData;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const images = project.gallery && project.gallery.length > 0 
    ? project.gallery 
    : [project.image];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  // Prevent scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <>
      {/* Main Details Modal */}
      <div 
        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        onClick={onClose}
      >
        <div 
          className="relative w-full max-w-5xl bg-[#0a0a0f] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row my-auto animate-in fade-in zoom-in duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-black/80 rounded-full text-white/70 hover:text-white transition-colors border border-white/10 backdrop-blur-md"
            aria-label="Cerrar modal"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Image/Gallery Section */}
          <div className="w-full md:w-[55%] relative min-h-[250px] sm:min-h-[350px] md:min-h-full bg-[#111118] p-6 sm:p-8 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-white/5 group">
             
             {/* Main Image View */}
             <div 
               className="relative w-full aspect-video md:aspect-[4/3] rounded-xl overflow-hidden border border-white/10 shadow-2xl cursor-zoom-in"
               onClick={() => setIsZoomed(true)}
               title="Clic para ver en grande"
             >
               <Image
                 src={images[currentIndex]}
                 alt={`Captura ${currentIndex + 1} de ${project.title}`}
                 fill
                 className="object-contain transition-opacity duration-300"
                 unoptimized
               />
               
               {/* Hover overlay hint */}
               <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 pointer-events-none">
                  <div className="bg-black/70 text-white px-4 py-2 rounded-full backdrop-blur-sm text-sm flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                    Ampliar
                  </div>
               </div>
             </div>

             {/* Carousel Controls */}
             {images.length > 1 && (
               <>
                 <button 
                   onClick={prevImage}
                   className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 bg-black/60 hover:bg-black border border-white/10 text-white rounded-full backdrop-blur-sm transition-all"
                 >
                   <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                 </button>
                 <button 
                   onClick={nextImage}
                   className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 bg-black/60 hover:bg-black border border-white/10 text-white rounded-full backdrop-blur-sm transition-all"
                 >
                   <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                 </button>
                 
                 {/* Indicators */}
                 <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                   {images.map((_, idx) => (
                     <button
                       key={idx}
                       onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
                       className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? 'bg-blue-500 w-4' : 'bg-white/30 hover:bg-white/50'}`}
                     />
                   ))}
                 </div>
               </>
             )}
          </div>

          {/* Content Section */}
          <div className="w-full md:w-[45%] p-6 sm:p-8 md:p-10 flex flex-col bg-[#0a0a0f]">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">{project.title}</h3>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t) => (
                <span key={t} className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold rounded-full">
                  {t}
                </span>
              ))}
            </div>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
              {project.longDescription || project.description}
            </p>

            {project.features && project.features.length > 0 && (
              <div className="mb-8">
                <h4 className="text-white text-sm font-bold mb-3 uppercase tracking-wider">Características:</h4>
                <ul className="space-y-2.5">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-400 text-sm">
                      <svg className="w-5 h-5 text-blue-500 mr-2.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-auto pt-6 flex flex-wrap gap-3">
              {project.demo && project.demo !== '#' && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-blue-600 hover:bg-blue-500 text-white font-medium py-2.5 px-4 rounded-xl transition-all shadow-lg shadow-blue-500/20"
                >
                  Visitar Proyecto
                </a>
              )}
              
              {project.code && project.code !== '#' && (
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium py-2.5 px-4 rounded-xl transition-all"
                >
                  Ver Código
                </a>
              )}
              
              {(!project.demo || project.demo === '#') && (!project.code || project.code === '#') && (
                <span className="w-full text-center bg-white/5 border border-white/10 text-white/50 font-medium py-2.5 px-4 rounded-xl cursor-not-allowed">
                  En desarrollo (Privado)
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Full Screen Zoom Overlay */}
      {isZoomed && (
        <div 
          className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setIsZoomed(false)}
        >
          <button
            onClick={() => setIsZoomed(false)}
            className="absolute top-6 right-6 z-10 p-3 bg-white/5 hover:bg-white/10 rounded-full text-white transition-colors border border-white/10"
            aria-label="Cerrar vista completa"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="relative w-full h-full max-w-7xl max-h-[90vh]">
            <Image
              src={images[currentIndex]}
              alt={`Captura ampliada ${currentIndex + 1}`}
              fill
              className="object-contain"
              unoptimized
            />
          </div>
          
          {/* Zoom Carousel Controls */}
          {images.length > 1 && (
            <>
              <button 
                onClick={prevImage}
                className="absolute left-4 sm:left-10 top-1/2 -translate-y-1/2 p-3 sm:p-4 bg-black/60 hover:bg-black border border-white/10 text-white rounded-full backdrop-blur-md transition-all"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-4 sm:right-10 top-1/2 -translate-y-1/2 p-3 sm:p-4 bg-black/60 hover:bg-black border border-white/10 text-white rounded-full backdrop-blur-md transition-all"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            </>
          )}
        </div>
      )}
    </>
  )
}
