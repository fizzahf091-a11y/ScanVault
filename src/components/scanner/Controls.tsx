"use client";

import { Zap, RotateCcw, Camera } from "lucide-react";

export default function Controls() {
  return (
    <div className="rounded-[18px] border border-[#26324a] bg-[#111827] p-4">

      {/* Heading */}
      <h3 className="mb-4 text-center text-[11px] font-bold uppercase tracking-[3px] text-white">
        CONTROLS
      </h3>

      {/* Control Icons */}
      <div className="flex justify-center gap-5">

        {/* Flash */}
        <button className="group flex flex-col items-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1a2337] transition-all duration-300 group-hover:bg-cyan-500/20 group-hover:shadow-[0_0_12px_rgba(34,211,238,.35)]">
            <Zap
              size={16}
              className="text-gray-400 group-hover:text-cyan-400"
            />
          </div>

          <span className="mt-1.5 text-[9px] tracking-wider text-gray-500">
            FLASH
          </span>
        </button>

        {/* Auto */}
        <button className="group flex flex-col items-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1a2337] transition-all duration-300 group-hover:bg-cyan-500/20 group-hover:shadow-[0_0_12px_rgba(34,211,238,.35)]">
            <RotateCcw
              size={16}
              className="text-gray-400 group-hover:text-cyan-400"
            />
          </div>

          <span className="mt-1.5 text-[9px] tracking-wider text-gray-500">
            AUTO
          </span>
        </button>

        {/* Flip */}
        <button className="group flex flex-col items-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1a2337] transition-all duration-300 group-hover:bg-cyan-500/20 group-hover:shadow-[0_0_12px_rgba(34,211,238,.35)]">
            <Camera
              size={16}
              className="text-gray-400 group-hover:text-cyan-400"
            />
          </div>

          <span className="mt-1.5 text-[9px] tracking-wider text-gray-500">
            FLIP
          </span>
        </button>

      </div>

      {/* Capture Button */}
      <div className="mt-5 flex justify-center">

        <button
          className="
            relative
            flex
            h-[74px]
            w-[74px]
            items-center
            justify-center
            rounded-full
            border-[3px]
            border-white
            bg-gradient-to-b
            from-[#3b82f6]
            to-[#2563eb]
            shadow-[0_0_22px_rgba(37,99,235,.55)]
            transition-all
            duration-300
            hover:scale-105
          "
        >
          <div className="h-[54px] w-[54px] rounded-full border border-blue-200 bg-[#3b82f6]" />

          <div className="absolute inset-0 rounded-full border border-cyan-300/30 animate-pulse" />
        </button>

      </div>

    </div>
  );
}