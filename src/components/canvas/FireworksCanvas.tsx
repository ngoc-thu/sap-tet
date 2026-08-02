import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  color: string;
  decay: number;
  size: number;
}

interface FireworksCanvasProps {
  triggerSignal?: number;
  onFireworkExplode?: () => void;
}

export const FireworksCanvas: React.FC<FireworksCanvasProps> = ({ triggerSignal, onFireworkExplode }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);

  const colors = ['#FFD700', '#FF2D55', '#4CD964', '#5AC8FA', '#007AFF', '#FF9500', '#E5C158', '#FFFFFF'];

  const createFirework = (x: number, y: number) => {
    if (onFireworkExplode) onFireworkExplode();

    const count = 50 + Math.floor(Math.random() * 40);
    const color = colors[Math.floor(Math.random() * colors.length)];

    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.2;
      const speed = Math.random() * 5 + 2;
      particlesRef.current.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        alpha: 1,
        color,
        decay: Math.random() * 0.02 + 0.015,
        size: Math.random() * 3 + 2,
      });
    }
  };

  useEffect(() => {
    if (triggerSignal && triggerSignal > 0) {
      const w = window.innerWidth;
      const h = window.innerHeight;
      createFirework(w * (0.2 + Math.random() * 0.6), h * (0.2 + Math.random() * 0.4));
    }
  }, [triggerSignal]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;

    const handleResize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const handleClick = (e: MouseEvent) => {
      createFirework(e.clientX, e.clientY);
    };

    window.addEventListener('click', handleClick);

    const animate = () => {
      ctx.fillStyle = 'rgba(18, 5, 7, 0.2)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((p, index) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.05; // gravity
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          particlesRef.current.splice(index, 1);
        } else {
          ctx.save();
          ctx.globalAlpha = p.alpha;
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();

          // Glow effect
          ctx.shadowBlur = 10;
          ctx.shadowColor = p.color;
          ctx.restore();
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-auto z-0"
    />
  );
};
