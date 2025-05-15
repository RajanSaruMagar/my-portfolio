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
      alert("succcesss");
      console.log(result);
    }
  }
  return (
    <div
      id="contact"
      className="h-screen flex flex-col justify-center bg-slate-200 px-[160px]"
    >
      {/* Heading  */}
      <div className="space-y-4 py-5">
        <p className="text-green-600  text-[14px]  animate-pulse">
          <span className="text-2xl ">★ </span> CONNECT WITH ME
        </p>
        <p className="text-gray-600 text-sm">
          Have an idea in mind? Let’s bring it to life with creativity and
          precision.
        </p>
        <p className="text-4xl font-semibold">
          Let&apos;s start a project together
        </p>
      </div>

      {/* left boxes of contact section  */}
      <div className="flex justify-start gap-60 w-full ">
        <div className="w-[40%]">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm  text-black">Full Name</label>
              <input
                type="text"
                className="mt-1 p-2 w-full border rounded-lg"
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
              />
            </div>
            <div>
              <label className="block text-sm  text-black">Email</label>
              <input
                type="email"
                className="mt-1 p-2 w-full border rounded-lg"
                onChange={(e) => {
                  setFormEmail(e.target.value);
                }}
              />
            </div>
            <div>
              <label className="block text-sm text-black">Message</label>
              <textarea
                className="mt-1 p-2 w-full h-32 border rounded-lg resize-none overflow-auto"
                onChange={(e) => {
                  setFormMessage(e.target.value);
                }}
              ></textarea>
            </div>
            <div className="inline-block p-[2px] rounded-lg">
              <button
                type="submit"
                className="relative px-10 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-indigo-700 text-white font-semibold shadow-[0_4px_14px_rgba(99,102,241,0.4)] transition-all duration-300 ease-in-out hover:bg-black hover:shadow-[0_4px_20px_rgba(0,0,0,0.6)] hover:scale-105 focus:outline-none focus:ring-0"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* right boxes of contact section */}
        <div className="bg-white w-[40%] h-[80%] rounded-xl shadow-lg p-10 space-y-4">
          <p className="text-green-600 flex items-center  gap-2  animate-pulse">
            <span className="h-2 w-2 bg-green-600 rounded-full"></span>
            Available for work
          </p>

          <div className="w-20 h-20 overflow-hidden rounded-full ">
            <img src="about.png" />
          </div>

          <p>
            My inbox is always open. Whether you have a project or just want to
            say Hi. I <br />
            would love to hear from you. Feel free to contact me and i&apos;ll
            get back to you.
          </p>

          {/* icons for the link of personal profiles */}
          <div className="flex  gap-4">
            <a href="https://www.linkedin.com/in/rajan-saru-magar-6a168230a/">
              <img className="h-5 w-5" src="linkedin.svg" />
            </a>
            <a href="https://github.com/RajanSaruMagar">
              <img className="h-5 w-5" src="github.svg" />
            </a>
            <a href="https://www.instagram.com/rjan_mgrx/">
              <img className="h-5 w-5" src="instagram.svg" />
            </a>
            <a href="https://x.com/rajan_saru29761">
              <img className="h-5 w-5" src="twitter.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
