"use client";
import React, { useEffect, useState } from "react";

const HomeSection = () => {
  const [videoSrc, setVideoSrc] = useState("/back.mp4"); // default to Asia

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        const region = data?.continent_code || "";

        if (region !== "AS") {
          setVideoSrc("/back1.mp4");
        }
      } catch (error) {
        console.error("Failed to fetch location:", error);
      }
    };

    fetchLocation();
  }, []);

  return (
    <div
      id="home"
      className="text-white h-screen flex flex-col bg-black pb-80 lg:pb-0"
    >
      {/* Video Background Section */}
      <div className="relative h-screen md:h-[85%] w-full px-10 py-5">
        <div className="relative w-full h-[80vh] md:h-full rounded-3xl overflow-hidden">
          {/* Video */}
          <video
            className="w-full h-full object-cover blur-sm"
            src={videoSrc}
            autoPlay
            loop
            muted
          />

          {/* Overlay Text */}
          <div className="absolute inset-0 flex flex-col justify-between p-10 z-10">
            {/* Top Row */}
            <div className="flex justify-between items-start">
              <div className="text-7xl md:text-9xl">
                New
                <br />
                <span className="italic font-playfair text-7xl  md:text-9xl pl-8 md:pl-24">
                  Vision
                </span>
              </div>
              {/* <div className="w-48 h-24" /> */}
            </div>

            {/* Bottom Row */}
            <div className="flex justify-between items-end">
              <div className="hidden md:block max-w-md text-xl text-gray-200">
                <span className="opacity-50">
                  Ideate, visualize, create videos, and share your dreams with
                  the world, using our most powerful image and video
                </span>{" "}
                <span>AI</span>{" "}
                <span className="opacity-50">models. Available now</span>{" "}
                <span>Web</span>.
              </div>

              <div className="text-right ">
                <div className="text-4xl md:text-8xl font-normal">of</div>
                <div className="text-4xl md:text-8xl font-playfair italic pr-10">
                  imagination
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="relative h-[15%] w-full flex justify-between items-center md:px-10">
        <div className="text-xl md:text-4xl font-extralight leading-[17px] font-playfair">
          <span className="text-3xl md:text-5xl">D</span>ream
          <br />
          <span className="font-bold md:text-2xl pl-3 md:pl-10">MACHINE</span>
        </div>
        <a
          href="#contact"
          className="relative overflow-hidden bg-white text-black font-semibold text-lg sm:text-xl md:text-2xl px-6 sm:px-8 md:px-10 py-2 md:py-4 rounded-full group transition-colors duration-700 ease-out whitespace-nowrap"
        >
          <span className="relative z-20 text-center transition-colors duration-700 group-hover:text-white whitespace-nowrap">
            Try Now
          </span>
          <span className="absolute inset-0 z-10 rounded-full bg-black scale-0 group-hover:scale-150 transition-transform duration-700 ease-out origin-center" />
        </a>
      </div>

      <div className="relative">
        <div className="absolute left-1/2 bottom-[1px] transform -translate-x-1/2">
          <img src="profile.png" className="h-40 md:h-[700px]" />
        </div>
      </div>
      
      
    </div>
  );
};

export default HomeSection;
