import React, { useState } from 'react';
import ContactForm from './ContactForm';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Phone } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'skmusharaf01@gmail.com',
      href: 'mailto:skmusharaf01@gmail.com'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/musharraf10',
      href: 'https://github.com/musharraf10'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/skmusharaf01',
      href: 'http://www.linkedin.com/in/skmusharaf01'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 0000000000',
      href: 'tel:+9182399196'
    },
    {
      icon: MapPin,
      label: 'Status',
      value: 'Open to Internships & Entry-Level Roles (Remote or On-site)',
      href: null
    },
  ];

  return (
    <section id="contact" className="py-20 px-6 max-w-7xl mx-auto bg-accent/5">

      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          As a fresher, I'm enthusiastic about learning new technologies, working on
          real-world projects, and contributing to a team. If you have an internship,
          entry-level opportunity, or even a project I can collaborate on, I'd love
          to hear from you.
        </p>
      </motion.div>

      {/* Two Column Layout */}
      <div className="grid lg:grid-cols-2 gap-12 items-start">

        {/* Left - Information Center */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4 group"
            >
              <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                <info.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{info.label}</p>
                {info.href ? (
                  <a
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-card-foreground hover:text-primary transition-colors duration-300 font-medium"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-card-foreground font-medium">{info.value}</p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Right - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8 self-start"
        >
          <ContactForm />
        </motion.div>

      </div>
    </section>
  );
}

export default Contact;
