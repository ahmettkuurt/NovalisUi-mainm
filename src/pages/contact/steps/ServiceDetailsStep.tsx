import {
  serviceDetailQuestions,
} from '../../../services/contactOptions';

import type {
  ContactServiceType,
  ServiceDetails,
  ServiceDetailValue,
} from '../../../types/contact';

import SelectionCard from '../components/SelectionCard';

import {
  OptionGrid,
  QuestionDescription,
  QuestionHeader,
  QuestionTitle,
} from '../ContactWizardStyles';

interface ServiceDetailsStepProps {
  serviceType: ContactServiceType;
  questionIndex: number;
  values: ServiceDetails;
  onChange: (
    field: keyof ServiceDetails,
    value: ServiceDetailValue,
  ) => void;
}

function ServiceDetailsStep({
  serviceType,
  questionIndex,
  values,
  onChange,
}: ServiceDetailsStepProps) {
  const questions =
    serviceDetailQuestions[serviceType];

  const question =
    questions[questionIndex];

  if (!question) {
    return null;
  }

  const currentValue =
    values[question.field];

  const handleOptionChange = (
    optionValue: string,
  ) => {
    if (!question.multiple) {
      onChange(
        question.field,
        optionValue,
      );

      return;
    }

    const selectedValues =
      Array.isArray(currentValue)
        ? currentValue
        : [];

    const isSelected =
      selectedValues.includes(optionValue);

    const nextValues = isSelected
      ? selectedValues.filter(
          (value) => value !== optionValue,
        )
      : [...selectedValues, optionValue];

    onChange(
      question.field,
      nextValues,
    );
  };

  return (
    <>
      <QuestionHeader>
        <QuestionTitle>
          {question.title}
        </QuestionTitle>

        <QuestionDescription>
          {question.description}
        </QuestionDescription>
      </QuestionHeader>

      <OptionGrid>
        {question.options.map((option) => {
          const isSelected =
            Array.isArray(currentValue)
              ? currentValue.includes(option.value)
              : currentValue === option.value;

          const handleSelect = () => {
            handleOptionChange(option.value);
          };

          return (
            <SelectionCard
              key={option.value}
              title={option.label}
              selected={isSelected}
              compact
              onSelect={handleSelect}
            />
          );
        })}
      </OptionGrid>
    </>
  );
}

export default ServiceDetailsStep;