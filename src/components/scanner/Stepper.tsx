"use client";

import { useState } from "react";
import {
  ScanLine,
  Camera,
  FileSearch,
  ShieldCheck,
} from "lucide-react";

const initialSteps = [
  {
    id: 1,
    title: "Position",
    subtitle: "Place document",
    icon: ScanLine,
  },
  {
    id: 2,
    title: "Capture",
    subtitle: "Take photo",
    icon: Camera,
  },
  {
    id: 3,
    title: "Extract",
    subtitle: "OCR Processing",
    icon: FileSearch,
  },
  {
    id: 4,
    title: "Secure",
    subtitle: "Save document",
    icon: ShieldCheck,
  },
];

export default function Stepper() {
  // Demo ke liye active step state rakhi hai, aap isay props se bhi handle kar sakte hain
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="h-full rounded-[20px] border border-[#27344d] bg-[#121827] p-5 sm:px-6 sm:py-5">
      
      {/* Container: Mobile pr vertical (flex-col), Tablet/Desktop pr horizontal (sm:flex-row) */}
      <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between sm:gap-0">

        {initialSteps.map((step, index) => {
          const Icon = step.icon;
          const isActive = step.id <= currentStep; // Behtareen UX ke liye purane steps bhi active line show karenge
          const isCurrent = step.id === currentStep;

          return (
            <div
              key={step.id}
              onClick={() => setCurrentStep(step.id)} // Clickable for preview
              className="relative flex flex-row items-start gap-4 sm:flex-1 sm:flex-col sm:items-center sm:gap-0 text-left sm:text-center group cursor-pointer select-none"
            >

              {/* CONNECTING LINES */}
              {index !== initialSteps.length - 1 && (
                <>
                  {/* Horizontal Line - Laptop/Tablet ke liye */}
                  <div className="hidden sm:block absolute left-1/2 top-[20px] h-[2px] w-full bg-[#1e293b]">
                    <div 
                      className={`h-full bg-cyan-500 transition-all duration-500 ${
                        step.id < currentStep ? "w-full" : "w-0"
                      }`}
                    />
                  </div>

                  {/* Vertical Line - Mobile View ke liye */}
                  <div className="sm:hidden absolute left-[20px] top-[40px] w-[2px] h-[calc(100%+24px)] bg-[#1e293b]">
                    <div 
                      className={`w-full bg-cyan-500 transition-all duration-500 ${
                        step.id < currentStep ? "h-full" : "h-0"
                      }`}
                    />
                  </div>
                </>
              )}

              {/* Indicator Group (Circle and Badge) */}
              <div className="relative flex flex-col items-center shrink-0">
                {/* Circle */}
                <div
                  className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 ${
                    isActive
                      ? "border-cyan-400 bg-cyan-500 shadow-[0_0_14px_rgba(0,212,255,.3)]"
                      : "border-[#44506a] bg-[#1a2235] group-hover:border-gray-400"
                  }`}
                >
                  <Icon
                    size={17}
                    className={isActive ? "text-white" : "text-gray-400 transition-colors group-hover:text-gray-200"}
                  />
                </div>

                {/* Step Number Badge - Positioned cleanly based on layout */}
                <span
                  className={`mt-2 hidden sm:flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold transition-colors duration-300 ${
                    isActive ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30" : "bg-[#263248] text-gray-400"
                  }`}
                >
                  {step.id}
                </span>
              </div>

              {/* Text Area */}
              <div className="sm:mt-2 min-w-0 flex-1 sm:flex-none">
                <div className="flex items-center gap-2 sm:justify-center">
                  {/* Mobile Only Step Number inline with title */}
                  <span className={`sm:hidden px-1.5 py-0.5 rounded text-[9px] font-bold ${
                    isActive ? "bg-cyan-500/20 text-cyan-400" : "bg-[#263248] text-gray-400"
                  }`}>
                    0{step.id}
                  </span>
                  <h4 className={`text-[13px] font-semibold transition-colors ${isActive ? "text-white" : "text-gray-400"}`}>
                    {step.title}
                  </h4>
                </div>

                <p className="mt-0.5 sm:mt-1 text-[10px] leading-relaxed text-gray-400 truncate sm:whitespace-normal">
                  {step.subtitle}
                </p>
              </div>

            </div>
          );
        })}

      </div>
    </div>
  );
}