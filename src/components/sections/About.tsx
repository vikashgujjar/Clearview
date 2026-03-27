'use client';

export default function About({ 
  whiteBg = false,
  variant = 'grid'
}: { 
  whiteBg?: boolean;
  variant?: 'grid' | 'page';
}) {
  if (variant === 'page') {
    return (
      <section
        id="about"
        style={{
          background: whiteBg ? '#ffffff' : '#f7fbff',
          padding: '6rem 0',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="absolute inset-0 grid-bg-light opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="reveal">
              <span className="badge-light mb-6 block w-fit">About Clearview</span>
              <h2 className="font-display font-800 text-4xl sm:text-5xl leading-tight mb-8" style={{ color: 'var(--text-h)' }}>
                Building Trust Through <span className="gt-brand">Unwavering Precision</span>
              </h2>
              <p className="text-lg leading-relaxed mb-8" style={{ color: 'var(--text-body)' }}>
                Clearview Land Survey was founded on a simple principle: every property line has a story, and every measurement dictates the future of that story. Since 2003, we've combined decades of hands-on experience with the absolute forefront of survey technology.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex-1 min-w-[240px] p-6 rounded-2xl bg-blue-50/40 border border-blue-100">
                  <h3 className="font-display font-800 text-lg mb-2 text-brand">Our Mission</h3>
                  <p className="text-sm text-gray-600">To provide the most reliable spatial data for construction, legal, and residential boundary decisions.</p>
                </div>
                <div className="flex-1 min-w-[240px] p-6 rounded-2xl bg-sky-50/40 border border-sky-100">
                  <h3 className="font-display font-800 text-lg mb-2 text-sky-600">Our Vision</h3>
                  <p className="text-sm text-gray-600">Integrating LiDAR and autonomous mapping to redefine efficiency and accuracy in the field.</p>
                </div>
              </div>
            </div>
            <div className="relative reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img 
                  src="/about_surveyor.png" 
                  className="w-full h-full object-cover" 
                  alt="Precision Surveying" 
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-brand p-8 rounded-3xl shadow-xl text-white max-w-[240px]">
                <div className="text-4xl font-display font-800 mb-1">20+</div>
                <div className="text-xs uppercase tracking-widest font-600 opacity-80">Years of Field Expertise</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 reveal" style={{ transitionDelay: '0.3s' }}>
            {[
              {
                title: 'Licensed Excellence',
                desc: 'Every survey is signed and sealed by a state-licensed professional land surveyor.',
                num: '01'
              },
              {
                title: 'High-Tech Hardware',
                desc: 'We utilize GPS, Robotic Total Stations, and 3D scanners for millimetric accuracy.',
                num: '02'
              },
              {
                title: 'Verified Results',
                desc: 'Our double-check protocols ensure data integrity from the field to the final plat.',
                num: '03'
              }
            ].map((pillar, i) => (
              <div key={i} className="p-8 rounded-3xl border border-gray-100 bg-white hover:border-blue-200 transition-colors group">
                <div className="text-4xl font-display font-900 text-blue-50/80 mb-6 group-hover:text-blue-100 transition-colors">
                  {pillar.num}
                </div>
                <h4 className="font-display font-800 text-xl mb-4" style={{ color: 'var(--text-h)' }}>{pillar.title}</h4>
                <p className="text-sm leading-relaxed text-gray-500">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="about"
      style={{
        background: whiteBg ? '#ffffff' : '#f7fbff',
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
