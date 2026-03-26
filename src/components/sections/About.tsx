'use client';

export default function About() {
  return (
    <section
      id="about"
      style={{
        background: '#f7fbff',
        padding: '6rem 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="absolute inset-0 dot-bg-light opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="rounded-3xl overflow-hidden reveal"
          style={{
            boxShadow: '0 20px 80px rgba(0,79,128,0.12)',
          }}
        >
          <div className="grid md:grid-cols-2">
            {/* LEFT — Image Panel */}
            <div className="relative" style={{ minHeight: '480px' }}>
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&h=600&q=80"
                alt="Professional Surveyor"
                className="w-full h-full object-cover absolute inset-0"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(135deg,rgba(0,50,100,0.78) 0%,rgba(0,20,45,0.85) 100%)',
                }}
              ></div>
              <div className="absolute inset-0 dot-bg-dark opacity-25"></div>

              <div className="relative z-10 flex flex-col justify-between h-full p-10">
                <div className="flex items-center gap-3">
                  <img
                    src="/logo.png"
                    alt="Clearview"
                    className="w-10 h-10 object-contain logo-dark"
                  />
                  <div>
                    <p className="font-display font-700 text-white text-sm">Clearview Land Survey</p>
                    <p className="text-sky-300 opacity-70 text-xs">Est. 2003</p>
                  </div>
                </div>

                <div className="text-center py-8">
                  <div
                    className="font-display font-800 text-white mb-1 gt-sky-dark"
                    style={{
                      fontSize: '5rem',
                      lineHeight: 1,
                    }}
                  >
                    20+
                  </div>
                  <div className="font-display font-600 text-white text-xl">Years of Precision</div>
                  <p className="text-sm mt-3 max-w-xs mx-auto" style={{ color: 'rgba(56,197,245,0.6)' }}>
                    Combining decades of field expertise with today&apos;s most advanced survey technology.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3">
                  <div
                    className="text-center rounded-xl p-3"
                    style={{
                      background: 'rgba(255,255,255,0.1)',
                      border: '1px solid rgba(255,255,255,0.15)',
                    }}
                  >
                    <div className="font-display font-800 text-white text-xl">100%</div>
                    <div className="text-sky-300 opacity-60 text-xs mt-0.5">Licensed</div>
                  </div>
                  <div
                    className="text-center rounded-xl p-3"
                    style={{
                      background: 'rgba(255,255,255,0.1)',
                      border: '1px solid rgba(255,255,255,0.15)',
                    }}
                  >
                    <div className="font-display font-800 text-white text-xl">6</div>
                    <div className="text-sky-300 opacity-60 text-xs mt-0.5">Services</div>
                  </div>
                  <div
                    className="text-center rounded-xl p-3"
                    style={{
                      background: 'rgba(255,255,255,0.1)',
                      border: '1px solid rgba(255,255,255,0.15)',
                    }}
                  >
                    <div className="font-display font-800 text-white text-xl">Fast</div>
                    <div className="text-sky-300 opacity-60 text-xs mt-0.5">Delivery</div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT — Content */}
            <div className="p-10 lg:p-12 flex flex-col justify-center" style={{ background: '#fff' }}>
              <span className="badge-light mb-5">Precision & Expertise</span>
              <h2
                className="font-display font-800 leading-tight mb-5 mt-4 gt-brand"
                style={{
                  fontSize: 'clamp(1.8rem,3.5vw,2.8rem)',
                  color: 'var(--text-h)',
                }}
              >
                Why Choose <span className="gt-brand">Clearview?</span>
              </h2>
              <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-body)' }}>
                Choosing Clearview comes down to key advantages that matter when accuracy, reliability, and timelines are critical.
              </p>

              <div className="space-y-3.5 mb-8">
                {[
                  'Licensed surveyors & experienced crews using GPS and drone mapping',
                  'Full-range solutions: boundary, ALTA, topo, construction staking & more',
                  'GIS systems, 3D scanning, and drone technology for speed and accuracy',
                  'Clear communication, easy-to-read reports, and responsive support',
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3.5 p-3.5 rounded-xl"
                    style={{
                      background: 'rgba(0,79,128,0.04)',
                      border: '1px solid rgba(0,79,128,0.07)',
                    }}
                  >
                    <div
                      className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: 'var(--brand)' }}
                    >
                      <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-sm" style={{ color: 'var(--text-h)' }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Testimonial */}
              <div className="testimonial-card p-5">
                <svg
                  className="w-7 h-7 mb-3"
                  style={{ color: 'rgba(0,79,128,0.2)' }}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p
                  className="text-sm italic leading-relaxed mb-4"
                  style={{ color: 'var(--text-body)' }}
                >
                  "Clearview gave us the most accurate boundary survey we've ever received. On time, clearly documented, and no surprises at closing."
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-700 flex-shrink-0 btn-brand"
                    style={{ minWidth: '2.25rem' }}
                  >
                    JM
                  </div>
                  <div>
                    <p className="font-display font-700 text-sm" style={{ color: 'var(--text-h)' }}>
                      James Miller
                    </p>
                    <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                      Real Estate Attorney
                    </p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg
                        key={i}
                        className="w-3.5 h-3.5 text-amber-400"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
