'use client';

import { useEffect, useRef, useState } from 'react';

type ScrollRevealTextProps = {
  text: string;
  className?: string;
  activeColor?: string;
  mutedColor?: string;
};

export default function ScrollRevealText({
  text,
  className = '',
  activeColor = '#050505',
  mutedColor = 'rgba(5, 5, 5, 0.28)'
}: ScrollRevealTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [progress, setProgress] = useState(0);
  const words = text.split(' ');

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const frameId = requestAnimationFrame(() => setProgress(1));
      return () => cancelAnimationFrame(frameId);
    }

    let frameId = 0;

    const updateProgress = () => {
      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const start = viewportHeight * 0.82;
      const end = viewportHeight * 0.38;
      const nextProgress = Math.min(Math.max((start - rect.top) / (start - end), 0), 1);

      setProgress(nextProgress);
    };

    const scheduleUpdate = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(updateProgress);
    };

    scheduleUpdate();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
    };
  }, []);

  return (
    <span ref={ref} className={`scroll-reveal-text ${className}`} aria-label={text}>
      {words.map((word, index) => (
        <span
          aria-hidden="true"
          className="scroll-reveal-word"
          key={`${word}-${index}`}
          style={{
            color: progress >= (index + 1) / words.length ? activeColor : mutedColor
          }}
        >
          {word}
          {index < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </span>
  );
}
