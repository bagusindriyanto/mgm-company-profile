'use client';

import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
  useMotionValueEvent,
} from 'motion/react';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { TextEffect } from '@/components/motion-primitives/text-effect';

export interface Section {
  title: string;
  description: string;
  subtitle?: string;
  image: string;
  layout?: 'centered' | 'split';
}

const SideDots = ({
  total,
  activeIndex,
  scrollProgress,
}: {
  total: number;
  activeIndex: number;
  scrollProgress: MotionValue<number>;
}) => {
  const opacity = useTransform(
    scrollProgress,
    [0, 0.05, 0.95, 1],
    [0, 1, 1, 0],
  );

  return (
    <motion.div
      style={{ opacity }}
      className="fixed right-8 top-1/2 z-50 flex -translate-y-1/2 flex-col gap-4"
    >
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`h-1.5 w-1.5 rounded-full transition-all duration-500 ${
            i === activeIndex ? 'bg-white scale-150' : 'bg-white/30'
          }`}
        />
      ))}
    </motion.div>
  );
};

const SectionItem = ({
  section,
  index,
  total,
  scrollYProgress,
}: {
  section: Section;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}) => {
  const [isActive, setIsActive] = useState(index === 0);
  const start = index / total;
  const end = (index + 1) / total;
  const transitionRange = 0.1;

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const buffer = 0.05;
    const active = latest >= start - buffer && latest <= end + buffer;
    if (active !== isActive) {
      setIsActive(active);
    }
  });

  const opacity = useTransform(
    scrollYProgress,
    [
      start - transitionRange,
      start + transitionRange,
      end - transitionRange,
      end + transitionRange,
    ],
    [index === 0 ? 1 : 0, 1, 1, index === total - 1 ? 1 : 0],
  );

  const textY = useTransform(
    scrollYProgress,
    [start, start + 0.1, end - 0.1, end],
    [30, 0, 0, -30],
  );

  const textOpacity = useTransform(
    scrollYProgress,
    [start, start + 0.05, end - 0.05, end],
    [0, 1, 1, 0],
  );

  return (
    <motion.div style={{ opacity }} className="absolute inset-0 h-full w-full">
      <div className="relative h-full w-full overflow-hidden">
        <Image
          src={section.image}
          alt={section.title}
          fill
          className="object-cover transition-transform duration-[10s] ease-linear"
          style={{ transform: isActive ? 'scale(1.1)' : 'scale(1)' }}
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/40 to-black/60" />

        <div className="relative flex h-full items-center justify-center px-12">
          <motion.div
            style={{ y: textY, opacity: textOpacity }}
            className={`w-full ${section.layout === 'split' ? 'max-w-7xl flex flex-col md:flex-row items-center gap-12' : 'max-w-5xl text-center'}`}
          >
            <div className={section.layout === 'split' ? 'md:w-1/2' : 'w-full'}>
              {section.subtitle && (
                <TextEffect
                  preset="fade"
                  per="char"
                  className="mb-4 text-sm font-medium tracking-[0.3em] text-white/80 uppercase md:text-base"
                  trigger={isActive}
                >
                  {section.subtitle}
                </TextEffect>
              )}

              <TextEffect
                preset="slide"
                per="word"
                as="h2"
                className="mb-8 text-4xl font-bold leading-[1.1] text-white md:text-6xl lg:text-7xl"
                trigger={isActive}
                delay={0.1}
              >
                {section.title}
              </TextEffect>

              {section.layout !== 'split' && (
                <TextEffect
                  preset="fade"
                  per="word"
                  as="p"
                  className="mx-auto max-w-3xl text-lg italic leading-relaxed text-white/90 md:text-2xl font-light"
                  trigger={isActive}
                  delay={0.4}
                >
                  {section.description}
                </TextEffect>
              )}
            </div>

            {section.layout === 'split' && (
              <div className="md:w-1/2 border-l border-white/20 pl-12 py-4">
                <TextEffect
                  preset="slide"
                  per="line"
                  as="p"
                  className="text-left text-xl leading-relaxed text-white md:text-3xl font-light whitespace-pre-line"
                  trigger={isActive}
                  delay={0.5}
                >
                  {section.description}
                </TextEffect>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export const VisionMissionScroll = ({ sections }: { sections: Section[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const sectionIndex = Math.min(
      Math.floor(latest * sections.length),
      sections.length - 1,
    );
    if (sectionIndex !== activeIndex) {
      setActiveIndex(sectionIndex);
    }
  });

  return (
    <div ref={containerRef} className="relative h-[800vh]">
      <SideDots
        total={sections.length}
        activeIndex={activeIndex}
        scrollProgress={scrollYProgress}
      />

      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
        {sections.map((section, index) => (
          <SectionItem
            key={index}
            section={section}
            index={index}
            total={sections.length}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>
    </div>
  );
};
