'use client';

import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="px-6 md:px-16 py-16 text-black min-h-screen flex items-center justify-center">
      <div className="w-full max-w-2xl">
        <h2 className="text-xl font-semibold mb-12 text-[#386FA4]">"CONTACT"</h2>

        {isSubmitted ? (
          <p className="text-lg text-[#386FA4]">Thank you for reaching out! I'll get back to you soon.</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-sm font-semibold mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:border-[#386FA4]"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your Email"
                className="p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:border-[#386FA4]"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="text-sm font-semibold mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your Message"
                className="p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:border-[#386FA4]"
              />
            </div>

            <button
              type="submit"
              className="px-6 py-3 bg-[#386FA4] text-white rounded-lg font-semibold hover:bg-[#2f5c8f] transition"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
