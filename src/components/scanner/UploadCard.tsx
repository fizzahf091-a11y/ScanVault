"use client";

import { UploadCloud } from "lucide-react";

export default function UploadCard() {
  return (
    <div className="w-full rounded-[20px] border border-[#26324a] bg-[#121827] p-3 sm:p-2.5">

      {/* Heading */}
      <h3 className="mb-2.5 sm:mb-3 text-center text-[10px] sm:text-[11px] font-bold uppercase tracking-[2px] text-white">
        OR UPLOAD IMAGE
      </h3>

      {/* Upload Area */}
      {/* Mobile: Row layout (flex-row), Tablet/Desktop: Column layout (sm:flex-col) */}
      <button
        className="
          group
          flex
          h-auto
          min-h-[90px]
          sm:h-[135px]
          w-full
          flex-row
          sm:flex-col
          items-center
          justify-center
          gap-4
          sm:gap-0
          rounded-xl
          border
          border-dashed
          border-cyan-500/40
          bg-[#0d1423]
          p-4
          sm:p-0
          transition-all
          duration-300
          hover:border-cyan-400
          hover:bg-[#111b2e]
          focus:outline-none
          active:scale-[0.99]
        "
      >

        {/* Icon Wrapper */}
        <div
          className="
            flex
            h-11
            w-11
            sm:h-12
            sm:w-12
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-[#18263d]
            shadow-[0_0_15px_rgba(0,212,255,.18)]
            transition-all
            duration-300
            group-hover:scale-105
          "
        >
          <UploadCloud
            size={20}
            className="text-cyan-400 sm:size-[22px]"
          />
        </div>

        {/* Text Area Content Wrapper */}
        <div className="text-left sm:text-center min-w-0">
          {/* Title */}
          <h4 className="sm:mt-3 text-[13px] sm:text-[14px] font-semibold text-white leading-tight">
            Click to Upload
          </h4>

          {/* Info Wrapper - Mobile par flex row me handle ho sakti hai extra optimization ke liye */}
          <div className="flex flex-wrap gap-x-2 items-center sm:block">
            {/* File Types */}
            <p className="mt-0.5 text-[10px] text-gray-400">
              PNG • JPG • PDF
            </p>

            {/* Separator dots for mobile layout views */}
            <span className="inline sm:hidden text-gray-600 text-[10px]">•</span>

            {/* File Size */}
            <p className="mt-0.5 text-[9px] text-gray-500">
              Max 10 MB
            </p>
          </div>
        </div>

      </button>

      {/* Footer Hint Text */}
      <p className="mt-2 text-center text-[9px] text-gray-500 hidden sm:block">
        Drag & Drop your document here
      </p>

    </div>
  );
}