"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const texts = [
  "Logo Design",
  "Package Design",
  "Poster Design",
  "Book Cover Design",
];

// Base styles for desktop, mobile overrides for mobile layout
const imageSets = [
  [
    {
      src: "/logo1.png",
      style: { left: "15%", bottom: "10%" },
      mobileStyle: { left: "5%", bottom: "15%" },
    },
    {
      src: "/logo2.png",
      style: { left: "40%", bottom: "15%" },
      mobileStyle: { left: "35%", bottom: "5%" },
    },
    {
      src: "/logo3.png",
      style: { right: "20%", bottom: "8%" },
      mobileStyle: { right: "5%", bottom: "20%" },
    },
  ],
  [
    {
      src: "/package1.png",
      style: { left: "10%", bottom: "15%" },
      mobileStyle: { left: "8%", bottom: "10%" },
    },
    {
      src: "/package2.png",
      style: { left: "50%", bottom: "10%", transform: "translateX(-50%)" },
      mobileStyle: {
        left: "50%",
        bottom: "15%",
        transform: "translateX(-50%)",
      },
    },
    {
      src: "/package3.png",
      style: { right: "10%", bottom: "20%" },
      mobileStyle: { right: "8%", bottom: "10%" },
    },
  ],
  [
    {
      src: "/poster1.png",
      style: { left: "5%", bottom: "10%" },
      mobileStyle: { left: "10%", bottom: "12%" },
    },
    {
      src: "/poster2.png",
      style: { left: "40%", bottom: "5%" },
      mobileStyle: { left: "30%", bottom: "10%" },
    },
    {
      src: "/poster3.png",
      style: { right: "5%", bottom: "15%" },
      mobileStyle: { right: "8%", bottom: "15%" },
    },
  ],
  [
    {
      src: "/book1.png",
      style: { left: "50%", bottom: "10%", transform: "translateX(-50%)" },
      mobileStyle: {
        left: "50%",
        bottom: "10%",
        transform: "translateX(-50%)",
      },
    },
    {
      src: "/book2.png",
      style: { left: "20%", bottom: "25%" },
      mobileStyle: { left: "15%", bottom: "20%" },
    },
    {
      src: "/book3.png",
      style: { right: "20%", bottom: "20%" },
      mobileStyle: { right: "15%", bottom: "20%" },
    },
  ],
];

const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  useEffect(() => {
    const handleResize = () => setSize([window.innerWidth, window.innerHeight]);
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

  // Responsive sizes for images
  const getResponsiveSize = () => {
    if (width < 640) return 120;
    if (width < 1024) return 180;
    return 225;
  };

  return (
    <section id="scroll-freeze" className="relative h-[400vh] bg-black">
      <div className="sticky top-0 h-screen overflow-hidden px-4 sm:px-8">
        {/* Image container */}
        <div className="absolute inset-0 z-0 flex flex-col items-center">
          {imageSets.map((images, i) => {
            const offset = i - exactIndex;
            const baseTranslateY = offset * 100;

            const opacity = 1 - Math.min(Math.abs(offset), 1);

            if (width < 1024) {
              // Mobile/tablet: stack sets vertically with translateY & flex-wrap images

              // Fix for package design (index 1) on mobile: limit upward translateY to -5vh max
              let mobileTranslateY = baseTranslateY;
              if (i === 1) {
                const maxMobileUpwardTranslate = -5;
                if (baseTranslateY < maxMobileUpwardTranslate)
                  mobileTranslateY = maxMobileUpwardTranslate;
              }

              return (
                <div
                  key={`mobile-set-${i}`}
                  className="flex flex-wrap justify-center gap-4 px-6 py-12 transition-opacity duration-500 ease-out"
                  style={{
                    transform: `translateY(${mobileTranslateY}vh)`,
                    opacity,
                    width: "100%",
                    minHeight: getResponsiveSize() * 1.2 + 40,
                  }}
                >
                  {images.map((img, j) => (
                    <div
                      key={`mobile-img-${i}-${j}`}
                      className="relative rounded-2xl shadow-2xl overflow-hidden"
                      style={{
                        width: getResponsiveSize(),
                        height: getResponsiveSize() * 1.2,
                        flex: "0 0 auto",
                      }}
                    >
                      <Image
                        src={img.src}
                        alt=""
                        fill
                        sizes="(max-width: 640px) 120px, (max-width: 1024px) 180px"
                        className="object-contain rounded-2xl"
                        quality={90}
                        priority
                      />
                    </div>
                  ))}
                </div>
              );
            }

            // Desktop: absolute positioned images with scroll transform & opacity
            return images.map((img, j) => {
              const baseStyle = img.style;

              return (
                <div
                  key={`${i}-${j}`}
                  className="absolute rounded-2xl shadow-2xl transition-transform duration-500 ease-out will-change-transform overflow-hidden"
                  style={{
                    ...baseStyle,
                    transform: `${
                      baseStyle.transform || ""
                    } translateY(${baseTranslateY}vh)`,
                    opacity,
                    width: `${getResponsiveSize()}px`,
                    height: `${getResponsiveSize() * 1.2}px`,
                    maxWidth: "90vw",
                  }}
                >
                  <Image
                    src={img.src}
                    alt=""
                    fill
                    sizes="225px"
                    className="object-contain rounded-2xl"
                    quality={90}
                    priority
                  />
                </div>
              );
            });
          })}
        </div>

        {/* Responsive text container */}
        <div className="relative z-10 flex h-full items-center justify-center pointer-events-none">
          <p
            className="text-center font-bold text-white/20 leading-none transition-all duration-300
                text-[18vw] sm:text-[14vw] md:text-[12vw] lg:text-[10vw] xl:text-[9vw] max-w-full px-2 sm:px-0"
            style={{
              marginTop: width < 640 ? "5vh" : "0",
            }}
          >
            {firstWord?.toUpperCase()}
            <br />
            <span
              className="block font-playfair tracking-tight
                  text-[22vw] sm:text-[16vw] md:text-[14vw] lg:text-[12vw] xl:text-[10vw]"
              style={{ color: "rgba(255,255,255,0.2)" }}
            >
              {secondWord?.toUpperCase()}
            </span>
          </p>
        </div>

        {/* Responsive sidebar navigation */}
        <div className="sticky bottom-10 left-4 md:left-10 z-20 text-white text-sm md:text-base font-medium max-w-xs sm:max-w-md">
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
