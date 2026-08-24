import type {
  UseFormRegister,
} from 'react-hook-form';

import type {
  ContactFormData,
} from '../../../types/contact';

import {
  FieldGroup,
  FieldLabel,
  Input,
  QuestionDescription,
  QuestionHeader,
  QuestionTitle,
} from '../ContactWizardStyles';

interface DateStepProps {
  register: UseFormRegister<ContactFormData>;
}

function DateStep({
  register,
}: DateStepProps) {
  return (
    <>
      <QuestionHeader>
        <QuestionTitle>
          Hizmeti ne zaman almak istersiniz?
        </QuestionTitle>

        <QuestionDescription>
          Tercih ettiğiniz tarihi paylaşabilirsiniz.
          Tarih seçimi zorunlu değildir.
        </QuestionDescription>
      </QuestionHeader>

      <FieldGroup>
        <FieldLabel htmlFor="preferredDate">
          Tercih Edilen Tarih
        </FieldLabel>

        <Input
          id="preferredDate"
          type="date"
          {...register('preferredDate')}
        />
      </FieldGroup>
    </>
  );
}

export default DateStep;