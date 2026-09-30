'use client'

import { FormEvent, useMemo, useState } from 'react'

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<FormStatus>('idle')
  const [feedback, setFeedback] = useState('')

  const isEmailValid = useMemo(() => {
    if (!email) return true
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }, [email])

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus('error')
      setFeedback('Completa nombre, email y mensaje.')
      return
    }

    if (!isEmailValid) {
      setStatus('error')
      setFeedback('Ingresa un email valido.')
      return
    }

    setStatus('loading')
    setFeedback('Enviando...')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          subject: subject.trim(),
          message: message.trim(),
        }),
      })

      const result = (await response.json()) as { error?: string }

      if (!response.ok) {
        throw new Error(result.error || 'No se pudo enviar el mensaje.')
      }

      setStatus('success')
      setFeedback('Mensaje enviado correctamente. Te respondere pronto.')
      setName('')
      setEmail('')
      setSubject('')
      setMessage('')
    } catch (error) {
      setStatus('error')
      setFeedback(
        error instanceof Error
          ? error.message
          : 'Ocurrio un error al enviar el mensaje.'
      )
    }
  }

  return (
    <section id="contacto" className="py-24 relative">
      <div className="absolute inset-0 bg-blue-900/5 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">

        <div className="text-center mb-12 sm:mb-14">
          <p className="text-blue-400 text-sm font-medium mb-2 tracking-widest uppercase">Hablemos</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Contacto</h2>
          <p className="text-gray-500 mt-3 max-w-md mx-auto">
            Contáctame para colaborar en proyectos o prácticas profesionales.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-12 items-start">

          {/* Info + links sociales */}
          <div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Estoy abierto a oportunidades de trabajo, proyectos freelance y colaboraciones. Si tienes una idea o proyecto en mente, me encantaría escucharte.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="https://github.com/FranciscoDominguez0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/20 px-4 py-3 rounded-xl text-sm text-gray-300 hover:text-white transition-all group"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 fill-white transition-transform group-hover:scale-110">
                  <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.4-4-1.4-.5-1.2-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.8 2.1 2.1 2.6.9.3 1.9.1 2.4-.2.1-.7.4-1.2.7-1.5-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.2 11.2 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.2 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6A12 12 0 0 0 12 .3Z" />
                </svg>
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/francisco-dominguez-77953b33a/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-[#0A66C2]/50 px-4 py-3 rounded-xl text-sm text-gray-300 hover:text-white transition-all group"
              >
                <svg className="h-5 w-5 shrink-0 fill-[#0A66C2] transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <a
                href="mailto:domimguesf225@gmail.com"
                className="flex items-center gap-3 border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-[#EA4335]/50 px-4 py-3 rounded-xl text-sm text-gray-300 hover:text-white transition-all group"
              >
                <svg className="h-5 w-5 shrink-0 transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                  <path fill="#4285f4" d="M1.5 5.25L1.5 18.75C1.5 19.9926 2.50736 21 3.75 21L7.5 21L7.5 10.5L1.5 6L1.5 5.25Z" />
                  <path fill="#ea4335" d="M22.5 5.25L22.5 18.75C22.5 19.9926 21.4926 21 20.25 21L16.5 21L16.5 10.5L22.5 6L22.5 5.25Z" />
                  <path fill="#fbbc04" d="M22.5 6L16.5 10.5L12 13.875L7.5 10.5L1.5 6C1.5 4.31682 3.39343 3.3323 4.75 4.25L12 9.75L19.25 4.25C20.6066 3.3323 22.5 4.31682 22.5 6Z" />
                  <path fill="#34a853" d="M7.5 21L16.5 21L16.5 10.5L7.5 10.5L7.5 21Z" />
                </svg>
                <span className="break-all">domimguesf225@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Nombre"
              required
              className="bg-white/[0.03] border border-white/10 focus:border-blue-500/50 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-colors w-full"
            />
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email"
              required
              className="bg-white/[0.03] border border-white/10 focus:border-blue-500/50 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-colors w-full"
            />
            <input
              type="text"
              value={subject}
              onChange={(event) => setSubject(event.target.value)}
              placeholder="Asunto"
              className="bg-white/[0.03] border border-white/10 focus:border-blue-500/50 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-colors w-full"
            />
            <textarea
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Mensaje"
              rows={4}
              required
              className="bg-white/[0.03] border border-white/10 focus:border-blue-500/50 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-colors resize-none w-full"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-xl text-sm font-medium transition-all w-full"
            >
              {status === 'loading' ? 'Enviando...' : 'Enviar Mensaje'}
            </button>
            {feedback ? (
              <p
                className={`text-sm ${
                  status === 'success'
                    ? 'text-green-400'
                    : status === 'loading'
                      ? 'text-gray-400'
                      : 'text-red-400'
                }`}
              >
                {feedback}
              </p>
            ) : null}
          </form>

        </div>
      </div>
    </section>
  )
}