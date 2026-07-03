import FeatureCard from "./FeatureCard";
import { features } from "./featuresData";
import HeroBackground from "../landing/hero/HeroBackground";

export default function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-[#030712] py-15"
    >
      {/* Same Background as Hero */}
      <HeroBackground />

      <div className="relative z-10 mx-auto max-w-6xl px-6">

        {/* Heading */}
        <div className="mx-auto mb-20 max-w-3xl text-center">

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-400">
            FEATURES
          </span>

          <h2 className="mt-6 text-5xl font-bold leading-tight text-white">
            Everything You Need To
            <span className="block text-cyan-400">
              Capture Smart Leads
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            ScanVault helps businesses scan business cards,
            extract contact information using AI OCR,
            organize records and securely manage leads
            from one powerful dashboard.
          </p>

        </div>

        {/* Feature Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={<feature.icon size={30} />}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
}