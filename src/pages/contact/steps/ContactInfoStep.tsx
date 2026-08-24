import type {
  UseFormRegister,
} from 'react-hook-form';

import type {
  ContactFormData,
} from '../../../types/contact';

import {
  FieldGroup,
  FieldLabel,
  FormGrid,
  Input,
  QuestionDescription,
  QuestionHeader,
  QuestionTitle,
} from '../ContactWizardStyles';

interface ContactInfoStepProps {
  register: UseFormRegister<ContactFormData>;
}

function ContactInfoStep({
  register,
}: ContactInfoStepProps) {
  return (
    <>
      <QuestionHeader>
        <QuestionTitle>
          Size nasıl ulaşabiliriz?
        </QuestionTitle>

        <QuestionDescription>
          Teklifinizle ilgili dönüş yapabilmemiz
          için iletişim bilgilerinizi paylaşın.
        </QuestionDescription>
      </QuestionHeader>

      <FormGrid>
        <FieldGroup>
          <FieldLabel htmlFor="fullName">
            Ad Soyad
          </FieldLabel>

          <Input
            id="fullName"
            autoComplete="name"
            placeholder="Adınız ve soyadınız"
            {...register('fullName')}
          />
        </FieldGroup>

        <FieldGroup>
          <FieldLabel htmlFor="phone">
            Telefon
          </FieldLabel>

          <Input
            id="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="05XX XXX XX XX"
            {...register('phone')}
          />
        </FieldGroup>

        <FieldGroup>
          <FieldLabel htmlFor="email">
            E-posta
          </FieldLabel>

          <Input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="ornek@email.com"
            {...register('email')}
          />
        </FieldGroup>
      </FormGrid>
    </>
  );
}

export default ContactInfoStep;