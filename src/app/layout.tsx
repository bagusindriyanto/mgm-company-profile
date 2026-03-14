import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import NextTopLoader from 'nextjs-toploader';
import { cn } from '@/lib/utils';
import { Roboto, Roboto_Mono, Inter_Tight } from 'next/font/google';
import { LenisProvider } from '@/components/providers/lenis-provider';

const interTight = Inter_Tight({
  subsets: [
    'cyrillic',
    'cyrillic-ext',
    'greek',
    'greek-ext',
    'latin',
    'latin-ext',
    'vietnamese',
  ],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter-tight',
});

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
        'font-inter-tight',
        'font-roboto',
        'font-roboto-mono',
        interTight.variable,
        roboto.variable,
        robotoMono.variable,
        'antialiased',
      )}
    >
      <body>
        <NextTopLoader showSpinner={false} />
        <LenisProvider>
          <div className="flex flex-col">
            <Navbar />
            <main className="flex flex-col pt-15 min-h-screen grow">
              {children}
            </main>
            <Footer />
          </div>
        </LenisProvider>
      </body>
    </html>
  );
}
