'use client';

export default function TrustBar() {
  return (
    <div style={{ background: 'var(--brand)', padding: '0.875rem 0' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-2">
          <TrustItem
            icon={
              <svg className="w-4 h-4 text-sky-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            }
            text="State Licensed & Insured"
          />
          <Divider />
          <TrustItem
            icon={
              <svg
                className="w-4 h-4 text-sky-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            }
            text="40+ Years of Precision"
          />
          <Divider />
          <TrustItem
            icon={
              <svg
                className="w-4 h-4 text-sky-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            }
            text="Fast Turnaround · Rush Options"
          />
          <Divider />
          <TrustItem
            icon={
              <svg
                className="w-4 h-4 text-sky-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            }
            text="Response Within 1 Hour"
          />
        </div>
      </div>
    </div>
  );
}

function TrustItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2.5" style={{ color: 'rgba(255,255,255,0.9)' }}>
      {icon}
      <span className="font-display font-600 text-sm tracking-wide">{text}</span>
    </div>
  );
}

function Divider() {
  return (
    <div
      className="w-px hidden sm:block"
      style={{ height: '18px', background: 'rgba(255,255,255,0.2)' }}
    />
  );
}
