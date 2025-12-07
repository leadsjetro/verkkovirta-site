import { useEffect, useRef } from 'react';

interface Triangle3DProps {
  className?: string;
  size?: number;
}

const Triangle3D = ({ className = '', size = 300 }: Triangle3DProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.scale(dpr, dpr);

    const centerX = size / 2;
    const centerY = size / 2;
    const triangleSize = size * 0.32;

    const drawTriangle = (time: number) => {
      ctx.clearRect(0, 0, size, size);
      
      // Slow, steady rotation - one full rotation every 20 seconds
      const rotation = time * 0.0003;
      
      // Gentle pulsing glow (oscillates between 0.6 and 1.0)
      const glowIntensity = 0.8 + Math.sin(time * 0.002) * 0.2;
      
      // Draw 3 layered triangles for 3D depth effect
      const layers = [
        { offset: 6, alpha: 0.15, scale: 1.05, rotationOffset: 0.15 },
        { offset: 3, alpha: 0.35, scale: 1.02, rotationOffset: 0.08 },
        { offset: 0, alpha: 1, scale: 1, rotationOffset: 0 },
      ];
      
      layers.forEach((layer) => {
        ctx.save();
        ctx.translate(centerX + layer.offset, centerY + layer.offset * 0.5);
        ctx.rotate(rotation + layer.rotationOffset);
        
        // Draw triangle path
        ctx.beginPath();
        for (let i = 0; i < 3; i++) {
          const angle = (i * 2 * Math.PI / 3) - Math.PI / 2;
          const x = Math.cos(angle) * triangleSize * layer.scale;
          const y = Math.sin(angle) * triangleSize * layer.scale;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
        
        // Fill for back layers with gradient
        if (layer.alpha < 1) {
          const gradient = ctx.createLinearGradient(
            -triangleSize, -triangleSize,
            triangleSize, triangleSize
          );
          gradient.addColorStop(0, `hsla(174, 100%, 40%, ${layer.alpha * 0.3})`);
          gradient.addColorStop(1, `hsla(200, 100%, 50%, ${layer.alpha * 0.2})`);
          ctx.fillStyle = gradient;
          ctx.fill();
        }
        
        // Neon stroke
        const strokeAlpha = layer.alpha * glowIntensity;
        ctx.strokeStyle = `hsla(174, 100%, 50%, ${strokeAlpha})`;
        ctx.lineWidth = layer.alpha === 1 ? 2.5 : 1.5;
        
        // Glow effect
        if (layer.alpha === 1) {
          ctx.shadowColor = 'hsl(174, 100%, 50%)';
          ctx.shadowBlur = 25 * glowIntensity;
        } else {
          ctx.shadowBlur = 10 * glowIntensity;
          ctx.shadowColor = `hsla(174, 100%, 50%, ${layer.alpha * 0.5})`;
        }
        
        ctx.stroke();
        
        // Double stroke for main layer to enhance glow
        if (layer.alpha === 1) {
          ctx.shadowBlur = 50 * glowIntensity;
          ctx.strokeStyle = `hsla(174, 100%, 60%, ${0.4 * glowIntensity})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
        
        ctx.restore();
      });
      
      // Inner gradient fill for main triangle
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(rotation);
      
      ctx.beginPath();
      for (let i = 0; i < 3; i++) {
        const angle = (i * 2 * Math.PI / 3) - Math.PI / 2;
        const x = Math.cos(angle) * triangleSize * 0.85;
        const y = Math.sin(angle) * triangleSize * 0.85;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      
      const innerGradient = ctx.createLinearGradient(
        -triangleSize, -triangleSize,
        triangleSize, triangleSize
      );
      innerGradient.addColorStop(0, `hsla(174, 100%, 50%, ${0.08 * glowIntensity})`);
      innerGradient.addColorStop(0.5, `hsla(200, 100%, 60%, ${0.12 * glowIntensity})`);
      innerGradient.addColorStop(1, `hsla(174, 100%, 50%, ${0.05 * glowIntensity})`);
      ctx.fillStyle = innerGradient;
      ctx.fill();
      
      ctx.restore();
      
      animationRef.current = requestAnimationFrame(drawTriangle);
    };

    animationRef.current = requestAnimationFrame(drawTriangle);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [size]);

  return (
    <canvas 
      ref={canvasRef} 
      className={`${className}`}
      style={{ width: size, height: size }}
    />
  );
};

export default Triangle3D;