import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import { inter } from './ui/fonts';

export const metadata: Metadata = {
  title: 'Madison Weather Dashboard',
  description:
    'A weather dashboard for Madison, Wisconsin, with forecast data from the 7Timer API and Celsius/Fahrenheit conversion.',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}