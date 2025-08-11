import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-20 px-6 max-w-5xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <p>Email: <a href="mailto:skmusharaf01@gmail.com" className="text-blue-500">skmusharaf01@gmail.com</a></p>
      <p className="mt-4">
        <a href="https://github.com/musharraf10" className="mx-2 text-gray-700">GitHub</a>
        <a href="http://www.linkedin.com/in/skmusharaf01" className="mx-2 text-gray-700">LinkedIn</a>
      </p>
    </section>
  );
}

export default Contact;
