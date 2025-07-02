"use client";
import { useEffect } from "react";
import ScrollText from "./scroll";
import ScrollFreezeShowcase from "./DesignScroll";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Portfolio() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div id="portfolio" className="bg-black px-6 md:px-20 xl:px-40 pt-20">
      {/* Top Section */}
      <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pb-20">
        {/* Video Grid */}
        <div className="grid grid-cols-2 grid-rows-2 w-full h-full absolute z-0 pointer-events-none">
          <div />
          <div className="flex justify-end items-start p-2">
            <video
              className="w-[90%] max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[500px] rounded-md brightness-50"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/video.webm" type="video/webm" />
              <source src="/video.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="flex justify-start items-end p-2">
            <video
              className="w-[90%] max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[500px] rounded-md brightness-50"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/video.webm" type="video/webm" />
              <source src="/video.mp4" type="video/mp4" />
            </video>
          </div>
          <div />
        </div>

        {/* Center Text with AOS */}
        <div data-aos="zoom-in">
          <ScrollText />
        </div>
      </div>

      {/* Horizontal Line */}
      <hr className="border-t-2 border-white/10 my-8" />

      {/* Showcase Section */}
      <div className="text-white py-10 space-y-20">
        {/* Quote Section with AOS */}
        <div
          className="relative h-64 w-full overflow-hidden rounded-none md:rounded-xl"
          data-aos="fade-up"
        >
          <img
            src="/branding.png"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
            alt="Branding background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-transparent" />
          <p className="relative z-10 text-center text-xl md:text-3xl font-light text-indigo-200 leading-relaxed px-6 py-10 drop-shadow-lg">
            &quot;Your brand is what other people say about you when you&apos;re
            not in the room.&quot;
            <br />
            <span className="block mt-4 text-base md:text-lg font-semibold text-white">
              — Jeff Bezos
            </span>
          </p>
        </div>

        {/* Horizontal Line */}
        <hr className="border-t-2 border-white/10 my-8" />

        {/* Big Title with AOS */}
        <p
          className="text-4xl sm:text-6xl md:text-7xl font-bold text-center uppercase tracking-wider animate-fade-in bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 bg-clip-text text-transparent animate-gradient bg-[200%] bg-no-repeat bg-[length:400%_100%]"
          data-aos="zoom-in"
        >
          Design. Develop. Deliver.
        </p>

        {/* ScrollFreezeShowcase with AOS */}
        <div data-aos="fade-up">
          <ScrollFreezeShowcase />
        </div>
      </div>
    </div>
  );
}
