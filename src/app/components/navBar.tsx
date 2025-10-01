"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Home, User, Briefcase, Layers, Mail } from "lucide-react";

const NavBarSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { label: "Home", href: "#home", icon: <Home size={22} /> },
    { label: "About", href: "#about", icon: <User size={22} /> },
    { label: "Portfolio", href: "#portfolio", icon: <Briefcase size={22} /> },
    { label: "Service", href: "#service", icon: <Layers size={22} /> },
    {
      label: "Get In Touch",
      href: "#contact",
      icon: <Mail size={22} />,
      isButton: true,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) =>
        document.querySelector(link.href)
      );
      const scrollPos = window.scrollY + window.innerHeight / 3;

      sections.forEach((section, i) => {
        if (
          section &&
          section instanceof HTMLElement &&
          scrollPos >= section.offsetTop &&
          scrollPos < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(navLinks[i].href);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Mobile Hamburger */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="text-white drop-shadow-md focus:outline-none"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Desktop Navbar - Always Visible */}
      <nav
        className={`fixed top-0 left-0 w-full z-40 font-medium
        bg-white/10 backdrop-blur-xl border-b border-white/30 
        shadow-[0_4px_30px_rgba(0,0,0,0.2)] hidden md:block`}
      >
        <div className="h-16 flex justify-between items-center px-12 lg:px-28 text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
          {/* Logo */}
          <div className="h-20 w-auto">
            <img
              src="/logo10.png"
              
              className="h-full w-auto object-contain"
            />
          </div>

          {/* Nav Links */}
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
                  aria-current={activeSection === href ? "page" : undefined}
                  className={`capitalize transition duration-300 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] ${
                    activeSection === href
                      ? "text-indigo-400 font-semibold"
                      : "hover:text-indigo-400"
                  }`}
                >
                  {label}
                </a>
              )
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-white/10 backdrop-blur-xl border border-white/20 z-50 flex flex-col justify-center items-center text-xl px-6 text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] text-center space-y-10 transition-all duration-500 ease-in-out animate-slide-in">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-white hover:text-indigo-400 transition drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]"
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
              } transition duration-300 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]`}
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
