'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const slides = [
     {
          img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=900&h=620&q=85',
          tag: 'Aerial Mapping',
          label: 'Precision Topographic Survey',
          sub: 'GPS-assisted aerial mapping',
     },
     {
          img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&h=620&q=85',
          tag: 'Construction Layout',
          label: 'On-Site Staking & Control',
          sub: 'Boundary & elevation staking',
     },
     {
          img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&h=620&q=85',
          tag: 'Field Survey',
          label: 'Licensed Field Crew',
          sub: 'State-licensed professional surveyors',
     },
     {
          img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=900&h=620&q=85',
          tag: 'ALTA Surveys',
          label: 'Commercial Property Survey',
          sub: 'Required by lenders & title companies',
     },
     {
          img: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&h=620&q=85',
          tag: 'Topographic',
          label: 'Site Planning & Drainage',
          sub: 'Natural & man-made feature mapping',
     },
];

/* Repeated enough times so the ticker fills any viewport width */
const TICKER_TEXT = Array(10).fill('Intelligence is Not Artificial');

export default function Hero() {
     const [current, setCurrent] = useState(0);
     const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

     const next = () => { setCurrent((current + 1) % slides.length); };
     const prev = () => { setCurrent((current - 1 + slides.length) % slides.length); };
     const go = (i: number) => { setCurrent(i); };

     const resetTimer = () => {
          if (timer) clearInterval(timer);
          const newTimer = setInterval(() => {
               setCurrent((current + 1) % slides.length);
          }, 4500);
          setTimer(newTimer);
     };

     useEffect(() => {
          resetTimer();
          return () => { if (timer) clearInterval(timer); };
     }, [current]);

     return (
          /* CHANGED: flex items-center → flex flex-col (ticker sits at bottom) */
          <section
               id="home"
               className="relative min-h-screen flex flex-col overflow-hidden scanline-wrap"
               style={{
                    background: `radial-gradient(ellipse at 65% 40%,rgba(0,79,128,0.12) 0%,transparent 60%),radial-gradient(ellipse at 10% 80%,rgba(0,102,166,0.07) 0%,transparent 55%),#eef6ff`,
               }}
          >
               <div className="grid-bg-light absolute inset-0"></div>

               {/* Floating blobs */}
               <div
                    className="absolute top-28 right-20 w-96 h-96 rounded-full blur-3xl pointer-events-none"
                    style={{ background: 'radial-gradient(circle,rgba(0,79,128,0.1),transparent 70%)', animation: 'float 6s ease-in-out infinite' }}
               ></div>
               <div
                    className="absolute bottom-20 left-16 w-72 h-72 rounded-full blur-3xl pointer-events-none"
                    style={{ background: 'radial-gradient(circle,rgba(0,79,128,0.07),transparent 70%)', animation: 'float 5s ease-in-out infinite 1.5s' }}
               ></div>

               {/* CHANGED: added flex-1 + flex items-center so main content fills remaining space above ticker */}
               <div className="relative flex-1 flex items-center">
                    <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-32 pb-12">
                         <div className="grid lg:grid-cols-2 gap-14 items-center">
                              {/* Left Content — untouched */}
                              <div className="space-y-8">
                                   <div
                                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-display font-600 tracking-widest uppercase animate-fadeUp"
                                        style={{ background: 'rgba(0,79,128,0.08)', border: '1px solid rgba(0,79,128,0.22)', color: '#004f80' }}
                                   >
                                        <span className="w-2 h-2 rounded-full animate-pulse2" style={{ background: '#004f80' }}></span>
                                        Licensed Professional Surveyors
                                   </div>

                                   <div className='flex items-center justify-between gap-4'>
                                        <h1
                                             className="font-display  font-800 text-5xl sm:text-6xl lg:text-7xl leading-[1.04] tracking-tight animate-fadeUp"
                                             style={{ animationDelay: '0.1s' }}
                                        >
                                             <span style={{ color: '#0a1628' }}>Intelligence </span>
                                             <br />
                                             <span className="gt-brand">is Not</span>
                                             <br />
                                             <span style={{ color: '#1a3a5c' }}>Artificial</span>
                                        </h1>

                                        <img
                                             src="/logo.png"
                                             alt="Clearview"
                                             className={`h-[140px] w-[140px] object-contain transition sm:block hidden`} loading="lazy"
                                        />
                                   </div>

                                   <p className="text-lg leading-relaxed max-w-xl animate-fadeUp" style={{ color: '#2d4a63', animationDelay: '0.2s' }}>
                                        Clearview Land Survey delivers precision boundary surveys, ALTA reports, topographic mapping, and
                                        construction layout — with the expertise your property deserves.
                                   </p>

                                   <div className="flex flex-wrap gap-4 animate-fadeUp" style={{ animationDelay: '0.3s' }}>
                                        <Link href="#services" className="btn-brand px-8 py-3.5 rounded-xl text-sm flex items-center gap-2">
                                             Our Services
                                             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                             </svg>
                                        </Link>
                                        <Link href="#contact" className="btn-outline-brand px-8 py-3.5 rounded-xl text-sm flex items-center gap-2">
                                             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                             </svg>
                                             Request a Quote
                                        </Link>
                                   </div>

                                   <div className="flex flex-wrap gap-8 pt-4 animate-fadeUp" style={{ borderTop: '1px solid rgba(0,79,128,0.12)', animationDelay: '0.4s' }}>
                                        <div>
                                             <div className="font-display font-800 text-3xl gt-brand">35+</div>
                                             <div className="text-xs uppercase tracking-wider mt-0.5" style={{ color: '#7a9ab5' }}>Years Experience</div>
                                        </div>
                                        <div className="w-px" style={{ background: 'rgba(0,79,128,0.15)' }}></div>
                                        <div>
                                             <div className="font-display font-800 text-3xl gt-brand">6</div>
                                             <div className="text-xs uppercase tracking-wider mt-0.5" style={{ color: '#7a9ab5' }}>Survey Services</div>
                                        </div>
                                        <div className="w-px" style={{ background: 'rgba(0,79,128,0.15)' }}></div>
                                        <div>
                                             <div className="font-display font-800 text-3xl gt-brand">100%</div>
                                             <div className="text-xs uppercase tracking-wider mt-0.5" style={{ color: '#7a9ab5' }}>Licensed &amp; Insured</div>
                                        </div>
                                   </div>
                              </div>

                              {/* Right Carousel — untouched */}
                              <div className="hidden lg:block animate-fadeUp" style={{ animationDelay: '0.25s' }}>
                                   <div className="relative rounded-3xl overflow-hidden" style={{ height: '480px', boxShadow: '0 32px 80px rgba(0,10,30,0.55),0 0 0 1px rgba(0,170,238,0.15)' }}>
                                        {slides.map((slide, i) => (
                                             <div
                                                  key={i}
                                                  className="absolute inset-0 transition-all duration-700 ease-in-out"
                                                  style={{ opacity: current === i ? 1 : 0, transform: current === i ? 'scale(1)' : 'scale(1.04)', zIndex: current === i ? 2 : 1 }}
                                             >
                                                  <img src={slide.img} alt={slide.label} className="w-full h-full object-cover" loading={i === 0 ? "eager" : "lazy"} fetchPriority={i === 0 ? "high" : "auto"} />
                                                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top,rgba(0,8,25,0.88) 0%,rgba(0,8,25,0.35) 45%,rgba(0,8,25,0.1) 100%)' }}></div>
                                                  <svg className="absolute inset-0 w-full h-full opacity-[0.07] pointer-events-none" viewBox="0 0 900 620" preserveAspectRatio="xMidYMid slice" fill="none">
                                                       <circle cx="450" cy="310" r="200" stroke="#00aaee" strokeWidth="1" />
                                                       <circle cx="450" cy="310" r="120" stroke="#00aaee" strokeWidth="0.75" />
                                                       <line x1="250" y1="310" x2="650" y2="310" stroke="#00aaee" strokeWidth="0.75" />
                                                       <line x1="450" y1="110" x2="450" y2="510" stroke="#00aaee" strokeWidth="0.75" />
                                                  </svg>
                                             </div>
                                        ))}

                                        {[
                                             { top: 5, left: 5, pos: 'TL' },
                                             { top: 5, right: 5, pos: 'TR' },
                                             { bottom: 5, left: 5, pos: 'BL' },
                                             { bottom: 5, right: 5, pos: 'BR' },
                                        ].map((bracket, i) => (
                                             <svg key={i} className="absolute w-10 h-10 opacity-60 z-10" style={bracket as React.CSSProperties} viewBox="0 0 40 40" fill="none">
                                                  <path
                                                       d={bracket.pos === 'TL' ? 'M0 16 L0 0 L16 0' : bracket.pos === 'TR' ? 'M40 16 L40 0 L24 0' : bracket.pos === 'BL' ? 'M0 24 L0 40 L16 40' : 'M40 24 L40 40 L24 40'}
                                                       stroke={bracket.pos === 'TL' || bracket.pos === 'TR' ? '#00aaee' : '#38c5f5'}
                                                       strokeWidth="2" strokeLinecap="round"
                                                  />
                                             </svg>
                                        ))}

                                        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10">
                                             <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full" style={{ background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(12px)', border: '1px solid rgba(0,170,238,0.35)' }}>
                                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                                                  <span className="text-xs font-display font-600 text-white tracking-wider">{slides[current].tag}</span>
                                             </div>
                                        </div>

                                        <div className="absolute top-6 right-14 z-10 text-xs font-mono" style={{ color: 'rgba(255,255,255,0.5)' }}>
                                             <span>{String(current + 1).padStart(2, '0')}</span>
                                             <span className="opacity-40">/</span>
                                             <span>{String(slides.length).padStart(2, '0')}</span>
                                        </div>

                                        <div className="absolute bottom-0 left-0 right-0 z-10 p-6">
                                             <div className="rounded-2xl p-4" style={{ background: 'rgba(0,12,30,0.72)', backdropFilter: 'blur(16px)', border: '1px solid rgba(0,170,238,0.18)' }}>
                                                  <div className="flex items-end justify-between gap-4">
                                                       <div>
                                                            <p className="font-display font-800 text-white text-lg leading-tight mb-1">{slides[current].label}</p>
                                                            <p className="text-xs" style={{ color: 'rgba(180,210,240,0.7)' }}>{slides[current].sub}</p>
                                                       </div>
                                                       <div className="flex items-center gap-1.5 flex-shrink-0 pb-0.5">
                                                            {slides.map((_, i) => (
                                                                 <button key={i} onClick={() => go(i)} className="transition-all duration-300 rounded-full" style={{ width: current === i ? '22px' : '6px', height: '6px', background: current === i ? '#00aaee' : 'rgba(255,255,255,0.3)' }} />
                                                            ))}
                                                       </div>
                                                  </div>
                                                  <div className="mt-3 h-0.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.1)' }}>
                                                       <div className="h-full rounded-full" style={{ background: 'linear-gradient(90deg,#004f80,#00aaee)', animation: 'heroProgress 4.5s linear infinite' }} />
                                                  </div>
                                             </div>
                                        </div>

                                        <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:scale-110" style={{ background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.15)' }}>
                                             <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                                        </button>
                                        <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:scale-110" style={{ background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.15)' }}>
                                             <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                        </button>
                                   </div>

                                   {/* Floating Badges Below Carousel */}
                                   <div className="flex gap-3 mt-4 justify-center">
                                        <div className="px-3.5 py-2 rounded-2xl flex items-center gap-2" style={{ background: 'rgba(0,79,128,0.09)', border: '1px solid rgba(0,79,128,0.22)', animation: 'glowLight 2.8s ease-in-out infinite' }}>
                                             <div className="w-5 h-5 flex items-center justify-center">
                                                  <img src="/logo.png" alt="Clearview" className="w-full h-full object-contain" style={{ filter: 'brightness(0) saturate(100%) invert(14%) sepia(80%) saturate(600%) hue-rotate(185deg) brightness(80%) contrast(115%)' }} loading="lazy" />
                                             </div>
                                             <span className="text-xs font-display font-700" style={{ color: '#004f80' }}>Licensed &amp; Certified</span>
                                        </div>
                                        <div className="px-3.5 py-2 rounded-2xl flex items-center gap-2" style={{ background: 'rgba(0,79,128,0.06)', border: '1px solid rgba(0,79,128,0.15)' }}>
                                             <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                             <span className="text-xs font-display font-700" style={{ color: '#1a3a5c' }}>GPS + Drone Technology</span>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>

               {/* ══════════════════════════════════════════
                   LOOPING MARQUEE TICKER  ← NEW
                   Pinned to bottom of hero, scrolls forever
               ══════════════════════════════════════════ */}
               <div
                    className="relative w-full overflow-hidden py-4"
                    style={{
                         background: 'rgba(0,79,128,0.07)',
                         borderTop: '1px solid rgba(0,79,128,0.13)',
                    }}
               >
                    {/* Left edge fade */}
                    <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
                         style={{ background: 'linear-gradient(to right,#eef6ff,transparent)' }} />
                    {/* Right edge fade */}
                    <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
                         style={{ background: 'linear-gradient(to left,#eef6ff,transparent)' }} />

                    {/* Track — two identical sets side-by-side; animation slides left by 50% for seamless loop */}
                    <div className="ticker-track flex whitespace-nowrap will-change-transform"
                         style={{ animation: 'tickerScroll 30s linear infinite' }}>
                         {/* Copy A */}
                         {TICKER_TEXT.map((text, i) => (
                              <span key={`a-${i}`} className="inline-flex items-center gap-5 px-6">
                                   <span className="font-display font-800 uppercase tracking-[0.14em] text-sm" style={{ color: '#004f80' }}>
                                        {text}
                                   </span>
                                   {/* Diamond separator */}
                                   <svg width="8" height="8" viewBox="0 0 8 8" fill="none" style={{ flexShrink: 0 }}>
                                        <rect x="4" y="0" width="5.66" height="5.66" rx="0.5" transform="rotate(45 4 0)" fill="rgba(0,79,128,0.4)" />
                                   </svg>
                              </span>
                         ))}
                         {/* Copy B — seamless join */}
                         {TICKER_TEXT.map((text, i) => (
                              <span key={`b-${i}`} className="inline-flex items-center gap-5 px-6">
                                   <span className="font-display font-800 uppercase tracking-[0.14em] text-sm" style={{ color: '#004f80' }}>
                                        {text}
                                   </span>
                                   <svg width="8" height="8" viewBox="0 0 8 8" fill="none" style={{ flexShrink: 0 }}>
                                        <rect x="4" y="0" width="5.66" height="5.66" rx="0.5" transform="rotate(45 4 0)" fill="rgba(0,79,128,0.4)" />
                                   </svg>
                              </span>
                         ))}
                    </div>
               </div>

               {/* Scroll indicator */}
               <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40">
                    <span className="text-xs tracking-widest uppercase" style={{ color: '#7a9ab5' }}>Scroll</span>
                    <div className="w-px h-8" style={{ background: 'linear-gradient(to bottom,#004f80,transparent)' }}></div>
               </div>

               <style>{`
                    @keyframes heroProgress {
                         from { width: 0; }
                         to   { width: 100%; }
                    }
                    @keyframes glowLight {
                         0%,100% { box-shadow: 0 0 16px rgba(0,79,128,0.18); }
                         50%     { box-shadow: 0 0 30px rgba(0,79,128,0.35); }
                    }
                    /* Ticker: slides left by 50% (one full copy width) then jumps back */
                    @keyframes tickerScroll {
                         0%   { transform: translateX(0); }
                         100% { transform: translateX(-50%); }
                    }
                    /* Optional: pause on hover */
                    .ticker-track:hover { animation-play-state: paused; }
               `}</style>
          </section>
     );
}
