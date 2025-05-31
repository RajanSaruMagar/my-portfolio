'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export default function ScrollText() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Create color transitions OUTSIDE of .map()
  const color1 = useTransform(scrollYProgress, [0.0, 0.15, 0.3], ['#ffffff', '#3b82f6', '#4f46e5']);
  const color2 = useTransform(scrollYProgress, [0.2, 0.35, 0.5], ['#ffffff', '#3b82f6', '#4f46e5']);
  const color3 = useTransform(scrollYProgress, [0.4, 0.55, 0.7], ['#ffffff', '#3b82f6', '#4f46e5']);
  const color4 = useTransform(scrollYProgress, [0.6, 0.75, 0.9], ['#ffffff', '#3b82f6', '#4f46e5']);

  const lines = [
    'ALL MY WORKS AT THE SAME PLACE.',
    'INCLUDES SMALLER PIECES OF WORK,',
    'EXPERIMENTS, COLLABORATIONS, AND',
    'UNSEEN OR UNUSED CONCEPTS',
  ];

  const colors = [color1, color2, color3, color4];

  return (
    <div ref={ref} className="z-10 text-center px-4">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-snug md:leading-tight space-y-2">
        {lines.map((text, index) => (
          <motion.span
            key={index}
            className="block"
            style={{ color: colors[index] }}
          >
            {text}
          </motion.span>
        ))}
      </h1>
      <p className="text-white text-xl mt-12 animate-bounce">↓ Scroll Down ↓</p>
    </div>
  );
}
