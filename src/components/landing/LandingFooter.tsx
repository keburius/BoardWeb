export function LandingFooter() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <span
              className="wordmark"
              style={{
                fontSize: "1rem",
                color: "var(--paper)",
                opacity: 0.8,
              }}
            >
              SecondBoard.ai
            </span>
            <p>Practice before the room gets expensive.</p>
          </div>
          <div className="footer-col">
            <h3>Connect</h3>
            <ul>
              <li>
                <a href="#" target="_blank" rel="noopener">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Legal</h3>
            <ul>
              <li>
                <a href="#">Agents Policy</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="copy">
            © 2026 SecondBoard.ai. All rights reserved.
          </span>
          <div className="footer-status">
            <span className="status-dot" />
            <span>Board memory active</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
