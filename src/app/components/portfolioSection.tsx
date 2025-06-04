"use client";
import ScrollText from "./scroll";
import ScrollFreezeShowcase from "./scrollEffect";

export default function Portfolio() {
  return (
    <div id="portfolio" className="bg-black px-6 md:px-20 xl:px-40 pt-20">
      {/* Top Section */}
      <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pb-20">
        {/* Video Grid */}
        <div className="grid grid-cols-2 grid-rows-2 w-full h-full absolute z-0 pointer-events-none">
          <div />
          <div className="flex justify-end items-start">
            <video
              className="w-[60%] rounded-md brightness-50"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/video.webm" type="video/webm" />
              <source src="/video.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="flex justify-start items-end">
            <video
              className="w-[60%] rounded-md brightness-50"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/video1.webm" type="video/webm" />
              <source src="/video1.mp4" type="video/mp4" />
            </video>
          </div>
          <div />
        </div>

        {/* Center Text */}

        <ScrollText />
      </div>

      {/* Horizontal Line */}
      <hr className="border-t-2 border-white/10 my-8" />

      {/* Showcase Section */}
      <div className="text-white py-10 space-y-20">
        {/* Quote */}
        <p className="text-md font-semibold text-indigo-500">
          &quot;Your brand is what other people say about you when you&apos;re
          not in the room.&quot; — Jeff Bezos
        </p>

        {/* Big Title */}
        <p className="text-4xl sm:text-6xl md:text-7xl font-bold text-center uppercase tracking-wider animate-fade-in bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 bg-clip-text text-transparent animate-gradient bg-[200%] bg-no-repeat bg-[length:400%_100%]">
          Design. Develop. Deliver.
        </p>

        <ScrollFreezeShowcase />
      </div>
    </div>
  );
}
