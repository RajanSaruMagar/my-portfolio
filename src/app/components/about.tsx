import React from "react";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="bg-black h-screen flex justify-center items-center px-6 relative "
    >
      <div className=" max-w-4xl flex flex-col md:flex-row items-center gap-10 text-center md:text-left relative z-20">
        {/* Image Section */}
        <div className="w-56 h-36 md:w-[700px] md:h-96" data-aos="fade-up">
          <img
            src="about.png"
            alt="About Me"
            className="w-full h-full object-cover rounded-[10%] shadow-lg"
          />
        </div>

        {/* text section  */}
        <div className="text-center md:text-left space-y-4" data-aos="fade-up">
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
            Let’s collaborate and build something amazing together! 🚀
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
