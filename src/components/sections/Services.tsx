'use client';

import { useState } from 'react';

interface Service {
  id: string;
  title: string;
  tag: string;
  img: string;
  body: string[];
  bullets: string[];
}

const services: Service[] = [
  {
    id: 'alta',
    title: 'ALTA Surveys',
    tag: 'Commercial',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=600&h=350&q=80',
    body: [
      'ALTA Surveys are primarily conducted for commercial properties and are typically required by lenders and law firms. Established by the American Land Title Association, they are the gold standard in commercial surveying.',
      'These surveys identify or establish all property boundary corners and locate all above-ground improvements both on the subject property and within five feet of its boundaries.',
      'ALTA Surveys also include a review of the Schedule B-II section of the title commitment, documenting relevant survey-related matters.',
      'Clients may request additional items from Table A — a list of optional requirements outlined in the Minimum Standard Detail Requirements for ALTA/ACSM Land Title Surveys.',
    ],
    bullets: [],
  },
  {
    id: 'boundary',
    title: 'Boundary Surveys',
    tag: 'Residential',
    img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=600&h=350&q=80',
    body: [
      'Also referred to as a Mortgage or Loan Survey, this is the most common type of survey required by lenders during the financing process.',
      'A Boundary Survey involves determining and marking property corners, locating visible fixed improvements within the property, and identifying potential issues — such as encroachments — that could impact loan approval.',
      'Boundary Surveys may also be conducted to resolve specific boundary questions, evaluate the location of improvements in relation to a particular property line, or divide a single parcel into multiple parcels.',
    ],
    bullets: [],
  },
  {
    id: 'asbuilt',
    title: 'As-Built Surveys',
    tag: 'Construction',
    img: 'https://images.unsplash.com/photo-1503708928676-1cb796a0891e?auto=format&fit=crop&w=600&h=350&q=80',
    body: [
      'Also referred to as a Record Survey, an As-Built Survey is typically performed during the final phase of construction.',
      'It documents the horizontal and vertical positions of newly constructed features as they were actually built, allowing for comparison with the original construction plans.',
      'This verification confirms that all improvements conform to the intended design specifications — providing essential documentation for project closeout and regulatory compliance.',
    ],
    bullets: [],
  },
  {
    id: 'construction',
    title: 'Construction Layout',
    tag: 'All Projects',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&h=350&q=80',
    body: [
      'Clearview provides a comprehensive range of construction layout services tailored to meet project requirements.',
      'For non-commercial projects, services typically include staking proposed structures with horizontal and vertical control points to guide construction.',
      'For commercial projects, construction layout services are more extensive, offering precise reference points to support a variety of site development needs.',
    ],
    bullets: [
      'Stakeout with cut and fill elevations for roadways',
      'Sewer and storm system layout',
      'Building and structure placement',
      'Retention pond staking and grading control',
    ],
  },
  {
    id: 'elevation',
    title: 'Elevation Certificates',
    tag: 'FEMA / Flood',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&h=350&q=80',
    body: [
      'Elevation Certificates are required by lenders when a property is located within a Flood Hazard Area designated by FEMA, and flood insurance is required.',
      "These certificates document the property's elevations in relation to the Base Flood Elevation (BFE) established by FEMA or local authorities.",
      'The flood insurance premium is determined based on how property elevations compare to the BFE — an accurate certificate can mean significant savings on annual premiums.',
    ],
    bullets: [],
  },
  {
    id: 'topo',
    title: 'Topographic Survey',
    tag: 'Site Planning',
    img: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&h=350&q=80',
    body: [
      'A Topographic Survey maps both natural and man-made features to show their horizontal and vertical relationships.',
      'These surveys are commonly used when designing proposed improvements on a property or when modifying drainage patterns.',
      'Typically, a Topographic Survey extends beyond the property boundaries to provide a more complete understanding of how surrounding areas may affect drainage and site development.',
      'Results are delivered in digital format (CAD/PDF) suitable for engineers, architects, and site planners.',
    ],
    bullets: [],
  },
];

const tagColors: Record<string, { bg: string; border: string; text: string }> = {
  Commercial: { bg: 'rgba(0,79,128,0.70)', border: 'rgba(0,170,238)', text: '#fff' },
  Residential: { bg: 'rgba(16,185,129,0.70)', border: 'rgba(16,185,129)', text: '#000' },
  Construction: { bg: 'rgba(59,130,246,0.70)', border: 'rgba(59,130,246)', text: '#fff' },
  'All Projects': { bg: 'rgba(0,79,128,0.70)', border: 'rgba(0,170,238)', text: '#fff' },
  'FEMA / Flood': { bg: 'rgba(249,115,22,0.70)', border: 'rgba(249,115,22)', text: '#fff' },
  'Site Planning': { bg: 'rgba(20,184,166,0.70)', border: 'rgba(20,184,166)', text: '#fff' },
};

export default function Services() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const selectedService = activeModal ? services.find((s) => s.id === activeModal) : null;

  return (
    <>
      <section
        id="services"
        style={{
          background: 'linear-gradient(180deg,#eaf4ff 0%,#f5faff 100%)',
          padding: '6rem 0',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative SVG */}
        <svg
          className="absolute right-0 top-0 opacity-[0.04] pointer-events-none"
          width="400"
          height="400"
          viewBox="0 0 400 400"
          fill="none"
        >
          <circle cx="200" cy="200" r="160" stroke="#004f80" strokeWidth="1" />
          <circle cx="200" cy="200" r="100" stroke="#004f80" strokeWidth="1" />
          <circle cx="200" cy="200" r="40" stroke="#004f80" strokeWidth="1" />
          <line x1="200" y1="0" x2="200" y2="400" stroke="#004f80" strokeWidth="0.8" />
          <line x1="0" y1="200" x2="400" y2="200" stroke="#004f80" strokeWidth="0.8" />
        </svg>
        <div className="absolute inset-0 grid-bg-light opacity-50"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-2xl mx-auto text-center mb-16 reveal">
            <span className="badge-light mb-4">Our Services</span>
            <h2
              className="font-display font-800 leading-tight mt-4"
              style={{
                fontSize: 'clamp(2rem,4vw,3.2rem)',
                color: 'var(--text-h)',
              }}
            >
              Comprehensive <span className="gt-brand">Land Surveying</span> Solutions
            </h2>
            <p
              className="mt-4 text-base leading-relaxed"
              style={{ color: 'var(--text-body)' }}
            >
              Click any service card to learn more. Accurate, legally-valid surveys tailored to your specific project needs.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const tagColor = tagColors[service.tag];
              return (
                <div
                  key={service.id}
                  onClick={() => setActiveModal(service.id)}
                  className="svc-card reveal group"
                  style={{ transitionDelay: `${index * 0.08}s` }}
                >
                  <div className="h-52 relative overflow-hidden">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="svc-img w-full h-full object-cover"
                    />
                    <div className="img-ov"></div>
                    <div className="absolute top-4 left-4">
                      <span
                        className="badge-dark text-xs px-2.5 py-1 rounded-full font-display font-700"
                        style={{
                          background: tagColor.bg,
                          border: `1px solid ${tagColor.border}`,
                          color: tagColor.text,
                        }}
                      >
                        {service.tag}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="font-display font-800 text-white text-xl">{service.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-body)' }}>
                      {service.body[0]}
                    </p>
                    <span
                      className="inline-flex items-center gap-1.5 text-sm font-display font-700 group-hover:gap-3 transition-all"
                      style={{ color: 'var(--brand)' }}
                    >
                      Learn More{' '}
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal */}
      {activeModal && selectedService && (
        <div
          className="modal-overlay"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="modal-body"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 sm:p-8">
              {/* Close Button */}
              <button
                onClick={() => setActiveModal(null)}
                className="close-btn float-right text-gray-400 hover:text-black transition"
                style={{ fontSize: '28px', background: 'none', border: 'none', cursor: 'pointer' }}
              >
                ✕
              </button>

              {/* Modal Content */}
              <div className="mt-4">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span
                      className="badge-light text-xs px-2.5 py-1 rounded-full font-display font-700"
                      style={{ display: 'inline-block' }}
                    >
                      {selectedService.tag}
                    </span>
                    <h2
                      className="font-display font-800 text-3xl mt-3"
                      style={{ color: 'var(--text-h)' }}
                    >
                      {selectedService.title}
                    </h2>
                  </div>
                </div>

                {/* Image */}
                <img
                  src={selectedService.img}
                  alt={selectedService.title}
                  className="w-full h-80 object-cover rounded-2xl mb-6"
                />

                {/* Body Text */}
                <div className="space-y-4 mb-6">
                  {selectedService.body.map((paragraph, idx) => (
                    <p
                      key={idx}
                      className="text-base leading-relaxed"
                      style={{ color: 'var(--text-body)' }}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Bullets */}
                {selectedService.bullets.length > 0 && (
                  <div className="mb-6">
                    <h3
                      className="font-display font-700 text-lg mb-3"
                      style={{ color: 'var(--text-h)' }}
                    >
                      Key Services Include:
                    </h3>
                    <ul className="space-y-2">
                      {selectedService.bullets.map((bullet, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-sm"
                          style={{ color: 'var(--text-body)' }}
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                            style={{ background: 'var(--brand)' }}
                          ></span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* CTA */}
                <button
                  onClick={() => setActiveModal(null)}
                  className="btn-brand w-full py-3 rounded-xl font-display font-700 text-sm mt-6"
                >
                  Request a Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
