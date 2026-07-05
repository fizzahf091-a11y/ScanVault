"use client";

import { ScanSearch } from "lucide-react";

export default function ScannerFrame() {
  return (
    <div className="relative h-[460px] w-full overflow-hidden rounded-[24px] border border-[#273552] bg-[#0b1120] shadow-inner">

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
      <div className="absolute inset-4 rounded-[22px] border border-[#32435d]/70">

        {/* Animated Scan Line */}
        <div className="absolute left-0 top-4 w-full animate-[scan_3s_linear_infinite]">
          <div className="h-[2px] w-full bg-cyan-400 shadow-[0_0_15px_#00d9ff]" />
        </div>

        {/* Top Left */}
        <div className="absolute left-5 top-5 h-8 w-8 border-l-[4px] border-t-[4px] border-cyan-400 rounded-tl-sm" />

        {/* Top Right */}
        <div className="absolute right-5 top-5 h-8 w-8 border-r-[4px] border-t-[4px] border-cyan-400 rounded-tr-sm" />

        {/* Bottom Left */}
        <div className="absolute bottom-5 left-5 h-8 w-8 border-l-[4px] border-b-[4px] border-cyan-400 rounded-bl-sm" />

        {/* Bottom Right */}
        <div className="absolute bottom-5 right-5 h-8 w-8 border-r-[4px] border-b-[4px] border-cyan-400 rounded-br-sm" />

        {/* Center Content */}
        <div className="flex h-full flex-col items-center justify-center pb-8">

          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-black/40 backdrop-blur-sm">
            <ScanSearch
              size={28}
              className="text-cyan-300"
            />
          </div>

          <p className="mt-5 text-[18px] text-gray-300">
            Auto Detect
          </p>

          <h2 className="mt-2 text-[56px] font-bold tracking-tight text-white">
            ID Card
          </h2>

          <p className="mt-3 text-sm text-gray-400">
            Place your document inside the frame
          </p>

        </div>

        {/* Bottom Badge */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2">

          <div className="flex items-center gap-2 rounded-full border border-[#32435d] bg-[#081321]/95 px-4 py-2">

            <span className="h-2.5 w-2.5 rounded-full bg-green-400 animate-pulse" />

            <span className="text-[10px] font-bold tracking-widest text-white">
              AUTO DETECT
            </span>

            <span className="text-[10px] font-bold text-green-400">
              ON
            </span>

          </div>

        </div>

      </div>

    </div>
  );
}