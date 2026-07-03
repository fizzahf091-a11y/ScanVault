"use client";

import { features } from "@/constants/constants"

export default function FeatureCards() {
  return (
    <section className="mt-14 mb-10">

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

        {features.map((feature) => {

          const Icon = feature.icon;

          return (

            <div
              key={feature.title}
              className="group rounded-3xl border border-slate-800 bg-[#0B1120] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]"
            >

              {/* Icon */}

              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 transition group-hover:bg-cyan-500 group-hover:text-white">

                <Icon size={30} />

              </div>

              {/* Title */}

              <h3 className="mb-3 text-xl font-semibold text-white">
                {feature.title}
              </h3>

              {/* Description */}

              <p className="text-sm leading-7 text-gray-400">
                {feature.description}
              </p>

            </div>

          );
        })}

      </div>

    </section>
  );
}