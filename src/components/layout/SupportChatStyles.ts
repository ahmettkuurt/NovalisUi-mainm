import styled, { css } from 'styled-components';

type MessageRole = 'assistant' | 'user';

const messageRoleStyles = {
  assistant: css`
    border: 1px solid ${({ theme }) => theme.colors.borderSoft};
    border-bottom-left-radius: 5px;
    background: ${({ theme }) => theme.colors.cardBackground};
    color: ${({ theme }) => theme.colors.textPrimary};
  `,
  user: css`
    border-bottom-right-radius: 5px;
    background: ${({ theme }) => theme.colors.primaryDark};
    color: ${({ theme }) => theme.colors.textWhite};
  `,
};

export const ChatShell = styled.div`
  position: relative;
  z-index: 1100;
`;

export const ChatButton = styled.button<{ $isOpen: boolean }>`
  position: fixed;
  right: 18px;
  bottom: 78px;
  z-index: 1101;
  display: inline-flex;
  min-width: 150px;
  height: 48px;
  padding: 0 16px;
  border: 1px solid rgba(255, 255, 255, 0.86);
  border-radius: ${({ theme }) => theme.borderRadius.rounded};
  background: ${({ theme, $isOpen }) =>
    $isOpen ? theme.colors.primaryDark : theme.colors.primary};
  box-shadow: 0 12px 28px rgba(24, 63, 73, 0.2);
  color: ${({ theme }) => theme.colors.textWhite};
  align-items: center;
  justify-content: center;
  gap: 8px;
  font: inherit;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.01em;
  cursor: pointer;
  transition:
    transform 180ms ease,
    box-shadow 180ms ease,
    background-color 180ms ease;

  &:hover {
    box-shadow: 0 16px 34px rgba(24, 63, 73, 0.26);
    transform: translateY(-2px);
  }

  &:active {
    transform: scale(0.97);
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.secondaryLight};
    outline-offset: 3px;
  }

  @media (max-width: 560px) {
    right: 13px;
    bottom: 67px;
    min-width: 48px;
    width: 48px;
    height: 48px;
    padding: 0;
  }
`;

export const ChatButtonLabel = styled.span`
  @media (max-width: 560px) {
    display: none;
  }
`;

export const ChatPanel = styled.section<{ $isOpen: boolean }>`
  position: fixed;
  right: 18px;
  bottom: 138px;
  z-index: 1100;
  display: flex;
  width: min(390px, calc(100vw - 36px));
  height: min(590px, calc(100vh - 170px));
  min-height: 460px;
  padding: 0;
  border: 1px solid rgba(255, 255, 255, 0.76);
  border-radius: 22px;
  background: ${({ theme }) => theme.colors.backgroundSoft};
  box-shadow: 0 24px 70px rgba(24, 63, 73, 0.24);
  flex-direction: column;
  overflow: hidden;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  pointer-events: ${({ $isOpen }) => ($isOpen ? 'auto' : 'none')};
  transform: ${({ $isOpen }) =>
    $isOpen ? 'translateY(0) scale(1)' : 'translateY(14px) scale(0.97)'};
  transform-origin: bottom right;
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  transition:
    opacity 180ms ease,
    transform 220ms cubic-bezier(0.23, 1, 0.32, 1),
    visibility 180ms ease;

  @media (max-width: 560px) {
    right: 13px;
    bottom: 122px;
    width: calc(100vw - 26px);
    height: min(620px, calc(100vh - 148px));
    min-height: 430px;
    border-radius: 18px;
    transform-origin: bottom right;
  }
`;

export const ChatHeader = styled.header`
  display: flex;
  padding: 16px 16px 13px;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primaryDark}, ${({ theme }) => theme.colors.primary});
  color: ${({ theme }) => theme.colors.textWhite};
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
`;

export const ChatHeaderIdentity = styled.div`
  display: flex;
  min-width: 0;
  align-items: center;
  gap: 10px;
`;

export const SupportBadge = styled.div`
  display: inline-flex;
  width: 37px;
  height: 37px;
  border: 1px solid rgba(255, 255, 255, 0.26);
  border-radius: 13px;
  background: rgba(255, 255, 255, 0.14);
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const ChatTitle = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.colors.textWhite};
  font-size: 14px;
  font-weight: 760;
  letter-spacing: -0.01em;
`;

export const ChatHeaderStatus = styled.span`
  display: inline-flex;
  margin-top: 4px;
  color: rgba(255, 255, 255, 0.74);
  align-items: center;
  gap: 6px;
  font-size: 10.5px;
  font-weight: 500;
`;

export const ChatStatusDot = styled.span`
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #a8df9d;
  box-shadow: 0 0 0 3px rgba(168, 223, 157, 0.16);
`;

export const CloseButton = styled.button`
  display: inline-flex;
  width: 31px;
  height: 31px;
  padding: 0;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  color: ${({ theme }) => theme.colors.textWhite};
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition:
    background-color 160ms ease,
    transform 160ms ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: rotate(4deg);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.secondaryLight};
    outline-offset: 2px;
  }
`;

export const ChatSubtitle = styled.p`
  margin: 0;
  padding: 13px 16px 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderSoft};
  background: ${({ theme }) => theme.colors.cardBackground};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 11px;
  line-height: 1.55;
`;

export const ChatMessages = styled.div`
  display: flex;
  min-height: 0;
  padding: 14px 13px 10px;
  flex: 1;
  flex-direction: column;
  gap: 10px;
  overflow-y: auto;
  scroll-behavior: smooth;
  scrollbar-color: ${({ theme }) => theme.colors.secondaryLight} transparent;
  scrollbar-width: thin;
`;

export const EmptyState = styled.p`
  margin: auto;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 12px;
  text-align: center;
`;

export const MessageRow = styled.div<{ $role: MessageRole }>`
  display: flex;
  justify-content: ${({ $role }) =>
    $role === 'user' ? 'flex-end' : 'flex-start'};
`;

export const MessageBubble = styled.div<{ $role: MessageRole }>`
  max-width: 86%;
  padding: 10px 11px 7px;
  border-radius: 14px;
  font-size: 12px;
  line-height: 1.55;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
  ${({ $role }) => messageRoleStyles[$role]}

  .typing-dot {
    display: inline-block;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 16px;
    line-height: 0.5;
    animation: support-chat-pulse 1.1s ease-in-out infinite;
  }

  .typing-dot:nth-child(2) {
    animation-delay: 120ms;
  }

  .typing-dot:nth-child(3) {
    animation-delay: 240ms;
  }

  @keyframes support-chat-pulse {
    0%,
    70%,
    100% {
      opacity: 0.35;
      transform: translateY(0);
    }
    35% {
      opacity: 1;
      transform: translateY(-2px);
    }
  }
`;

export const MessageTime = styled.span<{ $role: MessageRole }>`
  display: block;
  margin-top: 5px;
  color: ${({ theme, $role }) =>
    $role === 'user'
      ? 'rgba(255, 255, 255, 0.62)'
      : theme.colors.textMuted};
  font-size: 9px;
  line-height: 1;
  text-align: right;
`;

export const QuickContactRow = styled.div`
  display: flex;
  margin: 0 13px 10px;
  padding: 9px 10px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.accentSoft};
  color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  gap: 8px;
`;

export const QuickContactText = styled.div`
  display: flex;
  min-width: 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  flex: 1;
  flex-direction: column;
  gap: 2px;
  font-size: 9.5px;
  line-height: 1.3;
`;

export const QuickContactTitle = styled.strong`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 10.5px;
`;

export const QuickContactLink = styled.a`
  color: ${({ theme }) => theme.colors.primaryDark};
  font-size: 10.5px;
  font-weight: 750;
  white-space: nowrap;
  text-decoration: underline;
  text-underline-offset: 2px;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;

export const SupportForm = styled.form`
  display: flex;
  margin: 0 13px;
  padding: 5px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 14px;
  background: ${({ theme }) => theme.colors.cardBackground};
  align-items: flex-end;
  gap: 6px;
`;

export const ChatInput = styled.textarea`
  width: 100%;
  min-height: 34px;
  max-height: 88px;
  padding: 8px 8px 7px;
  border: 0;
  outline: 0;
  resize: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.textPrimary};
  font: inherit;
  font-size: 12px;
  line-height: 1.4;

  &::placeholder {
    color: ${({ theme }) => theme.colors.textMuted};
  }

  &:disabled {
    cursor: wait;
    opacity: 0.65;
  }
`;

export const ChatSubmitButton = styled.button`
  display: inline-flex;
  width: 34px;
  height: 34px;
  padding: 0;
  border: 0;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textWhite};
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  cursor: pointer;
  transition:
    background-color 160ms ease,
    transform 160ms ease,
    opacity 160ms ease;

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.primaryDark};
    transform: translateY(-1px);
  }

  &:active:not(:disabled) {
    transform: scale(0.96);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.38;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;

export const SupportFormHint = styled.p`
  margin: 6px 15px 10px;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 9.5px;
  line-height: 1.35;
  text-align: center;
`;
