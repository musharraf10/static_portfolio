import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Rocket, Users } from 'lucide-react';

function About() {
  const features = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Expertise in MERN stack with modern web technologies'
    },
    {
      icon: Brain,
      title: 'AI & Prompt Engineering',
      description: 'Specialized in LLM fine-tuning and prompt optimization'
    },
    {
      icon: Rocket,
      title: 'Performance Focused',
      description: 'I have capability of Building fast, scalable, and responsive applications'
    },
    {
      icon: Users,
      title: 'Team Leadership',
      description: 'I have Experience for training and mentoring my juniors in web development'
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-8 sm:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent px-4">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 sm:mb-8">
            Hi, I’m Musharaf. I recently finished my B.Tech in Information Technology in 2024.
            I love building websites and apps using the MERN stack (MongoDB, Express, React, and Node.js)
            and have experience with data structures and algorithms (DSA) in Java and I have knowledge on Python.
            I have created projects like a study productivity app, a blogging platform, a video call app, and other web apps.
            I enjoy learning new technologies in software development and want to use my skills to build useful and smart solutions.
            I am excited to start my career and work on challenging projects.
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-4">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="p-4 sm:p-6 rounded-2xl bg-card border border-border hover:shadow-xl transition-all duration-300 group text-center sm:text-left"
          >
            <div className="mb-4 flex justify-center sm:justify-start">
              <feature.icon className="w-10 h-10 sm:w-12 sm:h-12 text-primary group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3 text-card-foreground">
              {feature.title}
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default About;