"use client";
import React, { useRef, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ServiceSection = () => {
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);
  const videoRef3 = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    AOS.init({ once: true });
    if (videoRef1.current) videoRef1.current.playbackRate = 0.6;
    if (videoRef2.current) videoRef2.current.playbackRate = 0.6;
    if (videoRef3.current) videoRef3.current.playbackRate = 0.6;
  }, []);

   useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <div
      id="service"
      className="bg-black text-white px-4 sm:px-6 md:px-20 lg:px-40 py-12"
    >
      {/* Top Section */}
      <div className="mb-10" data-aos="fade-up">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold">
            MY SERVICES
          </h2>
          <div className="flex flex-col max-w-md">
            <p className="text-[#B0B0B0] font-medium text-base md:text-lg">
              Want to learn more? Explore my services to understand how I can
              help your business grow visually and technically.
            </p>
            <button
              className="border-2 border-indigo-600 rounded-3xl px-6 py-2 md:px-8 md:py-3 text-sm md:text-lg mt-4 w-fit
              hover:bg-indigo-600 hover:text-white transition"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Optional Intro */}
      <p className="text-indigo-400 max-w-2xl mx-auto mb-12 text-center">
        Delivering creative design and cutting-edge web development to elevate
        your brand and business.
      </p>

      <hr className="border-indigo-600" />

      {/* Service Items */}
      <div className="space-y-12 md:space-y-20 mt-10 md:mt-20">
        {/* Brand & Design */}
        <div
          className="w-full min-h-[28rem] flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-20 p-6 rounded-xl border border-indigo-700 bg-black/70"
          {...(!isMobile && { "data-aos": "fade-right" })}
        >
          <video
            ref={videoRef1}
            src="/video1.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full md:w-1/2 h-64 sm:h-80 md:h-96 object-contain rounded-xl bg-white/10"
          />
          <div className="md:pl-6 lg:pl-8 max-w-xl flex flex-col justify-center min-h-[24rem]">
            <p className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 md:mb-6">
              Brand &{" "}
              <span className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent animate-bounce">
                Design
              </span>
            </p>
            <p className="text-[#B0B0B0] font-medium text-sm md:text-base">
              Wide range of graphic design services, including{" "}
              <span className="text-indigo-500 underline">
                Book Cover, Logo, Posters, Social Media, UI/UX
              </span>
              . Let’s bring your vision to life with creativity and detail.
            </p>
          </div>
        </div>

        {/* Website & Web App */}
        <div
          className="w-full min-h-[28rem] flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12 lg:gap-20 p-6 rounded-xl border border-indigo-700 bg-black/70"
           {...(!isMobile && { "data-aos": "fade-left" })}
        >
          <video
            ref={videoRef2}
            src="/video.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full md:w-1/2 h-64 sm:h-80 md:h-96 object-cover rounded-xl bg-white/10"
          />
          <div className="md:pr-6 lg:pr-8 max-w-xl flex flex-col justify-center min-h-[24rem]">
            <p className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 md:mb-6">
              Website &{" "}
              <span className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent animate-bounce">
                Web App
              </span>
            </p>
            <p className="text-[#B0B0B0] font-medium text-sm md:text-base">
              I build full-stack web applications with{" "}
              <span className="text-indigo-500 underline">Next.js, ERB, UI Design</span>
              , delivering fast, responsive, and engaging digital experiences.
            </p>
          </div>
        </div>

        {/* Social Media Management */}
        <div
          className="w-full min-h-[28rem] flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-20 p-6 rounded-xl border border-indigo-700 bg-black/70"
          data-aos="fade-up"
        >
          <video
            ref={videoRef3}
            src="/video2.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full min-h-[28rem] md:w-1/2 h-64 sm:h-80 md:h-96 object-contain rounded-xl bg-white/10"
          />
          <div className="md:pl-6 lg:pl-8 max-w-xl flex flex-col justify-center min-h-[24rem]">
            <p className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 md:mb-6">
              Social Media Management
            </p>
            <p className="text-[#B0B0B0] font-medium text-sm md:text-base">
              I manage social media with{" "}
              <span className="text-indigo-500 underline">
                eye-catching content, post scheduling, and performance analysis
              </span>{" "}
              to boost engagement and visibility.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
