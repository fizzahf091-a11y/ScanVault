"use client";

import { ScanSearch } from "lucide-react";

export default function ScannerFrame() {
  return (
    <div className="relative h-[280px] sm:h-[380px] md:h-[420px] lg:h-[460px] w-full overflow-hidden rounded-[20px] sm:rounded-[24px] border border-[#273552] bg-[#0b1120] shadow-inner">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/scanner-bg.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#040812]/70" />

      {/* Scanner Frame */}
      {/* Inset values adjusted for mobile screens */}
      <div className="absolute inset-2 sm:inset-4 rounded-[16px] sm:rounded-[22px] border border-[#32435d]/70">

        {/* Animated Scan Line */}
        <div className="absolute left-0 top-4 w-full animate-[scan_3s_linear_infinite]">
          <div className="h-[2px] w-full bg-cyan-400 shadow-[0_0_15px_#00d9ff]" />
        </div>

        {/* Top Left */}
        <div className="absolute left-3 top-3 sm:left-5 sm:top-5 h-6 w-6 sm:h-8 sm:w-8 border-l-[3px] sm:border-l-[4px] border-t-[3px] sm:border-t-[4px] border-cyan-400 rounded-tl-sm" />

        {/* Top Right */}
        <div className="absolute right-3 top-3 sm:right-5 sm:top-5 h-6 w-6 sm:h-8 sm:w-8 border-r-[3px] sm:border-r-[4px] border-t-[3px] sm:border-t-[4px] border-cyan-400 rounded-tr-sm" />

        {/* Bottom Left */}
        <div className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5 h-6 w-6 sm:h-8 sm:w-8 border-l-[3px] sm:border-l-[4px] border-b-[3px] sm:border-b-[4px] border-cyan-400 rounded-bl-sm" />

        {/* Bottom Right */}
        <div className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5 h-6 w-6 sm:h-8 sm:w-8 border-r-[3px] sm:border-r-[4px] border-b-[3px] sm:border-b-[4px] border-cyan-400 rounded-br-sm" />

        {/* Center Content */}
        <div className="flex h-full flex-col items-center justify-center pb-12 sm:pb-8 px-4">

          {/* Icon Container scaled for smaller screens */}
          <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full border border-white/20 bg-black/40 backdrop-blur-sm">
            <ScanSearch
              className="h-5 w-5 sm:h-7 sm:w-7 text-cyan-300"
            />
          </div>

          <p className="mt-3 sm:mt-5 text-[14px] sm:text-[18px] text-gray-300 tracking-wide">
            Auto Detect
          </p>

          {/* Heading scaled dynamically from 32px up to 56px */}
          <h2 className="mt-1 sm:mt-2 text-[32px] sm:text-[44px] md:text-[56px] font-bold tracking-tight text-white leading-none">
            ID Card
          </h2>

          <p className="mt-2 text-xs sm:text-sm text-gray-400 text-center max-w-[200px] sm:max-w-none">
            Place your document inside the frame
          </p>

        </div>

        {/* Bottom Badge */}
        <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 z-10">
          <div className="flex items-center gap-2 rounded-full border border-[#32435d] bg-[#081321]/95 px-3 py-1.5 sm:px-4 sm:py-2 whitespace-nowrap">
            <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[9px] sm:text-[10px] font-bold tracking-widest text-white">
              AUTO DETECT
            </span>
            <span className="text-[9px] sm:text-[10px] font-bold text-green-400">
              ON
            </span>
          </div>
        </div>

      </div>

    </div>
  );
}