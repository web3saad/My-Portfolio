'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useLocale } from 'next-intl';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { type ContactFormData, contactFormSchema } from '@/app/lib/schemas';
import PresenceAnimation from '@/app/ui/animation/presence-animation';
import FormErrorCard from '@/app/ui/form/card/form-error-card';
import SubmittedStatusCard from '@/app/ui/form/card/form-success-card';
import ContactFormFields from '@/app/ui/form/contact-form-fields';
import LoadingSpinner from '@/app/ui/loading/loading-spinner';

type Props = {
  content?: Form;
};

export default function ContactForm({ content }: Props) {
  const locale = useLocale();
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    formState: { errors },
    setError,
  } = useForm<ContactFormData>({
    mode: 'onTouched',
    resolver: zodResolver(contactFormSchema),
  });

  useEffect(() => {
    if (!submitted) {
      return;
    }
    if (submitted) {
      setSubmitted(true);
    }
  }, [submitted]);

  const handleFormAction = (formData: FormData) => {
    // Instead of submitting, redirect to WhatsApp with the form data
    const name = formData.get('name') || '';
    const email = formData.get('email') || '';
    const projectDetails = formData.get('projectDetails') || '';
    const message =
      `Name: ${name}\nEmail: ${email}\nProject Details: ${projectDetails}`;
    const whatsappUrl = `https://wa.me/919606776950?text=${encodeURIComponent(message)}`;
    window.location.href = whatsappUrl;
  };

  const handleReturn = () => {
    setSubmitted(false);
  };

  return (
    <div className="relative max-w-2xl">
      <div
        className={`transition-opacity duration-500 opacity-100`}
      >
        <ContactFormFields
          content={content}
          submitted={submitted}
          handleFormAction={handleFormAction}
          errors={errors}
          register={register}
        />
      </div>
    </div>
  );
}
