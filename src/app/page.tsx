"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const line1 = ["Welcome", "to", "my"];
const line2 = ["Portfolio", "Website"];

export default function LandingPage() {
  const router = useRouter();
  const clickedRef = useRef(false);
  const [showContent, setShowContent] = useState(true);

  // Auto redirect after 3s with fade-out
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!clickedRef.current) {
        setShowContent(false); // fade-out animation
        setTimeout(() => router.push("/Homepage"), 800);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="relative w-full min-h-[100dvh] overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover brightness-75 contrast-90"
      >
        <source src="animate.mp4" type="video/mp4" />
        <source src="animate.webm" type="video/webm" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 backdrop-blur-md" />

      {/* Main Content */}
      <AnimatePresence>
        {showContent && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40, transition: { duration: 0.8 } }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-8 z-10"
          >
            {/* Floating Social Icons */}
            <div className="flex gap-6 p-2 rounded-xl backdrop-blur-sm">
              {[
                {
                  href: "https://www.linkedin.com/in/rajan-saru-magar-6a168230a/",
                  src: "linkedin.svg",
                  alt: "LinkedIn",
                },
                {
                  href: "https://github.com/RajanSaruMagar",
                  src: "github.svg",
                  alt: "GitHub",
                },
                {
                  href: "https://www.instagram.com/rjan_mgrx/",
                  src: "instagram.svg",
                  alt: "Instagram",
                },
              ].map(({ href, src, alt }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ y: 0 }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 2,
                    delay: i * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="p-3 rounded-full bg-white/10 backdrop-blur-md hover:scale-110 transition">
                    <img
                      className="h-6 w-6 filter invert"
                      src={src}
                      alt={alt}
                    />
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Glowing Animated Text */}
            <Link
              href="/Homepage"
              onClick={() => (clickedRef.current = true)}
              className="transition hover:opacity-90"
            >
              <motion.div
                animate={{ textShadow: ["0 0 8px #ff33cc", "0 0 20px #6600ff", "0 0 8px #ff33cc"] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-white font-extrabold text-4xl md:text-6xl space-y-2"
              >
                <div className="flex flex-wrap justify-center gap-x-3">
                  {line1.map((word, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: i * 0.3 }}
                      className="inline-block"
                    >
                      {word}
                    </motion.span>
                  ))}
                </div>
                <div className="flex flex-wrap justify-center gap-x-3">
                  {line2.map((word, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: (line1.length + i) * 0.3,
                      }}
                      className="inline-block"
                    >
                      {word}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </Link>

            {/* Explore Button with Glow Pulse */}
            <motion.button
              className="mt-4 text-white/80 hover:text-white px-4 py-2 rounded-full border border-white/30"
              animate={{ boxShadow: ["0 0 10px #fff", "0 0 20px #ff00ff", "0 0 10px #fff"] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ↓ Explore
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
