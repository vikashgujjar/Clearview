'use client';

import React, { useState } from 'react';
import Swal from 'sweetalert2';

export default function Contact({ whiteBg = false }: { whiteBg?: boolean }) {
  const [loader, setLoader] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    surveyType: '',
    details: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoader(true);

    const payload = {
      company: "clearview",
      company_name: "Clearview Land Survey",
      moveType: "Contact Form",
      mail_to: "doug@clearviewlandsurvey.com, michael@clearviewlandsurvey.com",
      ...formData,
    };

    try {
      const response = await fetch(
        "https://mail.futuretouch.org/api/send-message",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        await Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "We have received your request and will contact you shortly.",
          confirmButtonColor: '#004F80',
        });
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          surveyType: '',
          details: '',
        });
      } else {
        Swal.fire("Error", "Failed to send message. Please try again.", "error");
      }
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "Something went wrong!", "error");
    } finally {
      setLoader(false);
    }
  };

  return (
    <section
      id="contact"
      style={{
        background: whiteBg ? '#ffffff' : 'linear-gradient(180deg, #e4f0fc 0%, #ddeeff 100%)',
        padding: '6rem 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="absolute inset-0 grid-bg-light opacity-50"></div>
      <svg
        className="absolute right-0 bottom-0 opacity-[0.05] pointer-events-none"
        width="500"
        height="500"
        viewBox="0 0 500 500"
        fill="none"
      >
        <circle cx="500" cy="500" r="300" stroke="#004f80" strokeWidth="1.5" />
        <circle cx="500" cy="500" r="200" stroke="#004f80" strokeWidth="1" />
        <circle cx="500" cy="500" r="100" stroke="#004f80" strokeWidth="0.75" />
      </svg>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center max-w-xl mx-auto mb-14 reveal">
          <span className="badge-light mb-4 block">Get In Touch</span>
          <h2
            className="font-display font-800 leading-tight mt-4"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: 'var(--text-h)',
            }}
          >
            Request a <span className="gt-brand">Survey Quote</span>
          </h2>
          <p className="mt-4 text-base" style={{ color: 'var(--text-body)' }}>
            Detailed, transparent quote — no vague estimates, ever. We respond within 1 hours.
          </p>
        </div>

        {/* 5-Column Layout: 2 cols info + 3 cols form */}
        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* LEFT: Contact Info (2 columns) */}
          <div className="lg:col-span-2 space-y-5 reveal">
            {/* Contact Info Cards */}
            <div
              className="contact-info p-5 flex items-start gap-4"
              style={{
                background: 'var(--bg-white)',
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: 'rgba(0,79,128,0.08)',
                  border: '1px solid var(--border)',
                  color: 'var(--brand)',
                }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="font-display font-700 text-sm mb-0.5" style={{ color: 'var(--text-h)' }}>
                  Office
                </p>
                <p className="text-sm" style={{ color: 'var(--text-body)' }}>
                  Clearview Land Survey
                  <br />
                  Local Coverage Area
                </p>
              </div>
            </div>

            <div
              className="contact-info p-5 flex items-start gap-4"
              style={{
                background: 'var(--bg-white)',
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: 'rgba(0,79,128,0.08)',
                  border: '1px solid var(--border)',
                  color: 'var(--brand)',
                }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-display font-700 text-sm mb-0.5" style={{ color: 'var(--text-h)' }}>
                  Email
                </p>
                <p className="text-sm" style={{ color: 'var(--brand)' }}>
                  info@clearviewsurvey.com
                </p>
                <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
                  Response within 1 hours
                </p>
              </div>
            </div>

            <div
              className="contact-info p-5 flex items-start gap-4"
              style={{
                background: 'var(--bg-white)',
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: 'rgba(0,79,128,0.08)',
                  border: '1px solid var(--border)',
                  color: 'var(--brand)',
                }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-display font-700 text-sm mb-0.5" style={{ color: 'var(--text-h)' }}>
                  Phone
                </p>
                <p className="text-sm" style={{ color: 'var(--text-body)' }}>
                  Call for immediate assistance
                </p>
                <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
                  Mon–Fri, 8AM–5PM
                </p>
              </div>
            </div>

            {/* Logo card */}
            <div
              className="rounded-2xl p-5 flex items-center gap-4"
              style={{
                background: 'var(--brand)',
              }}
            >
              <img src="/logo.png" alt="Clearview" className="w-14 h-14 object-contain flex-shrink-0 logo-dark" />
              <div>
                <p className="font-display font-700 text-white text-sm">Clearview Land Survey</p>
                <p className="text-sky-200/70 text-xs mt-1 italic">"Intelligence Isn't Artificial."</p>
                <p className="text-xs mt-2 text-sky-300 font-600">Licensed · Insured · Precise</p>
              </div>
            </div>
          </div>

          {/* RIGHT: Form (3 columns) */}
          <div className="lg:col-span-3 reveal" style={{ transitionDelay: '0.18s' }}>
            <div
              className="rounded-3xl p-8 lg:p-10"
              style={{
                background: '#fff',
                border: '1px solid var(--border)',
                boxShadow: '0 16px 60px rgba(0, 79, 128, 0.1)',
              }}
            >
              <h3 className="font-display font-700 text-xl mb-6" style={{ color: 'var(--text-h)' }}>
                Get Your Free Quote
              </h3>
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="overline mb-2 block">First Name</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required placeholder="John" className="l-input" />
                  </div>
                  <div>
                    <label className="overline mb-2 block">Last Name</label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required placeholder="Doe" className="l-input" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="overline mb-2 block">Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="john@company.com" className="l-input" />
                  </div>
                  <div>
                    <label className="overline mb-2 block">Phone</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="(555) 000-0000" className="l-input" />
                  </div>
                </div>
                <div>
                  <label className="overline mb-2 block">Survey Type</label>
                  <select name="surveyType" value={formData.surveyType} onChange={handleChange} className="l-input">
                    <option value="">Select a survey type</option>
                    <option>ALTA Survey</option>
                    <option>Boundary Survey</option>
                    <option>As-Built Survey</option>
                    <option>Construction Layout</option>
                    <option>Elevation Certificate</option>
                    <option>Topographic Survey</option>
                    <option>Not sure — need guidance</option>
                  </select>
                </div>
                <div>
                  <label className="overline mb-2 block">Project Details</label>
                  <textarea
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your property and project requirements..."
                    className="l-input resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={loader}
                  className="btn-brand w-full py-4 rounded-xl text-sm flex items-center justify-center gap-2 mt-2 disabled:opacity-70"
                >
                  {loader ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      Submit Quote Request
                    </>
                  )}
                </button>
                <p className="text-center text-xs" style={{ color: 'var(--text-muted)' }}>
                  We respond within 1 hours with a detailed, transparent quote.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

