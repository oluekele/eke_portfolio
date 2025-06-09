import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ekele - Software Developer",
  description: "Portfolio website for Ekele, showcasing skills in React, Next.js, Node.js, Typescript, Tailwindcss and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen bg-[#0F172A] text-white px-6 md:px-20 pb-12  flex flex-col  relative ">
          <Navbar />
          <main>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
