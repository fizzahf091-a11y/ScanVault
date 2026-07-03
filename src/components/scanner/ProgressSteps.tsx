"use client";

import { Check } from "lucide-react";
import { progressSteps } from "@/constants/constants";

// 1. TypeScript Interface taake type checking errors mukammal khatam ho jayein
interface ProgressStepsProps {
  currentStep: number;
}

export default function ProgressSteps({ currentStep }: ProgressStepsProps) {
  return (
    <section className="my-12">
      <div className="rounded-3xl border border-slate-800 bg-[#0B1120] p-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {progressSteps.map((step, index) => {
            const isCompleted = step.id < currentStep;
            const isActive = step.id === currentStep;

            return (
              <div
                key={step.id}
                className="relative flex flex-col items-center text-center"
              >
                {/* Connecting Line between steps */}
                {index !== progressSteps.length - 1 && (
                  <div className="absolute left-[58%] top-6 hidden h-[2px] w-full bg-slate-800 md:block">
                    {/* Line builds progression color dynamically */}
                    <div 
                      className={`h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-500 ${
                        isCompleted ? "w-full" : isActive ? "w-1/2" : "w-0"
                      }`}
                    />
                  </div>
                )}

                {/* Step Circle Identifier */}
                <div
                  className={`z-10 flex h-14 w-14 items-center justify-center rounded-full text-sm font-bold transition-all duration-300 ${
                    isCompleted
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20"
                      : isActive
                      ? "border-2 border-cyan-400 bg-[#111827] text-cyan-400 ring-4 ring-cyan-500/10"
                      : "border-2 border-slate-700 bg-slate-900 text-slate-500"
                  }`}
                >
                  {isCompleted ? (
                    <Check size={20} />
                  ) : (
                    <span>{step.id}</span>
                  )}
                </div>

                {/* Title */}
                <h3 
                  className={`mt-5 text-lg font-semibold transition-colors duration-300 ${
                    isActive || isCompleted ? "text-white" : "text-slate-500"
                  }`}
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm leading-6 text-gray-400">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}