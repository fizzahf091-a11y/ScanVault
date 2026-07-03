import { ArrowRight } from "lucide-react";

export default function HeroContent() {
  return (
    <div className="max-w-xl">

      <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-300">
        AI Powered Document Intelligence
      </span>

      <h1 className="mt-8 text-5xl font-black leading-tight text-white">

        Scan Extract.

        <br />

        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Store Anywhere.
        </span>

      </h1>

      <p className="mt-8 text-medium leading-8 text-gray-400">
        Scan business cards, invoices and documents with AI.
        Automatically extract information and save everything
        securely in your CRM.
      </p>

      <div className="mt-10 flex gap-5">

        <button className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white transition hover:scale-105">
          Start Scanning
        </button>

        <button className="flex items-center gap-2 rounded-xl border border-white/10 px-8 py-4 text-white hover:bg-white/5">
          Watch Demo
          <ArrowRight size={18} />
        </button>

      </div>

    </div>
  );
}