import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, BookOpen, Trophy } from 'lucide-react';

function Achievements() {
  const achievements = [
    {
      icon: Users,
      title: 'Training Excellence',
      description: 'Successfully trained 50+ junior students in web development fundamentals',
      period: 'MAY 2023 - JUL 2023',
      highlight: '50+ Students'
    },
    {
      icon: BookOpen,
      title: 'Curriculum Development',
      description: 'Developed comprehensive training materials for HTML, CSS, JavaScript, SQL, and PHP',
      period: '2023',
      highlight: '5 Technologies'
    },
    {
      icon: Trophy,
      title: 'Project Success',
      description: 'Built and deployed multiple full-stack applications with modern technologies',
      period: '2024-2025',
      highlight: 'Multiple Projects'
    },
    {
      icon: Award,
      title: 'AI Specialization',
      description: 'Specialized in AI prompt engineering and LLM fine-tuning for enterprise solutions',
      period: '2025',
      highlight: 'AI Expert'
    }
  ];

  return (
    <section id="achievements" className="py-12 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-8 sm:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent px-4">
          Achievements & Milestones
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
          Key accomplishments that showcase my dedication to excellence and continuous growth
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 px-4">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="relative group"
          >
            <div className="p-4 sm:p-6 lg:p-8 bg-card border border-border rounded-2xl hover:shadow-xl transition-all duration-300 h-full">
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                  <achievement.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-card-foreground">
                      {achievement.title}
                    </h3>
                    <span className="text-xs text-primary font-semibold bg-primary/10 px-3 py-1 rounded-full self-start sm:self-auto">
                      {achievement.highlight}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    {achievement.period}
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {achievement.description}
              </p>

              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;