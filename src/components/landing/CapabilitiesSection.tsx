import { agents } from "./constants";
import { FadeUp, StaggerContainer, StaggerItem } from "./animations";

export function CapabilitiesSection() {
  return (
    <section className="capabilities-section" id="agents">
      <div className="container">
        <FadeUp
          style={{
            display: "block",
            textAlign: "center",
            width: "fit-content",
            margin: "0 auto 1.5rem",
          }}
        >
          <div
            className="badge"
            style={{
              display: "block",
              textAlign: "center",
              width: "fit-content",
              margin: "0 auto 1.5rem",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              style={{ verticalAlign: "middle", marginRight: "0.4rem" }}
            >
              <path
                d="M 6 4 L 8 4 L 8 2 L 10 2 L 10 4 L 14 4 L 14 2 L 16 2 L 16 4 L 18 4 L 18 6 L 6 6 Z M 6 18 L 18 18 L 18 20 L 16 20 L 16 22 L 14 22 L 14 20 L 10 20 L 10 22 L 8 22 L 8 20 L 6 20 Z M 18 6 L 20 6 L 20 8 L 22 8 L 22 10 L 20 10 L 20 14 L 22 14 L 22 16 L 20 16 L 20 18 L 18 18 Z M 4 6 L 6 6 L 6 18 L 4 18 L 4 16 L 2 16 L 2 14 L 4 14 L 4 10 L 2 10 L 2 8 L 4 8 Z"
                fill="var(--red)"
              />
            </svg>
            Agents
          </div>
        </FadeUp>
        <FadeUp delay={0.05} style={{ textAlign: "center" }}>
          <h2>
            Four board members.
            <br />
            All with opinions.
            <br />
            All with memory.
          </h2>
        </FadeUp>
        <FadeUp delay={0.1} style={{ textAlign: "center" }}>
          <p>
            They debate each other. They track what you promised.{" "}
            They get sharper every meeting.
          </p>
        </FadeUp>
        <StaggerContainer className="capabilities-grid">
          {agents.map(({ n, role, desc, quote }) => (
            <StaggerItem key={n} className="cap-card" hoverLift>
              <div className="cap-label">[ {n} ]</div>
              <h3>{role}</h3>
              <p>{desc}</p>
              <p style={n === "06"
                ? { fontFamily: "'IBM Plex Mono', monospace", color: "#1D9E75", fontStyle: "normal", fontSize: "0.75rem" }
                : { fontStyle: "italic" }
              }>{quote}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
