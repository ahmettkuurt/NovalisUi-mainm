import {
  ArrowLeft,
  ArrowRight,
} from 'lucide-react';

import {
  BackButton,
  NavigationWrapper,
  NextButton,
} from '../ContactWizardStyles';

interface WizardNavigationProps {
  showBack: boolean;
  nextDisabled: boolean;
  nextLabel?: string;
  onBack: () => void;
  onNext: () => void;
}

function WizardNavigation({
  showBack,
  nextDisabled,
  nextLabel = 'Devam Et',
  onBack,
  onNext,
}: WizardNavigationProps) {
  return (
    <NavigationWrapper>
      <div>
        {showBack && (
          <BackButton
            type="button"
            onClick={onBack}
          >
            <ArrowLeft size={16} />
            {' '}
            Geri
          </BackButton>
        )}
      </div>

      <NextButton
        type="button"
        disabled={nextDisabled}
        onClick={onNext}
      >
        {nextLabel}

        <ArrowRight size={16} />
      </NextButton>
    </NavigationWrapper>
  );
}

export default WizardNavigation;