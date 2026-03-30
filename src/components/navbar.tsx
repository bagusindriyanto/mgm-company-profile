'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'motion/react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { MenuIcon, MenuIconHandle } from './ui/icons/menu';

const navLinks = [
  { name: 'Home', href: '/' },
  {
    name: 'About',
    href: '/about',
    dropdown: [
      {
        name: 'Profile',
        href: '/about/profile',
        description: 'Learn about our company',
      },
      {
        name: 'History',
        href: '/about/history',
        description: 'Our journey through the years',
      },
    ],
  },
  { name: 'Programs', href: '/programs' },
  { name: 'Products', href: '/products' },
  { name: 'Achievements', href: '/achievements' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuIconRef = useRef<MenuIconHandle>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 20);
  });

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(href);
  };

  const handleClick = () => {
    if (isOpen) {
      setIsOpen(false);
      menuIconRef.current?.stopAnimation();
    } else {
      setIsOpen(true);
      menuIconRef.current?.startAnimation();
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    menuIconRef.current?.stopAnimation();
  };

  return (
    <>
      <motion.nav
        className={cn(
          'fixed top-0 z-50 w-full duration-500 ease-out transition-[padding]',
          scrolled ? 'md:pt-3 md:px-8' : 'px-0 pt-0',
        )}
      >
        <motion.div
          className={cn(
            'transition-all duration-500 ease-out mx-auto',
            scrolled
              ? 'max-w-5xl md:rounded-2xl shadow-lg bg-white md:backdrop-blur-lg md:bg-background/70'
              : 'max-w-full bg-white',
          )}
        >
          <div
            className={cn(
              'flex justify-between items-center px-6 py-2.5 transition-all duration-500',
              !scrolled && 'container mx-auto',
            )}
          >
            {/* Logo */}
            <Link href="/" className="flex relative gap-2 items-center group">
              <Image
                src="/logo/mercindo-black.png"
                loading="eager"
                alt="MGM Logo"
                width={125}
                height={100}
                className="object-contain transition-all duration-500"
                unoptimized
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden gap-1 items-center md:flex">
              <NavigationMenu>
                <NavigationMenuList className="gap-0.5">
                  {navLinks.map((link) => (
                    <NavigationMenuItem key={link.name}>
                      {link.dropdown ? (
                        <>
                          <NavigationMenuTrigger
                            className={cn(
                              'transition-all px-3.5 py-2 duration-200 font-heading text-sm font-medium tracking-wide rounded-full hover:bg-transparent data-popup-open:hover:bg-transparent data-open:hover:bg-transparent bg-transparent',
                              isActive(link.href)
                                ? 'text-primary bg-primary/10'
                                : 'text-foreground/70 hover:text-foreground',
                            )}
                          >
                            {link.name}
                          </NavigationMenuTrigger>
                          <NavigationMenuContent>
                            <ul className="grid gap-1 min-w-30">
                              {link.dropdown.map((item) => (
                                <li key={item.name}>
                                  <NavigationMenuLink
                                    render={<Link href={item.href} />}
                                    className={cn(
                                      'group/link flex flex-col items-start gap-1 select-none transition-all duration-200',
                                      'hover:bg-primary/5',
                                      isActive(item.href)
                                        ? 'bg-primary/10'
                                        : '',
                                    )}
                                  >
                                    <div
                                      className={cn(
                                        'leading-none text-sm font-medium font-heading',
                                        isActive(item.href)
                                          ? 'text-primary'
                                          : 'text-foreground group-hover/link:text-primary',
                                      )}
                                    >
                                      {item.name}
                                    </div>
                                    {item.description && (
                                      <div className="text-xs text-muted-foreground line-clamp-2">
                                        {item.description}
                                      </div>
                                    )}
                                  </NavigationMenuLink>
                                </li>
                              ))}
                            </ul>
                          </NavigationMenuContent>
                        </>
                      ) : (
                        <Link
                          href={link.href}
                          className={cn(
                            'px-3.5 py-2 text-sm font-medium font-heading tracking-wide transition-all duration-200 rounded-full',
                            isActive(link.href)
                              ? 'text-primary bg-primary/10'
                              : 'text-foreground/70 hover:text-foreground',
                          )}
                        >
                          {link.name}
                        </Link>
                      )}
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>

              {/* CTA Button */}
              <Link
                href="/contact"
                className={cn(
                  'group relative ml-3 inline-flex items-center gap-2 overflow-hidden rounded-full p-2.5 pl-4',
                  'bg-primary text-primary-foreground text-sm font-medium font-heading tracking-wide',
                  'transition-all duration-300 hover:shadow-md hover:shadow-primary/25 hover:scale-[1.02] active:scale-[0.98]',
                )}
              >
                {/* Shimmer effect */}
                <span className="absolute inset-0 from-transparent to-transparent transition-transform duration-700 -translate-x-full group-hover:translate-x-full bg-linear-to-r via-white/20" />
                <span className="relative">Contact Us</span>
                <div className="overflow-hidden rounded-full duration-500 bg-background size-6">
                  <div className="flex w-12 duration-500 ease-in-out -translate-x-1/2 group-hover:translate-x-0 text-primary">
                    <ArrowRight className="p-1 size-6" />
                    <ArrowRight className="p-1 size-6" />
                  </div>
                </div>
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              className="flex justify-center items-center w-10 h-10 rounded-xl transition-colors text-foreground md:hidden hover:bg-muted"
              type="button"
              onClick={handleClick}
            >
              <MenuIcon ref={menuIconRef} />
            </button>
          </div>
        </motion.div>
      </motion.nav>

      {/* Mobile Nav — Floating dropdown below navbar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Invisible backdrop to close on outside click */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/40 md:hidden"
              onClick={handleClose}
            />

            {/* Floating menu panel */}
            <motion.div
              initial={{ opacity: 0, y: 0, scale: 0.97 }}
              animate={{ opacity: 1, y: 10, scale: 1 }}
              exit={{ opacity: 0, y: 0, scale: 0.97 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className={cn('fixed z-50 md:hidden right-3 left-3 top-[56px]')}
            >
              <div
                className={cn(
                  'overflow-hidden mx-auto rounded-2xl border shadow-lg border-border/50 bg-background',
                  scrolled ? 'max-w-5xl' : 'max-w-full',
                )}
              >
                {/* Mobile links */}
                <motion.div
                  className="flex flex-col gap-0.5 p-3"
                  initial="closed"
                  animate="open"
                  variants={{
                    open: {
                      transition: {
                        staggerChildren: 0.04,
                        delayChildren: 0.05,
                      },
                    },
                    closed: {},
                  }}
                >
                  {navLinks.map((link) => (
                    <motion.div
                      key={link.name}
                      variants={{
                        open: { opacity: 1, y: 0 },
                        closed: { opacity: 0, y: -8 },
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {link.dropdown ? (
                        <div className="flex flex-col">
                          <button
                            className={cn(
                              'flex items-center justify-between px-3.5 py-3 text-sm font-medium font-heading tracking-wide rounded-xl transition-colors',
                              isActive(link.href)
                                ? 'text-primary bg-primary/5'
                                : 'text-foreground hover:bg-muted/50',
                            )}
                            onClick={() =>
                              setOpenDropdown(
                                openDropdown === link.name ? null : link.name,
                              )
                            }
                          >
                            {link.name}
                            <motion.div
                              animate={{
                                rotate: openDropdown === link.name ? 180 : 0,
                              }}
                              transition={{ duration: 0.2 }}
                            >
                              <ChevronDown size={16} />
                            </motion.div>
                          </button>

                          <AnimatePresence>
                            {openDropdown === link.name && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                              >
                                <div className="flex flex-col gap-0.5 ml-3 pl-3 border-l-2 border-primary/15 py-0.5">
                                  {link.dropdown.map((item) => (
                                    <Link
                                      key={item.name}
                                      href={item.href}
                                      className={cn(
                                        'flex flex-col gap-0.5 px-3 py-2 rounded-lg transition-colors',
                                        isActive(item.href)
                                          ? 'text-primary bg-primary/5'
                                          : 'text-foreground/70 hover:text-foreground hover:bg-muted/50',
                                      )}
                                      onClick={handleClose}
                                    >
                                      <span className="text-sm font-medium font-heading">
                                        {item.name}
                                      </span>
                                      {item.description && (
                                        <span className="text-xs text-muted-foreground">
                                          {item.description}
                                        </span>
                                      )}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={link.href}
                          className={cn(
                            'flex items-center px-3.5 py-3 text-sm font-medium font-heading tracking-wide rounded-xl transition-colors',
                            isActive(link.href)
                              ? 'text-primary bg-primary/5'
                              : 'text-foreground hover:bg-muted/50',
                          )}
                          onClick={handleClose}
                        >
                          {isActive(link.href) && (
                            <div className="size-1.5 rounded-full bg-primary mr-3 shrink-0" />
                          )}
                          {link.name}
                        </Link>
                      )}
                    </motion.div>
                  ))}

                  {/* Mobile CTA */}
                  <motion.div
                    variants={{
                      open: { opacity: 1, y: 0 },
                      closed: { opacity: 0, y: -8 },
                    }}
                    transition={{ duration: 0.2 }}
                    className="pt-2 mt-1 border-t border-border/50"
                  >
                    <Link
                      href="/contact"
                      className={cn(
                        'group w-full relative inline-flex items-center gap-2 overflow-hidden rounded-full p-2.5 pl-4',
                        'bg-primary text-primary-foreground text-sm font-medium font-heading tracking-wide',
                        'transition-all duration-300 hover:shadow-md hover:shadow-primary/25 hover:scale-[1.02] active:scale-[0.98]',
                      )}
                      onClick={handleClose}
                    >
                      {/* Shimmer effect */}
                      <span className="absolute inset-0 from-transparent to-transparent transition-transform duration-700 -translate-x-full group-hover:translate-x-full bg-linear-to-r via-white/20" />
                      <span className="relative flex-1">Contact Us</span>
                      <div className="overflow-hidden rounded-full duration-500 bg-background size-6">
                        <div className="flex w-12 duration-500 ease-in-out -translate-x-1/2 group-hover:translate-x-0 text-primary">
                          <ArrowRight className="p-1 size-6" />
                          <ArrowRight className="p-1 size-6" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
