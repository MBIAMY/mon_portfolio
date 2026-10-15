import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MBIAMY NGAMENI Steven Loic | Software Engineer — Full-Stack & AI',
  description:
    'Software Engineer trained at ENSPY, Cameroon, focused on full-stack development, backend architecture, AI integration and real-time software systems.',
  authors: [{ name: 'MBIAMY NGAMENI Steven Loic' }],
  creator: 'MBIAMY NGAMENI Steven Loic',
  keywords: [
    'Software Engineer',
    'Full-Stack Developer',
    'Backend Engineer',
    'AI Integration',
    'FastAPI',
    'Python',
    'WebSocket',
    'Real-Time Systems',
    'AGT-Voice',
    'ENSPY',
    'Cameroon',
    'Next.js',
    'Spring Boot',
    'Docker',
  ],
  openGraph: {
    title: 'MBIAMY NGAMENI Steven Loic | Software Engineer — Full-Stack & AI',
    description:
      'Software Engineer trained at ENSPY, Cameroon, focused on full-stack development, backend architecture, AI integration and real-time software systems.',
    type: 'profile',
    locale: 'en_US',
    siteName: 'Steven Loic MBIAMY Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MBIAMY NGAMENI Steven Loic | Software Engineer — Full-Stack & AI',
    description:
      'Software Engineer trained at ENSPY, Cameroon, focused on full-stack development, backend architecture, AI integration and real-time software systems.',
  },
  icons: {
    icon: '/enspy-logo.png',
    apple: '/enspy-logo.png',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: {
      '@type': 'Person',
      name: 'MBIAMY NGAMENI Steven Loic',
      jobTitle: 'Software Engineer',
      description:
        'Software Engineer trained at École Nationale Supérieure Polytechnique de Yaoundé (ENSPY), Cameroon, focused on full-stack development, backend architecture, AI integration and real-time systems.',
      alumniOf: {
        '@type': 'EducationalOrganization',
        name: 'École Nationale Supérieure Polytechnique de Yaoundé (ENSPY)',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Yaoundé',
          addressCountry: 'Cameroon',
        },
      },
      email: 'mailto:mbiamysteven@gmail.com',
      telephone: '+237697501738',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Yaoundé',
        addressCountry: 'Cameroon',
      },
      knowsAbout: [
        'Software Engineering',
        'Full-Stack Development',
        'Backend Architecture',
        'Artificial Intelligence Integration',
        'FastAPI',
        'Python Asyncio',
        'WebSocket Audio Streaming',
        'DevOps',
        'Cybersecurity',
      ],
    },
  };

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#060911] text-slate-200 antialiased selection:bg-blue-900 selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
