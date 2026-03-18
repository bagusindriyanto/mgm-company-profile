'use client';

import { Mail, MapPin, Phone, type LucideIcon } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

const ANIMATION_DURATION = 0.6;
const DELAY_INCREMENT = 0.1;
const HOVER_SCALE = 1.1;
const TAP_SCALE = 0.9;
const DELAY_PRODUCT = DELAY_INCREMENT * 2;
const DELAY_COMPANY = DELAY_INCREMENT * 3;
const DELAY_SUPPORT = DELAY_INCREMENT * 4;
const DELAY_COPYRIGHT = DELAY_INCREMENT * 5;

interface Links {
  product: Array<{ name: string; url: string }>;
  company: Array<{ name: string; url: string }>;
  contact: Array<{ id: number; icon: LucideIcon; description: string }>;
}

interface Social {
  facebook?: string;
  instagram?: string;
  linkedin?: string;
}

const links: Links = {
  product: [
    { name: 'Athletic Gloves', url: '#' },
    { name: 'Running Apparel', url: '#' },
    { name: 'Training Gear', url: '#' },
    { name: 'New Arrivals', url: '#' },
  ],
  company: [
    { name: 'About Us', url: '/about' },
    { name: 'Ongoing Programs', url: '/programs' },
    { name: 'Achievements', url: '/achievements' },
    { name: 'Contact', url: '/contact' },
  ],
  contact: [
    {
      id: 1,
      icon: MapPin,
      description: '123 Manufacturing Way, Industrial City, IC 12345',
    },
    { id: 2, icon: Phone, description: '+1 (234) 567-890' },
    { id: 3, icon: Mail, description: 'info@mgmsports.com' },
  ],
};

const social: Social = {
  facebook: 'https://facebook.com',
  instagram: 'https://instagram.com',
  linkedin: 'https://linkedin.com',
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted">
      <div className="container px-6 py-12 mx-auto">
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: ANIMATION_DURATION }}
          viewport={{ once: true, margin: '-100px' }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              transition={{
                duration: ANIMATION_DURATION,
                delay: DELAY_INCREMENT,
              }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <Link href="/">
                <Image
                  src="/logo/mercindo-black.png"
                  alt="MGM"
                  width={100}
                  height={100}
                  className="mb-4"
                  unoptimized
                />
              </Link>
              <p className="mb-6 max-w-md text-sm leading-relaxed text-muted-foreground">
                Excellence in manufacturing sports equipment. Specializing in
                high-performance gloves and breathable running apparel for the
                modern athlete.
              </p>

              {/* Social Links */}
              <div className="flex gap-4 items-center">
                <motion.a
                  className="transition-colors text-muted-foreground hover:text-foreground"
                  href={social.facebook}
                  rel="noopener noreferrer"
                  target="_blank"
                  whileHover={{ scale: HOVER_SCALE }}
                  whileTap={{ scale: TAP_SCALE }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="size-6"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                  </svg>
                  <span className="sr-only">Facebook</span>
                </motion.a>
                <motion.a
                  className="transition-colors text-muted-foreground hover:text-foreground"
                  href={social.instagram}
                  rel="noopener noreferrer"
                  target="_blank"
                  whileHover={{ scale: HOVER_SCALE }}
                  whileTap={{ scale: TAP_SCALE }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="size-5"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                  </svg>
                  <span className="sr-only">Instagram</span>
                </motion.a>
                <motion.a
                  className="transition-colors text-muted-foreground hover:text-foreground"
                  href={social.linkedin}
                  rel="noopener noreferrer"
                  target="_blank"
                  whileHover={{ scale: HOVER_SCALE }}
                  whileTap={{ scale: TAP_SCALE }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              transition={{
                duration: ANIMATION_DURATION,
                delay: DELAY_PRODUCT,
              }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <h3 className="mb-4 text-sm uppercase">Product</h3>
              <ul className="space-y-3">
                {links.product.map((link) => (
                  <li key={link.name}>
                    <Link
                      className="text-sm transition-colors text-muted-foreground hover:text-foreground"
                      href={link.url}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              transition={{
                duration: ANIMATION_DURATION,
                delay: DELAY_COMPANY,
              }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <h3 className="mb-4 text-sm uppercase">Company</h3>
              <ul className="space-y-3">
                {links.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      className="text-sm transition-colors text-muted-foreground hover:text-foreground"
                      href={link.url}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              transition={{
                duration: ANIMATION_DURATION,
                delay: DELAY_SUPPORT,
              }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <h3 className="mb-4 text-sm uppercase">Contact Us</h3>
              <ul className="space-y-3 text-sm">
                {links.contact.map((link) => (
                  <li
                    key={link.id}
                    className="flex gap-3 items-start text-muted-foreground"
                  >
                    <link.icon size={18} className="shrink-0" />
                    <span>{link.description}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="pt-8 mt-12 border-t border-border"
          initial={{ opacity: 0, y: 20 }}
          transition={{
            duration: ANIMATION_DURATION,
            delay: DELAY_COPYRIGHT,
          }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <p className="text-xs text-muted-foreground">
            © {currentYear} Mercindo Global Manufaktur. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
