"use client";
import React, { useEffect, useRef, useState } from "react";

export default function ArrowCursor() {
  const circleRef = useRef<HTMLDivElement>(null);
  const pointerRef = useRef<SVGSVGElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // detect device width
    const checkDevice = () => {
      setIsDesktop(window.innerWidth >= 768); // only enable on >= md screens
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    return () => {
      window.removeEventListener("resize", checkDevice);
    };
  }, []);

  useEffect(() => {
    if (!isDesktop) return; // disable on mobile

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let circleX = mouseX;
    let circleY = mouseY;
    let moving = false;
    let stopTimeout: NodeJS.Timeout;

    const animate = () => {
      const ease = moving ? 0.08 : 0.15;

      circleX += (mouseX - circleX) * ease;
      circleY += (mouseY - circleY) * ease;

      if (circleRef.current) {
        circleRef.current.style.transform = `translate3d(${circleX - 40}px, ${circleY - 40}px, 0)`;
      }
      if (pointerRef.current) {
        pointerRef.current.style.transform = `translate3d(${mouseX - 10}px, ${mouseY - 10}px, 0)`;
      }

      requestAnimationFrame(animate);
    };
    animate();

    const move = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      moving = true;

      if (stopTimeout) clearTimeout(stopTimeout);
      stopTimeout = setTimeout(() => {
        moving = false;
      }, 120);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [isDesktop]);

  if (!isDesktop) return null; // completely disable on mobile

  return (
    <>
      <style>{`body { cursor: none !important; }`}</style>

      {/* SVG Arrow Pointer */}
      <svg
        ref={pointerRef}
        width="20"
        height="24"
        viewBox="0 0 20 24"
        className="fixed pointer-events-none z-[10001]"
        style={{ top: 0, left: 0 }}
      >
        <polygon
          points="10,0 20,24 10,18 0,24"
          fill="white"
          stroke="black"
          strokeWidth="2"
        />
      </svg>

      {/* Lagging outer circle */}
      <div
        ref={circleRef}
        className="fixed pointer-events-none z-[10000] w-20 h-20 rounded-full"
        style={{
          top: 0,
          left: 0,
          border: "2px solid rgba(255,255,255,0.9)",
          boxShadow:
            "0 0 6px rgba(0,0,0,0.6), 0 0 6px rgba(255,255,255,0.5)",
          opacity: 0.85,
        }}
      />
    </>
  );
}
