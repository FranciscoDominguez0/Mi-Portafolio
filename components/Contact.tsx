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
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        <div className="text-center mb-14">
          <p className="text-purple-400 text-sm font-medium mb-2 tracking-widest uppercase">Hablemos</p>
          <h2 className="text-4xl font-bold text-white">Contacto</h2>
          <p className="text-gray-500 mt-3 max-w-md mx-auto">
            Contáctame para colaborar en proyectos o prácticas profesionales.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-start">

          {/* Info + links sociales */}
          <div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Estoy abierto a oportunidades de trabajo, proyectos freelance y colaboraciones. Si tienes una idea o proyecto en mente, me encantaría escucharte.
            </p>
            <div className="flex flex-col gap-3">
              <a href="https://github.com/FranciscoDominguez0" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] px-4 py-3 rounded-xl text-sm text-gray-300 transition-all">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/francisco-dominguez-77953b33a/" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] px-4 py-3 rounded-xl text-sm text-gray-300 transition-all">
                LinkedIn
              </a>
              <a href="mailto:domimguesf225@gmail.com"
                className="flex items-center gap-3 border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] px-4 py-3 rounded-xl text-sm text-gray-300 transition-all">
                domimguesf225@gmail.com
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
              className="bg-white/[0.03] border border-white/10 focus:border-purple-500/50 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-colors w-full"
            />
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email"
              required
              className="bg-white/[0.03] border border-white/10 focus:border-purple-500/50 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-colors w-full"
            />
            <input
              type="text"
              value={subject}
              onChange={(event) => setSubject(event.target.value)}
              placeholder="Asunto"
              className="bg-white/[0.03] border border-white/10 focus:border-purple-500/50 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-colors w-full"
            />
            <textarea
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Mensaje"
              rows={4}
              required
              className="bg-white/[0.03] border border-white/10 focus:border-purple-500/50 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-colors resize-none w-full"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="bg-purple-600 hover:bg-purple-500 text-white py-3 rounded-xl text-sm font-medium transition-all w-full"
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