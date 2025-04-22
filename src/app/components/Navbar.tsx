// components/Navbar.tsx
'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full fixed z-50 lg:px-6 py-6
     flex justify-between items-center text-black sm:justify-between justify-center">
      <div className="text-lg font-bold tracking-tight uppercase hidden px-6 sm:block">Abraham Belayneh</div>
      <div className="space-x-6 text-sm uppercase">
        <Link href="#about" className="hover:text-gray-300 transition">About</Link>
        <Link href="#exp" className="hover:text-gray-300 transition">exp</Link>
        <Link href="#contact" className="hover:text-gray-300 transition">Contact</Link>
        <Link href="/resume.pdf" download className="hover:text-gray-300 transition">Resume</Link>
      </div>
    </nav>
  );
}
