'use client';

import React, { useState } from 'react';
import Navbar from '@/components/common/Navbar';
import InternalHero from '@/components/sections/InternalHero';
import Footer from '@/components/sections/Footer';
import Swal from 'sweetalert2';
import '@/styles/globals.css';

const US_STATES = [
  { code: 'AL', name: 'Alabama' },
  { code: 'AK', name: 'Alaska' },
  { code: 'AZ', name: 'Arizona' },
  { code: 'AR', name: 'Arkansas' },
  { code: 'CA', name: 'California' },
  { code: 'CO', name: 'Colorado' },
  { code: 'CT', name: 'Connecticut' },
  { code: 'DE', name: 'Delaware' },
  { code: 'DC', name: 'District Of Columbia' },
  { code: 'FL', name: 'Florida' },
  { code: 'GA', name: 'Georgia' },
  { code: 'HI', name: 'Hawaii' },
  { code: 'ID', name: 'Idaho' },
  { code: 'IL', name: 'Illinois' },
  { code: 'IN', name: 'Indiana' },
  { code: 'IA', name: 'Iowa' },
  { code: 'KS', name: 'Kansas' },
  { code: 'KY', name: 'Kentucky' },
  { code: 'LA', name: 'Louisiana' },
  { code: 'ME', name: 'Maine' },
  { code: 'MD', name: 'Maryland' },
  { code: 'MA', name: 'Massachusetts' },
  { code: 'MI', name: 'Michigan' },
  { code: 'MN', name: 'Minnesota' },
  { code: 'MS', name: 'Mississippi' },
  { code: 'MO', name: 'Missouri' },
  { code: 'MT', name: 'Montana' },
  { code: 'NE', name: 'Nebraska' },
  { code: 'NV', name: 'Nevada' },
  { code: 'NH', name: 'New Hampshire' },
  { code: 'NJ', name: 'New Jersey' },
  { code: 'NM', name: 'New Mexico' },
  { code: 'NY', name: 'New York' },
  { code: 'NC', name: 'North Carolina' },
  { code: 'ND', name: 'North Dakota' },
  { code: 'OH', name: 'Ohio' },
  { code: 'OK', name: 'Oklahoma' },
  { code: 'OR', name: 'Oregon' },
  { code: 'PA', name: 'Pennsylvania' },
  { code: 'RI', name: 'Rhode Island' },
  { code: 'SC', name: 'South Carolina' },
  { code: 'SD', name: 'South Dakota' },
  { code: 'TN', name: 'Tennessee' },
  { code: 'TX', name: 'Texas' },
  { code: 'UT', name: 'Utah' },
  { code: 'VT', name: 'Vermont' },
  { code: 'VA', name: 'Virginia' },
  { code: 'WA', name: 'Washington' },
  { code: 'WV', name: 'West Virginia' },
  { code: 'WI', name: 'Wisconsin' },
  { code: 'WY', name: 'Wyoming' }
];

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

const InputField = ({ label, name, value, onChange, type = 'text', required = false, placeholder = '', error }: any) => (
  <div className="space-y-1">
    <label className={`overline mb-2 block ${error ? 'text-red-500' : ''}`}>
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      required={required}
      placeholder={placeholder}
      onChange={onChange}
      className={`l-input w-full ${error ? 'border-red-500 focus:ring-red-500' : ''}`}
    />
    {error && <p className="text-[0.65rem] text-red-500 mt-1 uppercase font-700 tracking-wider">{error}</p>}
  </div>
);

const SelectField = ({ label, name, value, onChange, options, required = false, error }: any) => (
  <div className="space-y-1">
    <label className={`overline mb-2 block ${error ? 'text-red-500' : ''}`}>
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className={`l-input w-full ${error ? 'border-red-500 focus:ring-red-500' : ''}`}
    >
      <option value="">Select {label}</option>
      {options.map((opt: any) => (
        <option key={opt.code || opt} value={opt.code || opt}>
          {opt.name || opt}
        </option>
      ))}
    </select>
    {error && <p className="text-[0.65rem] text-red-500 mt-1 uppercase font-700 tracking-wider">{error}</p>}
  </div>
);

const TextareaField = ({ label, name, value, onChange, rows = 4, placeholder = '', error }: any) => (
  <div className="space-y-1">
    <label className={`overline mb-2 block ${error ? 'text-red-500' : ''}`}>
      {label}
    </label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      rows={rows}
      className={`l-input w-full resize-none ${error ? 'border-red-500 focus:ring-red-500' : ''}`}
      placeholder={placeholder}
    ></textarea>
    {error && <p className="text-[0.65rem] text-red-500 mt-1 uppercase font-700 tracking-wider">{error}</p>}
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
  const [errors, setErrors] = useState<any>({});
  const [formData, setFormData] = useState<any>({
    // Requester Info
    name: '',
    email: '',
    personOrderingName: '',
    personCompanyName: '',
    personOrderingEmail: '',
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
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData((prev: any) => ({ ...prev, [name]: val }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev: any) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validateForm = () => {
    const newErrors: any = {};
    
    // Requester Info
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    
    // Property Info
    if (!formData.propAddress.trim()) newErrors.propAddress = 'Property address is required';
    if (!formData.propCity.trim()) newErrors.propCity = 'City is required';
    if (!formData.propState.trim()) newErrors.propState = 'State selection is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      Swal.fire({
        icon: 'error',
        title: 'Validation Error',
        text: 'Please fill in all required fields correctly.',
        confirmButtonColor: '#004F80',
      });
      return;
    }

    setLoader(true);

    const payload = {
      company: "clearview",
      company_name: "Clearview Land Survey",
      moveType: "Survey Order Form",
      mail_to: "doug@clearviewlandsurvey.com,michael@clearviewlandsurvey.com",
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
        <form onSubmit={handleSubmit} className="reveal" noValidate>
          <FormSection title="Requester Information">
            <InputField label="Your Name" name="name" value={formData.name} onChange={handleChange} required placeholder="Full Name" error={errors.name} />
            <InputField label="Email Address" name="email" value={formData.email} onChange={handleChange} type="email" required placeholder="email@example.com" error={errors.email} />
            
            <InputField label="Person Ordering Name" name="personOrderingName" value={formData.personOrderingName} onChange={handleChange} />
            <InputField label="Person Company Name" name="personCompanyName" value={formData.personCompanyName} onChange={handleChange} />
            <InputField label="Person Ordering Email" name="personOrderingEmail" value={formData.personOrderingEmail} onChange={handleChange} type="email" />

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
            <SelectField label="State" name="state" value={formData.state} onChange={handleChange} options={US_STATES} error={errors.state} />

            <InputField label="Zip Code" name="zip" value={formData.zip} onChange={handleChange} />
            <InputField label="Requested By" name="requestedBy" value={formData.requestedBy} onChange={handleChange} />
            <InputField label="Mobile Phone" name="phone" value={formData.phone} onChange={handleChange} required placeholder="(XXX) XXX-XXXX" error={errors.phone} />
            <InputField label="Extension" name="extension" value={formData.extension} onChange={handleChange} />
          </FormSection>

          <FormSection title="Property Details">
            <div className="md:col-span-2">
              <InputField label="Property Address" name="propAddress" value={formData.propAddress} onChange={handleChange} required error={errors.propAddress} />
            </div>
            <InputField label="City" name="propCity" value={formData.propCity} onChange={handleChange} required error={errors.propCity} />
            <SelectField label="State" name="propState" value={formData.propState} onChange={handleChange} options={US_STATES} required error={errors.propState} />
            <InputField label="Property County" name="propCounty" value={formData.propCounty} onChange={handleChange} />
            <InputField label="Zip Code" name="propZip" value={formData.propZip} onChange={handleChange} error={errors.propZip} />

            <div className="md:col-span-2">
              <TextareaField
                label="Legal Description of Lot"
                name="legalDescription"
                value={formData.legalDescription}
                onChange={handleChange}
                placeholder="Official legal description..."
                error={errors.legalDescription}
              />
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
              <TextareaField
                label="Lot and Plot Instructions"
                name="lotInstructions"
                value={formData.lotInstructions}
                onChange={handleChange}
                rows={3}
                error={errors.lotInstructions}
              />
            </div>

            <div className="md:col-span-2">
              <TextareaField
                label="Message / Special Instructions"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                error={errors.message}
              />
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
