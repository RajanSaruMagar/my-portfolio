import React from "react";
import "aos/dist/aos.css";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="bg-black min-h-screen flex justify-center items-center px-6 relative pt-96 sm:pt-0 pb-20 "
    >
      <div className=" max-w-4xl flex flex-col lg:flex-row items-center gap-10 text-center md:text-left relative z-20 mb-40">
        {/* Image Section */}
        <div
          className="w-full max-w-[80%] sm:max-w-[300px] aspect-[3/4] mx-auto"
          data-aos="fade-up"
        >
          <img
            src="about.png"
            alt="About Me"
            className="w-full h-full object-cover rounded-xl shadow-lg bg-white"
          />
        </div>

        {/* text section  */}
        <div
          className="text-center md:text-left space-y-4"
          data-aos="fade-up"
        >
          <p className="text-lg  font-semibold text-gray-200">Hi There 👋</p>
          <h2 className="text-2xl font-bold text-gray-200">
            I’m <span className="text-indigo-600">Rajan Saru Magar</span>
          </h2>
          <h3 className="text-xl font-bold text-indigo-600">
            Front-End Developer & Graphic Designer
          </h3>
          <p className="text-gray-200 text-lg leading-relaxed">
            Passionate about crafting visually stunning and interactive digital
            experiences. I specialize in
            <span className="font-semibold">
              {" "}
              Next.js, Tailwind CSS, Figma, and Adobe Photoshop
            </span>
            , blending design and development to create engaging user
            interfaces.
          </p>
          <p className="text-gray-200 text-lg leading-relaxed">
            Currently, I’m studying{" "}
            <span className="font-semibold">Business Management</span> while
            honing my skills in web development and creative design. I love
            bringing ideas to life through clean code and aesthetic visuals.
          </p>
          <p className="text-gray-200 text-lg font-medium">
            <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
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
