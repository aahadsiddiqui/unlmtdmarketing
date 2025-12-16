import { useEffect } from 'react';
import Image from 'next/image';
import Lenis from '@studio-freight/lenis';
import { motion } from 'framer-motion';
import Differentiators from '../src/components/Differentiators';
import ProcessTimeline from '../src/components/ProcessTimeline';
import FAQ from '../src/components/FAQ';
import CTA from '../src/components/CTA';

export default function WhyUnlimited() {
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
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white font-lexend mb-8 flex flex-col items-center justify-center gap-4">
            <span>Why</span>
            <div className="relative w-[200px] h-[60px] md:w-[300px] md:h-[90px]">
              <Image
                src="/logo.png"
                alt="UNLMTD"
                fill
                className="object-contain"
                priority
              />
            </div>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            We don't just execute campaigns; we engineer growth.
          </p>
        </motion.div>
      </section>

      <Differentiators />
      <ProcessTimeline />
      <FAQ />
      <CTA />
    </div>
  );
}