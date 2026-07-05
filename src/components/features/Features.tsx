import FeatureCard from "./FeatureCard";
import { features } from "./featuresData";
import HeroBackground from "../landing/hero/HeroBackground";

export default function Features() {
  return (
    <section
      id="features"
      // py-15 ko dynamic padding di hai taakay mobile par py-16 aur desktop par sm:py-24 ho sake
      className="relative overflow-hidden bg-[#030712] py-16 sm:py-24"
    >
      {/* Same Background as Hero */}
      <HeroBackground />

      {/* Main Container */}
      {/* px-4 se mobile par horizontal space secure ho jayegi aur sm:px-6 se bari screens par spacing handle hogi */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">

        {/* Heading Container */}
        {/* mb-12 mobile ke liye aur md:mb-20 bari screens ke liye taakay gap zyaada ajeeb na lage */}
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-20">

          <span className="inline-block rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold text-cyan-400 sm:px-5 sm:py-2 sm:text-sm">
            FEATURES
          </span>

          {/* Heading Typography */}
          {/* text-3xl mobile par, text-4xl tablet par aur md:text-5xl desktop par */}
          <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:mt-6 md:text-5xl">
            Everything You Need To
            <span className="block text-cyan-400">
              Capture Smart Leads
            </span>
          </h2>

          {/* Subtext Paragraph */}
          <p className="mt-4 text-sm leading-6 text-gray-400 sm:text-base sm:leading-7 md:mt-6 md:text-lg md:leading-8">
            ScanVault helps businesses scan business cards,
            extract contact information using AI OCR,
            organize records and securely manage leads
            from one powerful dashboard.
          </p>

        </div>

        {/* Feature Cards Grid */}
        {/* - grid-cols-1: Default mobile par 1 card aik line me aayega.
            - md:grid-cols-2: Tablet size par 2 cards amne-samne.
            - lg:grid-cols-3: Large screens/Desktop par 3 cards amne-samne.
            - gap-6 se spacing optimized rehti hai mobile aur desktop dono par. */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              // Icon size ko responsive karne ke liye `size={26}` mobile ke liye behtar hai aur responsive wrapper design ko match karega
              icon={<feature.icon size={26} />}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
}