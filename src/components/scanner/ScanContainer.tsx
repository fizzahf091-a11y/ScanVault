"use client";

import ScannerFrame from "./ScannerFrame";
import Controls from "./Controls";
import DocumentTypes from "./DocumentTypes";
import UploadCard from "./UploadCard";
import Stepper from "./Stepper";
import TipsButton from "./TipsButton";

export default function ScanContainer() {
  return (
    <section className="mx-auto w-full max-w-[1320px] px-3 py-6 sm:px-6 sm:py-12 lg:px-8 lg:py-20">

      {/* Main Card */}
      <div className="rounded-[20px] sm:rounded-[28px] border border-[#24314a] bg-[#090f1d] p-4 sm:p-6 shadow-[0_0_30px_rgba(0,170,255,.08)]">

        {/* Header */}
        <div className="mb-6 flex items-start justify-between gap-4">

          <div>
            <h1 className="text-[22px] sm:text-[26px] md:text-[30px] font-extrabold uppercase leading-tight text-white tracking-wide">
              SCAN DOCUMENT
            </h1>

            <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-400">
              Capture or upload any document
            </p>
          </div>

          <div className="shrink-0">
            <TipsButton />
          </div>

        </div>

        {/* Main Layout Wrapper */}
        {/* Mobile/Tablet: flex-col, Large Desktop: flex-row */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-5">

          {/* LEFT SIDE (Main Content Area) */}
          <div className="flex-1 w-full min-w-0">

            <div className="w-full overflow-hidden rounded-xl">
              <ScannerFrame />
            </div>

            <p className="mt-4 text-center text-xs sm:text-sm text-gray-400">
              Place your document inside the frame
            </p>

            {/* Upload + Stepper Area */}
            {/* Mobile: flex-col, sm and up: flex-row */}
            <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-stretch sm:gap-5">

              <div className="w-full sm:w-[230px] md:w-[250px] sm:shrink-0">
                <UploadCard />
              </div>

              <div className="flex-1 w-full">
                <Stepper />
              </div>

            </div>

          </div>

          {/* RIGHT SIDEBAR */}
          {/* Mobile: Full width stack, Tablet: Grid with 2 columns, Desktop: Sidebar fix width */}
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