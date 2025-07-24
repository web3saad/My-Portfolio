import { useLocale } from 'next-intl';
import RevealAnimation from '@/app/ui/animation/reveal-animation';
import Astronaut from '@/app/ui/not-found/astronaut';
import NotFoundContent from '@/app/ui/not-found/not-found-content';
import Stars from '@/app/ui/not-found/stars';

export default function NotFound() {
  const locale = useLocale();

  return (
    <div className="overflow-hidden py-4 md:py-12">
      <Stars />
      <Astronaut />
      <RevealAnimation className="relative flex flex-col content-center text-center">
        <NotFoundContent locale={locale} />
      </RevealAnimation>
    </div>
  );
}
