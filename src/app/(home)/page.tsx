import Link from 'next/link';
import { ArrowRight, ShieldCheck, Zap, Globe } from 'lucide-react';
import AnimatedSection from '@/components/animated-section';
import SectionHeader from '@/components/section-header';
import Image from 'next/image';
import LogoCloud from '@/components/logo-cloud';

export default function HomePage() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-10 to-transparent bg-linear-to-r from-background via-background/80" />
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
        <div className="container relative z-20 px-6 mx-auto">
          <AnimatedSection direction="up" className="max-w-3xl">
            <h1 className="mb-6 text-5xl sm:text-7xl">
              Engineering <span className="text-primary">Athletic</span>{' '}
              Performance
            </h1>
            <p className="mb-10 max-w-2xl text-xl leading-relaxed text-secondary-foreground">
              From high-grip tactical gloves to ultra-breathable running
              apparel, MGM manufactures the gear that pushes boundaries.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/programs"
                className="px-8 py-4 text-lg rounded-full transition-all bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105"
              >
                View Programs
              </Link>
              <Link
                href="/about"
                className="px-8 py-4 text-lg rounded-full border-2 backdrop-blur-sm transition-all border-primary/20 bg-background/50 text-foreground hover:bg-primary/5 hover:border-primary"
              >
                Our Story
              </Link>
            </div>
          </AnimatedSection>
        </div>

        {/* Floating Stats Card - Bottom Right (Aligned with container) */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          <div className="container relative px-6 mx-auto w-full h-full">
            <AnimatedSection
              direction="left"
              delay={0.4}
              className="hidden absolute right-6 bottom-10 pointer-events-auto lg:right-12 lg:block"
            >
              <div className="flex gap-8 p-6 rounded-2xl border backdrop-blur-sm bg-card/60 border-border">
                <div>
                  <p className="text-3xl font-bold text-primary">15+</p>
                  <p className="text-xs uppercase text-secondary-foreground">
                    Years Experience
                  </p>
                </div>
                <div className="w-px bg-border" />
                <div>
                  <p className="text-3xl font-bold text-primary">50k+</p>
                  <p className="text-xs uppercase text-secondary-foreground">
                    Athletes Equipped
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Logo Cloud */}
      <LogoCloud />

      {/* Featured Products Showcase */}
      <section className="container px-6 mx-auto">
        <SectionHeader
          title="Engineered Excellence"
          subtitle="Precision-crafted equipment designed to enhance your performance and protect your potential."
          centered
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
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
            <div className="flex absolute inset-0 flex-col justify-end p-10 to-transparent bg-linear-to-t from-black/80 via-black/20">
              <h3 className="mb-2 text-3xl text-white">Technical Gloves</h3>
              <p className="mb-6 max-w-sm text-gray-300">
                Premium grip and protection for extreme environments and
                competitive sports.
              </p>
              <Link
                href="/programs"
                className="flex gap-2 items-center text-primary hover:underline"
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
            <div className="flex absolute inset-0 flex-col justify-end p-10 to-transparent bg-linear-to-t from-black/80 via-black/20">
              <h3 className="mb-2 text-3xl text-white">Aero-Running Apparel</h3>
              <p className="mb-6 max-w-sm text-gray-300">
                Lightweight, moisture-wicking fabrics engineered for speed and
                comfort.
              </p>
              <Link
                href="/programs"
                className="flex gap-2 items-center text-primary hover:underline"
              >
                View Collection <ArrowRight size={20} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Us / Values */}
      <section className="py-24 bg-muted/50">
        <div className="container px-6 mx-auto">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
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
                <div className="p-5 mb-6 rounded-2xl shadow-sm bg-background">
                  {value.icon}
                </div>
                <h3 className="mb-4">{value.title}</h3>
                <p className="leading-relaxed text-secondary-foreground">
                  {value.desc}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container px-6 mx-auto">
        <AnimatedSection
          direction="up"
          className="overflow-hidden relative px-8 py-16 text-center rounded-3xl shadow-2xl bg-primary md:py-24 text-primary-foreground shadow-primary/20"
        >
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 bg-white/10" />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 bg-black/10" />

          <div className="relative z-10">
            <h2 className="mb-8 text-3xl md:text-5xl">
              Ready to Elevate Your Performance?
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg opacity-90">
              Partner with a manufacturer that understands the nuances of elite
              sports equipment. Let&apos;s discuss your custom manufacturing
              requirements.
            </p>
            <Link
              href="/contact"
              className="inline-flex justify-center items-center px-10 py-4 text-lg bg-white rounded-full shadow-xl transition-all text-primary hover:bg-gray-100 hover:scale-105 active:scale-95"
            >
              Contact Our Experts
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
