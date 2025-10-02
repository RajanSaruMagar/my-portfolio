"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const texts = ["Logo Design", "Package Design", "Poster Design", "Book Cover Design"];
const imageSets = [
  ["/logo1.png", "/logo2.png", "/logo3.png"],
  ["/package1.png", "/package2.png", "/package3.png"],
  ["/poster1.png", "/poster2.png", "/poster3.png"],
  ["/book1.png", "/book2.png", "/book3.png"],
];

const useWindowWidth = () => {
  const [w, setW] = useState(0);
  useEffect(() => {
    const resize = () => setW(window.innerWidth);
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);
  return w;
};

const ScrollFreezeShowcase = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const width = useWindowWidth();

  useEffect(() => {
    const section = document.getElementById("scroll-freeze");
    if (!section) return;

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const progress = Math.min(Math.max((window.innerHeight - rect.top) / section.offsetHeight, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const totalSlides = texts.length;
  const exactIndex = scrollProgress * totalSlides;
  const activeIndex = Math.floor(exactIndex);
  const [first, second] = texts[activeIndex]?.split(" ") || [];

  const getSize = () => (width < 640 ? 120 : width < 1024 ? 180 : 225);

  const positions = [
    { x: -100, y: -20, rotate: -10 },
    { x: 0, y: 0, rotate: 0 },
    { x: 100, y: 20, rotate: 10 },
  ];

  return (
    <section id="scroll-freeze" className="relative h-[400vh] bg-black">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {imageSets.map((set, i) => {
          const offset = i - exactIndex;
          const translateY = i === 0 ? offset * 50 : offset * 100; // slow first set
          const opacity = 0.3 + (1 - Math.min(Math.abs(offset), 1)) * 0.7;

          return (
            <div
              key={i}
              className="absolute flex justify-center"
              style={{ transform: `translateY(${translateY}vh)`, opacity, gap: width >= 1024 ? 48 : 24 }}
            >
              {set.map((src, j) => {
                const style =
                  width >= 1024
                    ? `translate(${positions[j]?.x || 0}px, ${positions[j]?.y || 0}px) rotate(${positions[j]?.rotate || 0}deg)`
                    : "none";
                return (
                  <div
                    key={j}
                    className="relative rounded-2xl overflow-hidden shadow-lg"
                    style={{ width: getSize(), height: getSize() * 1.2, transform: style }}
                  >
                    <Image src={src} alt="" fill className="object-contain rounded-2xl" priority={i === 0} />
                  </div>
                );
              })}
            </div>
          );
        })}

        {/* Text Overlay */}
        <div className="relative z-10 text-center pointer-events-none">
          <p className="font-bold text-white/20 text-[18vw] sm:text-[14vw] md:text-[12vw] lg:text-[10vw] xl:text-[9vw]">
            {first?.toUpperCase()}
          </p>
          <span className="block font-playfair tracking-tight text-[22vw] sm:text-[16vw] md:text-[14vw] lg:text-[12vw] xl:text-[10vw] text-white/20">
            {second?.toUpperCase()}
          </span>
        </div>

        {/* Sidebar nav */}
        <div className="absolute bottom-10 left-4 md:left-10 text-white text-sm md:text-base max-w-xs sm:max-w-md font-medium">
          <p className="mb-4 text-white/70 uppercase">Explore my visual design journey</p>
          <div className="flex flex-col gap-2">
            {texts.map((t, i) => (
              <div
                key={t}
                className={`pl-2 transition-all duration-200 ${
                  activeIndex === i
                    ? "text-white scale-105 relative before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-1 before:w-1 before:bg-white before:rounded-full"
                    : "text-white/50"
                }`}
              >
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollFreezeShowcase;
