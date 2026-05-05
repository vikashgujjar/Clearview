'use client';

import Navbar from '@/components/common/Navbar';
import InternalHero from '@/components/sections/InternalHero';
import Footer from '@/components/sections/Footer';
import '@/styles/globals.css';
import Image from 'next/image';
import { FileText, Eye, Download } from 'lucide-react';

export default function UniqueSurveySamplePage() {

  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <InternalHero
        title="Unique Survey Sample"
        subtitle="Exploring the ongoing utility and importance of professional survey documents for new homeowners."
        breadcrumb="Survey Sample"
      />

      {/* PDF Sample Trigger Section */}
      <div className="max-w-7xl mx-auto px-4 text-center mt-[-100px]">
        <a
          href="/POINTOFINTEREST.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block group reveal"
        >
          <div className="relative p-4 rounded-[2.5rem] bg-brand/[0.1] border-2 border-dashed border-brand/20 group-hover:border-brand/40 group-hover:bg-brand/[0.05] transition-all duration-500 max-w-xs mx-auto">
            <div className="w-20 h-20 bg-white p-3 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl shadow-brand/20 group-hover:scale-110 transition-transform duration-500">
              {/* <FileText className="w-10 h-10" /> */}
              <img loading="lazy"
                src="/HoomeSurvey.png"
                alt="Clearview" />
            </div>
            <h3 className="font-display font-800 text-lg text-navy-dark mb-2">Sample Points of Interest</h3>
            <p className="text-xs text-gray-500 mb-0">Click to open the PDF marketing document sample in a new tab.</p>

          </div>
        </a>
      </div>

      {/* Main Content Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg-light opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Welcome Intro */}
          <div className="max-w-3xl mx-auto text-center mb-24 reveal">
            <span className="badge-light mb-6">Homeowner Experience</span>
            <h2 className="font-display font-800 text-4xl sm:text-5xl mb-8 gt-brand">
              Welcome Them Home!
            </h2>
            <p className="text-xl leading-relaxed text-gray-600 italic">
              &quot;Once homeowners have purchased a property, the utility of the marketing document shifts but remains crucial to their ongoing experience in the neighborhood.&quot;
            </p>
          </div>

          {/* Section 1: Benefit After Purchase */}
          <div className="mb-32">
            <div className="flex items-center gap-4 mb-12 reveal">
              <div className="h-px bg-brand/20 flex-grow"></div>
              <h3 className="font-display font-800 text-3xl text-brand uppercase tracking-wider">
                Benefit After Purchase
              </h3>
              <div className="h-px bg-brand/20 flex-grow"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Guidance for Settling In',
                  desc: 'The document acts as a helpful guide for new residents as they transition into their new home. It provides a roadmap for locating essential services, making the settling-in process smoother and less stressful.',
                  icon: '🏠'
                },
                {
                  title: 'Resource for Local Services',
                  desc: 'Homeowners often need to establish connections for utilities, healthcare, and schooling. The document offers a curated list of local providers, saving time and effort in researching these services independently.',
                  icon: '🛠️'
                },
                {
                  title: 'Facilitating Community Integration',
                  desc: 'Information on community centers, parks, and local events encourages homeowners to engage with their neighbors and participate in community activities, fostering relationships and a sense of belonging.',
                  icon: '🤝'
                },
                {
                  title: 'Emergency Preparedness',
                  desc: 'Knowing the locations of healthcare facilities and veterinary services remains vital for homeowners, ensuring they are prepared for any emergencies that may arise.',
                  icon: '🏥'
                }
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-8 rounded-[2rem] bg-white border border-blue-50 hover:border-blue-200 shadow-sm hover:shadow-xl transition-all duration-500 reveal group"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-500 inline-block">{item.icon}</div>
                  <h4 className="font-display font-800 text-xl mb-4 text-navy-dark">{item.title}</h4>
                  <p className="text-gray-600 leading-relaxed line-clamp-4 group-hover:line-clamp-none transition-all duration-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Importance for New Homeowners */}
          <div className="mb-32">
            <div className="flex items-center gap-4 mb-12 reveal">
              <div className="h-px bg-brand/20 flex-grow"></div>
              <h3 className="font-display font-800 text-3xl text-brand uppercase tracking-wider text-center">
                Importance for New Homeowners
              </h3>
              <div className="h-px bg-brand/20 flex-grow"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Ongoing Family Needs',
                  desc: 'Families may require access to schools and healthcare as children grow. This info helps make informed future decisions.',
                  num: '01'
                },
                {
                  title: 'Local Knowledge',
                  desc: 'Familiarity with grocery stores, parks, and dining enhances quality of life and simplifies daily routines.',
                  num: '02'
                },
                {
                  title: 'Community Involvement',
                  desc: 'Voter registration and local events encourage civic engagement and contributing to the neighborhood.',
                  num: '03'
                },
                {
                  title: 'Property Value Awareness',
                  desc: 'Knowledge of nearby amenities helps homeowners understand factors contributing to property value.',
                  num: '04'
                }
              ].map((item, i) => (
                <div
                  key={i}
                  className="feat-card p-6 reveal h-full flex flex-col"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className="font-display font-900 text-5xl opacity-10 mb-6 gt-brand">{item.num}</div>
                  <h4 className="font-display font-800 text-lg mb-3 text-navy-dark">{item.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed flex-grow">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Summary / Conclusion */}
          <div className="max-w-4xl mx-auto reveal bg-brand/5 rounded-[3rem] p-10 lg:p-16 border border-brand/10 text-center">
            <p className="text-lg lg:text-xl text-navy-dark leading-relaxed mb-10">
              In summary, even after purchasing a home, the marketing document remains an invaluable resource that enhances the homeowner&apos;s experience. By providing essential information about the neighborhood, it aids in settling in, promotes community engagement, and supports ongoing family needs.
            </p>
            <div className="h-px w-24 bg-brand/20 mx-auto mb-10"></div>
            <p className="text-brand font-display font-700 text-lg mb-10">
              Would you like to explore specific ways to enhance this document further or perhaps discuss how to distribute it effectively to new homeowners?
            </p>
            <a href="/contact-us" className="btn-brand px-10 py-4 rounded-2xl inline-block shadow-lg hover:shadow-2xl transition-all">
              Discuss Distribution →
            </a>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
