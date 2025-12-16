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
        <title>Unlmtd Marketing</title>
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