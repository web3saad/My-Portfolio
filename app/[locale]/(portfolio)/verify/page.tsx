import type { Locale } from 'next-intl';
import { Suspense } from 'react';
import VerifyContent from '@/app/ui/verify/verify-content';

type Props = {
  params: Promise<{ locale: Locale }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;

  // Remove contentfulClient.verifyContent call
  // const query = await contentfulClient.verifyContent({ locale });
  // const content = query.verifyCollection?.items[0];

  // For now, return a placeholder or remove the component if no data source
  // Assuming content is passed directly or removed if not needed
  const content = null; // Placeholder, replace with actual data fetching logic

  return (
    <Suspense>
      <VerifyContent content={content as any} /> {/* Assuming content is of type Verify */}
    </Suspense>
  );
}
