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

interface Section {
  title: string;
  description: string;
  image: string;
}

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
  const transitionRange = 0.1; // Overlap for crossfade

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    // We trigger the text effect when the background is partially visible
    // Adding a small buffer to avoid flickering at exact boundaries
    const buffer = 0.05;
    const active = latest >= start - buffer && latest <= end + buffer;
    if (active !== isActive) {
      setIsActive(active);
    }
  });

  // Background Opacity
  // If it's the first section, start at 1. If last, end at 1.
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

  // Still use motion.div for overall fade/Y transition, but TextEffect for characters
  const textY = useTransform(
    scrollYProgress,
    [start, start + 0.15, end - 0.15, end],
    [50, 0, 0, -50],
  );

  const textOpacityTransition = useTransform(
    scrollYProgress,
    [start, start + 0.1, end - 0.1, end],
    [0, 1, 1, 0],
  );

  return (
    <motion.div
      style={{ opacity }}
      className="absolute inset-0 h-full w-full"
    >
      <div className="relative h-full w-full">
        <Image
          src={section.image}
          alt={section.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative flex h-full items-center justify-center px-6">
          <motion.div
            style={{ y: textY, opacity: textOpacityTransition }}
            className="max-w-4xl text-center text-white"
          >
            <TextEffect
              preset="slide"
              per="word"
              as="h2"
              className="mb-6 text-5xl font-bold md:text-7xl"
              trigger={isActive}
            >
              {section.title}
            </TextEffect>
            <TextEffect
              preset="slide"
              per="word"
              as="p"
              className="mx-auto max-w-2xl text-xl leading-relaxed md:text-3xl italic"
              trigger={isActive}
              delay={0.3}
            >
              {section.description}
            </TextEffect>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export const VisionMissionScroll = ({ sections }: { sections: Section[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <div ref={containerRef} className="relative h-[600vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
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
