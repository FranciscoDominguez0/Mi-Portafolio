import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#0a0a0f',
          borderRadius: 8,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: -10,
            background:
              'radial-gradient(circle at 30% 30%, rgba(124,58,237,.55), transparent 60%), radial-gradient(circle at 70% 70%, rgba(59,130,246,.35), transparent 55%)',
          }}
        />
        <div
          style={{
            position: 'relative',
            fontSize: 16,
            fontWeight: 900,
            letterSpacing: -1,
            color: '#fff',
            fontFamily: 'Inter, ui-sans-serif, system-ui',
          }}
        >
          FD
        </div>
      </div>
    ),
    size
  )
}

