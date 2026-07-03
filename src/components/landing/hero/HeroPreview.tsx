import { Mail, Phone, Globe, MapPin } from "lucide-react";

export default function HeroPreview() {
  return (
    <div className="relative w-full max-w-[500px] rounded-[30px] border border-cyan-500/20 bg-[#0b1220]/95 p-6 shadow-[0_0_60px_rgba(0,180,255,0.15)] backdrop-blur-xl transition-all duration-500 hover:scale-[1.02] hover:border-cyan-400/40">

      {/* Background Glow */}
      <div className="pointer-events-none absolute -right-10 top-20 -z-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      {/* Card Glow */}
      <div className="pointer-events-none absolute inset-0 rounded-[30px] bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5" />

      {/* Header */}
      <div className="relative z-10 mb-5 flex items-center justify-between">
        <span className="rounded-full bg-green-500/20 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-green-400">
          ● LIVE PREVIEW
        </span>
        <span className="text-sm font-medium text-gray-400">
          AI OCR
        </span>
      </div>

      {/* Scanner Area */}
      <div className="relative z-10 overflow-hidden rounded-2xl border border-cyan-500/20 bg-[#081321] p-6">

        {/* Bottom Glow */}
        <div className="pointer-events-none absolute inset-x-10 bottom-0 h-12 rounded-full bg-cyan-500/20 blur-3xl" />

        {/* Business Card */}
        <div className="relative z-10 mx-auto flex h-[210px] w-[340px] flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br from-[#173c60] via-[#10253d] to-[#08131d] p-6 shadow-2xl">
          
          {/* Shine */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />

          {/* Right Pattern */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-28 bg-gradient-to-l from-cyan-500/20 to-transparent" />

          {/* Header */}
          <div className="relative flex items-start justify-between">
            <div>
              <h3 className="text-2xl font-bold leading-none text-white">
                Alex Morgan
              </h3>
              <p className="mt-2 text-sm text-gray-300">
                Sales Manager
              </p>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/20">
              <span className="text-2xl font-bold tracking-wide text-cyan-400">
                SV
              </span>
            </div>
          </div>

          {/* Details */}
          <div className="relative mt-3 space-y-2">
            <div className="flex items-center gap-3">
              <Mail size={16} className="shrink-0 text-cyan-400" />
              <span className="text-sm text-gray-300">alex@scanvault.com</span>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={16} className="shrink-0 text-cyan-400" />
              <span className="text-sm text-gray-300">+1 (555) 123-4567</span>
            </div>

            <div className="flex items-center gap-3">
              <Globe size={16} className="shrink-0 text-cyan-400" />
              <span className="text-sm text-gray-300">www.scanvault.com</span>
            </div>

            <div className="flex items-center gap-3">
              <MapPin size={16} className="shrink-0 text-cyan-400" />
              <span className="text-sm text-gray-300">New York, USA</span>
            </div>
          </div>
        </div>

        {/* Scanner Line (Moved here so it layers ON TOP of the card) */}
        <div className="pointer-events-none absolute left-8 right-8 top-8 z-20 h-[2px] bg-cyan-400 shadow-[0_0_18px_#22d3ee] animate-scan" />

        {/* Scanner Corners */}
        <span className="absolute left-8 top-5 z-20 h-6 w-6 border-l-2 border-t-2 border-cyan-400"></span>
        <span className="absolute right-8 top-5 z-20 h-6 w-6 border-r-2 border-t-2 border-cyan-400"></span>
        <span className="absolute bottom-5 left-8 z-20 h-6 w-6 border-l-2 border-b-2 border-cyan-400"></span>
        <span className="absolute bottom-5 right-8 z-20 h-6 w-6 border-r-2 border-b-2 border-cyan-400"></span>

      </div>

      {/* Status */}
      <div className="relative z-10 mt-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <span className="absolute inline-flex h-2.5 w-2.5 animate-ping rounded-full bg-green-400"></span>
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400"></span>
          </div>
          <p className="text-sm text-gray-300">
            Auto Detecting Edges...
          </p>
        </div>

        <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold tracking-wide text-cyan-400">
          OCR READY
        </span>
      </div>

    </div>
  );
}