import {
  FlaskConical,
  Leaf,
  Users2,
  Rocket,
  Globe2,
  Heart,
} from 'lucide-react';
import AnimatedSection from '@/components/animated-section';
import SectionHeader from '@/components/section-header';
import Image from 'next/image';

const programs = [
  {
    title: 'Eco-Tech Innovation',
    tag: 'Sustainability',
    desc: 'Developing next-generation fabrics from recycled marine plastics and biodegradable fibers. Our goal is to be 100% sustainable by 2030.',
    icon: <Leaf className="text-emerald-500" size={40} />,
    color: 'bg-emerald-500/10',
  },
  {
    title: 'Athlete Synergy Lab',
    tag: 'R&D',
    desc: 'A collaborative program where professional athletes work directly with our engineers to test and refine prototypes in real-world conditions.',
    icon: <FlaskConical className="text-blue-500" size={40} />,
    color: 'bg-blue-500/10',
  },
  {
    title: 'Future Champions',
    tag: 'Community',
    desc: 'Providing high-quality sports gear to underprivileged youth sports programs across Southeast Asia to foster the next generation of talent.',
    icon: <Rocket className="text-orange-500" size={40} />,
    color: 'bg-orange-500/10',
  },
  {
    title: 'Global Supply Integrity',
    tag: 'Logistics',
    desc: 'Implementing blockchain-based tracking for our raw materials to ensure ethical sourcing and 100% transparency in our supply chain.',
    icon: <Globe2 className="text-purple-500" size={40} />,
    color: 'bg-purple-500/10',
  },
  {
    title: 'The Glove Project',
    tag: 'Innovation',
    desc: 'Researching micro-ventilated textiles that offer military-grade protection while maintaining the breathability of lightweight mesh.',
    icon: <Users2 className="text-cyan-500" size={40} />,
    color: 'bg-cyan-500/10',
  },
  {
    title: 'MGM Wellness Drive',
    tag: 'Employees',
    desc: 'A bi-annual internal program promoting physical and mental well-being for our 500+ manufacturing staff through workshops and sports events.',
    icon: <Heart className="text-rose-500" size={40} />,
    color: 'bg-rose-500/10',
  },
];

export default function ProgramsPage() {
  return (
    <div className="flex flex-col gap-20 pb-24">
      <section className="bg-primary/5 py-24">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Ongoing Programs"
            subtitle="Explore the initiatives that drive our innovation, sustain our planet, and support our community."
          />
        </div>
      </section>

      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, idx) => (
            <AnimatedSection
              key={idx}
              delay={idx * 0.1}
              className="flex h-full"
            >
              <div className="bg-card border border-border rounded-3xl p-8 flex flex-col h-full hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all group">
                <div
                  className={`w-16 h-16 rounded-2xl ${program.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}
                >
                  {program.icon}
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
                  {program.tag}
                </span>
                <h3 className="text-2xl font-bold mb-4">{program.title}</h3>
                <p className="text-secondary leading-relaxed grow">
                  {program.desc}
                </p>
                <div className="mt-8 pt-8 border-t border-border flex items-center justify-between">
                  <span className="text-sm font-bold text-foreground">
                    Status: Active
                  </span>
                  <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)] animate-pulse" />
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Hero CTA for Programs */}
      <section className="container mx-auto px-6">
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
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />
          <div className="relative h-full flex flex-col items-center justify-center p-8 text-center">
            <h2 className="text-3xl font-extrabold text-white mb-6 md:text-5xl">
              Want to Partner With Us?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mb-10 leading-relaxed">
              We are always looking for innovative tech startups and
              sustainability partners to collaborate on our future programs.
            </p>
            <button className="rounded-full bg-primary px-10 py-4 text-lg font-bold text-white hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary/20">
              Submit Proposal
            </button>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
