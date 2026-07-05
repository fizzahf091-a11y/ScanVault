import StepCard from "./StepCard";
import { steps } from "./stepsData";
import HeroBackground from "../landing/hero/HeroBackground";

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      // py-18 ko mobile par py-16 aur desktop par sm:py-24 kiya taakay sections ka gap consistent rahe
      className="relative overflow-hidden bg-[#030712] py-16 sm:py-24"
    >
      {/* Background */}
      <HeroBackground />

      {/* Main Container */}
      {/* px-6 ko px-4 sm:px-6 kiya taakay choti screens par text edges ko touch na kare */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">

        {/* Heading Container */}
        {/* mb-16 ko mobile par mb-12 kiya taakay cards ke beech ka faasla responsive lage */}
        <div className="mb-12 text-center md:mb-16">

          <span className="inline-block rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold text-cyan-400 sm:px-5 sm:py-2 sm:text-sm">
            HOW IT WORKS
          </span>

          {/* Heading Typography */}
          {/* text-5xl mobile screen par boht bara lagta hai, isay text-3xl sm:text-4xl md:text-5xl kiya */}
          <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:mt-6 md:text-5xl">
            Scan Cards In
            <span className="block text-cyan-400">
              Three Simple Steps
            </span>
          </h2>

          {/* Subtext Paragraph */}
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-400 sm:mt-6 sm:text-base sm:leading-7 md:text-lg md:leading-8">
            Capture business cards instantly, extract contact information
            using AI OCR, and save everything securely to your dashboard.
          </p>

        </div>

        {/* Steps Grid */}
        {/* - grid-cols-1: Mobile par teeno steps vertical/stack ho jayenge.
            - md:grid-cols-3: Tablet aur Desktop par wapis side-by-side (3 columns) ho jayenge.
            - gap-6 se spaces mobile par clean lagengi. */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              // Icon size ko responsive templates ke mutabiq manage kiya
              icon={<step.icon size={30} />}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
}