"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Home, User, Briefcase, Layers, Mail } from "lucide-react";

const NavBarSection = () => {
  const [isOpen , setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 768) { 
        setShowNavbar(window.scrollY > window.innerHeight);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Mobile hamburger icon */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="text-white focus:outline-none"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Desktop Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-40 text-white font-medium transition-transform duration-500
        ${showNavbar ? "translate-y-0" : "-translate-y-full"}
        hidden md:block bg-black bg-opacity-90 shadow-md`}
      >
        <div className="h-16 flex justify-between items-center px-20 lg:px-32">
          <div className="h-14 w-auto">
            <img
              src="/logo10.png"
              alt="Logo"
              className="h-full w-auto object-contain"
            />
          </div>
          <div className="flex space-x-8 items-center ml-auto">
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
        </div>
      </nav>

      {/* Fullscreen Mobile Menu with fade-in animation */}
      {isOpen && (
        <div className="fixed inset-0 bg-black z-50 flex flex-col justify-center items-center text-xl px-6 text-white text-center space-y-10 transition-all duration-500 ease-in-out animate-fade-in">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-white hover:text-indigo-400 transition"
            aria-label="Close menu"
          >
            <X size={32} />
          </button>

          {navLinks.map(({ label, href, icon, isButton }) => (
            <a
              key={label}
              href={href}
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-3 text-2xl ${
                isButton
                  ? "bg-white text-black px-8 py-4 rounded-full hover:bg-indigo-600 hover:text-white"
                  : "hover:text-indigo-400"
              } transition duration-300`}
            >
              {icon}
              <span>{label}</span>
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export default NavBarSection;
  