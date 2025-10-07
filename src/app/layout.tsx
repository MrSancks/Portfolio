// app/layout.tsx

import { Geist, Geist_Mono } from 'next/font/google';
import type { Metadata } from 'next';
import I18nProvider from '@/components/I18nProvider';
import { Suspense } from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Sanckas | Portafolio',
  description: 'A simple portfolio built with Next.js and TypeScript',
  keywords: ['Next.js', 'React', 'Portfolio', 'Sanckas'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground dark:bg-darkbg dark:text-darkfg`}
      >
        
          <I18nProvider>
            <Suspense fallback={null}>
              <ThemeProvider>
              {children}
              </ThemeProvider>
              </Suspense>
          </I18nProvider>
        
      </body>
    </html>
  );
}
