'use client';

import React, { useState } from 'react';
import { FaCheck, FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa6';

const socials = [
  { label: 'Email', href: 'mailto:abraham@alumni.caltech.edu', icon: FaEnvelope },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/abraham-belayneh', icon: FaLinkedinIn },
  { label: 'GitHub', href: 'https://github.com/Rezatachi', icon: FaGithub },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="bg-black px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="mb-5 text-sm font-black uppercase tracking-[0.24em] text-[#FFB703]">Contact</p>
          <h2 className="max-w-3xl font-serif text-5xl font-semibold leading-[0.95] tracking-[-0.02em] sm:text-6xl lg:text-7xl">
            Let&apos;s build something with a point of view.
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-8 text-white/68">
            Reach out for engineering work, visual media, creative collaborations, or anything that lives between systems and story.
          </p>

          <div className="mt-10 grid gap-3 sm:max-w-xl sm:grid-cols-3">
            {socials.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-4 text-sm font-bold text-white/78 transition hover:-translate-y-0.5 hover:border-[#386FA4]/70 hover:bg-[#386FA4]/18 hover:text-white"
                >
                  <span>{social.label}</span>
                  <Icon className="transition group-hover:scale-110" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.07] p-4 shadow-[0_30px_120px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-6">
          {isSubmitted ? (
            <div className="flex min-h-[31rem] flex-col items-center justify-center rounded-[1.5rem] border border-[#FFB703]/25 bg-[#FFB703]/10 p-8 text-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#FFB703] text-black">
                <FaCheck />
              </div>
              <h3 className="text-3xl font-black tracking-tight">Message queued.</h3>
              <p className="mt-4 max-w-md text-white/68">
                Thanks for reaching out. This form is client-side for now, but the interaction is ready for a backend or email service.
              </p>
              <button
                type="button"
                onClick={() => setIsSubmitted(false)}
                className="mt-8 rounded-full border border-white/15 px-5 py-3 text-sm font-bold text-white transition hover:border-[#FFB703]/60 hover:text-[#FFB703]"
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 rounded-[1.5rem] bg-[#fbf7ef] p-5 text-black sm:p-7">
              <div>
                <label htmlFor="name" className="mb-2 block text-xs font-black uppercase tracking-[0.18em] text-black/52">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-black/10 bg-white px-4 py-4 text-base outline-none transition placeholder:text-black/35 focus:border-[#386FA4] focus:ring-4 focus:ring-[#386FA4]/15"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-xs font-black uppercase tracking-[0.18em] text-black/52">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-black/10 bg-white px-4 py-4 text-base outline-none transition placeholder:text-black/35 focus:border-[#386FA4] focus:ring-4 focus:ring-[#386FA4]/15"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-xs font-black uppercase tracking-[0.18em] text-black/52">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me what you are making."
                  className="w-full resize-none rounded-2xl border border-black/10 bg-white px-4 py-4 text-base outline-none transition placeholder:text-black/35 focus:border-[#386FA4] focus:ring-4 focus:ring-[#386FA4]/15"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-[#386FA4] px-6 py-4 text-sm font-black uppercase tracking-[0.16em] text-white shadow-lg shadow-[#386FA4]/25 transition hover:-translate-y-0.5 hover:bg-black"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
