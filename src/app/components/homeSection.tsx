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
    <div id="home" className="text-white h-screen flex flex-col bg-black">
      {/* Video Background Section */}
      <div className="relative h-[85%] w-full px-10 py-5">
        <div className="relative w-full h-full rounded-3xl overflow-hidden">
          {/* Video */}
          <video
            className="w-full h-full object-cover blur-sm "
            src={videoSrc}
            autoPlay
            loop
            muted
          />

          {/* Overlay Text */}
          <div className="absolute inset-0 flex flex-col justify-between p-10 z-10">
            {/* Top Row */}
            <div className="flex justify-between items-start">
              <div className="text-9xl ">
                New
                <br />
                <span className="italic font-Galada  text-9xl  pl-24">
                  freedoms
                </span>
              </div>
              <div className="w-48 h-24" />
            </div>

            {/* Bottom Row */}
            <div className="flex justify-between items-end">
              <div className="max-w-md text-xl text-gray-200">
                <span className="opacity-50">
                  Ideate, visualize, create videos, and share your dreams with
                  the world, using our most powerful image and video
                </span>{" "}
                <span>AI</span>{" "}
                <span className="opacity-50">models. Available now</span>{" "}
                <span>Web</span>.
              </div>

              <div className="text-right ">
                <div className="text-8xl font-normal">of</div>
                <div className="text-8xl font-playfair italic pr-10">
                  imagination
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="bg-black h-[15%] w-full flex justify-between items-center px-10">
        <div className="text-4xl font-extralight leading-tight">
          Dream
          <br />
          <span className="font-semibold text-2xl pl-8">MACHINE</span>
        </div>

        <img src="profile.png" className="relative mb-96" />

        <a
  href="#contact"
  className="relative overflow-hidden z-10 bg-white text-black font-semibold text-2xl px-10 py-4 rounded-full group transition-colors duration-700 ease-out"
>
  <span className="relative z-20 transition-colors duration-700 group-hover:text-white">
    Try Now
  </span>
  <span className="absolute inset-0 rounded-full bg-black scale-0 group-hover:scale-150 transition-transform duration-700 ease-out z-10 origin-center" />
</a>

      </div>
    </div>
  );
};

export default HomeSection;
