'use client';

const reasons = [
  {
    number: '01',
    title: 'Proper Licensing & Credentials',
    description: 'State-licensed professional surveyors ensuring legally valid work that meets all standards — protecting you if issues arise.',
    bgColor: 'rgba(0,79,128,0.08)',
    borderColor: 'rgba(0,79,128,0.2)',
    textColor: 'var(--brand)',
  },
  {
    number: '02',
    title: 'Experience With Your Project Type',
    description: 'Residential, commercial, construction staking — specific expertise across every survey type for faster, more accurate results.',
    bgColor: 'rgba(16,185,129,0.08)',
    borderColor: 'rgba(16,185,129,0.22)',
    textColor: '#16b94a',
  },
  {
    number: '03',
    title: 'Modern Technology & Equipment',
    description: 'GPS/GNSS, drones, and 3D laser scanning deliver more precise results and quicker turnaround than traditional methods.',
    bgColor: 'rgba(0,100,150,0.08)',
    borderColor: 'rgba(0,100,150,0.22)',
    textColor: '#005f8a',
  },
  {
    number: '04',
    title: 'Fast Turnaround Times',
    description: 'Surveying is often on the critical path of your project. Rush options available — no delays to permits or closings.',
    bgColor: 'rgba(0,79,128,0.08)',
    borderColor: 'rgba(0,79,128,0.2)',
    textColor: 'var(--brand)',
  },
  {
    number: '05',
    title: 'Clear Pricing & Scope',
    description: 'Detailed quotes specifying what\'s included and any potential extra costs. No vague estimates, no surprises at closing.',
    bgColor: 'rgba(0,100,150,0.08)',
    borderColor: 'rgba(0,100,150,0.22)',
    textColor: '#005f8a',
  },
  {
    number: '06',
    title: 'Communication & Responsiveness',
    description: 'We explain the process clearly, answer questions quickly, and deliver easy-to-understand reports throughout your project.',
    bgColor: 'rgba(16,185,129,0.08)',
    borderColor: 'rgba(16,185,129,0.22)',
    textColor: '#16b94a',
  },
  {
    number: '07',
    title: 'Local Regulation Knowledge',
    description: 'Deep familiarity with local zoning laws, property records, and permitting requirements saves time and prevents compliance issues.',
    bgColor: 'rgba(217,119,6,0.08)',
    borderColor: 'rgba(217,119,6,0.22)',
    textColor: '#b65a0f',
  },
  {
    number: '08',
    title: 'Insurance Coverage',
    description: 'Full liability insurance and errors & omissions coverage — protecting you completely if anything doesn\'t go to plan.',
    bgColor: 'rgba(16,185,129,0.08)',
    borderColor: 'rgba(16,185,129,0.22)',
    textColor: '#16b94a',
  },
  {
    number: '09',
    title: 'Professional Deliverables',
    description: 'Survey maps, CAD/PDF files, and marked property corners — professional documentation essential for legal and construction use.',
    bgColor: 'rgba(0,79,128,0.08)',
    borderColor: 'rgba(0,79,128,0.2)',
    textColor: 'var(--brand)',
  },
];

const stats = [
  { value: '40+', label: 'Years Experience' },
  { value: '6', label: 'Survey Types' },
  { value: '100%', label: 'Licensed & Insured' },
  { value: 'Fast', label: 'Rush Available', isBrand: true },
];

export default function WhyUs({
  hideHeader = false,
  whiteBg = false,
  variant = 'grid'
}: {
  hideHeader?: boolean;
  whiteBg?: boolean;
  variant?: 'grid' | 'page';
}) {
  return (
    <section
      id="why"
      style={{
        background: whiteBg ? '#ffffff' : 'linear-gradient(180deg, #f0f8ff 0%, #e4f0fc 100%)',
        padding: hideHeader ? '3rem 0 6rem' : '6rem 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="absolute inset-0 grid-bg-light opacity-40"></div>
      {!hideHeader && (
        <svg
          className="absolute left-0 top-0 opacity-[0.04] pointer-events-none"
          width="500"
          height="500"
          viewBox="0 0 500 500"
          fill="none"
        >
          <circle cx="0" cy="0" r="300" stroke="#004f80" strokeWidth="1.5" />
          <circle cx="0" cy="0" r="200" stroke="#004f80" strokeWidth="1" />
        </svg>
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* First Row: Left text + Right stats */}
        {!hideHeader && (
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            {/* LEFT: Text with buttons */}
            <div className="reveal">
              <span className="badge-light mb-5 block">Why Choose Clearview</span>
              <h2
                className="font-display font-800 leading-tight mt-4"
                style={{
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  color: 'var(--text-h)',
                }}
              >
                What Matters When <span className="gt-brand">Choosing a Surveyor</span>
              </h2>
              <p
                className="mt-5 text-base leading-relaxed"
                style={{ color: 'var(--text-body)' }}
              >
                Choosing the right land survey company isn't just about price — it directly affects legal boundaries, construction accuracy,
                and future property disputes. Here's what sets us apart.
              </p>
              <div className="mt-8 flex items-center gap-5">
                <a href="#contact" className="btn-brand px-7 py-3.5 rounded-xl text-sm flex items-center gap-2">
                  Get a Free Quote
                </a>
                <a href="#services" className="btn-outline-brand px-7 py-3.5 rounded-xl text-sm flex items-center gap-2">
                  View Services
                </a>
              </div>
            </div>

            {/* RIGHT: Stats Grid */}
            <div className="grid grid-cols-2 gap-4 reveal" style={{ transitionDelay: '0.15s' }}>
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="l-card p-7 text-center"
                  style={
                    stat.isBrand
                      ? {
                        background: 'var(--brand)',
                        borderColor: 'var(--brand)',
                      }
                      : {}
                  }
                >
                  <div
                    className="font-display font-800 leading-none"
                    style={{
                      fontSize: stat.isBrand ? '2.5rem' : '3.5rem',
                      background: stat.isBrand ? 'none' : 'linear-gradient(90deg, var(--brand), var(--brand-lt))',
                      WebkitBackgroundClip: stat.isBrand ? 'unset' : 'text',
                      WebkitTextFillColor: stat.isBrand ? 'white' : 'transparent',
                      backgroundClip: stat.isBrand ? 'unset' : 'text',
                      color: stat.isBrand ? 'white' : 'unset',
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-xs uppercase tracking-widest mt-2"
                    style={{
                      color: stat.isBrand ? '#38c5f5' : 'var(--text-sub)',
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 9 Reasons Grid */}
        <div className={variant === 'page' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-8' : 'grid sm:grid-cols-2 lg:grid-cols-3 gap-5'}>
          {reasons.map((reason, idx) => {
            if (variant === 'page') {
              return (
                <div
                  key={idx}
                  className="group relative reveal p-8 rounded-3xl bg-white border border-blue-100/50 hover:shadow-2xl transition-all duration-500 overflow-hidden"
                  style={{ transitionDelay: `${(idx % 3) * 0.1}s` }}
                >
                  <div
                    className="absolute -right-4 -top-4 w-32 h-32 opacity-[0.03] font-display font-800 pointer-events-none"
                    style={{ fontSize: '10rem', color: reason.textColor }}
                  >
                    {reason.number}
                  </div>

                  <div
                    className="w-14 h-14 rounded-2xl mb-8 flex items-center justify-center font-display font-800 text-xl shadow-lg border-2"
                    style={{
                      background: reason.bgColor,
                      borderColor: reason.borderColor,
                      color: reason.textColor
                    }}
                  >
                    {reason.number}
                  </div>

                  <h3 className="font-display font-800 text-xl mb-4 leading-tight group-hover:gt-brand transition-all" style={{ color: 'var(--text-h)' }}>
                    {reason.title}
                  </h3>

                  <p className="text-base leading-relaxed text-gray-600 mb-6 font-display font-500">
                    {reason.description}
                  </p>

                  <div className="flex items-center gap-2 mt-auto">
                    <div className="h-px bg-blue-50 flex-grow"></div>
                    <span
                      className="text-[0.6rem] font-800 uppercase tracking-widest leading-none"
                      style={{ color: reason.textColor }}
                    >
                      Precision {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={idx}
                className="why-card p-6 reveal"
                style={{ transitionDelay: `${(idx % 3 + (Math.floor(idx / 3) > 0 ? 1 : 0)) * 0.07}s` }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 font-display font-800 text-sm"
                    style={{
                      background: reason.bgColor,
                      border: `1px solid ${reason.borderColor}`,
                      color: reason.textColor,
                    }}
                  >
                    {reason.number}
                  </div>
                  <div>
                    <h3
                      className="font-display font-700 mb-1.5"
                      style={{
                        color: 'var(--text-h)',
                        fontSize: '0.95rem',
                      }}
                    >
                      {reason.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
