import { services } from '@/data/services';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navbar from '@/components/common/Navbar';
import InternalHero from '@/components/sections/InternalHero';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import '@/styles/globals.css';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const service = services.find((s) => s.id === params.id);
  if (!service) return { title: 'Service Not Found' };

  return {
    title: `${service.title} | Clearview Land Survey`,
    description: service.body[0],
  };
}

export function generateStaticParams() {
  return services.map((service) => ({
    id: service.id,
  }));
}

export default function ServiceDetailPage({ params }: { params: { id: string } }) {
  const service = services.find((s) => s.id === params.id);
  if (!service) notFound();

  return (
    <main className="overflow-x-hidden bg-white">
      <Navbar />
      <InternalHero
        title={service.title}
        subtitle={service.tag}
        breadcrumb="Services"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl mb-12 reveal">
              <img src={service.img} alt={service.title} className="w-full h-[450px] object-cover" />
            </div>

            <div className="space-y-8 reveal" style={{ transitionDelay: '0.1s' }}>
              <h2 className="font-display font-800 text-3xl sm:text-4xl text-navy-dark leading-tight">
                About our <span className="gt-brand">{service.title}</span> Excellence
              </h2>
              <p className="text-lg leading-relaxed text-gray-600">
                {service.detailedDescription || service.body.join(' ')}
              </p>

              {/* Benefits */}
              {service.benefits && (
                <div className="grid sm:grid-cols-2 gap-4 mt-12">
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-blue-50/50 border border-blue-100">
                      <div className="w-6 h-6 rounded-full bg-brand text-white flex items-center justify-center flex-shrink-0">
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm font-display font-700 text-brand-dark">{benefit}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Steps / Process */}
              {service.process && (
                <div className="mt-20">
                  <h3 className="font-display font-800 text-3xl mb-10 text-navy-dark">The Clearview <span className="text-brand">Process</span></h3>
                  <div className="space-y-6">
                    {service.process.map((step, i) => (
                      <div key={i} className="flex items-start gap-6 group p-6 rounded-3xl hover:bg-white hover:shadow-xl border border-transparent hover:border-blue-50 transition-all">
                        <div className="w-12 h-12 rounded-2xl bg-blue-50 group-hover:bg-brand group-hover:text-white flex items-center justify-center font-display font-800 text-brand transition-all flex-shrink-0">
                          0{i + 1}
                        </div>
                        <div>
                          <p className="text-lg font-display font-700 text-navy-dark mt-1">{step}</p>
                          <p className="text-sm text-gray-500 mt-2">Iterative verification ensures that this stage meets our precision standards before proceeding.</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <div className="p-8 rounded-[2rem] bg-navy-dark text-white shadow-2xl sticky top-32">
              <span className="badge-light mb-6 block w-fit">Request a Quote</span>
              <h4 className="font-display font-800 text-2xl mb-6">Need a <span className="gt-sky-dark">{service.title}</span> for your project?</h4>
              <p className="text-sky-100/70 text-sm mb-8">Ready to provide the precision data your project needs. We respond to all requests within 1 hour.</p>

              <Link href="/order" className="btn-brand w-full py-4 rounded-xl flex items-center justify-center gap-2 group">
                Order Your Survey
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              <div className="mt-8 pt-8 border-t border-white/10 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-sky-300 font-700">Call Support</p>
                  <p className="text-lg font-display font-700">Available Mon-Fri</p>
                </div>
              </div>
            </div>

            {/* Other Services */}
            <div className="p-8 rounded-[2rem] bg-gray-50 border border-gray-100">
              <h4 className="font-display font-800 text-xl mb-6 text-navy-dark">Related Services</h4>
              <div className="space-y-4">
                {services.filter(s => s.id !== service.id).slice(0, 3).map(s => (
                  <Link key={s.id} href={`/services/${s.id}`} className="flex items-center gap-4 p-3 rounded-xl hover:bg-white hover:shadow-md transition-all group">
                    <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                      <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="text-sm font-700 text-navy-dark group-hover:text-brand transition-colors">{s.title}</p>
                      <p className="text-[0.65rem] uppercase tracking-widest text-gray-400">{s.tag}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Contact whiteBg={true} />
      <Footer />
    </main>
  );
}
