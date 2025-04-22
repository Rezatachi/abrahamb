'use client';

import { useEffect, useState } from 'react';
import clsx from 'clsx';
import Navbar from './Navbar';

const titleLines = ['DESIGNER', 'DEVELOPER'];

export default function Hero() {
    const [showText, setShowText] = useState(false);
    const [typedTitles, setTypedTitles] = useState<string[]>(['', '']);
    const [showName, setShowName] = useState(false);
    const [showParagraph, setShowParagraph] = useState(false);

    useEffect(() => {
        const nameTimer = setTimeout(() => setShowName(true), 1400);
        const textTimer = setTimeout(() => setShowText(true), 1700);
        const paragraphTimer = setTimeout(() => setShowParagraph(window.innerWidth >= 768), 4000);

        const handleResize = () => {
            setShowParagraph(window.innerWidth >= 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            clearTimeout(nameTimer);
            clearTimeout(textTimer);
            clearTimeout(paragraphTimer);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (!showText) return;

        const typeTitles = (line: number, char: number) => {
            if (line >= titleLines.length) return;
            const currentLine = titleLines[line];
            if (char < currentLine.length) {
                setTypedTitles((prev) => {
                    const updated = [...prev];
                    updated[line] += currentLine[char];
                    return updated;
                });
                setTimeout(() => typeTitles(line, char + 1), 80);
            } else {
                setTimeout(() => typeTitles(line + 1, 0), 300);
            }
        };

        typeTitles(0, 0);
    }, [showText]);

    return (
        <>
            <Navbar />
            <section className="relative min-h-screen text-black overflow-hidden px-6 md:px-10 pt-24">
                {/* 🌌 Background gradient */}
                <div className="absolute inset-0 pointer-events-none z-0">
                    <div className="w-full h-full bg-[url('/grain.png')] opacity-[0.06] mix-blend-overlay" />
                </div>

                {/* 🧠 Foreground content */}
                <div className="relative z-10 flex items-center justify-start min-h-screen px-6 md:px-16 text-left">
                    <div className="text-left max-w-[40ch] leading-none uppercase tracking-tight min-h-[30rem]">
                        {/* ✨ Fade-in name */}
                        <p
                            className={clsx(
                                "text-xl md:text-2xl text-[#386FA4] mb-6 font-semibold transition-opacity duration-700",
                                showName ? "opacity-100" : "opacity-0"
                            )}
                        >
                        &quot;... a creative mind pursues a life of purpose.&quot;
                        </p>

                        {/* 🎬 Typing designer/developer */}
                        <h1 className="text-[3.5rem] md:text-[6rem] font-serif font-bold leading-[0.9] space-y-2">
                            {titleLines.map((line, i) => (
                                <div key={i} className="relative">
                                    <span className="opacity-0">{line}</span>
                                    <span className="absolute top-0 left-0">
                                        {typedTitles[i]}
                                    </span>
                                </div>
                            ))}
                        </h1>
                    </div>

                    {/* Bottom-right content */}
                    <div className="flex flex-col justify-center items-end w-full h-full mt-[20em]">
                        <div className="h-6" />
                        <p
                            className={clsx(
                                "text-xl md:text-2xl font-semibold mt-4 text-right transition-opacity duration-700 md:display-none",
                                showParagraph ? "opacity-100" : "opacity-0"
                            )}
                        >
                            I use my software development skills and artistic knowledge to create and develop
                            <span className="text-[#386FA4]"> beautiful</span> and
                            <span className="text-[#386FA4]"> functional</span> systems. With a plethora of passions and ideas, I am always committed to working on something
                            <span className="text-[#386FA4]"> new</span> and
                            <br />
                            <span className="text-[#386FA4]"> impactful</span>.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
