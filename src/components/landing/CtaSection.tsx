import { AnimatedButton } from "./animations";

export function CtaSection() {
  function scrollToEarlyAccess() {
    document
      .getElementById("early-access")
      ?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section className="cta-section">
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <svg
          className="cta-logo"
          viewBox="0 0 68 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="0" y="0" width="44" height="33" rx="3" stroke="#E8593C" strokeWidth="3" />
          <rect x="12" y="12" width="44" height="33" rx="3" fill="#E8593C" />
        </svg>
        <h2 data-text="Your real board meeting is coming. Walk in prepared.">
          Your real board meeting
          <br />
          is coming. Walk in prepared.
        </h2>
        <AnimatedButton
          className="btn btn-red"
          style={{ margin: "0 auto", display: "flex" }}
          onClick={scrollToEarlyAccess}
        >
          Start Free Meeting
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 4v8a4 4 0 0 1-4 4H5" />
            <polyline points="9 12 5 16 9 20" />
          </svg>
        </AnimatedButton>
        <p className="cta-fine-print">No credit card.  ·  Free first meeting.  ·  5 min setup.</p>
      </div>
    </section>
  );
}
