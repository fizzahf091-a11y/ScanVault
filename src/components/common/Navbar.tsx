"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Scan", href: "/scan" },
  { name: "Form", href: "/form" },
  { name: "Records", href: "/records" },
  { name: "Dashboard", href: "/dashboard" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#030712]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="ScanVault"
            width={230}
            height={40}
            priority
            className="h-12 w-auto object-contain sm:h-16" // Mobile par logo size 12 kiya taakay space bache
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-300 transition duration-300 hover:text-cyan-400"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Action Button & Hamburger */}
        <div className="flex items-center gap-4">
          {/* Main Button (Hidden on extra small screens, visible on sm and up) */}
          <button className="hidden rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 sm:block sm:px-6 sm:py-3 sm:text-base">
            Start Scanning
          </button>

          {/* Hamburger Menu Button (Only visible on Mobile/Tablet) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-gray-400 hover:bg-white/5 hover:text-white md:hidden focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              // Cross Icon when open
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger Icon when closed
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="border-b border-white/10 bg-[#030712] px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)} // Menu click pe close ho jaye ga
                className="text-base font-medium text-gray-300 transition duration-300 hover:text-cyan-400"
              >
                {item.name}
              </Link>
            ))}
            {/* Mobile screen ke liye button layout ke andar */}
            <button className="mt-2 block w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3 text-center font-semibold text-white sm:hidden">
              Start Scanning
            </button>
          </div>
        </div>
      )}
    </header>
  );
}