import type { Metadata } from 'next';
import { clsx } from 'clsx';
import './globals.css';
import { Nav } from '@/components/Nav';
import localFont from 'next/font/local';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Footer } from '@/components/Footer';

const font = localFont({
  src: [
    { path: '../../public/hack-regular-subset.woff2', weight: '400' },
    // { path: "../../public/hack-italic-subset.woff2", weight: "400" },
    // { path: "../../public/hack-bold-subset.woff2", weight: "500" },
    // { path: "../../public/hack-bolditalic-subset.woff2", weight: "500" },
  ],
  variable: '--ui-font',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "daudrao's site",
  description: 'The official site of daudrao.',
  keywords: ['BABA', 'BABA983', 'Daud', 'daudrao'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(font.variable)}>
        <div className={clsx('min-w-[320px] min-h-screen')}>
          <Nav />
          <main className="max-w-[75ch] mx-auto pt-12 print:pt-0 pb-28 px-5">
            {children}
            <Footer />
          </main>
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
