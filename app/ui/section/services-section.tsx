import type { Locale } from 'next-intl';
import RadialAnimation from '@/app/ui/animation/radial-animation';
import StaggerAnimation from '@/app/ui/animation/stagger-animation';
import ViewAnimation from '@/app/ui/animation/view-animation';
import ServiceCard from '@/app/ui/card/service-card';

type Props = {
  locale: Locale;
};

export default async function ServicesSection({ locale }: Props) {
  // Use hardcoded local data for content
  const content = {
    title: 'Projects',
    subTitleMain: 'My',
    subTitleHighlight: 'Projects',
    serviceEntriesCollection: {
      items: [
        {
          iconName: 'WebDesign01Icon',
          title: 'Decentralised Fundraising Platform',
          tags: ['Blockchain', 'Ethereum', 'Crowdfunding'],
          description: 'A decentralized platform for secure, transparent fundraising on blockchain. Empowers users to create, manage, and support campaigns easily.',
        },
        {
          iconName: 'WebDesign01Icon',
          title: 'Smart Face Attendance System',
          tags: ['AI', 'Face Recognition', 'Attendance'],
          description: 'AI-powered attendance system using facial recognition for secure tracking. Ensures accurate, efficient attendance management for organizations.',
        },
        {
          iconName: 'WebDesign01Icon',
          title: 'Restaurant Management',
          tags: ['POS', 'Inventory', 'Billing'],
          description: 'A complete restaurant management solution for POS, inventory, and billing. Streamlines restaurant operations and improves efficiency.',
        },
        {
          iconName: 'WebDesign01Icon',
          title: 'Freelancer platform using Blockchain',
          tags: ['Blockchain', 'Freelance', 'Smart Contracts'],
          description: 'A decentralized freelancer platform leveraging blockchain and smart contracts. Enables secure, transparent work agreements and payments.',
        },
        {
          iconName: 'WebDesign01Icon',
          title: 'Insurance Management Web App',
          tags: ['Insurance', 'Web App', 'Policy Management'],
          description: 'Comprehensive web app for managing insurance policies, claims, and customer data. Simplifies workflows and enhances client service.',
        },
        {
          iconName: 'WebDesign01Icon',
          title: 'Travel Planner using MERN',
          tags: ['Travel', 'MERN', 'Planner'],
          description: 'Full-featured travel planning web app built with the MERN stack. Manage itineraries, bookings, and travel details with ease.',
        },
      ],
    },
  };

  return (
    <section id="services" className="relative py-24 md:py-32">
      <RadialAnimation top="50%" left={0} radius={65} />
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
        <StaggerAnimation
          className="grid gap-4 md:grid-cols-2 lg:gap-5 xl:grid-cols-3"
          direction="fromBottom"
          translation={50}
          amount={0.1}
        >
          {content?.serviceEntriesCollection?.items
            .filter((item) => item !== null)
            .map((item) => (
              <ServiceCard key={item.title} content={item} />
            ))}
        </StaggerAnimation>
      </div>
    </section>
  );
}
