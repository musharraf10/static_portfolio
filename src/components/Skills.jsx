import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/skills';

function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: skills.filter(skill => 
        ['JavaScript', 'TypeScript', 'ReactJS', 'TailwindCSS', 'Framer Motion'].includes(skill)
      )
    },
    {
      title: 'Backend',
      skills: skills.filter(skill => 
        ['Node.js', 'Express', 'Python', 'Java'].includes(skill)
      )
    },
    {
      title: 'Database',
      skills: skills.filter(skill => 
        ['MongoDB', 'MySQL'].includes(skill)
      )
    },
    {
      title: 'Tools & Others',
      skills: skills.filter(skill => 
        ['Socket.IO', 'WebRTC'].includes(skill)
      )
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 max-w-7xl mx-auto bg-accent/5">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Skills & Technologies
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A comprehensive toolkit for building modern, scalable applications
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-primary mb-4">
              {category.title}
            </h3>
            <div className="space-y-3">
              {category.skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (index * 0.05) }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="p-3 bg-card border border-border rounded-lg hover:shadow-md transition-all duration-300 cursor-pointer group"
                >
                  <span className="text-card-foreground group-hover:text-primary transition-colors">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;