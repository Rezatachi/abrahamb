'use client';

import Link from 'next/link';

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#building-next', label: 'Next' },
  { href: '#contact', label: 'Contact' },
  { href: '/resume.pdf', label: 'Resume', download: true },
];

export default function Navbar() {
  return (
    <nav className="fixed left-0 right-0 top-4 z-50 px-4 sm:top-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-black/10 bg-[#f8f4ec]/80 px-2 py-2 text-black shadow-[0_18px_60px_rgba(15,23,42,0.12)] backdrop-blur-xl sm:px-5 sm:py-3">
        <Link
          href="/"
          className="hidden text-sm font-black uppercase tracking-[0.16em] transition hover:text-[#386FA4] sm:block"
        >
          Abraham Belayneh
        </Link>

        <div className="mx-auto flex min-w-0 items-center gap-0.5 sm:mx-0 sm:gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              download={link.download}
              className="rounded-full px-2 py-2 text-[0.64rem] font-bold uppercase tracking-[0.08em] text-black/68 transition hover:bg-white hover:text-[#386FA4] focus-visible:bg-white focus-visible:text-[#386FA4] sm:px-4 sm:text-xs sm:tracking-[0.14em]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
