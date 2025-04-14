// components/Navbar.tsx
'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 px-6 md:px-10 py-6
   flex justify-between items-center text-black">
      <div className="text-lg font-bold tracking-tight uppercase">Abraham Belayneh</div>
      <div className="space-x-6 text-sm uppercase">
        <Link href="#about" className="hover:text-gray-300 transition">About</Link>
        <Link href="#exp" className="hover:text-gray-300 transition">exp</Link>
        <Link href="#contact" className="hover:text-gray-300 transition">Contact</Link>
        <Link href="/resume.pdf" download className="hover:text-gray-300 transition">Resume</Link>
      </div>
    </nav>
  );
}
