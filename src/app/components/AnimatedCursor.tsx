"use client";

import React, { useEffect, useState } from "react";

interface Trail {
  x: number;
  y: number;
  opacity: number;
  scale: number;
}

export default function FlameTrailCursor() {
  const [trails, setTrails] = useState<Trail[]>([]);

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
    }, 16);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {trails.map((trail, index) => (
        <div
          key={index}
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
    </>
  );
}
