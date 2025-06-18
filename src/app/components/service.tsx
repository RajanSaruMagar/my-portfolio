"use client";
import React, { useRef, useEffect } from "react";

const ServiceSection = () => {
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);
  const videoRef3 = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef1.current) videoRef1.current.playbackRate = 0.6;
    if (videoRef2.current) videoRef2.current.playbackRate = 0.6;
    if (videoRef3.current) videoRef3.current.playbackRate = 0.6;
  }, []);

  return (
    <div
      id="service"
      className="bg-black text-white px-4 sm:px-6 md:px-20 lg:px-40 py-12"
    >
      {/* Top section */}
      <div className="mb-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold">
            MY SERVICES
          </h2>
          <div className="flex flex-col max-w-md">
            <p className="text-[#686565] font-semibold text-base md:text-lg">
              Want to learn more? Explore My services to get a deeper
              understanding of how I can help your business.
            </p>
            <button className="border-2 border-indigo-600 rounded-3xl px-6 py-2 md:px-8 md:py-3 text-sm md:text-lg mt-4 w-fit">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <hr className="border-indigo-600" />

      {/* Service items */}
      <div className="space-y-20 md:space-y-40 mt-10 md:mt-20">
        {/* Brand & Design */}
        <div className="w-full min-h-[28rem] flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-20">
          <video
            ref={videoRef1}
            src="video1.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full md:w-1/2 h-64 sm:h-80 md:h-96 object-contain rounded-xl"
          ></video>
          <div className="md:pl-8 lg:pl-12">
            <p className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 md:mb-6">
              Brand &{" "}
              <span className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent animate-bounce">
                Design
              </span>
            </p>
            <p className="text-[#969494] font-semibold text-sm md:text-base">
              Wide range of graphic design services, including{" "}
              <span className="text-indigo-600 underline">
                Book Cover Design, Logo Design, Poster Creation, Social Media
                Posts, and UI/UX Design.
              </span>{" "}
              Whatever your design needs, I can bring your vision to life with
              creativity and precision.
            </p>
          </div>
        </div>

        {/* Website & Web app */}
        <div className="w-full min-h-[28rem] flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12 lg:gap-20">
          <video
            ref={videoRef2}
            src="video.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full md:w-1/2 h-64 sm:h-80 md:h-96 object-cover rounded-xl"
          ></video>
          <div className="md:pr-8 lg:pr-12">
            <p className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 md:mb-6 ">
              Website &{" "}
              <span className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent animate-bounce">
                Web App
              </span>
            </p>
            <p className="text-[#8a8787] font-semibold text-sm md:text-base">
              Specialize in building full web applications that combine seamless
              design with powerful functionality. Whether you need a{" "}
              <span className="text-indigo-600 underline">
                Dynamic Frontend with Next.js or a complete web solution with
                ERB,
              </span>{" "}
              I craft custom designs tailored to your needs.
            </p>
          </div>
        </div>

        {/* Social Media Management */}
        <div className="w-full min-h-[28rem] flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-20">
          <video
            ref={videoRef3}
            src="video2.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full min-h-[28rem] md:w-1/2 h-64 sm:h-80 md:h-96 object-contain rounded-xl"
          ></video>
          <div className="md:pl-8 lg:pl-12">
            <p className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 md:mb-6 animate-glow">
              Social Media Management
            </p>
            <p className="text-[#969494] font-semibold text-sm md:text-base">
              With the growing demand for online presence, I manage social media
              accounts by creating{" "}
              <span className="text-indigo-600 underline">
                Eye-Catching Content, Scheduling Posts, Analyzing Performance,
              </span>{" "}
              and engaging audiences to boost reach and brand awareness.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
