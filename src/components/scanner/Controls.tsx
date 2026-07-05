"use client";

import { Zap, RotateCcw, Camera } from "lucide-react";

export default function Controls() {
  return (
    <div className="w-full max-w-sm mx-auto rounded-[18px] border border-[#26324a] bg-[#111827] p-4 sm:p-5">

      {/* Heading */}
      <h3 className="mb-4 text-center text-[10px] sm:text-[11px] font-bold uppercase tracking-[2px] sm:tracking-[3px] text-white">
        CONTROLS
      </h3>

      {/* Responsive Layout Wrapper */}
      <div className="flex flex-row items-center justify-around gap-4 sm:flex-col sm:justify-center sm:gap-6">
        
        {/* Control Icons Group */}
        <div className="flex items-center justify-center gap-4 sm:gap-5">

          {/* Flash */}
          <button className="group flex flex-col items-center focus:outline-none">
            <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-[#1a2337] transition-all duration-300 group-hover:bg-cyan-500/20 group-hover:shadow-[0_0_12px_rgba(34,211,238,.35)]">
              <Zap
                size={14}
                className="text-gray-400 transition-colors group-hover:text-cyan-400 sm:size-[16px]"
              />
            </div>
            <span className="mt-1 text-[8px] sm:text-[9px] tracking-wider text-gray-500 transition-colors group-hover:text-gray-400">
              FLASH
            </span>
          </button>

          {/* Auto */}
          <button className="group flex flex-col items-center focus:outline-none">
            <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-[#1a2337] transition-all duration-300 group-hover:bg-cyan-500/20 group-hover:shadow-[0_0_12px_rgba(34,211,238,.35)]">
              <RotateCcw
                size={14}
                className="text-gray-400 transition-colors group-hover:text-cyan-400 sm:size-[16px]"
              />
            </div>
            <span className="mt-1 text-[8px] sm:text-[9px] tracking-wider text-gray-500 transition-colors group-hover:text-gray-400">
              AUTO
            </span>
          </button>

          {/* Flip */}
          <button className="group flex flex-col items-center focus:outline-none">
            <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-[#1a2337] transition-all duration-300 group-hover:bg-cyan-500/20 group-hover:shadow-[0_0_12px_rgba(34,211,238,.35)]">
              <Camera
                size={14}
                className="text-gray-400 transition-colors group-hover:text-cyan-400 sm:size-[16px]"
              />
            </div>
            <span className="mt-1 text-[8px] sm:text-[9px] tracking-wider text-gray-500 transition-colors group-hover:text-gray-400">
              FLIP
            </span>
          </button>

        </div>

        {/* Capture Button */}
        <div className="flex justify-center sm:mt-2">
          <button
            className="
              relative
              flex
              h-[60px] w-[60px]
              sm:h-[74px] sm:w-[74px]
              items-center
              justify-center
              rounded-full
              border-[3px]
              border-white
              bg-gradient-to-b
              from-[#3b82f6]
              to-[#2563eb]
              shadow-[0_0_18px_rgba(37,99,235,.45)]
              sm:shadow-[0_0_22px_rgba(37,99,235,.55)]
              transition-all
              duration-300
              hover:scale-105
              active:scale-95
              focus:outline-none
            "
          >
            {/* Inner Ring */}
            <div className="h-[42px] w-[42px] sm:h-[54px] sm:w-[54px] rounded-full border border-blue-200 bg-[#3b82f6]" />
            
            {/* Pulse Effect */}
            <div className="absolute inset-0 rounded-full border border-cyan-300/30 animate-pulse" />
          </button>
        </div>

      </div>

    </div>
  );
}