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
    <section id="about" className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            Hi, I’m Musharaf. I recently finished my B.Tech in Information Technology in 2024.
            I love building websites and apps using the MERN stack (MongoDB, Express, React, and Node.js)
            and have experience with data structures and algorithms (DSA) in Java and I have knowledge on Python.
            I have created projects like a study productivity app, a blogging platform, a video call app, and other web apps.
            I enjoy learning new technologies in software development and want to use my skills to build useful and smart solutions.
            I am excited to start my career and work on challenging projects.
          </p>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              className="p-4 sm:p-6 rounded-2xl bg-card border border-border hover:shadow-xl transition-all duration-300 group w-full"
          >
            <div className="mb-4">
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
      </div>
    </section>
  );
}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">