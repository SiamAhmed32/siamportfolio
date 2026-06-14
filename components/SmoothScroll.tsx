'use client';

import Lenis from 'lenis';
import { useEffect } from 'react';

export default function SmoothScroll() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      return;
    }

    const lenis = new Lenis({
      duration: 0.9,
      easing: (time: number) => 1 - Math.pow(1 - time, 3),
      wheelMultiplier: 0.85,
      touchMultiplier: 1,
      syncTouch: false,
      anchors: {
        offset: -96,
        duration: 0.85,
        easing: (time: number) => 1 - Math.pow(1 - time, 3)
      }
    });

    let frame = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      frame = window.requestAnimationFrame(raf);
    };

    frame = window.requestAnimationFrame(raf);

    return () => {
      window.cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return null;
}
