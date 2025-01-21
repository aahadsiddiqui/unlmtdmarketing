import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Modal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    businessName: '',
    phoneNumber: '',
    emailAddress: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await emailjs.send(
        'service_7x478ls', // Service ID
        'template_iko9inv', // Template ID
        {
          to_email: 'unlmtdmarketingagency@gmail.com',
          from_name: formData.businessName,
          from_email: formData.emailAddress,
          phone: formData.phoneNumber,
          message: `New contact from ${formData.businessName}`,
        },
        'W9kqgGX5AeD1Jdfsg' // Public Key
      );
      
      setSubmitStatus('success');
      setTimeout(() => {
        onClose();
        setSubmitStatus(null);
        setFormData({ businessName: '', phoneNumber: '', emailAddress: '' });
      }, 2000);
    } catch (error) {
      console.error('Email error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        
        <h2 className="text-2xl font-lexend font-bold text-gray-900 mb-6">
          Get Started
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-1">
              Business Name
            </label>
            <input
              type="text"
              id="businessName"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#1a5ec3] focus:border-[#1a5ec3]"
              value={formData.businessName}
              onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
            />
          </div>
          
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#1a5ec3] focus:border-[#1a5ec3]"
              value={formData.phoneNumber}
              onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
            />
          </div>
          
          <div>
            <label htmlFor="emailAddress" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="emailAddress"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#1a5ec3] focus:border-[#1a5ec3]"
              value={formData.emailAddress}
              onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
            />
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-[#1a5ec3] text-white py-3 rounded-md hover:bg-blue-700 transition-colors font-lexend ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? 'Sending...' : 'Submit'}
          </button>

          {submitStatus === 'success' && (
            <p className="text-green-600 text-center">Message sent successfully!</p>
          )}
          {submitStatus === 'error' && (
            <p className="text-red-600 text-center">Failed to send message. Please try again.</p>
          )}
        </form>
      </div>
    </div>
  );
} 