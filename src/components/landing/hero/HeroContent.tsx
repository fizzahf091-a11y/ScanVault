import { ArrowRight } from "lucide-react";

export default function HeroContent() {
  return (
    // md:text-left se desktop par text left align hoga, aur default me mobile par center rahega
    <div className="mx-auto max-w-xl text-center lg:text-left">

      {/* Badge Button */}
      {/* text-xs mobile ke liye aur sm:text-sm bari screens ke liye */}
      <span className="inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs text-cyan-300 sm:px-5 sm:py-2 sm:text-sm">
        AI Powered Document Intelligence
      </span>

      {/* Main Heading */}
      {/* Mobile par text-3xl ya text-4xl behtar rehta hai, desktop par text-5xl ya text-6xl */}
      <h1 className="mt-6 text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl lg:mt-8">
        Scan Extract.
        <br />
        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Store Anywhere.
        </span>
      </h1>

      {/* Paragraph Text */}
      {/* Mobile par text thoda chota (text-base) aur line-height balance ki hai */}
      <p className="mt-4 text-base leading-7 text-gray-400 sm:mt-6 sm:text-lg sm:leading-8">
        Scan business cards, invoices and documents with AI.
        Automatically extract information and save everything
        securely in your CRM.
      </p>

      {/* Action Buttons */}
      {/* - flex-col se mobile par buttons upar-neeche aayenge.
          - sm:flex-row se thodi bari screen par amne-samne ho jayenge.
          - justify-center aur lg:justify-start se alignment screen ke mutabiq set hogi. */}
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start lg:mt-10">

        <button className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:scale-105 sm:w-auto sm:px-8 sm:py-4 sm:text-base">
          Start Scanning
        </button>

        <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 px-6 py-3.5 text-sm text-white hover:bg-white/5 sm:w-auto sm:px-8 sm:py-4 sm:text-base">
          Watch Demo
          <ArrowRight size={18} />
        </button>

      </div>

    </div>
  );
}