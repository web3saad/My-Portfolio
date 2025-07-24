import type { Locale } from 'next-intl';
import BrandIcon from '@/app/ui/footer/icon/brand-icon';
import GithubIcon from '@/app/ui/footer/icon/github-icon';
import KofiIcon from '@/app/ui/footer/icon/kofi-icon';
import ActiveStyledLink from '@/app/ui/link/active-styled-link';
import ExternalIconLink from '@/app/ui/link/external-icon-link';
import ExternalLink from '@/app/ui/link/external-link';

type Props = {
  locale: Locale;
};

export default async function Footer({ locale }: Props) {
  // Use hardcoded local data for content
  const content = {
    title: 'Sayad Saad',
    description: 'Freelance Software Developer',
    profileSection: 'Profiles',
    profileGitHub: 'GitHub',
    profileGitHubHref: 'https://github.com/web3saad',
    profileStackOverflow: 'LinkedIn',
    profileStackOverflowHref: 'https://www.linkedin.com/in/mahammad-sayad-b1758826a',
    // legalSection: 'Legal',
    // legalNotice: 'Legal Notice',
    // legalPrivacyPolicy: 'Privacy Policy',
    // gitHubHref: 'https://github.com/yourusername',
    // gitHubHrefLabel: 'GitHub',
    // kofiHref: 'https://ko-fi.com/yourusername',
    // kofiHrefLabel: 'Buy me a coffee',
  };
  const year = new Date().getFullYear();

  return (
    <footer className="bg-(--surface-color) drop-shadow-sm">
      <div className="mx-auto max-w-(--breakpoint-xl) px-6 py-8 sm:pt-10 sm:pb-16">
        <div className="gap-2 md:flex md:justify-between">
          <div className="mb-8 md:mb-0">
            <BrandIcon
              title={content?.title}
              description={content?.description}
            />
          </div>
          <div className="grid grid-cols-2 gap-8 whitespace-nowrap sm:gap-16">
            <div>
              <h6 className="mb-5 text-sm uppercase">
                {content?.profileSection}
              </h6>
              <ul className="space-y-4 font-medium text-(--secondary)">
                <li>
                  <ExternalLink href={content?.profileGitHubHref} icon>
                    {content?.profileGitHub}
                  </ExternalLink>
                </li>
                <li>
                  <ExternalLink href={content?.profileStackOverflowHref} icon>
                    {content?.profileStackOverflow}
                  </ExternalLink>
                </li>
              </ul>
            </div>
            {/* Removed Legal section */}
          </div>
        </div>
        <hr className="my-7 border-(--border-color) sm:mx-auto md:my-9" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-(--secondary) text-sm">
            &copy; {year} {content?.title}
          </span>
          {/* <div className="mt-4 flex gap-5 sm:mt-0 sm:justify-center">
            <ExternalIconLink
              href={content?.gitHubHref}
              hrefLabel={content?.gitHubHrefLabel}
            >
              <GithubIcon className="h-4 w-4" />
            </ExternalIconLink>
            <ExternalIconLink
              href={content?.kofiHref}
              hrefLabel={content?.kofiHrefLabel}
            >
              <KofiIcon
                className="h-4 w-auto"
                backgroundColor="var(--surface-color)"
              />
            </ExternalIconLink>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
