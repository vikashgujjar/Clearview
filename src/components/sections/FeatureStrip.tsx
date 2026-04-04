'use client';

const features = [
  {
    title: 'State Licensed',
    subtitle: 'Legally valid surveys',
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&h=200&q=80',
    icon: (
      <svg className="w-4 h-4" style={{ color: '#00aaee' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    bgColor: 'rgba(0,79,128,0.8)',
    borderColor: 'rgba(0,170,238,0.4)',
  },
  {
    title: 'Clear Reports',
    subtitle: 'Easy to understand',
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&h=200&q=80',
    icon: (
      <svg className="w-4 h-4 text-emerald-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
    bgColor: 'rgba(16,185,129,0.75)',
    borderColor: 'rgba(16,185,129,0.5)',
  },
  {
    title: 'GPS + Drones',
    subtitle: 'Modern technology',
    img: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=400&h=200&q=80',
    icon: (
      <svg className="w-4 h-4" style={{ color: '#38c5f5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    bgColor: 'rgba(0,100,180,0.8)',
    borderColor: 'rgba(0,170,238,0.5)',
  },
  {
    title: 'Fast Turnaround',
    subtitle: 'Rush options available',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=400&h=200&q=80',
    icon: (
      <svg className="w-4 h-4" style={{ color: '#00aaee' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    bgColor: 'rgba(0,79,128,0.8)',
    borderColor: 'rgba(0,170,238,0.4)',
  },
];

export default function FeatureStrip() {
  return (
    <section style={{ background: 'linear-gradient(135deg,#ddeeff,#eaf4ff)', padding: '4rem 0' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feat-card reveal"
              style={{ transitionDelay: `${index * 0.08}s` }}
            >
              <div className="h-40 relative overflow-hidden rounded-t-xl">
                <img
                  src={feature.img}
                  alt={feature.title}
                  loading="lazy"
                  className="feat-img w-full h-full object-cover"
                />
                <div className="img-ov"></div>
                <div
                  className="absolute top-3 right-3 w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{
                    background: feature.bgColor,
                    border: `1px solid ${feature.borderColor}`,
                  }}
                >
                  {feature.icon}
                </div>
              </div>
              <div className="p-4">
                <p className="font-display font-700 text-sm" style={{ color: 'var(--text-h)' }}>
                  {feature.title}
                </p>
                <p className="text-xs mt-0.5" style={{ color: 'var(--text-sub)' }}>
                  {feature.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
