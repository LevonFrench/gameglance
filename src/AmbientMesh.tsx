import React, { useEffect, useRef } from 'react';

interface Props {
  colors: string[];
  speed?: number;
}

export const AmbientMesh: React.FC<Props> = ({ colors, speed = 0.4 }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animFrame: number;
    const blobs = colors.map(c => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * speed,
      vy: (Math.random() - 0.5) * speed,
      r: 0.3 + Math.random() * 0.2,
      color: c
    }));

    const resize = () => {
      // Set canvas resolution to container size
      if (canvas.parentElement) {
         canvas.width = canvas.parentElement.offsetWidth;
         canvas.height = canvas.parentElement.offsetHeight;
      }
    };
    resize();
    
    // debounce resize
    let resizeTimeout: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resize, 150);
    };
    window.addEventListener('resize', handleResize);

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      if (w === 0 || h === 0) {
        animFrame = requestAnimationFrame(draw);
        return;
      }
      
      // Clear canvas so background shows through
      ctx.clearRect(0, 0, w, h);
      
      blobs.forEach(b => {
        b.x += b.vx / w;
        b.y += b.vy / h;
        if (b.x < -0.2 || b.x > 1.2) b.vx *= -1;
        if (b.y < -0.2 || b.y > 1.2) b.vy *= -1;
        
        const grd = ctx.createRadialGradient(b.x * w, b.y * h, 0, b.x * w, b.y * h, b.r * Math.max(w, h));
        grd.addColorStop(0, b.color);
        grd.addColorStop(1, 'transparent');
        
        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, w, h);
      });
      
      animFrame = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animFrame);
    };
  }, [colors, speed]);

  return (
    <canvas 
      ref={canvasRef} 
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        display: 'block'
      }} 
    />
  );
};
