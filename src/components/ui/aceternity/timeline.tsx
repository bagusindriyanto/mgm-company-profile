'use client';
import { useScroll, useTransform, motion } from 'motion/react';
import React, { useEffect, useRef, useState } from 'react';

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 50%', 'end 50%'],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full font-sans bg-white dark:bg-neutral-950 md:px-10"
      ref={containerRef}
    >
      <div ref={ref} className="relative pb-20 mx-auto max-w-7xl">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 first:pt-0 md:gap-10"
          >
            <div className="flex sticky top-40 z-40 flex-col items-center self-start max-w-xs md:flex-row lg:max-w-sm md:w-full">
              <div className="flex absolute left-3 justify-center items-center w-10 h-10 bg-white rounded-full md:left-3 dark:bg-black">
                <div className="p-2 w-4 h-4 rounded-full border bg-neutral-200 dark:bg-neutral-800 border-neutral-300 dark:border-neutral-700" />
              </div>
              <h3 className="hidden text-xl font-bold md:block md:pl-20 md:text-5xl text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
            </div>

            <div className="relative pr-4 pl-20 w-full md:pl-4">
              <h3 className="block mb-4 text-2xl font-bold text-left md:hidden text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}{' '}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + 'px',
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-0% via-neutral-200 dark:via-neutral-700 to-transparent to-99%  mask-[linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-linear-to-t from-purple-500 via-blue-500 to-transparent from-0% via-10% rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
