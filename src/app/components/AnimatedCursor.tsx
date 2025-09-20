"use client";

import React, { useEffect, useRef, useState } from "react";

interface Trail {
  x: number;
  y: number;
  opacity: number;
  scale: number;
  hue: number;
}

interface Sparkle {
  x: number;
  y: number;
  size: number;
  opacity: number;
  flickerDuration: number;
  rotation: number;
  shape: "circle" | "star";
}

export default function FlameTrailCursor() {
  const [trails, setTrails] = useState<Trail[]>([]);
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const [mouse, setMouse] = useState({ x: -100, y: -100 });
  const frameRef = useRef<number>();

  const addSparkle = (x: number, y: number) => {
    setSparkles((prev) => [
      ...prev.slice(-30),
      {
        x: x + (Math.random() - 0.5) * 20,
        y: y + (Math.random() - 0.5) * 20,
        size: 3 + Math.random() * 4,
        opacity: 1,
        flickerDuration: 0.5 + Math.random() * 1,
        rotation: Math.random() * 360,
        shape: Math.random() < 0.5 ? "circle" : "star",
      },
    ]);
  };

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });

      const hue = Math.random() * 360;

      setTrails((prev) => [
        ...prev.slice(-15),
        { x: e.clientX, y: e.clientY, opacity: 1, scale: 1, hue },
      ]);

      if (Math.random() < 0.4) addSparkle(e.clientX, e.clientY);
    };

    const click = (e: MouseEvent) => {
      for (let i = 0; i < 10; i++) {
        addSparkle(e.clientX, e.clientY);
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("click", click);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("click", click);
    };
  }, []);

  useEffect(() => {
    const animate = () => {
      setTrails((prev) =>
        prev
          .map((t) => ({
            ...t,
            opacity: t.opacity - 0.05,
            scale: t.scale * 0.95,
          }))
          .filter((t) => t.opacity > 0)
      );

      setSparkles((prev) =>
        prev
          .map((s) => ({
            ...s,
            opacity: s.opacity - 0.07,
            rotation: s.rotation + 5,
          }))
          .filter((s) => s.opacity > 0)
      );

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  const renderSparkleShape = (s: Sparkle) => {
    if (s.shape === "star") {
      return (
        <svg
          viewBox="0 0 24 24"
          fill="yellow"
          width={s.size}
          height={s.size}
          style={{ transform: `rotate(${s.rotation}deg)` }}
        >
          <polygon points="12,2 15,10 23,10 17,15 19,23 12,18 5,23 7,15 1,10 9,10" />
        </svg>
      );
    }
    return <div className="bg-white rounded-full" style={{ width: s.size, height: s.size }} />;
  };

  return (
    <>
      {/* Hide default cursor */}
      <style>{`body { cursor: none !important; }`}</style>

      {/* Main cursor */}
      <div
        className="pointer-events-none fixed z-[10001] w-4 h-4 rounded-full mix-blend-screen shadow-[0_0_15px_#fff] animate-pulse"
        style={{
          left: mouse.x - 8,
          top: mouse.y - 8,
          background: "radial-gradient(circle, white, transparent)",
        }}
      />

      {/* Trails */}
      {trails.map((trail, i) => (
        <div
          key={`trail-${i}`}
          className="pointer-events-none fixed z-[9999] w-8 h-8 rounded-full blur-xl"
          style={{
            left: trail.x - 16,
            top: trail.y - 16,
            opacity: trail.opacity,
            transform: `scale(${trail.scale})`,
            background: `hsl(${trail.hue}, 100%, 60%)`,
          }}
        />
      ))}

      {/* Sparkles */}
      {sparkles.map((s, i) => (
        <div
          key={`sparkle-${i}`}
          className="pointer-events-none fixed z-[10000]"
          style={{
            left: s.x,
            top: s.y,
            opacity: s.opacity,
            width: s.size,
            height: s.size,
            filter: "drop-shadow(0 0 8px #fff)",
          }}
        >
          {renderSparkleShape(s)}
        </div>
      ))}

      <style>{`
        @keyframes sparkle-flicker {
          0% { opacity: 1; transform: rotate(0deg) scale(1); }
          50% { opacity: 0.3; transform: rotate(15deg) scale(0.7); }
          100% { opacity: 1; transform: rotate(0deg) scale(1); }
        }
      `}</style>
    </>
  );
}
