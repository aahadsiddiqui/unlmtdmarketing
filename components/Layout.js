import { useState } from 'react';
import Navbar from '../src/components/Navbar';
import Modal from '../src/components/Modal';
import Footer from '../src/components/Footer';
import Head from 'next/head';

export default function Layout({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  if (typeof window !== 'undefined') {
    window.openModal = openModal;
  }

  return (
    <>
      <Head>
        <title>UNLMTD Marketing | Full-Service Digital Marketing Agency</title>
        <meta name="description" content="UNLMTD Marketing is a performance-driven digital marketing agency specializing in growth strategy, creative content, and conversion-optimized funnels. Scale your brand with data-backed results." />
        <meta name="keywords" content="Digital Marketing, Marketing Agency, Performance Marketing, Growth Marketing, Creative Strategy, Conversion Rate Optimization, CRO, Paid Media, Social Media Marketing, Brand Strategy, UNLMTD Marketing" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://unlmtdmarketing.ca/" />
        <meta property="og:title" content="UNLMTD Marketing | Full-Service Digital Marketing Agency" />
        <meta property="og:description" content="Scale your brand with performance-driven marketing, creative strategy, and conversion-optimized systems. No fluff. Just results." />
        <meta property="og:image" content="https://unlmtdmarketing.ca/og-image.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://unlmtdmarketing.ca/" />
        <meta property="twitter:title" content="UNLMTD Marketing | Full-Service Digital Marketing Agency" />
        <meta property="twitter:description" content="Scale your brand with performance-driven marketing, creative strategy, and conversion-optimized systems. No fluff. Just results." />
        <meta property="twitter:image" content="https://unlmtdmarketing.ca/og-image.png" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-black">
        <Navbar openModal={openModal} />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
        <Modal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </>
  );
}