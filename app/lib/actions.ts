'use server';

import { render } from '@react-email/components';
import type { Locale } from 'next-intl';
import { type ContactFormData, contactFormSchema } from '@/app/lib/schemas';

export type SaveMessageStatus = null;

// All server-side message saving and email sending logic removed as not needed
