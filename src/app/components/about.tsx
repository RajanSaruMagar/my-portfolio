"use client";
import React from "react";
import { motion } from "framer-motion";
import "aos/dist/aos.css";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="bg-gray-100 min-h-screen flex justify-center items-center px-6 py-16"
    >
      <div className="max-w-6xl flex flex-col lg:flex-row items-center gap-12 text-center md:text-left">
        {/* Image Section */}
        <div
          className="max-w-sm aspect-[3/4] mx-auto lg:mx-0 flex-shrink-0"
          data-aos="fade-up"
        >
          <img
            src="about.png"
            alt="About Me"
            className="w-full h-full object-cover rounded-2xl shadow-xl bg-gray-900"
          />
        </div>

        {/* Text Section */}
        <div
          className="flex flex-col justify-center bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 md:p-12 space-y-6"
          data-aos="fade-up"
        >
          {/* 👋 Waving Hi */}
          <p className="text-lg font-semibold text-gray-700 flex items-center justify-center md:justify-start gap-2">
            Hi There{" "}
            <motion.span
              animate={{ rotate: [0, 20, -10, 20, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block origin-bottom-right"
            >
              👋
            </motion.span>
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            I’m <span className="text-indigo-600 font-semibold">Rajan Saru Magar</span>
          </h2>

          <h3 className="text-xl md:text-2xl font-semibold text-indigo-600">
            Front-End Developer & Graphic Designer
          </h3>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Passionate about crafting visually stunning and interactive digital
            experiences. I specialize in
            <span className="font-semibold text-gray-900">
              {" "}Next.js, Tailwind CSS, Figma, and Adobe Photoshop
            </span>
            , blending design and development to create engaging user interfaces.
          </p>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Currently, I’m studying{" "}
            <span className="font-semibold text-gray-900">Business Management</span>{" "}
            while honing my skills in web development and creative design. I love
            bringing ideas to life through clean code and aesthetic visuals.
          </p>

          <p className="text-gray-800 text-lg font-medium">
            <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Let’s collaborate and build something amazing together!
            </span>{" "}
            🚀
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
