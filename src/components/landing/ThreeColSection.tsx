import { Fragment } from "react";
import { threeColItems } from "./constants";
import { StaggerContainer, FadeUp } from "./animations";

export function ThreeColSection() {
  return (
    <section className="three-col-section">
      <div className="container">
        <StaggerContainer className="three-col-grid">
          {threeColItems.map((item, idx) => (
            <Fragment key={item.badge}>
              {idx > 0 && <div className="three-col-divider" />}
              <FadeUp className="three-col-cell" delay={idx * 0.12}>
                <div className="badge">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path d={item.iconPath} fill="var(--red)" />
                  </svg>
                  {item.badge}
                </div>
                <h3>{item.heading}</h3>
                <p>{item.quote}</p>
              </FadeUp>
            </Fragment>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
