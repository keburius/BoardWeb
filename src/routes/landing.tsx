import { useState } from "react";
import "./landing.css";
import { tickerItems } from "../components/landing/constants";
import { useTypingEffect } from "../hooks/useTypingEffect";
import { useStepAutoAdvance } from "../hooks/useStepAutoAdvance";
import { HeroSection } from "../components/landing/HeroSection";
import { ProblemSection } from "../components/landing/ProblemSection";
import { IntroSection } from "../components/landing/IntroSection";
import { OfflineSection } from "../components/landing/OfflineSection";
import { ThreeColSection } from "../components/landing/ThreeColSection";
import { HowItWorksSection } from "../components/landing/HowItWorksSection";
import { CapabilitiesSection } from "../components/landing/CapabilitiesSection";
import { StatsStrip } from "../components/landing/StatsStrip";
import { TerminalSection } from "../components/landing/TerminalSection";
import { EarlyAccessSection } from "../components/landing/EarlyAccessSection";
import { FaqSection } from "../components/landing/FaqSection";
import { CtaSection } from "../components/landing/CtaSection";
import { LandingFooter } from "../components/landing/LandingFooter";

export function LandingPage() {
  const [activeStep, onStepChange] = useStepAutoAdvance(3, 6000);
  const typingText = useTypingEffect();
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <div className="landing-wrapper">
      <div className="lb-noise" aria-hidden="true" />
      <div className="lb-scanlines" aria-hidden="true" />
      <HeroSection tickerItems={tickerItems} />
      <hr className="section-divider" />
      <ProblemSection />
      <hr className="section-divider" />
      <IntroSection />
      <hr className="section-divider" />
      <OfflineSection />
      <hr className="section-divider" />
      {/* <ThreeColSection /> */}
      {/* <hr className="section-divider" /> */}
      {/* <hr className="section-divider" style={{ marginTop: "4rem" }} /> */}
      <HowItWorksSection activeStep={activeStep} onStepChange={onStepChange} />
      <hr className="section-divider" />
      <CapabilitiesSection />
      {/* <hr className="section-divider" /> */}
      {/* <StatsStrip /> */}
      <hr className="section-divider" />
      <TerminalSection typingText={typingText} />
      <hr className="section-divider" />
      <EarlyAccessSection
        formSubmitted={formSubmitted}
        onSubmit={() => setFormSubmitted(true)}
      />
      <hr className="section-divider" />
      <FaqSection />
      <hr className="section-divider" />
      <CtaSection />
      <LandingFooter />
    </div>
  );
}
