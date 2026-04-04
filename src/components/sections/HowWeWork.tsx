'use client';

export default function HowWeWork() {
  const steps = [
    {
      number: '01',
      title: 'Submit Order',
      description: 'Fill out our order form with property info and survey type needed.',
      icon: (
        <svg className="w-7 h-7 text-sky-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      number: '02',
      title: 'We Contact You',
      description: 'We confirm details and provide a transparent quote within 1 hour.',
      icon: (
        <svg className="w-7 h-7 text-sky-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Field Survey',
      description: 'Licensed surveyors with GPS and drone equipment deployed to your property.',
      icon: (
        <svg className="w-7 h-7 text-sky-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      number: '04',
      title: 'Receive Report',
      description: 'Professional CAD, PDF, and GIS deliverables — ready on schedule.',
      icon: (
        <svg className="w-7 h-7 text-sky-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      style={{
        background: 'var(--brand)',
        padding: '5rem 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="absolute inset-0 dot-bg-dark opacity-20"></div>
      <svg
        className="absolute left-0 bottom-0 opacity-10 pointer-events-none"
        width="300"
        height="200"
        viewBox="0 0 300 200"
        fill="none"
      >
        <path d="M0 200 Q150 50 300 200" stroke="white" strokeWidth="1.5" fill="none" />
        <path d="M0 160 Q150 10 300 160" stroke="white" strokeWidth="1" fill="none" />
      </svg>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-display font-600 text-sky-300 uppercase tracking-widest mb-3">Simple Process</p>
          <h2
            className="font-display font-800 text-white"
            style={{
              fontSize: 'clamp(1.8rem,3.5vw,2.8rem)',
            }}
          >
            How Your Survey Gets Done
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="text-center reveal" style={{ transitionDelay: `${index * 0.1}s` }}>
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                style={{
                  background: 'rgba(255,255,255,0.15)',
                  border: '1px solid rgba(255,255,255,0.25)',
                }}
              >
                {step.icon}
              </div>
              <div
                className="font-display font-800 text-5xl -mb-4 leading-none text-white"
                style={{ opacity: 0.1 }}
              >
                {step.number}
              </div>
              <h3 className="font-display font-700 text-white text-base mt-4 mb-2">{step.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(56,197,245,0.7)' }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
