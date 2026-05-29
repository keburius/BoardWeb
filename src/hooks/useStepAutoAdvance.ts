import { useState, useEffect } from "react";

export function useStepAutoAdvance(
  maxStep = 3,
  intervalMs = 6000
): [number, (n: number) => void] {
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev >= maxStep ? 1 : prev + 1));
    }, intervalMs);
    return () => clearInterval(interval);
  }, [maxStep, intervalMs]);

  return [activeStep, setActiveStep];
}
