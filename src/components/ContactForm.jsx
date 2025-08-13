import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        time: '',
    });
    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSending(true);

        const dataToSend = {
            ...formData,
            time: new Date().toLocaleString(),
        };

        emailjs
            .send(
                'service_sil0da9',
                'template_n39hhzb',
                dataToSend,
                'gSsKD6hSXE00-lic4'
            )
            .then(() => {
                setStatus('Message sent successfully!');
                setIsSending(false);
                setFormData({ name: '', email: '', message: '', time: '' });
            })
            .catch((error) => {
                console.error('EmailJS Error:', error);
                setStatus('Failed to send message. Please try again.');
                setIsSending(false);
            });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <motion.form
            onSubmit={handleSubmit}
            className="w-full max-w-full space-y-6 bg-card p-4 rounded-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <div className="w-full max-w-full">
                <label
                    htmlFor="name"
                    className="block text-sm font-medium text-card-foreground mb-2"
                >
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full max-w-full px-3 py-2 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-card-foreground"
                    placeholder="Your full name"
                />
            </div>

            <div className="w-full max-w-full">
                <label
                    htmlFor="email"
                    className="block text-sm font-medium text-card-foreground mb-2"
                >
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full max-w-full px-3 py-2 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-card-foreground"
                    placeholder="your.email@example.com"
                />
            </div>

            <div className="w-full max-w-full">
                <label
                    htmlFor="message"
                    className="block text-sm font-medium text-card-foreground mb-2"
                >
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full max-w-full px-3 py-2 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-card-foreground resize-none"
                    placeholder="Your message here..."
                />
            </div>

            <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSending}
                className="w-full max-w-full flex items-center justify-center space-x-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
            >
                <Send className="w-5 h-5" />
                <span>{isSending ? 'Sending...' : 'Send Message'}</span>
            </motion.button>

            {status && (
                <p className="text-sm text-muted-foreground mt-2 text-center">{status}</p>
            )}
        </motion.form>
    );
}

export default ContactForm;