"use client";

import { useState } from "react";
import {
  ScanSearch,
  CreditCard,
  BookOpen,
  BadgeCheck,
  FileText,
} from "lucide-react";

const initialDocumentTypes = [
  {
    id: 1,
    title: "Auto Detect",
    description: "Automatically detect document",
    icon: ScanSearch,
    color: "text-cyan-400",
  },
  {
    id: 2,
    title: "ID Card",
    description: "Identity card or government ID",
    icon: CreditCard,
    color: "text-green-400",
  },
  {
    id: 3,
    title: "Passport",
    description: "Passport or travel document",
    icon: BookOpen,
    color: "text-purple-400",
  },
  {
    id: 4,
    title: "Driver License",
    description: "Driver license or permit",
    icon: BadgeCheck,
    color: "text-yellow-400",
  },
  {
    id: 5,
    title: "Business Card",
    description: "Business or visiting card",
    icon: CreditCard,
    color: "text-sky-400",
  },
  {
    id: 6,
    title: "Other Document",
    description: "Other types of documents",
    icon: FileText,
    color: "text-gray-300",
  },
];

export default function DocumentTypes() {
  const [activeId, setActiveId] = useState<number>(1);

  return (
    <div className="w-full rounded-[20px] border border-[#27344d] bg-[#121827] p-4 sm:p-5">

      {/* Heading */}
      <h3 className="mb-4 text-center text-[12px] sm:text-[13px] font-bold uppercase tracking-[2px] text-white">
        DOCUMENT TYPE
      </h3>

      {/* Responsive Layout Container */}
      {/* Mobile: Grid ya Horizontal Slider, sm aur upar: Vertical List */}
      <div className="grid grid-cols-2 gap-2.5 sm:flex sm:flex-col sm:space-y-2.5 md:grid md:grid-cols-1">
        {initialDocumentTypes.map((item) => {
          const Icon = item.icon;
          const isActive = item.id === activeId;

          return (
            <button
              key={item.id}
              onClick={() => setActiveId(item.id)}
              className={`group flex w-full flex-col items-center gap-2 sm:flex-row sm:items-center sm:gap-3 rounded-xl border p-3 text-center sm:text-left transition-all duration-300 focus:outline-none ${
                isActive
                  ? "border-cyan-400 bg-[#18253b] shadow-[0_0_14px_rgba(0,212,255,.15)]"
                  : "border-[#2c3953] bg-[#151b2c] hover:border-cyan-400/60 hover:bg-[#19263b]"
              }`}
            >
              {/* Icon Container */}
              <div
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#1c2437] transition-all duration-300 ${
                  isActive ? "scale-105" : "group-hover:scale-105"
                } ${item.color}`}
              >
                <Icon size={17} />
              </div>

              {/* Text Container */}
              <div className="flex-1 min-w-0">
                <h4 className="text-[12px] sm:text-[13px] font-semibold leading-tight sm:leading-none text-white truncate">
                  {item.title}
                </h4>

                {/* Description - Hidden on very small grid cards, shown on layout breakdown */}
                <p className="mt-1 text-[10px] leading-snug sm:leading-4 text-gray-400 block sm:block line-clamp-1 sm:line-clamp-none">
                  {item.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}