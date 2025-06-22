"use client";
import React, { useState, useRef } from "react";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GetInTouch = () => {
  const [fullName, setFullName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [formSubmitting, setFormSubmitting] = useState(false);

  // We use a ref for the form element so we can trigger submit programmatically
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!fullName || !formEmail || !formMessage) {
      toast.error("Please fill in all fields before submitting.");
      return;
    }
    setFormSubmitting(true);
    try {
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
        toast.success("Form submitted successfully!");
        setFullName("");
        setFormEmail("");
        setFormMessage("");
      } else {
        toast.error("Failed to submit. Please try again.");
      }
    } catch {
      toast.error("Submission error. Please try again.");
    } finally {
      setFormSubmitting(false);
    }
  }

  function handleWorkTogetherClick() {
    if (!fullName || !formEmail || !formMessage) {
      toast.warn("Please fill in all fields before submitting.");
    } else {
      // Programmatically submit the form
      formRef.current?.dispatchEvent(
        new Event("submit", { cancelable: true, bubbles: true })
      );
    }
  }

  return (
    <div
      id="contact"
      className="bg-[#0a0a0a] text-white px-6 md:px-20 py-24 relative"
    >
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <div className="space-y-3 mb-16 max-w-xl">
        <p className="text-green-600 text-sm animate-pulse flex items-center gap-2">
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Form */}
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm mb-1 text-gray-300">
              Full Name
            </label>
            <input
              type="text"
              className="w-full bg-[#1a1a1a] border border-gray-700 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              disabled={formSubmitting}
            />
          </div>
          <div>
            <label className="block text-sm mb-1 text-gray-300">Email</label>
            <input
              type="email"
              className="w-full bg-[#1a1a1a] border border-gray-700 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
              value={formEmail}
              onChange={(e) => setFormEmail(e.target.value)}
              required
              disabled={formSubmitting}
            />
          </div>
          <div>
            <label className="block text-sm mb-1 text-gray-300">Message</label>
            <textarea
              className="w-full h-32 bg-[#1a1a1a] border border-gray-700 text-white px-4 py-3 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-indigo-600"
              value={formMessage}
              onChange={(e) => setFormMessage(e.target.value)}
              required
              disabled={formSubmitting}
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={formSubmitting}
            className="px-8 py-3 rounded-md bg-indigo-600 hover:bg-white hover:text-black transition font-medium shadow-lg"
          >
            Submit
          </button>
        </form>

        {/* Info box */}
        <div
          className="bg-[#121212] p-6 rounded-xl shadow-lg space-y-5 max-h-[520px] md:max-h-[680px] overflow-y-auto scroll-smooth
                     scrollbar-thin scrollbar-thumb-indigo-600 scrollbar-track-transparent"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "#4f46e5 transparent",
          }}
        >
          <p className="text-green-600 flex items-center gap-2 text-sm">
            <span className="h-3 w-3 bg-green-600 rounded-full animate-pulse" />
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
            I design clean interfaces, craft intuitive user experiences, and
            build modern frontends. Let’s turn your idea into a bold digital
            presence.
          </p>

          <ul className="text-gray-300 text-sm space-y-4">
            <li className="flex items-center gap-2">
              <MapPinIcon className="h-5 w-5 text-indigo-500" />
              Devdaha-05, Khaireni, Nepal
            </li>
            <li className="flex items-center gap-2">
              <PhoneIcon className="h-5 w-5 text-indigo-500" />
              +977 9817527972
            </li>
            <li className="flex items-center gap-2">
              <EnvelopeIcon className="h-5 w-5 text-indigo-500" />
              rajansaru789@gmail.com
            </li>
          </ul>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleWorkTogetherClick();
            }}
            className="inline-block text-sm px-4 py-2 mt-2 rounded-md bg-indigo-600 hover:bg-indigo-700 transition font-medium shadow cursor-pointer select-none"
          >
            Let&apos;s Work Together
          </a>

          <div className="flex gap-4 pt-4">
            <a
              href="https://www.linkedin.com/in/rajan-saru-magar-6a168230a/"
              target="_blank"
              rel="noreferrer"
              className="transition-transform hover:scale-110"
            >
              <img
                className="h-5 w-5 filter invert brightness-200 hover:brightness-125 transition"
                src="linkedin.svg"
                alt="LinkedIn"
              />
            </a>
            <a
              href="https://github.com/RajanSaruMagar"
              target="_blank"
              rel="noreferrer"
              className="transition-transform hover:scale-110"
            >
              <img
                className="h-5 w-5 filter invert brightness-200 hover:brightness-125 transition"
                src="github.svg"
                alt="GitHub"
              />
            </a>
            <a
              href="https://www.instagram.com/rjan_mgrx/"
              target="_blank"
              rel="noreferrer"
              className="transition-transform hover:scale-110"
            >
              <img
                className="h-5 w-5 filter invert brightness-200 hover:brightness-125 transition"
                src="instagram.svg"
                alt="Instagram"
              />
            </a>
            <a
              href="https://x.com/rajan_saru29761"
              target="_blank"
              rel="noreferrer"
              className="transition-transform hover:scale-110"
            >
              <img
                className="h-5 w-5 filter invert brightness-200 hover:brightness-125 transition"
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
