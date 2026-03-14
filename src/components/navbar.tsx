'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'motion/react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Programs', href: '/programs' },
  { name: 'Products', href: '/products' },
  { name: 'Achievements', href: '/achievements' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 20);
  });

  return (
    <motion.nav
      initial={false}
      animate={{
        paddingTop: scrolled ? '0.75rem' : '1rem',
        paddingBottom: scrolled ? '0.75rem' : '1rem',
        borderBottomColor: scrolled ? 'var(--border)' : 'transparent',
        backgroundColor: scrolled ? 'var(--background)' : 'var(--background)',
      }}
      className={cn(
        'fixed top-0 right-0 left-0 z-50 px-6 transition-colors duration-300',
        scrolled ? 'backdrop-blur-sm border-b' : '',
      )}
    >
      <div className="flex justify-between items-center mx-auto max-w-7xl">
        <Link href="/" className="flex gap-2 items-center group">
          <Image
            src="/logo/mercindo-black.png"
            loading="eager"
            alt="MGM"
            width={125}
            height={100}
            className="object-contain"
            unoptimized
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden gap-8 items-center md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                'relative text-sm font-medium transition-colors hover:text-foreground',
                pathname === link.href
                  ? 'text-foreground'
                  : 'text-secondary-foreground',
              )}
            >
              {link.name}
              {pathname === link.href && (
                <motion.div
                  layoutId="nav-underline"
                  initial={false}
                  className="absolute -bottom-1 left-0 h-0.5 w-full bg-primary"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
          <Link
            href="/contact"
            className="px-6 py-2 text-sm rounded-full transition-all bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 active:scale-95"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="flex justify-center items-center w-10 h-10 rounded-md text-foreground md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden md:hidden"
          >
            <div className="flex flex-col gap-4 pt-4 pb-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    'text-lg transition-colors hover:text-foreground',
                    pathname === link.href
                      ? 'text-foreground'
                      : 'text-secondary-foreground',
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="py-3 mt-2 w-full text-sm text-center rounded-lg bg-primary text-primary-foreground"
                onClick={() => setIsOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
