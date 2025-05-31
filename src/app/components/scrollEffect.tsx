"use client";
import React, { useEffect, useState } from "react";

const texts = [
  "Logo Design",
  "Package Design",
  "Poster Design",
  "Book Cover Design",
];

const imageSets = [
  [
    { src: "/logo1.png", style: { left: "15%", bottom: "10%" } },
    { src: "/logo2.png", style: { left: "40%", bottom: "15%" } },
    { src: "/logo3.png", style: { right: "20%", bottom: "8%" } },
  ],
  [
    { src: "/package1.png", style: { left: "10%", bottom: "15%" } },
    {
      src: "/package2.png",
      style: { left: "50%", bottom: "10%", transform: "translateX(-50%)" },
    },
    { src: "/package3.png", style: { right: "10%", bottom: "20%" } },
  ],
  [
    { src: "/poster1.png", style: { left: "5%", bottom: "10%" } },
    { src: "/poster2.png", style: { left: "40%", bottom: "5%" } },
    { src: "/poster3.png", style: { right: "5%", bottom: "15%" } },
  ],
  [
    {
      src: "/book1.png",
      style: { left: "50%", bottom: "10%", transform: "translateX(-50%)" },
    },
    { src: "/book2.png", style: { left: "20%", bottom: "25%" } },
    { src: "/book3.png", style: { right: "20%", bottom: "20%" } },
  ],
];

// Hook to get window size
const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return size;
};

const ScrollFreezeShowcase = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [width] = useWindowSize();

  useEffect(() => {
    let frameId: number;

    const handleScroll = () => {
      if (frameId) cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        const section = document.getElementById("scroll-freeze");
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const progress = Math.min(
          Math.max((windowHeight - rect.top) / section.offsetHeight, 0),
          1
        );

        setScrollProgress(progress);
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(frameId);
    };
  }, []);

  const totalSlides = texts.length;
  const exactIndex = scrollProgress * totalSlides;
  const activeIndex = Math.floor(exactIndex);
  const [firstWord, secondWord] = texts[activeIndex]?.split(" ") || [];

  // Responsive image scaling
  const getResponsiveSize = () => {
    if (width < 640) return 80;
    if (width < 1024) return 100;
    return 120;
  };

  return (
    <section id="scroll-freeze" className="relative h-[400vh]">
      <div className="sticky top-0 h-screen overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          {imageSets.map((images, i) => {
            const offset = i - exactIndex;
            const translateY = offset * 100;
            const opacity = 1 - Math.min(Math.abs(offset), 1);

            return images.map((img, j) => (
              <img
                key={`${i}-${j}`}
                src={img.src}
                alt=""
                className="absolute object-cover rounded-xl shadow-2xl transition-transform duration-500 ease-out will-change-transform"
                style={{
                  ...img.style,
                  transform: `${
                    img.style.transform || ""
                  } translateY(${translateY}vh)`,
                  opacity,
                  width: `${getResponsiveSize()}px`,
                  height: `${getResponsiveSize() * 1.2}px`,
                  willChange: "transform, opacity",
                }}
              />
            ));
          })}
        </div>

        <div className="relative z-10 flex h-full items-center justify-center pointer-events-none">
          <p className="text-center text-[12vw] font-bold text-white/20 leading-none transition-all duration-300">
            {firstWord?.toUpperCase()}
            <br />
            <span className="block font-playfair text-[14vw] tracking-tight">
              {secondWord?.toUpperCase()}
            </span>
          </p>
        </div>

        <div className="absolute bottom-10 left-4 md:left-10 z-20 text-white text-sm md:text-base font-medium">
          <p className="mb-4 text-white/70 tracking-wide uppercase">
            Explore my visual design journey
          </p>
          <div className="flex flex-col gap-2">
            {texts.map((text, i) => (
              <div
                key={text}
                className={`transition-all duration-300 cursor-default relative pl-2 ${
                  activeIndex === i
                    ? "text-white scale-[1.05] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-1 before:w-1 before:rounded-full before:bg-white"
                    : "text-white/50 hover:text-white/80"
                }`}
              >
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollFreezeShowcase;
