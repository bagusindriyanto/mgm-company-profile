import { Compass, Target } from 'lucide-react';
import AnimatedSection from '@/components/animated-section';
import SectionHeader from '@/components/section-header';
import Image from 'next/image';
import {
  InteractiveTimeline,
  TimelineItem,
} from '@/components/uitripled/interactive-timeline';
import TimelineDemo from '@/components/timeline-demo';

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

const timelines: TimelineItem[] = [
  {
    id: '1',
    date: '2012',
    title: 'The Journey Begins',
    description: `- 1 Building\n
      - 15 Lines\n
      - Surface Area: xxx sqm\n
      - Building Area: xxx sqm`,
  },
  {
    id: '2',
    date: '2013 - 2014',
    title: 'Expansion',
    description: `- 2 Buildings\n
      - 27-30 Lines\n
      - Surface Area: xxx sqm\n
      - Building Area: xxx sqm`,
  },
  {
    id: '3',
    date: '2017 - 2018',
    title: 'MGM 2',
    description: `- 4 Buildings\n
      - 55-60 Lines\n
      - Surface Area: xxx sqm\n
      - Building Area: xxx sqm`,
  },
  {
    id: '4',
    date: '2019',
    title: 'Sport Center',
    description: `- Surface Area: xxx sqm\n
      - Building Area: xxx sqm`,
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Intro Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-6 mx-auto">
          <SectionHeader
            title="Our Story"
            subtitle="Bridging the gap between raw power and refined performance since 2011."
          />
          <div className="grid grid-cols-1 gap-16 items-center md:grid-cols-2">
            <AnimatedSection direction="right">
              <p className="mb-6 text-lg leading-relaxed text-secondary-foreground">
                Founded in a small workshop by a group of passionate marathon
                runners and material engineers, MGM began with a single mission:
                to create the perfect running glove that wouldn&apos;t
                compromise tactile feedback for warmth.
              </p>
              <p className="text-lg leading-relaxed text-secondary-foreground">
                Today, we operate from a state-of-the-art 50,000 sq ft
                manufacturing facility, supplying professional athletes and
                lifestyle enthusiasts with equipment that integrates the latest
                advancements in textile science and ergonomic design.
              </p>
            </AnimatedSection>
            <AnimatedSection direction="left" className="relative group">
              <div className="overflow-hidden relative rounded-3xl shadow-2xl aspect-video">
                <Image
                  src="/documentation/1.jpg"
                  alt="Our Team"
                  fill
                  className="object-cover rounded-3xl shadow-2xl transition-transform duration-700 aspect-video group-hover:scale-105"
                />
              </div>
              <div className="flex absolute -right-6 -bottom-6 justify-center items-center w-32 h-32 text-white rounded-full shadow-xl bg-primary">
                <div className="text-center">
                  <h3 className="text-2xl italic">14+</h3>
                  <p className="text-[10px] uppercase ">Years of Excellence</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="container px-6 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <AnimatedSection
            direction="up"
            className="overflow-hidden relative p-12 rounded-3xl bg-primary text-primary-foreground group"
          >
            <Target
              size={80}
              className="absolute -top-4 -right-4 opacity-10 transition-transform duration-500 group-hover:scale-110"
            />
            <h3 className="flex gap-3 items-center mb-6 text-3xl">
              <Target size={32} /> Our Vision
            </h3>
            <p className="text-xl italic leading-relaxed opacity-90">
              To be the Best Glove Manufacturer with Blessing for People
              Involved.
            </p>
          </AnimatedSection>

          <AnimatedSection
            direction="up"
            delay={0.1}
            className="overflow-hidden relative p-12 rounded-3xl border bg-accent text-accent-foreground border-border group"
          >
            <Compass
              size={80}
              className="absolute -top-4 -right-4 opacity-10 transition-transform duration-500 group-hover:scale-110"
            />
            <h3 className="flex gap-3 items-center mb-6 text-3xl">
              <Compass size={32} /> Our Mission
            </h3>
            <p className="text-xl italic leading-relaxed opacity-90">
              Global Leadership, Integrated Supply Chain, Human Empowerment,
              Social Impact.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-24 bg-muted/50">
        <div className="container px-6 mx-auto">
          <SectionHeader title="A Decade of Progress" centered />

          <InteractiveTimeline items={timelines} />
        </div>
      </section>

      <TimelineDemo />

      {/* Team Section */}
      <section className="container px-6 mx-auto">
        <SectionHeader
          title="Meet the Experts"
          subtitle="A diverse team of engineers, designers, and athletes working together to redefine performance."
          centered
        />
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teams.map((person, idx) => (
            <AnimatedSection
              key={idx}
              delay={idx * 0.1}
              className="cursor-pointer group"
            >
              <div className="overflow-hidden relative mb-4 rounded-2xl aspect-3/4 bg-muted">
                <Image
                  src={person.img}
                  alt={person.name}
                  fill
                  className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110"
                />
                <div className="absolute inset-0 opacity-0 transition-opacity bg-primary/20 group-hover:opacity-100" />
              </div>
              <h3 className="text-xl">{person.name}</h3>
              <p className="text-sm text-primary">{person.role}</p>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </div>
  );
}
