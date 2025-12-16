import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import ContactForm from '../src/components/ContactForm';
import Modal from '../src/components/Modal';
import { useState } from 'react';

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 0.8,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-black min-h-screen">
      <ContactForm />
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
