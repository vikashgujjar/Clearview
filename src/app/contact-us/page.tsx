import type { Metadata } from 'next';
import Navbar from '@/components/common/Navbar';
import InternalHero from '@/components/sections/InternalHero';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Contact Clearview | Request a Survey Quote',
  description:
    'Ready to start your project? Contact Clearview Land Survey today for a transparent, detailed quote within 1 hour.',
};

export default function ContactUsPage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <InternalHero
        title="Request a Survey Quote Today"
        subtitle="Our team is ready to provide the precision data your project needs. Reach out for a detailed, transparent estimate within 1 hour."
        breadcrumb="Contact Us"
      />
      <Contact whiteBg={true} />
      <Footer />
    </main>
  );
}
