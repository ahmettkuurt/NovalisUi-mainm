import {
  ProgressCount,
  ProgressLabel,
  ProgressTop,
  ProgressWrapper,
  StepBar,
  StepIndicator,
} from '../ContactWizardStyles';

interface WizardProgressProps {
  label: string;
  currentStep: number;
  totalSteps: number;
}

function WizardProgress({
  label,
  currentStep,
  totalSteps,
}: WizardProgressProps) {
  const steps = Array.from(
    { length: totalSteps },
    (_, index) => index + 1,
  );

  return (
    <ProgressWrapper>
      <ProgressTop>
        <ProgressLabel>
          {label}
        </ProgressLabel>

        <ProgressCount>
          Adım {currentStep} / {totalSteps}
        </ProgressCount>
      </ProgressTop>

      <StepIndicator>
        {steps.map((step) => (
          <StepBar
            key={step}
            $active={step <= currentStep}
          />
        ))}
      </StepIndicator>
    </ProgressWrapper>
  );
}

export default WizardProgress;