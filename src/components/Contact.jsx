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
      className="py-16 px-4 bg-accent/5 w-full min-w-full box-border"
    >
      <div className="w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Let's Connect & Learn Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm a passionate fresher eager to start my career in software development.
            Open to internships, entry-level roles, and collaborative learning
            opportunities where I can grow while contributing meaningfully.
          </p>
        </motion.div>

        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 w-full">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8 w-full"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-card-foreground">
                Get In Touch
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8 text-base sm:text-lg">
                As a fresher, I'm enthusiastic about learning new technologies,
                working on real-world projects, and contributing to a team. If you
                have an internship, entry-level opportunity, or even a project I can
                collaborate on, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6 w-full">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 group"
                >
                  <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="min-w-0 break-words">
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-card-foreground hover:text-primary transition-colors duration-300 font-medium break-words"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-card-foreground font-medium break-words">
                        {info.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
//Og