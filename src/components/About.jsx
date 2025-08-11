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
      description: 'Building fast, scalable, and responsive applications'
    },
    {
      icon: Users,
      title: 'Team Leadership',
      description: 'Experience training and mentoring junior developers'
    }
  ];

  return (
    <section id="about" className="py-20 px-6 max-w-7xl mx-auto">
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
            I'm Shaik Musharaf, a passionate full-stack developer with expertise in MERN stack, 
            AI prompt engineering, and modern web technologies. I specialize in creating 
            innovative digital solutions that combine cutting-edge technology with exceptional user experiences.
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
            whileHover={{ y: -10 }}
            className="p-6 rounded-2xl bg-card border border-border hover:shadow-xl transition-all duration-300 group"
          >
            <div className="mb-4">
              <feature.icon className="w-12 h-12 text-primary group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-card-foreground">
              {feature.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default About;