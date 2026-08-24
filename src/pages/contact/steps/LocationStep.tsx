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

interface LocationStepProps {
  register: UseFormRegister<ContactFormData>;
}

function LocationStep({
  register,
}: LocationStepProps) {
  return (
    <>
      <QuestionHeader>
        <QuestionTitle>
          Hizmet nerede verilecek?
        </QuestionTitle>

        <QuestionDescription>
          İl ve ilçe bilgisini paylaşmanız
          planlama yapmamıza yardımcı olur.
        </QuestionDescription>
      </QuestionHeader>

      <FieldGroup>
        <FieldLabel htmlFor="cityDistrict">
          İl / İlçe
        </FieldLabel>

        <Input
          id="cityDistrict"
          type="text"
          autoComplete="address-level2"
          placeholder="Örnek: İstanbul / Kadıköy"
          {...register('cityDistrict')}
        />
      </FieldGroup>
    </>
  );
}

export default LocationStep;