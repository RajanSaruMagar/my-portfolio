import React from "react";

const HomeSection = () => {
  return (
    <>
      <div id="home" className=" text-white h-screen">
        <div
          style={{
            backgroundImage: "url('/profile.png')",
          }}
          className="bg-black h-full bg-no-repeat bg-center flex flex-col justify-center items-center"
        >
          {/* Group for Lush, Rajan */}
          <div
            className="flex flex-col items-center justify-center"
            data-aos="fade-up"
          >
            <p className="font-bold text-9xl">Lush,</p>
            <p className="text-4xl pl-48">Rajan</p>
          </div>

          {/* Gap between sections */}
          <div className="h-8"></div>

          {/* Designer & Developer */}
          <p className="font-medium text-xl ">DESIGNER & DEVELOPER</p>
        </div>
      </div>
    </>
  );
};

export default HomeSection;
