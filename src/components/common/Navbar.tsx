'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/why-us', label: 'Why Us' },
    { href: '/about', label: 'About' },
    { href: '/unique-survey-sample', label: 'Unique Survey Sample' },
    { href: '/contact-us', label: 'Contact' },
  ];


  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={
        scrolled
          ? {
            padding: '0.5rem 0',
            background: 'rgba(255,255,255,0.96)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            boxShadow: '0 4px 24px rgba(0,79,128,0.08)',
          }
          : {
            padding: '1rem 0',
            background: 'transparent',
          }
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Clearview"
              className={`h-16 w-16 object-contain transition ${scrolled ? 'logo-light' : 'logo-light'
                }`}
            />
            {/* <div className="hidden sm:block">
              <p
                className="font-display font-800 text-base leading-none tracking-tight"
                style={{ color: scrolled ? 'rgb(17, 24, 39)' : '#ffffff' }}
              >
                Clearview
              </p>
              <p
                className="font-display font-600 text-xs tracking-[0.18em] uppercase mt-0.5"
                style={{
                  color: scrolled ? '#004f80' : '#ffffff',
                }}
              >
                Land Survey
              </p>
            </div> */}
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-light ${isActive ? 'nav-active' : ''}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>


          {/* CTA Button and Mobile Menu */}
          <div className="flex items-center gap-3">
            <Link
              href="/order"
              className="hidden md:inline-flex btn-brand items-center gap-2 px-5 py-2.5 rounded-xl text-sm"
            >
              Order Survey
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-xl transition"
              style={
                scrolled
                  ? { border: '1px solid rgb(219,234,254)', background: '#ffffff' }
                  : { background: '#ffffff', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }
              }
            >
              {/* Top bar — moves DOWN then rotates 45° */}
              <span
                className="w-5 h-0.5 rounded-full block"
                style={{
                  background: '#004f80',
                  transition: 'transform 0.3s ease, opacity 0.3s ease',
                  transform: mobileOpen ? 'translateY(8px) rotate(45deg)' : 'translateY(0) rotate(0)',
                }}
              />
              {/* Middle bar — fades out */}
              <span
                className="w-5 h-0.5 rounded-full block"
                style={{
                  background: '#004f80',
                  transition: 'opacity 0.3s ease',
                  opacity: mobileOpen ? 0 : 1,
                }}
              />
              {/* Bottom bar — moves UP then rotates -45° */}
              <span
                className="w-5 h-0.5 rounded-full block"
                style={{
                  background: '#004f80',
                  transition: 'transform 0.3s ease, opacity 0.3s ease',
                  transform: mobileOpen ? 'translateY(-8px) rotate(-45deg)' : 'translateY(0) rotate(0)',
                }}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div
            className="md:hidden mt-3 bg-white rounded-2xl p-5 space-y-1 shadow-xl border"
            style={{ borderColor: 'rgba(0,79,128,0.13)' }}
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block py-2.5 px-4 rounded-xl text-sm font-display font-600 transition ${isActive ? 'bg-blue-50' : 'hover:bg-blue-50'
                    }`}
                  style={{ color: isActive ? 'var(--brand)' : '#1a3a5c' }}
                >
                  {link.label}
                </Link>
              );
            })}

            <Link
              href="/order"
              className="btn-brand block text-center px-5 py-2.5 rounded-xl text-sm mt-2"
            >
              Order Survey
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
