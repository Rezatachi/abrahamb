'use client';

import Image from 'next/image';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

const experiences = [
  {
    role: 'Cloud Infrastructure Intern',
    company: 'NVIDIA',
    year: '2022',
    logo: '/nvidia.png',
    description: 'Improved cloud Web UI deployment workflows using Docker and React-based tooling, reducing pipeline load time by 70%.',
    accent: 'from-[#76b900]/18',
    href: 'https://www.nvidia.com/en-us/',
  },
  {
    role: 'Cloud Optimization Intern',
    company: 'NVIDIA',
    year: '2023',
    logo: '/nvidia.png',
    description: 'Built internal leasing tools for 2,000+ employees, reducing average lease usage time by 20% and equipment downtime by 15%.',
    accent: 'from-[#76b900]/18',
    href: 'https://www.nvidia.com/en-us/',
  },
  {
    role: 'Client Foundation Intern',
    company: 'Snap',
    year: '2024',
    logo: '/snap.png',
    description: 'Contributed to Snapchat&apos;s native iPad app and real-time page metrics for developer visibility into feature performance.',
    accent: 'from-[#FFFC00]/25',
    href: 'https://www.snap.com/',
  },
  {
    role: 'Software Engineer',
    company: 'Snap',
    year: 'Current',
    logo: '/snap.png',
    description: 'Building network, storage, and diagnostics systems for Snapchat iOS, including production rollouts to millions of users.',
    accent: 'from-[#FFFC00]/25',
    href: 'https://www.snap.com/',
  },
];

export default function Projects() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#f3eee5] px-5 py-24 text-black sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="absolute inset-0 experience-grid opacity-70" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <div>
            <p className="mb-5 text-sm font-black uppercase tracking-[0.24em] text-[#386FA4]">Experience</p>
            <h2 className="max-w-3xl font-serif text-5xl font-semibold leading-[0.95] tracking-[-0.02em] sm:text-6xl lg:text-7xl">
              Systems work with product consequences.
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-black/60">
            From mobile infrastructure at Snap to cloud tooling at NVIDIA, I like work where technical decisions become visible in speed, reliability, and user experience.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {[...experiences].reverse().map((experience) => (
            <a
              key={`${experience.company}-${experience.role}-${experience.year}`}
              href={experience.href}
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-[2rem] border border-black/10 bg-white/72 p-6 shadow-[0_18px_70px_rgba(15,23,42,0.08)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-[#386FA4]/30 hover:shadow-[0_28px_110px_rgba(56,111,164,0.18)]"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${experience.accent} via-white/0 to-[#386FA4]/8 opacity-80`} />
              <div className="relative flex min-h-[18rem] flex-col justify-between gap-10">
                <div className="flex items-start justify-between gap-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-3xl border border-black/10 bg-white p-3 shadow-sm">
                    <Image
                      src={experience.logo}
                      alt={`${experience.company} logo`}
                      width={96}
                      height={96}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className="rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-black/50">
                      {experience.year}
                    </span>
                    <span className="text-xs font-black uppercase tracking-[0.18em] text-black/35 transition group-hover:text-[#386FA4]">
                      Company site
                    </span>
                  </div>
                </div>

                <div>
                  <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-[#386FA4]">{experience.company}</p>
                  <div className="flex items-end justify-between gap-4">
                    <h3 className="max-w-xl text-3xl font-black leading-none tracking-[-0.02em] text-black sm:text-4xl">
                      {experience.role}
                    </h3>
                    <FaArrowUpRightFromSquare className="mb-1 shrink-0 text-black/25 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#386FA4]" />
                  </div>
                  <p className="mt-5 max-w-xl text-base leading-7 text-black/64">{experience.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
