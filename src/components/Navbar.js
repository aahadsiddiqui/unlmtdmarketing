import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          {/* Left side - Logo */}
          <div className="flex-shrink-0 flex items-center h-16">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.jpg"
                alt="Unlmtd Marketing Logo"
                width={150}
                height={150}
                className="h-12 w-auto"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  objectFit: 'contain'
                }}
                priority
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-white hover:text-[#1a5ec3] transition-colors">
              About Us
            </Link>
            <Link href="/services" className="text-white hover:text-[#1a5ec3] transition-colors">
              Services We Offer
            </Link>
            <Link href="/why-unlimited" className="text-white hover:text-[#1a5ec3] transition-colors">
              Why Unlimited?
            </Link>
            <Link href="/contact" className="bg-[#1a5ec3] text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#1a5ec3] hover:bg-gray-900"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger Icon */}
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Close Icon */}
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-black`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link href="/about" className="block px-3 py-2 rounded-md text-white hover:bg-gray-900">
            About Us
          </Link>
          <Link href="/services" className="block px-3 py-2 rounded-md text-white hover:bg-gray-900">
            Services We Offer
          </Link>
          <Link href="/why-unlimited" className="block px-3 py-2 rounded-md text-white hover:bg-gray-900">
            Why Unlimited?
          </Link>
          <Link href="/contact" className="block px-3 py-2 rounded-md bg-[#1a5ec3] text-white hover:bg-blue-700">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 