"use client";

import { Sparkles } from "lucide-react";

export default function SkillsCarousel() {
  const skills = [
    { name: "HTML", icon: "html.svg" },
    { name: "CSS", icon: "css.svg" },
    { name: "JavaScript", icon: "js.svg" },
    { name: "TypeScript", icon: "ts.svg" },
    { name: "React", icon: "react.svg" },
    { name: "Next.js", icon: "nextjs.svg" },
    { name: "Node.js", icon: "nodejs.svg" },
    { name: "Figma", icon: "figma.svg" },
    { name: "Canva", icon: "canva.svg" },
    { name: "Photoshop", icon: "photoshop.svg" },
    { name: "Illustrator", icon: "illustrator.svg" },
    { name: "npm", icon: "npm.svg" },
    { name: "Git", icon: "git.svg" },
    { name: "GitHub", icon: "github.svg" },
    { name: "Zustand", icon: "zustand.svg" },
    { name: "Tailwind", icon: "tailwind.svg" },
    { name: "Zod", icon: "zod.svg" },
  ];

  const scrollingSkills = [...skills, ...skills];

  return (
    <div className="relative bg-black py-20 flex flex-col items-center">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Sparkles className="text-indigo-500" size={22} />
          <span className="text-sm tracking-wide text-indigo-400 uppercase">
            My Toolkit
          </span>
        </div>
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-600 to-white">
          Skills & Tools
        </h2>
        <p className="text-gray-400 mt-2 text-sm max-w-md mx-auto">
          A curated blend of technologies & design tools I use to bring ideas to life.
        </p>
      </div>

      {/* Line + Carousel + Line */}
      <div className="w-full max-w-6xl space-y-6">
        {/* Top Line */}
        <div className="h-px bg-white/10" />

        <div className="relative w-full max-w-7xl mx-auto overflow-hidden px-4">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10" />

          <div className="flex gap-6 animate-scroll px-8">
            {scrollingSkills.map((skill, index) => {
              const isDarkLogo =
                skill.name.toLowerCase() === "github" ||
                skill.name.toLowerCase() === "next.js";

              return (
                <div
                  key={index}
                  className="flex items-center gap-2 min-w-max px-2 py-1 border border-white/10 rounded-lg backdrop-blur-md bg-white/5 hover:scale-105 transition-transform duration-300"
                >
                  <div className={isDarkLogo ? "bg-white p-1 rounded-md" : ""}>
                    <img
                      src={`/${skill.icon}`}
                      alt={skill.name}
                      className="h-10 w-10 object-contain"
                    />
                  </div>
                  <span className="text-white text-xs font-medium whitespace-nowrap">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Line */}
        <div className="h-px bg-white/10" />
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
          display: flex;
          width: max-content;
        }
      `}</style>
    </div>
  );
}
