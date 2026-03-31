import AnimatedSection from '@/components/animated-section';
import SectionHeader from '@/components/section-header';
import Image from 'next/image';

const programs = [
  {
    title: 'CSR (Corporate Social Responsibility)',
    category: 'Community',
    status: 'Active',
    image: '/images/programs/mgm-peduli/1.webp',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    title: 'Donor Darah',
    category: 'Community',
    status: 'Active',
    image:
      'https://images.unsplash.com/photo-1615461066159-fea0960485d5?q=80&w=1016&auto=format&fit=crop',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    title: 'Environtment Management System',
    category: 'Sustainability',
    status: 'Active',
    image:
      'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1013&auto=format&fit=crop',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    title: 'Global Supply Integrity',
    category: 'Logistics',
    status: 'On Hold',
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    title: 'CI Awards',
    category: 'Innovation',
    status: 'Active',
    image:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
    span: 'md:col-span-2 md:row-span-1',
  },
  {
    title: 'MGM Wellness Drive',
    category: 'Employees',
    status: 'Upcoming',
    image:
      'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800',
    span: 'md:col-span-1 md:row-span-1',
  },
];

const statusColor: Record<string, string> = {
  Active: 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]',
  'On Hold': 'bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]',
  Upcoming: 'bg-sky-500 shadow-[0_0_10px_rgba(14,165,233,0.5)]',
};

export default function ProgramsPage() {
  return (
    <div className="flex flex-col gap-20 pb-24">
      {/* Header */}
      <section className="py-24 bg-primary/5">
        <div className="container px-6 mx-auto">
          <SectionHeader
            title="Ongoing Programs"
            subtitle="Explore the initiatives that drive our innovation, sustain our planet, and support our community."
            centered
          />
        </div>
      </section>

      {/* ── Bento Grid ─────────────────────────────────── */}
      <section className="container px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[260px] gap-4">
          {programs.map((program, idx) => (
            <AnimatedSection
              key={idx}
              delay={idx * 0.08}
              className={`${program.span} group`}
            >
              <div className="overflow-hidden relative w-full h-full rounded-3xl cursor-pointer">
                {/* Background image */}
                <Image
                  fill
                  src={program.image}
                  alt={program.title}
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 to-transparent bg-linear-to-t from-black/80 via-black/30" />

                {/* Content */}
                <div className="flex relative z-10 flex-col justify-between p-6 h-full">
                  {/* Top row: category + status */}
                  <div className="flex justify-between items-center">
                    <span className="px-3 py-1 text-xs font-medium tracking-wider text-white uppercase rounded-full backdrop-blur-md bg-white/15">
                      {program.category}
                    </span>
                    <div className="flex gap-2 items-center px-3 py-1 rounded-full backdrop-blur-md bg-white/15">
                      <div
                        className={`h-2.5 w-2.5 rounded-full animate-pulse ${statusColor[program.status] ?? 'bg-gray-400'}`}
                      />
                      <span className="text-[11px] font-medium text-white">
                        {program.status}
                      </span>
                    </div>
                  </div>

                  {/* Bottom: title */}
                  <h3 className="text-xl font-bold text-white drop-shadow-lg md:text-2xl">
                    {program.title}
                  </h3>
                </div>

                {/* Hover ring */}
                <div className="absolute inset-0 rounded-3xl ring-1 transition-all duration-500 pointer-events-none ring-white/10 group-hover:ring-primary/40" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Hero CTA for Programs */}
      <section className="container px-6 mx-auto">
        <AnimatedSection
          direction="up"
          className="relative h-[400px] rounded-3xl overflow-hidden bg-foreground"
        >
          <Image
            fill
            src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=70&w=1000"
            className="object-cover opacity-40"
            alt="Want to Partner with Us"
          />
          <div className="absolute inset-0 from-black to-transparent bg-linear-to-t via-black/40" />
          <div className="flex relative flex-col justify-center items-center p-8 h-full text-center">
            <h2 className="mb-6 text-3xl font-extrabold text-white md:text-5xl">
              Want to Partner With Us?
            </h2>
            <p className="mb-10 max-w-2xl text-lg leading-relaxed text-gray-300">
              We are always looking for innovative tech startups and
              sustainability partners to collaborate on our future programs.
            </p>
            <button className="px-10 py-4 text-lg text-white rounded-full shadow-xl transition-all bg-primary hover:bg-primary/90 hover:scale-105 active:scale-95 shadow-primary/20">
              Submit Proposal
            </button>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
