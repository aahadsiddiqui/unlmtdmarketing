import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black py-2 px-8 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32">
            <Image
              src="/logo.jpg"
              alt="Unlmtd Marketing"
              fill
              sizes="(max-width: 640px) 96px,
                     (max-width: 768px) 112px,
                     128px"
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/about" className="text-white hover:text-[#1a5ec3] transition-colors text-lg">
            About Us
          </Link>
          <Link href="/services" className="text-white hover:text-[#1a5ec3] transition-colors text-lg">
            Services We Offer
          </Link>
          <Link href="/why-unlimited" className="text-white hover:text-[#1a5ec3] transition-colors text-lg">
            Why Unlimited?
          </Link>
          <button
            onClick={() => window.openModal?.()}
            className="bg-[#1a5ec3] text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors text-lg"
          >
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        <div
          className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } md:hidden absolute top-full left-0 right-0 flex-col bg-black border-t border-gray-800 py-4 px-6`}
        >
          <Link
            href="/about"
            className="text-white py-2 hover:text-[#1a5ec3] transition-colors"
            onClick={toggleMenu}
          >
            About Us
          </Link>
          <Link
            href="/services"
            className="text-white py-2 hover:text-[#1a5ec3] transition-colors"
            onClick={toggleMenu}
          >
            Services We Offer
          </Link>
          <Link
            href="/why-unlimited"
            className="text-white py-2 hover:text-[#1a5ec3] transition-colors"
            onClick={toggleMenu}
          >
            Why Unlimited?
          </Link>
          <button
            onClick={() => {
              window.openModal?.();
              toggleMenu();
            }}
            className="bg-[#1a5ec3] text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors mt-4"
          >
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
} 