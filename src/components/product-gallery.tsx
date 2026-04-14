'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, LayoutGroup } from 'motion/react';
import { products, categories, type Category } from '@/constants/products';
import { cn } from '@/lib/utils';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DumbbellIcon,
  HandbagIcon,
  HammerIcon,
  type LucideIcon,
} from 'lucide-react';

/* ── Category pill icon map ────────────────────────── */
const categoryIcons: Record<Category, LucideIcon | null> = {
  All: null,
  Sports: DumbbellIcon,
  Dress: HandbagIcon,
  Working: HammerIcon,
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
          const Icon = categoryIcons[cat];
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
                {Icon && <Icon className="size-4" />}
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
          className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4"
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
    <Card
      className="overflow-hidden data-[size=sm]:py-0 mx-auto w-full h-full transition-all duration-700 group hover:shadow-lg hover:-translate-y-1"
      id={`product-${id}`}
      size="sm"
    >
      <div className="overflow-hidden relative border-b aspect-5/4">
        <Image
          fill
          src={image}
          alt={title}
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
          className="object-contain p-2 transition-transform duration-700 sm:p-4 group-hover:scale-110"
        />
        <Badge
          className="absolute top-2 right-2 sm:top-3 sm:right-3 z-10 text-[10px] sm:text-xs"
          variant="secondary"
        >
          {category}
        </Badge>
      </div>
      <CardHeader className="flex-1">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter className="pb-4">
        <Button className="w-full">View Product</Button>
      </CardFooter>
    </Card>
  );
}
