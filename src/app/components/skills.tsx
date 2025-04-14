"use client";

export default function SkillsCarousel() {
  return (
    <div className="bg-black p-6  flex flex-col justify-center">
      <p className="text-white text-2xl font-bold mb-6 text-center">
        Skills & Tools
      </p>
      <div className="overflow-hidden relative w-full">
        <div className="flex gap-8 animate-scroll hover:animate-slow-scroll">
          {Array(2)
            .fill([
              "html",
              "css",
              "js",
              "ts",
              "react",
              "nextjs",
              "nodejs",
              "figma",
              "canva",
              "photoshop",
              "illustrator",
              "npm",
              "git",
              "github",
              "zustand",
              "tailwind",
              "zod",
            ])
            .flat()
            .map((skill, index) => (
              <img
                key={index}
                src={`${skill}.svg`}
                className="h-24 w-24 object-contain flex-shrink-0"
              />
            ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }

        .animate-slow-scroll {
          animation: scroll 40s linear infinite;
        }

        .flex img {
          flex: 0 0 auto;
        }

        .overflow-hidden {
          max-width: 100%;
          white-space: nowrap;
        }
      `}</style>
    </div>
  );
}
