"use client";

import ScanContainer from "@/components/scanner/ScanContainer";

export default function ScanPage() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#050914] flex flex-col justify-start">

      {/* Background Glows */}
      <div className="absolute -top-32 left-1/2 h-[350px] w-[350px] sm:h-[700px] sm:w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[100px] sm:blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-[250px] w-[250px] sm:h-[500px] sm:w-[500px] rounded-full bg-blue-500/10 blur-[90px] sm:blur-[160px] pointer-events-none" />

      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.10) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.10) 1px, transparent 1px)
          `,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Page Content Container */}
      {/* UPDATE: px-4 lagaya taake edges se space mile, aur pt-28 se navbar se gap barh jaye */}
      <div className="relative z-10 w-full flex-1 px-4 pt-28 pb-10 sm:px-6 sm:pt-32 sm:pb-12 lg:px-8">
        <ScanContainer />
      </div>

    </main>
  );
}