import { useEffect, useRef } from "react";

type SectionParticlesProps = {
  opacity?: number;
};

const SectionParticles = ({ opacity = 0.35 }: SectionParticlesProps) => {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.max(1, Math.floor(rect.width * dpr));
      canvas.height = Math.max(1, Math.floor(rect.height * dpr));
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    const particles: { x: number; y: number; vx: number; vy: number; r: number; a: number }[] = [];
    const rand = (min: number, max: number) => Math.random() * (max - min) + min;

    const init = () => {
      particles.length = 0;
      const { width, height } = canvas.getBoundingClientRect();
      const count = Math.max(24, Math.min(60, Math.floor(width / 35)));
      for (let i = 0; i < count; i++) {
        particles.push({
          x: rand(0, width),
          y: rand(0, height),
          vx: rand(-0.12, 0.12),
          vy: rand(-0.1, 0.1),
          r: rand(1.0, 2.4),
          a: rand(0.35, 0.65),
        });
      }
    };
    init();

    const loop = () => {
      const { width, height } = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.998;
        p.vy *= 0.998;

        if (p.x < -8) p.x = width + 8;
        if (p.x > width + 8) p.x = -8;
        if (p.y < -8) p.y = height + 8;
        if (p.y > height + 8) p.y = -8;

        ctx.beginPath();
        ctx.fillStyle = `hsla(45, 99%, 53%, ${p.a})`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="section-bg-layer w-full h-full z-[1]"
      style={{ opacity }}
    />
  );
};

export default SectionParticles;


