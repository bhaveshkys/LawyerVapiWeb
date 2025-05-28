import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

// Add Playfair Display with weight 900
const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['900'],
  variable: '--font-playfair' 
});


export const metadata: Metadata = {
  title: 'AI Voice Assistant for Law Firms | 24/7 Call Handling',
  description: 'Custom AI voice assistants for law firms. Handle inbound calls, qualify leads, and book appointments automatically. No setup required.',
  openGraph: {
    title: 'AI Voice Assistant for Law Firms | 24/7 Call Handling',
    description: 'Custom AI voice assistants for law firms. Handle inbound calls, qualify leads, and book appointments automatically. No setup required.',
    type: 'website',
    url: 'https://your-domain.com',
    images: [
      {
        url: 'https://your-domain.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Voice Assistant for Law Firms',
      },
    ],
  },
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} ${playfair.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}