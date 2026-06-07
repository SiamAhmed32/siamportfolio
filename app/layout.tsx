import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://kaosar-ahmed.vercel.app'),
  title: 'Kaosar Ahmed | Full Stack Software Engineer',
  description:
    'Full Stack Software Engineer building production-grade web applications, real-time systems, e-commerce platforms, ERP dashboards, and scalable business products.',
  keywords: [
    'Kaosar Ahmed',
    'Full Stack Software Engineer',
    'Next.js Developer',
    'React Developer',
    'Node.js Developer',
    'Bangladesh Software Engineer'
  ],
  alternates: {
    canonical: 'https://kaosar-ahmed.vercel.app'
  },
  icons: {
    icon: '/favicon.svg'
  },
  openGraph: {
    url: 'https://kaosar-ahmed.vercel.app',
    title: 'Kaosar Ahmed | Full Stack Software Engineer',
    description:
      'Production-grade web products, real-time systems, e-commerce platforms, ERP dashboards, and scalable business applications.',
    type: 'website',
    images: [
      {
        url: '/profile/kaosar-ahmed.jpeg',
        width: 900,
        height: 1100,
        alt: 'Kaosar Ahmed Full Stack Software Engineer'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kaosar Ahmed | Full Stack Software Engineer',
    description: 'Production-grade web products, real-time systems, e-commerce platforms, ERP dashboards, and scalable business applications.',
    images: ['/profile/kaosar-ahmed.jpeg']
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
