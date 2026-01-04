import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import AboutHero from '../src/components/AboutHero';
import AboutStory from '../src/components/AboutStory';
import AboutStats from '../src/components/AboutStats';
import MissionValues from '../src/components/MissionValues';
import CTA from '../src/components/CTA';

export default function About() {
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
      <AboutHero />
      <AboutStats />
      <AboutStory />
      <section className="w-full bg-black py-20 lg:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white font-lexend mb-4">Our Team</h2>
            <p className="text-xl text-gray-400 font-light">The minds behind the growth.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="w-48 h-48 bg-white/10 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl">👨‍💻</div>
              <h3 className="text-2xl font-bold text-white font-lexend mb-2">Shayan</h3>
              <p className="text-[#1a5ec3] font-medium mb-4">Co-Founder</p>
            </div>
            <div className="text-center">
              <div className="w-48 h-48 bg-white/10 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl">👨‍💼</div>
              <h3 className="text-2xl font-bold text-white font-lexend mb-2">Ryan</h3>
              <p className="text-[#1a5ec3] font-medium mb-4">Co-Founder</p>
            </div>
          </div>
        </div>
      </section>
      <MissionValues />
      <CTA />
    </div>
  );
}
