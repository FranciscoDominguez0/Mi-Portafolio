const techs = [
  { name: 'Java',        icon: '☕' },
  { name: 'React',       icon: '⚛️' },
  { name: 'Next.js',     icon: '▲' },
  { name: 'MySQL',       icon: '🐬' },
  { name: 'PostgreSQL',  icon: '🐘' },
  { name: 'TypeScript',  icon: 'TS' },
  { name: 'Tailwind',    icon: '🌊' },
  { name: 'JavaScript',  icon: 'JS' },
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
          {techs.map(tech => (
            <div
              key={tech.name}
              className="group border border-white/5 bg-white/[0.03] hover:bg-purple-500/10 hover:border-purple-500/30 rounded-2xl px-4 py-5 text-center transition-all cursor-default"
            >
              <div className="text-2xl mb-2">{tech.icon}</div>
              <div className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                {tech.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}