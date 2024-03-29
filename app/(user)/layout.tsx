import Sidebar from './Sidebar';
import '../globals.css';
import '../notion.css';
import '../prism.css';
import 'react-notion/src/styles.css';
import localFont from 'next/font/local';
import { Analytics } from '@vercel/analytics/react';
const manrope = localFont({
  src: [
    {
      path: '../../public/fonts/Manrope-SemiBold.ttf',
      weight: '600',
    },
    {
      path: '../../public/fonts/Manrope-Bold.ttf',
      weight: '700',
    },
    {
      path: '../../public/fonts/Manrope-Medium.ttf',
      weight: '500',
    },
    {
      path: '../../public/fonts/Manrope-Regular.ttf',
      weight: '400',
    },
    {
      path: '../../public/fonts/Manrope-Light.ttf',
      weight: '300',
    },
  ],
  variable: '--font-manrope',
});

export const metadata = {
  title: 'reshad sadik',
  description: 'portfolio blog website',
  openGraph: {
    title: 'Reshad Sadik',
    description: 'Developer, writer and automation',
    url: 'https://madebyreshad.com',
    siteName: 'Reshad Sadik',
    images: [
      {
        url: '/portfolio-home-page.png',
        width: 1920,
        height: 1080,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Reshad Sadik',
    card: 'summary_large_image',
  },
  icons: {
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} font-sans`}>
      <body
        style={{ maxWidth: '66rem' }}
        className={`h-[calc(100vh - 128px)] gap-10 antialiased flex flex-col md:flex-row mx-4 lg:mx-auto md:mt-32 mt-14`}
      >
        <Sidebar />
        <main className="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0 items-center">
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  );
}
