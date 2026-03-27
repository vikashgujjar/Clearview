'use client';

import React, { useState } from 'react';
import Navbar from '@/components/common/Navbar';
import InternalHero from '@/components/sections/InternalHero';
import Footer from '@/components/sections/Footer';
import '@/styles/globals.css';

export default function OrderPage() {
  const [formData, setFormData] = useState({
    // Requester Info
    name: '',
    email: '',
    dateOrdered: '',
    dateNeeded: '',
    isRush: false,
    orderedBy: '',
    prevSurveyNum: '',
    companyFileNum: '',
    company: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    requestedBy: '',
    requestedByFax: '',
    phone: '',
    extension: '',
    // Property Info
    propAddress: '',
    propCity: '',
    propState: '',
    propZip: '',
    propCounty: '',
    legalDescription: '',
    block: '',
    lot: '',
    plat: '',
    subdivision: '',
    parcelId: '',
    // Legal / Addl
    certifiedTo: '',
    buyer: '',
    titleCompany: '',
    underwriter: '',
    lender: '',
    locationUnitReq: false,
    isHmLoan: false,
    gateAccessReq: false,
    gateCode: '',
    lotInstructions: '',
    comments: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData(prev => ({ ...prev, [name]: val }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Thank you! Your order has been submitted. We will contact you shortly.');
  };

  const FormSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div className="mb-12 bg-white rounded-[2rem] p-8 lg:p-10 border border-[var(--border)] shadow-[0_16px_60px_rgba(0,79,128,0.1)]">
      <h3 className="font-display font-800 text-2xl mb-8 text-brand pb-4 border-b border-gray-50 flex items-center gap-3">
        <span className="w-2 h-8 bg-brand rounded-full"></span>
        {title}
      </h3>
      <div className="grid md:grid-cols-2 gap-6">
        {children}
      </div>
    </div>
  );

  const InputField = ({ label, name, type = 'text', required = false, placeholder = '' }: any) => (
    <div className="space-y-1">
      <label className="overline mb-2 block">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        onChange={handleChange}
        className="l-input w-full"
      />
    </div>
  );

  const CheckboxField = ({ label, name }: any) => (
    <div className="flex items-center gap-3 mt-4">
      <input
        type="checkbox"
        name={name}
        id={name}
        onChange={handleChange}
        className="w-5 h-5 rounded border-gray-300 text-brand focus:ring-brand"
      />
      <label htmlFor={name} className="overline text-[0.65rem] cursor-pointer select-none">
        {label}
      </label>
    </div>
  );

  return (
    <main className="bg-[#fcfdfe]">
      <Navbar />
      <InternalHero 
        title="Order Professional Surveys" 
        subtitle="Comprehensive request form for precise land surveying services."
        breadcrumb="Order Services"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <form onSubmit={handleSubmit} className="reveal">
          <FormSection title="Requester Information">
            <InputField label="Your Name" name="name" required placeholder="Full Name" />
            <InputField label="Email Address" name="email" type="email" required placeholder="email@example.com" />
            <InputField label="Date Ordered" name="dateOrdered" type="date" />
            <InputField label="Date Needed" name="dateNeeded" type="date" />
            
            <div className="md:col-span-2 py-2">
              <CheckboxField label="This is a RUSH order" name="isRush" />
            </div>

            <InputField label="Ordered By" name="orderedBy" />
            <InputField label="Previous Survey Number" name="prevSurveyNum" />
            <InputField label="Company File Number" name="companyFileNum" />
            <InputField label="Requesting Company" name="company" />
            
            <div className="md:col-span-2">
              <InputField label="Address" name="address" />
            </div>
            
            <InputField label="City" name="city" />
            <div className="space-y-1">
              <label className="overline mb-2 block">US State</label>
              <select name="state" onChange={handleChange} className="l-input w-full">
                <option value="">Select State</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="AL">Alabama</option>
              </select>
            </div>
            
            <InputField label="Zip Code" name="zip" />
            <InputField label="Requested By" name="requestedBy" />
            <InputField label="Mobile Phone" name="phone" placeholder="(XXX) XXX-XXXX" />
            <InputField label="Extension" name="extension" />
          </FormSection>

          <FormSection title="Property Details">
            <div className="md:col-span-2">
              <InputField label="Property Address" name="propAddress" required />
            </div>
            <InputField label="City" name="propCity" required />
            <div className="space-y-1">
              <label className="overline mb-2 block">US State</label>
              <select name="propState" onChange={handleChange} className="l-input w-full">
                <option value="">Select State</option>
                <option value="FL">Florida</option>
              </select>
            </div>
            <InputField label="Property County" name="propCounty" />
            <InputField label="Zip Code" name="propZip" />
            
            <div className="md:col-span-2">
              <div className="space-y-1">
                <label className="overline mb-2 block">Legal Description of Lot</label>
                <textarea 
                  name="legalDescription" 
                  onChange={handleChange} 
                  rows={4} 
                  className="l-input w-full resize-none"
                  placeholder="Official legal description..."
                ></textarea>
              </div>
            </div>

            <InputField label="Block" name="block" />
            <InputField label="Lot" name="lot" />
            <InputField label="Plat" name="plat" />
            <InputField label="Subdivision" name="subdivision" />
            <InputField label="Parcel ID" name="parcelId" />
          </FormSection>

          <FormSection title="Additional & Closing Information">
            <InputField label="Certified To" name="certifiedTo" />
            <InputField label="Buyer Name" name="buyer" />
            <InputField label="Title Company" name="titleCompany" />
            <InputField label="Underwriter" name="underwriter" />
            <InputField label="Lender" name="lender" />
            
            <div className="md:col-span-2 grid sm:grid-cols-2 gap-2 py-4">
              <CheckboxField label="Location Unit Required" name="locationUnitReq" />
              <CheckboxField label="Is this an HM loan?" name="isHmLoan" />
              <CheckboxField label="Gate Access Required?" name="gateAccessReq" />
              <div className="self-end">
                <InputField label="Gate Code" name="gateCode" placeholder="Code..." />
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="space-y-1">
                <label className="overline mb-2 block">Lot and Plot Instructions</label>
                <textarea name="lotInstructions" onChange={handleChange} rows={3} className="l-input w-full resize-none"></textarea>
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="space-y-1">
                <label className="overline mb-2 block">Comments or Special Instructions</label>
                <textarea name="comments" onChange={handleChange} rows={4} className="l-input w-full resize-none"></textarea>
              </div>
            </div>
          </FormSection>

          <div className="flex flex-col items-center gap-6 mt-12 mb-20">
            <button type="submit" className="btn-brand px-12 py-5 rounded-2xl text-lg w-full max-w-sm">
              Submit Order Request
            </button>
            <p className="text-xs text-gray-400 max-w-md text-center">
              By submitting this form, you certify that you are an authorized representative of the ordering party and agree to our terms of service for technical and field operations.
            </p>
          </div>
        </form>
      </div>

      <Footer />
    </main>
  );
}
