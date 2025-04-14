import React from "react";

const ServiceSection = () => {
  return (
    <div
      id="service"
      className="bg-black text-white min-h-screen  px-6 md:px-20 lg:px-40 py-12"
    >
      {/* Top beginning service code section */}
      <div className=" mb-10">
        <div className="flex items-center justify-between">
          <h2 className="text-8xl font-bold">MY SERVICES</h2>
          <div className="flex flex-col justify-center">
            <p className="text-[#686565] font-semibold">
              Want to learn more? Explore My services <br />
              to get a deeper understanding of how I <br /> can help your
              business.
            </p>
            <button className="border-2 border-indigo-600 rounded-3xl px-10 py-3 text-lg mt-4">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Service list section start here */}
      <hr className="border-indigo-600  " />

      {/* graphic design section */}
      <div className="flex items-center mt-20 h-screen">
        {/* video section  */}
        <video
          src="video1.webm"
          className="h-[80%] w-[50%] rounded-xl bg-red-600"
        ></video>

        {/* text section */}
        <div className="pl-40">
          <p className="font-semibold text-4xl  mb-7">Brand & Design</p>
          <p className="font-semibold text-[#969494]">
            Wide range of graphic design services, including
            <span className="text-indigo-600 underline ml-1">
              Book Cover Design,
              <br /> Logo Design, Poster Creation, Social Media Posts, and UI/UX
              Design.
            </span>
            <br />
            Whatever your design needs, I can bring your vision to life with
            creativity <br />
            and precision.
          </p>
        </div>
      </div>

      {/* web dev section code */}
      <div className="flex h-screen items-center">
        {/* text section  */}
        <div>
          <p className="font-semibold text-4xl mb-7">Website & Web app</p>
          <p className="text-[#8a8787] font-semibold">
            Specialize in building full web applications that combine seamless
            design with powerful functionality.Whether you need a
            <span className="text-indigo-600 ml-1 mr-1 underline">
              Dynamic Frontend with Next.js or a complete web solution with ERB,
            </span>
            I craft custom designs and functionalities tailored to your needs.
          </p>
        </div>
        {/* video section  */}
        <video
          src="video1.webm"
          className="h-[80%] w-[50%] rounded-xl bg-red-600 ml-40"
        ></video>
      </div>

      {/* social media management section  */}
      <div className="flex items-center mt-20 h-screen">
        {/* video section  */}
        <video
          src="video1.webm"
          className="h-[80%] w-[50%] rounded-xl bg-red-600"
        ></video>

        {/* text section */}
        <div className="pl-40">
          <p className="font-semibold text-4xl  mb-7">
            Social Media Management
          </p>
          <p className="font-semibold text-[#969494]">
            with the growing demand for businesses to have an online presence, I
            manage social media accounts by creating{" "}
            <span className="text-indigo-600 underline ">
              {" "}
              Eye-Catching Content, Scheduling Posts, Analyzing Performance, and
              Engaging With Audiences{" "}
            </span>
            to boost reach and brand awareness.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
