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
      <div className="absolute inset-0 backdrop-blur-md"></div>

      {/* Text and Link */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Link href="/Homepage" className="text-6xl text-white relative z-10">
          Welcome To My
          <p className="text-4xl pt-5 text-[#4a4b45] font-medium">
            Portfolio Website
          </p>
        </Link>
      </div>
    </div>
  );
}
