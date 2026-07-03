"use client";

import { documentTypes } from "@/constants/constants";

interface DocumentSelectorProps {
  selectedType: "business" | "cnic" | "passport";
  onSelectType: (type: "business" | "cnic" | "passport") => void;
}

export default function DocumentSelector({ selectedType, onSelectType }: DocumentSelectorProps) {
  return (
    <section className="mb-10">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white">
          Select Document Type
        </h2>
        <p className="mt-2 text-gray-400">
          Choose the document you want to scan.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {documentTypes.map((item) => {
          const Icon = item.icon;
          
          // Yahan explicit string check laga kar state matching ensure kar rahe hain
          const itemId = item.id as "business" | "cnic" | "passport";

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                console.log("Changing type to:", itemId); // Debugging ke liye taake console me check ho sake
                onSelectType(itemId);
              }}
              className={`group rounded-3xl border p-7 text-left transition-all duration-300 ${
                selectedType === itemId
                  ? "border-cyan-400 bg-cyan-500/10 shadow-[0_0_25px_rgba(34,211,238,.25)]"
                  : "border-slate-800 bg-[#0b1120] hover:border-cyan-500/50 hover:bg-[#111827]"
              }`}
            >
              <div
                className={`mb-5 flex h-16 w-16 items-center justify-center rounded-2xl ${
                  selectedType === itemId
                    ? "bg-cyan-500 text-white"
                    : "bg-cyan-500/10 text-cyan-400"
                }`}
              >
                <Icon size={32} />
              </div>

              <h3 className="text-xl font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-400">
                {item.description}
              </p>
            </button>
          );
        })}
      </div>
    </section>
  );
}