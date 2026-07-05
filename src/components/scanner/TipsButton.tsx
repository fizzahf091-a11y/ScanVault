"use client";

import { Lightbulb } from "lucide-react";

export default function TipsButton() {
  return (
    <button
      className="
        flex
        items-center
        gap-2
        rounded-lg
        border
        border-[#2b3752]
        bg-[#101726]
        px-3.5
        py-2
        text-[13px]
        font-medium
        text-gray-200
        transition-all
        duration-300
        hover:border-cyan-400
        hover:bg-[#162338]
        hover:text-white
      "
    >
      <Lightbulb
        size={15}
        className="text-yellow-400"
        fill="currentColor"
      />

      <span>Tips</span>
    </button>
  );
}