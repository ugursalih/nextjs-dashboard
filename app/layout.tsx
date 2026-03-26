'use client'; // 1. Bu satırı en üste ekle

// Eğer global.css, layout.tsx ile AYNI klasördeyse (app içinde):
import './globals.css'; 

// fonts.ts dosyası hala ui klasörünün içindeyse bu kalsın:
import { inter } from './ui/fonts';

// 2. export const metadata = { ... } kısmını tamamen SİL.
// Çünkü 'use client' kullanılan dosyalarda metadata desteklenmez.

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}