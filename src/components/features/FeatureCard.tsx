import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-[#0b1220] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.20)]">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 opacity-0 transition duration-500 group-hover:opacity-100"></div>

      <div className="relative">

        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 transition-all duration-500 group-hover:bg-cyan-500 group-hover:text-white">

          {icon}

        </div>

        <h3 className="mb-3 text-2xl font-bold text-white">

          {title}

        </h3>

        <p className="leading-7 text-gray-400">

          {description}

        </p>

      </div>

    </div>
  );
}