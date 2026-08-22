import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import AboutSection from '@/app/ui/section/about-section';
import ContactSection from '@/app/ui/section/contact-section';
import HomeSection from '@/app/ui/section/home-section';
import ServicesSection from '@/app/ui/section/services-section';

type Props = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Use hardcoded metadata for local run
  return {
    title: 'SaaydSaad',
    description: 'Welcome to my portfolio website!',
    keywords: ['portfolio', 'developer', 'projects'],
    openGraph: {
      title: 'SaaydSaad',
      description: 'Welcome to my portfolio website!',
      images: {
        url: '/waving-hand.svg',
        width: 1200,
        height: 630,
      },
    },
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;

  return (
    <div className="overflow-hidden">
      <HomeSection locale={locale} />
      <AboutSection locale={locale} />
      <ServicesSection locale={locale} />
      <ContactSection locale={locale} />
    </div>
  );
}
