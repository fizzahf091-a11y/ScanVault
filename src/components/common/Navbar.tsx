"use client";

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
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#030712]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="ScanVault"
            width={230}
            height={40}
            priority
            className="h-16 w-auto object-contain"
          />
        </Link>

        {/* Navigation */}
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

        {/* Button */}
        <button className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold text-white transition duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30">
          Start Scanning
        </button>

      </div>
    </header>
  );
}