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
    <section id="skills" className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-accent/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4 w-full"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-primary mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (index * 0.05) }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs sm:text-sm font-medium cursor-pointer hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;