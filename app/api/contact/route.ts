import { Resend } from 'resend'

const resendApiKey = process.env.RESEND_API_KEY
const toEmail = process.env.TO_EMAIL

const resend = resendApiKey ? new Resend(resendApiKey) : null

type ContactBody = {
  name?: string
  email?: string
  message?: string
  subject?: string
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  if (!resendApiKey || !toEmail || !resend) {
    return Response.json(
      { error: 'Server is not configured for email delivery.' },
      { status: 500 }
    )
  }

  let body: ContactBody

  try {
    body = (await request.json()) as ContactBody
  } catch {
    return Response.json({ error: 'Invalid JSON body.' }, { status: 400 })
  }

  const name = body.name?.trim() ?? ''
  const email = body.email?.trim().toLowerCase() ?? ''
  const message = body.message?.trim() ?? ''
  const subject = body.subject?.trim() ?? 'Nuevo mensaje desde portafolio'

  if (!name || !email || !message) {
    return Response.json(
      { error: 'Name, email and message are required.' },
      { status: 400 }
    )
  }

  if (!emailPattern.test(email)) {
    return Response.json({ error: 'Invalid email format.' }, { status: 400 })
  }

  try {
    const { error } = await resend.emails.send({
      from: 'Portafolio Contact <onboarding@resend.dev>',
      to: [toEmail],
      replyTo: email,
      subject: `Contacto web: ${subject}`,
      text: [
        'Nuevo mensaje desde el formulario de contacto',
        '',
        `Nombre: ${name}`,
        `Email: ${email}`,
        '',
        'Mensaje:',
        message,
      ].join('\n'),
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111827;max-width:640px;margin:0 auto;">
          <h2 style="margin:0 0 16px 0;color:#111827;">Nuevo mensaje desde tu portafolio</h2>
          <p style="margin:0 0 12px 0;"><strong>Nombre:</strong> ${escapeHtml(name)}</p>
          <p style="margin:0 0 12px 0;"><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p style="margin:0 0 8px 0;"><strong>Mensaje:</strong></p>
          <div style="background:#f3f4f6;border:1px solid #e5e7eb;padding:12px;border-radius:8px;white-space:pre-wrap;">
            ${escapeHtml(message)}
          </div>
        </div>
      `,
    })

    if (error) {
      return Response.json(
        {
          error:
            typeof error === 'object' && error && 'message' in error
              ? String((error as { message?: unknown }).message)
              : 'Resend rejected the email.',
        },
        { status: 502 }
      )
    }

    return Response.json({ ok: true })
  } catch {
    return Response.json(
      { error: 'Unable to send message right now. Please try again later.' },
      { status: 500 }
    )
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

