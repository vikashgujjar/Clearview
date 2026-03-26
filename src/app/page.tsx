import type { Metadata } from 'next';
import Navbar from '@/components/common/Navbar';
import Hero from '@/components/sections/Hero';
import TrustBar from '@/components/sections/TrustBar';
import FeatureStrip from '@/components/sections/FeatureStrip';
import Services from '@/components/sections/Services';
import HowWeWork from '@/components/sections/HowWeWork';
import About from '@/components/sections/About';
import WhyUs from '@/components/sections/WhyUs';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Clearview Land Survey - Professional Surveying Services',
  description:
    'Precision boundary surveys, ALTA reports, topographic mapping, and construction layout services for residential and commercial properties.',
};

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustBar />
      <FeatureStrip />
      <Services />
      <HowWeWork />
      <WhyUs />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
