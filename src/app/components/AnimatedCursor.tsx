"use client";

import React, { useEffect, useState } from "react";

interface Trail {
  x: number;
  y: number;
  opacity: number;
  scale: number;
}

interface Sparkle {
  x: number;
  y: number;
  size: number;
  opacity: number;
  flickerDuration: number;
  rotation: number;
}

export default function FlameTrailCursor() {
  const [trails, setTrails] = useState<Trail[]>([]);
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setTrails((prev) => [
        ...prev.slice(-15),
        {
          x: e.clientX,
          y: e.clientY,
          opacity: 1,
          scale: 1,
        },
      ]);

      // Add sparkles randomly around cursor
      if (Math.random() < 0.3) {
        setSparkles((prev) => [
          ...prev.slice(-30),
          {
            x: e.clientX + (Math.random() - 0.5) * 20,
            y: e.clientY + (Math.random() - 0.5) * 20,
            size: 3 + Math.random() * 3,
            opacity: 1,
            flickerDuration: 0.6 + Math.random() * 1.2,
            rotation: Math.random() * 360,
          },
        ]);
      }
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
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
          }))
          .filter((s) => s.opacity > 0)
      );
    }, 16);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {trails.map((trail, index) => (
        <div
          key={`trail-${index}`}
          className="pointer-events-none fixed z-[9999] w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 blur-xl"
          style={{
            left: trail.x - 16,
            top: trail.y - 16,
            opacity: trail.opacity,
            transform: `scale(${trail.scale})`,
            transition: "transform 0.2s, opacity 0.2s",
          }}
        />
      ))}

      {sparkles.map((sparkle, index) => (
        <div
          key={`sparkle-${index}`}
          className="pointer-events-none fixed bg-white rounded-full"
          style={{
            left: sparkle.x,
            top: sparkle.y,
            width: sparkle.size,
            height: sparkle.size,
            opacity: sparkle.opacity,
            transform: `rotate(${sparkle.rotation}deg)`,
            filter: "drop-shadow(0 0 6px #60a5fa)",
            animation: `sparkle-flicker ${sparkle.flickerDuration}s ease-in-out infinite alternate`,
            zIndex: 10000,
          }}
        />
      ))}

      <style>{`
        @keyframes sparkle-flicker {
          0% {
            opacity: 1;
            transform: rotate(0deg) scale(1);
          }
          50% {
            opacity: 0.3;
            transform: rotate(15deg) scale(0.7);
          }
          100% {
            opacity: 1;
            transform: rotate(0deg) scale(1);
          }
        }
      `}</style>
    </>
  );
}
