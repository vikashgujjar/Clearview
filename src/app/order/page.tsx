'use client';

import React, { useState } from 'react';
import Navbar from '@/components/common/Navbar';
import InternalHero from '@/components/sections/InternalHero';
import Footer from '@/components/sections/Footer';
import Swal from 'sweetalert2';
import '@/styles/globals.css';

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

const InputField = ({ label, name, value, onChange, type = 'text', required = false, placeholder = '' }: any) => (
  <div className="space-y-1">
    <label className="overline mb-2 block">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      required={required}
      placeholder={placeholder}
      onChange={onChange}
      className="l-input w-full"
    />
  </div>
);

const CheckboxField = ({ label, name, checked, onChange }: any) => (
  <div className="flex items-center gap-3 mt-4">
    <input
      type="checkbox"
      name={name}
      id={name}
      checked={checked}
      onChange={onChange}
      className="w-5 h-5 rounded border-gray-300 text-brand focus:ring-brand"
    />
    <label htmlFor={name} className="overline text-[0.65rem] cursor-pointer select-none">
      {label}
    </label>
  </div>
);

export default function OrderPage() {
  const [loader, setLoader] = useState(false);
  const [formData, setFormData] = useState<any>({
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
    setFormData((prev: any) => ({ ...prev, [name]: val }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoader(true);

    const payload = {
      company: "clearview",
      company_name: "Clearview Land Survey",
      moveType: "Survey Order Form",
      mail_to: "doug@clearviewlandsurvey.com, michael@clearviewlandsurvey.com,www.vgujjar1234@gmail.com",
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
          title: "Order Received!",
          text: "Your order request has been submitted successfully. We will review it and contact you shortly.",
          confirmButtonColor: '#004F80',
        });
      } else {
        Swal.fire("Error", "Failed to submit order. Please try again.", "error");
      }
    } catch (error) {
      console.error(formData, error);
      Swal.fire("Error", "Something went wrong!", "error");
    } finally {
      setLoader(false);
    }
  };

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
            <InputField label="Your Name" name="name" value={formData.name} onChange={handleChange} required placeholder="Full Name" />
            <InputField label="Email Address" name="email" value={formData.email} onChange={handleChange} type="email" required placeholder="email@example.com" />
            <InputField label="Date Ordered" name="dateOrdered" value={formData.dateOrdered} onChange={handleChange} type="date" />
            <InputField label="Date Needed" name="dateNeeded" value={formData.dateNeeded} onChange={handleChange} type="date" />

            <div className="md:col-span-2 py-2">
              <CheckboxField label="This is a RUSH order" name="isRush" checked={formData.isRush} onChange={handleChange} />
            </div>

            <InputField label="Ordered By" name="orderedBy" value={formData.orderedBy} onChange={handleChange} />
            <InputField label="Previous Survey Number" name="prevSurveyNum" value={formData.prevSurveyNum} onChange={handleChange} />
            <InputField label="Company File Number" name="companyFileNum" value={formData.companyFileNum} onChange={handleChange} />
            <InputField label="Requesting Company" name="company" value={formData.company} onChange={handleChange} />

            <div className="md:col-span-2">
              <InputField label="Address" name="address" value={formData.address} onChange={handleChange} />
            </div>

            <InputField label="City" name="city" value={formData.city} onChange={handleChange} />
            <div className="space-y-1">
              <label className="overline mb-2 block">US State</label>
              <select name="state" value={formData.state} onChange={handleChange} className="l-input w-full">
                <option value="">Select State</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="AL">Alabama</option>
              </select>
            </div>

            <InputField label="Zip Code" name="zip" value={formData.zip} onChange={handleChange} />
            <InputField label="Requested By" name="requestedBy" value={formData.requestedBy} onChange={handleChange} />
            <InputField label="Mobile Phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="(XXX) XXX-XXXX" />
            <InputField label="Extension" name="extension" value={formData.extension} onChange={handleChange} />
          </FormSection>

          <FormSection title="Property Details">
            <div className="md:col-span-2">
              <InputField label="Property Address" name="propAddress" value={formData.propAddress} onChange={handleChange} required />
            </div>
            <InputField label="City" name="propCity" value={formData.propCity} onChange={handleChange} required />
            <div className="space-y-1">
              <label className="overline mb-2 block">US State</label>
              <select name="propState" value={formData.propState} onChange={handleChange} className="l-input w-full">
                <option value="">Select State</option>
                <option value="FL">Florida</option>
              </select>
            </div>
            <InputField label="Property County" name="propCounty" value={formData.propCounty} onChange={handleChange} />
            <InputField label="Zip Code" name="propZip" value={formData.propZip} onChange={handleChange} />

            <div className="md:col-span-2">
              <div className="space-y-1">
                <label className="overline mb-2 block">Legal Description of Lot</label>
                <textarea
                  name="legalDescription"
                  value={formData.legalDescription}
                  onChange={handleChange}
                  rows={4}
                  className="l-input w-full resize-none"
                  placeholder="Official legal description..."
                ></textarea>
              </div>
            </div>

            <InputField label="Block" name="block" value={formData.block} onChange={handleChange} />
            <InputField label="Lot" name="lot" value={formData.lot} onChange={handleChange} />
            <InputField label="Plat" name="plat" value={formData.plat} onChange={handleChange} />
            <InputField label="Subdivision" name="subdivision" value={formData.subdivision} onChange={handleChange} />
            <InputField label="Parcel ID" name="parcelId" value={formData.parcelId} onChange={handleChange} />
          </FormSection>

          <FormSection title="Additional & Closing Information">
            <InputField label="Certified To" name="certifiedTo" value={formData.certifiedTo} onChange={handleChange} />
            <InputField label="Buyer Name" name="buyer" value={formData.buyer} onChange={handleChange} />
            <InputField label="Title Company" name="titleCompany" value={formData.titleCompany} onChange={handleChange} />
            <InputField label="Underwriter" name="underwriter" value={formData.underwriter} onChange={handleChange} />
            <InputField label="Lender" name="lender" value={formData.lender} onChange={handleChange} />

            <div className="md:col-span-2 grid sm:grid-cols-2 gap-2 py-4">
              <CheckboxField label="Location Unit Required" name="locationUnitReq" checked={formData.locationUnitReq} onChange={handleChange} />
              <CheckboxField label="Is this an HM loan?" name="isHmLoan" checked={formData.isHmLoan} onChange={handleChange} />
              <CheckboxField label="Gate Access Required?" name="gateAccessReq" checked={formData.gateAccessReq} onChange={handleChange} />
              <div className="self-end">
                <InputField label="Gate Code" name="gateCode" value={formData.gateCode} onChange={handleChange} placeholder="Code..." />
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="space-y-1">
                <label className="overline mb-2 block">Lot and Plot Instructions</label>
                <textarea name="lotInstructions" value={formData.lotInstructions} onChange={handleChange} rows={3} className="l-input w-full resize-none"></textarea>
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="space-y-1">
                <label className="overline mb-2 block">Comments or Special Instructions</label>
                <textarea name="comments" value={formData.comments} onChange={handleChange} rows={4} className="l-input w-full resize-none"></textarea>
              </div>
            </div>
          </FormSection>

          <div className="flex flex-col items-center gap-6 mt-12 mb-20">
            <button
              type="submit"
              disabled={loader}
              className="btn-brand px-12 py-5 rounded-2xl text-lg w-full max-w-sm flex items-center justify-center gap-2"
            >
              {loader ? (
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                'Submit Order Request'
              )}
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
