import type { Metadata } from 'next';
import Navbar from '@/components/common/Navbar';
import InternalHero from '@/components/sections/InternalHero';
import WhyUs from '@/components/sections/WhyUs';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Why Choose Clearview | Accuracy & Reliability',
  description:
    'Licensed surveyors, modern technology, and fast turnaround times. Discover why Clearview is the trusted choice for land surveying projects.',
};

export default function WhyUsPage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <InternalHero
        title="Why Choose Clearview Land Survey?"
        subtitle="Accuracy isn't just a goal — it's our baseline. We provide the expertise and reliability your projects deserve."
        breadcrumb="Why Choose Us"
      />
      <WhyUs hideHeader={true} variant="page" whiteBg={true} />
      <Contact />
      <Footer />
    </main>
  );
}
