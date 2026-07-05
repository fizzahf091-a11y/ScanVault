"use client";

import { Lightbulb } from "lucide-react";

export default function TipsButton() {
  return (
    <button
      className="
        flex
        items-center
        justify-center
        gap-2
        rounded-lg
        border
        border-[#2b3752]
        bg-[#101726]
        /* Mobile par tight padding (square shape), tablet/desktop par standard layout */
        p-2
        sm:px-3.5
        sm:py-2
        text-[12px]
        sm:text-[13px]
        font-medium
        text-gray-200
        transition-all
        duration-300
        hover:border-cyan-400
        hover:bg-[#162338]
        hover:text-white
        active:scale-95
        focus:outline-none
      "
      aria-label="View Tips"
    >
      <Lightbulb
        size={15}
        className="text-yellow-400 shrink-0"
        fill="currentColor"
      />

      {/* Mobile par text hide ho jaye ga, sm aur bari screens par dikhay ga */}
      <span className="hidden sm:inline">Tips</span>
    </button>
  );
}