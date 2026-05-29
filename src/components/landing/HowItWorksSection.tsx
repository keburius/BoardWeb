import { steps } from "./constants";

interface HowItWorksSectionProps {
  activeStep: number;
  onStepChange: (n: number) => void;
}

export function HowItWorksSection({
  activeStep,
  onStepChange,
}: HowItWorksSectionProps) {
  return (
    <section className="how-section" id="our-approach">
      <div className="container">
        <div className="how-intro">
          <div className="badge">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M 10 4 L 16 4 L 16 6 L 10 6 Z M 10 16 L 16 16 L 16 18 L 10 18 Z M 16 6 L 18 6 L 18 8 L 16 8 Z M 18 8 L 20 8 L 20 14 L 18 14 Z M 6 8 L 8 8 L 8 14 L 6 14 Z M 8 6 L 10 6 L 10 8 L 8 8 Z M 8 14 L 10 14 L 10 16 L 8 16 Z M 6 16 L 8 16 L 8 18 L 6 18 Z M 4 18 L 6 18 L 6 20 L 4 20 Z M 16 14 L 18 14 L 18 16 L 16 16 Z"
                fill="var(--red)"
              />
            </svg>
            How It Works
          </div>
          <h2>How it works.</h2>
          <p>
            Four agents. Your document. A board that remembers every meeting.
          </p>
        </div>

        <div className="how-stepper">
          <div className="how-steps-left">
            {steps.map(({ n, title, bodyLines }) => (
              <button
                key={n}
                className={`how-step${activeStep === n ? " active" : ""}`}
                data-step={n}
                onClick={() => onStepChange(n)}
              >
                <div className="how-step-progress">
                  <div className="how-step-progress-fill" />
                </div>
                <div className="how-step-num">Step 0{n}</div>
                <h3>{title}</h3>
                <div className="how-step-body">
                  <div className="how-step-body-inner">
                    {bodyLines.map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="how-illustration">
            <span className="card-title">SecondBoard.ai</span>

            <div
              className={`how-card-content${activeStep === 1 ? " active" : ""}`}
              data-content="1"
            >
              <span className="hl-dim">Document loaded</span>
              <br /><br />
              <span className="hl-bright">your-deck.pdf</span>
              <span className="hl-green"> ✓ parsed</span>
              <br />
              <span className="hl-dim">financials_q3.xlsx </span>
              <span className="hl-green">✓ parsed</span>
              <br />
              <span className="hl-dim">market_update.txt </span>
              <span className="hl-green">✓ parsed</span>
              <br /><br />
              <span className="hl-dim">Agents preparing:</span>
              <br />
              <span style={{color: '#185FA5'}}>■</span><span className="hl-dim"> CEO &nbsp;&nbsp;&nbsp;── reading strategy context</span>
              <br />
              <span style={{color: '#993C1D'}}>■</span><span className="hl-dim"> CFO &nbsp;&nbsp;&nbsp;── loading financial memory</span>
              <br />
              <span style={{color: '#534AB7'}}>■</span><span className="hl-dim"> CMO &nbsp;&nbsp;&nbsp;── checking growth data</span>
              <br />
              <span style={{color: '#854F0B'}}>■</span><span className="hl-dim"> LEAD &nbsp;&nbsp;── reviewing commitments</span>
              <br /><br />
              <span className="hl-bright">Board ready.</span>
              <span className="hl-green"> Meeting can begin.</span>
            </div>

            <div
              className={`how-card-content${activeStep === 2 ? " active" : ""}`}
              data-content="2"
            >
              <span className="hl-dim">Round 1 · Open discussion</span>
              <br /><br />
              <span style={{color: '#185FA5'}}>CEO</span>
              <span className="hl-dim"> ── "Four months runway and you want Turkey?"</span>
              <br /><br />
              <span style={{color: '#993C1D'}}>CFO</span>
              <span className="hl-dim"> ── "Show me the unit economics first."</span>
              <br /><br />
              <span style={{color: '#993C1D'}}>CFO</span>
              <span className="hl-dim"> → </span>
              <span style={{color: '#534AB7'}}>CMO</span>
              <span className="hl-dim" style={{fontStyle: 'italic'}}> "Walk me through that CAC at scale."</span>
              <br /><br />
              <span style={{color: '#534AB7'}}>CMO</span>
              <span className="hl-dim"> ── "Fair. 200 users is not enough data."</span>
              <br /><br />
              <span className="hl-dim">─────────────────────────────</span>
              <br />
              <span className="hl-dim">Question for presenter:</span>
              <br />
              <span className="hl-bright">"What is the bridge round status?"</span>
            </div>

            <div
              className={`how-card-content${activeStep === 3 ? " active" : ""}`}
              data-content="3"
            >
              <span className="hl-dim">CFO memory · loaded</span>
              <br /><br />
              <span className="hl-dim">· Churn model &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span style={{color: '#E8593C'}}>OPEN · 2 meetings</span>
              <br />
              <span className="hl-dim">· Burn 185K → 162K &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span className="hl-green">improving</span>
              <br />
              <span className="hl-dim">· CAC target &lt;15 GEL &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span style={{color: '#E8593C'}}>not met</span>
              <br />
              <span className="hl-dim">· Bridge round &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span className="hl-green">signed</span>
              <br />
              <span className="hl-dim">· Turkey conditions &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span style={{color: '#E8593C'}}>pending</span>
              <br /><br />
              <span className="hl-dim">─────────────────────────────</span>
              <br />
              <span className="hl-dim">Meetings completed: </span>
              <span className="hl-bright">3</span>
              <br />
              <span className="hl-dim">Memories extracted: </span>
              <span className="hl-bright">47</span>
              <br />
              <span className="hl-dim">Forgotten promises: </span>
              <span className="hl-green">0</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
