import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="w-full h-full object-cover absolute"
      >
        <source src="animate.mp4" type="video/mp4" />
      </video>

      {/* Blur Overlay */}
      <div className="absolute inset-0 backdrop-blur-md "></div>

      {/* icon */}

      <div className="absolute flex  gap-4">
        <a href="https://www.linkedin.com/in/rajan-saru-magar-6a168230a/">
          <img className="h-5 w-5" src="linkedin.svg" />
        </a>
        <a href="https://github.com/RajanSaruMagar">
          <img className="h-5 w-5" src="github.svg" />
        </a>
        <a href="https://www.instagram.com/rjan_mgrx/">
          <img className="h-5 w-5" src="instagram.svg" />
        </a>
      </div>

      {/* Text and Link */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Link
          href="/Homepage"
          className="text-6xl font-medium text-white relative z-10"
        >
          Welcome To My
          <p className=" pt-5 text-[#737373]">Portfolio Website</p>
        </Link>
      </div>
    </div>
  );
}
