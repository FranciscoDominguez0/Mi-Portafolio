const techs = [
  { name: 'Java',       icon: 'Java' },
  { name: 'React',      icon: 'React' },
  { name: 'Next.js',    icon: 'Next' },
  { name: 'MySQL',      icon: 'SQL' },
  { name: 'PostgreSQL', icon: 'PG' },
  { name: 'TypeScript', icon: 'TS' },
  { name: 'Tailwind',   icon: 'TW' },
  { name: 'JavaScript', icon: 'JS' },
]

/*
 * Cada icono monocromático como SVG inline.
 * Se mantiene proporcional a 32×32.
 */
function TechIcon({ name }: { name: string }) {
  const cls = 'w-8 h-8'

  if (name === 'Java') return (
    <svg viewBox="0 0 128 128" className={cls} fill="currentColor" aria-hidden="true">
      <path d="M47.6 98.1s-4.8 2.8 3.4 3.7c9.9 1.1 14.9 1 25.8-1.1 0 0 2.9 1.8 6.9 3.4-24.4 10.5-55.3-.6-36.1-6zm-3-13.7s-5.3 4 2.8 4.8c10.6 1.1 18.9 1.2 33.4-1.6 0 0 2 2 5.1 3.1-29.5 8.6-62.4.7-41.3-6.3z"/>
      <path d="M69.8 61.3c6 6.9-1.6 13.2-1.6 13.2s15.3-7.9 8.3-17.8c-6.6-9.2-11.6-13.8 15.6-29.6 0 0-42.7 10.7-22.3 34.2z"/>
      <path d="M102.1 108.2s3.5 2.9-3.9 5.2c-14.1 4.3-58.7 5.6-71.1.2-4.5-1.9 3.9-4.6 6.5-5.2 2.7-.6 4.3-.5 4.3-.5-4.9-3.5-32 6.9-13.7 9.8 49.8 8.1 90.8-3.6 77.9-9.5zM49.9 70.3s-22.7 5.4-8 7.3c6.2.8 18.5.6 30-.3 9.4-.8 18.8-2.5 18.8-2.5s-3.3 1.4-5.7 3.1c-23 6.1-67.5 3.2-54.7-3 10.8-5.2 19.6-4.6 19.6-4.6zm40.7 22.8c23.4-12.2 12.6-23.9 5-22.3-1.8.4-2.7.7-2.7.7s.7-1.1 2-1.5c14.9-5.3 26.5 15.5-4.8 23.7l.5-.6z"/>
      <path d="M76.5 1.6s13 13-12.3 32.9c-20.3 16-4.6 25.1 0 35.6-11.8-10.7-20.5-20.1-14.7-28.8C57 28.4 80.7 22.2 76.5 1.6z"/>
      <path d="M52.2 126c22.5 1.4 57-.8 57.8-11.4 0 0-1.6 4-18.6 7.2-19.2 3.6-42.9 3.2-56.9.9 0 0 2.9 2.4 17.7 3.3z"/>
    </svg>
  )

  if (name === 'React') return (
    <svg viewBox="0 0 128 128" className={cls} aria-hidden="true">
      <circle cx="64" cy="64" r="11.4" fill="#61DAFB"/>
      <g fill="none" stroke="#61DAFB" strokeWidth="5.5">
        <ellipse cx="64" cy="64" rx="51" ry="19"/>
        <ellipse cx="64" cy="64" rx="51" ry="19" transform="rotate(60 64 64)"/>
        <ellipse cx="64" cy="64" rx="51" ry="19" transform="rotate(120 64 64)"/>
      </g>
    </svg>
  )

  if (name === 'Next.js') return (
    <svg viewBox="0 0 128 128" className={cls} fill="currentColor" aria-hidden="true">
      <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6H35.8V48.5h22.3l43.9 73.4C115.5 113.5 128 90.2 128 64c0-35.3-28.7-64-64-64z"/>
    </svg>
  )

  if (name === 'MySQL') return (
    <svg viewBox="0 0 128 128" className={cls} aria-hidden="true">
      <path fill="#00758F" d="M2 90.6h5V73.2l6.2 14.7c.6 1.5 1.6 2 3.3 2 1.8 0 2.7-.5 3.3-2L26 73.2v17.4h5V73.2c0-1.6-.8-2.3-2.3-2.3-1.2 0-2.2.5-2.6 1.7l-6.6 15.6-6.6-15.6C12.5 71.4 11.5 71 10.3 71c-1.6 0-2.3.8-2.3 2.3v17.3z"/>
      <path fill="#00758F" d="M38.3 90.6h10.5c4.3 0 6.6-2.2 6.6-5.9 0-2.9-1.2-4.6-4.1-5.2 2.2-.7 3.3-2.2 3.3-4.7 0-3.5-2.3-5.4-6.6-5.4H38.3v21.2zm5-12.2V73.6H48.3c1.9 0 2.8.8 2.8 2.3 0 1.6-.9 2.5-2.8 2.5h-5zm0 8.2v-4.8H48.7c2.2 0 3.3 1 3.3 2.5s-1 2.4-3.3 2.4h-5.1z"/>
      <path fill="#00758F" d="M58.1 69.6v21.2H72.1v-4H63.1V69.6zm29.4-.4c-6.2 0-10.5 4.5-10.5 11.1 0 6.6 4.2 11.1 10.5 11.1s10.5-4.5 10.5-11.1c0-6.6-4.2-11.1-10.5-11.1zm0 4c3.4 0 5.6 2.9 5.6 7.1s-2.2 7.1-5.6 7.1-5.6-2.9-5.6-7.1 2.2-7.1 5.6-7.1z"/>
      <path fill="#00758F" d="M99.5 69.6v21.2h4.7V77.7l8.6 13.3c.8 1.2 1.6 1.7 3.1 1.7 1.7 0 2.6-.8 2.6-2.5V69.6h-4.7v13.3l-8.6-13.3c-.8-1.2-1.6-1.7-3.1-1.7-1.7 0-2.6.8-2.6 2.5v-.8z"/>
    </svg>
  )

  if (name === 'PostgreSQL') return (
    <svg viewBox="0 0 128 128" className={cls} fill="#336791" aria-hidden="true">
      <path d="M93.8 92.1c.8-6.5.5-7.5 5.4-6.4l1.2.1c3.7.2 8.6-.6 11.5-1.9 6.2-2.9 9.9-7.7 3.8-6.4C102 80.3 101 75.5 101 75.5c14.7-21.8 20.8-49.5 15.5-56.3C101.9 8 78.3 14.6 78 14.8l-.1.02c-2.5-.5-5.4-.8-8.5-.8-5.8.02-10.2 1.5-13.5 4 0 0-40.9-16.9-39 21.2.4 8.1 11.6 61.1 25 45.1 4.9-5.9 9.6-10.8 9.6-10.8 2.3 1.5 5.1 2.3 8.1 2.1l.2-.2c-.07.74-.04 1.46.08 2.31-3.14 3.51-2.22 4.12-8.5 5.42-6.35 1.31-2.62 3.65-.18 4.26 2.95.74 9.79 1.78 14.41-4.66l-.18.74c1.23.98 2.09 6.28 1.95 11.1-.14 4.83-.28 8.13.86 10.73 1.14 2.6 2.27 8.45 11.97 6.71 8.13-1.46 12.35-5.23 12.93-11.53z"/>
    </svg>
  )

  if (name === 'TypeScript') return (
    <svg viewBox="0 0 128 128" className={cls} aria-hidden="true">
      <rect width="128" height="128" rx="6" fill="#3178C6"/>
      <path fill="#fff" d="M19.5 96.4V108h12.3V96.4H45v-9.6H19.5v9.6zm34.8-26.3c-4.3-.9-7.7-2.8-9.3-5.1-.9-1.3-1.3-2.8-1.3-4.5 0-5.6 4.5-9.8 11-10.6 1.7-.2 5.2-.1 7.2.2 4.6.7 8.4 3.2 10.4 6.7l.8 1.5-5.7 3.4-.8-1.4c-1.2-2.1-3.4-3.5-6.2-3.9-1.5-.2-4.4-.1-5.6.3-2.5.8-3.7 2.4-3.7 4.6 0 1.3.3 2 1.2 2.9 1.2 1.1 2.3 1.6 7.5 2.9 6.7 1.7 9.4 2.9 11.7 5 2.6 2.4 3.7 5.2 3.7 9.1 0 3.9-1.1 6.8-3.5 9.1-3.3 3.2-7.8 4.6-14.8 4.6-7.8 0-13.4-3.5-16-9.8l-.6-1.5 6.3-3.7.7 1.6c1 2.2 2.3 3.7 4.1 4.7 1.9 1.1 4.1 1.5 7.1 1.3 2.4-.2 4-.7 5.3-1.7 1.5-1.1 2.2-2.6 2.2-4.5 0-1.8-.6-3-2-4-1.5-1.1-3-1.7-8.7-3.1h-.1z"/>
      <path fill="#fff" d="M91.3 108h-12.5V86.7H69.1v-9.6h31.8v9.6H91.3V108z"/>
    </svg>
  )

  if (name === 'Tailwind') return (
    <svg viewBox="0 0 128 128" className={cls} fill="#38BDF8" aria-hidden="true">
      <path d="M64 16c-17.1 0-27.8 8.5-32 25.6 6.4-8.5 13.9-11.7 22.4-9.6 4.9 1.2 8.4 4.7 12.2 8.6C72.9 47 80.2 54.4 96 54.4c17.1 0 27.8-8.5 32-25.6-6.4 8.5-13.9 11.7-22.4 9.6-4.9-1.2-8.4-4.7-12.2-8.6C87.1 23.4 79.8 16 64 16zM32 54.4C14.9 54.4 4.2 62.9 0 80c6.4-8.5 13.9-11.7 22.4-9.6 4.9 1.2 8.4 4.7 12.2 8.6 6.3 6.4 13.5 13.8 29.4 13.8 17.1 0 27.8-8.5 32-25.6-6.4 8.5-13.9 11.7-22.4 9.6-4.9-1.2-8.4-4.7-12.2-8.6C55.1 61.8 47.8 54.4 32 54.4z"/>
    </svg>
  )

  // JavaScript
  return (
    <svg viewBox="0 0 128 128" className={cls} aria-hidden="true">
      <rect width="128" height="128" rx="6" fill="#F7DF1E"/>
      <path d="M103 102.3c1.5 2.5 3.4 4.3 6.9 4.3 2.9 0 4.7-1.4 4.7-3.4 0-2.4-1.9-3.2-5.1-4.6l-1.7-.7c-5.1-2.2-8.5-4.9-8.5-10.7 0-5.3 4.1-9.4 10.4-9.4 4.5 0 7.8 1.6 10.1 5.7l-5.5 3.5c-1.2-2.2-2.5-3-4.6-3-2.1 0-3.4 1.3-3.4 3 0 2.1 1.3 3 4.3 4.3l1.7.7c6 2.6 9.5 5.2 9.5 11.1 0 6.4-5 9.9-11.7 9.9-6.6 0-10.8-3.1-12.9-7.2l5.8-3.5zm-27.2.7c1.1 1.9 2.1 3.5 4.4 3.5 2.3 0 3.7-.9 3.7-4.3V78.1h6.8v24.2c0 7.1-4.2 10.4-10.3 10.4-5.5 0-8.7-2.9-10.3-6.3l5.7-3.4z"/>
    </svg>
  )
}

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
              className="group border border-white/5 bg-white/[0.03] hover:bg-purple-500/10 hover:border-purple-500/30 rounded-2xl px-4 py-6 flex flex-col items-center gap-3 transition-all cursor-default"
            >
              <div className="text-gray-400 group-hover:text-white transition-colors">
                <TechIcon name={tech.name} />
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