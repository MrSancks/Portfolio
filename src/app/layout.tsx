import type { Metadata } from 'next';
import { Providers } from './providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sancks | Portafolio',
  description:
    'Portafolio de Cristian Camilo Sanchez, desarrollador full stack que crea productos funcionales con foco en arquitectura, automatizacion y experiencia.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
