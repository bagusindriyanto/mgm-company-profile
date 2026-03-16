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
import { Menu, X, ChevronDown } from 'lucide-react';
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

const navLinks = [
  { name: 'Home', href: '/' },
  {
    name: 'About',
    href: '/about',
    dropdown: [
      { name: 'Profile', href: '/profile' },
      { name: 'History', href: '/history' },
    ],
  },
  { name: 'Programs', href: '/programs' },
  { name: 'Products', href: '/products' },
  { name: 'Achievements', href: '/achievements' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
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
        <div className="hidden gap-2 items-center md:flex">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.name}>
                  {link.dropdown ? (
                    <>
                      <NavigationMenuTrigger
                        className={cn(
                          'transition-colors hover:text-primary',
                          pathname.startsWith(link.href)
                            ? 'text-primary'
                            : 'text-secondary-foreground',
                        )}
                      >
                        {link.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid min-w-30 gap-1">
                          {link.dropdown.map((item) => (
                            <li key={item.name}>
                              <NavigationMenuLink
                                render={<Link href={item.href} />}
                                className={cn(
                                  'block select-none space-y-1 rounded-sm leading-none no-underline outline-none transition-colors hover:text-primary focus:text-primary',
                                  pathname === item.href
                                    ? 'text-primary'
                                    : 'text-secondary-foreground',
                                )}
                              >
                                <div className="text-sm font-medium leading-none">
                                  {item.name}
                                </div>
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
                        'relative px-4 py-2 text-sm font-medium transition-colors hover:text-primary',
                        pathname === link.href
                          ? 'text-primary'
                          : 'text-secondary-foreground',
                      )}
                    >
                      {link.name}
                      {pathname === link.href && (
                        <motion.div
                          layoutId="nav-underline"
                          initial={false}
                          className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary"
                          transition={{
                            type: 'spring',
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      )}
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <Link
            href="/contact"
            className="px-6 py-2 ml-4 text-sm rounded-full transition-all bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 active:scale-95"
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
            <div className="flex flex-col gap-2 pt-4 pb-6">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col">
                  {link.dropdown ? (
                    <>
                      <div
                        className={cn(
                          'flex items-center justify-between py-2 text-lg font-medium transition-colors hover:text-primary',
                          pathname.startsWith(link.href)
                            ? 'text-primary'
                            : 'text-secondary-foreground',
                        )}
                        onClick={() => {
                          setOpenDropdown(
                            openDropdown === link.name ? null : link.name,
                          );
                        }}
                      >
                        {link.name}
                        <ChevronDown
                          size={20}
                          className={cn(
                            'transition-transform duration-200',
                            openDropdown === link.name ? 'rotate-180' : '',
                          )}
                        />
                      </div>
                      <motion.div
                        initial={false}
                        animate={{
                          height: openDropdown === link.name ? 'auto' : 0,
                          opacity: openDropdown === link.name ? 1 : 0,
                        }}
                        className="overflow-hidden flex flex-col gap-2 pl-4 border-l border-primary/20"
                      >
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                              'py-2 text-base transition-colors hover:text-primary',
                              pathname === item.href
                                ? 'text-primary'
                                : 'text-secondary-foreground',
                            )}
                            onClick={() => setIsOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className={cn(
                        'py-2 text-lg font-medium transition-colors hover:text-primary',
                        pathname === link.href
                          ? 'text-primary'
                          : 'text-secondary-foreground',
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                href="/contact"
                className="py-3 mt-4 w-full text-sm font-medium text-center rounded-lg bg-primary text-primary-foreground"
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
