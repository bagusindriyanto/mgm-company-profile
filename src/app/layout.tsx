import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'MGM Sports | High-Performance Equipment',
  description:
    'Elite manufacturer of high-performance gloves and running apparel for athletes world-wide.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased selection:bg-primary/20 selection:text-primary`}
      >
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="grow pt-20">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
