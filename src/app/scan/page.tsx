"use client";

import { useState } from "react";
import Tesseract from "tesseract.js";
import DocumentSelector from "@/components/scanner/DocumentSelector";
import CameraPreview from "@/components/scanner/CameraPreview";
import ProgressSteps from "@/components/scanner/ProgressSteps";
import ExtractedData from "@/components/scanner/ExtractedData";
import FeatureCards from "@/components/scanner/FeatureCards";

export default function ScanPage() {
  const [docType, setDocType] = useState<"business" | "cnic" | "passport">("cnic");
  const [isScanning, setIsScanning] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    fullName: "",
    designation: "",
    company: "",
    phone: "",
    email: "",
    website: "",
    address: "",
  });

  // ✨ CLIENT-SIDE OCR PROCESSING (No Backend Hangs!)
  const handleOcrProcess = async (base64Image: string) => {
    setIsScanning(true);
    setCurrentStep(3); // OCR Stage

    try {
      // Browser environment me direct Tesseract call
      const ocrResult = await Tesseract.recognize(
        base64Image,
        "eng",
        {
          logger: (m) => console.log(`OCR Progress: ${Math.round(m.progress * 100)}%`),
        }
      );

      const text = ocrResult.data?.text;

      if (!text || text.trim().length === 0) {
        throw new Error("Card se koi text detect nahi hua. Dobara clear picture lein!");
      }

      console.log("Extracted Text Raw Data:\n", text);

      // Text processing lines rules
      const lines = text.split("\n").map((l) => l.trim()).filter(Boolean);
      
      const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
      const phoneRegex = /(?:\+?\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4,7}/;
      const urlRegex = /(www\.[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})|([a-zA-Z0-9.-]+\.com)/i;

      let email = lines.find((l) => emailRegex.test(l)) || "Not Detected";
      let phone = lines.find((l) => phoneRegex.test(l)) || "Not Detected";
      let website = lines.find((l) => urlRegex.test(l)) || "Not Detected";

      let fullName = "Not Detected";
      let designation = "Not Detected";
      let company = "Not Detected";
      let address = "Not Detected";

      if (docType === "business") {
        fullName = lines[0] || "Not Detected";
        designation = lines[1] || "Not Detected";
        company = lines[2] || "Not Detected";

        const filteredAddress = lines.filter(
          (l) => l !== fullName && l !== designation && l !== company && !emailRegex.test(l) && !phoneRegex.test(l) && !urlRegex.test(l)
        );
        address = filteredAddress.join(", ") || "Not Detected";
      } else {
        fullName = lines.find((l) => l.toLowerCase().includes("name"))?.replace(/name/i, "").trim() || lines[0] || "Not Detected";
        designation = docType === "cnic" ? "Identity Document" : "Passport Document";
        company = docType === "cnic" ? "NADRA" : "Immigration Office";
        address = lines.find((l) => l.toLowerCase().includes("address")) || lines[lines.length - 1] || "Not Detected";
      }

      // Updating global state parameters
      setFormData({
        fullName,
        designation,
        company,
        phone: phone !== "Not Detected" ? phone.match(phoneRegex)?.[0] || phone : "Not Detected",
        email: email !== "Not Detected" ? email.match(emailRegex)?.[0] || email : "Not Detected",
        website: website !== "Not Detected" ? website.match(urlRegex)?.[0] || website : "Not Detected",
        address,
      });

      setCurrentStep(4); // Success State
    } catch (error: any) {
      console.error("Browser OCR Runtime Error:", error);
      alert(error.message || "Scanning Failed");
      setCurrentStep(2); // Back to Preview
    } finally {
      setIsScanning(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#030712] py-10">
      <section className="relative overflow-hidden border-b border-cyan-500/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#0b1d36,transparent_70%)] opacity-70" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 text-center">
          <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-400">
            AI Powered OCR Scanner
          </span>
          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-white md:text-6xl">
            Scan Business Cards,
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              CNIC & Passport
            </span>
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 space-y-12">
        <DocumentSelector selectedType={docType} onSelectType={setDocType} />

        <CameraPreview 
          onCaptureScan={handleOcrProcess} 
          isScanning={isScanning} 
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />

        <ProgressSteps currentStep={currentStep} />

        <ExtractedData 
          documentType={docType} 
          data={formData} 
          setData={setFormData}
          isScanning={isScanning}
        />

        <FeatureCards />
      </section>
    </main>
  );
}