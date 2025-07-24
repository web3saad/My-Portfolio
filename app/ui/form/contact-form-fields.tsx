import type { FieldErrors, UseFormRegister } from 'react-hook-form';
import type { SaveMessageStatus } from '@/app/lib/actions';
import type { ContactFormData } from '@/app/lib/schemas';
import SubmitButton from '@/app/ui/button/submit-button';
import FormText from '@/app/ui/form/input/form-text';
import FormTextarea from '@/app/ui/form/input/form-textarea';

type Props = {
  content?: Form;
  state: SaveMessageStatus;
  handleFormAction: (formData: FormData) => void;
  errors: FieldErrors<ContactFormData>;
  register: UseFormRegister<ContactFormData>;
};

export default function ContactFormFields({
  content,
  state,
  handleFormAction,
  errors,
  register,
}: Props) {
  return (
    <form className="space-y-4" action={handleFormAction}>
      <FormText
        key="name"
        register={register}
        name="name"
        label={content?.labels?.name || ''}
        defaultValue={state?.rawData?.name || ''}
        errors={errors}
        validationMessages={content?.validationMessages}
      />
      <FormText
        key="email"
        register={register}
        name="email"
        label={content?.labels?.email || ''}
        defaultValue={state?.rawData?.email}
        errors={errors}
        validationMessages={content?.validationMessages}
      />
      <FormTextarea
        key="projectDetails"
        register={register}
        name="projectDetails"
        label={content?.labels?.projectDetails || ''}
        defaultValue={state?.rawData?.projectDetails}
        errors={errors}
        validationMessages={content?.validationMessages}
      />
      <SubmitButton key="submit">{content?.sendButtonLabel}</SubmitButton>
    </form>
  );
}
