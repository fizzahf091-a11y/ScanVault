export default function HeroBackground() {
  return (
    <>
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
          linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px)
        `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Blue Glow */}
      <div className="absolute left-0 top-40 h-96 w-96 rounded-full bg-cyan-500/20 blur-[150px]" />

      {/* Purple Glow */}
      <div className="absolute right-0 bottom-20 h-96 w-96 rounded-full bg-blue-600/20 blur-[150px]" />
    </>
  );
}