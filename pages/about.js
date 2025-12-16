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
      <MissionValues />
      <CTA />
    </div>
  );
}
