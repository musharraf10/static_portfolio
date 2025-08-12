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
    <section id="experience" className="py-12 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto bg-accent/5">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-8 sm:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent px-4">
          Professional Experience
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
          Building expertise through diverse roles and challenging projects
        </p>
      </motion.div>

      <div className="space-y-6 sm:space-y-8 px-4">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-start">
              <div className="w-full lg:w-1/3">
                <div className="lg:sticky lg:top-24">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-card-foreground">
                        {exp.title}
                      </h3>
                      <p className="text-sm sm:text-base text-primary font-semibold">
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

              <div className="w-full lg:w-2/3">
                <div className="p-4 sm:p-6 bg-card border border-border rounded-2xl hover:shadow-lg transition-all duration-300">
                  <ul className="space-y-3">
                    {exp.description.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: (index * 0.1) + (itemIndex * 0.1) }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-3 text-sm sm:text-base text-muted-foreground"
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