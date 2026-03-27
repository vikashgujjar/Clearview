'use client';

import Link from 'next/link';

interface InternalHeroProps {
  title: string;
  subtitle: string;
  breadcrumb?: string;
}

export default function InternalHero({ title, subtitle, breadcrumb = 'Services' }: InternalHeroProps) {
  return (
    <section
      className="relative pt-44 pb-32 overflow-hidden scanline-wrap"
      style={{
        /* CHANGED: #030d16 dark → #eef6ff light blue */
        background: `radial-gradient(ellipse at 65% 40%,rgba(0,79,128,0.12) 0%,transparent 60%),radial-gradient(ellipse at 10% 80%,rgba(0,102,166,0.07) 0%,transparent 55%),#eef6ff`,
      }}
    >
      {/* CHANGED: grid-bg-dark → grid-bg-light */}
      <div className="grid-bg-light absolute inset-0"></div>

      {/* Floating blobs */}
      <div
        className="absolute top-28 right-20 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{
          /* CHANGED: opacity 0.2 → 0.1 */
          background: 'radial-gradient(circle,rgba(0,79,128,0.1),transparent 70%)',
          animation: 'float 6s ease-in-out infinite',
        }}
      ></div>
      <div
        className="absolute bottom-20 left-16 w-72 h-72 rounded-full blur-3xl pointer-events-none"
        style={{
          /* CHANGED: rgba(0,170,238,0.1) → rgba(0,79,128,0.07) */
          background: 'radial-gradient(circle,rgba(0,79,128,0.07),transparent 70%)',
          animation: 'float 5s ease-in-out infinite 1.5s',
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-display font-600 tracking-widest uppercase mb-8"
          style={{
            /* CHANGED: glass dark → light blue badge */
            background: 'rgba(0,79,128,0.08)',
            border: '1px solid rgba(0,79,128,0.22)',
            /* CHANGED: color #00aaee → #004f80 */
            color: '#004f80',
          }}
        >
          {/* CHANGED: hover:text-white → hover:text-brand */}
          <Link href="/" className="transition-colors" style={{ color: '#004f80' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#0066a6')}
            onMouseLeave={e => (e.currentTarget.style.color = '#004f80')}
          >
            Home
          </Link>
          {/* CHANGED: bg-white/20 → rgba(0,79,128,0.25) */}
          <span className="w-1 h-1 rounded-full" style={{ background: 'rgba(0,79,128,0.3)' }}></span>
          {/* CHANGED: text-white/60 → muted navy */}
          <span style={{ color: '#7a9ab5' }}>{breadcrumb}</span>
        </div>

        <h1
          className="font-display font-800 text-5xl sm:text-6xl lg:text-7xl leading-[1.1] tracking-tight mb-8"
        >
          {/* CHANGED: gt-white (white gradient) → dark navy */}
          <span className="block" style={{ color: '#0a1628' }}>{title.split(' ')[0]}</span>
          {/* CHANGED: gt-sky-dark (cyan) → gt-brand (navy→blue) */}
          <span className="gt-brand block">{title.split(' ').slice(1).join(' ')}</span>
        </h1>

        {/* CHANGED: text-gray-400 → readable dark blue */}
        <p
          className="text-lg leading-relaxed max-w-2xl mx-auto"
          style={{ color: '#2d4a63' }}
        >
          {subtitle}
        </p>
      </div>

      {/* Survey crosshair decoration */}
      <svg
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none"
        viewBox="0 0 800 800"
        fill="none"
        /* CHANGED: opacity 0.03 → 0.05 (slightly more visible on light bg) */
        style={{ opacity: 0.05 }}
      >
        {/* CHANGED: stroke #00aaee → #004f80 */}
        <circle cx="400" cy="400" r="300" stroke="#004f80" strokeWidth="1" />
        <circle cx="400" cy="400" r="180" stroke="#004f80" strokeWidth="0.75" />
        <line x1="100" y1="400" x2="700" y2="400" stroke="#004f80" strokeWidth="0.75" />
        <line x1="400" y1="100" x2="400" y2="700" stroke="#004f80" strokeWidth="0.75" />
      </svg>
    </section>
  );
}