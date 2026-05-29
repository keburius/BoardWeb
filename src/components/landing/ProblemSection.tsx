import { FadeUp, StaggerContainer, StaggerItem } from "./animations";

export function ProblemSection() {
  return (
    <section className="problem-section">
      <div className="container">
        <div className="problem-outer">
          <FadeUp className="problem-top">
            <div className="badge">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M 11 11 L 13 11 L 13 13 L 11 13 Z M 15 7 L 17 7 L 17 9 L 15 9 Z M 7 7 L 9 7 L 9 9 L 7 9 Z M 7 15 L 9 15 L 9 17 L 7 17 Z M 15 15 L 17 15 L 17 17 L 15 17 Z M 5 17 L 7 17 L 7 19 L 5 19 Z M 5 5 L 7 5 L 7 7 L 5 7 Z M 9 13 L 11 13 L 11 15 L 9 15 Z M 13 13 L 15 13 L 15 15 L 13 15 Z M 13 9 L 15 9 L 15 11 L 13 11 Z M 9 9 L 11 9 L 11 11 L 9 11 Z M 17 5 L 19 5 L 19 7 L 17 7 Z M 17 17 L 19 17 L 19 19 L 17 19 Z"
                  fill="var(--red)"
                />
              </svg>
              The problem
            </div>
            <h2 className="problem-headline">
              Board meetings are memory tests.
              <br />
              Most founders walk in cold.
            </h2>
          </FadeUp>

          <StaggerContainer className="problem-grid">
            <StaggerItem className="problem-eye-col">
              <svg
                className="problem-eye-svg"
                viewBox="0 0 400 400"
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: "100%", maxWidth: "420px", opacity: 0.85 }}
              >
                {/* Corner brackets */}
                <line x1="20" y1="40" x2="20" y2="20" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
                <line x1="20" y1="20" x2="40" y2="20" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
                <line x1="380" y1="40" x2="380" y2="20" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
                <line x1="380" y1="20" x2="360" y2="20" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
                <line x1="20" y1="360" x2="20" y2="380" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
                <line x1="20" y1="380" x2="40" y2="380" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
                <line x1="380" y1="360" x2="380" y2="380" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
                <line x1="380" y1="380" x2="360" y2="380" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>

                {/* Concentric circles */}
                <circle cx="200" cy="200" r="160" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
                <circle cx="200" cy="200" r="120" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
                <circle cx="200" cy="200" r="80" fill="none" stroke="rgba(255,255,255,0.09)" strokeWidth="1"/>
                <circle cx="200" cy="200" r="45" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>

                {/* Crosshair lines */}
                <line x1="200" y1="30" x2="200" y2="145" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
                <line x1="200" y1="255" x2="200" y2="370" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
                <line x1="30" y1="200" x2="145" y2="200" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
                <line x1="255" y1="200" x2="370" y2="200" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>

                {/* Left hemisphere outer */}
                <path
                  d="M200 148 C200 148 174 140 160 150 C146 160 142 176 146 190 C138 198 138 214 146 224 C140 238 150 252 164 254 C172 262 186 264 200 260"
                  fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                />
                <path d="M162 172 C170 166 180 168 186 176" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M156 192 C166 186 178 188 184 196" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M158 212 C168 206 180 208 185 216" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M162 232 C172 226 182 228 186 235" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeLinecap="round"/>

                {/* Right hemisphere outer */}
                <path
                  d="M200 148 C200 148 226 140 240 150 C254 160 258 176 254 190 C262 198 262 214 254 224 C260 238 250 252 236 254 C228 262 214 264 200 260"
                  fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                />
                <path d="M238 172 C230 166 220 168 214 176" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M244 192 C234 186 222 188 216 196" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M242 212 C232 206 220 208 215 216" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M238 232 C228 226 218 228 214 235" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeLinecap="round"/>

                {/* Center dividing line */}
                <line x1="200" y1="148" x2="200" y2="260" stroke="rgba(255,255,255,0.18)" strokeWidth="1" strokeDasharray="3 4"/>

                {/* Bottom stem */}
                <path
                  d="M186 260 C190 268 196 272 200 272 C204 272 210 268 214 260"
                  fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeLinecap="round"
                />

                {/* Orange pulse dot */}
                <circle cx="200" cy="200" r="6" fill="#E8593C">
                  <animate attributeName="r" values="6;10;6" dur="2s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="1;0.6;1" dur="2s" repeatCount="indefinite"/>
                </circle>
                <circle cx="200" cy="200" r="18" fill="none" stroke="#E8593C" strokeWidth="0.5" opacity="0.4">
                  <animate attributeName="r" values="18;28;18" dur="2s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.4;0;0.4" dur="2s" repeatCount="indefinite"/>
                </circle>

                <text
                  x="200"
                  y="392"
                  textAnchor="middle"
                  fontFamily="'IBM Plex Mono', monospace"
                  fontSize="9"
                  fill="rgba(255,255,255,0.25)"
                  letterSpacing="3"
                >
                  MEMORY ACTIVE
                </text>
              </svg>
            </StaggerItem>

            <StaggerItem className="problem-card" hoverLift>
              <div className="problem-card-header">
                <span className="problem-card-label">COMMITMENTS</span>
                <span className="problem-card-number">001</span>
              </div>
              <h3>Your commitments follow you.</h3>
              <p>
                You said churn would be under 5% by Q3. It is Q4. The CFO remembers. You are not sure you do.
              </p>
            </StaggerItem>

            <StaggerItem className="problem-card" hoverLift>
              <div className="problem-card-header">
                <span className="problem-card-label">REPEAT QUESTIONS</span>
                <span className="problem-card-number">002</span>
              </div>
              <h3>They ask the same questions.</h3>
              <p>
                Burn rate. CAC. Armenia. Every meeting. Because nobody remembered you covered it last time.
              </p>
            </StaggerItem>

            <StaggerItem className="problem-card" hoverLift>
              <div className="problem-card-header">
                <span className="problem-card-label">MISSING CONTEXT</span>
                <span className="problem-card-number">003</span>
              </div>
              <h3>Your board does not know you.</h3>
              <p>
                They read the deck for the first time every time. No history. No context. Generic questions from people who should know your company by now.
              </p>
            </StaggerItem>

            <StaggerItem className="problem-card" hoverLift>
              <div className="problem-card-header">
                <span className="problem-card-label">REAL PRESSURE</span>
                <span className="problem-card-number">004</span>
              </div>
              <h3>You have never practiced.</h3>
              <p>
                You have rehearsed the slides. You have not rehearsed the CFO asking why you missed the Q3 target you committed to six months ago.
              </p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
