'use client';

import { useState } from 'react';

import Link from 'next/link';
import { services, tagColors, type Service } from '@/data/services';

export default function Services({
  hideHeader = false,
  variant = 'grid'
}: {
  hideHeader?: boolean;
  variant?: 'grid' | 'page';
}) {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const selectedService = activeModal ? services.find((s) => s.id === activeModal) : null;

  return (
    <>
      <section
        id="services"
        style={{
          background: variant === 'page' ? '#ffffff' : 'linear-gradient(180deg,#eaf4ff 0%,#f5faff 100%)',
          padding: hideHeader ? '3rem 0 6rem' : '6rem 0',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative SVG */}
        {!hideHeader && (
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
        )}
        <div className="absolute inset-0 grid-bg-light opacity-50"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          {!hideHeader && (
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
          )}

          {/* Service Cards */}
          <div className={variant === 'page' ? 'grid gap-12' : 'grid sm:grid-cols-2 lg:grid-cols-3 gap-6'}>
            {services.map((service, index) => {
              const tagColor = tagColors[service.tag];

              if (variant === 'page') {
                return (
                  <div
                    key={service.id}
                    onClick={() => setActiveModal(service.id)}
                    className="flex flex-col lg:flex-row gap-8 items-center reveal bg-white rounded-[2.5rem] p-4 lg:p-8 hover:shadow-2xl transition-all duration-500 border border-blue-50/50 group cursor-pointer"
                    style={{ transitionDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-full lg:w-[45%] h-72 lg:h-[400px] relative rounded-[2rem] overflow-hidden flex-shrink-0">
                      <img
                        src={service.img}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="img-ov-lite opacity-40"></div>
                      <div className="absolute top-6 left-6">
                        <span
                          className="px-4 py-2 rounded-xl text-xs font-display font-800 uppercase tracking-widest bg-white/90 backdrop-blur-md shadow-lg"
                          style={{ color: 'var(--brand)' }}
                        >
                          {service.tag}
                        </span>
                      </div>
                    </div>

                    <div className="flex-grow p-4 lg:p-6">
                      <div className="flex items-center gap-4 mb-6">
                        <span className="text-5xl font-display font-800 opacity-10 gt-brand">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <div className="h-px bg-blue-100 flex-grow"></div>
                      </div>

                      <h3 className="font-display font-800 text-3xl lg:text-4xl mb-6 leading-tight" style={{ color: 'var(--text-h)' }}>
                        {service.title}
                      </h3>

                      <div className="space-y-4 mb-8">
                        {service.body.slice(0, 2).map((p, i) => (
                          <p key={i} className="text-lg leading-relaxed text-gray-600">
                            {p}
                          </p>
                        ))}
                      </div>

                      <div className="flex flex-wrap items-center gap-6 mt-8">
                        <Link href={`/services/${service.id}`} className="btn-brand px-8 py-3.5 rounded-2xl text-sm flex items-center gap-2">
                          Learn Detailed Services
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>

                        <div className="flex items-center gap-2 text-sm font-display font-700 text-blue-400 group-hover:text-blue-600 transition-colors">
                          <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                          Precision Guaranteed
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={service.id}
                  href={`/services/${service.id}`}
                  className="svc-card reveal group block border-none text-left"
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
                </Link>
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
