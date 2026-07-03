import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroPreview from "./HeroPreview";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#030712] pt-18">

      {/* Background */}
      <HeroBackground />

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-center gap-12 px-0 py-20 lg:flex-row lg:gap-20 lg:px-10">

        {/* Left Side */}
        <div className="flex-1">
          <HeroContent />
        </div>

        {/* Right Side */}
        <div className="flex flex-1 justify-center lg:justify-end">
          <HeroPreview />
        </div>

      </div>

    </section>
  );
}