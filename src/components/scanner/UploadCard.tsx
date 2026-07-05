"use client";

import { UploadCloud } from "lucide-react";

export default function UploadCard() {
  return (
    <div className="rounded-[20px] border border-[#26324a] bg-[#121827] p-2">

      {/* Heading */}
      <h3 className="mb-3 text-center text-[11px] font-bold uppercase tracking-[2px] text-white">
        OR UPLOAD IMAGE
      </h3>

      {/* Upload Area */}
      <button
        className="
          group
          flex
          h-[125px]
          w-full
          flex-col
          items-center
          justify-center
          rounded-xl
          border
          border-dashed
          border-cyan-500/40
          bg-[#0d1423]
          transition-all
          duration-300
          hover:border-cyan-400
          hover:bg-[#111b2e]
        "
      >

        {/* Icon */}
        <div
          className="
            flex
            h-12
            w-12
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
            size={22}
            className="text-cyan-400"
          />
        </div>

        {/* Title */}
        <h4 className="mt-3 text-[14px] font-semibold text-white">
          Click to Upload
        </h4>

        {/* File Types */}
        <p className="mt-1 text-[10px] text-gray-400">
          PNG • JPG • PDF
        </p>

        {/* File Size */}
        <p className="mt-1 text-[9px] text-gray-500">
          Max file size 10 MB
        </p>

      </button>

      {/* Footer */}
      <p className="mt-2 text-center text-[9px] text-gray-500">
        Drag & Drop your document here
      </p>

    </div>
  );
}