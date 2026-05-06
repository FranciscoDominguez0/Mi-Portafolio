import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Francisco Domínguez — Portafolio'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 80,
          background: '#0a0a0f',
          color: '#ffffff',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: -120,
            background:
              'radial-gradient(circle at 20% 35%, rgba(124,58,237,.35), transparent 55%), radial-gradient(circle at 80% 55%, rgba(59,130,246,.22), transparent 52%)',
          }}
        />

        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 12,
              fontSize: 22,
              color: 'rgba(255,255,255,.7)',
              letterSpacing: 2,
              textTransform: 'uppercase',
            }}
          >
            Portafolio
          </div>

          <div style={{ fontSize: 72, fontWeight: 800, lineHeight: 1.05 }}>
            Francisco Domínguez
          </div>

          <div style={{ fontSize: 30, color: 'rgba(255,255,255,.78)' }}>
            Desarrollador de Software
          </div>

          <div
            style={{
              marginTop: 22,
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              fontSize: 22,
              color: 'rgba(255,255,255,.6)',
            }}
          >
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: 999,
                background: 'rgba(34,197,94,.9)',
              }}
            />
            Disponible para proyectos
          </div>
        </div>
      </div>
    ),
    size
  )
}

