import { useEffect } from 'react';

export function useIntersectionObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in, .slide-up, .comparison-slider').forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);
}