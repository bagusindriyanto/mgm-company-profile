import Image from 'next/image';
import SectionHeader from '@/components/section-header';
import AnimatedSection from '@/components/animated-section';

const products = [
  {
    id: 1,
    name: 'Pro-Grip Tactical Gloves',
    category: 'Gloves',
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 2,
    name: 'Aero-Speed Running Tee',
    category: 'Apparel',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 3,
    name: 'Ultralight Compression Shorts',
    category: 'Apparel',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 4,
    name: 'All-Weather Training Jacket',
    category: 'Apparel',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 5,
    name: 'Impact Resistance Knee Pads',
    category: 'Equipment',
    image: 'https://images.unsplash.com/photo-1542314546-b631168cb4ab?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 6,
    name: 'Breathable Training Gloves',
    category: 'Gloves',
    image: 'https://images.unsplash.com/photo-1590483736622-398541c491cb?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 7,
    name: 'Thermal Base Layer',
    category: 'Apparel',
    image: 'https://images.unsplash.com/photo-1518459031867-a89b944bffe4?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 8,
    name: 'Agility Training Cones Set',
    category: 'Equipment',
    image: 'https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&q=80&w=800',
  },
];

export const metadata = {
  title: 'Products | MGM Company Profile',
  description: 'Explore our premium range of engineered athletic performance gear and apparel.',
};

export default function ProductsPage() {
  return (
    <div className="flex flex-col gap-20 pb-20 pt-32">
      {/* Hero Header */}
      <section className="container mx-auto px-6">
        <AnimatedSection direction="up" className="max-w-3xl">
          <SectionHeader
            title="Our Collection"
            subtitle="Discover our complete range of precision-crafted athletic equipment and apparel, designed for peak performance."
          />
        </AnimatedSection>
      </section>

      {/* Gallery Section */}
      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, idx) => (
            <AnimatedSection
              key={product.id}
              direction="up"
              delay={idx * 0.1}
              className="group relative h-80 w-full overflow-hidden rounded-2xl bg-muted shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 via-black/40 to-transparent p-6 flex flex-col justify-end translate-y-2 opacity-90 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="text-xs font-bold uppercase tracking-wider text-primary mb-1">
                  {product.category}
                </span>
                <h3 className="text-xl font-bold text-white">
                  {product.name}
                </h3>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Footer Banner */}
      <section className="container mx-auto px-6 mt-10">
        <AnimatedSection
          direction="up"
          className="rounded-3xl bg-muted/50 p-12 text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Looking for Custom Orders?</h2>
          <p className="text-secondary max-w-2xl mx-auto mb-8">
            We provide specialized bulk manufacturing and custom branding for sports teams, athletic facilities, and corporate partners.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-bold text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105 active:scale-95 shadow-md"
          >
            Contact Sales Team
          </a>
        </AnimatedSection>
      </section>
    </div>
  );
}
