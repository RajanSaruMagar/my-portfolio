"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="w-full h-full object-cover absolute brightness-75 contrast-90"
      >
        <source src="animate.mp4" type="video/mp4" />
        <source src="animate.webm" type="video/webm" />
      </video>

      {/* Overlays */}
      <div className="absolute inset-0 z-0" />
      <div className="absolute inset-0 backdrop-blur-md z-0" />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-6 z-10"
      >
        {/* Social Icons */}
        <div className="flex gap-6 p-2 rounded-xl backdrop-blur-sm">
          {[
            {
              href: "https://www.linkedin.com/in/rajan-saru-magar-6a168230a/",
              src: "linkedin.svg",
              alt: "LinkedIn",
              glow: "rgba(59,130,246,0.6)",
            },
            {
              href: "https://github.com/RajanSaruMagar",
              src: "github.svg",
              alt: "GitHub",
              glow: "rgba(255,255,255,0.4)",
            },
            {
              href: "https://www.instagram.com/rjan_mgrx/",
              src: "instagram.svg",
              alt: "Instagram",
              glow: "rgba(225,48,108,0.6)",
            },
          ].map(({ href, src, alt, glow }, i) => (
            <a key={i} href={href} target="_blank" rel="noopener noreferrer">
              <div
                className={`p-2 rounded-full bg-white/10 backdrop-blur-md shadow-[0_0_10px_${glow}] border-2 border-transparent transition hover:scale-110 hover:border-gradient-to-r hover:from-pink-500 hover:to-purple-500`}
              >
                <img className="h-6 w-6 filter invert" src={src} alt={alt} />
              </div>
            </a>
          ))}
        </div>

        {/* Welcome Text */}
        <Link
          href="/Homepage"
          className="text-4xl md:text-6xl font-semibold text-white transition hover:opacity-90"
        >
          Welcome To My
          <p className="pt-4 ">Portfolio Website</p>
        </Link>

        {/* Call to Action */}
        <button className="mt-4 text-white/80 hover:text-white animate-bounce transition">
          ↓ Explore
        </button>
      </motion.div>
    </div>
  );
}
