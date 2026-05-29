export function SignupPage() {
  function handleSignup(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    localStorage.setItem('sb_token', 'demo-token')
    window.location.href = '/board-meeting'
  }

  return (
    <div
      style={{
        minHeight: '100svh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#0A0A0A',
        color: '#F5F5F5',
        padding: '1rem',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 380,
          borderRadius: 16,
          padding: '2rem',
          background: '#111',
          border: '1px solid #222',
        }}
      >
        <h1
          style={{
            fontSize: '1.5rem',
            fontWeight: 500,
            letterSpacing: '-0.02em',
            marginBottom: '0.5rem',
          }}
        >
          Start for free
        </h1>
        <p style={{ fontSize: '0.875rem', color: '#666', marginBottom: '2rem' }}>
          Your first board meeting is on us.
        </p>
        <form onSubmit={handleSignup} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input
            type="email"
            placeholder="you@company.com"
            required
            style={{
              width: '100%',
              borderRadius: 8,
              padding: '0.75rem 1rem',
              fontSize: '0.875rem',
              background: '#0D0D0D',
              border: '1px solid #333',
              color: '#F5F5F5',
              outline: 'none',
            }}
          />
          <input
            type="password"
            placeholder="Create a password"
            required
            style={{
              width: '100%',
              borderRadius: 8,
              padding: '0.75rem 1rem',
              fontSize: '0.875rem',
              background: '#0D0D0D',
              border: '1px solid #333',
              color: '#F5F5F5',
              outline: 'none',
            }}
          />
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '0.75rem',
              borderRadius: 8,
              fontSize: '0.875rem',
              fontWeight: 600,
              background: '#F5F5F5',
              color: '#0A0A0A',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Create account
          </button>
        </form>
        <p style={{ textAlign: 'center', fontSize: '0.75rem', marginTop: '1rem', color: '#444' }}>
          No credit card required.
        </p>
        <p style={{ textAlign: 'center', fontSize: '0.875rem', marginTop: '1rem', color: '#555' }}>
          Already have an account?{' '}
          <a href="/login" style={{ color: '#1D9E75' }}>
            Sign in
          </a>
        </p>
      </div>
    </div>
  )
}
