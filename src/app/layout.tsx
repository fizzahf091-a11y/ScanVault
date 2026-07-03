import "./globals.css";

import type { Metadata } from "next";

import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

export const metadata: Metadata = {
  title: "ScanVault",
  description: "AI Smart Lead Hunter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#030712] text-white">

        <Navbar />

        <main>
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}