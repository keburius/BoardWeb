import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { staggerItemVariants, CountUp } from "./animations";

export function StatsStrip() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <motion.section
      ref={ref}
      className="stats-strip"
      id="pricing"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{ visible: { transition: { staggerChildren: 0.1 } }, hidden: {} }}
    >
      <motion.div className="stat-box" variants={staggerItemVariants}>
        <span className="stat-label">Free</span>
        <span className="stat-value">
          <CountUp target={0} prefix="$" />
        </span>
        <span className="stat-note">
          For founders testing one board meeting with one company workspace.
        </span>
      </motion.div>
      <motion.div className="stat-box" variants={staggerItemVariants}>
        <span className="stat-label">Founder</span>
        <span className="stat-value">
          <CountUp target={49} prefix="$" />
        </span>
        <span className="stat-note">
          For solo founders running recurring meetings with persistent memory.
        </span>
      </motion.div>
      <motion.div className="stat-box" variants={staggerItemVariants}>
        <span className="stat-label">Team</span>
        <span className="stat-value">
          <CountUp target={149} prefix="$" />
        </span>
        <span className="stat-note">
          For leadership teams practicing together across multiple workspaces.
        </span>
      </motion.div>
      <motion.div className="stat-box" variants={staggerItemVariants}>
        <span className="stat-label">Pressure</span>
        <span className="stat-value">Low</span>
        <span className="stat-note">
          No sales call. No credit card for the first meeting.
        </span>
      </motion.div>
    </motion.section>
  );
}
