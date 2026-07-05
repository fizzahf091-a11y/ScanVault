import { Mail, Phone, Globe, MapPin } from "lucide-react";

export default function HeroPreview() {
  return (
    <div className="relative w-full max-w-[500px] rounded-[24px] border border-cyan-500/20 bg-[#0b1220]/95 p-4 shadow-[0_0_60px_rgba(0,180,255,0.15)] backdrop-blur-xl transition-all duration-500 hover:scale-[1.02] hover:border-cyan-400/40 sm:rounded-[30px] sm:p-6">

      {/* Background Glow */}
      <div className="pointer-events-none absolute -right-10 top-20 -z-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      {/* Card Glow */}
      <div className="pointer-events-none absolute inset-0 rounded-[24px] bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 sm:rounded-[30px]" />

      {/* Header */}
      <div className="relative z-10 mb-5 flex items-center justify-between">
        <span className="rounded-full bg-green-500/20 px-3 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-green-400 sm:px-4 sm:py-1 sm:text-xs">
          ● LIVE PREVIEW
        </span>
        <span className="text-xs font-medium text-gray-400 sm:text-sm">
          AI OCR
        </span>
      </div>

      {/* Scanner Area */}
      {/* - px-3 py-4 mobile par spacing manage karega aur xs:screens se lekar upar tak p-6 ho jayega */}
      <div className="relative z-10 overflow-hidden rounded-2xl border border-cyan-500/20 bg-[#081321] px-3 py-6 sm:p-6">

        {/* Bottom Glow */}
        <div className="pointer-events-none absolute inset-x-10 bottom-0 h-12 rounded-full bg-cyan-500/20 blur-3xl" />

        {/* Business Card */}
        {/* - w-full lagaya taakay mobile screen ke mutabiq card compress ho ske.
            - max-w-[340px] se card desktop par zyada bara nahi hoga.
            - Aspect ratio set kiya taakay resizing ke waqt card ka shape kharab na ho. */}
        <div className="relative z-10 mx-auto flex aspect-[1.618/1] w-full max-w-[340px] flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br from-[#173c60] via-[#10253d] to-[#08131d] p-4 shadow-2xl sm:p-6">
          
          {/* Shine */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />

          {/* Right Pattern */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-cyan-500/20 to-transparent sm:w-28" />

          {/* Header */}
          <div className="relative flex items-start justify-between gap-2">
            <div>
              {/* text-xl mobile par aur sm:text-2xl tablet/desktop par */}
              <h3 className="text-xl font-bold leading-none text-white sm:text-2xl">
                Alex Morgan
              </h3>
              <p className="mt-1.5 text-xs text-gray-300 sm:mt-2 sm:text-sm">
                Sales Manager
              </p>
            </div>

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/20 sm:h-12 sm:w-12">
              <span className="text-xl font-bold tracking-wide text-cyan-400 sm:text-2xl">
                SV
              </span>
            </div>
          </div>

          {/* Details */}
          {/* gap aur text size small mobile screen ke liye adjust kiya hai */}
          <div className="relative mt-2 space-y-1.5 sm:mt-3 sm:space-y-2">
            <div className="flex items-center gap-2 sm:gap-3">
              <Mail size={14} className="shrink-0 text-cyan-400 sm:size-[16px]" />
              <span className="truncate text-xs text-gray-300 sm:text-sm">alex@scanvault.com</span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <Phone size={14} className="shrink-0 text-cyan-400 sm:size-[16px]" />
              <span className="truncate text-xs text-gray-300 sm:text-sm">+1 (555) 123-4567</span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <Globe size={14} className="shrink-0 text-cyan-400 sm:size-[16px]" />
              <span className="truncate text-xs text-gray-300 sm:text-sm">www.scanvault.com</span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <MapPin size={14} className="shrink-0 text-cyan-400 sm:size-[16px]" />
              <span className="truncate text-xs text-gray-300 sm:text-sm">New York, USA</span>
            </div>
          </div>
        </div>

        {/* Scanner Line */}
        {/* Mobile par layout edges ke mutabiq adjust karne ke liye left/right spacing `left-5 right-5` kiya */}
        <div className="pointer-events-none absolute left-5 right-5 top-8 z-20 h-[2px] bg-cyan-400 shadow-[0_0_18px_#22d3ee] animate-scan sm:left-8 sm:right-8" />

        {/* Scanner Corners */}
        <span className="absolute left-5 top-5 z-20 h-5 w-5 border-l-2 border-t-2 border-cyan-400 sm:left-8 sm:h-6 sm:w-6"></span>
        <span className="absolute right-5 top-5 z-20 h-5 w-5 border-r-2 border-t-2 border-cyan-400 sm:right-8 sm:h-6 sm:w-6"></span>
        <span className="absolute bottom-5 left-5 z-20 h-5 w-5 border-l-2 border-b-2 border-cyan-400 sm:left-8 sm:h-6 sm:w-6"></span>
        <span className="absolute bottom-5 right-5 z-20 h-5 w-5 border-r-2 border-b-2 border-cyan-400 sm:right-8 sm:h-6 sm:w-6"></span>

      </div>

      {/* Status Footer */}
      <div className="relative z-10 mt-4 flex flex-row items-center justify-between gap-2 sm:mt-5">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="relative flex shrink-0">
            <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-green-400 sm:h-2.5 sm:w-2.5"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400 sm:h-2.5 sm:w-2.5"></span>
          </div>
          <p className="text-xs text-gray-300 sm:text-sm">
            Auto Detecting Edges...
          </p>
        </div>

        <span className="shrink-0 rounded-full bg-cyan-500/10 px-2 py-0.5 text-[10px] font-semibold tracking-wide text-cyan-400 sm:px-3 sm:py-1 sm:text-xs">
          OCR READY
        </span>
      </div>

    </div>
  );
}