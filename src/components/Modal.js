import { useState } from 'react';

export default function Modal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    businessName: '',
    phoneNumber: '',
    emailAddress: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    onClose();
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
            className="w-full bg-[#1a5ec3] text-white py-3 rounded-md hover:bg-blue-700 transition-colors font-lexend"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
} 