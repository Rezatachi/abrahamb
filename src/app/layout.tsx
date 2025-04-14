import type { Metadata } from "next";
import { Roboto_Condensed, Playfair_Display } from "next/font/google";
import WavyParticles from "@/app/WavyBackground";
import "./globals.css";

const roboto = Roboto_Condensed({
  subsets: ["latin"],
  variable: "--font-roboto",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Abraham Belayneh Portfolio",
  description: "Personal site of Abraham Belayneh — designer, developer, photographer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${playfair.variable} font-sans`}>
      <div className="fixed inset-0 -z-10 pointer-events-none">
          <WavyParticles />
        </div>
        {children}
      </body>
    </html>
  );
}
