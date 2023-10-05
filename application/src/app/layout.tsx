import './globals.css';
import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';

// const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AidChain ',
  description: `About
  AidChain Empowering Donors, Transforming Lives through Transparent Global Philanthropy`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
