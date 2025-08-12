import React from 'react';
import ContactForm from './ContactForm';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Phone } from 'lucide-react';

function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'skmusharaf01@gmail.com',
      href: 'mailto:skmusharaf01@gmail.com',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/musharraf10',
      href: 'https://github.com/musharraf10',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/skmusharaf01',
      href: 'http://www.linkedin.com/in/skmusharaf01',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 -',
      href: 'tel:+911234567890',
    },
    {
      icon: MapPin,
      label: 'Status',
      value: 'Open to Internships & Entry-Level Roles (Remote or On-site)',
      href: null,
    },
  ];

  return (
    <section
      id="contact"
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
            Let's Connect & Learn Together
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-full mx-auto">
            I'm a passionate fresher eager to start my career in software development.
            Open to internships, entry-level roles, and collaborative learning
            opportunities where I can grow while contributing meaningfully.
          </p>
        </motion.div>

        <div className="flex flex-col gap-6 w-full max-w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full max-w-full space-y-6"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-card-foreground">
                Get In Touch
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm sm:text-base">
                As a fresher, I'm enthusiastic about learning new technologies,
                working on real-world projects, and contributing to a team. If you
                have an internship, entry-level opportunity, or even a project I can
                collaborate on, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-4 w-full max-w-full">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3 group w-full max-w-full"
                >
                  <div className="p-2 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="min-w-0 break-words">
                    <p className="text-xs sm:text-sm text-muted-foreground">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-card-foreground hover:text-primary transition-colors duration-300 font-medium break-words text-sm sm:text-base"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-card-foreground font-medium break-words text-sm sm:text-base">
                        {info.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full max-w-full"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;