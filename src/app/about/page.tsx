import { Compass, Target, History, Users, Award } from 'lucide-react';
import AnimatedSection from '@/components/animated-section';
import SectionHeader from '@/components/section-header';
import Image from 'next/image';

const teams = [
  {
    name: 'John Magnus',
    role: 'CEO & Founder',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=70&w=500',
  },
  {
    name: 'Sarah Chen',
    role: 'Head of R&D',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=70&w=500',
  },
  {
    name: 'Marcus Thorne',
    role: 'Lead Product Designer',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=70&w=500',
  },
  {
    name: 'Elena Rossi',
    role: 'Quality Control Manager',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=70&w=500',
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Intro Section */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Our Story"
            subtitle="Bridging the gap between raw power and refined performance since 2011."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="right">
              <p className="text-lg text-secondary leading-relaxed mb-6">
                Founded in a small workshop by a group of passionate marathon
                runners and material engineers, MGM began with a single mission:
                to create the perfect running glove that wouldn't compromise
                tactile feedback for warmth.
              </p>
              <p className="text-lg text-secondary leading-relaxed">
                Today, we operate from a state-of-the-art 50,000 sq ft
                manufacturing facility, supplying professional athletes and
                lifestyle enthusiasts with equipment that integrates the latest
                advancements in textile science and ergonomic design.
              </p>
            </AnimatedSection>
            <AnimatedSection direction="left" className="relative group">
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=70&w=1000"
                  alt="Manufacturing Facility"
                  fill
                  className="aspect-video rounded-3xl shadow-2xl object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-full flex items-center justify-center text-white shadow-xl">
                <div className="text-center">
                  <p className="text-2xl font-bold italic">14</p>
                  <p className="text-[10px] uppercase font-bold">
                    Years of Excellence
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatedSection
            direction="up"
            className="bg-primary p-12 rounded-3xl text-primary-foreground relative overflow-hidden group"
          >
            <Target
              size={80}
              className="absolute -top-4 -right-4 opacity-10 group-hover:scale-110 transition-transform duration-500"
            />
            <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Target size={32} /> Our Vision
            </h3>
            <p className="text-xl leading-relaxed opacity-90 italic">
              Be blessing for many people.
            </p>
          </AnimatedSection>

          <AnimatedSection
            direction="up"
            delay={0.1}
            className="bg-accent border border-border p-12 rounded-3xl relative overflow-hidden group"
          >
            <Compass
              size={80}
              className="absolute -top-4 -right-4 opacity-5 group-hover:scale-110 transition-transform duration-500 text-primary"
            />
            <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Compass size={32} className="text-primary" /> Our Mission
            </h3>
            <p className="text-xl leading-relaxed text-secondary italic">
              To be the Best Glove Manufacturer with Blessing for People
              Involved.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* History Timeline */}
      <section className="bg-muted/50 py-24">
        <div className="container mx-auto px-6">
          <SectionHeader title="A Decade of Progress" centered />

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />

            <div className="space-y-16">
              {[
                {
                  year: '2011',
                  title: 'The First Prototype',
                  desc: "Mercindo Global Manufaktur is founded. The 'Apex' running glove prototype is tested in sub-zero alpine conditions.",
                },
                {
                  year: '2014',
                  title: 'Global Expansion',
                  desc: 'Our first international export order to European wholesale partners is fulfilled.',
                },
                {
                  year: '2018',
                  title: 'ISO Certification',
                  desc: 'Received ISO 9001:2015 certification for our streamlined manufacturing process.',
                },
                {
                  year: '2023',
                  title: 'Eco-Tech Line',
                  desc: 'Launched our first range of running clothes made from 100% recycled ocean plastics.',
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col md:flex-row items-center gap-8`}
                >
                  <div className="flex-1 md:text-right">
                    {idx % 2 === 0 ? (
                      <AnimatedSection direction="left">
                        <span className="text-primary font-bold text-2xl">
                          {item.year}
                        </span>
                        <h4 className="text-xl font-bold mt-2 mb-3">
                          {item.title}
                        </h4>
                        <p className="text-secondary">{item.desc}</p>
                      </AnimatedSection>
                    ) : (
                      <div className="hidden md:block" />
                    )}
                  </div>
                  <div className="relative z-10 w-12 h-12 rounded-full bg-primary border-4 border-background shadow-lg shrink-0 flex items-center justify-center text-white font-bold">
                    {idx + 1}
                  </div>
                  <div className="flex-1">
                    {idx % 2 !== 0 ? (
                      <AnimatedSection direction="right">
                        <span className="text-primary font-bold text-2xl">
                          {item.year}
                        </span>
                        <h4 className="text-xl font-bold mt-2 mb-3">
                          {item.title}
                        </h4>
                        <p className="text-secondary">{item.desc}</p>
                      </AnimatedSection>
                    ) : (
                      <div className="hidden md:block" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-6">
        <SectionHeader
          title="Meet the Experts"
          subtitle="A diverse team of engineers, designers, and athletes working together to redefine performance."
          centered
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teams.map((person, idx) => (
            <AnimatedSection
              key={idx}
              delay={idx * 0.1}
              className="group cursor-pointer"
            >
              <div className="relative aspect-3/4 overflow-hidden rounded-2xl mb-4 bg-muted">
                <Image
                  src={person.img}
                  alt={person.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h4 className="text-xl font-bold">{person.name}</h4>
              <p className="text-primary font-medium text-sm">{person.role}</p>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </div>
  );
}
