import Image from 'next/image'

type Tech = {
  name: string
  src: string
  width: number
  className?: string
}

const techs: Tech[] = [
  {
    name: 'Java',
    src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg',
    width: 50,
  },
  {
    name: 'React',
    src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg',
    width: 50,
  },
  {
    name: 'Next.js',
    src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg',
    width: 50,
    className: 'invert opacity-90',
  },
  {
    name: 'Node.js',
    src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg',
    width: 50,
  },
  {
    name: 'Laravel',
    src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-original.svg',
    width: 50,
  },
  {
    name: 'TypeScript',
    src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
    width: 50,
  },
  {
    name: 'Tailwind',
    src: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg',
    width: 50,
  },
  {
    name: 'JavaScript',
    src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
    width: 50,
  },
]

export default function Technologies() {
  return (
    <section id="tecnologias" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-12 sm:mb-14">
          <p className="text-sky-300 text-sm font-medium mb-2 tracking-widest uppercase">Stack</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Tecnologías</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {techs.map((tech) => (
            <div
              key={tech.name}
              className="group border border-white/5 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/20 rounded-2xl px-4 py-6 flex flex-col items-center gap-3 transition-all cursor-default"
            >
              <div className="h-10 flex items-center justify-center">
                {/* Usamos etiqueta img normal para SVGs externos para evitar problemas de Next.js Image */}
                <img
                  src={tech.src}
                  alt={tech.name}
                  width={tech.width}
                  height={40}
                  className={`h-10 w-auto max-w-[120px] object-contain opacity-90 group-hover:opacity-100 transition-opacity ${tech.className ?? ''}`}
                />
              </div>
              <div className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors text-center">
                {tech.name}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
