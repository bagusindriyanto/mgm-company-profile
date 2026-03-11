import type { Metadata } from 'next';
import { Manrope, Lora, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/new-navbar';
import Footer from '@/components/new-footer';
import NextTopLoader from 'nextjs-toploader';

const fontSans = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
});

const fontSerif = Lora({
  subsets: ['latin'],
  variable: '--font-serif',
});

const fontMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Mercindo Global Manufaktur',
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
        className={`${fontSans.variable} ${fontSerif.variable} ${fontMono.variable} antialiasedselection:bg-primary/20 selection:text-primary`}
      >
        <NextTopLoader showSpinner={false} />
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="grow pt-20">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
