"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AnimatedCursor from "./components/AnimatedCursor";

const NewLayout = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  return (
    <div>
      <AnimatedCursor />
      {children}
    </div>
  );
};

export default NewLayout;
