"use client";

import Image from "next/image";
import { useState } from "react";
import { Loader2, RotateCcw, ArrowRight } from "lucide-react";

interface ImagePreviewProps {
  image: string | null;
  onRetake: () => void;
  // continueScan ab backend hit karega isliye isko asynchronous function banaya hai
  onContinue: (setLoading: (loading: boolean) => void) => Promise<void> | void;
}

export default function ImagePreview({
  image,
  onRetake,
  onContinue,
}: ImagePreviewProps) {
  const [loading, setLoading] = useState(false);

  if (!image) return null;

  return (
    <section className="mt-8">
      <div className="overflow-hidden rounded-3xl border border-cyan-500/20 bg-[#111827] p-6">
        <h2 className="mb-6 text-center text-2xl font-bold text-white">
          Captured Image
        </h2>

        <div className="overflow-hidden rounded-2xl">
          <Image
            src={image}
            alt="Captured"
            width={900}
            height={600}
            className="h-[450px] w-full object-cover"
          />
        </div>

        <div className="mt-8 flex justify-center gap-6">
          <button
            onClick={onRetake}
            disabled={loading}
            className="flex items-center gap-2 rounded-xl border border-cyan-500 px-8 py-3 text-cyan-400 transition hover:bg-cyan-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            <RotateCcw size={18} />
            Retake
          </button>

          <button
            onClick={() => onContinue(setLoading)}
            disabled={loading}
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 font-semibold text-white transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Scanning Card...
              </>
            ) : (
              <>
                Continue Scan
                <ArrowRight size={18} />
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}