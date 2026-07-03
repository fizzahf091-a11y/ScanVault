// import Navbar from "@/components/common/Navbar";
import Hero from "@/components/landing/hero/Hero";
import Features from "@/components/features/Features";
import HowItWorks from "@/components/howitworks/HowItWorks";
// import CTA from "@/components/landing/CTA";
// import Footer from "@/components/common/Footer";

export default function Home() {
  return (
    <main className="bg-[#030712] min-h-screen text-white">
      {/* <Navbar /> */}
      <Hero />
      <Features />
      <HowItWorks />
      {/* <CTA /> */}
      {/* <Footer /> */}
    </main>
  );
}