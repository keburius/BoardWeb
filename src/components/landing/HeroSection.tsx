import { motion } from "framer-motion";
import { useState, useRef, useEffect, useCallback } from "react";
import {
  useCursorGradient,
  useNavScroll,
  Particles,
  AnimatedLink,
} from "./animations";

interface HeroSectionProps {
  tickerItems: string[];
}

export function HeroSection({ tickerItems }: HeroSectionProps) {
  const scrolled = useNavScroll();
  const { background, onMouseMove } = useCursorGradient();
  const [tickerPaused, setTickerPaused] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef   = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    function handlePointer(e: MouseEvent) {
      if (
        menuRef.current   && !menuRef.current.contains(e.target as Node) &&
        burgerRef.current && !burgerRef.current.contains(e.target as Node)
      ) setMenuOpen(false);
    }
    document.addEventListener("mousedown", handlePointer);
    return () => document.removeEventListener("mousedown", handlePointer);
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") { setMenuOpen(false); burgerRef.current?.focus(); }
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <motion.section className="hero" onMouseMove={onMouseMove}>
      {/* cursor gradient overlay */}
      <motion.div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 1,
          background,
        }}
      />

      <Particles />

      <img src="/board.jpg" className="hero-watermark" alt="" />
      {/* <svg
        className="hero-watermark"
        viewBox="0 0 68 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect
          x="0"
          y="0"
          width="44"
          height="33"
          rx="3"
          stroke="#0a0a0a"
          strokeWidth="3"
        />
        <rect x="12" y="12" width="44" height="33" rx="3" fill="#0a0a0a" />
      </svg> */}

      <motion.header
        className="site-header"
        style={{ position: "sticky", top: 0, zIndex: 100 }}
        animate={{
          backgroundColor: scrolled ? "rgba(245,235,225,0.88)" : "transparent",
          backdropFilter: scrolled ? "blur(14px)" : "blur(0px)",
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <nav className="site-nav">
          <a
            href="#"
            className="site-logo wordmark"
            style={{ color: "#0a0a0a" }}
          >
            SecondBoard.ai
          </a>
          <ul className="nav-links">
            <li>
              <a href="#our-approach" style={{ color: "#0a0a0a" }}>
                How It Works
              </a>
            </li>
            <li>
              <a href="#agents" style={{ color: "#0a0a0a" }}>
                Agents
              </a>
            </li>
            <li>
              <a href="#memory" style={{ color: "#0a0a0a" }}>
                Memory
              </a>
            </li>
            <li>
              <a href="#pricing" style={{ color: "#0a0a0a" }}>
                Pricing
              </a>
            </li>
            <li>
              <a href="#early-access" className="nav-cta">
                Practice Your Board
              </a>
            </li>
          </ul>

          {/* Burger — visible on mobile only (CSS hides it on ≥768px) */}
          <button
            ref={burgerRef}
            className="burger-btn"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </nav>

        {/* Mobile slide-down menu */}
        <div
          ref={menuRef}
          id="mobile-menu"
          className={`mobile-menu${menuOpen ? " open" : ""}`}
          role="navigation"
          aria-label="Mobile navigation"
          aria-hidden={!menuOpen}
        >
          <ul>
            <li><a href="#our-approach" onClick={closeMenu}>How It Works</a></li>
            <li><a href="#agents"       onClick={closeMenu}>Agents</a></li>
            <li><a href="#memory"       onClick={closeMenu}>Memory</a></li>
            <li><a href="#pricing"      onClick={closeMenu}>Pricing</a></li>
            <li>
              <a href="#early-access" className="mobile-nav-cta" onClick={closeMenu}>
                Practice Your Board
              </a>
            </li>
          </ul>
        </div>
      </motion.header>

      <div className="hero-content" style={{ position: "relative", zIndex: 2 }}>
        <div className="badge">
          An always-available second board for better thinking
        </div>
        <h1>
          <motion.span
            style={{ display: "block", overflow: "hidden" }}
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.15 }}
          >
            Build your
          </motion.span>
          <motion.span
            style={{ display: "block", overflow: "hidden" }}
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.38 }}
          >
            <span>AI Board of Directors</span>
          </motion.span>
        </h1>
        <motion.p
          className="hero-sub"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.65 }}
        >
          Hire independent AI board members with specialized roles, company
          memory, and strategic expertise — then let them challenge your
          decisions from every angle.
        </motion.p>
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
        >
          <AnimatedLink href="#early-access" className="btn btn-dark">
            Create your SecondBoard →
          </AnimatedLink>
          <AnimatedLink href="#our-approach" className="btn btn-outline">
            See how it works
          </AnimatedLink>
        </motion.div>
        <motion.p
          style={{
            fontSize: "0.7rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            opacity: 0.8,
            marginTop: "1.5rem",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 1.0 }}
        >
          For
          Founders&nbsp;&nbsp;·&nbsp;&nbsp;SMEs&nbsp;&nbsp;·&nbsp;&nbsp;Enterprise
          Teams&nbsp;&nbsp;·&nbsp;&nbsp;Investors
        </motion.p>
      </div>

      <div
        className="hero-ticker"
        style={{ position: "relative", zIndex: 2 }}
        onMouseEnter={() => setTickerPaused(true)}
        onMouseLeave={() => setTickerPaused(false)}
      >
        <div
          className="hero-ticker-inner"
          style={{ animationPlayState: tickerPaused ? "paused" : "running" }}
        >
          {tickerItems.map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
