'use client';

import Image from 'next/image';
import { useState } from 'react';
import { projects } from '@/data/site';

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  return (
    <article className="group grid gap-8 border-t border-black/10 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
      <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
        <div className="browser-frame text-white transition duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl">
          <div className="browser-top border-white/10">
            <span className="browser-dot" />
            <span className="browser-dot" />
            <span className="browser-dot" />
            <span className="ml-3 truncate font-mono text-xs text-white/45">{project.type}</span>
          </div>
          <div className="project-shot">
            <Image
              src={project.image}
              alt={project.title}
              width={1300}
              height={760}
              className="h-full w-full object-contain object-center"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <p className="font-mono text-xs font-black uppercase tracking-[0.35em] text-accent">0{index + 1} / Production Work</p>
        <h3 className="mt-5 text-4xl font-black tracking-tight text-black md:text-6xl">{project.title}</h3>
        <p className="mt-3 text-lg font-bold text-black/45">{project.type}</p>
        <p className="mt-7 text-lg leading-8 text-black/65">{project.summary}</p>
        <p className="mt-5 border-l-4 border-accent pl-5 text-lg font-bold leading-8 text-black">{project.impact}</p>
        <div className="mt-7 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span key={tech} className="border border-black/10 px-3 py-2 font-mono text-xs font-black uppercase tracking-wider text-black/70">
              {tech}
            </span>
          ))}
        </div>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="orange-button mt-8 w-fit px-8 text-sm"
          aria-label={`Open live site for ${project.title}`}
        >
          Live Site
        </a>
      </div>
    </article>
  );
}

export default function WorkShowcase() {
  const [expanded, setExpanded] = useState(false);
  const featuredProjects = projects.slice(0, 4);
  const remainingProjects = projects.slice(4);

  return (
    <>
      {featuredProjects.map((project, index) => (
        <ProjectCard key={project.title} project={project} index={index} />
      ))}

      {!expanded && remainingProjects.length > 0 ? (
        <div className="flex justify-center py-14">
          <button type="button" className="see-more-button" onClick={() => setExpanded(true)} aria-label="Show more production work">
            <span aria-hidden="true" />
            See More Works
            <span aria-hidden="true" />
          </button>
        </div>
      ) : null}

      {expanded ? (
        <div className="work-reveal">
          {remainingProjects.map((project, index) => (
            <div
              key={project.title}
              className="work-reveal-item"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <ProjectCard project={project} index={featuredProjects.length + index} />
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
}
