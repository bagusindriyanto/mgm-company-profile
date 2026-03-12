import Link from 'next/link';
import { ArrowRight, ShieldCheck, Zap, Globe } from 'lucide-react';
import AnimatedSection from '@/components/animated-section';
import SectionHeader from '@/components/section-header';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-background via-background/80 to-transparent z-10" />
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover md:left-auto md:right-[5%] md:w-[50%] lg:w-[40%] xl:w-[35%]"
        >
          <source src="/video/rungloves-animated.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <div className="container mx-auto px-6 relative z-20">
          <AnimatedSection direction="up" className="max-w-3xl">
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl mb-6">
              Engineering <span className="text-primary">Athletic</span>{' '}
              Performance
            </h1>
            <p className="text-xl text-secondary mb-10 leading-relaxed max-w-2xl">
              From high-grip tactical gloves to ultra-breathable running
              apparel, MGM manufactures the gear that pushes boundaries.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/programs"
                className="rounded-full bg-primary px-8 py-4 text-lg font-bold text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105"
              >
                View Programs
              </Link>
              <Link
                href="/about"
                className="rounded-full border-2 border-primary/20 bg-background/50 backdrop-blur-sm px-8 py-4 text-lg font-bold text-foreground transition-all hover:bg-primary/5 hover:border-primary"
              >
                Our Story
              </Link>
            </div>
          </AnimatedSection>
        </div>

        {/* Floating Stats Card - Bottom Left */}
        <AnimatedSection
          direction="left"
          delay={0.4}
          className="absolute bottom-10 right-30 z-20 hidden lg:block"
        >
          <div className="bg-card/60 backdrop-blur-sm p-6 rounded-2xl border border-border flex gap-8">
            <div>
              <p className="text-3xl font-bold text-primary">15+</p>
              <p className="text-xs font-bold uppercase tracking-wider text-secondary">
                Years Experience
              </p>
            </div>
            <div className="w-px bg-border" />
            <div>
              <p className="text-3xl font-bold text-primary">50k+</p>
              <p className="text-xs font-bold uppercase tracking-wider text-secondary">
                Athletes Equipped
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Featured Products Showcase */}
      <section className="container mx-auto px-6">
        <SectionHeader
          title="Engineered Excellence"
          subtitle="Precision-crafted equipment designed to enhance your performance and protect your potential."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatedSection
            direction="right"
            className="group relative h-[400px] overflow-hidden rounded-3xl bg-muted"
          >
            <Image
              src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=70&w=1000"
              alt="Technical Gloves"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent p-10 flex flex-col justify-end">
              <h3 className="text-3xl font-bold text-white mb-2">
                Technical Gloves
              </h3>
              <p className="text-gray-300 mb-6 max-w-sm">
                Premium grip and protection for extreme environments and
                competitive sports.
              </p>
              <Link
                href="/programs"
                className="flex items-center gap-2 text-primary font-bold hover:underline"
              >
                Explore Technology <ArrowRight size={20} />
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection
            direction="left"
            className="group relative h-[400px] overflow-hidden rounded-3xl bg-muted"
          >
            <Image
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=70&w=1000"
              alt="Aero-Running Apparel"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent p-10 flex flex-col justify-end">
              <h3 className="text-3xl font-bold text-white mb-2">
                Aero-Running Apparel
              </h3>
              <p className="text-gray-300 mb-6 max-w-sm">
                Lightweight, moisture-wicking fabrics engineered for speed and
                comfort.
              </p>
              <Link
                href="/programs"
                className="flex items-center gap-2 text-primary font-bold hover:underline"
              >
                View Collection <ArrowRight size={20} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Us / Values */}
      <section className="bg-muted/50 py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <ShieldCheck className="text-primary" size={32} />,
                title: 'Premium Quality',
                desc: 'Every product undergoes rigorous ISO-standard stress testing before leaving our facility.',
              },
              {
                icon: <Zap className="text-primary" size={32} />,
                title: 'Innovation Driven',
                desc: 'Dedicated R&D team focused on next-gen material science and ergonomic designs.',
              },
              {
                icon: <Globe className="text-primary" size={32} />,
                title: 'Global Supply',
                desc: 'Trusted by professional athletes and teams across 40+ countries worldwide.',
              },
            ].map((value, idx) => (
              <AnimatedSection
                key={idx}
                delay={idx * 0.1}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-6 rounded-2xl bg-background p-5 shadow-sm">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold mb-4">{value.title}</h4>
                <p className="text-secondary leading-relaxed">{value.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-6">
        <AnimatedSection
          direction="up"
          className="rounded-3xl bg-primary px-8 py-16 md:py-24 text-center text-primary-foreground relative overflow-hidden shadow-2xl shadow-primary/20"
        >
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-black/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <h2 className="text-3xl font-bold md:text-5xl mb-8">
              Ready to Elevate Your Performance?
            </h2>
            <p className="text-lg opacity-90 mb-10 max-w-2xl mx-auto">
              Partner with a manufacturer that understands the nuances of elite
              sports equipment. Let&apos;s discuss your custom manufacturing
              requirements.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-10 py-4 text-lg font-bold text-primary transition-all hover:bg-gray-100 hover:scale-105 active:scale-95 shadow-xl"
            >
              Contact Our Experts
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
