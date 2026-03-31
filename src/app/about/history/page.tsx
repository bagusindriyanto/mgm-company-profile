import AnimatedSection from '@/components/animated-section';
import SectionHeader from '@/components/section-header';
import Image from 'next/image';
import TimelineDemo from '@/components/timeline-demo';

const teams = [
  {
    name: 'Eveline Kosasih',
    role: 'President Director',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=70&w=500',
  },
  {
    name: 'Evan Asaria Kosasih',
    role: 'Director',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=70&w=500',
  },
  {
    name: 'Amanda Grace Andani',
    role: 'Merchandiser',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=70&w=500',
  },
  {
    name: 'Krisvina Silvi',
    role: 'Purchasing',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=70&w=500',
  },
  {
    name: 'Johan Wahyudi',
    role: 'HSE',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=70&w=500',
  },
  {
    name: 'Redy Eka Prasetya',
    role: 'Quality',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=70&w=500',
  },
  {
    name: 'Ramadhani Tri Hartanto',
    role: 'Data Center',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=70&w=500',
  },
  {
    name: 'Ahmudi',
    role: 'Data Center',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=70&w=500',
  },
];

export default function HistoryPage() {
  return (
    <div className="flex flex-col">
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
                  src="/images/documentation/1.jpg"
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

      {/* History Timeline */}
      <SectionHeader
        title="A Decade of Progress"
        subtitle="This is our journey."
        centered
        className="my-20"
      />
      <TimelineDemo />

      {/* Team Section */}
      <section className="container px-6 py-20 mx-auto">
        <SectionHeader
          title="Meet the Experts"
          subtitle="A diverse team of engineers, designers, and athletes working together to redefine performance."
          centered
        />
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {teams.map((person, idx) => (
            <AnimatedSection
              key={idx}
              delay={idx * 0.1}
              className="cursor-pointer group"
            >
              <div className="overflow-hidden relative mb-4 rounded-2xl aspect-3/4 bg-muted">
                {/* <Image
                  src={person.img}
                  alt={person.name}
                  fill
                  className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110"
                />
                <div className="absolute inset-0 opacity-0 transition-opacity bg-primary/20 group-hover:opacity-100" /> */}
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
