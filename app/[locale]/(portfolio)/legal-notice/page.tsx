import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import RevealAnimation from '@/app/ui/animation/reveal-animation';
import MailLink from '@/app/ui/link/mail-link';
import TitledSection from '@/app/ui/section/titled-section';
import { Link } from '@/i18n/navigation';

type Props = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  // Remove contentfulClient.legalMetadataContent({ locale });
  // const metadata = query.metadataCollection?.items[0];
  return {
    title: 'Legal Notice', // Placeholder, as contentfulClient is removed
    description: 'Legal notice for the portfolio website.', // Placeholder
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;

  // Remove contentfulClient.legalNoticeContent({ locale });
  // const content = query.legalNoticeCollection?.items[0];

  return (
    <div className="py-24 md:py-32">
      <RevealAnimation className="mx-auto max-w-(--breakpoint-xl) px-6">
        <h3 className="mb-8 font-bold text-(--highlight) uppercase tracking-wide">
          Legal Notice
        </h3>

        <TitledSection title="Contact Information">
          <address className="text-(--secondary) not-italic">
            <p className="font-extrabold">John Doe</p>
            <p>Software Developer</p>
            <p>123 Main Street</p>
            <p>
              Berlin, 10115 {/* Placeholder addresses */}
            </p>
          </address>
        </TitledSection>

        <TitledSection title="Contact">
          <div className="text-(--secondary)">
            <p>
              Email: <MailLink mail="info@example.com" />
            </p>
            <p>
              <Link
                href="/#contact"
                className="underline-effect text-(--highlight-link)"
              >
                Contact Form
              </Link>
            </p>
          </div>
        </TitledSection>

        {/* Remove VAT and Dispute sections as contentfulClient is removed */}
        {/*
        {content?.vatId && (
          <TitledSection title={content?.subTitleVat}>
            <p className="text-(--secondary)">{content?.vatLabel}</p>
            <p className="font-medium">{content?.vatId}</p>
          </TitledSection>
        )}

        <TitledSection title={content?.subTitleDispute}>
          <p className="text-(--secondary)">{content?.disputeLabel}</p>
          <p className="text-(--secondary)">{content?.disputeStatement}</p>
        </TitledSection>
        */}
      </RevealAnimation>
    </div>
  );
}
