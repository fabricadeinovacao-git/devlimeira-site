import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  alpha: number;
}

function createParticle(w: number, h: number): Particle {
  return {
    x: Math.random() * w,
    y: Math.random() * h,
    size: Math.random() * 1.6 + 0.4,
    speedX: (Math.random() - 0.5) * 0.32,
    speedY: (Math.random() - 0.5) * 0.32,
    alpha: Math.random() * 0.4 + 0.1,
  };
}

/** Attaches a particle network animation to a canvas element. */
export function useParticles(canvasRef: React.RefObject<HTMLCanvasElement | null>) {
  const animIdRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];

    function resize() {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }

    function init() {
      if (!canvas) return;
      const count = Math.min(110, Math.floor((canvas.width * canvas.height) / 10000));
      particles = Array.from({ length: count }, () => createParticle(canvas.width, canvas.height));
    }

    function getParticleColor(): string {
      return getComputedStyle(document.documentElement)
        .getPropertyValue('--particle-color')
        .trim() || 'rgba(249,115,22,0.4)';
    }

    function getLineColor(): string {
      return getComputedStyle(document.documentElement)
        .getPropertyValue('--particle-line')
        .trim() || 'rgba(249,115,22,0.12)';
    }

    function animate() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const color = getParticleColor();
      const lineBase = getLineColor();
      const maxDist = 105;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Update
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < -8 || p.x > canvas.width + 8 || p.y < -8 || p.y > canvas.height + 8) {
          Object.assign(p, createParticle(canvas.width, canvas.height));
        }

        // Draw dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = color.replace(/[\d.]+\)$/, `${p.alpha})`);
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            // Replace alpha in CSS color with computed opacity
            const opacity = (0.18 * (1 - dist / maxDist)).toFixed(3);
            ctx.strokeStyle = lineBase.replace(/[\d.]+\)$/, `${opacity})`);
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animIdRef.current = requestAnimationFrame(animate);
    }

    resize();
    init();
    animate();

    const observer = new ResizeObserver(() => {
      cancelAnimationFrame(animIdRef.current);
      resize();
      init();
      animate();
    });
    observer.observe(canvas);

    return () => {
      cancelAnimationFrame(animIdRef.current);
      observer.disconnect();
    };
  }, [canvasRef]);
}
