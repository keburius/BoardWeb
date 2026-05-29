interface EarlyAccessSectionProps {
  formSubmitted: boolean;
  onSubmit: () => void;
}

export function EarlyAccessSection({
  formSubmitted,
  onSubmit,
}: EarlyAccessSectionProps) {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmit();
  }

  return (
    <section className="early-access-section" id="early-access">
      <div className="ea-bg" />
      <div className="container">
        <div className="ea-inner">
          <div className="badge">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M 5 5 L 19 5 L 19 7 L 5 7 Z M 5 17 L 19 17 L 19 19 L 5 19 Z M 19 7 L 21 7 L 21 17 L 19 17 Z M 3 7 L 5 7 L 5 17 L 3 17 Z"
                fill="var(--red)"
              />
            </svg>
            Start free
          </div>
          <h2>Your next board meeting is coming.</h2>
          <p>Run the meeting once before you run it for real.</p>
          <form className="waitlist-form" onSubmit={handleSubmit}>
            <input type="email" placeholder="you@company.com" required />
            <button
              type="submit"
              disabled={formSubmitted}
              style={formSubmitted ? { background: "#22c55e" } : undefined}
            >
              {formSubmitted ? "You're on the list!" : "Start Free Meeting"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
