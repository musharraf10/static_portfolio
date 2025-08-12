import React from 'react';
import { projects } from '../data/projects';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles } from 'lucide-react';

function Projects() {
  return (
    <section id="projects" className="py-12 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-8 sm:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent px-4">
          Featured Projects
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
          Showcasing innovative solutions and cutting-edge technologies
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 px-4">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:shadow-2xl transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative p-4 sm:p-6 lg:p-8">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2 w-full">
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>
              
              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4 sm:mb-6 justify-center sm:justify-start">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-accent/20 text-accent-foreground rounded-full border border-accent/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                <motion.a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center space-x-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 text-sm sm:text-base"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </motion.a>
                <motion.a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center space-x-2 px-4 py-2 border border-border text-foreground rounded-lg hover:bg-accent transition-all duration-300 text-sm sm:text-base"
                >
                  <Github className="w-4 h-4" />
                  <span>Source Code</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;