import Image from 'next/image';
import Link from 'next/link';
import AnimatedStat from '@/components/AnimatedStat';
import ContactForm from '@/components/ContactForm';
import ProcessTimeline from '@/components/ProcessTimeline';
import ScrollRevealText from '@/components/ScrollRevealText';
import WorkShowcase from '@/components/WorkShowcase';
import {
  about,
  capabilities,
  experience,
  hero,
  personalInfo,
  reasons,
  stats,
  techGroups
} from '@/data/site';

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur-xl">
      <nav className="container-x flex h-20 items-center justify-between">
        {/* Edit the brand text from data/site.ts if needed */}
        <Link href="#home" aria-label="Go to home section" className="font-mono text-sm font-black uppercase tracking-[0.25em] text-white">
          KA<span className="text-accent">.</span>
        </Link>

        <div className="hidden items-center gap-8 text-sm font-bold uppercase tracking-wide text-white/70 lg:flex">
          <Link className="transition hover:text-accent" href="#work">
            Work
          </Link>
          <Link className="transition hover:text-accent" href="#capabilities">
            Capabilities
          </Link>
          <Link className="transition hover:text-accent" href="#experience">
            Experience
          </Link>
          <Link className="transition hover:text-accent" href="#contact">
            Contact
          </Link>
        </div>

        <a href={personalInfo.resumeHref} className="orange-button shrink-0 px-4 py-3 text-xs" download aria-label="Download resume PDF">
          Resume
        </a>
      </nav>
    </header>
  );
}

function HeroSection() {
  return (
    <section id="home" className="grid-bg relative min-h-screen overflow-hidden pt-28">
      <div className="absolute left-1/2 top-24 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-accent/20 blur-[140px]" />
      <div className="container-x relative grid min-h-[calc(100vh-7rem)] items-center gap-12 pb-12 lg:grid-cols-[1.06fr_0.94fr] xl:gap-16">
        <div className="reveal pb-10 lg:pb-0">
          <p className="section-label mb-7 text-xs">{hero.eyebrow}</p>
          <h1 className="display-title max-w-5xl text-[15vw] uppercase text-white sm:text-[12vw] lg:text-[6.65vw] xl:text-[6.9vw]">
            {personalInfo.name}
          </h1>
          <div className="mt-7 flex flex-wrap gap-x-8 gap-y-3 border-y border-white/10 py-5 font-mono text-xs font-black uppercase tracking-widest text-white/75">
            {hero.roles.map((role) => (
              <span key={role}>{role}</span>
            ))}
          </div>
          <div className="mt-8 max-w-3xl border-l border-accent pl-5">
            <p className="text-2xl font-black leading-tight text-white md:text-4xl">{hero.title}</p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/65 md:text-lg">{hero.description}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <a href="#work" className="orange-button w-full text-sm sm:w-auto" aria-label="View selected production work">
                View Work
              </a>
              <a href={personalInfo.resumeHref} className="outline-button w-full text-sm sm:w-auto" download aria-label="Download CV PDF">
                Download CV
              </a>
              <a href={personalInfo.whatsappHref} className="outline-button w-full text-sm sm:w-auto" target="_blank" rel="noopener noreferrer" aria-label="Message on WhatsApp">
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="reveal">
          <div className="relative mx-auto max-w-[480px] lg:ml-auto">
            <div className="absolute -inset-4 rounded-[2rem] bg-accent/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-glow">
              <Image
                src={personalInfo.profileImage}
                alt="Kaosar Ahmed"
                width={900}
                height={1100}
                priority
                className="h-[400px] w-full object-cover object-top grayscale-[15%] md:h-[460px] xl:h-[500px]"
              />
            </div>
            <div className="absolute -bottom-6 left-6 right-6 border border-white/10 bg-ink/90 p-5 backdrop-blur-xl">
              <p className="font-mono text-xs font-black uppercase tracking-[0.24em] text-accent">Available Now</p>
              <p className="mt-2 text-sm font-bold leading-6 text-white/70">Full stack / frontend engineering roles.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="border-y border-white/10 bg-ink py-24">
      <div className="container-x">
        <div className="mb-10 flex items-center justify-between gap-4 border-b border-white/10 pb-7">
          <p className="section-label text-xs">Engineering Impact</p>
          <p className="hidden font-mono text-xs font-black uppercase tracking-[0.45em] text-white/40 md:block">
            Proof Over Claims
          </p>
        </div>
        <div className="grid border border-white/10 md:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="min-h-[240px] border-white/10 p-8 md:border-r md:last:border-r-0">
              <p className="display-title text-7xl text-white md:text-8xl">
                <AnimatedStat value={item.value} />
              </p>
              <p className="mt-8 max-w-[240px] text-lg leading-8 text-white/65">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkSection() {
  return (
    <section id="work" className="bg-paper py-24 text-black">
      <div className="container-x">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <p className="section-label text-xs md:text-lg">Selected Production Work</p>
          <h2 className="mt-8 text-4xl font-black leading-tight tracking-tight md:text-6xl">
            <ScrollRevealText text="Projects that prove I can ship real products, not only write code." />
          </h2>
        </div>
        <WorkShowcase />
      </div>
    </section>
  );
}

function CapabilitiesSection() {
  return (
    <section id="capabilities" className="bg-ink py-24">
      <div className="container-x">
        <div className="mb-14 grid gap-8 border-b border-white/10 pb-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="section-label text-xs md:text-lg">Technical Capabilities</p>
          </div>
          <h2 className="text-4xl font-black leading-tight tracking-tight md:text-6xl">
            The kind of engineering work I can own inside a team.
          </h2>
        </div>

        <div className="grid border border-white/10 lg:grid-cols-2">
          {capabilities.map((item) => (
            <article key={item.title} className="border-b border-white/10 p-8 lg:border-r lg:even:border-r-0">
              <h3 className="text-3xl font-black text-white">{item.title}</h3>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/60">{item.description}</p>
              <ul className="mt-8 grid gap-3 font-mono text-sm font-black uppercase tracking-wider text-white/75">
                {item.includes.map((include) => (
                  <li key={include} className="flex items-center gap-3">
                    <span className="h-2 w-2 bg-accent" />
                    {include}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="bg-ink py-24">
      <div className="container-x">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <p className="section-label text-xs md:text-lg">Engineering Process</p>
          <h2 className="mt-8 text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
            <ScrollRevealText
              text="A clear process that keeps product delivery organized and production-ready."
              activeColor="#ffffff"
              mutedColor="rgba(255, 255, 255, 0.24)"
            />
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="hidden lg:block">
            <div className="sticky top-28 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 shadow-glow">
              <p className="display-title text-8xl uppercase text-white">HOW I BUILD</p>
              <p className="mt-6 text-lg leading-8 text-white/55">
              From requirements to deployment, I follow a structured engineering process focused on clarity, scalable architecture, clean implementation, testing, and maintainable handoff.
              </p>
              <div className="mt-8 rounded-2xl border border-white/10 bg-black p-5 font-mono text-xs text-white/70">
                <div className="mb-4 flex gap-2" aria-hidden="true">
                  <span className="h-3 w-3 rounded-full bg-white/20" />
                  <span className="h-3 w-3 rounded-full bg-white/20" />
                  <span className="h-3 w-3 rounded-full bg-accent" />
                </div>
                <p><span className="text-accent">const</span> product = planArchitecture();</p>
                <p className="mt-2"><span className="text-accent">await</span> buildFrontendAndAPI(product);</p>
                <p className="mt-2"><span className="text-accent">return</span> deployProductionReady();</p>
              </div>
            </div>
          </div>
          <ProcessTimeline />
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section id="experience" className="bg-paper py-24 text-black">
      <div className="container-x">
        <div className="mb-12 grid gap-8 border-b border-black/10 pb-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="section-label text-xs md:text-lg">Career Journey</p>
          </div>
          <h2 className="text-4xl font-black leading-tight tracking-tight md:text-6xl">
            <ScrollRevealText text="Experience across engineering, product delivery, and client-facing technical work." />
          </h2>
        </div>

        <div className="experience-timeline">
          {experience.map((item) => (
            <article key={item.company} className="experience-card group">
              <div className="experience-marker" aria-hidden="true">
                {item.marker}
              </div>

              <div className="grid gap-7 lg:grid-cols-[0.7fr_1.3fr]">
                <div>
                  <p className="font-mono text-xs font-black uppercase tracking-[0.32em] text-accent">{item.period}</p>
                  <p className="mt-4 inline-flex border border-black/10 px-3 py-2 font-mono text-xs font-black uppercase tracking-wider text-black/55">
                    {item.type}
                  </p>
                  <h3 className="mt-6 text-3xl font-black tracking-tight md:text-5xl">{item.role}</h3>
                  <p className="mt-3 text-xl font-black text-black/45">{item.company}</p>
                </div>

                <div className="flex flex-col justify-center">
                  <p className="text-lg leading-8 text-black/65">{item.description}</p>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {item.highlights.map((highlight) => (
                      <span key={highlight} className="experience-chip">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhySection() {
  return (
    <section className="bg-paper py-24 text-black">
      <div className="container-x grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="section-label text-xs">Why Hire Me</p>
          <h2 className="mt-8 text-4xl font-black leading-tight tracking-tight md:text-6xl">
            What makes me useful inside an engineering team.
          </h2>
          <a href={personalInfo.whatsappHref} target="_blank" rel="noopener noreferrer" className="light-outline-button mt-8 text-sm" aria-label="Contact Kaosar Ahmed">
            Contact Me
          </a>
        </div>
        <div className="grid border border-black/10 md:grid-cols-2">
          {reasons.map((reason, index) => (
            <div key={reason} className="min-h-[210px] border-b border-r border-black/10 p-8 last:border-b-0 even:border-r-0">
              <p className="font-mono text-sm font-black text-accent">0{index + 1}</p>
              <p className="mt-8 text-2xl font-black leading-tight">{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechIcon({ tool }: { tool: (typeof techGroups)[number]['tools'][number] }) {
  if ('icon' in tool && tool.icon) {
    return (
      <span className="tech-icon" aria-hidden="true">
        <Image src={`https://cdn.simpleicons.org/${tool.icon}`} alt="" width={18} height={18} unoptimized />
      </span>
    );
  }

  return (
    <span className="tech-icon tech-icon-text" aria-hidden="true">
      {'short' in tool ? tool.short : tool.name.slice(0, 2)}
    </span>
  );
}

function TechStackSection() {
  return (
    <section className="bg-paper py-24 text-black">
      <div className="container-x">
        <div className="grid border border-black/10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="border-b border-black/10 p-8 md:p-10 lg:border-b-0 lg:border-r lg:p-12">
            <p className="section-label text-xs md:text-lg">Engineering Stack</p>
            <h2 className="mt-8 text-4xl font-black leading-tight tracking-tight md:text-6xl">
              Tools I use to ship reliable, modern product experiences.
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-8 text-black/55">
              Organized by how I actually use them in production: interface delivery, API design, data flow, real-time behavior, deployment, and payments.
            </p>
          </div>

          <div className="grid md:grid-cols-2">
            {techGroups.map((group) => (
              <article key={group.title} className="tech-card border-b border-black/10 p-8 last:border-b-0 md:min-h-[360px] md:border-r md:even:border-r-0">
                <h3 className="text-2xl font-black tracking-tight md:text-3xl">{group.title}</h3>
                <p className="mt-4 text-base leading-7 text-black/55">{group.description}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {group.tools.map((tool) => (
                    <span key={tool.name} className="tech-pill">
                      <TechIcon tool={tool} />
                      <span>{tool.name}</span>
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="bg-ink py-24">
      <div className="container-x">
        <div className="border-b border-white/10 pb-14">
          <p className="section-label text-xs md:text-lg">About Me</p>
          <h2 className="mt-8 max-w-5xl text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
            <ScrollRevealText
              text={about.statement}
              activeColor="#ffffff"
              mutedColor="rgba(255, 255, 255, 0.24)"
            />
          </h2>
        </div>

        <div className="grid gap-12 pt-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-16">
          <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5">
            <Image
              src={about.image}
              alt="Kaosar Ahmed in graduation attire"
              width={1200}
              height={900}
              className="h-[420px] w-full object-cover object-center md:h-[560px]"
            />
          </div>

          <div className="grid gap-8">
            <div className="grid gap-5">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph} className="max-w-3xl text-lg font-bold leading-8 text-white/55">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="grid gap-5 pt-4">
              {about.credentials.map((item) => (
                <div key={item.title} className="flex gap-4 border-t border-white/10 pt-5">
                  <span className="mt-2 h-2 w-2 shrink-0 bg-accent" />
                  <p className="font-mono text-sm font-black uppercase tracking-wider text-white">
                    {item.title}
                    <span className="block pt-2 text-white/45">{item.meta}</span>
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <a href={personalInfo.resumeHref} className="orange-button text-sm" download aria-label="Download Kaosar Ahmed CV">
                Download CV
              </a>
              <a href="#contact" className="outline-button text-sm" aria-label="Go to contact section">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="bg-paper py-24 text-black">
      <div className="container-x">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="contact-intro">
            <p className="section-label text-xs">Contact</p>
            <h2 className="display-title mt-8 text-[18vw] uppercase leading-none text-black md:text-[12vw] lg:text-[8vw]">
              Let&apos;s Talk
            </h2>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-black/60">
              Open to software engineering roles, frontend/full-stack opportunities, and selected product-focused work.
            </p>
            <div className="contact-portrait mt-8">
              <Image
                src={personalInfo.profileImage}
                alt="Kaosar Ahmed"
                width={900}
                height={1100}
                className="h-full w-full object-cover object-top grayscale-[12%]"
              />
              <div className="contact-availability">
                <span className="h-2 w-2 bg-accent" />
                Available for full stack / frontend roles
              </div>
            </div>
          </div>
          <div className="contact-panel">
            {/* Edit contact links from data/site.ts */}
            <div className="grid gap-3 sm:grid-cols-2">
              <a href={`mailto:${personalInfo.email}`} className="contact-action sm:col-span-2" aria-label="Send email to Kaosar Ahmed">
                <span>Email</span>
                <span className="break-all text-right normal-case">{personalInfo.email}</span>
              </a>
              <a href={personalInfo.whatsappHref} target="_blank" rel="noopener noreferrer" className="contact-action" aria-label="Message Kaosar Ahmed on WhatsApp">
                <span>WhatsApp</span>
                <span>Message Me</span>
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="contact-action" aria-label="Open Kaosar Ahmed GitHub profile">
                <span>GitHub</span>
                <span>SiamAhmed32</span>
              </a>
              <a href={personalInfo.resumeHref} className="orange-button w-full text-sm" download aria-label="Download Kaosar Ahmed resume PDF">
                Download Resume
              </a>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink py-8">
      <div className="container-x flex flex-col justify-between gap-3 font-mono text-xs font-black uppercase tracking-widest text-white/45 md:flex-row">
        <p>© {new Date().getFullYear()} Kaosar Ahmed</p>
        <p>Built with Next.js, TypeScript and Tailwind CSS</p>
      </div>
    </footer>
  );
}

export default function HomePage() {
  return (
    <main>
      <a href="#home" className="skip-link">Skip to content</a>
      <Header />
      <HeroSection />
      <StatsSection />
      <WorkSection />
      <CapabilitiesSection />
      <TechStackSection />
      <ProcessSection />
      <ExperienceSection />
      <WhySection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
