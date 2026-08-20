import { useRef, useState, useEffect, useCallback } from 'react';
import logoPng from '../../imports/Group_93.png';

export function HeartViewer3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotX, setRotX] = useState(0);
  const [rotY, setRotY] = useState(0);
  const dragging = useRef(false);
  const lastPos = useRef({ x: 0, y: 0 });
  const autoRot = useRef(0);
  const rafRef = useRef<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  // Auto-rotate when not dragging
  useEffect(() => {
    const animate = () => {
      if (!dragging.current) {
        autoRot.current += 0.4;
        setRotY(autoRot.current);
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    dragging.current = true;
    setIsDragging(true);
    lastPos.current = { x: e.clientX, y: e.clientY };
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!dragging.current) return;
    const dx = e.clientX - lastPos.current.x;
    const dy = e.clientY - lastPos.current.y;
    lastPos.current = { x: e.clientX, y: e.clientY };
    setRotY(prev => { autoRot.current = prev + dx * 0.6; return autoRot.current; });
    setRotX(prev => Math.max(-35, Math.min(35, prev - dy * 0.4)));
  }, []);

  const onPointerUp = useCallback(() => {
    dragging.current = false;
    setIsDragging(false);
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full flex items-center justify-center select-none"
      style={{ perspective: '800px', perspectiveOrigin: 'center center' }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
    >
      {/* Drag hint */}
      {!isDragging && (
        <div
          style={{
            position: 'absolute',
            bottom: '6%',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '999px',
            padding: '4px 12px',
            pointerEvents: 'none',
            whiteSpace: 'nowrap',
          }}
        >
          <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.04em' }}>drag to rotate</span>
        </div>
      )}

      {/* Glow */}
      <div
        style={{
          position: 'absolute',
          width: '60%',
          height: '30%',
          bottom: '10%',
          left: '20%',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(0,132,255,0.3) 0%, transparent 70%)',
          filter: 'blur(18px)',
          pointerEvents: 'none',
        }}
      />

      {/* 3D rotating logo */}
      <div
        style={{
          transform: `rotateX(${rotX}deg) rotateY(${rotY}deg)`,
          transformStyle: 'preserve-3d',
          transition: isDragging ? 'none' : 'transform 0.05s linear',
          cursor: isDragging ? 'grabbing' : 'grab',
          willChange: 'transform',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '80%',
          maxWidth: '340px',
        }}
      >
        {/* Front face */}
        <img
          src={logoPng}
          alt="Logo"
          draggable={false}
          style={{
            width: '100%',
            height: 'auto',
            backfaceVisibility: 'hidden',
            filter: 'drop-shadow(0 0 20px rgba(0,132,255,0.5))',
            pointerEvents: 'none',
          }}
        />
        {/* Back face — mirrored */}
        <img
          src={logoPng}
          alt=""
          draggable={false}
          style={{
            position: 'absolute',
            width: '100%',
            height: 'auto',
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg) scaleX(-1)',
            filter: 'drop-shadow(0 0 20px rgba(0,132,255,0.3))',
            pointerEvents: 'none',
            opacity: 0.7,
          }}
        />
      </div>

      <style>{`
        @keyframes logoFloat {
          0%, 100% { margin-top: 0px; }
          50% { margin-top: -10px; }
        }
      `}</style>
    </div>
  );
}
