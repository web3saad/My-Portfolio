import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import RevealAnimation from '@/app/ui/animation/reveal-animation';
import ArrowItem from '@/app/ui/footer/arrow-item';
import ExternalLink from '@/app/ui/link/external-link';
import MailLink from '@/app/ui/link/mail-link';
import TitledSection from '@/app/ui/section/titled-section';

type Props = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: 'Privacy Policy', // Placeholder title
    description: 'Privacy policy for the portfolio website.' // Placeholder description
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;

  return (
    <div className="py-24 md:py-32">
      <RevealAnimation className="mx-auto max-w-(--breakpoint-xl) px-6">
        <h3 className="mb-8 font-bold text-(--highlight) uppercase tracking-wide">
          Privacy Policy
        </h3>
        <div className="text-(--secondary)">
          <p>This is the privacy policy for the portfolio website.</p>
        </div>
      </RevealAnimation>
    </div>
  );
}
