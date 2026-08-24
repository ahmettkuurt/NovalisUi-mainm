import styled, { css, keyframes } from 'styled-components';

interface ValidationStyleProps {
  $hasError?: boolean;
}

interface StatusMessageProps {
  $status: 'success' | 'error';
}

interface ContactActionProps {
  $variant: 'primary' | 'secondary';
}

interface ServiceOptionButtonProps {
  $isSelected: boolean;
}

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
`;

const fadeLeft = keyframes`
  from { opacity: 0; transform: translateX(-28px); }
  to { opacity: 1; transform: translateX(0); }
`;

const fadeRight = keyframes`
  from { opacity: 0; transform: translateX(28px); }
  to { opacity: 1; transform: translateX(0); }
`;

const scaleIn = keyframes`
  from { opacity: 0; transform: scale(0.97); }
  to { opacity: 1; transform: scale(1); }
`;

const reducedMotion = css`
  @media (prefers-reduced-motion: reduce) {
    animation: none;
    transition-duration: 0.01ms;
  }
`;

const fieldBaseStyles = css<ValidationStyleProps>`
  width: 100%;
  border: 1px solid
    ${({ theme, $hasError }) =>
      $hasError ? theme.colors.error : theme.colors.border};
  border-radius: 12px;
  outline: none;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.textPrimary};
  font: inherit;
  font-size: 14px;
  transition: 200ms ease;

  &::placeholder {
    color: ${({ theme }) => theme.colors.textMuted};
  }

  &:hover {
    border-color: ${({ theme, $hasError }) =>
      $hasError ? theme.colors.error : theme.colors.secondary};
  }

  &:focus {
    border-color: ${({ theme, $hasError }) =>
      $hasError ? theme.colors.error : theme.colors.primary};
    box-shadow: ${({ $hasError }) =>
      $hasError
        ? '0 0 0 4px rgba(199, 84, 84, 0.12)'
        : '0 0 0 4px rgba(73, 170, 183, 0.12)'};
    transform: translateY(-1px);
  }
`;

export const ContactPageContainer = styled.main`
  position: relative;
  width: min(calc(100% - 48px), 1180px);
  margin: 0 auto;
  padding: 64px 0 84px;

  @media (max-width: 768px) {
    width: calc(100% - 32px);
    padding: 48px 0 64px;
  }

  @media (max-width: 480px) {
    width: calc(100% - 24px);
    padding: 38px 0 50px;
  }
`;

export const PageHeader = styled.header`
  max-width: 780px;
  margin-bottom: 42px;
  animation: ${fadeUp} 700ms ease both;
  ${reducedMotion}
`;

export const PageLabel = styled.span`
  display: inline-flex;
  width: fit-content;
  margin-bottom: 14px;
  padding: 7px 12px;
  border: 1px solid rgba(73, 170, 183, 0.24);
  border-radius: 999px;
  background: rgba(73, 170, 183, 0.08);
  color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  gap: 7px;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1.4px;
  text-transform: uppercase;
`;

export const PageTitle = styled.h1`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: clamp(36px, 4.5vw, 56px);
  font-weight: 700;
  letter-spacing: -1.8px;
  line-height: 1.08;

  span { color: ${({ theme }) => theme.colors.primaryLight}; }
`;

export const PageDescription = styled.p`
  max-width: 680px;
  margin-top: 18px;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 16px;
  line-height: 1.75;
`;

export const ContactGrid = styled.div`
  display: grid;
  align-items: start;
  grid-template-columns: minmax(300px, 0.78fr) minmax(0, 1.22fr);
  gap: 30px;

  @media (max-width: 940px) {
    grid-template-columns: 1fr;
  }
`;

export const ContactDetails = styled.aside`
  animation: ${fadeLeft} 750ms ease 180ms both;
  ${reducedMotion}

  @media (min-width: 941px) {
    position: sticky;
    top: 108px;
  }

  @media (max-width: 940px) {
    order: 2;
  }
`;

export const ContactPanel = styled.div`
  display: grid;
  padding: 28px;
  border: 1px solid rgba(73, 170, 183, 0.2);
  border-radius: 24px;
  background:
    radial-gradient(circle at top right, rgba(73, 170, 183, 0.16), transparent 35%),
    linear-gradient(150deg,
      ${({ theme }) => theme.colors.backgroundSoft},
      ${({ theme }) => theme.colors.background});
  box-shadow: 0 24px 65px rgba(15, 61, 70, 0.1);
  gap: 14px;
`;

export const ContactPanelHeader = styled.div`
  margin-bottom: 8px;
`;

export const ContactPanelTitle = styled.h2`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 25px;
  font-weight: 750;
  letter-spacing: -0.6px;
  line-height: 1.22;
`;

export const ContactPanelDescription = styled.p`
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 13px;
  line-height: 1.65;
`;

export const ContactAction = styled.a<ContactActionProps>`
  display: flex;
  min-height: 76px;
  padding: 14px 16px;
  border: 1px solid
    ${({ theme, $variant }) =>
      $variant === 'primary' ? theme.colors.primary : theme.colors.border};
  border-radius: 16px;
  background: ${({ theme, $variant }) =>
    $variant === 'primary'
      ? `linear-gradient(135deg, ${theme.colors.primaryDark}, ${theme.colors.primary})`
      : theme.colors.background};
  box-shadow: ${({ $variant }) =>
    $variant === 'primary'
      ? '0 16px 34px rgba(23, 80, 95, 0.2)'
      : '0 10px 26px rgba(15, 61, 70, 0.05)'};
  color: ${({ theme, $variant }) =>
    $variant === 'primary' ? theme.colors.textWhite : theme.colors.textPrimary};
  align-items: center;
  gap: 12px;
  transition: 220ms ease;

  > svg:last-child {
    margin-left: auto;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 44px rgba(23, 80, 95, 0.2);
  }
`;

export const ContactActionIcon = styled.div`
  display: inline-flex;
  width: 44px;
  height: 44px;
  flex-shrink: 0;
  border-radius: 13px;
  background: rgba(73, 170, 183, 0.12);
  align-items: center;
  justify-content: center;
`;

export const ContactActionContent = styled.div`min-width: 0;`;
export const ContactActionTitle = styled.span`
  display: block;
  font-size: 14px;
  font-weight: 800;
`;
export const ContactActionText = styled.span`
  display: block;
  margin-top: 3px;
  opacity: 0.78;
  font-size: 11px;
`;

export const ResponseBadge = styled.div`
  display: flex;
  padding: 15px;
  border: 1px solid rgba(73, 170, 183, 0.18);
  border-radius: 14px;
  background: rgba(73, 170, 183, 0.07);
  color: ${({ theme }) => theme.colors.primary};
  align-items: flex-start;
  gap: 10px;
`;
export const ResponseBadgeContent = styled.div`min-width: 0;`;
export const ResponseBadgeTitle = styled.span`
  display: block;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 12px;
  font-weight: 800;
`;
export const ResponseBadgeText = styled.span`
  display: block;
  margin-top: 3px;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 11px;
  line-height: 1.5;
`;

export const ContactProcess = styled.div`
  display: grid;
  margin-top: 8px;
  padding-top: 20px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  gap: 16px;
`;
export const ContactProcessItem = styled.div`
  display: grid;
  grid-template-columns: 34px minmax(0, 1fr);
  gap: 11px;
`;
export const ContactProcessNumber = styled.span`
  display: inline-flex;
  width: 32px;
  height: 32px;
  border-radius: 10px;
  background: rgba(73, 170, 183, 0.1);
  color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 900;
`;
export const InfoTitle = styled.h2`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 14px;
  font-weight: 700;
`;
export const InfoDescription = styled.p`
  margin-top: 6px;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 12px;
  line-height: 1.55;
`;

export const FormCard = styled.section`
  padding: 34px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 24px;
  background: ${({ theme }) => theme.colors.background};
  box-shadow: 0 24px 70px rgba(15, 61, 70, 0.09);
  animation: ${fadeRight} 800ms ease 220ms both;
  ${reducedMotion}

  @media (max-width: 940px) { order: 1; }
  @media (max-width: 600px) { padding: 24px 18px; }
`;

export const FormHeader = styled.div`
  margin-bottom: 28px;
  padding-bottom: 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;
export const FormTitle = styled.h2`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 28px;
  font-weight: 700;
`;
export const FormDescription = styled.p`
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 14px;
  line-height: 1.65;
`;
export const Form = styled.form`
  display: grid;
  gap: 26px;
`;
export const FormSection = styled.section`
  display: grid;
  gap: 19px;

  & + & {
    padding-top: 25px;
    border-top: 1px solid ${({ theme }) => theme.colors.border};
  }
`;
export const FormSectionHeader = styled.div`
  display: grid;
  gap: 5px;
`;
export const FormSectionTitle = styled.h3`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 16px;
  font-weight: 700;
`;
export const FormSectionDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 12px;
`;
export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;
export const FieldGroup = styled.div`
  display: flex;
  min-width: 0;
  flex-direction: column;
`;
export const FieldLabel = styled.label`
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 13px;
  font-weight: 700;
`;
export const RequiredMark = styled.span`
  margin-left: 3px;
  color: ${({ theme }) => theme.colors.error};
`;
export const OptionalMark = styled.span`
  margin-left: 8px;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 10px;
  font-weight: 500;
`;
export const Input = styled.input<ValidationStyleProps>`
  height: 49px;
  padding: 0 15px;
  ${fieldBaseStyles}
`;
export const Textarea = styled.textarea<ValidationStyleProps>`
  min-height: 140px;
  padding: 14px 15px;
  resize: vertical;
  line-height: 1.6;
  ${fieldBaseStyles}
`;
export const ServiceOptions = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;
export const ServiceOptionButton = styled.button<ServiceOptionButtonProps>`
  display: flex;
  min-height: 50px;
  padding: 10px 14px;
  border: 1px solid ${({ theme, $isSelected }) =>
    $isSelected ? theme.colors.primary : theme.colors.border};
  border-radius: 12px;
  background: ${({ $isSelected }) =>
    $isSelected ? 'rgba(73, 170, 183, 0.1)' : 'rgba(255,255,255,0.82)'};
  color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.colors.primary : theme.colors.textPrimary};
  cursor: pointer;
  align-items: center;
  gap: 9px;
  font: inherit;
  font-size: 13px;
  font-weight: 700;
  text-align: left;
  transition: 200ms ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-2px);
  }
`;
export const FieldHint = styled.span`
  margin-top: 7px;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 11px;
`;
export const ErrorMessage = styled.span`
  margin-top: 7px;
  color: ${({ theme }) => theme.colors.error};
  font-size: 12px;
`;
export const CheckboxContainer = styled.div<ValidationStyleProps>`
  display: flex;
  padding: 15px;
  border: 1px solid ${({ theme, $hasError }) =>
    $hasError ? theme.colors.error : theme.colors.border};
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.backgroundSoft};
  align-items: flex-start;
  gap: 11px;
`;
export const Checkbox = styled.input`
  width: 18px;
  height: 18px;
  margin-top: 2px;
  accent-color: ${({ theme }) => theme.colors.primary};
`;
export const CheckboxLabel = styled.label`
  color: ${({ theme }) => theme.colors.textSecondary};
  cursor: pointer;
  font-size: 12px;
  line-height: 1.55;
`;
export const StatusMessage = styled.div<StatusMessageProps>`
  display: flex;
  padding: 15px 16px;
  border: 1px solid ${({ theme, $status }) =>
    $status === 'success' ? theme.colors.success : theme.colors.error};
  border-radius: 12px;
  color: ${({ theme, $status }) =>
    $status === 'success' ? theme.colors.success : theme.colors.error};
  gap: 9px;
  font-size: 13px;
  animation: ${scaleIn} 300ms ease both;
`;
export const SubmitButton = styled.button`
  position: relative;
  display: inline-flex;
  width: 100%;
  min-height: 56px;
  padding: 0 25px;
  border: 0;
  border-radius: 14px;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primaryDark},
    ${({ theme }) => theme.colors.primary}
  );
  box-shadow: 0 14px 34px rgba(23, 80, 95, 0.22);
  color: ${({ theme }) => theme.colors.textWhite};
  cursor: pointer;
  align-items: center;
  justify-content: center;
  gap: 9px;
  font-size: 14px;
  font-weight: 800;
  transition: 220ms ease;

  &:hover:not(:disabled) {
    box-shadow: 0 20px 46px rgba(23, 80, 95, 0.32);
    transform: translateY(-3px);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.65;
  }
`;
export const FormTrustList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px 18px;
`;
export const FormTrustItem = styled.span`
  display: inline-flex;
  color: ${({ theme }) => theme.colors.textMuted};
  align-items: center;
  gap: 6px;
  font-size: 11px;

  svg { color: ${({ theme }) => theme.colors.primary}; }
`;