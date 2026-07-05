import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-cyan-500/10 bg-[#030712]">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,#0b1d36,transparent_70%)] opacity-60" />

      {/* Main Container */}
      {/* - px-0 ko px-4 sm:px-6 kiya taakay edges se text door rahe
          - py-12 desktop ke liye perfect hai, mobile par spacing consistent rahegi */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-12 sm:px-6">

        {/* Responsive Grid System */}
        {/* - grid-cols-1: Mobile screen par sab blocks ek ke neeche ek aane lagenge.
            - sm:grid-cols-2: Tablet size par 2 rows me split ho jayenge.
            - lg:grid-cols-4: Large screens par 4 clean columns ban jayenge. */}
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-6">

          {/* Column 1: Logo & Info */}
          <div className="max-w-xs">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="ScanVault Logo"
                width={250}
                height={80}
                priority
                className="h-16 w-auto object-contain sm:h-20" // Mobile par height thodi choti taakay compact dikhe
              />
            </Link>
            <p className="mt-4 text-sm leading-7 text-gray-400">
              AI Powered Business Card Scanner that extracts contact
              information and securely stores your business leads.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="mb-4 text-base font-semibold text-white sm:mb-6 sm:text-lg">
              Quick Links
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <Link href="/" className="text-sm text-gray-400 transition hover:text-cyan-400 sm:text-base">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-sm text-gray-400 transition hover:text-cyan-400 sm:text-base">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="text-sm text-gray-400 transition hover:text-cyan-400 sm:text-base">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/scan" className="text-sm text-gray-400 transition hover:text-cyan-400 sm:text-base">
                  Scan
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="mb-4 text-base font-semibold text-white sm:mb-6 sm:text-lg">
              Contact
            </h3>
            <div className="space-y-3 sm:space-y-4">
              {/* Email */}
              <a
                href="mailto:support@scanvault.com"
                className="flex items-center gap-3 text-sm text-gray-400 transition hover:text-cyan-400 sm:text-base"
              >
                <Mail size={18} className="shrink-0 text-cyan-400" />
                <span className="truncate">support@scanvault.com</span>
              </a>

              {/* Phone */}
              <a
                href="tel:+923030352936"
                className="flex items-center gap-3 text-sm text-gray-400 transition hover:text-cyan-400 sm:text-base"
              >
                <Phone size={18} className="shrink-0 text-cyan-400" />
                <span>0303-0352936</span>
              </a>

              {/* Location */}
              <a
                href="https://maps.google.com" // Link update kiya link wrapping criteria standard ke liye
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-sm text-gray-400 transition hover:text-cyan-400 sm:text-base"
              >
                <MapPin size={18} className="mt-0.5 shrink-0 text-cyan-400" />
                <span className="max-w-[230px] leading-6">
                  Office No.1, Grand Estate Society,
                  Main G.T. Road, Muridke-Lahore
                </span>
              </a>
            </div>
          </div>

          {/* Column 4: Follow Us */}
          <div>
            <h3 className="mb-4 text-base font-semibold text-white sm:mb-6 sm:text-lg">
              Follow Us
            </h3>
            {/* - Mobile screen space alignment ke liye dynamic inline flex rows setup kiye */}
            <div className="flex flex-col gap-3 sm:gap-4">
              {/* GitHub */}
              <a
                href="https://github.com/fizascs" // Aap ka updated verified identity profile path use kiya
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-gray-400 transition hover:text-cyan-400 sm:text-base"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10 text-cyan-400 transition-all hover:bg-cyan-500 hover:text-white sm:h-10 sm:w-10">
                  <FaGithub size={18} />
                </div>
                <span>GitHub</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-gray-400 transition hover:text-cyan-400 sm:text-base"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10 text-cyan-400 transition-all hover:bg-cyan-500 hover:text-white sm:h-10 sm:w-10">
                  <FaLinkedin size={18} />
                </div>
                <span>LinkedIn</span>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/923030352936"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-gray-400 transition hover:text-cyan-400 sm:text-base"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10 text-cyan-400 transition-all hover:bg-cyan-500 hover:text-white sm:h-10 sm:w-10">
                  <FaWhatsapp size={18} />
                </div>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Block */}
        {/* mb-12 se mobile bottom navigation padding automatically balance ho jayegi */}
        <div className="mt-10 border-t border-cyan-500/10 pt-6 text-center text-xs text-gray-500 sm:mt-14 sm:text-sm">
          © 2026 ScanVault. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}