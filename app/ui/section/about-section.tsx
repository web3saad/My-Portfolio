import Image from 'next/image';
import type { Locale } from 'next-intl';
import { calculateAge } from '@/app/lib/date-utils';
import ViewAnimation from '@/app/ui/animation/view-animation';
import ExperienceCounter from '@/app/ui/counter/experience-counter';

type Props = {
  locale: Locale;
};

export default async function AboutSection({ locale }: Props) {
  // Use hardcoded local data for content
  const content = {
    title: 'About Me',
    ageStatementPrefix: "I'm a",
    age: '2003-03-01T00:00:00.000Z', // 22 years old as of 2024
    ageStatementSuffix: '-year-old',
    professionalTitle: 'freelance software developer',
    locationStatement: 'from India.',
    description: 'MCA graduate with strong foundation in Full stack development using MERN and a strong focus on cloud based application development and passionate about Web3 technologies and committed to building scalable and efficient web solutions and Experienced in Freelancing with track record of delivering client focused projects across various domains.',
    experienceMetricsCollection: {
      items: [
        { startYear: 2020, labelSuffix: 'Years of Coding Excellence' },
        { startYear: 1995, labelSuffix: 'project delivered' },
      ],
    },
    image: {
      url: '/saad.jpeg',
      width: 300,
      height: 300,
      description: 'Sahad profile photo',
    },
  };

  return (
    <section id="about" className="relative py-24 md:py-52 lg:py-60">
      <div className="mx-auto max-w-(--breakpoint-xl) px-6">
        <div className="flex flex-col gap-8 md:flex-row lg:gap-10">
          {content?.image?.url &&
            content.image.width &&
            content.image.height &&
            content.image.description && (
              <ViewAnimation
                duration={1}
                className="flex items-center justify-center brightness-110 md:w-1/3 lg:w-5/12 dark:brightness-100"
              >
                <Image
                  className="w-2/3 select-none rounded-2xl duration-500 hover:scale-[1.02] sm:w-1/2 md:w-full lg:w-10/12"
                  src={content.image.url}
                  width={content.image.width}
                  height={content.image.height}
                  alt={content.image.description}
                />
              </ViewAnimation>
            )}
          <div className="flex w-full items-center md:w-2/3 lg:w-7/12">
            <div className="space-y-7">
              <h6 className="font-bold text-(--highlight) uppercase tracking-wider">
                {content?.title}
              </h6>
              <ViewAnimation
                delay={0.2}
                duration={0.5}
                direction="fromBottom"
                className="mb-7"
              >
                <h4>
                  {content?.ageStatementPrefix} {calculateAge(content?.age)}
                  {content?.ageStatementSuffix}{' '}
                  <span className="font-light">
                    {content?.professionalTitle}
                  </span>{' '}
                  {content?.locationStatement}
                </h4>
              </ViewAnimation>
              <ViewAnimation delay={0.3} direction="fromBottom">
                <p className="text-(--secondary)">{content?.description}</p>
              </ViewAnimation>
              <div className="flex flex-col justify-between space-y-4 sm:flex-row sm:space-x-16 sm:space-y-0 lg:space-x-32">
                {content?.experienceMetricsCollection?.items
                  .filter((item) => item !== null)
                  .map((item) => (
                    <ViewAnimation
                      key={item.labelSuffix}
                      delay={0.2}
                    >
                      <ExperienceCounter content={item} />
                    </ViewAnimation>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
