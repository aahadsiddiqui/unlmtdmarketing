import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { motion } from 'framer-motion';
import ServicesList from '../src/components/ServicesList';
import ServicePackages from '../src/components/ServicePackages';
import CTA from '../src/components/CTA';

export default function Services() {
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

  return (
    <div className="bg-black min-h-screen">
      {/* Hero */}
      <section className="relative w-full pt-40 pb-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(26,94,195,0.15),transparent_50%)]" />
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-white font-lexend mb-6 relative z-10"
        >
          Services We <span className="text-[#1a5ec3]">Offer</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-400 max-w-2xl mx-auto font-light relative z-10"
        >
          Comprehensive digital solutions tailored to elevate your brand's presence and drive measurable results.
        </motion.p>
      </section>

      <ServicesList />
      <ServicePackages />
      <CTA />
    </div>
  );
}
