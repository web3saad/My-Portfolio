import type { Locale } from 'next-intl';
import RadialAnimation from '@/app/ui/animation/radial-animation';
import ViewAnimation from '@/app/ui/animation/view-animation';
import ContactForm from '@/app/ui/form/contact-form';
import TestimonialSlider from '@/app/ui/slider/testimonial-slider';
import ProcessSteps from '@/app/ui/steps/process-steps';

type Props = {
  locale: Locale;
};

export default async function ContactSection({ locale }: Props) {
  // Use hardcoded local data for content
  const content = {
    title: 'Contact',
    subTitleMain: 'Get in',
    subTitleHighlight: 'Touch',
    processStepsCollection: {
      items: [
        {
          title: 'Submit your project details',
          description: 'Tell me about your project, your goals, and what you’re looking for. If I’m a good fit, I’ll invite you to schedule a free 30-minute consultation.',
        },
        {
          title: 'Receive a cost estimate',
          description: 'After the consultation, I’ll share my standard hourly or daily rate. If your project requires a fixed-price estimate, I’ll provide one within three business days, helping you decide if my services align with your budget.',
        },
        {
          title: 'Work begins',
          description: 'I’ll start development, perform a technical audit, or collaborate with your team — keeping you updated throughout.',
        },
        {
          title: 'Delivery & ongoing support',
          description: 'Once completed, I’ll deliver the results and make adjustments as needed. For long-term projects, I provide continued support and optimizations.',
        },
      ],
    },
  };
  const formContent = {
    gdprNoticeIntro: 'I have taken note of the',
    gdprNoticeLinkText: 'information regarding data processing',
    gdprNoticeDetails: '. My provided data will be stored for the purpose of creating and processing my request.',
    sendButtonLabel: 'Send Message',
    errorTitle: 'Something went wrong.',
    errorIntro: 'It seems there was an issue processing your message.',
    errorEditPrompt: 'Go back to the form',
    errorEditAriaLabel: 'Return to form to edit your message',
    errorDescription: 'or try again using the button below. If the problem persists, feel free to reach out to me directly at',
    errorContactEmail: 'example@domain.com',
    errorButtonLabel: 'Try again',
    emailVerificationTitle: 'Check your email',
    emailVerificationDescription: 'I have sent you a confirmation link. Please check your inbox and click the link to verify your email. If you don’t see the email, check your spam folder.',
    emailResendButtonLabel: 'Resend Email',
    emailEditPrompt: 'is not your email?',
    emailEditAriaLabel: 'Return to form to edit email',
    attemptsLabel: 'attempts left',
    attemptLabel: 'attempt left',
    labels: {
      name: 'Name',
      email: 'Email',
      role: 'Job Title & Company (Optional)',
      projectDetails: 'Project Details',
    },
    validationMessages: {
      nameRequired: 'Please enter your name',
      nameMaxLength: 'Name cannot exceed 100 characters',
      emailInvalid: 'The email provided is invalid',
      emailMaxLength: 'Email cannot exceed 100 characters',
      roleMaxLength: 'Job title and company name cannot exceed 150 characters',
      projectDetailsRequired: 'Please enter your project details',
      projectDetailsMaxLength: 'Project details cannot exceed 1000 characters',
      consentRequired: 'You must agree to proceed',
    },
  };
  const testimonialsContent = {
    title: 'What others say',
    prevSlideLabel: 'Previous slide',
    nextSlideLabel: 'Next slide',
    testimonialEntriesCollection: {
      items: [
        {
          quote: 'The SpinXpress laundry website is fast, user-friendly, and has helped us streamline our business operations.',
          author: 'SpinXpress',
          jobTitle: 'Laundry Business',
          logoInvert: null,
          logo: {
            url: '/nextjs.svg',
            width: 36,
            height: 18,
            description: 'SpinXpress logo',
          },
        },
        {
          quote: 'Elite Services now has a professional and modern company website. Communication was smooth and the final product exceeded our expectations.',
          author: 'Elite Services',
          jobTitle: 'Service Company',
          logoInvert: null,
          logo: {
            url: '/react.svg',
            width: 50,
            height: 25,
            description: 'Elite Services logo',
          },
        },
        {
          quote: 'The travel planner website is intuitive and visually appealing. It has made planning trips so much easier for our users.',
          author: 'arshak',
          jobTitle: 'Travel Planner',
          logoInvert: null,
          logo: {
            url: '/nextjs.svg',
            width: 36,
            height: 18,
            description: 'arshak logo',
          },
        },
        {
          quote: 'The restaurant management website is comprehensive, reliable, and has greatly improved our daily operations.',
          author: 'aqeeb',
          jobTitle: 'Restaurant Owner',
          logoInvert: null,
          logo: {
            url: '/react.svg',
            width: 50,
            height: 25,
            description: 'aqeeb logo',
          },
        },
      ],
    },
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <RadialAnimation top={0} left="100%" radius={50} />
      <div className="mx-auto max-w-(--breakpoint-xl) px-6">
        <h6 className="mb-7 font-bold text-(--highlight) uppercase tracking-wider">
          {content?.title}
        </h6>
        <ViewAnimation className="mb-10 lg:mb-16" direction="fromBottom">
          <h3 className="uppercase">
            {content?.subTitleMain}{' '}
            <span className="font-light">{content?.subTitleHighlight}</span>
          </h3>
        </ViewAnimation>
        <div className="flex flex-col gap-10 lg:flex-row xl:gap-12">
          <ViewAnimation className="lg:w-1/2" duration={0.5} delay={0.1}>
            <ContactForm content={formContent} />
          </ViewAnimation>
          <div className="lg:w-1/2">
            {content?.processStepsCollection?.items &&
              content?.processStepsCollection?.items.length > 0 && (
                <ProcessSteps
                  content={
                    content?.processStepsCollection?.items
                  }
                />
              )}
          </div>
        </div>
        <div className="pt-32 lg:pt-44">
          <TestimonialSlider
            content={testimonialsContent}
          />
        </div>
      </div>
    </section>
  );
}
