"use client";

import React, { useState, useEffect } from "react";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AOS from "aos";
import "aos/dist/aos.css";

import { z } from "zod";

const schema = z.object({
  fullName: z.string().min(1, "Full Name is required"),
  formEmail: z.string().min(1, "Email is required").email("Invalid email address"),
  formMessage: z.string().min(1, "Message is required"),
});

type FormData = z.infer<typeof schema>;

const GetInTouch = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    formEmail: "",
    formMessage: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {}
  );
  const [formSubmitting, setFormSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const result = schema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof FormData, string>> = {};
      result.error.errors.forEach(({ path, message }) => {
        const key = path[0] as keyof FormData;
        if (key) fieldErrors[key] = message;
      });
      setErrors(fieldErrors);
      toast.error("Please fix the errors before submitting.");
      return;
    }

    setErrors({});
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
          name: formData.fullName.trim(),
          email: formData.formEmail.trim(),
          message: formData.formMessage.trim(),
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Form submitted successfully!");
        setFormData({ fullName: "", formEmail: "", formMessage: "" });
      } else {
        toast.error("Failed to submit. Please try again.");
      }
    } catch {
      toast.error("Submission error. Please try again.");
    } finally {
      setFormSubmitting(false);
    }
  }

  return (
    <div
      id="contact"
      className="bg-gray-100 text-black px-6 md:px-20 py-24 relative"
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
        theme="light"
        role="alert"
        aria-live="assertive"
      />

      {/* Heading Section */}
      <div className="space-y-3 mb-16 max-w-xl" data-aos="zoom-in">
        <p className="text-green-600 text-sm animate-pulse flex items-center gap-2">
          <span className="text-sm inline-block leading-none">★</span>
          CONNECT WITH ME
        </p>
        <p className="text-4xl font-bold tracking-tight">
          Let&apos;s start a project together
        </p>
        <p className="text-gray-600 text-sm">
          Have an idea in mind? Let’s bring it to life with creativity and
          precision.
        </p>
      </div>

      {/* Form + Info Box Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
          data-aos="fade-up"
          noValidate
        >
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm mb-1 text-gray-700"
            >
              Full Name
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Enter your full name"
              className={`w-full bg-white border px-4 py-3 rounded-lg shadow-sm hover:shadow-md transition focus:outline-none focus:ring-2 ${
                errors.fullName
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-indigo-600"
              } text-black`}
              value={formData.fullName}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, fullName: e.target.value }))
              }
              aria-invalid={!!errors.fullName}
              aria-describedby={errors.fullName ? "fullName-error" : undefined}
              disabled={formSubmitting}
            />
            {errors.fullName && (
              <p
                id="fullName-error"
                className="mt-1 text-xs text-red-500"
                role="alert"
              >
                {errors.fullName}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="formEmail"
              className="block text-sm mb-1 text-gray-700"
            >
              Email
            </label>
            <input
              id="formEmail"
              name="formEmail"
              type="email"
              placeholder="Enter your email"
              className={`w-full bg-white border px-4 py-3 rounded-lg shadow-sm hover:shadow-md transition focus:outline-none focus:ring-2 ${
                errors.formEmail
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-indigo-600"
              } text-black`}
              value={formData.formEmail}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, formEmail: e.target.value }))
              }
              aria-invalid={!!errors.formEmail}
              aria-describedby={errors.formEmail ? "formEmail-error" : undefined}
              disabled={formSubmitting}
            />
            {errors.formEmail && (
              <p
                id="formEmail-error"
                className="mt-1 text-xs text-red-500"
                role="alert"
              >
                {errors.formEmail}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="formMessage"
              className="block text-sm mb-1 text-gray-700"
            >
              Message
            </label>
            <textarea
              id="formMessage"
              name="formMessage"
              placeholder="Write your message..."
              className={`w-full h-32 bg-white border px-4 py-3 rounded-lg shadow-sm hover:shadow-md transition resize-none focus:outline-none focus:ring-2 ${
                errors.formMessage
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-indigo-600"
              } text-black`}
              value={formData.formMessage}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, formMessage: e.target.value }))
              }
              aria-invalid={!!errors.formMessage}
              aria-describedby={errors.formMessage ? "formMessage-error" : undefined}
              disabled={formSubmitting}
            ></textarea>
            {errors.formMessage && (
              <p
                id="formMessage-error"
                className="mt-1 text-xs text-red-500"
                role="alert"
              >
                {errors.formMessage}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={formSubmitting}
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:opacity-90 transition font-medium shadow-lg flex items-center justify-center gap-2"
          >
            {formSubmitting ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  ></path>
                </svg>
                Sending...
              </>
            ) : (
              "Submit"
            )}
          </button>
        </form>

        {/* Info Box */}
        <div
          className="bg-white p-6 rounded-xl shadow-lg space-y-5 hover:shadow-2xl transition-transform hover:-translate-y-1"
          data-aos="fade-up"
        >
          <p className="text-green-600 flex items-center gap-2 text-sm">
            <span className="h-3 w-3 bg-green-600 rounded-full animate-pulse" />
            Available for work
          </p>

          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-green-500 shadow-md">
            <img
              src="about.png"
              alt="Rajan Saru Magar"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-1">
            <h3 className="text-xl font-bold text-black">Rajan Saru Magar</h3>
            <p className="text-sm text-gray-600">
              Frontend Developer • Graphic Designer • UI/UX
            </p>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed">
            I design clean interfaces, craft intuitive user experiences, and
            build modern frontends. Let’s turn your idea into a bold digital
            presence.
          </p>

          <ul className="text-gray-700 text-sm space-y-4">
            <li className="flex items-center gap-2">
              <MapPinIcon className="h-5 w-5 text-indigo-600" />
              <a
                href="https://maps.google.com/?q=Devdaha-05,Khaireni,Nepal"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                Devdaha-05, Khaireni, Nepal
              </a>
            </li>
            <li className="flex items-center gap-2">
              <PhoneIcon className="h-5 w-5 text-indigo-600" />
              <a href="tel:+9779817527972" className="hover:underline">
                +977 9817527972
              </a>
            </li>
            <li className="flex items-center gap-2">
              <EnvelopeIcon className="h-5 w-5 text-indigo-600" />
              <a
                href="mailto:rajansaru789@gmail.com"
                className="hover:underline"
              >
                rajansaru789@gmail.com
              </a>
            </li>
          </ul>

         <p className="inline-block text-lg md:text-xl px-6 py-3 mt-6 rounded-xl bg-gradient-to-r from-indigo-50 to-indigo-100 text-indigo-700 font-semibold shadow-sm border border-indigo-200">
  Let&apos;s Work Together ✨
</p>


          <div className="flex gap-3 pt-4">
            {[
              {
                href: "https://www.linkedin.com/in/rajan-saru-magar-6a168230a/",
                src: "linkedin.svg",
                alt: "LinkedIn",
              },
              {
                href: "https://github.com/RajanSaruMagar",
                src: "github.svg",
                alt: "GitHub",
              },
              {
                href: "https://www.instagram.com/rjan_mgrx/",
                src: "instagram.svg",
                alt: "Instagram",
              },
              {
                href: "https://x.com/rajan_saru29761",
                src: "twitter.svg",
                alt: "Twitter",
              },
            ].map((item) => (
              <a
                key={item.alt}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-gray-100 hover:bg-indigo-600 transition"
              >
                <img
                  className="h-5 w-5"
                  src={item.src}
                  alt={item.alt}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
