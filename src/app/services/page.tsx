import type { Metadata } from 'next';
import Navbar from '@/components/common/Navbar';
import InternalHero from '@/components/sections/InternalHero';
import Services from '@/components/sections/Services';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Our Services | Clearview Land Survey',
  description:
    'Comprehensive land surveying solutions including ALTA surveys, boundary surveys, as-built reports, and construction layout.',
};

export default function ServicesPage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <InternalHero
        title="Land Surveying Professional Services"
        subtitle="Accuracy and reliability in every measurement. Our licensed surveyors provide comprehensive data for residential, commercial, and construction projects."
      />
      <Services hideHeader={true} variant="page" />
      <Contact />
      <Footer />
    </main>
  );
}
