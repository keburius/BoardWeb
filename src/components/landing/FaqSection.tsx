import { faqItems } from "./constants";
import { FadeUp, StaggerContainer, StaggerItem } from "./animations";

export function FaqSection() {
  return (
    <section className="faq-section">
      <div className="container">
        <FadeUp>
          <div className="badge">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M 10 2 L 14 2 L 14 4 L 10 4 Z M 8 4 L 10 4 L 10 6 L 8 6 Z M 14 4 L 16 4 L 16 6 L 14 6 Z M 6 6 L 8 6 L 8 8 L 6 8 Z M 16 6 L 18 6 L 18 8 L 16 8 Z M 6 8 L 8 8 L 8 14 L 6 14 Z M 16 8 L 18 8 L 18 14 L 16 14 Z M 14 14 L 16 14 L 16 16 L 14 16 Z M 12 20 L 14 20 L 14 22 L 12 22 Z"
                fill="var(--red)"
              />
            </svg>
            FAQ
          </div>
          <h2>Questions founders ask.</h2>
        </FadeUp>
        <StaggerContainer className="faq-list">
          {faqItems.map(({ n, q, a }) => (
            <StaggerItem key={n}>
              <details className="faq-item">
                <summary className="faq-question">
                  <span className="faq-num">{n}</span>
                  <span className="faq-text">{q}</span>
                  <span className="faq-chevron">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </summary>
                <div className="faq-answer">{a}</div>
              </details>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
