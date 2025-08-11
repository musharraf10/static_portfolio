import React from 'react';
import { projects } from '../data/projects';
import { motion } from 'framer-motion';

function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
            className="p-4 bg-white shadow rounded"
          >
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="text-sm mb-2">{project.description}</p>
            <p className="text-xs mb-2">Tech: {project.tech.join(", ")}</p>
            <div className="flex space-x-4">
              <a href={project.liveLink} className="text-blue-500" target="_blank" rel="noreferrer">Live</a>
              <a href={project.codeLink} className="text-gray-500" target="_blank" rel="noreferrer">Code</a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
