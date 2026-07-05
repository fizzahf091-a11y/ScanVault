"use client";

import {
  ScanLine,
  Camera,
  FileSearch,
  ShieldCheck,
} from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Position",
    subtitle: "Place document",
    icon: ScanLine,
    active: true,
  },
  {
    id: 2,
    title: "Capture",
    subtitle: "Take photo",
    icon: Camera,
    active: false,
  },
  {
    id: 3,
    title: "Extract",
    subtitle: "OCR Processing",
    icon: FileSearch,
    active: false,
  },
  {
    id: 4,
    title: "Secure",
    subtitle: "Save document",
    icon: ShieldCheck,
    active: false,
  },
];

export default function Stepper() {
  return (
    <div className="h-full rounded-[20px] border border-[#27344d] bg-[#121827] px-6 py-5">

      <div className="relative flex items-start justify-between">

        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <div
              key={step.id}
              className="relative flex flex-1 flex-col items-center text-center"
            >

              {/* Connecting Line */}
              {index !== steps.length - 1 && (
                <div className="absolute left-1/2 top-[20px] h-[2px] w-full bg-[#36435c]" />
              )}

              {/* Circle */}
              <div
                className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 ${
                  step.active
                    ? "border-cyan-400 bg-cyan-500 shadow-[0_0_14px_rgba(0,212,255,.4)]"
                    : "border-[#44506a] bg-[#1a2235]"
                }`}
              >
                <Icon
                  size={17}
                  className={step.active ? "text-white" : "text-gray-400"}
                />
              </div>

              {/* Step Number */}
              <span
                className={`mt-3 flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold ${
                  step.active
                    ? "bg-cyan-500 text-white"
                    : "bg-[#263248] text-gray-400"
                }`}
              >
                {step.id}
              </span>

              {/* Title */}
              <h4 className="mt-2 text-[13px] font-semibold text-white">
                {step.title}
              </h4>

              {/* Subtitle */}
              <p className="mt-1 text-[10px] leading-4 text-gray-400">
                {step.subtitle}
              </p>

            </div>
          );
        })}

      </div>

    </div>
  );
}