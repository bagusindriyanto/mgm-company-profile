import AnimatedSection from '@/components/animated-section';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { programs } from '@/constants/programs';

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
                <span className="bg-linear-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
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
          {programs.map((program, idx) => (
            <AnimatedSection key={program.id} delay={idx * 0.08}>
              <Link href={`/programs/${program.slug}`}>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-card transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5">
                  {/* Image container */}
                  <div className="relative aspect-4/3 w-full overflow-hidden">
                    <Image
                      fill
                      src={program.images?.[0] ?? ''}
                      alt={program.title}
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />

                    {/* Arrow icon — top right */}
                    <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-lg transition duration-300 opacity-0 group-hover:opacity-100">
                      <ArrowUpRight className="h-5 w-5 text-primary" />
                    </div>
                  </div>

                  {/* Text content */}
                  <div className="flex flex-1 flex-col p-6">
                    {/* Category tag */}
                    <span className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
                      {program.category}
                    </span>

                    <h3 className="mb-2 text-xl font-bold leading-snug">
                      {program.title}
                    </h3>

                    <p className="mt-auto text-sm leading-relaxed text-muted-foreground line-clamp-2">
                      {program.paragraph}
                    </p>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
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
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent" />
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
              <Link
                href="/contact"
                className="px-8 py-4 text-lg rounded-full transition bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105"
              >
                Submit Proposal
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
