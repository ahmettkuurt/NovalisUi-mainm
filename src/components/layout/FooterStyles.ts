import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 22px 0 12px;
  background: ${({ theme }) => theme.colors.primaryDark};
  color: ${({ theme }) => theme.colors.textWhite};
`;

export const FooterContent = styled.div`
  width: min(calc(100% - 40px), 1100px);
  margin: 0 auto;

  @media (max-width: 600px) {
    width: calc(100% - 28px);
  }
`;

export const FooterMain = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 36px;

  @media (max-width: 900px) {
    grid-template-columns: auto 1fr;
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
    gap: 18px;
  }
`;

export const FooterLogoLink = styled.a`
  display: inline-flex;
  width: fit-content;
  align-items: center;
`;

export const FooterLogo = styled.img`
  display: block;
  width: 112px;
  height: 42px;
  object-fit: contain;

  @media (max-width: 480px) {
    width: 102px;
    height: 38px;
  }
`;

export const FooterNavigation = styled.nav`
  display: flex;
  justify-content: center;

  @media (max-width: 900px) {
    justify-content: flex-end;
  }

  @media (max-width: 680px) {
    justify-content: flex-start;
  }
`;

export const FooterNavigationList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 18px;

  @media (max-width: 680px) {
    justify-content: flex-start;
    gap: 10px 16px;
  }
`;

export const FooterNavigationLink = styled.a`
  color: rgba(255, 255, 255, 0.68);
  font-size: 12.5px;
  font-weight: 500;
  white-space: nowrap;
  transition: color 180ms ease;

  &:hover {
    color: ${({ theme }) => theme.colors.textWhite};
  }
`;

export const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;

  @media (max-width: 900px) {
    grid-column: 1 / -1;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 8px 20px;
  }

  @media (max-width: 680px) {
    grid-column: auto;
    flex-direction: column;
  }
`;

export const ContactLink = styled.a`
  display: inline-flex;
  color: rgba(255, 255, 255, 0.62);
  align-items: center;
  gap: 7px;
  font-size: 12px;
  line-height: 1.4;
  transition: color 180ms ease;

  svg {
    flex-shrink: 0;
    color: ${({ theme }) => theme.colors.secondary};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.textWhite};
  }
`;

export const FooterDivider = styled.div`
  width: 100%;
  height: 1px;
  margin: 16px 0 10px;
  background-color: rgba(255, 255, 255, 0.08);
`;

export const FooterBottom = styled.div`
  display: flex;
  color: rgba(255, 255, 255, 0.4);
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  font-size: 10.5px;

  @media (max-width: 560px) {
    align-items: flex-start;
    flex-direction: column;
    gap: 7px;
  }
`;

export const LegalLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  span {
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: 12px;
  }
`;

export const WhatsAppButton = styled.a`
  position: fixed;
  right: 18px;
  bottom: 20px;
  z-index: 900;
  display: inline-flex;
  width: 54px;
  height: 54px;
  border: 1px solid rgba(255, 255, 255, 0.85);
  border-radius: 18px;
  background: linear-gradient(135deg, #21c45d 0%, #25d366 100%);
  box-shadow: 0 16px 30px rgba(37, 211, 102, 0.28);
  color: #ffffff;
  align-items: center;
  justify-content: center;
  transition:
    transform 180ms ease,
    box-shadow 180ms ease;

  &:hover {
    box-shadow: 0 20px 36px rgba(37, 211, 102, 0.32);
    transform: translateY(-2px);
  }

  @media (max-width: 480px) {
    right: 14px;
    bottom: 14px;
    width: 48px;
    height: 48px;
    border-radius: 16px;
  }
`;
export const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const SocialLink = styled.a`
  display: inline-flex;
  width: 38px;
  height: 38px;
  align-items: center;
  justify-content: center;

  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 10px;

  color: ${({ theme }) => theme.colors.textWhite};
  background: rgba(255, 255, 255, 0.06);

  transition:
    transform 0.2s ease,
    background-color 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(255, 255, 255, 0.3);
    background: rgba(255, 255, 255, 0.12);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primaryLight};
    outline-offset: 3px;
  }
`;
export const FooterBottomActions = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 560px) {
    width: 100%;
    justify-content: space-between;
  }
`;