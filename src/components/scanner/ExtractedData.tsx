"use client";

// TypeScript Interface declaration parent props sync karne ke liye
interface ExtractedDataProps {
  documentType: "business" | "cnic" | "passport";
  data: {
    fullName: string;
    designation: string;
    company: string;
    phone: string;
    email: string;
    website: string;
    address: string;
  };
  setData: React.Dispatch<React.SetStateAction<{
    fullName: string;
    designation: string;
    company: string;
    phone: string;
    email: string;
    website: string;
    address: string;
  }>>;
  isScanning: boolean;
}

export default function ExtractedData({ 
  documentType, 
  data, 
  setData, 
  isScanning 
}: ExtractedDataProps) {

  // Dynamic keys create kar rahe hain jo inputs ke name attributes se match karein
  const fields = [
    { label: "Full Name", key: "fullName", value: data.fullName },
    { label: documentType === "cnic" ? "Father Name / Details" : "Designation", key: "designation", value: data.designation },
    { label: "Company / Institution", key: "company", value: data.company },
    { label: documentType === "cnic" ? "Identity Number" : "Phone", key: "phone", value: data.phone },
    { label: "Email", key: "email", value: data.email },
    { label: "Website", key: "website", value: data.website },
    { label: "Address", key: "address", value: data.address },
  ];

  const handleInputChange = (key: string, val: string) => {
    setData((prev) => ({
      ...prev,
      [key]: val,
    }));
  };

  return (
    <section className="mt-12">
      <div className="rounded-3xl border border-slate-800 bg-[#0B1120] p-8 relative overflow-hidden">
        
        {/* Loading overlay layer layout visibility filter */}
        {isScanning && (
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-10 transition-all">
            <div className="text-cyan-400 font-medium flex items-center gap-3">
              <svg className="animate-spin h-5 w-5 text-cyan-400" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Updating Form Real-time...
            </div>
          </div>
        )}

        {/* Heading */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white">
            AI Extracted Information
          </h2>
          <p className="mt-2 text-gray-400">
            Review the extracted information before saving.
          </p>
        </div>

        {/* Dynamic Fields Mapping Panel Layout */}
        <div className="grid gap-6 md:grid-cols-2">
          {fields.map((item) => (
            <div key={item.key}>
              <label className="mb-2 block text-sm font-medium text-gray-400">
                {item.label}
              </label>

              <input
                type="text"
                value={item.value} // defaultValue se value par shift kiya taake react control kare
                onChange={(e) => handleInputChange(item.key, e.target.value)}
                placeholder={`Waiting for scan...`}
                className="w-full rounded-xl border border-slate-700 bg-[#111827] px-4 py-3 text-white outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
              />
            </div>
          ))}
        </div>

        {/* Save Execution Button Action */}
        <div className="mt-10 flex justify-end">
          <button 
            onClick={() => alert("Data saved successfully inside ScanVault!")}
            className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 font-semibold text-white transition duration-300 hover:scale-105"
          >
            Save Record
          </button>
        </div>
      </div>
    </section>
  );
}