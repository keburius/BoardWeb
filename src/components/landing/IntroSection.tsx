export function IntroSection() {
  return (
    <section className="intro-section" id="intro-rig">
      <div className="intro-bg" />
      <div className="container">
        <div className="intro-inner">
          <div className="badge">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M 14 11 L 16 11 L 16 13 L 14 13 Z M 18 7 L 20 7 L 20 9 L 18 9 Z M 4 13 L 6 13 L 6 15 L 4 15 Z M 10 15 L 12 15 L 12 17 L 10 17 Z M 8 17 L 10 17 L 10 19 L 8 19 Z M 12 13 L 14 13 L 14 15 L 12 15 Z M 16 9 L 18 9 L 18 11 L 16 11 Z M 6 15 L 8 15 L 8 17 L 6 17 Z"
                fill="var(--red)"
              />
            </svg>
            HOW IT WORKS
          </div>
          <h2>
            Upload your deck.
            <br />
            Face your board.
            <br />
            Walk in prepared.
          </h2>
          <p>
            Four AI board members debate your document, question your numbers,{" "}
            and remember everything from last time.
          </p>

          <div className="intro-diagram-wrap">
            <svg
              className="intro-diagram"
              viewBox="0 0 560 280"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="trail-h1" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#22c55e" stopOpacity="0" />
                  <stop offset="100%" stopColor="#22c55e" stopOpacity="0.6" />
                </linearGradient>
                <linearGradient id="trail-h2" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#22c55e" stopOpacity="0" />
                  <stop offset="100%" stopColor="#22c55e" stopOpacity="0.6" />
                </linearGradient>
                <path id="path-code-rig" d="M130,125 L193,125" />
                <path id="path-rig-resp" d="M353,125 L423,125" />
                <path id="path-cloud-down" d="M273,37 L273,57" />
                <path id="path-rig-telem" d="M273,172 L273,192" />
              </defs>

              <rect
                x="5"
                y="68"
                width="550"
                height="112"
                fill="none"
                stroke="rgba(240,237,230,0.08)"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
              <rect x="15" y="61" width="96" height="14" fill="#0a0a0a" />
              <text
                x="20"
                y="71"
                fontFamily="monospace"
                fontSize="6"
                letterSpacing="2"
                fill="rgba(240,237,230,0.3)"
              >
                YOUR COMPANY
              </text>

              {/* BOARD DOC box */}
              <rect
                x="20"
                y="100"
                width="110"
                height="50"
                fill="rgba(10,10,10,0.95)"
                stroke="rgba(240,237,230,0.15)"
                strokeWidth="1"
              />
              <text
                x="75"
                y="121"
                textAnchor="middle"
                dominantBaseline="central"
                fontFamily="monospace"
                fontSize="7"
                letterSpacing="1.5"
                fill="rgba(240,237,230,0.4)"
              >
                YOUR DOCUMENT
              </text>
              <text
                x="75"
                y="133"
                textAnchor="middle"
                dominantBaseline="central"
                fontFamily="monospace"
                fontSize="5.5"
                letterSpacing="1"
                fill="rgba(240,237,230,0.25)"
              >
                deck · report · update
              </text>

              {/* Left connector line */}
              <line
                x1="130"
                y1="125"
                x2="193"
                y2="125"
                stroke="rgba(34,197,94,0.15)"
                strokeWidth="1"
              />
              <line
                x1="130"
                y1="125"
                x2="193"
                y2="125"
                stroke="url(#trail-h1)"
                strokeWidth="2"
              >
                <animate
                  attributeName="opacity"
                  values="0.2;0.6;0.2"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </line>
              <rect x="-1.5" y="-1.5" width="3" height="3" fill="#22c55e">
                <animateMotion
                  dur="2s"
                  repeatCount="indefinite"
                  keyPoints="0;1"
                  keyTimes="0;1"
                  calcMode="linear"
                >
                  <mpath href="#path-code-rig" />
                </animateMotion>
                <animate
                  attributeName="opacity"
                  values="0;1;1;0"
                  keyTimes="0;0.1;0.8;1"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </rect>
              {/* Teal traveling dot — left line */}
              <rect x="-2" y="-2" width="4" height="4" fill="#1D9E75">
                <animateMotion
                  dur="2.5s"
                  repeatCount="indefinite"
                  keyPoints="0;1"
                  keyTimes="0;1"
                  calcMode="linear"
                >
                  <mpath href="#path-code-rig" />
                </animateMotion>
                <animate
                  attributeName="opacity"
                  values="0;1;1;0"
                  keyTimes="0;0.1;0.9;1"
                  dur="2.5s"
                  repeatCount="indefinite"
                />
              </rect>

              {/* CENTER BOX */}
              <rect
                x="193"
                y="78"
                width="160"
                height="94"
                fill="rgba(10,10,10,0.95)"
                stroke="rgba(240,237,230,0.2)"
                strokeWidth="1.5"
              />
              <text
                x="274.5"
                y="108"
                textAnchor="middle"
                dominantBaseline="central"
                fontFamily="monospace"
                fontSize="12"
                letterSpacing="3"
                fill="#f0ede6"
              >
                SecondBoard.ai
              </text>
              <text
                x="273"
                y="124"
                textAnchor="middle"
                dominantBaseline="central"
                fontFamily="monospace"
                fontSize="5.5"
                letterSpacing="1.5"
                fill="#22c55e"
              >
                · LIVE SIMULATION
              </text>
              <line
                x1="210"
                y1="145"
                x2="336"
                y2="145"
                stroke="rgba(240,237,230,0.08)"
                strokeWidth="0.5"
              />
              {/* Agent colored dots */}
              <circle cx="211" cy="160" r="2.5" fill="#185FA5" />
              <text
                x="221"
                y="160"
                textAnchor="middle"
                dominantBaseline="central"
                fontFamily="monospace"
                fontSize="5"
                letterSpacing="1"
                fill="rgba(240,237,230,0.25)"
              >
                CEO
              </text>
              <circle cx="246" cy="160" r="2.5" fill="#534AB7" />
              <text
                x="256"
                y="160"
                textAnchor="middle"
                dominantBaseline="central"
                fontFamily="monospace"
                fontSize="5"
                letterSpacing="1"
                fill="rgba(240,237,230,0.25)"
              >
                CMO
              </text>
              <circle cx="281" cy="160" r="2.5" fill="#993C1D" />
              <text
                x="291"
                y="160"
                textAnchor="middle"
                dominantBaseline="central"
                fontFamily="monospace"
                fontSize="5"
                letterSpacing="1"
                fill="rgba(240,237,230,0.25)"
              >
                CFO
              </text>
              <circle cx="314" cy="160" r="2.5" fill="#854F0B" />
              <text
                x="326"
                y="160"
                textAnchor="middle"
                dominantBaseline="central"
                fontFamily="monospace"
                fontSize="5"
                letterSpacing="1"
                fill="rgba(240,237,230,0.25)"
              >
                LEAD
              </text>

              {/* Right connector line */}
              <line
                x1="353"
                y1="125"
                x2="423"
                y2="125"
                stroke="rgba(34,197,94,0.15)"
                strokeWidth="1"
              />
              <line
                x1="353"
                y1="125"
                x2="423"
                y2="125"
                stroke="url(#trail-h2)"
                strokeWidth="2"
              >
                <animate
                  attributeName="opacity"
                  values="0.2;0.6;0.2"
                  dur="2s"
                  begin="1s"
                  repeatCount="indefinite"
                />
              </line>
              <rect x="-1.5" y="-1.5" width="3" height="3" fill="#22c55e">
                <animateMotion
                  dur="2s"
                  begin="1s"
                  repeatCount="indefinite"
                  keyPoints="0;1"
                  keyTimes="0;1"
                  calcMode="linear"
                >
                  <mpath href="#path-rig-resp" />
                </animateMotion>
                <animate
                  attributeName="opacity"
                  values="0;1;1;0"
                  keyTimes="0;0.1;0.8;1"
                  dur="2s"
                  begin="1s"
                  repeatCount="indefinite"
                />
              </rect>
              {/* Teal traveling dot — right line */}
              <rect x="-2" y="-2" width="4" height="4" fill="#1D9E75">
                <animateMotion
                  dur="2.5s"
                  begin="1.2s"
                  repeatCount="indefinite"
                  keyPoints="0;1"
                  keyTimes="0;1"
                  calcMode="linear"
                >
                  <mpath href="#path-rig-resp" />
                </animateMotion>
                <animate
                  attributeName="opacity"
                  values="0;1;1;0"
                  keyTimes="0;0.1;0.9;1"
                  dur="2.5s"
                  begin="1.2s"
                  repeatCount="indefinite"
                />
              </rect>

              {/* QUESTIONS box */}
              <rect
                x="423"
                y="100"
                width="120"
                height="50"
                fill="rgba(10,10,10,0.95)"
                stroke="rgba(240,237,230,0.15)"
                strokeWidth="1"
              />
              <text
                x="483"
                y="121"
                textAnchor="middle"
                dominantBaseline="central"
                fontFamily="monospace"
                fontSize="7"
                letterSpacing="1.5"
                fill="rgba(240,237,230,0.4)"
              >
                HARD QUESTIONS
              </text>
              <text
                x="483"
                y="133"
                textAnchor="middle"
                dominantBaseline="central"
                fontFamily="monospace"
                fontSize="5.5"
                letterSpacing="1"
                fill="#22c55e"
              >
                live · in character
              </text>

              {/* REAL BOARD box */}
              <rect
                x="213"
                y="5"
                width="120"
                height="32"
                fill="rgba(10,10,10,0.95)"
                stroke="rgba(240,237,230,0.1)"
                strokeWidth="1"
              />
              <text
                x="273"
                y="16"
                textAnchor="middle"
                dominantBaseline="central"
                fontFamily="monospace"
                fontSize="7"
                letterSpacing="1.5"
                fill="rgba(240,237,230,0.4)"
              >
                YOUR REAL BOARD
              </text>
              <text
                x="273"
                y="27"
                textAnchor="middle"
                dominantBaseline="central"
                fontFamily="monospace"
                fontSize="5"
                letterSpacing="0.5"
                fill="rgba(240,237,230,0.25)"
              >
                the meeting that counts
              </text>
              {/* Vertical line from REAL BOARD to center box */}
              <line
                x1="273"
                y1="37"
                x2="273"
                y2="78"
                stroke="#ed462d"
                strokeWidth="0.5"
                strokeDasharray="3 5"
                opacity="0.4"
              />
              {/* Top X */}
              <line
                x1="267"
                y1="51"
                x2="279"
                y2="63"
                stroke="#ed462d"
                strokeWidth="1.5"
              />
              <line
                x1="279"
                y1="51"
                x2="267"
                y2="63"
                stroke="#ed462d"
                strokeWidth="1.5"
              />
              {/* Top X label */}
              <text
                x="284"
                y="57"
                textAnchor="start"
                dominantBaseline="middle"
                fontFamily="monospace"
                fontSize="9"
                fill="rgba(255,255,255,0.3)"
                letterSpacing="0.9"
              >
                practice here first
              </text>
              <rect x="-1.5" y="-1.5" width="3" height="3" fill="#ed462d">
                <animateMotion
                  dur="1.5s"
                  repeatCount="indefinite"
                  keyPoints="0;1"
                  keyTimes="0;1"
                  calcMode="linear"
                >
                  <mpath href="#path-cloud-down" />
                </animateMotion>
                <animate
                  attributeName="opacity"
                  values="0.8;0.8;0"
                  keyTimes="0;0.6;1"
                  dur="1.5s"
                  repeatCount="indefinite"
                />
              </rect>

              {/* Vertical line from center box to MEMORY */}
              <line
                x1="273"
                y1="172"
                x2="273"
                y2="215"
                stroke="#ed462d"
                strokeWidth="0.5"
                strokeDasharray="3 5"
                opacity="0.4"
              />
              {/* Bottom X */}
              <line
                x1="267"
                y1="187"
                x2="279"
                y2="199"
                stroke="#ed462d"
                strokeWidth="1.5"
              />
              <line
                x1="279"
                y1="187"
                x2="267"
                y2="199"
                stroke="#ed462d"
                strokeWidth="1.5"
              />
              {/* Bottom X label */}
              <text
                x="284"
                y="193"
                textAnchor="start"
                dominantBaseline="middle"
                fontFamily="monospace"
                fontSize="9"
                fill="rgba(255,255,255,0.3)"
                letterSpacing="0.9"
              >
                memory saves automatically
              </text>
              <rect x="-1.5" y="-1.5" width="3" height="3" fill="#ed462d">
                <animateMotion
                  dur="1.5s"
                  begin="0.75s"
                  repeatCount="indefinite"
                  keyPoints="0;1"
                  keyTimes="0;1"
                  calcMode="linear"
                >
                  <mpath href="#path-rig-telem" />
                </animateMotion>
                <animate
                  attributeName="opacity"
                  values="0.8;0.8;0"
                  keyTimes="0;0.6;1"
                  dur="1.5s"
                  begin="0.75s"
                  repeatCount="indefinite"
                />
              </rect>

              {/* MEMORY box */}
              <rect
                x="213"
                y="215"
                width="120"
                height="32"
                fill="rgba(10,10,10,0.95)"
                stroke="rgba(240,237,230,0.1)"
                strokeWidth="1"
              />
              <text
                x="273"
                y="225"
                textAnchor="middle"
                dominantBaseline="central"
                fontFamily="monospace"
                fontSize="7"
                letterSpacing="1.5"
                fill="rgba(240,237,230,0.4)"
              >
                PERSISTENT MEMORY
              </text>
              <text
                x="273"
                y="236"
                textAnchor="middle"
                dominantBaseline="central"
                fontFamily="monospace"
                fontSize="5"
                letterSpacing="0.5"
                fill="rgba(240,237,230,0.25)"
              >
                agents remember everything
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
