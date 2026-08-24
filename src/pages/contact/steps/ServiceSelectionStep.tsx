import { useTranslation } from 'react-i18next';

import { cleaningServices } from '../../../services/cleaningServices';

import type {
  ContactServiceType,
} from '../../../types/contact';

import ServiceCard from '../components/ServiceCard';

import {
  QuestionDescription,
  QuestionEyebrow,
  QuestionHeader,
  QuestionTitle,
  ServiceGrid,
} from '../ContactWizardStyles';

interface ServiceSelectionStepProps {
  value: ContactServiceType | '';
  onChange: (
    serviceType: ContactServiceType,
  ) => void;
}

function ServiceSelectionStep({
  value,
  onChange,
}: ServiceSelectionStepProps) {
  const { t } = useTranslation();

  return (
    <>
      <QuestionHeader>
        <QuestionEyebrow>
          Hizmet Seçimi
        </QuestionEyebrow>

        <QuestionTitle>
          Hangi alanda desteğe ihtiyacınız var?
        </QuestionTitle>

        <QuestionDescription>
          Temizlik ihtiyacınıza en uygun hizmeti seçin.
          Sonraki adımlarda yalnızca seçtiğiniz hizmetle
          ilgili kısa sorular soracağız.
        </QuestionDescription>
      </QuestionHeader>

      <ServiceGrid>
        {cleaningServices.map((service) => {
          const handleSelect = () => {
            onChange(service.serviceType);
          };

          return (
            <ServiceCard
              key={service.id}
              image={service.image}
              title={t(service.titleKey)}
              description={t(service.descriptionKey)}
              selected={value === service.serviceType}
              onSelect={handleSelect}
            />
          );
        })}
      </ServiceGrid>
    </>
  );
}

export default ServiceSelectionStep;