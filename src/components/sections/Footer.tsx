import Link from 'next/link';
import { services } from '@/data/services';


export default function Footer() {
  return (
    <footer
      style={{
        background: '#071628',
        borderTop: '2px solid rgba(0,79,128,0.3)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/logo.png"
                alt="Clearview"
                className="w-12 h-12 object-contain logo-dark" loading="lazy"
              />
              <div>
                <p className="font-display font-800 text-white text-base leading-none">Clearview</p>
                <p
                  className="font-display font-600 text-xs tracking-[0.18em] uppercase mt-0.5"
                  style={{ color: '#5ba3cc' }}
                >
                  Land Survey
                </p>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              Licensed land surveying professionals. Precision, integrity, and clear results — every time.
            </p>
            <p className="text-xs italic font-display" style={{ color: '#fff' }}>
              &quot;Intelligence Isn&apos;t Artificial.&quot;
            </p>
            <div className="flex items-center gap-2 mt-4">
              <div
                className="px-3 py-1.5 rounded-lg text-xs font-display font-600"
                style={{
                  background: 'rgba(0,79,128,0.2)',
                  color: '#5ba3cc',
                }}
              >
                Licensed
              </div>
              <div
                className="px-3 py-1.5 rounded-lg text-xs font-display font-600"
                style={{
                  background: 'rgba(0,79,128,0.2)',
                  color: '#5ba3cc',
                }}
              >
                Insured
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-700 text-white text-sm uppercase tracking-wider mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.id}`}
                    className="text-gray-500 text-sm hover:text-sky-400 transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full" style={{ background: '#004f80' }}></span>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          {/* Quick Links */}
          <div>
            <h4 className="font-display font-700 text-white text-sm uppercase tracking-wider mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'Services', href: '/services' },
                { label: 'Why Choose Us', href: '/why-us' },
                { label: 'About Us', href: '/about' },
                { label: 'Survey Sample', href: '/unique-survey-sample' },
                { label: 'Contact Us', href: '/contact-us' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-500 text-sm hover:text-sky-400 transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-emerald-700"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-700 text-white text-sm uppercase tracking-wider mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg
                  className="w-4 h-4 mt-0.5 flex-shrink-0"
                  style={{ color: '#1e4a68' }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-gray-500 text-sm">info@clearviewsurvey.com</span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-4 h-4 mt-0.5 flex-shrink-0"
                  style={{ color: '#1e4a68' }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-gray-500 text-sm">Mon–Fri: 8:00 AM – 5:00 PM</span>
              </li>
              <li className="mt-6">
                <Link href="/order" className="btn-brand block text-center px-5 py-2.5 rounded-xl text-sm">
                  Order Now →
                </Link>
              </li>
            </ul>
          </div>
        </div>


        <div
          className="mt-12 pt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{
            borderTop: '1px solid rgba(255,255,255,0.05)',
          }}
        >
          <p className="text-gray-600 text-xs">© 2025 Clearview Land Survey. All rights reserved.</p>
          {/* <div className="flex gap-6">
            <a href="#" className="text-gray-600 text-xs hover:text-gray-400 transition">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-600 text-xs hover:text-gray-400 transition">
              Terms of Service
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
