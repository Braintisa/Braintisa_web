import React, { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
};

const Reveal: React.FC<RevealProps> = ({ children, className = "", delayMs = 0 }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Stagger via timeout to avoid layout thrash
          const id = window.setTimeout(() => setInView(true), delayMs);
          return () => window.clearTimeout(id);
        }
      },
      { root: null, threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delayMs]);

  return (
    <div
      ref={ref}
      className={`${className} ${inView ? "animate-fade-in-up" : "opacity-0 translate-y-6"}`}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </div>
  );
};

export default Reveal;


