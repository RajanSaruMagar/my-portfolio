"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const HomeSection = () => {
  // State to control which video to show based on user location
  const [videoSrc, setVideoSrc] = useState("/back.mp4");

  // State to control profile image animation visibility
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    // Fetch user location via IP API to decide which video to show
    const fetchLocation = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        const region = data?.continent_code || "";

        // Show alternate video if user is NOT in Asia
        if (region !== "AS") setVideoSrc("/back1.mp4");
      } catch (error) {
        console.error("Failed to fetch location:", error);
      }
    };

    fetchLocation();

    // Initialize AOS (Animate On Scroll) library with custom settings:
    // duration: 600ms (faster animations globally)
    // once: true (animation only happens once per element)
    AOS.init({ duration: 600, once: true });

    // Trigger profile image appearance animation with a slight delay
    setTimeout(() => {
      setShowProfile(true);
    }, 200); // 200ms delay for smooth entrance
  }, []);

  return (
    <div id="home" className="text-white h-screen flex flex-col bg-black">
      {/* Video Background Section */}
      <div className="relative h-[70%] md:h-[85%] w-full px-10 py-5">
        {/* Container with fade animation */}
        <div
          className="relative w-full h-[75vh] md:h-full rounded-3xl overflow-hidden"
          data-aos="fade"
        >
          {/* Background video with blur */}
          <video
            className="w-full h-full object-cover blur-sm"
            src={videoSrc}
            autoPlay
            loop
            muted
          />

          {/* Overlay Text with zoom-in animation */}
          <div
            className="absolute inset-0 flex flex-col justify-between p-3 sm:p-10 z-10"
            data-aos="zoom-in"
          >
            {/* Top Text Row */}
            <div className="flex justify-between items-start">
              <div className="text-5xl md:text-9xl">
                New
                <br />
                <span className="italic font-playfair text-7xl md:text-9xl pl-5 md:pl-24">
                  Vision
                </span>
              </div>
            </div>

            {/* Bottom Text Row */}
            <div className="flex justify-between items-end">
              {/* Left side paragraph with fade-up animation */}
              <div
                className="hidden md:block max-w-md text-xl text-gray-200"
                data-aos="fade-up"
              >
                <span className="opacity-70">Unleash your creativity—</span>
                <span className="text-white font-semibold">
                  {" "}
                  ideate, design, and produce stunning visuals and videos{" "}
                </span>
                <span className="opacity-70">powered by advanced</span>{" "}
                <span className="text-white font-semibold">AI models</span>
                <span className="opacity-70">
                  . Seamlessly available on
                </span>{" "}
                <span className="text-white font-semibold">Web</span>.
              </div>

              {/* Right side "of imagination" with fade-down animation */}
              <div className="text-right p-3 sm:p-0" data-aos="fade-down">
                <div className="text-5xl md:text-8xl font-normal px-1 sm:px-0">
                  of
                </div>
                <div className="text-[52px] md:text-8xl font-playfair italic ">
                  imaginat
                  <wbr />
                  ion
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA Section with fade-up animation */}
      <div
        className="relative w-full flex justify-between items-center pt-4 sm:pt-0 px-2 md:px-10 mt-[23%] md:mt-0"
        data-aos="fade-up"
      >
        {/* Left side text */}
        <div className="text-base sm:text-xl md:text-4xl font-extralight leading-[17px] font-playfair">
          <span className="text-2xl sm:text-3xl md:text-5xl">D</span>ream
          <br />
          <span className="font-bold text-sm sm:text-base md:text-2xl pl-2 sm:pl-3 md:pl-10">
            MACHINE
          </span>
        </div>

        {/* "Try Now" button with zoom-in animation */}
        {/* Customized with data-aos-duration and data-aos-delay to reduce animation delay */}
        <a
          href="#contact"
          className="relative overflow-hidden bg-white text-black font-semibold text-sm sm:text-xl md:text-2xl px-4 sm:px-8 md:px-10 py-1.5 sm:py-2 md:py-4 rounded-full group transition-colors duration-700 ease-out whitespace-nowrap"
          data-aos="fade-up"
          data-aos-duration="400" // faster animation: 400ms instead of default 600ms
          data-aos-delay="0" // no delay, animates immediately when triggered
        >
          <span className="relative z-20 text-center transition-colors duration-700 group-hover:text-white whitespace-nowrap">
            Try Now
          </span>
          <span className="absolute inset-0 z-10 rounded-full bg-black scale-0 group-hover:scale-150 transition-transform duration-700 ease-out origin-center" />
        </a>
      </div>

      {/* Profile Image with smooth fade & scale animation */}
      <div className="relative z-40">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-40">
          <img
            src="profile.png"
            className={`h-60 sm:h-[400px] md:h-[400px] lg:h-[700px] transition-all duration-1000 ease-out ${
              showProfile ? "opacity-100 scale-100" : "opacity-0 scale-75"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
