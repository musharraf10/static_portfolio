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
        'Collaborated with cross-functional teams to optimize AI model performance',
      ],
    },
    {
      title: 'Trainer',
      company: 'NRI College',
      period: 'MAY 2023 to JUL 2023',
      location: 'On-site',
      description: [
        'Conducted training sessions for 50+ junior students',
        'Taught HTML, CSS, JavaScript, SQL, and PHP fundamentals',
        'Developed comprehensive curriculum and hands-on projects',
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-12 px-2 sm:px-4 bg-accent/5 w-full min-w-full max-w-full box-border"
    >
      <div className="w-full max-w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-full mx-auto">
            Building expertise through diverse roles and challenging projects
          </p>
        </motion.div>

        <div className="space-y-8 w-full max-w-full">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="w-full max-w-full"
            >
              <div className="flex flex-col gap-4 w-full max-w-full">
                {/* Left Section */}
                <div className="w-full max-w-full">
                  <div className="w-full max-w-full">
                    <div className="flex items-start space-x-2 mb-3">
                      <div className="p-2 bg-primary/10 rounded-full flex-shrink-0">
                        <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                      </div>
                      <div className="w-full max-w-full">
                        <h3 className="text-base sm:text-lg font-bold text-card-foreground">
                          {exp.title}
                        </h3>
                        <p className="text-primary font-semibold text-xs sm:text-sm">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1 text-xs text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-3 h-3" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Section */}
                <div className="w-full max-w-full">
                  <div className="p-3 sm:p-4 bg-card border border-border rounded-md hover:shadow-md transition-all duration-200">
                    <ul className="space-y-2">
                      {exp.description.map((item, itemIndex) => (
                        <motion.li
                          key={itemIndex}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.4,
                            delay: (index * 0.1) + (itemIndex * 0.1),
                          }}
                          viewport={{ once: true }}
                          className="flex items-start space-x-2 text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                          <span className="text-xs sm:text-sm">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;