import styled from 'styled-components';
export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const FieldLabel = styled.label`
  color: #214f5d;
  font-size: 14px;
  font-weight: 700;
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const Input = styled.input`
  width: 100%;
  min-height: 52px;
  padding: 0 15px;
  border: 1px solid #dce9e9;
  border-radius: 14px;
  background-color: #ffffff;
  color: #214f5d;
  font: inherit;
  outline: none;
  transition:
    border-color 180ms ease,
    box-shadow 180ms ease,
    background-color 180ms ease;

  &::placeholder {
    color: #89a1a7;
  }

  &:hover {
    border-color: #c5dddd;
  }

  &:focus {
    border-color: #4f9eab;
    box-shadow: 0 0 0 3px rgb(79 158 171 / 12%);
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  min-height: 150px;
  padding: 15px;
  resize: vertical;
  border: 1px solid #dce9e9;
  border-radius: 14px;
  background-color: #ffffff;
  color: #214f5d;
  font: inherit;
  line-height: 1.6;
  outline: none;
  transition:
    border-color 180ms ease,
    box-shadow 180ms ease;

  &::placeholder {
    color: #89a1a7;
  }

  &:focus {
    border-color: #4f9eab;
    box-shadow: 0 0 0 3px rgb(79 158 171 / 12%);
  }
`;
export const WizardCard = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 40px;
  border: 1px solid #dce9e9;
  border-radius: 30px;
  background:
    radial-gradient(
      circle at top right,
      rgb(140 201 205 / 16%),
      transparent 34%
    ),
    #ffffff;
  box-shadow:
    0 30px 70px rgb(33 79 93 / 8%),
    0 8px 24px rgb(33 79 93 / 5%);

  @media (max-width: 768px) {
    padding: 24px 18px;
    border-radius: 22px;
  }
`;

export const WizardHeader = styled.header`
  max-width: 690px;
  margin-bottom: 32px;
`;

export const WizardLabel = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 14px;
  padding: 7px 11px;
  border: 1px solid rgb(79 158 171 / 16%);
  border-radius: 999px;
  background-color: rgb(79 158 171 / 7%);
  color: #2f7484;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
`;

export const WizardTitle = styled.h2`
  margin: 0;
  color: #214f5d;
  font-size: clamp(30px, 4vw, 46px);
  font-weight: 700;
  line-height: 1.08;
  letter-spacing: -0.025em;

  span {
    color: #4f9eab;
  }
`;

export const WizardDescription = styled.p`
  max-width: 640px;
  margin: 16px 0 0;
  color: #5d7f88;
  font-size: 15px;
  line-height: 1.75;
`;

export const ProgressWrapper = styled.div`
  margin-bottom: 34px;
`;

export const ProgressTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 14px;
`;

export const ProgressLabel = styled.span`
  color: #214f5d;
  font-size: 13px;
  font-weight: 700;
`;

export const ProgressCount = styled.span`
  color: #89a1a7;
  font-size: 12px;
  font-weight: 600;
`;

export const StepIndicator = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 7px;
`;

interface StepBarProps {
  $active: boolean;
}

export const StepBar = styled.span<StepBarProps>`
  height: 5px;
  border-radius: 999px;
  background-color: ${({ $active }) =>
    $active ? '#4f9eab' : '#e5efef'};
  transition: background-color 220ms ease;
`;

export const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

interface ServiceCardButtonProps {
  $selected: boolean;
}

export const ServiceCardButton = styled.button<ServiceCardButtonProps>`
  position: relative;
  min-height: 270px;
  padding: 0;
  overflow: hidden;
  border: 1px solid
    ${({ $selected }) =>
      $selected ? '#4f9eab' : '#dce9e9'};
  border-radius: 22px;
  background-color: #ffffff;
  cursor: pointer;
  text-align: left;
  box-shadow: ${({ $selected }) =>
    $selected
      ? '0 18px 36px rgb(79 158 171 / 18%)'
      : '0 10px 25px rgb(33 79 93 / 5%)'};
  transform: ${({ $selected }) =>
    $selected ? 'translateY(-2px)' : 'none'};
  transition:
    transform 200ms ease,
    border-color 200ms ease,
    box-shadow 200ms ease;

  &:hover {
    transform: translateY(-5px);
    border-color: #8cc9cd;
    box-shadow: 0 20px 42px rgb(33 79 93 / 13%);
  }

  &:focus-visible {
    outline: 3px solid rgb(79 158 171 / 20%);
    outline-offset: 4px;
  }
`;

export const ServiceImageWrapper = styled.div`
  position: relative;
  height: 155px;
  overflow: hidden;
`;

export const ServiceImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 350ms ease;

  ${ServiceCardButton}:hover & {
    transform: scale(1.04);
  }
`;

export const ServiceImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    transparent 42%,
    rgb(19 58 68 / 62%) 100%
  );
`;

export const ServiceBadge = styled.span`
  position: absolute;
  top: 14px;
  left: 14px;
  display: inline-flex;
  align-items: center;
  padding: 6px 9px;
  border-radius: 999px;
  background-color: rgb(255 255 255 / 88%);
  backdrop-filter: blur(8px);
  color: #2f7484;
  font-size: 11px;
  font-weight: 700;
`;

export const ServiceSelectedBadge = styled.span`
  position: absolute;
  top: 14px;
  right: 14px;
  z-index: 2;
  display: flex;
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #4f9eab;
  color: #ffffff;
  box-shadow: 0 8px 18px rgb(33 79 93 / 22%);
`;

export const ServiceContent = styled.div`
  padding: 20px;
`;

export const ServiceTitle = styled.strong`
  display: block;
  padding-right: 30px;
  color: #214f5d;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.35;
`;

export const ServiceDescription = styled.span`
  display: block;
  margin-top: 8px;
  color: #5d7f88;
  font-size: 13px;
  line-height: 1.6;
`;

export const ServiceFooter = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
  color: #4f9eab;
  font-size: 12px;
  font-weight: 700;
`;

export const QuestionHeader = styled.div`
  max-width: 680px;
  margin-bottom: 26px;
`;

export const QuestionEyebrow = styled.span`
  display: inline-block;
  margin-bottom: 8px;
  color: #4f9eab;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const QuestionTitle = styled.h3`
  margin: 0;
  color: #214f5d;
  font-size: clamp(25px, 3vw, 34px);
  font-weight: 700;
  line-height: 1.2;
`;

export const QuestionDescription = styled.p`
  max-width: 600px;
  margin: 10px 0 0;
  color: #5d7f88;
  font-size: 14px;
  line-height: 1.7;
`;

interface OptionButtonProps {
  $selected: boolean;
}

export const OptionButton = styled.button<OptionButtonProps>`
  position: relative;
  min-height: 96px;
  padding: 20px;
  border: 1px solid
    ${({ $selected }) =>
      $selected ? '#4f9eab' : '#dce9e9'};
  border-radius: 18px;
  background-color: ${({ $selected }) =>
    $selected ? '#edf8f8' : '#ffffff'};
  color: #214f5d;
  cursor: pointer;
  font-size: 15px;
  font-weight: 700;
  transition:
    transform 180ms ease,
    border-color 180ms ease,
    background-color 180ms ease,
    box-shadow 180ms ease;

  &:hover {
    transform: translateY(-2px);
    border-color: #4f9eab;
    box-shadow: 0 12px 25px rgb(33 79 93 / 8%);
  }
`;

export const OptionCheck = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  width: 25px;
  height: 25px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #4f9eab;
  color: #ffffff;
`;

export const NavigationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  margin-top: 34px;
  padding-top: 24px;
  border-top: 1px solid #edf5f5;
`;

export const BackButton = styled.button`
  display: inline-flex;
  min-height: 50px;
  align-items: center;
  gap: 8px;
  padding: 0 18px;
  border: 1px solid #dce9e9;
  border-radius: 14px;
  background-color: #ffffff;
  color: #214f5d;
  cursor: pointer;
  font-weight: 700;
`;

export const NextButton = styled.button`
  display: inline-flex;
  min-height: 50px;
  align-items: center;
  gap: 8px;
  padding: 0 24px;
  border: 0;
  border-radius: 14px;
  background: linear-gradient(
    135deg,
    #4f9eab,
    #2f7484
  );
  color: #ffffff;
  cursor: pointer;
  font-weight: 700;
  box-shadow: 0 12px 26px rgb(79 158 171 / 22%);
  transition:
    transform 180ms ease,
    box-shadow 180ms ease,
    opacity 180ms ease;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 16px 30px rgb(79 158 171 / 28%);
  }

  &:disabled {
    cursor: not-allowed;
    box-shadow: none;
    opacity: 0.45;
  }
`;
interface SelectionButtonProps {
  $selected: boolean;
  $compact?: boolean;
}

export const SelectionButton = styled.button<SelectionButtonProps>`
  position: relative;
  display: flex;
  min-height: ${({ $compact }) =>
    $compact ? '84px' : '120px'};
  align-items: center;
  padding: 20px;
  border: 1px solid
    ${({ $selected }) =>
      $selected ? '#4f9eab' : '#dce9e9'};
  border-radius: 18px;
  background-color: ${({ $selected }) =>
    $selected ? '#edf8f8' : '#ffffff'};
  cursor: pointer;
  text-align: left;
  transition:
    transform 180ms ease,
    border-color 180ms ease,
    background-color 180ms ease,
    box-shadow 180ms ease;

  &:hover {
    transform: translateY(-2px);
    border-color: #4f9eab;
    box-shadow: 0 12px 26px rgb(33 79 93 / 8%);
  }

  &:focus-visible {
    outline: 3px solid rgb(79 158 171 / 18%);
    outline-offset: 3px;
  }
`;

export const SelectionContent = styled.span`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const SelectionTitle = styled.strong`
  color: #214f5d;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.35;
`;

export const SelectionDescription = styled.span`
  margin-top: 7px;
  color: #5d7f88;
  font-size: 13px;
  line-height: 1.55;
`;

export const SelectionCheck = styled.span`
  position: absolute;
  top: 12px;
  right: 12px;
  display: flex;
  width: 27px;
  height: 27px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #4f9eab;
  color: #ffffff;
`;
export const OptionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;

  @media (max-width: 720px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 460px) {
    grid-template-columns: 1fr;
  }
`;
export const SummaryList = styled.div`
  display: grid;
  gap: 12px;
`;

export const SummaryItem = styled.div`
  padding: 16px;
  border: 1px solid #dce9e9;
  border-radius: 14px;
  background-color: #f7fbfb;
`;

export const SummaryLabel = styled.span`
  display: block;
  margin-bottom: 5px;
  color: #89a1a7;
  font-size: 12px;
  font-weight: 700;
`;

export const SummaryValue = styled.strong`
  display: block;
  color: #214f5d;
  font-size: 14px;
  line-height: 1.5;
`;

export const CheckboxWrapper = styled.label`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-top: 20px;
  padding: 14px 16px;
  border: 1px solid #dce9e9;
  border-radius: 14px;
  background-color: #ffffff;
  color: #5d7f88;
  cursor: pointer;
  font-size: 13px;
  line-height: 1.55;

  input {
    width: 17px;
    height: 17px;
    flex: 0 0 auto;
    margin-top: 2px;
    accent-color: #4f9eab;
    cursor: pointer;
  }
`;