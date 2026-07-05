export default function HeroBackground() {
  return (
    <>
      {/* Grid */}
      <div
        // Dono classNamees ko yahan ek hi jagah combine kar diya hai
        className="absolute inset-0 opacity-15 sm:opacity-20 [background-size:40px_40px] sm:[background-size:60px_60px]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)
          `,
        }}
      />

      {/* Blue Glow (Top Left) */}
      <div className="absolute -left-10 top-20 h-64 w-64 -translate-x-1/4 rounded-full bg-cyan-500/15 blur-[100px] sm:top-40 sm:h-96 sm:w-96 sm:translate-x-0 sm:bg-cyan-500/20 sm:blur-[150px]" />

      {/* Purple Glow (Bottom Right) */}
      <div className="absolute -right-10 bottom-10 h-64 w-64 translate-x-1/4 rounded-full bg-blue-600/15 blur-[100px] sm:bottom-20 sm:h-96 sm:w-96 sm:translate-x-0 sm:bg-blue-600/20 sm:blur-[150px]" />
    </>
  );
}