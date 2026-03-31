'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import type { Programs } from '@/constants/programs';

/* ─── Shared animation variants ────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

/* ─── Main Component ───────────────────────────────────────── */
export function ProgramDetailClient({ program }: { program: Programs }) {
  return (
    <div className="flex flex-col">
      {/* 1 ─ Jumbotron Hero */}
      <HeroSection program={program} />

      {/* 2 ─ Image Carousel */}
      {program.images && program.images.length > 0 && (
        <ImageGallerySection images={program.images} title={program.title} />
      )}

      {/* 3 ─ Program Overview (title + optional paragraph) */}
      <OverviewSection program={program} />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO  SECTION
   ─────────────────────────────────────────────────────────── */
function HeroSection({ program }: { program: Programs }) {
  const heroImage = program.images?.[0];

  return (
    <section className="relative overflow-hidden bg-foreground text-background">
      {/* Background image with overlay */}
      {heroImage && (
        <>
          <div className="absolute inset-0">
            <Image
              src={heroImage}
              alt={program.title}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
        </>
      )}

      {/* Decorative glow */}
      <div className="pointer-events-none absolute left-1/2 bottom-0 h-[300px] w-[700px] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]" />

      <div className="container relative mx-auto px-6 py-32 md:py-44">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-3xl text-center"
        >
          {/* Back link */}
          <motion.div variants={fadeUp} transition={{ duration: 0.6 }}>
            <Link
              href="/programs"
              className="group mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
              All Programs
            </Link>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            {program.title}
          </motion.h1>

          {/* Paragraph teaser */}
          {program.paragraph && (
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl"
            >
              {program.paragraph.length > 140
                ? program.paragraph.slice(0, 140) + '…'
                : program.paragraph}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   IMAGE GALLERY SECTION
   ─────────────────────────────────────────────────────────── */
function ImageGallerySection({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const [mainApi, setMainApi] = useState<CarouselApi>();
  const [thumbApi, setThumbApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);

  const onThumbClick = useCallback(
    (index: number) => {
      if (!mainApi) return;
      mainApi.scrollTo(index);
    },
    [mainApi],
  );

  const onSelect = useCallback(() => {
    if (!mainApi) return;
    const index = mainApi.selectedScrollSnap();
    setSelectedIndex(index);
    thumbApi?.scrollTo(index);
  }, [mainApi, thumbApi]);

  useEffect(() => {
    if (!mainApi) return;
    setTotalSlides(mainApi.scrollSnapList().length);
    onSelect();
    mainApi.on('select', onSelect);
    mainApi.on('reInit', onSelect);
    return () => {
      mainApi.off('select', onSelect);
      mainApi.off('reInit', onSelect);
    };
  }, [mainApi, onSelect]);

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          transition={{ duration: 0.7 }}
        >
          {/* Section label */}
          <div className="mb-8 flex items-center gap-3">
            <span className="inline-block h-3 w-3 rounded-sm bg-primary" />
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Gallery
            </span>
          </div>

          {/* Main carousel */}
          <div className="relative mx-auto max-w-5xl">
            <Carousel
              setApi={setMainApi}
              opts={{ loop: true }}
              className="w-full"
            >
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-muted shadow-xl">
                      <Image
                        src={image}
                        alt={`${title} — Photo ${index + 1}`}
                        fill
                        className="object-cover"
                        priority={index === 0}
                        sizes="(max-width: 768px) 100vw, 80vw"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Prev / Next buttons */}
              {totalSlides > 1 && (
                <>
                  <button
                    onClick={() => mainApi?.scrollPrev()}
                    className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white active:scale-95 md:-left-6 md:h-12 md:w-12"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="h-5 w-5 text-foreground" />
                  </button>
                  <button
                    onClick={() => mainApi?.scrollNext()}
                    className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white active:scale-95 md:-right-6 md:h-12 md:w-12"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="h-5 w-5 text-foreground" />
                  </button>
                </>
              )}
            </Carousel>

            {/* Dot indicators */}
            {totalSlides > 1 && (
              <div className="mt-6 flex items-center justify-center gap-2">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => onThumbClick(idx)}
                    className={cn(
                      'h-2 rounded-full transition-all duration-300',
                      idx === selectedIndex
                        ? 'w-8 bg-primary'
                        : 'w-2 bg-foreground/20 hover:bg-foreground/40',
                    )}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            )}

            {/* Thumbnail strip */}
            {totalSlides > 1 && (
              <div className="mt-6">
                <Carousel
                  setApi={setThumbApi}
                  opts={{
                    containScroll: 'keepSnaps',
                    dragFree: true,
                  }}
                  className="w-full"
                >
                  <CarouselContent className="-ml-2 justify-center">
                    {images.map((image, index) => (
                      <CarouselItem
                        key={index}
                        className="basis-1/4 cursor-pointer pl-2 sm:basis-1/5 md:basis-1/6"
                        onClick={() => onThumbClick(index)}
                      >
                        <div
                          className={cn(
                            'relative aspect-video overflow-hidden rounded-lg border-2 transition-all duration-300',
                            index === selectedIndex
                              ? 'border-primary opacity-100 ring-2 ring-primary/20'
                              : 'border-transparent opacity-50 hover:opacity-80',
                          )}
                        >
                          <Image
                            src={image}
                            alt={`Thumbnail ${index + 1}`}
                            fill
                            className="object-cover"
                            sizes="120px"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   OVERVIEW  SECTION
   ─────────────────────────────────────────────────────────── */
function OverviewSection({ program }: { program: Programs }) {
  return (
    <section className="pb-24 md:pb-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          className="mx-auto max-w-3xl"
        >
          {/* Section label */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="inline-block h-3 w-3 rounded-sm bg-primary" />
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Program overview
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl"
          >
            {program.title}
          </motion.h2>

          {/* Divider */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-6 h-1 w-20 rounded-full bg-primary"
          />

          {/* Paragraph */}
          {program.paragraph && (
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="mt-8 space-y-5"
            >
              {program.paragraph.split('\n').map((para, idx) => (
                <p
                  key={idx}
                  className="text-base leading-relaxed text-muted-foreground md:text-lg"
                >
                  {para}
                </p>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
