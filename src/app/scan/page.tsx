"use client";

import ScanContainer from "@/components/scanner/ScanContainer";

export default function ScanPage() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#050914] flex flex-col justify-start">

      {/* Background Glows - Scaled down dynamically on mobile to prevent canvas distortion */}
      <div className="absolute -top-32 left-1/2 h-[350px] w-[350px] sm:h-[700px] sm:w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[100px] sm:blur-[180px] pointer-events-none" />

      <div className="absolute bottom-0 right-0 h-[250px] w-[250px] sm:h-[500px] sm:w-[500px] rounded-full bg-blue-500/10 blur-[90px] sm:blur-[160px] pointer-events-none" />

      <div className="absolute bottom-0 left-0 h-[200px] w-[200px] sm:h-[400px] sm:w-[400px] rounded-full bg-cyan-500/5 blur-[80px] sm:blur-[150px] pointer-events-none" />

      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.04] sm:opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.10) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.10) 1px, transparent 1px)
          `,
          backgroundSize: "24px 24px sm:backgroundSize: 36px 36px",
        }}
      />

      {/* Top Gradient Overlay */}
      <div className="absolute inset-x-0 top-0 h-24 sm:h-40 bg-gradient-to-b from-cyan-500/5 to-transparent pointer-events-none" />

      {/* Page Content Container */}
      {/* Mobile par container sides touch nahi karega aur responsive spaces handle karega */}
      <div className="relative z-10 w-full flex-1 px-3 py-4 sm:px-6 sm:py-8 lg:px-8">
        
        <ScanContainer />

      </div>

    </main>
  );
}