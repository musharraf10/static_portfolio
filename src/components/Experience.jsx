import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

function Experience() {
  const experiences = [
    {
      title: 'Freelance AI & Prompt Engineer',
      company: 'Outlier / Scale AI',
      period: 'Jan 2025 – Present',
      location: 'Remote/Part-time',
      description: [
        'LLM prompt-engineering, fine-tuning, evaluation & data preprocessing',
        'Developed prompts for Python, React/JS, HTML/CSS, and troubleshooting UI issues',
        'Collaborated with cross-functional teams to optimize AI model performance'
      ]
    },
    {
      title: 'Trainer',
      company: 'NRI College',
      period: 'MAY 2023 to JUL 2023',
      location: 'On-site',
      description: [
        'Conducted training sessions for 50+ junior students',
        'Taught HTML, CSS, JavaScript, SQL, and PHP fundamentals',
        'Developed comprehensive curriculum and hands-on projects'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 max-w-7xl mx-auto bg-accent/5">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Professional Experience
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Building expertise through diverse roles and challenging projects
        </p>
      </motion.div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="lg:w-1/3">
                <div className="sticky top-24">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Briefcase className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-card-foreground">
                        {exp.title}
                      </h3>
                      <p className="text-primary font-semibold">
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-2/3">
                <div className="p-6 bg-card border border-border rounded-2xl hover:shadow-lg transition-all duration-300">
                  <ul className="space-y-3">
                    {exp.description.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: (index * 0.1) + (itemIndex * 0.1) }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-3 text-muted-foreground"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Experience;