import {
  motion,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useMotionTemplate,
  useInView,
  useScroll,
  type Variants,
} from "framer-motion";
import {
  useRef,
  useEffect,
  useState,
  useCallback,
  type ReactNode,
  type CSSProperties,
  type MouseEvent,
} from "react";

function useReduced() {
  return useReducedMotion() ?? false;
}

// ─── nav scroll blur hook ─────────────────────────────────────────────────────
export function useNavScroll() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => scrollY.on("change", (y) => setScrolled(y > 60)), [scrollY]);
  return scrolled;
}

// ─── cursor radial gradient hook ──────────────────────────────────────────────
export function useCursorGradient() {
  const reduced = useReduced();
  const mouseX = useMotionValue(-999);
  const mouseY = useMotionValue(-999);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 18 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 18 });
  const background = useMotionTemplate`radial-gradient(600px circle at ${springX}px ${springY}px, rgba(255,255,255,0.1) 0%, transparent 70%)`;

  const onMouseMove = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      if (reduced) return;
      const rect = e.currentTarget.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    },
    [mouseX, mouseY, reduced]
  );

  return { background: reduced ? undefined : background, onMouseMove };
}

// ─── shared variant sets ──────────────────────────────────────────────────────
const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay },
  }),
};

export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// ─── FadeUp ───────────────────────────────────────────────────────────────────
interface BoxProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export function FadeUp({
  children,
  delay = 0,
  className,
  style,
}: BoxProps & { delay?: number }) {
  const reduced = useReduced();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });
  if (reduced)
    return <div className={className} style={style}>{children}</div>;
  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      variants={fadeUpVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={delay}
    >
      {children}
    </motion.div>
  );
}

// ─── StaggerContainer ─────────────────────────────────────────────────────────
export function StaggerContainer({ children, className, style }: BoxProps) {
  const reduced = useReduced();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });
  if (reduced)
    return <div className={className} style={style}>{children}</div>;
  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        visible: { transition: { staggerChildren: 0.08 } },
        hidden: {},
      }}
    >
      {children}
    </motion.div>
  );
}

// ─── StaggerItem — doubles as the grid child div ──────────────────────────────
export function StaggerItem({
  children,
  className,
  style,
  hoverLift = false,
}: BoxProps & { hoverLift?: boolean }) {
  const reduced = useReduced();
  if (reduced)
    return <div className={className} style={style}>{children}</div>;
  return (
    <motion.div
      className={className}
      style={style}
      variants={staggerItemVariants}
      whileHover={
        hoverLift
          ? { y: -4, boxShadow: "0 16px 48px rgba(232,89,60,0.14)" }
          : undefined
      }
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
    >
      {children}
    </motion.div>
  );
}

// ─── AnimatedLink ─────────────────────────────────────────────────────────────
export function AnimatedLink({
  children,
  className,
  style,
  href,
}: BoxProps & { href: string }) {
  const reduced = useReduced();
  if (reduced)
    return <a className={className} style={style} href={href}>{children}</a>;
  return (
    <motion.a
      className={className}
      style={style}
      href={href}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
    >
      {children}
    </motion.a>
  );
}

// ─── AnimatedButton ───────────────────────────────────────────────────────────
export function AnimatedButton({
  children,
  className,
  style,
  onClick,
}: BoxProps & { onClick?: () => void }) {
  const reduced = useReduced();
  if (reduced)
    return (
      <button className={className} style={style} onClick={onClick}>
        {children}
      </button>
    );
  return (
    <motion.button
      className={className}
      style={style}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
    >
      {children}
    </motion.button>
  );
}

// ─── CountUp ─────────────────────────────────────────────────────────────────
export function CountUp({
  target,
  prefix = "",
  suffix = "",
  className,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  const reduced = useReduced();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });
  const [displayed, setDisplayed] = useState(reduced ? target : 0);

  useEffect(() => {
    if (!inView || reduced) return;
    let frameId: number;
    const startTime = performance.now();
    const duration = 1000;
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayed(Math.round(eased * target));
      if (progress < 1) frameId = requestAnimationFrame(tick);
    };
    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [inView, target, reduced]);

  return (
    <span ref={ref} className={className}>
      {prefix}{displayed}{suffix}
    </span>
  );
}

// ─── Particles ────────────────────────────────────────────────────────────────
function seededRand(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

export function Particles() {
  const reduced = useReduced();
  if (reduced) return null;
  const rand = seededRand(37);
  const dots = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: rand() * 100,
    top: rand() * 100,
    size: 1.5 + rand() * 2.5,
    dur: 5 + rand() * 7,
    delay: rand() * 5,
    dx: (rand() - 0.5) * 40,
    dy: (rand() - 0.5) * 40,
  }));
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        overflow: "hidden",
        zIndex: 0,
      }}
    >
      {dots.map(({ id, left, top, size, dur, delay, dx, dy }) => (
        <motion.div
          key={id}
          style={{
            position: "absolute",
            left: `${left}%`,
            top: `${top}%`,
            width: size,
            height: size,
            borderRadius: "50%",
            background: "rgba(10,10,10,0.4)",
          }}
          animate={{ x: [0, dx, 0], y: [0, dy, 0], opacity: [0.1, 0.45, 0.1] }}
          transition={{ duration: dur, delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
