import Image from 'next/image';
import SectionHeader from '@/components/section-header';
import AnimatedSection from '@/components/animated-section';
import CarouselWithThumbs from '@/components/carousel-09';

const products = [
  {
    id: 1,
    name: 'Pro-Grip Tactical Gloves',
    category: 'Gloves',
    image:
      'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 2,
    name: 'Aero-Speed Running Tee',
    category: 'Apparel',
    image:
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 3,
    name: 'Ultralight Compression Shorts',
    category: 'Apparel',
    image:
      'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 4,
    name: 'All-Weather Training Jacket',
    category: 'Apparel',
    image:
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 5,
    name: 'Impact Resistance Knee Pads',
    category: 'Equipment',
    image:
      'https://images.unsplash.com/photo-1542314546-b631168cb4ab?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 6,
    name: 'Breathable Training Gloves',
    category: 'Gloves',
    image:
      'https://images.unsplash.com/photo-1590483736622-398541c491cb?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 7,
    name: 'Thermal Base Layer',
    category: 'Apparel',
    image:
      'https://images.unsplash.com/photo-1518459031867-a89b944bffe4?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 8,
    name: 'Agility Training Cones Set',
    category: 'Equipment',
    image:
      'https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&q=80&w=800',
  },
];

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
      <section className="container px-6 mx-auto">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product, idx) => (
            <AnimatedSection
              key={product.id}
              direction="up"
              delay={idx * 0.1}
              className="overflow-hidden relative w-full h-80 rounded-2xl shadow-sm transition-all duration-300 group bg-muted hover:shadow-xl"
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
              <div className="flex absolute inset-x-0 bottom-0 flex-col justify-end p-6 to-transparent opacity-90 transition-all duration-300 translate-y-2 bg-linear-to-t from-black/80 via-black/40 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="mb-1 text-xs font-bold tracking-wider uppercase text-primary">
                  {product.category}
                </span>
                <h3 className="text-xl font-bold text-white">{product.name}</h3>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Product Gallery Section */}
      <section className="container px-6 mx-auto mt-20">
        <AnimatedSection direction="up" className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Gallery
          </h2>
          <p className="mx-auto max-w-2xl text-secondary">
            Get a closer look at our premium products in action.
          </p>
        </AnimatedSection>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 17 }).map((_, i) => (
            <AnimatedSection
              key={`gallery-${i}`}
              direction="up"
              delay={(i % 8) * 0.1}
              className="overflow-hidden relative w-full bg-white rounded-2xl shadow-sm transition-all duration-300 group aspect-square hover:shadow-xl"
            >
              <Image
                src={`/product/${i + 1}.jpeg`}
                alt={`Product Gallery ${i + 1}`}
                fill
                className="object-contain p-4 transition-transform duration-700 hover:scale-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              />
            </AnimatedSection>
          ))}
        </div>
      </section>

      <CarouselWithThumbs />

      {/* Footer Banner */}
      <section className="container px-6 mx-auto mt-10">
        <AnimatedSection
          direction="up"
          className="p-12 text-center rounded-3xl bg-muted/50"
        >
          <h2 className="mb-4 text-2xl font-bold">
            Looking for Custom Orders?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-secondary">
            We provide specialized bulk manufacturing and custom branding for
            sports teams, athletic facilities, and corporate partners.
          </p>
          <a
            href="/contact"
            className="inline-flex justify-center items-center px-8 py-3 text-sm font-bold rounded-full shadow-md transition-all bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 active:scale-95"
          >
            Contact Sales Team
          </a>
        </AnimatedSection>
      </section>
    </div>
  );
}
