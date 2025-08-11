import React from 'react';
import { skills } from '../data/skills';

function Skills() {
  return (
    <section id="skills" className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="p-4 bg-white shadow rounded">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
