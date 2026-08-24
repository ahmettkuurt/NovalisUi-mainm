import type {
  ContactFormData,
} from '../../../types/contact';

import {
  CheckboxWrapper,
  QuestionDescription,
  QuestionHeader,
  QuestionTitle,
  SummaryItem,
  SummaryLabel,
  SummaryList,
  SummaryValue,
} from '../ContactWizardStyles';

interface SummaryStepProps {
  values: ContactFormData;
  onKvkkChange: (
    approved: boolean,
  ) => void;
}

function SummaryStep({
  values,
  onKvkkChange,
}: SummaryStepProps) {
  const handleKvkkChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    onKvkkChange(event.target.checked);
  };

  return (
    <>
      <QuestionHeader>
        <QuestionTitle>
          Talebiniz hazır
        </QuestionTitle>

        <QuestionDescription>
          Bilgilerinizi kontrol ederek teklif
          talebinizi gönderebilirsiniz.
        </QuestionDescription>
      </QuestionHeader>

      <SummaryList>
        <SummaryItem>
          <SummaryLabel>
            Konum
          </SummaryLabel>

          <SummaryValue>
            {values.cityDistrict}
          </SummaryValue>
        </SummaryItem>

        <SummaryItem>
          <SummaryLabel>
            İletişim
          </SummaryLabel>

          <SummaryValue>
            {values.fullName} · {values.phone}
          </SummaryValue>
        </SummaryItem>

        {values.preferredDate && (
          <SummaryItem>
            <SummaryLabel>
              Tercih Edilen Tarih
            </SummaryLabel>

            <SummaryValue>
              {values.preferredDate}
            </SummaryValue>
          </SummaryItem>
        )}

        <SummaryItem>
          <SummaryLabel>
            Talep Detayı
          </SummaryLabel>

          <SummaryValue>
            {values.message}
          </SummaryValue>
        </SummaryItem>
      </SummaryList>

      <CheckboxWrapper>
        <input
          type="checkbox"
          checked={values.kvkkApproved}
          onChange={handleKvkkChange}
        />

        Kişisel verilerimin hizmet talebimin
        değerlendirilmesi ve benimle iletişime
        geçilmesi amacıyla işlenmesini onaylıyorum.
      </CheckboxWrapper>
    </>
  );
}

export default SummaryStep;