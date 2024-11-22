import './globals.css';
import type { Metadata } from 'next';
import { Lora } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const lora = Lora({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nature Travel Blog',
  description: 'Exploring the beauty of nature through travel experiences',
  openGraph: {
    title: 'Nature Travel Blog',
    description: 'Exploring the beauty of nature through travel experiences',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lora.className} bg-stone-50`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}