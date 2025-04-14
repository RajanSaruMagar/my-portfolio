export default function Portfolio() {
  return (
    <>
      <div id="portfolio">
        <div className="relative h-screen bg-black flex items-center justify-center px-10">
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

          {/* Top-right Video  */}
          <video
            className="absolute top-20 right-20 w-1/3 h-72 rounded-lg z-0 brightness-50"
            autoPlay
            loop
            playsInline
            muted
          >
            <source src="/video.webm" type="video/webm" />
            <source src="/video.mp4" type="video/mp4" />
          </video>

          {/* Centered Text */}
          <div className="relative text-white text-7xl font-bold text-center leading-tight z-20">
            ALL MY WORKS AT THE SAME PLACE.
            <br />
            INCLUDES SMALLER PIECES OF WORK,
            <br />
            EXPERIMENTS, COLLABORATIONS, AND
            <br /> UNSEEN OR UNUSED CONCEPTS
          </div>

          {/* Scroll Indicator  */}
          <div className="absolute bottom-16 text-2xl font-medium animate-bounce opacity-80 text-white">
            ↓ Scroll Down ↓
          </div>

          {/* Bottom-left Video  */}
          <video
            className="absolute bottom-20 left-20 w-1/3 h-72 rounded-lg z-0 brightness-50"
            autoPlay
            loop
            playsInline
            muted
          >
            <source src="/video1.webm" type="video/webm" />
            <source src="/video1.mp4" type="video/mp4" />
          </video>
        </div>

        {/* horizental line  */}

        <hr className="border-t-2" />

        {/* Another div to showcase WORK */}
        <div className="bg-black h-screen text-white px-40 py-10">
          <p className="font-medium text-lg leading-relaxed  mb-6">
            A well-designed website is crucial for any business, as it serves as
            a digital storefront, provides 24/7 <br /> accessibility, and
            showcases products or services. It helps build credibility, drive
            traffic, and improve
            <br /> sales, ultimately contributing to growth and success in a
            competitive market.
          </p>
          <p className="text-md font-semibold text-indigo-600">
            &quot;Your brand is what other people say about you when you&apos;re
            not in the room.&quot; — Jeff Bezos
          </p>
          <p className="flex justify-center w-full pt-10 text-7xl font-bold text-center uppercase tracking-wider ">
            Design. Develop. Deliver.
          </p>

          {/* logo design demo */}
          <div className="mt-20 h-screen">
            <p className="text-4xl font-semibold">
              LOGO<span className="text-2xl font-medium text-indigo-600">folio</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
