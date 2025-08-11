import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold mb-4"
      >
        Hi, I'm Shaik Musharaf
      </motion.h1>
      <p className="text-lg md:text-2xl max-w-2xl">
        Full-stack Developer | AI & Prompt Engineer
      </p>
    </section>
  );
}

export default Hero;
