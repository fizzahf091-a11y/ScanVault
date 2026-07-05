"use client";

import ScannerFrame from "./ScannerFrame";
import Controls from "./Controls";
import DocumentTypes from "./DocumentTypes";
import UploadCard from "./UploadCard";
import Stepper from "./Stepper";
import TipsButton from "./TipsButton";

export default function ScanContainer() {
  return (
    <section className="mx-auto w-full max-w-[1320px]">

      {/* Main Card */}
      {/* UPDATE: Border radius aur padding mobile par mazeed soft kar di hai */}
      <div className="rounded-[20px] sm:rounded-[28px] border border-[#24314a] bg-[#090f1d] p-4 sm:p-6 shadow-[0_0_30px_rgba(0,170,255,.08)]">

        {/* Header */}
        <div className="mb-5 flex items-center justify-between gap-2 sm:gap-4">
          <div className="min-w-0">
            {/* Mobile par text thora chota kiya taake wrap na ho */}
            <h1 className="text-[18px] sm:text-[26px] md:text-[30px] font-extrabold uppercase leading-tight text-white tracking-wide truncate">
              SCAN DOCUMENT
            </h1>
            <p className="mt-0.5 text-[10px] sm:text-sm text-gray-400 truncate">
              Capture or upload any document
            </p>
          </div>
          <div className="shrink-0">
            <TipsButton />
          </div>
        </div>

        {/* Main Layout Wrapper */}
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:gap-5">

          {/* LEFT SIDE */}
          <div className="flex-1 w-full min-w-0">
            <ScannerFrame />

            <p className="mt-3 text-center text-[11px] sm:text-xs text-gray-400">
              Place your document inside the frame
            </p>

            {/* Upload + Stepper Area */}
            <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-stretch sm:gap-5">
              <div className="w-full sm:w-[230px] md:w-[250px] sm:shrink-0">
                <UploadCard />
              </div>
              <div className="flex-1 w-full">
                <Stepper />
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="w-full shrink-0 flex flex-col gap-4 md:grid md:grid-cols-2 lg:block lg:w-[280px] lg:space-y-4 lg:gap-0">
            <div className="w-full">
              <Controls />
            </div>
            <div className="w-full">
              <DocumentTypes />
            </div>
          </aside>

        </div>

      </div>

    </section>
  );
}