import {
  Check,
  Home,
} from 'lucide-react';

import {
  homeRoomOptions,
} from '../../../services/contactOptions';

import type {
  HomeCleaningDetails,
} from '../../../types/contact';

import {
  DetailCard,
  DetailCardCheck,
  DetailCardGrid,
  DetailCardTitle,
  StepDescription,
  StepHeader,
  StepIcon,
  StepTitle,
} from '../ContactWizardStyles';

interface HomeCleaningStepProps {
  details: HomeCleaningDetails;
  onChangeDetails: (
    details: HomeCleaningDetails,
  ) => void;
}

function HomeCleaningStep({
  details,
  onChangeDetails,
}: HomeCleaningStepProps) {
  const handleRoomSelect = (
    roomCount: string,
  ) => {
    onChangeDetails({
      ...details,
      roomCount,
    });
  };

  return (
    <>
      <StepHeader>
        <StepIcon>
          <Home
            size={20}
            strokeWidth={1.9}
            aria-hidden="true"
          />
        </StepIcon>

        <div>
          <StepTitle>
            Eviniz kaç odalı?
          </StepTitle>

          <StepDescription>
            Size en yakın seçeneği seçin. Bu bilgi
            temizlik planını ve ekip ihtiyacını
            belirlememize yardımcı olur.
          </StepDescription>
        </div>
      </StepHeader>

      <DetailCardGrid>
        {homeRoomOptions.map((option) => {
          const isSelected =
            details.roomCount === option.value;

          const handleSelect = () => {
            handleRoomSelect(option.value);
          };

          return (
            <DetailCard
              key={option.value}
              type="button"
              $isSelected={isSelected}
              aria-pressed={isSelected}
              onClick={handleSelect}
            >
              <DetailCardTitle>
                {option.value === '5+1'
                  ? '5+1 ve üzeri'
                  : option.value}
              </DetailCardTitle>

              {isSelected && (
                <DetailCardCheck
                  aria-hidden="true"
                >
                  <Check
                    size={15}
                    strokeWidth={2.4}
                  />
                </DetailCardCheck>
              )}
            </DetailCard>
          );
        })}
      </DetailCardGrid>
    </>
  );
}

export default HomeCleaningStep;