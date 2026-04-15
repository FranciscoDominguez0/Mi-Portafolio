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
    name: 'MySQL',
    src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg',
    width: 55,
  },
  {
    name: 'PostgreSQL',
    src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg',
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
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-14">
          <p className="text-purple-400 text-sm font-medium mb-2 tracking-widest uppercase">Stack</p>
          <h2 className="text-4xl font-bold text-white">Tecnologías</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {techs.map((tech) => (
            <div
              key={tech.name}
              className="group border border-white/5 bg-white/[0.03] hover:bg-purple-500/10 hover:border-purple-500/30 rounded-2xl px-4 py-6 flex flex-col items-center gap-3 transition-all cursor-default"
            >
              <div className="h-10 flex items-center justify-center">
                <Image
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
