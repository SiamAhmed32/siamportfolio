'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

type AnimatedStatProps = {
  value: string;
};

function easeOutCubic(progress: number) {
  return 1 - Math.pow(1 - progress, 3);
}

export default function AnimatedStat({ value }: AnimatedStatProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [displayValue, setDisplayValue] = useState('0');

  const stat = useMemo(() => {
    const match = value.match(/^(\d+)(.*)$/);

    if (!match) {
      return { target: 0, suffix: value };
    }

    return {
      target: Number(match[1]),
      suffix: match[2] || ''
    };
  }, [value]);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const reducedMotionFrameId = requestAnimationFrame(() => setDisplayValue(value));
      return () => cancelAnimationFrame(reducedMotionFrameId);
    }

    let frameId = 0;
    let startedAt = 0;

    const animate = (timestamp: number) => {
      if (!startedAt) {
        startedAt = timestamp;
      }

      const progress = Math.min((timestamp - startedAt) / 1400, 1);
      const nextValue = Math.round(stat.target * easeOutCubic(progress));
      setDisplayValue(`${nextValue}${stat.suffix}`);

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          frameId = requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frameId);
    };
  }, [stat.suffix, stat.target, value]);

  return <span ref={ref}>{displayValue}</span>;
}
