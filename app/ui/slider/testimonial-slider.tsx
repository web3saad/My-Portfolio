'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft01Icon, ArrowRight01Icon } from 'hugeicons-react';
import { useCallback } from 'react';
import StaggerAnimation from '@/app/ui/animation/stagger-animation';
import QuoteCard from '@/app/ui/card/quote-card';

type Props = {
  content: {
    testimonialEntriesCollection?: {
      items: Array<any>;
    };
  };
};

export default function TestimonialSlider({ content }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
    skipSnaps: true,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <>
      <div className="mb-7 flex items-center justify-between space-x-2">
        <h6 className="text-(--highlight) uppercase tracking-wider">
          Testimonials
        </h6>
        <div className="flex space-x-2">
          <button
            type="button"
            onClick={scrollPrev}
            className="hover-effect base-border rounded-full p-1.5 backdrop-blur-sm"
            aria-label="Previous slide"
          >
            <ArrowLeft01Icon
              className="relative right-0.5 text-(--secondary)"
              size={34}
            />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            className="hover-effect base-border rounded-full p-1.5 backdrop-blur-sm"
            aria-label="Next slide"
          >
            <ArrowRight01Icon
              className="relative left-0.5 text-(--secondary)"
              size={34}
            />
          </button>
        </div>
      </div>
      <div
        className="overflow-hidden sm:[mask-image:linear-gradient(to_right,transparent,black_0,black_calc(100%-5rem),transparent)]"
        ref={emblaRef}
      >
        <StaggerAnimation
          className="flex"
          itemClassName="my-2 mr-4 min-w-0 flex-none basis-full cursor-grab select-none px-1 active:cursor-grabbing sm:basis-5/6 md:basis-2/3 lg:basis-1/2 xl:basis-5/12"
          direction="fromBottom"
          aria-live="polite"
        >
          {content?.testimonialEntriesCollection?.items
            .filter((item) => item !== null)
            .map((item, index) => (
              <QuoteCard
                key={item.author}
                content={item}
                aria-label={`${index + 1} / ${content?.testimonialEntriesCollection?.items.length}`}
              />
            ))}
        </StaggerAnimation>
      </div>
    </>
  );
}
