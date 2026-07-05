import {
  ScanSearch,
  BrainCircuit,
  Database,
  ShieldCheck,
  FileText,
  BarChart3,
} from "lucide-react";

// TypeScript structure define kar diya taakay Next.js build me koi error na aaye
interface FeatureData {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  description: string;
}

export const features: FeatureData[] = [
  {
    icon: ScanSearch,
    title: "AI OCR Scanner",
    description:
      "Instantly scan business cards with advanced AI OCR technology and achieve highly accurate text recognition.",
  },
  {
    icon: BrainCircuit,
    title: "Smart AI Extraction",
    description:
      "Automatically detect names, phone numbers, email addresses, websites and company details.",
  },
  {
    icon: Database,
    title: "Secure Storage",
    description:
      "Store every scanned lead securely in your cloud database with instant access anytime.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description:
      "Your business data remains encrypted and protected using enterprise-grade security.",
  },
  {
    icon: FileText,
    title: "Export Records",
    description:
      "Download contacts in CSV, Excel or integrate directly with your CRM platform.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Monitor scans, leads, conversions and business performance through a beautiful dashboard.",
  },
];