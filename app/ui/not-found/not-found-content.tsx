import { StartUp01Icon } from 'hugeicons-react';
import type { Locale } from 'next-intl';
import Button from '@/app/ui/button/button';
import { Link } from '@/i18n/navigation';

type Props = {
  locale: Locale;
};

export default async function NotFoundContent({ locale }: Props) {
  // Use hardcoded local data for content
  const content = {
    metadataTitle: 'Page Not Found',
    title: '404',
    subTitleMain: 'Oops!',
    subTitleHighlight: 'Not Found',
    description: 'The page you are looking for does not exist.',
    buttonLabel: 'Go Home',
  };

  return (
    <>
      {/* Title workaround for not-found page: https://github.com/vercel/next.js/issues/45620 */}
      <title>{content?.metadataTitle}</title>
      <h1>{content?.title}</h1>
      <h2 className="mb-3">
        {content?.subTitleMain}{' '}
        <span className="text-(--highlight)">{content?.subTitleHighlight}</span>
      </h2>
      <p className="mb-10">{content?.description}</p>
      <Link href="/" tabIndex={-1}>
        <Button>
          <span className="transition-transform duration-500 group-hover:translate-x-4">
            {content?.buttonLabel}
          </span>
          <StartUp01Icon className="group-hover:-translate-y-9 ml-2 transition-transform duration-500" />
        </Button>
      </Link>
    </>
  );
}
