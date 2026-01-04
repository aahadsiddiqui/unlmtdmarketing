import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Hero from '../src/components/Hero';
import Services from '../src/components/Services';
import WhyUnlmtd from '../src/components/WhyUnlmtd';
import Testimonials from '../src/components/Testimonials';
import HowItWorks from '../src/components/HowItWorks';
import CTA from '../src/components/CTA';

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
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
      <Hero />
      <HowItWorks />
      <Services />
      <WhyUnlmtd />
      <Testimonials />
      <CTA />
    </div>
  );
}
