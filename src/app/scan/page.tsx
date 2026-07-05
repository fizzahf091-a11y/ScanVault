import ScanContainer from "@/components/scanner/ScanContainer";

export default function ScanPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050914]">

      {/* Background Glow */}
      <div className="absolute -top-32 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[160px]" />

      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-cyan-500/5 blur-[150px]" />

      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.10) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.10) 1px, transparent 1px)
          `,
          backgroundSize: "36px 36px",
        }}
      />

      {/* Top Gradient */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-cyan-500/5 to-transparent" />

      {/* Page Content */}
      <div className="relative z-10 pb-10 pt-8">

        <ScanContainer />

      </div>

    </main>
  );
}