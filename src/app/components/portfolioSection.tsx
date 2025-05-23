"use client";
import ScrollText from "./scroll";

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
        {/* Paragraph */}
        <p className="font-medium text-lg leading-relaxed text-gray-300">
          A well-designed website is crucial for any business, as it serves as a
          digital storefront, provides 24/7 accessibility, and showcases
          products or services. It helps build credibility, drive traffic, and
          improve sales—ultimately contributing to growth and success in a
          competitive market.
        </p>

        {/* Quote */}
        <p className="text-md font-semibold text-indigo-500">
          &quot;Your brand is what other people say about you when you&apos;re
          not in the room.&quot; — Jeff Bezos
        </p>

        {/* Big Title */}
        <p className="text-4xl sm:text-6xl md:text-7xl font-bold text-center uppercase tracking-wider animate-fade-in bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 bg-clip-text text-transparent animate-gradient bg-[200%] bg-no-repeat bg-[length:400%_100%]">
          Design. Develop. Deliver.
        </p>

        {/* Logo Section */}
        <div>
          <p className="text-4xl font-semibold">
            LOGO <span className="text-2xl text-indigo-500">folio</span>
          </p>
        </div>

        {/* Poster Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Text */}
          <div className="space-y-5">
            <h1 className="text-4xl sm:text-5xl font-semibold">
              We&apos;ll Work on <br /> Your Projects
            </h1>
            <p className="text-lg text-gray-400">
              Each piece reflects my love for visual storytelling—whether it’s a
              poster, logo, or thumbnail, I focus on creating designs that stand
              out and communicate clearly.
            </p>
          </div>

          {/* Right Image Grid */}
          <div className="grid grid-cols-3 gap-4">
            {[
              "design.png",
              "illust.svg",
              "design.png",
              "design.png",
              "design.png",
            ].map((img, i) => (
              <img
                key={i}
                src={`/${img}`}
                alt={`Portfolio work ${i + 1}`}
                className="rounded-lg object-cover"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
