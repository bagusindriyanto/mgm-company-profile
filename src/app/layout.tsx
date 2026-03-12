import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import NextTopLoader from 'nextjs-toploader';
import { cn } from '@/lib/utils';
import { Roboto, Roboto_Mono } from 'next/font/google';

const robotoMono = Roboto_Mono({
  subsets: [
    'cyrillic',
    'cyrillic-ext',
    'greek',
    'latin',
    'latin-ext',
    'vietnamese',
  ],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  variable: '--font-roboto-mono',
});

const roboto = Roboto({
  subsets: [
    'cyrillic',
    'cyrillic-ext',
    'greek',
    'greek-ext',
    'latin',
    'latin-ext',
    'math',
    'symbols',
    'vietnamese',
  ],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-roboto',
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
    <html
      lang="en"
      className={cn(
        'font-roboto',
        'font-roboto-mono',
        roboto.variable,
        robotoMono.variable,
        'antialiased',
      )}
    >
      <body className="selection:bg-primary/20 selection:text-primary">
        <NextTopLoader showSpinner={false} />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="pt-20 grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
