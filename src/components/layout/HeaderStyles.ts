import styled, {
  css,
  keyframes,
} from 'styled-components';

interface MobileMenuProps {
  $isOpen: boolean;
}

interface HeaderScrollProps {
  $isScrolled: boolean;
}

const headerEnter = keyframes`
  from {
    opacity: 0;
    transform: translateY(-18px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const menuEnter = keyframes`
  from {
    opacity: 0;
    transform: translateY(-14px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const overlayEnter = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const mobileLinkEnter = keyframes`
  from {
    opacity: 0;
    transform: translateX(-16px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const reducedMotion = css`
  @media (prefers-reduced-motion: reduce) {
    animation: none;
    transition-duration: 0.01ms;
  }
`;

export const HeaderContainer =
  styled.header<HeaderScrollProps>`
    position: sticky;
    top: 0;
    z-index: 1000;
    width: 100%;
    border-bottom: 1px solid
      ${({ $isScrolled }) =>
        $isScrolled
          ? 'rgba(23, 80, 95, 0.12)'
          : 'rgba(255, 255, 255, 0.28)'};

    background: ${({ $isScrolled }) =>
      $isScrolled
        ? 'rgba(255, 255, 255, 0.9)'
        : 'rgba(255, 255, 255, 0.68)'};

    box-shadow: ${({ $isScrolled }) =>
      $isScrolled
        ? '0 12px 40px rgba(23, 80, 95, 0.11)'
        : '0 6px 28px rgba(23, 80, 95, 0.04)'};

    backdrop-filter: blur(
      ${({ $isScrolled }) =>
        $isScrolled ? '24px' : '16px'}
    );

    -webkit-backdrop-filter: blur(
      ${({ $isScrolled }) =>
        $isScrolled ? '24px' : '16px'}
    );

    animation: ${headerEnter} 500ms ease both;

    transition:
      background 300ms ease,
      border-color 300ms ease,
      box-shadow 300ms ease,
      backdrop-filter 300ms ease;

    ${reducedMotion}
  `;

export const HeaderContent =
  styled.div<HeaderScrollProps>`
    display: flex;
    width: min(
      calc(100% - 48px),
      ${({ theme }) => theme.container.maxWidth}
    );

    min-height: ${({ $isScrolled }) =>
      $isScrolled ? '74px' : '88px'};

    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
    gap: 24px;

    transition: min-height 300ms ease;

    @media (max-width: 1024px) {
      width: calc(100% - 32px);
      min-height: ${({ $isScrolled }) =>
        $isScrolled ? '68px' : '76px'};
    }

    @media (max-width: 480px) {
      width: calc(100% - 24px);
      min-height: ${({ $isScrolled }) =>
        $isScrolled ? '62px' : '68px'};
    }

    ${reducedMotion}
  `;export const LogoLink = styled.a`
  display: inline-flex;
  min-width: 0;
  flex-shrink: 0;
  align-items: center;
  text-decoration: none;

  &:focus-visible {
    border-radius: 18px;
    outline: 3px solid rgba(73, 170, 183, 0.22);
    outline-offset: 4px;
  }
`;

export const LogoWrapper = styled.div<HeaderScrollProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${({ $isScrolled }) =>
    $isScrolled ? '180px' : '210px'};

  height: ${({ $isScrolled }) =>
    $isScrolled ? '64px' : '76px'};

  padding: 4px 10px;

  overflow: hidden;

  border: 1px solid rgba(73, 170, 183, 0.14);
  border-radius: 22px;

  background: rgba(255, 255, 255, 0.92);

  box-shadow:
    0 8px 24px rgba(23, 80, 95, 0.08),
    0 2px 8px rgba(23, 80, 95, 0.04);

  backdrop-filter: blur(10px);

  transition:
    width 300ms ease,
    height 300ms ease,
    border-color 250ms ease,
    box-shadow 250ms ease,
    transform 250ms ease;

  &::before {
    position: absolute;
    top: -80%;
    left: -50%;

    width: 30%;
    height: 260%;

    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.6),
      transparent
    );

    content: '';
    pointer-events: none;

    transform: rotate(18deg);
    transition: left 600ms ease;
  }

  &:hover {
    border-color: rgba(73, 170, 183, 0.28);

    box-shadow:
      0 14px 34px rgba(23, 80, 95, 0.12),
      0 4px 12px rgba(23, 80, 95, 0.06);

    transform: translateY(-2px);
  }

  &:hover::before {
    left: 125%;
  }

  ${reducedMotion}

  @media (max-width: 1024px) {
    width: ${({ $isScrolled }) =>
      $isScrolled ? '165px' : '185px'};

    height: ${({ $isScrolled }) =>
      $isScrolled ? '58px' : '66px'};

    border-radius: 19px;
  }

  @media (max-width: 480px) {
    width: ${({ $isScrolled }) =>
      $isScrolled ? '138px' : '150px'};

    height: ${({ $isScrolled }) =>
      $isScrolled ? '50px' : '56px'};

    padding: 3px 8px;
    border-radius: 16px;
  }
`;

export const LogoImage = styled.img`
  position: relative;
  z-index: 1;

  display: block;

  width: 100%;
  height: 100%;

  object-fit: contain;

  transform: scale(1.28);

  transition: transform 300ms ease;

  ${LogoWrapper}:hover & {
    transform: scale(1.34);
  }

  ${reducedMotion}

  @media (max-width: 1024px) {
    transform: scale(1.22);

    ${LogoWrapper}:hover & {
      transform: scale(1.27);
    }
  }

  @media (max-width: 480px) {
    transform: scale(1.18);

    ${LogoWrapper}:hover & {
      transform: scale(1.22);
    }
  }
`;
export const Navigation = styled.nav`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const NavigationList = styled.ul`
  display: flex;
  align-items: center;
  gap: 28px;
`;

export const NavigationLink = styled.a`
  position: relative;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 10px 4px;

  color: ${({ theme }) => theme.colors.textSecondary};

  font-size: 14px;
  font-weight: 600;

  transition:
    color 180ms ease,
    transform 150ms ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryDark};
  }

  &:active {
    transform: scale(0.96);
  }

  &.active {
    color: ${({ theme }) => theme.colors.primaryDark};
  }

  .active-indicator {
    position: absolute;

    right: 0;
    bottom: 2px;
    left: 0;

    height: 2px;

    border-radius: 999px;

    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.primaryLight},
      ${({ theme }) => theme.colors.primary},
      ${({ theme }) => theme.colors.secondary}
    );

    box-shadow:
      0 2px 8px rgba(79, 158, 171, 0.24);
  }
`;

export const HeaderActions = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: 12px;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const PhoneLink = styled.a`
  display: inline-flex;
  min-height: 44px;
  padding: 0 18px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.rounded};
  background-color: rgba(255, 255, 255, 0.74);
  color: ${({ theme }) => theme.colors.textPrimary};
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 14px;
  font-weight: 700;
  white-space: nowrap;
  transition:
    background-color 220ms ease,
    border-color 220ms ease,
    box-shadow 220ms ease,
    color 220ms ease,
    transform 220ms ease;

  svg {
    flex-shrink: 0;
    color: ${({ theme }) => theme.colors.primary};
    transition: transform 220ms ease;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.background};
    box-shadow: 0 10px 26px rgba(23, 80, 95, 0.1);
    color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-2px);
  }

  &:hover svg {
    transform: rotate(-8deg) scale(1.08);
  }

  &:focus-visible {
    outline: 3px solid rgba(73, 170, 183, 0.22);
    outline-offset: 3px;
  }

  ${reducedMotion}
`;

export const QuoteLink = styled.a`
  position: relative;
  display: inline-flex;
  min-height: 44px;
  padding: 0 20px;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.borderRadius.rounded};
  background:
    linear-gradient(
      135deg,
      ${({ theme }) => theme.colors.primaryDark},
      ${({ theme }) => theme.colors.primaryLight}
    );
  box-shadow: 0 12px 28px rgba(23, 80, 95, 0.2);
  color: ${({ theme }) => theme.colors.textWhite};
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 14px;
  font-weight: 700;
  white-space: nowrap;
  transition:
    box-shadow 220ms ease,
    transform 220ms ease;

  &::before {
    position: absolute;
    top: -80%;
    left: -70%;
    width: 40%;
    height: 260%;
    background: rgba(255, 255, 255, 0.22);
    content: '';
    pointer-events: none;
    transform: rotate(20deg);
    transition: left 520ms ease;
  }

  span,
  svg {
    position: relative;
    z-index: 1;
  }

  svg {
    flex-shrink: 0;
    transition: transform 200ms ease;
  }

  &:hover {
    box-shadow: 0 18px 40px rgba(23, 80, 95, 0.3);
    transform: translateY(-3px);
  }

  &:hover::before {
    left: 135%;
  }

  &:hover svg {
    transform: translateX(4px);
  }

  &:active {
    transform: translateY(-1px) scale(0.99);
  }

  &:focus-visible {
    outline: 3px solid rgba(73, 170, 183, 0.28);
    outline-offset: 4px;
  }

  ${reducedMotion}
`;

export const MobileMenuButton = styled.button<MobileMenuProps>`
  display: none;
  width: 46px;
  height: 46px;
  padding: 0;
  border: 1px solid
    ${({ theme, $isOpen }) =>
      $isOpen
        ? theme.colors.primary
        : 'rgba(23, 80, 95, 0.12)'};
  border-radius: 14px;
  background:
    ${({ theme, $isOpen }) =>
      $isOpen
        ? theme.colors.primary
        : `linear-gradient(
            145deg,
            ${theme.colors.background},
            ${theme.colors.backgroundSoft}
          )`};
  box-shadow: 0 8px 22px rgba(23, 80, 95, 0.11);
  color:
    ${({ theme, $isOpen }) =>
      $isOpen
        ? theme.colors.textWhite
        : theme.colors.primaryDark};
  cursor: pointer;
  appearance: none;
  align-items: center;
  justify-content: center;
  transition:
    background-color 220ms ease,
    border-color 220ms ease,
    box-shadow 220ms ease,
    color 220ms ease,
    transform 220ms ease;

  svg {
    transition: transform 220ms ease;
  }

  &:hover {
    box-shadow: 0 12px 28px rgba(23, 80, 95, 0.16);
    transform: translateY(-2px);
  }

  &:hover svg {
    transform: ${({ $isOpen }) =>
      $isOpen
        ? 'rotate(90deg)'
        : 'scale(1.08)'};
  }

  &:active {
    transform: scale(0.95);
  }

  &:focus-visible {
    outline: 3px solid rgba(73, 170, 183, 0.24);
    outline-offset: 3px;
  }

  ${reducedMotion}

  @media (max-width: 1024px) {
    display: inline-flex;
  }

  @media (max-width: 480px) {
    width: 43px;
    height: 43px;
    border-radius: 13px;
  }
`;

export const MobileMenuOverlay = styled.div<MobileMenuProps>`
  position: fixed;
  inset: 0;
  z-index: 998;
  visibility: ${({ $isOpen }) =>
    $isOpen ? 'visible' : 'hidden'};
  background-color: rgba(15, 59, 72, 0.42);
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  pointer-events: ${({ $isOpen }) =>
    $isOpen ? 'auto' : 'none'};
  transition:
    opacity 240ms ease,
    visibility 240ms ease;

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      animation: ${overlayEnter} 240ms ease both;
    `}

  ${reducedMotion}

  @media (min-width: 1025px) {
    display: none;
  }
`;

export const MobileMenu = styled.div<MobileMenuProps>`
  position: absolute;
  top: 100%;
  right: 0;
  left: 0;
  z-index: 999;
  visibility: ${({ $isOpen }) =>
    $isOpen ? 'visible' : 'hidden'};
  max-height: ${({ $isOpen }) =>
    $isOpen
      ? 'calc(100vh - 76px)'
      : '0'};
  padding: ${({ $isOpen }) =>
    $isOpen ? '16px' : '0 16px'};
  overflow: hidden auto;
  border-top: 1px solid
    ${({ theme, $isOpen }) =>
      $isOpen
        ? theme.colors.border
        : 'transparent'};
  background:
    linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.98),
      ${({ theme }) => theme.colors.backgroundSoft}
    );
  box-shadow:
    ${({ $isOpen, theme }) =>
      $isOpen
        ? theme.shadows.medium
        : 'none'};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  transform:
    ${({ $isOpen }) =>
      $isOpen
        ? 'translateY(0)'
        : 'translateY(-12px)'};
  pointer-events: ${({ $isOpen }) =>
    $isOpen ? 'auto' : 'none'};
  transition:
    max-height 320ms ease,
    opacity 240ms ease,
    padding 320ms ease,
    transform 280ms ease,
    visibility 280ms ease;

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      animation: ${menuEnter} 300ms ease both;
    `}

  ${reducedMotion}

  @media (min-width: 1025px) {
    display: none;
  }

  @media (max-width: 480px) {
    max-height: ${({ $isOpen }) =>
      $isOpen
        ? 'calc(100vh - 68px)'
        : '0'};
    padding:
      ${({ $isOpen }) =>
        $isOpen
          ? '12px'
          : '0 12px'};
  }
`;

export const MobileMenuInner = styled.div`
  width: min(100%, 600px);
  margin: 0 auto;
  padding: 4px 0;
`;

export const MobileNavigationList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;

  > li {
    opacity: 0;
    animation: ${mobileLinkEnter} 320ms ease both;
  }

  > li:nth-child(1) {
    animation-delay: 40ms;
  }

  > li:nth-child(2) {
    animation-delay: 80ms;
  }

  > li:nth-child(3) {
    animation-delay: 120ms;
  }

  > li:nth-child(4) {
    animation-delay: 160ms;
  }

  > li:nth-child(5) {
    animation-delay: 200ms;
  }

  > li:nth-child(6) {
    animation-delay: 240ms;
  }

  ${reducedMotion}
`;

export const MobileNavigationLink = styled.a`
  position: relative;
  display: flex;
  min-height: 50px;
  padding: 0 15px;
  overflow: hidden;
  border: 1px solid transparent;
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.textPrimary};
  align-items: center;
  font-size: 15px;
  font-weight: 600;
  transition:
    background-color 200ms ease,
    border-color 200ms ease,
    color 200ms ease,
    padding-left 200ms ease,
    transform 200ms ease;

  &::before {
    width: 0;
    height: 6px;
    margin-right: 0;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.primary};
    content: '';
    opacity: 0;
    transition:
      margin-right 200ms ease,
      opacity 200ms ease,
      width 200ms ease;
  }

  &:hover {
    border-color: rgba(73, 170, 183, 0.18);
    background-color: rgba(73, 170, 183, 0.07);
    color: ${({ theme }) => theme.colors.primary};
    padding-left: 19px;
    transform: translateX(2px);
  }

  &.active {
    border-color: rgba(73, 170, 183, 0.22);
    background-color: rgba(73, 170, 183, 0.09);
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 700;

    &::before {
      width: 6px;
      margin-right: 10px;
      opacity: 1;
    }
  }

  &:focus-visible {
    outline: 3px solid rgba(73, 170, 183, 0.2);
    outline-offset: 2px;
  }

  ${reducedMotion}
`;

export const MobileActions = styled.div`
  display: grid;
  margin-top: 18px;
  padding-top: 18px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  gap: 10px;
  animation: ${mobileLinkEnter} 350ms ease 260ms both;

  ${reducedMotion}
`;

export const MobilePhoneLink = styled(PhoneLink)`
  width: 100%;
  min-height: 49px;
`;

export const MobileQuoteLink = styled(QuoteLink)`
  width: 100%;
  min-height: 49px;
`;
export const LanguageButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;

  padding: 8px 10px;

  border: none;
  border-radius: 10px;

  background: transparent;

  color: ${({ theme }) => theme.colors.textMuted};

  font-size: 13px;
  font-weight: 600;

  cursor: pointer;

  transition: all 0.2s ease;

  span {
    transition:
      color 0.2s ease,
      font-weight 0.2s ease;
  }

  .active {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 700;
  }

  .divider {
    color: ${({ theme }) => theme.colors.border};
    font-weight: 400;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.backgroundSoft};
  }
`;