import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { useSpring, animated } from 'react-spring';
import HeroName from './HeroName';

function Hero() {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    delay: 500,
  });

  const socialLinks = [
    { icon: Github, href: 'https://github.com/musharraf10', label: 'GitHub' },
    { icon: Linkedin, href: 'http://www.linkedin.com/in/skmusharaf01', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:skmusharaf01@gmail.com', label: 'Email' }
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden pt-16 px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20"></div>

      <div className="relative z-10 max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-primary to-secondary p-1">
            <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
              <img
                src="/NewProfileBG.png"
                alt="Shaik Musharaf"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>


        <HeroName />



        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mb-8"
        >
          <p className="text-lg sm:text-xl md:text-3xl text-muted-foreground mb-4">
            Full-stack Developer
          </p>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            AI & Prompt Engineer | MERN Stack Specialist | Creating Digital Experiences
          </p>
        </motion.div>

        <animated.div style={fadeIn} className="flex justify-center space-x-4 sm:space-x-6 mb-12">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 sm:p-3 rounded-full bg-accent/20 hover:bg-accent/40 transition-all duration-300 group"
            >
              <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-foreground group-hover:text-primary transition-colors" />
            </motion.a>
          ))}
        </animated.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 sm:px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl text-center w-full sm:w-auto"
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 sm:px-8 py-3 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-center w-full sm:w-auto"
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-20 sm:bottom-4 transform -translate-x-1/2"
      >
        <ChevronDown className="w-8 h-8 text-muted-foreground" />
      </motion.div>

    </section>
  );
}

export default Hero;