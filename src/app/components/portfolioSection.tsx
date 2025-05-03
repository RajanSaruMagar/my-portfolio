export default function Portfolio() {
  return (
    <div id="portfolio" className="bg-black px-40 pt-20">
      {/* Top Section */}
      <div className="h-screen  flex flex-col items-center justify-center  overflow-hidden relative pb-20">
        {/* Background Overlay */}

        <div className="grid grid-cols-2 grid-rows-2 w-full h-full z-0 pointer-events-none">
          {/* Top-left: empty */}
          <div />

          {/* Top-right video */}
          <div className="flex justify-end items-start ">
            <video
              className="h-[70%] w-[60%] rounded-sm brightness-50"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/video.webm" type="video/webm" />
              <source src="/video.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Bottom-left video */}
          <div className="flex justify-start items-end ">
            <video
              className="h-[70%] w-[60%] rounded-sm brightness-50"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/video1.webm" type="video/webm" />
              <source src="/video1.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Bottom-right: empty */}
          <div />
        </div>

        {/* Center Text */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center ">
          <h1 className="text-white text-5xl md:text-7xl font-bold leading-tight">
            ALL MY WORKS AT THE SAME PLACE.
            <br />
            INCLUDES SMALLER PIECES OF WORK,
            <br />
            EXPERIMENTS, COLLABORATIONS, AND
            <br />
            UNSEEN OR UNUSED CONCEPTS
          </h1>

          <p className="text-white text-xl mt-12 animate-bounce">
            ↓ Scroll Down ↓
          </p>
        </div>
      </div>

      {/* Horizontal Line */}
      <hr className="border-t-2" />

      {/* Work Showcase Section */}
      <div className="bg-black text-white px-6 py-10 space-y-20">
        {/* Paragraph */}
        <p className="font-medium text-lg leading-relaxed">
          A well-designed website is crucial for any business, as it serves as a
          digital storefront, provides 24/7 <br /> accessibility, and showcases
          products or services. It helps build credibility, drive traffic, and
          improve
          <br /> sales, ultimately contributing to growth and success in a
          competitive market.
        </p>

        {/* Quote */}
        <p className="text-md font-semibold text-indigo-600">
          &quot;Your brand is what other people say about you when you&apos;re
          not in the room.&quot; — Jeff Bezos
        </p>

        {/* Title */}
        <p className="text-7xl font-bold text-center uppercase tracking-wider">
          Design. Develop. Deliver.
        </p>

        {/* Logo Section */}
        <div>
          <p className="text-4xl font-semibold">
            LOGO
            <span className="text-2xl font-medium text-indigo-600">folio</span>
          </p>
        </div>

        {/* Poster Design Section */}
        <div className="grid grid-cols-2 gap-10 items-center">
          {/* Left Text */}
          <div className="space-y-5">
            <h1 className="text-6xl font-semibold">
              We&apos;ll Work at Your <br /> Projects
            </h1>
            <p className="text-xl text-[#737373]">
              Each piece you see reflects my love for visual
              storytelling—whether it’s a
              <br /> poster, logo, or thumbnail, I focus on making designs that
              stand out and <br /> speak clearly.
            </p>
          </div>

          {/* Right Image Grid */}
          <div className="grid grid-cols-3 gap-4">
            <img src="/design.png" />
            <img src="/illust.svg" />
            <img src="/design.png" />
            <img src="/design.png" />
            <img src="/design.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
