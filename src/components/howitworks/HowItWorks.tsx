import StepCard from "./StepCard";
import { steps } from "./stepsData";
import HeroBackground from "../landing/hero/HeroBackground";

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-[#030712] py-18"
    >
      {/* Background */}
      <HeroBackground />

      <div className="relative z-10 mx-auto max-w-6xl px-6">

        {/* Heading */}
        <div className="mb-16 text-center">

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-400">
            HOW IT WORKS
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Scan Cards In
            <span className="block text-cyan-400">
              Three Simple Steps
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Capture business cards instantly, extract contact information
            using AI OCR, and save everything securely to your dashboard.
          </p>

        </div>

        {/* Steps */}
        <div className="grid gap-8 md:grid-cols-3">

          {steps.map((step, index) => (
            <StepCard
              key={index}
              icon={<step.icon size={34} />}
              title={step.title}
              description={step.description}
            />
          ))}

        </div>

      </div>
    </section>
  );
}