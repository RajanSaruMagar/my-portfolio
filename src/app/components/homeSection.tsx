"use client";
import React from "react";

const HomeSection = () => {
  return (
    <div id="home" className="text-white h-screen flex flex-col bg-black">
      {/* Video Background Section */}
      <div className="relative h-[85%] w-full px-10 py-5">
        <div className="relative w-full h-full rounded-3xl overflow-hidden">
          {/* Video */}
          <video
            className="w-full h-full object-cover filter blur-sm"
            src="/back.mp4"
            autoPlay
            loop
            muted
          />

          {/* Overlay Text */}
          <div className="absolute inset-0 flex flex-col justify-between p-10 z-10">
            {/* Top Row */}
            <div className="flex justify-between items-start">
              {/* Left Title */}
              <div className="text-9xl ">
                New
                <br />
                <span className="italic font-Galada  text-9xl  pl-24">
                  freedoms
                </span>
              </div>
              {/* Right Dummy Space */}
              <div className="w-48 h-24" /> {/* Empty but holds space */}
            </div>

            {/* Bottom Row */}
            <div className="flex justify-between items-end">
              {/* Bottom Left Text */}
              <div className="max-w-md text-xl text-gray-200">
                <span className="opacity-50">
                  Ideate, visualize, create videos, and share your dreams with
                  the world, using our most powerful image and video
                </span>{" "}
                <span>AI</span>{" "}
                <span className="opacity-50">models. Available now</span>{" "}
                <span>Web</span>.
              </div>

              {/* Bottom Right: "of imagination" */}
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

        {/* image section  */}
        <img src="profile.png" className="relative " />

        <a
          href="#contact"
          className="bg-white text-black font-semibold text-2xl px-10 py-4 rounded-full "
        >
          Try Now
        </a>
      </div>
    </div>
  );
};

export default HomeSection;
