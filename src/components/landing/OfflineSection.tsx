export function OfflineSection() {
  return (
    <section className="offline-section">
      <div className="container">
        <div className="offline-layout">
          <div className="offline-visual">
            <svg
              viewBox="0 0 480 420"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: "100%", maxWidth: "480px", opacity: 0.9 }}
            >
              <defs>
                <path id="path-ceo-center" d="M170,95 L200,170" />
                <path id="path-cfo-center" d="M310,95 L280,170" />
                <path id="path-cmo-center" d="M170,290 L200,250" />
                <path id="path-lead-center" d="M310,290 L280,250" />
              </defs>

              {/* Background circles */}
              <circle cx="240" cy="210" r="180" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
              <circle cx="240" cy="210" r="140" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>

              {/* Corner brackets */}
              <line x1="20" y1="44" x2="20" y2="24" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
              <line x1="20" y1="24" x2="40" y2="24" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
              <line x1="460" y1="44" x2="460" y2="24" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
              <line x1="460" y1="24" x2="440" y2="24" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
              <line x1="20" y1="376" x2="20" y2="396" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
              <line x1="20" y1="396" x2="40" y2="396" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
              <line x1="460" y1="376" x2="460" y2="396" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
              <line x1="460" y1="396" x2="440" y2="396" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>

              {/* Center node — MEETING */}
              <rect x="180" y="170" width="120" height="80" fill="#111" stroke="rgba(255,255,255,0.2)" strokeWidth="1" rx="2"/>
              <text x="240" y="200" textAnchor="middle" fontFamily="'IBM Plex Mono', monospace" fontSize="10" fill="rgba(255,255,255,0.9)" letterSpacing="2" fontWeight="500">MEETING</text>
              <text x="240" y="218" textAnchor="middle" fontFamily="'IBM Plex Mono', monospace" fontSize="8" fill="#1D9E75" letterSpacing="1">● ACTIVE</text>
              <text x="240" y="236" textAnchor="middle" fontFamily="'IBM Plex Mono', monospace" fontSize="7" fill="rgba(255,255,255,0.3)" letterSpacing="1">4 AGENTS PRESENT</text>

              {/* CEO card — top left */}
              <rect x="30" y="40" width="140" height="90" fill="#0a0a0a" stroke="#185FA5" strokeWidth="0.5" rx="2" strokeOpacity="0.6"/>
              <rect x="30" y="40" width="140" height="16" fill="#185FA5" fillOpacity="0.15" rx="2"/>
              <text x="40" y="52" fontFamily="'IBM Plex Mono', monospace" fontSize="8" fill="#185FA5" letterSpacing="2">CEO</text>
              <text x="155" y="52" textAnchor="end" fontFamily="'IBM Plex Mono', monospace" fontSize="7" fill="rgba(255,255,255,0.3)">001</text>
              <text x="40" y="74" fontFamily="'IBM Plex Mono', monospace" fontSize="7" fill="rgba(255,255,255,0.5)">· Turkey conditions set</text>
              <text x="40" y="88" fontFamily="'IBM Plex Mono', monospace" fontSize="7" fill="rgba(255,255,255,0.5)">· Series A Q2 target</text>
              <text x="40" y="102" fontFamily="'IBM Plex Mono', monospace" fontSize="7" fill="rgba(255,255,255,0.5)">· Armenia risk flagged</text>
              <text x="40" y="118" fontFamily="'IBM Plex Mono', monospace" fontSize="7" fill="#1D9E75">✓ 8 memories loaded</text>

              {/* CFO card — top right */}
              <rect x="310" y="40" width="140" height="90" fill="#0a0a0a" stroke="#993C1D" strokeWidth="0.5" rx="2" strokeOpacity="0.6"/>
              <rect x="310" y="40" width="140" height="16" fill="#993C1D" fillOpacity="0.15" rx="2"/>
              <text x="320" y="52" fontFamily="'IBM Plex Mono', monospace" fontSize="8" fill="#993C1D" letterSpacing="2">CFO</text>
              <text x="435" y="52" textAnchor="end" fontFamily="'IBM Plex Mono', monospace" fontSize="7" fill="rgba(255,255,255,0.3)">002</text>
              <text x="320" y="74" fontFamily="'IBM Plex Mono', monospace" fontSize="7" fill="rgba(255,255,255,0.5)">· Burn 185K → 162K</text>
              <text x="320" y="88" fontFamily="'IBM Plex Mono', monospace" fontSize="7" fill="rgba(255,255,255,0.5)">· Churn model [OPEN]</text>
              <text x="320" y="102" fontFamily="'IBM Plex Mono', monospace" fontSize="7" fill="rgba(255,255,255,0.5)">{"· CAC target <15 GEL"}</text>
              <text x="320" y="118" fontFamily="'IBM Plex Mono', monospace" fontSize="7" fill="#1D9E75">✓ 12 memories loaded</text>

              {/* CMO card — bottom left */}
              <rect x="30" y="290" width="140" height="90" fill="#0a0a0a" stroke="#534AB7" strokeWidth="0.5" rx="2" strokeOpacity="0.6"/>
              <rect x="30" y="290" width="140" height="16" fill="#534AB7" fillOpacity="0.15" rx="2"/>
              <text x="40" y="302" fontFamily="'IBM Plex Mono', monospace" fontSize="8" fill="#534AB7" letterSpacing="2">CMO</text>
              <text x="155" y="302" textAnchor="end" fontFamily="'IBM Plex Mono', monospace" fontSize="7" fill="rgba(255,255,255,0.3)">003</text>
              <text x="40" y="324" fontFamily="'IBM Plex Mono', monospace" fontSize="7" fill="rgba(255,255,255,0.5)">· CAC 18 GEL no fix</text>
              <text x="40" y="338" fontFamily="'IBM Plex Mono', monospace" fontSize="7" fill="rgba(255,255,255,0.5)">· Influencer 11 GEL</text>
              <text x="40" y="352" fontFamily="'IBM Plex Mono', monospace" fontSize="7" fill="rgba(255,255,255,0.5)">· Armenia share 31%</text>
              <text x="40" y="368" fontFamily="'IBM Plex Mono', monospace" fontSize="7" fill="#1D9E75">✓ 7 memories loaded</text>

              {/* Lead card — bottom right */}
              <rect x="310" y="290" width="140" height="90" fill="#0a0a0a" stroke="#854F0B" strokeWidth="0.5" rx="2" strokeOpacity="0.6"/>
              <rect x="310" y="290" width="140" height="16" fill="#854F0B" fillOpacity="0.15" rx="2"/>
              <text x="320" y="302" fontFamily="'IBM Plex Mono', monospace" fontSize="8" fill="#854F0B" letterSpacing="2">LEAD</text>
              <text x="435" y="302" textAnchor="end" fontFamily="'IBM Plex Mono', monospace" fontSize="7" fill="rgba(255,255,255,0.3)">004</text>
              <text x="320" y="324" fontFamily="'IBM Plex Mono', monospace" fontSize="7" fill="rgba(255,255,255,0.5)">· Bridge round signed</text>
              <text x="320" y="338" fontFamily="'IBM Plex Mono', monospace" fontSize="7" fill="rgba(255,255,255,0.5)">· Giorgi concerned</text>
              <text x="320" y="352" fontFamily="'IBM Plex Mono', monospace" fontSize="7" fill="rgba(255,255,255,0.5)">· Series A conditions</text>
              <text x="320" y="368" fontFamily="'IBM Plex Mono', monospace" fontSize="7" fill="#1D9E75">✓ 5 memories loaded</text>

              {/* Connection line — CEO to center */}
              <line x1="170" y1="95" x2="200" y2="170" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="3 4"/>
              <circle r="2.5" fill="#185FA5" opacity="0.7">
                <animateMotion dur="2.5s" repeatCount="indefinite" begin="0s">
                  <mpath href="#path-ceo-center" />
                </animateMotion>
              </circle>

              {/* Connection line — CFO to center */}
              <line x1="310" y1="95" x2="280" y2="170" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="3 4"/>
              <circle r="2.5" fill="#993C1D" opacity="0.7">
                <animateMotion dur="2.5s" repeatCount="indefinite" begin="0.6s">
                  <mpath href="#path-cfo-center" />
                </animateMotion>
              </circle>

              {/* Connection line — CMO to center */}
              <line x1="170" y1="290" x2="200" y2="250" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="3 4"/>
              <circle r="2.5" fill="#534AB7" opacity="0.7">
                <animateMotion dur="2.5s" repeatCount="indefinite" begin="1.2s">
                  <mpath href="#path-cmo-center" />
                </animateMotion>
              </circle>

              {/* Connection line — Lead to center */}
              <line x1="310" y1="290" x2="280" y2="250" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="3 4"/>
              <circle r="2.5" fill="#854F0B" opacity="0.7">
                <animateMotion dur="2.5s" repeatCount="indefinite" begin="1.8s">
                  <mpath href="#path-lead-center" />
                </animateMotion>
              </circle>

              {/* Bottom label */}
              <text x="240" y="415" textAnchor="middle" fontFamily="'IBM Plex Mono', monospace" fontSize="8" fill="rgba(255,255,255,0.2)" letterSpacing="3">MEMORY INJECTED BEFORE EVERY MEETING</text>
            </svg>
          </div>

          <div className="offline-content">
            <div className="badge">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M 5 4 L 19 4 L 19 6 L 5 6 Z M 19 15 L 19 6 L 21 6 L 21 17 L 3 17 L 3 6 L 5 6 L 5 15 Z M 3 18 L 21 18 L 21 20 L 3 20 Z"
                  fill="var(--red)"
                />
              </svg>
              Memory
            </div>
            <h2>
              Your whole board
              <br />
              remembers.
            </h2>
            <p>
              After every meeting each agent automatically extracts what mattered.{" "}
              Next time they walk in knowing your numbers, your commitments,{" "}
              and what you promised last quarter.
            </p>

            <div style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.72rem", lineHeight: 1.6 }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#993C1D", flexShrink: 0, marginTop: "5px" }}></span>
                <span style={{ color: "rgba(255,255,255,0.45)" }}>CFO: <span style={{ color: "rgba(255,255,255,0.7)" }}>"You committed to the churn model by Q3. It is now Q4."</span></span>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.72rem", lineHeight: 1.6 }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#185FA5", flexShrink: 0, marginTop: "5px" }}></span>
                <span style={{ color: "rgba(255,255,255,0.45)" }}>CEO: <span style={{ color: "rgba(255,255,255,0.7)" }}>"We conditioned Turkey on bridge round closure. Was that met?"</span></span>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.72rem", lineHeight: 1.6 }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#534AB7", flexShrink: 0, marginTop: "5px" }}></span>
                <span style={{ color: "rgba(255,255,255,0.45)" }}>CMO: <span style={{ color: "rgba(255,255,255,0.7)" }}>"Armenia was at 38% last quarter. What drove it to 31%?"</span></span>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.72rem", lineHeight: 1.6 }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#854F0B", flexShrink: 0, marginTop: "5px" }}></span>
                <span style={{ color: "rgba(255,255,255,0.45)" }}>Lead: <span style={{ color: "rgba(255,255,255,0.7)" }}>"Giorgi flagged Series A concerns last time. Where do we stand?"</span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
