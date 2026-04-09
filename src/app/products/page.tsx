import SectionHeader from '@/components/section-header';
import AnimatedSection from '@/components/animated-section';
import Link from 'next/link';
import { BentoGrid } from '@/components/bento-grid';

export const metadata = {
  title: 'Products | MGM Company Profile',
  description:
    'Explore our premium range of engineered athletic performance gear and apparel.',
};

export default function ProductsPage() {
  return (
    <div className="flex flex-col gap-20 pt-32 pb-20">
      {/* Hero Header */}
      <section className="container px-6 mx-auto">
        <AnimatedSection direction="up" className="max-w-3xl">
          <SectionHeader
            title="Our Collection"
            subtitle="Discover our complete range of precision-crafted athletic equipment and apparel, designed for peak performance."
          />
        </AnimatedSection>
      </section>

      {/* Gallery Section */}
      <BentoGrid />

      {/* Product Gallery Section */}
      {/* <CarouselWithThumbs /> */}

      {/* Footer Banner */}
      <section className="container px-6 mx-auto mt-10">
        <AnimatedSection
          direction="up"
          className="p-12 text-center rounded-3xl bg-muted/50"
        >
          <h2 className="mb-4 text-2xl ">Looking for Custom Orders?</h2>
          <p className="mx-auto mb-8 max-w-2xl">
            We provide specialized bulk manufacturing and custom branding for
            sports teams, athletic facilities, and corporate partners.
          </p>
          <Link
            href="/contact"
            className="inline-flex justify-center items-center px-8 py-3 text-sm rounded-full shadow-md transition-all bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 active:scale-95"
          >
            Contact Sales Team
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}
