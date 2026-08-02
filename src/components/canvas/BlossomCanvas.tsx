import React, { useEffect, useRef } from 'react';

interface BlossomCanvasProps {
  type: 'dao' | 'mai' | ' ca-hai';
}

interface Petal {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  color: string;
}

export const BlossomCanvas: React.FC<BlossomCanvasProps> = ({ type }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const petalColors = {
      dao: ['#FFB7C5', '#FF69B4', '#FF1493', '#FA8072'], // Pink Peach Blossoms
      mai: ['#FFD700', '#FFEC8B', '#FFA500', '#F59E0B'], // Gold Apricot Blossoms
    };

    const getRandomColor = () => {
      if (type === 'dao') return petalColors.dao[Math.floor(Math.random() * petalColors.dao.length)];
      if (type === 'mai') return petalColors.mai[Math.floor(Math.random() * petalColors.mai.length)];
      // Cả hai
      const all = [...petalColors.dao, ...petalColors.mai];
      return all[Math.floor(Math.random() * all.length)];
    };

    const petals: Petal[] = Array.from({ length: 45 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height - height,
      size: Math.random() * 8 + 6,
      speedY: Math.random() * 1.5 + 0.8,
      speedX: Math.random() * 1 - 0.5,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.03,
      opacity: Math.random() * 0.7 + 0.3,
      color: getRandomColor(),
    }));

    const drawPetal = (petal: Petal) => {
      ctx.save();
      ctx.translate(petal.x, petal.y);
      ctx.rotate(petal.rotation);
      ctx.globalAlpha = petal.opacity;

      ctx.beginPath();
      // 5-petal flower shape or petal shape
      ctx.fillStyle = petal.color;
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(-petal.size, -petal.size, -petal.size, petal.size, 0, petal.size * 1.5);
      ctx.bezierCurveTo(petal.size, petal.size, petal.size, -petal.size, 0, 0);
      ctx.fill();

      // Flower center dot
      ctx.fillStyle = '#FFF2B2';
      ctx.beginPath();
      ctx.arc(0, 0, petal.size * 0.25, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      petals.forEach((petal) => {
        petal.y += petal.speedY;
        petal.x += petal.speedX + Math.sin(petal.y * 0.01) * 0.5;
        petal.rotation += petal.rotationSpeed;

        if (petal.y > height + 20) {
          petal.y = -20;
          petal.x = Math.random() * width;
          petal.color = getRandomColor();
        }

        drawPetal(petal);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [type]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10 opacity-80"
    />
  );
};
