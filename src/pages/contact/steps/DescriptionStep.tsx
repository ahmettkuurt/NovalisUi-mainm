import type {
  UseFormRegister,
} from 'react-hook-form';

import type {
  ContactFormData,
} from '../../../types/contact';

import {
  FieldGroup,
  FieldLabel,
  QuestionDescription,
  QuestionHeader,
  QuestionTitle,
  Textarea,
} from '../ContactWizardStyles';

interface DescriptionStepProps {
  register: UseFormRegister<ContactFormData>;
}

function DescriptionStep({
  register,
}: DescriptionStepProps) {
  return (
    <>
      <QuestionHeader>
        <QuestionTitle>
          Eklemek istediğiniz başka bir detay var mı?
        </QuestionTitle>

        <QuestionDescription>
          Alanın mevcut durumu, özel talepleriniz
          veya bilmemizi istediğiniz diğer detayları
          paylaşabilirsiniz.
        </QuestionDescription>
      </QuestionHeader>

      <FieldGroup>
        <FieldLabel htmlFor="message">
          Talep Detayı
        </FieldLabel>

        <Textarea
          id="message"
          placeholder="Talebinizle ilgili detayları yazabilirsiniz..."
          {...register('message')}
        />
      </FieldGroup>
    </>
  );
}

export default DescriptionStep;