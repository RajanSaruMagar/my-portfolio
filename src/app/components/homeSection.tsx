"use client";

import React from "react";

const HomeSection = () => {
  return (
    <div
      className="bg-gray-100 text-black min-h-screen w-full flex justify-center items-center relative overflow-hidden"
      id="home"
    >
      {/* Radial Gradient Background */}
      <div className="absolute inset-0 bg-gradient-radial opacity-20 pointer-events-none"></div>

      {/* Floating Geometric Shapes */}
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className={`absolute pointer-events-none opacity-30 animate-bounce-slow`}
          style={{
            width: `${Math.random() * 25 + 10}px`,
            height: `${Math.random() * 25 + 10}px`,
            top: `${Math.random() * 90}%`,
            left: `${Math.random() * 90}%`,
            backgroundColor: ["#F87171", "#34D399", "#60A5FA", "#FBBF24"][
              Math.floor(Math.random() * 4)
            ],
            borderRadius: Math.random() > 0.5 ? "50%" : "0%",
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}

      {/* Floating Circle Badge */}
      <div className="floating-badge absolute w-28 h-28 md:w-36 md:h-36 xl:w-40 xl:h-40 rounded-full border-2 border-black flex justify-center items-center bg-black z-20">
        <svg viewBox="0 0 200 200" className="w-full h-full text-white">
          <defs>
            <path
              id="circlePath"
              d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />
          </defs>
          <text fill="white" fontSize="12" fontFamily="cursive">
            <textPath href="#circlePath" startOffset="0%">
              ✦ Best for your choice since 2024 ✦ Creative Design ✦ Agency ✦ Excellence ✦
            </textPath>
          </text>
        </svg>
        {/* Downward Arrow */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute w-6 h-6 md:w-8 md:h-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0l-6-6m6 6l6-6" />
        </svg>
      </div>

      {/* Content Container */}
      <div className="space-y-10 z-10">
        {/* First Row */}
        <div className="flex flex-col sm:flex-row justify-center items-center lg:items-start gap-6 sm:gap-10 xl:gap-20">
          <div className="overflow-hidden rounded-full w-[180px] sm:w-[200px] xl:w-[300px] h-20 sm:h-24 xl:h-32 shadow-lg">
            <img
              src="pic.jpg"
              className="w-full h-full object-cover scale-125 transition-transform duration-500 hover:scale-150"
            />
          </div>
          <span className="galada text-5xl sm:text-6xl md:text-7xl xl:text-9xl font-bold animate-fadeIn text-center lg:mt-4">
            Creative Designer
          </span>
        </div>

        {/* Second Row */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-center">
          <span className="playfair italic text-5xl sm:text-6xl md:text-7xl xl:text-9xl font-thin animate-fadeIn delay-200 text-center lg:relative lg:-top-4">
            for your
          </span>
          <div className="overflow-hidden rounded-b-[60px] rounded-tl-[60px] w-[260px] sm:w-[400px] xl:w-[800px] h-20 sm:h-24 xl:h-28 shadow-lg animate-fadeIn delay-400">
            <img
              src="pic1.jpg"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-125"
            />
          </div>
        </div>

        {/* Third Row */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 md:gap-28 justify-center items-center lg:items-start pt-8">
          <span className="galada text-5xl sm:text-6xl md:text-7xl xl:text-9xl font-bold animate-fadeIn delay-800 order-1 sm:order-2 lg:mt-4">
            Agency
          </span>
          <div className="overflow-hidden rounded-r-[60px] w-[260px] sm:w-[400px] xl:w-[800px] h-20 sm:h-24 xl:h-28 shadow-lg animate-fadeIn delay-600 order-2 sm:order-1">
            <img
              src="pic2.jpeg"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-125"
            />
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .animate-bounce-slow {
          animation: bounce 6s ease-in-out infinite alternate;
        }
        @keyframes bounce {
          0% {
            transform: translateY(0px);
          }
          100% {
            transform: translateY(-15px);
          }
        }

        .animate-fadeIn {
          opacity: 0;
          animation: fadeIn 1s forwards;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-400 {
          animation-delay: 0.4s;
        }
        .delay-600 {
          animation-delay: 0.6s;
        }
        .delay-800 {
          animation-delay: 0.8s;
        }
        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }

        .bg-gradient-radial {
          background: radial-gradient(circle at center, #ffffff, #e5e7eb);
        }

        .floating-badge {
          animation: floatMove 20s ease-in-out infinite alternate,
            spinBadge 12s linear infinite;
        }
        @keyframes floatMove {
          0% {
            top: 15%;
            left: 10%;
          }
          25% {
            top: 25%;
            left: 70%;
          }
          50% {
            top: 60%;
            left: 50%;
          }
          75% {
            top: 40%;
            left: 20%;
          }
          100% {
            top: 15%;
            left: 60%;
          }
        }
        @keyframes spinBadge {
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default HomeSection;
