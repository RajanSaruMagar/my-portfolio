"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const NavBarSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent text-white font-semibold text-xl">
      <div className="h-16 flex justify-between items-center px-6 md:px-20 lg:px-40">
        {/* Logo */}
        <div className="h-12 w-auto">
          <img
            src="/logo1.png"
            alt="Logo"
            className="h-full w-auto object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <a
            href="#home"
            className="hover:text-gray-300 transition duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-gray-300 transition duration-300"
          >
            About
          </a>
          <a
            href="#portfolio"
            className="hover:text-gray-300 transition duration-300"
          >
            Portfolio
          </a>
          <a
            href="#service"
            className="hover:text-gray-300 transition duration-300"
          >
            Service
          </a>

          {/* Get In Touch - Standout Button */}
          <a
            href="#contact"
            className="bg-indigo-600 text- px-4 py-2 rounded-lg shadow-md hover:bg-white hover:text-black transition duration-300"
          >
            Get In Touch
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 bg-black bg-opacity-90 py-6">
          <a
            href="#home"
            className="hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#portfolio"
            className="hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            Portfolio
          </a>
          <a
            href="#service"
            className="hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            Service
          </a>

          {/* Mobile "Get In Touch" - Styled Button */}
          <a
            href="#contact"
            className="bg-white text-black px-4 py-2 rounded-lg shadow-md hover:bg-indigo-600 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Get In Touch
          </a>
        </div>
      )}
    </nav>
  );
};

export default NavBarSection;
