"use client";

import ScannerFrame from "./ScannerFrame";
import Controls from "./Controls";
import DocumentTypes from "./DocumentTypes";
import UploadCard from "./UploadCard";
import Stepper from "./Stepper";
import TipsButton from "./TipsButton";

export default function ScanContainer() {
  return (
    <section className="mx-auto w-full max-w-[1320px] px-5 py-8">

      {/* Main Card */}
      <div className="rounded-[28px] border border-[#24314a] bg-[#090f1d] p-6 shadow-[0_0_30px_rgba(0,170,255,.08)]">

        {/* Header */}
        <div className="mb-6 flex items-start justify-between">

          <div>
            <h1 className="text-[42px] font-extrabold uppercase leading-none text-white">
              SCAN DOCUMENT
            </h1>

            <p className="mt-2 text-sm text-gray-400">
              Capture or upload any document
            </p>
          </div>

          <TipsButton />

        </div>

        {/* Main Layout */}
        <div className="flex gap-5 items-start">

          {/* LEFT SIDE */}
          <div className="flex-1">

            <ScannerFrame />

            <p className="mt-4 text-center text-sm text-gray-400">
              Place your document inside the frame
            </p>

            {/* Upload + Stepper */}
            <div className="mt-5 flex gap-5 items-stretch">

              <div className="w-[250px] shrink-0">
                <UploadCard />
              </div>

              <div className="flex-1">
                <Stepper />
              </div>

            </div>

          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="w-[275px] shrink-0 space-y-4">

            <Controls />

            <DocumentTypes />

          </aside>

        </div>

      </div>

    </section>
  );
}