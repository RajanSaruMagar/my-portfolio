"use client";

import React, { useState } from "react";

const GetInTouch = () => {
  const [fullName, setFullName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "553b649b-ef88-48d8-b3e4-025d670c9c94",
        name: fullName,
        email: formEmail,
        message: formMessage,
      }),
    });
    const result = await response.json();
    if (result.success) {
      alert("Success!");
      console.log(result);
    }
  }

  return (
    <div id="contact" className="bg-[#0a0a0a] text-white px-6 md:px-20 py-24">
      {/* Heading */}
      <div className="space-y-3 mb-16 max-w-xl">
        <p className="text-indigo-600 text-sm animate-pulse flex items-center gap-2">
          <span className="text-sm inline-block leading-none">★</span>
          CONNECT WITH ME
        </p>

        <p className="text-4xl font-bold tracking-tight">
          Let&apos;s start a project together
        </p>
        <p className="text-gray-400 text-sm">
          Have an idea in mind? Let’s bring it to life with creativity and
          precision.
        </p>
      </div>

      {/* Grid container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm mb-1 text-gray-300">
              Full Name
            </label>
            <input
              type="text"
              className="w-full bg-[#1a1a1a] border border-gray-700 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-1 text-gray-300">Email</label>
            <input
              type="email"
              className="w-full bg-[#1a1a1a] border border-gray-700 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
              onChange={(e) => setFormEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-1 text-gray-300">Message</label>
            <textarea
              className="w-full h-32 bg-[#1a1a1a] border border-gray-700 text-white px-4 py-3 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-indigo-600"
              onChange={(e) => setFormMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-8 py-3 rounded-md bg-indigo-600 hover:bg-indigo-700 transition font-medium shadow-lg"
          >
            Submit
          </button>
        </form>

        {/* Info box */}
        <div
          className="bg-[#121212] p-6 rounded-xl shadow-lg space-y-5 max-h-[520px] overflow-y-auto scroll-smooth"
          style={{ scrollbarWidth: "thin", scrollbarColor: "#4f46e5 transparent" }}
        >
          <p className="text-green-600 flex items-center gap-2 animate-pulse text-sm">
            <span className="h-2 w-2 bg-green-600 rounded-full" />
            Available for work
          </p>

          <div className="w-20 h-20 rounded-full overflow-hidden border border-gray-700">
            <img
              src="about.png"
              alt="Rajan Saru Magar"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-1">
            <h3 className="text-xl font-semibold text-white">
              Rajan Saru Magar
            </h3>
            <p className="text-sm text-gray-400">
              Frontend Developer • Graphic Designer • UI/UX
            </p>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed">
            I design clean interfaces, craft intuitive user experiences, and build modern frontends. Let’s turn your idea into a bold digital presence.
          </p>

          <ul className="text-gray-300 text-sm space-y-1">
            <li>✔️ Frontend Development (Next.js, Tailwind)</li>
            <li>✔️ UI/UX Design & Prototyping</li>
            <li>✔️ Social Media Campaigns</li>
            <li>✔️ Content Writing & Personal Branding</li>
          </ul>

          <a
            href="#contact"
            className="inline-block text-sm px-4 py-2 mt-2 rounded-md bg-indigo-600 hover:bg-indigo-700 transition font-medium shadow"
          >
            Let&apos;s Work Together
          </a>

          <div className="flex gap-4 pt-4">
            <a
              href="https://www.linkedin.com/in/rajan-saru-magar-6a168230a/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="h-5 w-5 filter invert brightness-200"
                src="linkedin.svg"
                alt="LinkedIn"
              />
            </a>
            <a href="https://github.com/RajanSaruMagar" target="_blank" rel="noreferrer">
              <img
                className="h-5 w-5 filter invert brightness-200"
                src="github.svg"
                alt="GitHub"
              />
            </a>
            <a
              href="https://www.instagram.com/rjan_mgrx/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="h-5 w-5 filter invert brightness-200"
                src="instagram.svg"
                alt="Instagram"
              />
            </a>
            <a href="https://x.com/rajan_saru29761" target="_blank" rel="noreferrer">
              <img
                className="h-5 w-5 filter invert brightness-200"
                src="twitter.svg"
                alt="Twitter"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
