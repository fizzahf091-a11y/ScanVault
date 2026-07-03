import {
  CreditCard,
  IdCard,
  BookText,
  ShieldCheck,
  Zap,
  Cloud,
} from "lucide-react";

export const documentTypes = [
  {
    id: "business",
    title: "Business Card",
    description: "Scan contact information from business cards",
    icon: CreditCard,
  },
  {
    id: "cnic",
    title: "CNIC Card",
    description: "Scan identity information from CNIC",
    icon: IdCard,
  },
  {
    id: "passport",
    title: "Passport",
    description: "Scan travel document information",
    icon: BookText,
  },
];

export const progressSteps = [
  {
    id: 1,
    title: "Position",
    description: "Place document in frame",
  },
  {
    id: 2,
    title: "Capture",
    description: "Capture the document",
  },
  {
    id: 3,
    title: "Extract",
    description: "AI extracts information",
  },
  {
    id: 4,
    title: "Save",
    description: "Save to your records",
  },
];

export const features = [
  {
    title: "AI Powered OCR",
    description: "Extract information with 99.9% accuracy.",
    icon: Zap,
  },
  {
    title: "Secure & Private",
    description: "Your data is encrypted and protected.",
    icon: ShieldCheck,
  },
  {
    title: "Lightning Fast",
    description: "Scan and extract within seconds.",
    icon: Zap,
  },
  {
    title: "Cloud Sync",
    description: "Access your records anywhere.",
    icon: Cloud,
  },
];

export const businessCardData = [
  {
    label: "Full Name",
    value: "Alex Morgan",
  },
  {
    label: "Designation",
    value: "Sales Manager",
  },
  {
    label: "Company",
    value: "ScanVault",
  },
  {
    label: "Phone",
    value: "+1 (555) 123-4567",
  },
  {
    label: "Email",
    value: "alex@scanvault.com",
  },
  {
    label: "Website",
    value: "www.scanvault.com",
  },
  {
    label: "Address",
    value: "New York, USA",
  },
];

export const cnicData = [
  {
    label: "Full Name",
    value: "Muhammad Ali",
  },
  {
    label: "Father Name",
    value: "Ahmad Ali",
  },
  {
    label: "CNIC Number",
    value: "35202-1234567-1",
  },
  {
    label: "Date of Birth",
    value: "15 Aug 1998",
  },
  {
    label: "Gender",
    value: "Male",
  },
  {
    label: "Address",
    value: "Lahore, Pakistan",
  },
];

export const passportData = [
  {
    label: "Full Name",
    value: "John Smith",
  },
  {
    label: "Passport No",
    value: "PA1234567",
  },
  {
    label: "Nationality",
    value: "United States",
  },
  {
    label: "Country",
    value: "USA",
  },
  {
    label: "Issue Date",
    value: "10 Jan 2025",
  },
  {
    label: "Expiry Date",
    value: "10 Jan 2035",
  },
];