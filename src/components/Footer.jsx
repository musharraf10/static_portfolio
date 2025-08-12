import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code, Coffee } from 'lucide-react';

function Footer() {
  return (
    <footer className="py-8 sm:py-12 px-4 sm:px-6 bg-card border-t border-border">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex items-center justify-center space-x-1 sm:space-x-2 mb-4 flex-wrap">
            <span className="text-muted-foreground">Made with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span className="text-muted-foreground">and</span>
            <Code className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">and lots of</span>
            <Coffee className="w-4 h-4 text-amber-600" />
          </div>

          <p className="text-sm sm:text-base text-muted-foreground mb-2">
            © {new Date().getFullYear()} Shaik Musharaf. All rights reserved.
          </p>

          <p className="text-xs sm:text-sm text-muted-foreground px-4">
            Thanks for visiting my portfolio! Feel free to connect with me on social media or reach out via email.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
