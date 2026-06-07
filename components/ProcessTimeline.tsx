'use client';

import { useEffect, useRef, useState } from 'react';
import { process as processSteps } from '@/data/site';

type IconProps = {
  className?: string;
};

function RequirementIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 7.5h14v9H9l-4 3v-12Z" />
      <path d="m9 12 2 2 4-5" />
    </svg>
  );
}

function PlanIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 5h16v5H4V5Z" />
      <path d="M4 14h7v5H4v-5Z" />
      <path d="M15 14h5v5h-5v-5Z" />
      <path d="M11 10v2h6v2" />
    </svg>
  );
}

function InterfaceIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 5h16v11H4V5Z" />
      <path d="M8 20h8" />
      <path d="M12 16v4" />
      <path d="m9 9-2 2 2 2" />
      <path d="m15 9 2 2-2 2" />
    </svg>
  );
}

function DataIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 7c0-1.7 3.1-3 7-3s7 1.3 7 3-3.1 3-7 3-7-1.3-7-3Z" />
      <path d="M5 7v5c0 1.7 3.1 3 7 3s7-1.3 7-3V7" />
      <path d="M5 12v5c0 1.7 3.1 3 7 3s7-1.3 7-3v-5" />
    </svg>
  );
}

function TestIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 19h14" />
      <path d="M7 16a5 5 0 1 1 10 0" />
      <path d="m12 16 3-5" />
      <path d="m7 8 2 2" />
      <path d="m17 8-2 2" />
    </svg>
  );
}

function DeployIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3c3 1.6 5 4.5 5 8l-5 5-5-5c0-3.5 2-6.4 5-8Z" />
      <path d="M9 17 7 21l5-2 5 2-2-4" />
      <path d="M12 9.5h.01" />
    </svg>
  );
}

const icons = [RequirementIcon, PlanIcon, InterfaceIcon, DataIcon, TestIcon, DeployIcon];

export default function ProcessTimeline() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let frame = 0;

    const updateProgress = () => {
      if (!timelineRef.current) return;

      const rect = timelineRef.current.getBoundingClientRect();
      const viewportAnchor = window.innerHeight * 0.48;
      const start = viewportAnchor - rect.top;
      const scrollable = rect.height - window.innerHeight * 0.2;
      const nextProgress = Math.min(1, Math.max(0, start / scrollable));
      const nextIndex = Math.min(processSteps.length - 1, Math.max(0, Math.round(nextProgress * (processSteps.length - 1))));

      setProgress(nextProgress);
      setActiveIndex(nextIndex);
    };

    const requestUpdate = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
    };
  }, []);

  return (
    <div ref={timelineRef} className="process-timeline">
      <div className="process-line" aria-hidden="true">
        <span style={{ transform: `scaleY(${progress})` }} />
      </div>

      {processSteps.map((step, index) => {
        const Icon = icons[index] ?? RequirementIcon;
        const isActive = index <= activeIndex;

        return (
          <article key={step.title} className={isActive ? 'process-step is-active' : 'process-step'}>
            <div className="process-node" aria-hidden="true">
              <Icon className="process-icon" />
            </div>
            <div className="process-content">
              <p className="font-mono text-xs font-black uppercase tracking-[0.35em] text-accent">Step {String(index + 1).padStart(2, '0')}</p>
              <h3 className="mt-3 text-3xl font-black text-white md:text-4xl">{step.title}</h3>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-white/60">{step.description}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
