import AnimatedSection from '@/components/animated-section';
import SectionHeader from '@/components/section-header';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const programs = [
  {
    title: 'CSR (Corporate Social Responsibility)',
    description:
      'Community development programs that empower local communities and promote social well-being.',
    category: 'Community',
    status: 'Active',
    image: '/program/csr/1.webp',
  },
  {
    title: 'Donor Darah',
    description:
      'Regular blood donation drives organized in collaboration with the Indonesian Red Cross.',
    category: 'Community',
    status: 'Active',
    image: '/program/csr/2.webp',
  },
  {
    title: 'Environment Management System',
    description:
      'Comprehensive environmental initiatives focused on waste reduction and sustainable manufacturing.',
    category: 'Sustainability',
    status: 'Active',
    image:
      'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1013&auto=format&fit=crop',
  },
  {
    title: 'Global Supply Integrity',
    description:
      'Ensuring compliance and ethical standards across our entire global supply chain.',
    category: 'Logistics',
    status: 'On Hold',
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'CI Awards',
    description:
      'Annual continuous improvement competition recognizing innovative ideas from employees.',
    category: 'Innovation',
    status: 'Active',
    image:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'MGM Wellness Drive',
    description:
      'Holistic wellness programs promoting physical fitness, mental health, and work-life balance.',
    category: 'Employees',
    status: 'Upcoming',
    image:
      'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800',
  },
];

const statusConfig: Record<string, { color: string; bg: string }> = {
  Active: {
    color: 'text-emerald-700 dark:text-emerald-400',
    bg: 'bg-emerald-50 dark:bg-emerald-950/50',
  },
  'On Hold': {
    color: 'text-amber-700 dark:text-amber-400',
    bg: 'bg-amber-50 dark:bg-amber-950/50',
  },
  Upcoming: {
    color: 'text-sky-700 dark:text-sky-400',
    bg: 'bg-sky-50 dark:bg-sky-950/50',
  },
};

export default function ProgramsPage() {
  return (
    <div className="flex flex-col pb-24">
      {/* ── Hero Header ─────────────────────────────────── */}
      <section className="relative overflow-hidden py-28 md:py-36">
        {/* Subtle grid background */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(to right, currentColor 1px, transparent 1px),
              linear-gradient(to bottom, currentColor 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
        {/* Gradient orb accents */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />

        <div className="container relative mx-auto px-6">
          <AnimatedSection direction="up">
            <div className="mx-auto max-w-3xl text-center">
              <span className="mb-6 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium tracking-wide text-primary">
                Our Programs
              </span>
              <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                Initiatives that
                <span className="bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
                  {' '}
                  make an impact
                </span>
              </h1>
              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                Explore the programs that drive our innovation, sustain our
                planet, and support our community.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Program Cards Grid ──────────────────────────── */}
      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, idx) => {
            const status = statusConfig[program.status] ?? {
              color: 'text-gray-600',
              bg: 'bg-gray-50',
            };
            return (
              <AnimatedSection key={idx} delay={idx * 0.08}>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-card transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5">
                  {/* Image container */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      fill
                      src={program.image}
                      alt={program.title}
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />

                    {/* Arrow icon — top right */}
                    <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:bg-primary group-hover:shadow-primary/25">
                      <ArrowUpRight className="h-5 w-5 text-foreground transition-colors duration-300 group-hover:text-white" />
                    </div>

                    {/* Status badge — bottom left */}
                    <div className="absolute bottom-4 left-4">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-sm ${status.bg} ${status.color} border border-current/10`}
                      >
                        <span className="relative flex h-2 w-2">
                          {program.status === 'Active' && (
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                          )}
                          <span
                            className={`relative inline-flex h-2 w-2 rounded-full ${
                              program.status === 'Active'
                                ? 'bg-emerald-500'
                                : program.status === 'On Hold'
                                  ? 'bg-amber-500'
                                  : 'bg-sky-500'
                            }`}
                          />
                        </span>
                        {program.status}
                      </span>
                    </div>
                  </div>

                  {/* Text content */}
                  <div className="flex flex-1 flex-col p-6">
                    {/* Category tag */}
                    <span className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
                      {program.category}
                    </span>

                    <h3 className="mb-2 text-xl font-bold leading-snug text-foreground transition-colors duration-300 group-hover:text-primary">
                      {program.title}
                    </h3>

                    <p className="mt-auto text-sm leading-relaxed text-muted-foreground">
                      {program.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      {/* ── CTA Section ─────────────────────────────────── */}
      <section className="container mx-auto mt-24 px-6">
        <AnimatedSection direction="up">
          <div className="relative overflow-hidden rounded-3xl bg-foreground">
            <Image
              fill
              src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=70&w=1000"
              className="object-cover opacity-30"
              alt="Want to Partner with Us"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            {/* Decorative glow */}
            <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />

            <div className="relative flex min-h-[400px] flex-col items-center justify-center p-8 text-center">
              <span className="mb-6 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
                Collaborate With Us
              </span>
              <h2 className="mb-6 text-3xl font-extrabold text-white md:text-5xl">
                Want to Partner With Us?
              </h2>
              <p className="mb-10 max-w-2xl text-lg leading-relaxed text-gray-300">
                We are always looking for innovative tech startups and
                sustainability partners to collaborate on our future programs.
              </p>
              <button className="group/btn relative overflow-hidden rounded-full bg-primary px-10 py-4 text-lg font-semibold text-white shadow-xl shadow-primary/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 active:scale-95">
                <span className="relative z-10">Submit Proposal</span>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />
              </button>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
