'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, LayoutGroup } from 'motion/react';
import { products, categories, type Category } from '@/constants/products';
import { cn } from '@/lib/utils';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  CardAction,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

/* ── Category pill icon map ────────────────────────── */
const categoryIcons: Record<Category, string> = {
  All: '✦',
  'Gym & Fitness': '💪',
  Golf: '⛳',
  Cycling: '🚴',
  Running: '🏃',
  'Ski & Winter': '🎿',
};

export default function ProductGallery() {
  const [active, setActive] = useState<Category>('All');

  const filtered = useMemo(
    () =>
      active === 'All'
        ? products
        : products.filter((p) => p.category === active),
    [active],
  );

  return (
    <section className="container px-6 mx-auto">
      {/* ── Category Tabs ────────────────────────────── */}
      <div className="flex flex-wrap gap-2 justify-center mb-12">
        {categories.map((cat) => {
          const isActive = cat === active;
          return (
            <button
              key={cat}
              id={`category-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              onClick={() => setActive(cat)}
              className={cn(
                'relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300',
                'border backdrop-blur-sm cursor-pointer',
                'hover:scale-105 active:scale-95',
                isActive
                  ? 'text-primary-foreground border-primary/50 shadow-lg shadow-primary/20'
                  : 'text-muted-foreground border-border bg-muted/40 hover:bg-muted/70 hover:border-primary/30',
              )}
            >
              {/* Animated background pill */}
              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 rounded-full bg-primary"
                  transition={{
                    type: 'spring',
                    stiffness: 400,
                    damping: 30,
                  }}
                />
              )}
              <span className="flex relative z-10 gap-2 items-center">
                <span className="text-base">{categoryIcons[cat]}</span>
                {cat}
              </span>
            </button>
          );
        })}
      </div>

      {/* ── Count badge ──────────────────────────────── */}
      <div className="mb-8 text-center">
        <motion.p
          key={active}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-muted-foreground"
        >
          Showing{' '}
          <span className="font-semibold text-foreground">
            {filtered.length}
          </span>{' '}
          {filtered.length === 1 ? 'product' : 'products'}
          {active !== 'All' && (
            <>
              {' '}
              in <span className="font-semibold text-primary">{active}</span>
            </>
          )}
        </motion.p>
      </div>

      {/* ── Product Grid ─────────────────────────────── */}
      <LayoutGroup>
        <motion.div
          layout
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  opacity: { duration: 0.25 },
                  scale: { duration: 0.3 },
                  layout: { type: 'spring', stiffness: 300, damping: 30 },
                }}
              >
                <ProductCard
                  id={product.id}
                  title={product.title}
                  description={product.description}
                  image={product.image}
                  category={product.category}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>

      {/* Empty state */}
      {filtered.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="py-20 text-center"
        >
          <p className="text-lg text-muted-foreground">
            No products found in this category.
          </p>
        </motion.div>
      )}
    </section>
  );
}

/* ── Product Card ──────────────────────────────────── */
function ProductCard({
  id,
  title,
  description,
  image,
  category,
}: {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}) {
  return (
    <Card className="pt-0 mx-auto w-full max-w-sm h-full" id={`product-${id}`}>
      <img
        src={image}
        alt={title}
        className="object-contain p-4 w-full border-b aspect-square"
      />
      <CardHeader className="flex-1">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter className="mt-auto">
        <Button className="w-full">View Product</Button>
      </CardFooter>
    </Card>
  );
}
