import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Architecture from "@/components/sections/Architecture";
import Features from "@/components/sections/Features";
import QuickStart from "@/components/sections/QuickStart";
import HowItWorks from "@/components/sections/HowItWorks";
import Stats from "@/components/sections/Stats";
import OpenSource from "@/components/sections/OpenSource";
import WhatsNew from "@/components/sections/WhatsNew";
import Footer from "@/components/sections/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-900">
      <Navbar />
      <Hero />
      <Problem />
      <Architecture />
      <Features />
      <HowItWorks />
      <QuickStart />
      <Stats />
      <WhatsNew />
      <OpenSource />
      <Footer />
    </main>
  );
}
