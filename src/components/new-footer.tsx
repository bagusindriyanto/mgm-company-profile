import Link from 'next/link';
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Trophy,
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted border-t border-border mt-auto">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Trophy size={18} />
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground">
                MGM <span className="text-primary">SPORTS</span>
              </span>
            </Link>
            <p className="text-sm text-secondary leading-relaxed">
              Excellence in manufacturing sports equipment. Specializing in
              high-performance gloves and breathable running apparel for the
              modern athlete.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="h-8 w-8 rounded-full bg-border flex items-center justify-center text-secondary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Facebook size={18} />
              </Link>
              <Link
                href="#"
                className="h-8 w-8 rounded-full bg-border flex items-center justify-center text-secondary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Instagram size={18} />
              </Link>
              <Link
                href="#"
                className="h-8 w-8 rounded-full bg-border flex items-center justify-center text-secondary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Twitter size={18} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-wider text-foreground">
              Company
            </h4>
            <ul className="space-y-4 text-sm text-secondary">
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="hover:text-primary transition-colors"
                >
                  Ongoing Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/achievements"
                  className="hover:text-primary transition-colors"
                >
                  Achievements
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-wider text-foreground">
              Products
            </h4>
            <ul className="space-y-4 text-sm text-secondary">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Athletic Gloves
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Running Apparel
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Training Gear
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-wider text-foreground">
              Contact Us
            </h4>
            <ul className="space-y-4 text-sm text-secondary">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0" />
                <span>123 Manufacturing Way, Industrial City, IC 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <span>+1 (234) 567-890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <span>info@mgmsports.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-secondary">
            © {currentYear} MGM Sports Manufacturing. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-secondary">
            <Link href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
