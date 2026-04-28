'use client';

import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { FaArrowRight, FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import Navbar from './Navbar';

const titleLines = ['DESIGNER', 'DEVELOPER'];

export default function Hero() {
  const [showQuote, setShowQuote] = useState(false);
  const [showText, setShowText] = useState(false);
  const [typedTitles, setTypedTitles] = useState<string[]>(['', '']);
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    const quoteTimer = window.setTimeout(() => setShowQuote(true), 500);
    const typeTimer = window.setTimeout(() => setShowText(true), 900);
    const introTimer = window.setTimeout(() => setShowIntro(true), 2600);

    return () => {
      window.clearTimeout(quoteTimer);
      window.clearTimeout(typeTimer);
      window.clearTimeout(introTimer);
    };
  }, []);

  useEffect(() => {
    if (!showText) return;

    let line = 0;
    let char = 0;

    const type = window.setInterval(() => {
      const currentLine = titleLines[line];

      setTypedTitles((prev) => {
        const updated = [...prev];
        updated[line] = currentLine.slice(0, char + 1);
        return updated;
      });

      char += 1;

      if (char > currentLine.length) {
        line += 1;
        char = 0;
      }

      if (line >= titleLines.length) {
        window.clearInterval(type);
      }
    }, 78);

    return () => window.clearInterval(type);
  }, [showText]);

  return (
    <>
      <Navbar />
      <section className="relative min-h-screen overflow-hidden bg-[#f6f1e8] px-5 pt-28 text-black sm:px-8 lg:px-12">
        <div className="pointer-events-none absolute inset-0 hero-surface" />
        <div className="pointer-events-none absolute inset-0 bg-[url('/grain.jpg')] opacity-[0.08] mix-blend-multiply" />

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-7rem)] w-full max-w-7xl flex-col justify-between gap-16 pb-10">
          <div className="grid flex-1 items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="max-w-5xl">
              <p
                className={clsx(
                  'mb-8 max-w-xl text-sm font-semibold uppercase tracking-[0.26em] text-[#386FA4] transition-all duration-700 sm:text-base',
                  showQuote ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0',
                )}
              >
                &quot;... a creative mind pursues a life of purpose.&quot;
              </p>

              <h1 className="font-serif text-[4.6rem] font-semibold leading-[0.78] tracking-[-0.03em] text-black sm:text-[7rem] md:text-[8.8rem] lg:text-[10.5rem]">
                {titleLines.map((line, index) => (
                  <span key={line} className="relative block min-h-[0.82em]">
                    <span className="select-none opacity-0">{line}</span>
                    <span className="absolute left-0 top-0">
                      {typedTitles[index]}
                      {showText && typedTitles[index].length < line.length ? (
                        <span className="ml-1 inline-block h-[0.72em] w-[0.05em] translate-y-[0.08em] animate-caret bg-[#386FA4]" />
                      ) : null}
                    </span>
                  </span>
                ))}
              </h1>
            </div>

            <div
              className={clsx(
                'max-w-xl justify-self-end rounded-[2rem] border border-black/10 bg-white/55 p-6 shadow-[0_24px_90px_rgba(30,41,59,0.14)] backdrop-blur-xl transition-all duration-700 sm:p-8',
                showIntro ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
              )}
            >
              <p className="text-lg font-medium leading-8 text-black/76 sm:text-xl">
                I build visual systems, software, and stories at the intersection of engineering and taste. Currently a software engineer at{' '}
                <span className="font-semibold text-[#386FA4]">Snap</span>, shaping performance-critical experiences for products used by hundreds of millions.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#experience"
                  className="group inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-black/15 transition hover:-translate-y-0.5 hover:bg-[#386FA4]"
                >
                  View Work
                  <FaArrowRight className="text-xs transition group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-5 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:border-[#386FA4]/40 hover:text-[#386FA4]"
                >
                  <FaEnvelope className="text-sm" />
                  Contact
                </a>
                <a
                  href="https://github.com/Rezatachi"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/70 text-black transition hover:-translate-y-0.5 hover:border-[#386FA4]/40 hover:text-[#386FA4]"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://linkedin.com/in/abraham-belayneh"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/70 text-black transition hover:-translate-y-0.5 hover:border-[#386FA4]/40 hover:text-[#386FA4]"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>

          <div className="grid gap-3 border-t border-black/10 pt-5 text-xs font-semibold uppercase tracking-[0.2em] text-black/45 sm:grid-cols-3">
            <span>Los Angeles</span>
            <span>Engineering @ Snap</span>
            <span>Photography / Design / Systems</span>
          </div>
        </div>
      </section>
    </>
  );
}
