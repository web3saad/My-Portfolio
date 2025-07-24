// This file is now disabled as Contentful is removed.

const MOCK_IMAGE_URL = 'https://images.ctfassets.net/mock.png';
const MOCK_URL = 'https://example.com';
const MOCK_EMAIL = 'example@domain.com';

export const handlers = [
  http.get(MOCK_IMAGE_URL, () =>
    HttpResponse.arrayBuffer(new ArrayBuffer(0), {
      headers: { 'Content-Type': 'image/png' },
    }),
  ),
  graphql.query(AboutContentDocument, () =>
    HttpResponse.json({
      data: {
        aboutCollection: {
          items: [
            {
              title: 'About me',
              ageStatementPrefix: "I'm a",
              age: '1999-04-02T00:00:00.000Z',
              ageStatementSuffix: '-year-old',
              professionalTitle: 'freelance software developer',
              locationStatement: 'based in Germany.',
              description:
                'After earning my Bachelor’s degree in Computer Science from Heinrich Heine University Düsseldorf in 2020, I have continuously developed my skills as a developer. Over the past few years, I have worked in various roles and with a wide range of technologies to build robust digital solutions. Whether frontend or backend – with Java, Spring Boot, JavaScript, TypeScript, React, and Next.js, I create reliable, scalable applications that drive business results.',
              experienceMetricsCollection: {
                items: [
                  {
                    startYear: 2017,
                    labelPrefix: 'Years of',
                    labelSuffix: 'Coding Excellence',
                  },
                  {
                    startYear: 2020,
                    labelPrefix: 'Years of',
                    labelSuffix: 'Professional Impact',
                  },
                ],
              },
              image: {
                url: MOCK_IMAGE_URL,
                width: 1538,
                height: 1798,
                description: 'Portrait placeholder',
              },
            },
          ],
        },
      },
    }),
  ),
  graphql.query(ContactContentDocument, () =>
    HttpResponse.json({
      data: {
        contactCollection: {
          items: [
            {
              title: 'Get in Touch!',
              subTitleMain: 'Send a',
              subTitleHighlight: 'Message.',
              processStepsCollection: {
                items: [
                  {
                    title: 'Submit your project details',
                    description:
                      'Tell me about your project, your goals, and what you’re looking for. If I’m a good fit, I’ll invite you to schedule a free 30-minute consultation.',
                  },
                  {
                    title: 'Receive a cost estimate',
                    description:
                      'After the consultation, I’ll share my standard hourly or daily rate. If your project requires a fixed-price estimate, I’ll provide one within three business days, helping you decide if my services align with your budget.',
                  },
                  {
                    title: 'Work begins',
                    description:
                      'I’ll start development, perform a technical audit, or collaborate with your team — keeping you updated throughout.',
                  },
                  {
                    title: 'Delivery & ongoing support',
                    description:
                      'Once completed, I’ll deliver the results and make adjustments as needed. For long-term projects, I provide continued support and optimizations.',
                  },
                ],
              },
            },
          ],
        },
        formCollection: {
          items: [
            {
              gdprNoticeIntro: 'I have taken note of the',
              gdprNoticeLinkText: 'information regarding data processing',
              gdprNoticeDetails:
                '. My provided data will be stored for the purpose of creating and processing my request.',
              sendButtonLabel: 'Send Message',
              errorTitle: 'Something went wrong.',
              errorIntro:
                'It seems there was an issue processing your message.',
              errorEditPrompt: 'Go back to the form',
              errorEditAriaLabel: 'Return to form to edit your message',
              errorDescription:
                'or try again using the button below. If the problem persists, feel free to reach out to me directly at',
              errorContactEmail: MOCK_EMAIL,
              errorButtonLabel: 'Try again',
              emailVerificationTitle: 'Check your email',
              emailVerificationDescription:
                'I have sent you a confirmation link. Please check your inbox and click the link to verify your email. If you don’t see the email, check your spam folder.',
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
                roleMaxLength:
                  'Job title and company name cannot exceed 150 characters',
                projectDetailsRequired: 'Please enter your project details',
                projectDetailsMaxLength:
                  'Project details cannot exceed 1000 characters',
                consentRequired: 'You must agree to proceed',
              },
            },
          ],
        },
        testimonialsCollection: {
          items: [
            {
              title: 'What others say',
              prevSlideLabel: 'Previous slide',
              nextSlideLabel: 'Next slide',
              testimonialEntriesCollection: {
                items: [
                  {
                    quote:
                      'Their work style is focused and efficient. This individual demonstrates exceptional commitment and delivers strong performance in both qualitative and quantitative terms. Through their work, they achieve outstanding results.',
                    author: 'John D.',
                    jobTitle: 'Executive',
                    logoInvert: null,
                    logo: {
                      url: MOCK_IMAGE_URL,
                      width: 360,
                      height: 180,
                      description: 'Company logo placeholder',
                    },
                  },
                  {
                    quote:
                      'This professional possesses highly comprehensive and excellent expertise… They quickly familiarize themselves with assigned tasks and pursue agreed goals consistently and with the highest level of success.',
                    author: 'Jane S.',
                    jobTitle: 'CTO',
                    logoInvert: null,
                    logo: {
                      url: MOCK_IMAGE_URL,
                      width: 500,
                      height: 250,
                      description: 'Company logo placeholder',
                    },
                  },
                  {
                    quote:
                      'Due to their excellent comprehension skills, they quickly adapt to every task. This individual is consistently highly resilient and acts with composure even in stressful situations.',
                    author: 'Michael T.',
                    jobTitle: 'Managing Director',
                    logoInvert: null,
                    logo: {
                      url: MOCK_IMAGE_URL,
                      width: 400,
                      height: 200,
                      description: 'Company logo placeholder',
                    },
                  },
                  {
                    quote:
                      'Their outstanding academic performance reflects their technical expertise. Furthermore, they demonstrate a high level of self-learning ability and motivation…',
                    author: 'Alex R.',
                    jobTitle: 'Team Lead',
                    logoInvert: true,
                    logo: {
                      url: MOCK_IMAGE_URL,
                      width: 620,
                      height: 310,
                      description: 'Company logo placeholder',
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    }),
  ),
  graphql.query(EmailContentDocument, () =>
    HttpResponse.json({
      data: {
        emailCollection: {
          items: [
            {
              preview: 'Click the button below to confirm your email.',
              logo: {
                url: MOCK_IMAGE_URL,
                description: 'BrandIcon placeholder',
              },
              websiteUrl: MOCK_URL,
              greeting: 'Hello',
              description:
                'thank you for reaching out! To confirm your email address and complete your request, please click the button below:',
              buttonLabel: 'Confirm email',
              linkDescription:
                'If the button doesn’t work, you can use the following link:',
              ignoreDisclaimer:
                'If you didn’t request this, you can ignore this email.',
              closingRemark: 'Best regards,',
              signature: 'Roman Jumatov',
            },
          ],
        },
      },
    }),
  ),
  graphql.query(FooterContentDocument, () =>
    HttpResponse.json({
      data: {
        footerCollection: {
          items: [
            {
              title: 'Roman Jumatov',
              description: 'Tailored Software Solutions',
              profileSection: 'Profiles',
              profileGitHub: 'GitHub',
              profileGitHubHref: MOCK_URL,
              profileStackOverflow: 'Stack Overflow',
              profileStackOverflowHref: MOCK_URL,
              legalSection: 'Legal',
              legalNotice: 'Legal Notice',
              legalPrivacyPolicy: 'Privacy Policy',
              gitHubHref: MOCK_URL,
              gitHubHrefLabel: 'View the source code on GitHub',
              kofiHref: MOCK_URL,
              kofiHrefLabel: 'Visit Ko-Fi profile',
            },
          ],
        },
      },
    }),
  ),
  graphql.query(HomeContentDocument, ({ variables }) =>
    HttpResponse.json({
      data: {
        homeCollection: {
          items: [
            {
              greeting: variables.locale === 'en' ? 'Hello there!' : 'Hallo!',
              greetingDescription: 'Waving Hand',
              introHeadingMain: "I'm Roman",
              introHeadingHighlight: 'Jumatov',
              introSubheading: 'Freelance Developer',
              introDescription:
                'I’ll guide your project from the first idea to the finished product – with full-stack expertise, tailored web solutions, and a clear focus on quality and scalability.',
              ctaButtonLabel: 'Contact Me',
              scrollDownLabel: 'Scroll down',
              floatingLabel: 'Available',
            },
          ],
        },
      },
    }),
  ),
  graphql.query(LegalNoticeContentDocument, () =>
    HttpResponse.json({
      data: {
        legalNoticeCollection: {
          items: [
            {
              title: 'Legal Notice',
              subTitleInformation:
                'Information in accordance with § 5 Digital Services Act (DSA)',
              addressName: 'Roman Jumatov',
              addressJobTitle: 'Freelance Software Developer',
              addressStreet: 'Main Street 25',
              addressPostalCode: '12345',
              addressCity: 'Rivertown',
              subTitleContact: 'Contact',
              contactEmailLabel: 'Email:',
              contactEmail: MOCK_EMAIL,
              contactFormLabel: 'Contact Form',
              subTitleDispute:
                'Consumer Dispute Resolution / Universal Arbitration Body',
              disputeLabel: 'Notice pursuant to § 36 of the German VSBG:',
              disputeStatement:
                'I am neither obligated nor willing to participate in dispute resolution procedures before a consumer arbitration body.',
            },
          ],
        },
      },
    }),
  ),
  graphql.query(MainMetadataContentDocument, () =>
    HttpResponse.json({
      data: {
        metadataCollection: {
          items: [
            {
              mainTitle:
                'Roman Jumatov - Freelance Software Developer & Web Expert',
              mainDescription:
                'Explore my portfolio: I build scalable, user-friendly web applications and provide custom solutions for frontend, backend, and MVPs.',
              mainKeywords: ['Freelance Developer'],
              openGraphImage: {
                url: MOCK_IMAGE_URL,
                width: 1200,
                height: 630,
              },
            },
          ],
        },
      },
    }),
  ),
  graphql.query(LegalMetadataContentDocument, () =>
    HttpResponse.json({
      data: {
        metadataCollection: {
          items: [
            {
              legalTitle: 'Legal Notice - Roman Jumatov',
              legalDescription:
                'Legal information for the website of Roman Jumatov, freelance software developer.',
            },
          ],
        },
      },
    }),
  ),
  graphql.query(PrivacyMetadataContentDocument, () =>
    HttpResponse.json({
      data: {
        metadataCollection: {
          items: [
            {
              privacyTitle: 'Privacy Policy - Roman Jumatov',
              privacyDescription:
                'Learn how your personal data is processed and protected on the website of Roman Jumatov, freelance software developer.',
            },
          ],
        },
      },
    }),
  ),
  graphql.query(NavbarContentDocument, () =>
    HttpResponse.json({
      data: {
        navbarCollection: {
          items: [
            {
              usFlagDescription: 'Flag of the United States',
              deFlagDescription: 'Flag of Germany',
              englishLabel: 'English',
              germanLabel: 'German',
              switchLanguageLabel: 'Select language',
              homeLabel: 'Home',
              aboutLabel: 'About',
              servicesLabel: 'Services',
              contactLabel: 'Contact',
              switchThemeLabel: 'Toggle theme',
            },
          ],
        },
      },
    }),
  ),
  graphql.query(NotFoundContentDocument, () =>
    HttpResponse.json({
      data: {
        notFoundCollection: {
          items: [
            {
              metadataTitle: 'Page Not Found - Roman Jumatov',
              title: 'Houston,',
              subTitleMain: 'we have a',
              subTitleHighlight: 'problem',
              description: '404: This page is off the map.',
              buttonLabel: 'Take Me Home',
            },
          ],
        },
      },
    }),
  ),
  graphql.query(PrivacyPolicyContentDocument, () =>
    HttpResponse.json({
      data: {
        privacyPolicyCollection: {
          items: [
            {
              title: 'Privacy Policy',
              lastModified: 'Last updated: February 2025',
              privacyOverview: {
                title: '1. Data Privacy at a Glance',
                generalInfoTitle: 'General Information',
                generalInfoDescription:
                  'In this Privacy Policy, ‘we’ refers to Roman Jumatov, the operator of this website. Here, you will find an overview of how your personal data is handled when you visit our website. Personal data includes any information that can be used to identify you personally. For more details, please refer to the sections below.',
                dataCollectionTitle: 'Data Collection on This Website',
                responsiblePartyTitle: 'Who is responsible?',
                responsiblePartyDescription:
                  'The data processing on this website is carried out by the operator, Roman Jumatov. His contact details can be found in the section “Notice to the Responsible Party.”',
                dataCaptureTitle: 'How do we collect your data?',
                dataDirectCaptureText:
                  'Some of the data is collected when you provide it directly to us, for example, by entering it into a contact form.',
                dataAutomaticCaptureText:
                  'Other data is collected automatically or with your consent when you visit the website through our IT systems, such as technical data like your browser, operating system, or the time of page access.',
                dataPurposeTitle: 'What do we use your data for?',
                dataPurposeDescription:
                  'Some of the data is used to ensure the error-free provision of the website. Other data may be used to analyze user behavior. If you make inquiries or initiate contracts via the website, we use the transmitted data for processing.',
                userRightsTitle: 'Your Rights',
                userRightsIntroText: 'You have the right to:',
                userRightsList: [
                  'Obtain information about the stored data and its use.',
                  'Request the correction or deletion of your data.',
                  'Withdraw consent to data processing at any time.',
                  'Request the restriction of data processing under certain circumstances.',
                  'File a complaint with a data protection supervisory authority.',
                ],
                userRightsContactText:
                  'For questions or concerns about data protection, you can contact us at any time.',
                analysisToolsTitle: 'Analytic Tools and Third-Party Tools',
                analysisToolsIntroText:
                  'When visiting this website, your browsing behavior may be statistically evaluated. This is done primarily with analysis programs.',
                analysisToolsDetailsText:
                  'Detailed information on this can be found further down in this Privacy Policy.',
              },
              hosting: {
                title: '2. Hosting',
                vercelTitle: 'Vercel',
                vercelHostingInfo:
                  'Our website is hosted by Netlify. The provider is Netlify Inc., 2325 3rd Street, Suite 29, San Francisco, CA 94104, UOur website is hosted on Vercel, a cloud deployment platform. The service provider is Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, USA.',
                vercelDataProcessing:
                  'Vercel processes your data in the USA as well. We would like to point out that the European Court of Justice currently does not consider the level of data protection in the USA to be adequate. This may involve risks regarding the security and legality of data processing.',
                vercelContractualClauses:
                  'To protect your data, Vercel relies on Standard Contractual Clauses (SCC) in accordance with Art. 46 (2) and (3) of the GDPR. These model contracts, provided by the European Commission, are intended to ensure that your data complies with European data protection standards even when processed in third countries. Details can be found here:',
                vercelContractualClausesLink: MOCK_URL,
                vercelDataProcessingAgreement:
                  'You can find Vercel’s Data Processing Addendum (DPA), which complies with the Standard Contractual Clauses, here:',
                vercelDataProcessingAgreementLink: MOCK_URL,
                vercelPrivacyPolicy:
                  'For more information on how Vercel processes your data, please refer to Vercel’s Privacy Policy at:',
                vercelPrivacyPolicyLink: MOCK_URL,
              },
              notesAndLegalInformation: {
                title: '3. General Notes and Mandatory Information',
                dataProtectionTitle: 'Data Protection',
                dataProtectionIntro:
                  'The protection of your personal data is important to us. We treat your personal data confidentially and in accordance with the legal data protection regulations as well as this Privacy Policy.',
                dataProtectionDetails:
                  'When you visit this website, various personal data will be collected. Personal data refers to information that can be used to identify you. This Privacy Policy explains what data we collect, how we use it, and for what purpose.',
                dataProtectionNotice:
                  'Please note that data transmission over the Internet (e.g., communication via email) may have security vulnerabilities. Complete protection of data from access by third parties is not possible.',
                responsiblePartyTitle:
                  'Information About the Responsible Party',
                responsiblePartyIntro:
                  'The responsible party for data processing on this website is:',
                responsiblePartyName: 'Roman Jumatov',
                responsiblePartyRole: 'Freelance Software Developer',
                responsiblePartyStreet: 'Main Street 25',
                responsiblePartyPostalCode: '12345',
                responsiblePartyCity: 'River Town',
                responsiblePartyEmailLabel: 'Email:',
                responsiblePartyEmail: MOCK_EMAIL,
                responsiblePartyInfo:
                  'The responsible party is the individual or entity that determines the purposes and means of processing personal data, either alone or jointly with others.',
                dataStorageDurationTitle: 'Storage Duration',
                dataStorageDurationDetails:
                  'Unless otherwise specified in this Privacy Policy, we store your personal data only as long as necessary to fulfill the purpose for which it was collected. Once the data is no longer required or you revoke your consent, we delete it, provided there are no statutory retention obligations to the contrary.',
                legalBasisTitle: 'Legal Basis for Data Processing',
                legalBasisIntro:
                  'The processing of your personal data is based on the following legal grounds under the GDPR, depending on the context:',
                legalBasisList: [
                  'Art. 6 (1) (a) GDPR: Consent (e.g., for cookies).',
                  'Art. 6 (1) (b) GDPR: Fulfillment of a contract or pre-contractual measures.',
                  'Art. 6 (1) (c) GDPR: Compliance with a legal obligation.',
                  'Art. 6 (1) (f) GDPR: Protection of legitimate interests.',
                ],
                legalBasisDetails:
                  'Details about these legal bases can be found in the respective sections of this Privacy Policy.',
                userRightsTitle: 'Your Rights',
                userRightsIntro: 'You have the following rights at any time:',
                userRightsList: [
                  'Right to access (Art. 15 GDPR)',
                  'Right to rectification (Art. 16 GDPR)',
                  'Right to erasure (Art. 17 GDPR)',
                  'Right to restrict processing (Art. 18 GDPR)',
                  'Right to data portability (Art. 20 GDPR)',
                  'Right to object (Art. 21 GDPR)',
                ],
                complaintRightTitle: 'Right to Lodge a Complaint',
                complaintRightDetails:
                  'If you believe that your data is being processed unlawfully, you have the right to file a complaint with a data protection authority. The competent authority is typically the one in your place of residence or workplace.',
                sslTlsEncryptionTitle: 'SSL/TLS Encryption',
                sslTlsEncryptionIntro:
                  'This website uses SSL/TLS encryption to protect your data during transmission. You can recognize an encrypted connection by the “https://” in the browser’s address bar and the padlock icon.',
                sslTlsEncryptionDetails:
                  'When SSL or TLS encryption is activated, the data you transmit to us cannot be read by third parties.',
              },
              dataCollection: {
                title: '4. Data Collection on This Website',
                vercelAnalyticsTitle: 'Vercel Web Analytics',
                vercelAnalyticsDetails:
                  'We use the Vercel Web Analytics tool on our website, provided by Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, USA. Vercel processes data, including in the USA, and implements Standard Contractual Clauses in accordance with Article 46 of the GDPR to ensure the protection of personal data and to uphold European data protection standards when processing data in third countries.',
                vercelAnalyticsPrivacyPolicy:
                  'More information on how Vercel Web Analytics processes data can be found at:',
                vercelAnalyticsPrivacyPolicyLink: MOCK_URL,
                vercelInsightsTitle: 'Vercel Speed Insights',
                vercelInsightsDetails:
                  'To analyze page load speed, we use the Vercel Speed Insights tool, also provided by Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, USA. Data is processed, including in the USA, and Vercel uses Standard Contractual Clauses in accordance with Article 46 of the GDPR to ensure the protection of personal data.',
                vercelInsightsPrivacyPolicy:
                  'For more information on data processing by Vercel Speed Insights, please visit:',
                vercelInsightsPrivacyPolicyLink: MOCK_URL,
                contactFormTitle: 'Contact Form and Email Inquiries',
                contactFormIntro:
                  'Using the contact form and sending emails require the provision of personal data (e.g., name, email address, message). This data is only stored for the purpose of processing your inquiry and will not be shared without your consent.',
                legalBasisTitle: 'Legal Basis',
                legalBasisList: [
                  'Art. 6 (1) (b) GDPR: For the performance of a contract or pre-contractual measures.',
                  'Art. 6 (1) (f) GDPR: Legitimate interest in efficient processing.',
                  'Art. 6 (1) (a) GDPR: Based on your consent (which can be revoked).',
                ],
                storageDurationTitle: 'Storage Duration',
                storageDurationDetails:
                  'The data will be stored until the purpose is fulfilled or you request its deletion. Legal retention periods remain unaffected.',
              },
            },
          ],
        },
      },
    }),
  ),
  graphql.query(ServicesContentDocument, () =>
    HttpResponse.json({
      data: {
        servicesCollection: {
          items: [
            {
              title: 'What I offer',
              subTitleMain: 'Featured',
              subTitleHighlight: 'Services.',
              serviceEntriesCollection: {
                items: [
                  {
                    iconName: 'WebDesign01Icon',
                    title: 'Web Development',
                    tags: ['Responsive Design', 'Accessibility'],
                    description:
                      'I build modern, scalable, and performant websites that are tailored to your specific business needs while being user-friendly and accessible.',
                  },
                  {
                    iconName: 'IdeaIcon',
                    title: 'MVP Development',
                    tags: ['Zero to One', 'Prototype', 'Scalability'],
                    description:
                      'I bring your ideas to life by creating a minimum viable product (MVP). My focus is on building a well-architected application that’s ready for future growth.',
                  },
                  {
                    iconName: 'MentoringIcon',
                    title: 'Technical Consulting',
                    tags: ['Mentoring', 'Code Review', 'Workshop'],
                    description:
                      'I provide expert consulting to optimize your software systems and conduct code audits with your team. Together, we’ll review your JavaScript application in 2-3 days and establish best practices.',
                  },
                  {
                    iconName: 'SoftwareLicenseIcon',
                    title: 'Software Development',
                    tags: ['Team Collaboration', 'Feature Development'],
                    description:
                      'I work alongside your team on complex applications to delight your customers with new features and performance improvements.',
                  },
                  {
                    iconName: 'SystemUpdate01Icon',
                    title: 'Support & Maintenance',
                    tags: ['Migration', 'Updates', 'Optimization'],
                    description:
                      'I help you migrate your existing systems to modern technologies or new platforms. Additionally, I ensure that your digital products stay up-to-date, secure, and high-performing.',
                  },
                ],
              },
            },
          ],
        },
      },
    }),
  ),
  graphql.query(VerifyContentDocument, () =>
    HttpResponse.json({
      data: {
        verifyCollection: {
          items: [
            {
              successTitle: 'Thank you for verifying your email!',
              successDescription:
                'I’ll review your message and typically respond within 24 hours. Looking forward to connecting!',
              errorTitle: 'Verification failed.',
              errorDescription:
                'Your token is either invalid or expired. If the problem persists, please contact me directly under',
              errorEmail: MOCK_EMAIL,
            },
          ],
        },
      },
    }),
  ),
];
