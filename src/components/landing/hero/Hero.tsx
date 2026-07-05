import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroPreview from "./HeroPreview";

export default function Hero() {
  return (
    // Mobile par pt-20 ya pt-24 behtar rahega kyunki navbar fixed hai, taakay content chhup na jaye
    <section className="relative min-h-screen overflow-hidden bg-[#030712] pt-24 sm:pt-28 lg:pt-32">

      {/* Background */}
      <HeroBackground />

      {/* Main Content */}
      {/* - flex-col se mobile par text pehle aayega aur image/preview neeche.
        - lg:flex-row se desktop par side-by-side ho jayega.
        - px-4 aur py-12 se mobile par tight space maintain hogi aur desktop par px-10 py-20 ho jayegi.
      */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-center gap-10 px-4 py-12 sm:px-6 lg:flex-row lg:gap-20 lg:px-10 lg:py-20">

        {/* Left Side (Text content) */}
        {/* Mobile par text center align hona chahiye agar `HeroContent` ke andar main styling centered na ho, isliye width full rakhi hai */}
        <div className="w-full flex-1 text-center lg:text-left">
          <HeroContent />
        </div>

        {/* Right Side (Image/Preview) */}
        <div className="w-full flex-1 flex justify-center lg:justify-end">
          <HeroPreview />
        </div>

      </div>

      {/* Note: Yaad rakhein ke actual text headings ka size (`text-4xl` se `text-6xl`) aur images ka size aapko `HeroContent` aur `HeroPreview` ke andar responsive karna hoga! */}
    </section>
  );
}