import styled from 'styled-components';

export const LegalDialog = styled.dialog`
  width: min(720px, calc(100vw - 32px));
  max-width: none;
  max-height: calc(100vh - 32px);
  max-height: calc(100dvh - 32px);
  margin: auto;
  padding: 0;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 24px;
  background: ${({ theme }) => theme.colors.cardBackground};
  color: ${({ theme }) => theme.colors.textPrimary};
  box-shadow: 0 28px 90px rgba(15, 59, 72, 0.3);
  overflow: hidden;

  &[open] { display: flex; flex-direction: column; }
  &::backdrop { cursor: auto; background: rgba(15, 38, 45, 0.58); backdrop-filter: blur(5px); }

  /* The site's custom cursor is below the browser's modal top layer. */
  &, & * { cursor: auto; }
  & button, & a { cursor: pointer; }
  & button svg { pointer-events: none; }

  @media (max-width: 560px) { border-radius: 18px; }
`;

export const LegalHeader = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  flex-shrink: 0;
  padding: 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.accentSoft};
  h2 { margin: 6px 0 0; font-size: clamp(20px, 4vw, 26px); line-height: 1.25; }
  span { color: ${({ theme }) => theme.colors.primary}; font-size: 12px; font-weight: 700; }
  @media (max-width: 560px) { padding: 20px 18px; }
`;

export const LegalCloseButton = styled.button`
  display: inline-flex;
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.cardBackground};
  color: ${({ theme }) => theme.colors.primaryDark};
  &:hover { background: ${({ theme }) => theme.colors.secondaryLight}; }
  &:focus-visible { outline: 2px solid ${({ theme }) => theme.colors.primary}; outline-offset: 3px; }
`;

export const LegalBody = styled.div`
  min-height: 0;
  padding: 24px;
  overflow-y: auto;
  overscroll-behavior: contain;
  scrollbar-width: thin;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 14px;
  line-height: 1.8;
  overflow-wrap: anywhere;
  p { margin: 0 0 16px; }
  section + section { margin-top: 24px; }
  h3 { margin: 0 0 8px; color: ${({ theme }) => theme.colors.textPrimary}; font-size: 16px; }
  &:focus-visible { outline: 2px solid ${({ theme }) => theme.colors.primary}; outline-offset: -4px; }
  @media (max-width: 560px) { padding: 20px 18px; font-size: 13px; }
`;

export const LegalContact = styled.p`
  padding-top: 20px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  a { color: ${({ theme }) => theme.colors.primaryDark}; text-decoration: underline; text-underline-offset: 3px; }
  a:focus-visible { outline: 2px solid ${({ theme }) => theme.colors.primary}; outline-offset: 3px; }
`;
