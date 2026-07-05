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
    // - `p-6 sm:p-8` se mobile par padding thodi kam hogi taakay content tight aur clean lage.
    // - `hover:-translate-y-2` ko `sm:hover:-translate-y-2` kiya hai taakay mobile par touch karne se card upar ko na bhage.
    <div className="group relative overflow-hidden rounded-[24px] border border-cyan-500/20 bg-[#0b1220] p-6 transition-all duration-500 sm:rounded-3xl sm:p-8 sm:hover:-translate-y-2 sm:hover:border-cyan-400 sm:hover:shadow-[0_0_40px_rgba(34,211,238,0.20)]">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 opacity-0 transition duration-500 group-hover:opacity-100"></div>

      <div className="relative">

        {/* Icon Container */}
        {/* - Mobile par icon size `h-14 w-14` aur desktop par `sm:h-16 sm:w-16` kiya hai */}
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 transition-all duration-500 group-hover:bg-cyan-500 group-hover:text-white sm:mb-6 sm:h-16 sm:w-16">
          {icon}
        </div>

        {/* Title */}
        {/* - Mobile screen ke liye `text-xl` aur desktop ke liye `sm:text-2xl` */}
        <h3 className="mb-2 text-xl font-bold text-white sm:mb-3 sm:text-2xl">
          {title}
        </h3>

        {/* Description */}
        {/* - Text ko mazeed readable banane ke liye `text-sm sm:text-base` kiya hai */}
        <p className="text-sm leading-6 text-gray-400 sm:text-base sm:leading-7">
          {description}
        </p>

      </div>

    </div>
  );
}