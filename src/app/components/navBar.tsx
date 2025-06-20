"use client";

import React, { useState } from "react";
import { Menu, X, Home, User, Briefcase, Layers, Mail } from "lucide-react";

const NavBarSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home", icon: <Home size={24} /> },
    { label: "About", href: "#about", icon: <User size={24} /> },
    { label: "Portfolio", href: "#portfolio", icon: <Briefcase size={24} /> },
    { label: "Service", href: "#service", icon: <Layers size={24} /> },
    {
      label: "Get In Touch",
      href: "#contact",
      icon: <Mail size={24} />,
      isButton: true,
    },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 text-white font-medium">
      <div className="h-16 flex justify-between items-center px-6 md:px-20 lg:px-32">
        {/* Logo (hidden on mobile) */}
        <div className="h-14 w-auto hidden md:block">
          <img
            src="/logo10.png"
            alt="Logo"
            className="h-full w-auto object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center ml-auto">
          {navLinks.map(({ label, href, isButton }) =>
            isButton ? (
              <a
                key={label}
                href={href}
                className="bg-indigo-500 text-white px-5 py-2 rounded-full shadow-md hover:bg-white hover:text-black transition-all duration-300"
              >
                {label}
              </a>
            ) : (
              <a
                key={label}
                href={href}
                className="capitalize hover:text-indigo-400 transition duration-300"
              >
                {label}
              </a>
            )
          )}
        </div>

        {/* Mobile Menu Button (always on right) */}
        <button
          className="md:hidden text-white z-50 ml-auto"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Fullscreen Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-black z-40 flex flex-col justify-center items-center space-y-10 text-xl px-6 text-white text-center">
          {navLinks.map(({ label, href, icon, isButton }) => (
            <a
              key={label}
              href={href}
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-3 ${
                isButton
                  ? "bg-white text-black px-6 py-3 rounded-full hover:bg-indigo-600 hover:text-white"
                  : "hover:text-indigo-400"
              } transition duration-300`}
            >
              {icon}
              <span>{label}</span>
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBarSection;
