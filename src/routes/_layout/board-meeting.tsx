import { Logo } from '@/components/shared/Logo'

export function BoardMeetingPage() {
  return (
    <div
      style={{
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1.5rem',
        padding: '1.5rem',
        background: '#0A0A0A',
        color: '#F5F5F5',
      }}
    >
      <Logo size="lg" />
      <div
        style={{
          borderRadius: 16,
          padding: '2rem',
          border: '1px solid #222',
          background: '#111',
          textAlign: 'center',
          maxWidth: 440,
        }}
      >
        <h1
          style={{
            fontSize: '1.5rem',
            fontWeight: 500,
            letterSpacing: '-0.02em',
            marginBottom: '0.75rem',
          }}
        >
          Your board is ready.
        </h1>
        <p style={{ fontSize: '0.875rem', color: '#666' }}>
          Upload your board deck to start your first simulation.
        </p>
      </div>
      <button
        style={{
          fontSize: '0.75rem',
          color: '#444',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
        }}
        onClick={() => {
          localStorage.removeItem('sb_token')
          window.location.href = '/'
        }}
      >
        Sign out
      </button>
    </div>
  )
}
