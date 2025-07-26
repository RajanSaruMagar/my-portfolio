import React, { useEffect, FC } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const ProjectSection: FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    })
  }, [])

  return (
    <section
      className="flex flex-col items-center justify-center min-h-[300px] bg-black px-6 py-20 text-center"
      data-aos="fade-up"
    >
      <h1 className="text-white text-5xl font-extrabold tracking-wide font-serif mb-4 drop-shadow-lg">
        Projects
      </h1>
      <p className="text-indigo-500 text-3xl font-semibold uppercase tracking-widest mb-6 drop-shadow-md flex items-center justify-center gap-2">
        Coming
        <span className="text-indigo-600 relative">
          Soon
          <span className="loading-dots ml-2 inline-flex">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </span>
        </span>
        🚧
      </p>
      <p className="max-w-xl text-gray-400 text-lg italic font-light">
        Great things are in the works. Stay tuned for innovative creations and exciting updates!
      </p>

      <style jsx>{`
        .loading-dots {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 4px;
        }
        .dot {
          width: 8px;
          height: 8px;
          background-color: #4f46e5; /* Indigo-600 */
          border-radius: 50%;
          animation: bounce 1.4s infinite ease-in-out;
        }
        .dot:nth-child(1) {
          animation-delay: 0s;
        }
        .dot:nth-child(2) {
          animation-delay: 0.2s;
        }
        .dot:nth-child(3) {
          animation-delay: 0.4s;
        }
        @keyframes bounce {
          0%, 80%, 100% {
            transform: translateY(0);
            opacity: 0.7;
          }
          40% {
            transform: translateY(-8px);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  )
}

export default ProjectSection
