import { useState, useEffect } from "react";

const PHRASES = [
  "defend Q2 plan",
  "explain bridge round conditions",
  "answer churn concern",
  "justify Turkey launch",
  "walk through cash runway",
  "respond to investor pushback",
];

export function useTypingEffect(): string {
  const [typingText, setTypingText] = useState("defend Q2 plan");

  useEffect(() => {
    let phraseIdx = 0;
    let charIdx = 0;
    let deleting = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    function typeLoop() {
      const phrase = PHRASES[phraseIdx];
      if (!deleting) {
        charIdx++;
        setTypingText(phrase.slice(0, charIdx));
        if (charIdx === phrase.length) {
          deleting = true;
          timeoutId = setTimeout(typeLoop, 2000);
          return;
        }
        timeoutId = setTimeout(typeLoop, 70);
      } else {
        charIdx--;
        setTypingText(phrase.slice(0, charIdx));
        if (charIdx === 0) {
          deleting = false;
          phraseIdx = (phraseIdx + 1) % PHRASES.length;
          timeoutId = setTimeout(typeLoop, 400);
          return;
        }
        timeoutId = setTimeout(typeLoop, 30);
      }
    }

    timeoutId = setTimeout(typeLoop, 1500);
    return () => clearTimeout(timeoutId);
  }, []);

  return typingText;
}
