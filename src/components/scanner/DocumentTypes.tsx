"use client";

import {
  ScanSearch,
  CreditCard,
  BookOpen,
  BadgeCheck,
  FileText,
} from "lucide-react";

const documentTypes = [
  {
    id: 1,
    title: "Auto Detect",
    description: "Automatically detect document",
    icon: ScanSearch,
    active: true,
    color: "text-cyan-400",
  },
  {
    id: 2,
    title: "ID Card",
    description: "Identity card or government ID",
    icon: CreditCard,
    active: false,
    color: "text-green-400",
  },
  {
    id: 3,
    title: "Passport",
    description: "Passport or travel document",
    icon: BookOpen,
    active: false,
    color: "text-purple-400",
  },
  {
    id: 4,
    title: "Driver License",
    description: "Driver license or permit",
    icon: BadgeCheck,
    active: false,
    color: "text-yellow-400",
  },
  {
    id: 5,
    title: "Business Card",
    description: "Business or visiting card",
    icon: CreditCard,
    active: false,
    color: "text-sky-400",
  },
  {
    id: 6,
    title: "Other Document",
    description: "Other types of documents",
    icon: FileText,
    active: false,
    color: "text-gray-300",
  },
];

export default function DocumentTypes() {
  return (
    <div className="rounded-[20px] border border-[#27344d] bg-[#121827] p-4">

      {/* Heading */}
      <h3 className="mb-4 text-center text-[13px] font-bold uppercase tracking-[2px] text-white">
        DOCUMENT TYPE
      </h3>

      <div className="space-y-2.5">
        {documentTypes.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              className={`group flex w-full items-center gap-3 rounded-xl border px-3 py-2.5 transition-all duration-300 ${
                item.active
                  ? "border-cyan-400 bg-[#18253b] shadow-[0_0_14px_rgba(0,212,255,.15)]"
                  : "border-[#2c3953] bg-[#151b2c] hover:border-cyan-400 hover:bg-[#19263b]"
              }`}
            >
              {/* Icon */}
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-lg bg-[#1c2437] ${item.color}`}
              >
                <Icon size={17} />
              </div>

              {/* Text */}
              <div className="flex-1 text-left">

                <h4 className="text-[13px] font-semibold leading-none text-white">
                  {item.title}
                </h4>

                <p className="mt-1 text-[10px] leading-4 text-gray-400">
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