import { useState } from 'react';
import useContactForm from './hooks/useContactForm';
import PersonalInfoFields from './FormFields/PersonalInfoFields';
import ContactInfoFields from './FormFields/ContactInfoFields';
import AddressFields from './FormFields/AddressFields';

const ContactForm = () => {
  const { formData, handleChange, handleSubmit, isSubmitted } = useContactForm();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-serif font-bold text-center mb-8">
        Personal Details
      </h2>

      {isSubmitted && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
          Thank you for contacting us! We'll get back to you soon.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <PersonalInfoFields formData={formData} handleChange={handleChange} />
          <ContactInfoFields formData={formData} handleChange={handleChange} />
          <AddressFields formData={formData} handleChange={handleChange} />

          {/* Captcha */}
          <div className="md:col-span-2">
            <div className="flex items-center">
              <span className="mr-2">what's 11 + 17* =</span>
              <input
                type="text"
                name="captchaAnswer"
                value={formData.captchaAnswer}
                onChange={handleChange}
                required
                placeholder="Answer the question*"
                className="px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="px-8 py-3 bg-blue-700 text-white font-medium rounded-md hover:bg-blue-800 transition-colors duration-300"
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;