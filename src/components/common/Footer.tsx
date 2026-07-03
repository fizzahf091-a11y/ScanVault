import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-cyan-500/10 bg-[#030712]">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#0b1d36,transparent_70%)] opacity-60" />

      <div className="relative z-10 mx-auto max-w-6xl px-0 py-12">

        <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-6">

          {/* Logo */}
          <div className="max-w-xs">

            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="ScanVault Logo"
                width={250}
                height={80}
                priority
                className="h-20 w-auto object-contain"
              />
            </Link>

            <p className="mt-4 text-sm leading-7 text-gray-400">
              AI Powered Business Card Scanner that extracts contact
              information and securely stores your business leads.
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="mb-6 text-lg font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-4">

              <li>
                <Link
                  href="/"
                  className="text-gray-400 transition hover:text-cyan-400"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="#features"
                  className="text-gray-400 transition hover:text-cyan-400"
                >
                  Features
                </Link>
              </li>

              <li>
                <Link
                  href="#how-it-works"
                  className="text-gray-400 transition hover:text-cyan-400"
                >
                  How It Works
                </Link>
              </li>

              <li>
                <Link
                  href="/scan"
                  className="text-gray-400 transition hover:text-cyan-400"
                >
                  Scan
                </Link>
              </li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="mb-6 text-lg font-semibold text-white">
              Contact
            </h3>

            <div className="space-y-4">

              {/* Email */}
              <a
                href="mailto:support@scanvault.com"
                className="flex items-center gap-3 text-gray-400 transition hover:text-cyan-400"
              >
                <Mail size={18} className="text-cyan-400" />
                <span>support@scanvault.com</span>
              </a>

              {/* Phone */}
              <a
                href="tel:+923030352936"
                className="flex items-center gap-3 text-gray-400 transition hover:text-cyan-400"
              >
                <Phone size={18} className="text-cyan-400" />
                <span>0303-0352936</span>
              </a>

              {/* Location */}
              <a
  href="https://www.google.com/maps/search/?api=1&query=Office+No.1,+Grand+Estate+Society,+Main+G.T.+Road,+Muridke,+Pakistan"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-3  text-gray-400 transition hover:text-cyan-400"
>
  <MapPin size={18} className="text-cyan-400" />
  <span className="max-w-[230px]">
  Office No.1, Grand Estate Society,
  Main G.T. Road, Muridke-Lahore
</span>
</a>

            </div>

          </div>

          {/* Follow Us */}
          <div>

            <h3 className="mb-6 text-lg font-semibold text-white">
              Follow Us
            </h3>

            <div className="flex flex-col gap-4">

              {/* GitHub */}
              <a
                href="https://github.com/fizzahf091-a11y"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 transition hover:text-cyan-400"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10 text-cyan-400 transition-all hover:bg-cyan-500 hover:text-white">
                  <FaGithub size={20} />
                </div>

                <span>GitHub</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/fizza-hf-192a33417"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 transition hover:text-cyan-400"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10 text-cyan-400 transition-all hover:bg-cyan-500 hover:text-white">
                  <FaLinkedin size={20} />
                </div>

                <span>LinkedIn</span>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/923030352936"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 transition hover:text-cyan-400"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10 text-cyan-400 transition-all hover:bg-cyan-500 hover:text-white">
                  <FaWhatsapp size={20} />
                </div>

                <span>WhatsApp</span>
              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="mt-14 border-t border-cyan-500/10 pt-6 text-center text-sm text-gray-500">
          © 2026 ScanVault. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}