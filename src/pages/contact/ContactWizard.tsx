import { useState } from 'react';
import { Sparkles } from 'lucide-react';
import {
  useForm,
} from 'react-hook-form';

import {
  createContactRequest,
} from '../../services/contactServices';

import {
  serviceDetailQuestions,
} from '../../services/contactOptions';

import type {
  ContactFormData,
  ContactServiceType,
  ServiceDetailField,
  ServiceDetailValue,
  WizardStep,
} from '../../types/contact';

import WizardNavigation from './components/WizardNavigation';
import WizardProgress from './components/WizardProgress';

import ContactInfoStep from './steps/ContactInfoStep';
import DateStep from './steps/DateStep';
import DescriptionStep from './steps/DescriptionStep';
import LocationStep from './steps/LocationStep';
import ServiceDetailsStep from './steps/ServiceDetailsStep';
import ServiceSelectionStep from './steps/ServiceSelectionStep';
import SummaryStep from './steps/SummaryStep';

import {
  WizardCard,
  WizardDescription,
  WizardHeader,
  WizardLabel,
  WizardTitle,
} from './ContactWizardStyles';

const wizardSteps: WizardStep[] = [
  'service',
  'serviceDetails',
  'location',
  'date',
  'contact',
  'description',
  'summary',
];

const defaultValues: ContactFormData = {
  serviceType: '',
  serviceDetails: {},
  cityDistrict: '',
  preferredDate: '',
  fullName: '',
  phone: '',
  email: '',
  message: '',
  kvkkApproved: false,
};

function ContactWizard() {
  const [
    currentStep,
    setCurrentStep,
  ] = useState<WizardStep>('service');

  const [
    detailQuestionIndex,
    setDetailQuestionIndex,
  ] = useState(0);

  const {
    register,
    watch,
    setValue,
    getValues,
    handleSubmit,
    formState: {
      isSubmitting,
    },
  } = useForm<ContactFormData>({
    defaultValues,
  });

  const formValues = watch();

  const currentStepIndex =
    wizardSteps.indexOf(currentStep);

  const currentStepNumber =
    currentStepIndex + 1;

  const handleServiceChange = (
    serviceType: ContactServiceType,
  ) => {
    const previousService =
      getValues('serviceType');

    if (previousService !== serviceType) {
      setValue(
        'serviceDetails',
        {},
      );

      setDetailQuestionIndex(0);
    }

    setValue(
      'serviceType',
      serviceType,
    );
  };

  const handleDetailChange = (
    field: ServiceDetailField,
    value: ServiceDetailValue,
  ) => {
    const currentDetails =
      getValues('serviceDetails');

    setValue(
      'serviceDetails',
      {
        ...currentDetails,
        [field]: value,
      },
    );
  };

  const goToNextWizardStep = () => {
    const nextStep =
      wizardSteps[currentStepIndex + 1];

    if (nextStep) {
      setCurrentStep(nextStep);
    }
  };

  const goToPreviousWizardStep = () => {
    const previousStep =
      wizardSteps[currentStepIndex - 1];

    if (previousStep) {
      setCurrentStep(previousStep);
    }
  };

  const handleNext = () => {
    if (
      currentStep !== 'serviceDetails'
    ) {
      goToNextWizardStep();
      return;
    }

    const serviceType =
      getValues('serviceType');

    if (!serviceType) {
      return;
    }

    const questions =
      serviceDetailQuestions[serviceType];

    const isLastQuestion =
      detailQuestionIndex ===
      questions.length - 1;

    if (isLastQuestion) {
      goToNextWizardStep();
      return;
    }

    setDetailQuestionIndex(
      detailQuestionIndex + 1,
    );
  };

  const handleBack = () => {
    if (
      currentStep === 'serviceDetails' &&
      detailQuestionIndex > 0
    ) {
      setDetailQuestionIndex(
        detailQuestionIndex - 1,
      );

      return;
    }

    goToPreviousWizardStep();
  };

  const isCurrentDetailValid = () => {
    if (
      currentStep !== 'serviceDetails'
    ) {
      return true;
    }

    const serviceType =
      formValues.serviceType;

    if (!serviceType) {
      return false;
    }

    const question =
      serviceDetailQuestions[
        serviceType
      ][detailQuestionIndex];

    if (question.optional) {
      return true;
    }

    const value =
      formValues.serviceDetails[
        question.field
      ];

    if (Array.isArray(value)) {
      return value.length > 0;
    }

    return Boolean(value);
  };

  const isNextDisabled = () => {
    switch (currentStep) {
      case 'service':
        return !formValues.serviceType;

      case 'serviceDetails':
        return !isCurrentDetailValid();

      case 'location':
        return (
          formValues.cityDistrict
            .trim()
            .length < 3
        );

      case 'date':
        return false;

      case 'contact':
        return (
          formValues.fullName
            .trim()
            .length < 3 ||
          formValues.phone
            .replace(/\s/g, '')
            .length < 10
        );

      case 'description':
        return (
          formValues.message
            .trim()
            .length < 10
        );

      case 'summary':
        return !formValues.kvkkApproved;

      default:
        return true;
    }
  };

  const handleKvkkChange = (
    approved: boolean,
  ) => {
    setValue(
      'kvkkApproved',
      approved,
    );
  };

  const onSubmit = async (
    data: ContactFormData,
  ) => {
    const response =
      await createContactRequest(data);

    if (!response.success) {
      return;
    }

    // Success ekranını bir sonraki aşamada
    // ayrı component olarak ekleyeceğiz.
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 'service':
        return (
          <ServiceSelectionStep
            value={formValues.serviceType}
            onChange={handleServiceChange}
          />
        );

      case 'serviceDetails':
        if (!formValues.serviceType) {
          return null;
        }

        return (
          <ServiceDetailsStep
            serviceType={
              formValues.serviceType
            }
            questionIndex={
              detailQuestionIndex
            }
            values={
              formValues.serviceDetails
            }
            onChange={
              handleDetailChange
            }
          />
        );

      case 'location':
        return (
          <LocationStep
            register={register}
          />
        );

      case 'date':
        return (
          <DateStep
            register={register}
          />
        );

      case 'contact':
        return (
          <ContactInfoStep
            register={register}
          />
        );

      case 'description':
        return (
          <DescriptionStep
            register={register}
          />
        );

      case 'summary':
        return (
          <SummaryStep
            values={formValues}
            onKvkkChange={
              handleKvkkChange
            }
          />
        );

      default:
        return null;
    }
  };

  const isSummaryStep =
    currentStep === 'summary';

  const progressLabel =
    currentStep === 'serviceDetails'
      ? 'Hizmet Detayları'
      : 'Teklif Talebi';

  return (
    <WizardCard>
      <WizardHeader>
        <WizardLabel>
          <Sparkles
            size={14}
            aria-hidden="true"
          />

          Ücretsiz Teklif
        </WizardLabel>

        <WizardTitle>
          Size özel temizlik planını
          oluşturalım.
        </WizardTitle>

        <WizardDescription>
          Birkaç kısa soruyu cevaplayın.
          İhtiyacınıza uygun hizmet planı ve
          teklif için sizinle iletişime
          geçelim.
        </WizardDescription>
      </WizardHeader>

      <WizardProgress
        label={progressLabel}
        currentStep={currentStepNumber}
        totalSteps={wizardSteps.length}
      />

      {renderCurrentStep()}

      {isSummaryStep ? (
        <WizardNavigation
          showBack
          nextDisabled={
            isSubmitting ||
            !formValues.kvkkApproved
          }
          nextLabel={
            isSubmitting
              ? 'Gönderiliyor...'
              : 'Teklif Talebini Gönder'
          }
          onBack={handleBack}
          onNext={
            handleSubmit(onSubmit)
          }
        />
      ) : (
        <WizardNavigation
          showBack={
            currentStep !== 'service'
          }
          nextDisabled={
            isNextDisabled()
          }
          onBack={handleBack}
          onNext={handleNext}
        />
      )}
    </WizardCard>
  );
}

export default ContactWizard;