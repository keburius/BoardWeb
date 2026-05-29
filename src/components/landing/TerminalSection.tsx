interface TerminalSectionProps {
  typingText: string;
}

export function TerminalSection({ typingText }: TerminalSectionProps) {
  return (
    <section className="terminal-section" id="memory">
      <div className="container">
        <div className="term-header">
          <div className="badge">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M 2 13 L 8 13 L 8 15 L 6 15 L 6 20 L 4 20 L 4 15 L 2 15 Z M 16 15 L 18 15 L 18 4 L 20 4 L 20 15 L 22 15 L 22 17 L 20 17 L 20 20 L 18 20 L 18 17 L 16 17 Z M 9 7 L 11 7 L 11 4 L 13 4 L 13 7 L 15 7 L 15 9 L 9 9 Z M 11 11 L 13 11 L 13 20 L 11 20 Z M 4 4 L 6 4 L 6 11 L 4 11 Z"
                fill="var(--red)"
              />
            </svg>
            MEMORY SYSTEM
          </div>
          <h2>The board remembers<br />everything you said.</h2>
        </div>

        <div className="terminal-artifact">
          <div className="bp-left">
            {[
              { title: "Commitment tracking", desc: "Missed promises flagged automatically" },
              { title: "Financial history", desc: "Numbers compared meeting to meeting" },
              { title: "Open risks", desc: "Unresolved issues always come back" },
            ].map(({ title, desc }) => (
              <div key={title} className="bp-anno">
                <div className="bp-text">
                  <div className="bp-title">{title}</div>
                  <div className="bp-desc">{desc}</div>
                </div>
                <div className="bp-line" />
                <div className="bp-dot" />
              </div>
            ))}
          </div>

          <div className="monitor-casing">
            <div className="monitor-vents">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="monitor-vent" />
              ))}
            </div>
            <div className="monitor-screen-bezel">
              <div className="terminal-window">
                <div className="terminal-bar">
                  <div className="terminal-dots">
                    <span />
                    <span />
                    <span />
                  </div>
                  <span className="terminal-title">
                    secondboard://meeting · live
                  </span>
                  <div className="blink-dot" />
                </div>
                <div className="terminal-body">
                  <div className="term-line">
                    <span className="prompt">λ</span>
                    <span className="cmd">secondboard start</span>
                  </div>
                  <div className="term-line output" style={{ marginTop: "0.5rem" }}>
                    &gt; secondboard load-memory --agent=cfo
                  </div>
                  <div className="term-line output" style={{ color: "rgba(255,255,255,0.4)" }}>
                    &gt; Meeting history: 3 sessions found
                  </div>
                  <div className="term-line output" style={{ marginTop: "0.75rem", color: "rgba(255,255,255,0.5)" }}>
                    OPEN COMMITMENTS:
                  </div>
                  <div className="term-line output" style={{ color: "rgba(255,255,255,0.4)" }}>
                    &nbsp;&nbsp;· Churn model &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#E8593C" }}>MISSED × 2</span>
                  </div>
                  <div className="term-line output" style={{ color: "rgba(255,255,255,0.4)" }}>
                    &nbsp;&nbsp;· CAC target below 15 GEL &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#E8593C" }}>OPEN</span>
                  </div>
                  <div className="term-line output" style={{ color: "rgba(255,255,255,0.4)" }}>
                    &nbsp;&nbsp;· Turkey P&amp;L model &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#E8593C" }}>OPEN</span>
                  </div>
                  <div className="term-line output" style={{ marginTop: "0.75rem", color: "rgba(255,255,255,0.5)" }}>
                    RECENT FACTS:
                  </div>
                  <div className="term-line output" style={{ color: "rgba(255,255,255,0.4)" }}>
                    &nbsp;&nbsp;· Burn rate 185K → 162K &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="success">improving</span>
                  </div>
                  <div className="term-line output" style={{ color: "rgba(255,255,255,0.4)" }}>
                    &nbsp;&nbsp;· Bridge round 500K GEL &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="success">closed</span>
                  </div>
                  <div className="term-line output" style={{ color: "rgba(255,255,255,0.4)" }}>
                    &nbsp;&nbsp;· Armenia share 38% → 31% &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#E8593C" }}>declining</span>
                  </div>
                  <div className="term-line gap">
                    <span className="success">✓</span>
                    <span className="cmd">12 memories injected</span>
                    <span className="info">CFO: <span className="term-off">READY</span></span>
                  </div>
                  <div className="term-line gap">
                    <span className="prompt">λ</span>
                    <span className="cmd">{typingText}</span>
                    <span className="cursor-block" />
                  </div>
                </div>
              </div>
            </div>
            <div className="monitor-bezel-bottom">
              <span>SecondBoard.ai</span>
              <div className="monitor-led" />
              <span className="model-tag">MEMORY ON</span>
              <span>3 meetings</span>
            </div>
          </div>

          <div className="bp-right">
            {[
              { title: "Per-agent memory", desc: "CFO knows financials. CMO knows growth." },
              { title: "Compounds over time", desc: "Meeting 10 feels nothing like meeting 1" },
              { title: "Zero manual input", desc: "Extraction runs automatically after every meeting" },
            ].map(({ title, desc }) => (
              <div key={title} className="bp-anno right">
                <div className="bp-dot" />
                <div className="bp-line" />
                <div className="bp-text" style={{ textAlign: "left" }}>
                  <div className="bp-title">{title}</div>
                  <div className="bp-desc">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
