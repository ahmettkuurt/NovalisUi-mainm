import styled, {
  css,
  keyframes,
} from 'styled-components';

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(28px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-28px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(28px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.96);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const floating = keyframes`
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-8px);
  }
`;

const pulseGlow = keyframes`
  0%,
  100% {
    box-shadow: 0 0 0 0 rgba(73, 170, 183, 0.18);
  }

  50% {
    box-shadow: 0 0 0 10px rgba(73, 170, 183, 0);
  }
`;

const rotateDecoration = keyframes`
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
`;

const reducedMotion = css`
  @media (prefers-reduced-motion: reduce) {
    animation: none;
    transition-duration: 0.01ms;
  }
`;

export const ServicesSection = styled.section`
  position: relative;
  width: 100%;
  padding: 72px 0 82px;
  overflow: hidden;
  background:
    radial-gradient(
      circle at top right,
      rgba(73, 170, 183, 0.08),
      transparent 28%
    ),
    ${({ theme }) => theme.colors.background};

  &::before {
    position: absolute;
    top: -180px;
    right: -170px;
    width: 420px;
    height: 420px;
    border-radius: 50%;
    background: rgba(73, 170, 183, 0.1);
    content: '';
    filter: blur(30px);
    pointer-events: none;
    animation: ${floating} 8s ease-in-out infinite;
  }

  &::after {
    position: absolute;
    bottom: -180px;
    left: -210px;
    width: 390px;
    height: 390px;
    border: 70px solid rgba(73, 170, 183, 0.035);
    border-radius: 50%;
    content: '';
    pointer-events: none;
    animation: ${rotateDecoration} 42s linear infinite;
  }

  ${reducedMotion}

  @media (max-width: 768px) {
    padding: 54px 0 64px;
  }

  @media (max-width: 480px) {
    padding: 42px 0 52px;
  }
`;

export const ServicesContainer = styled.div`
  position: relative;
  z-index: 1;
  width: min(
    calc(100% - 48px),
    ${({ theme }) => theme.container.maxWidth}
  );
  margin: 0 auto;

  @media (max-width: 768px) {
    width: calc(100% - 32px);
  }

  @media (max-width: 480px) {
    width: calc(100% - 24px);
  }
`;

export const ServicesHeader = styled.div`
  display: grid;
  margin-bottom: 42px;
  padding: 38px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 28px;
  background:
    radial-gradient(
      circle at top right,
      rgba(73, 170, 183, 0.13),
      transparent 38%
    ),
    linear-gradient(
      135deg,
      ${({ theme }) => theme.colors.background},
      ${({ theme }) => theme.colors.backgroundSoft}
    );
  box-shadow: 0 22px 62px rgba(15, 61, 70, 0.07);
  grid-template-columns:
    minmax(0, 1.15fr)
    minmax(340px, 0.85fr);
  align-items: center;
  gap: 48px;
  animation: ${fadeUp} 700ms ease both;

  ${reducedMotion}

  @media (max-width: 1000px) {
    padding: 32px;
    grid-template-columns: 1fr;
    gap: 28px;
  }

  @media (max-width: 600px) {
    padding: 26px 22px;
    border-radius: 22px;
  }
`;

export const ServicesHeading = styled.div`
  position: relative;
  z-index: 1;
  max-width: 690px;
  animation: ${fadeLeft} 700ms ease 100ms both;

  ${reducedMotion}
`;

export const ServicesLabel = styled.span`
  display: inline-flex;
  padding: 7px 12px;
  border: 1px solid rgba(73, 170, 183, 0.24);
  border-radius: 999px;
  background-color: rgba(73, 170, 183, 0.08);
  color: ${({ theme }) => theme.colors.primaryDark};
  align-items: center;
  gap: 7px;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  transition:
    background-color 200ms ease,
    border-color 200ms ease,
    transform 200ms ease;

  &:hover {
    border-color: rgba(73, 170, 183, 0.45);
    background-color: rgba(73, 170, 183, 0.13);
    transform: translateY(-2px);
  }

  svg {
    animation: ${floating} 3s ease-in-out infinite;
  }

  ${reducedMotion}
`;

export const ServicesTitle = styled.h2`
  max-width: 680px;
  margin-top: 15px;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: clamp(36px, 3.8vw, 56px);
  font-weight: 700;
  line-height: 1.06;
  letter-spacing: -0.045em;

  span {
    color: ${({ theme }) => theme.colors.primaryDark};
  }

  @media (max-width: 768px) {
    font-size: clamp(32px, 8vw, 44px);
  }
`;

export const ServicesDescription = styled.p`
  max-width: 640px;
  margin-top: 18px;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 15px;
  line-height: 1.72;
  animation: ${fadeUp} 700ms ease 220ms both;

  ${reducedMotion}
`;

export const ServicesInfoCard = styled.aside`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 440px;
  padding: 30px;
  overflow: hidden;
  justify-self: end;
  border: 1px solid rgba(73, 170, 183, 0.16);
  border-radius: 24px;

  background:
    radial-gradient(
      circle at top right,
      rgba(73, 170, 183, 0.1),
      transparent 42%
    ),
    rgba(255, 255, 255, 0.78);

  box-shadow: 0 20px 50px rgba(15, 61, 70, 0.08);

  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);

  animation: ${fadeRight} 750ms ease 180ms both;

  transition:
    border-color 260ms ease,
    box-shadow 260ms ease,
    transform 260ms ease;

  &:hover {
    border-color: rgba(73, 170, 183, 0.28);
    box-shadow: 0 26px 60px rgba(15, 61, 70, 0.11);
    transform: translateY(-3px);
  }

  ${reducedMotion}

  @media (max-width: 1000px) {
    max-width: 680px;
    justify-self: start;
  }

  @media (max-width: 600px) {
    padding: 24px;
  }
`;

export const ServicesInfoTop = styled.div`
  position: relative;
  z-index: 1;
`;

export const ServicesInfoBadge = styled.span`
  display: inline-flex;
  min-height: 30px;
  padding: 0 12px;

  border: 1px solid rgba(73, 170, 183, 0.14);
  border-radius: ${({ theme }) => theme.borderRadius.rounded};

  background-color: rgba(73, 170, 183, 0.08);
  color: ${({ theme }) => theme.colors.primaryDark};

  align-items: center;
  gap: 7px;

  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.09em;
  text-transform: uppercase;

  animation: ${pulseGlow} 3s ease-in-out infinite;

  svg {
    flex-shrink: 0;
  }

  ${reducedMotion}
`;

export const ServicesInfoText = styled.p`
  margin-top: 12px;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 13px;
  line-height: 1.6;
`;

export const ServicesStats = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  margin: 18px 0;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;

  > * {
    opacity: 0;
    animation: ${scaleIn} 500ms ease both;
  }

  > *:nth-child(1) {
    animation-delay: 300ms;
  }

  > *:nth-child(2) {
    animation-delay: 390ms;
  }

  > *:nth-child(3) {
    animation-delay: 480ms;
  }

  ${reducedMotion}

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const ServicesStat = styled.div`
  min-width: 0;
  padding: 13px 8px;
  border: 1px solid rgba(73, 170, 183, 0.08);
  border-radius: 14px;
  background-color: rgba(255, 255, 255, 0.74);
  text-align: center;
  transition:
    background-color 220ms ease,
    border-color 220ms ease,
    box-shadow 220ms ease,
    transform 220ms ease;

  &:hover {
    border-color: rgba(73, 170, 183, 0.3);
    background-color: ${({ theme }) => theme.colors.background};
    box-shadow: 0 12px 28px rgba(15, 61, 70, 0.09);
    transform: translateY(-4px);
  }

  strong {
    display: block;
    color: ${({ theme }) => theme.colors.primaryDark};
    font-size: 21px;
    line-height: 1;
    transition: transform 200ms ease;
  }

  &:hover strong {
    transform: scale(1.08);
  }

  span {
    display: block;
    margin-top: 7px;
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: 10px;
    line-height: 1.3;
  }

  ${reducedMotion}
`;

export const AllServicesLink = styled.a`
  position: relative;
  z-index: 1;
  display: inline-flex;
  min-height: 42px;
  padding: 0 16px;
  overflow: hidden;
  border: 1px solid rgba(73, 170, 183, 0.22);
  border-radius: ${({ theme }) => theme.borderRadius.rounded};
  background-color: rgba(255, 255, 255, 0.65);
  color: ${({ theme }) => theme.colors.primaryDark};
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 700;
  transition:
    background-color 200ms ease,
    border-color 200ms ease,
    box-shadow 200ms ease,
    color 200ms ease,
    transform 200ms ease;

  svg {
    transition: transform 200ms ease;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 12px 28px rgba(23, 80, 95, 0.2);
    color: ${({ theme }) => theme.colors.textWhite};
    transform: translateY(-2px);
  }

  &:hover svg {
    transform: translateX(4px);
  }

  &:focus-visible {
    outline: 3px solid rgba(73, 170, 183, 0.24);
    outline-offset: 3px;
  }

  ${reducedMotion}
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 18px;

  > * {
    opacity: 0;
    animation: ${fadeUp} 620ms ease both;
  }

  > *:nth-child(1) {
    animation-delay: 100ms;
  }

  > *:nth-child(2) {
    animation-delay: 170ms;
  }

  > *:nth-child(3) {
    animation-delay: 240ms;
  }

  > *:nth-child(4) {
    animation-delay: 310ms;
  }

  > *:nth-child(5) {
    animation-delay: 380ms;
  }

  > *:nth-child(6) {
    animation-delay: 450ms;
  }

  > *:nth-child(7) {
    animation-delay: 520ms;
  }

  > *:nth-child(8) {
    animation-delay: 590ms;
  }

  ${reducedMotion}

  @media (max-width: 1180px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 780px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 540px) {
    grid-template-columns: 1fr;
  }
`;

export const ServiceCard = styled.article`
  position: relative;
  display: flex;
  min-width: 0;
  min-height: 400px;
  height: 100%;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 22px;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0 10px 30px rgba(15, 61, 70, 0.04);
  flex-direction: column;
  transition:
    border-color 260ms ease,
    box-shadow 300ms ease,
    transform 300ms cubic-bezier(0.2, 0.8, 0.2, 1);

  &::after {
    position: absolute;
    inset: 0;
    border: 1px solid transparent;
    border-radius: inherit;
    content: '';
    pointer-events: none;
    transition: border-color 250ms ease;
  }

  &:hover {
    border-color: rgba(73, 170, 183, 0.45);
    box-shadow: 0 26px 60px rgba(15, 61, 70, 0.14);
    transform: translateY(-9px);
  }

  &:hover::after {
    border-color: rgba(73, 170, 183, 0.14);
  }

  ${reducedMotion}
`;

export const ServiceImageContainer = styled.div`
  position: relative;
  height: 205px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.backgroundSoft};

  &::before {
    position: absolute;
    z-index: 2;
    inset: 0;
    background: linear-gradient(
      120deg,
      transparent 25%,
      rgba(255, 255, 255, 0.32) 48%,
      transparent 70%
    );
    content: '';
    pointer-events: none;
    transform: translateX(-120%);
    transition: transform 700ms ease;
  }

  ${ServiceCard}:hover &::before {
    transform: translateX(120%);
  }
`;

export const ServiceImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition:
    filter 500ms ease,
    transform 650ms cubic-bezier(0.2, 0.8, 0.2, 1);

  ${ServiceCard}:hover & {
    filter: saturate(1.06) contrast(1.02);
    transform: scale(1.075);
  }

  ${reducedMotion}
`;

export const ServiceImageOverlay = styled.div`
  position: absolute;
  z-index: 1;
  inset: 0;
  background:
    linear-gradient(
      to bottom,
      transparent 48%,
      rgba(20, 61, 72, 0.24)
    );
  pointer-events: none;
  transition: background 300ms ease;

  ${ServiceCard}:hover & {
    background:
      linear-gradient(
        to bottom,
        transparent 40%,
        rgba(20, 61, 72, 0.3)
      );
  }
`;

export const ServiceContent = styled.div`
  display: flex;
  padding: 21px;
  flex: 1;
  flex-direction: column;
  transition: background-color 240ms ease;

  ${ServiceCard}:hover & {
    background-color: rgba(73, 170, 183, 0.018);
  }
`;

export const ServiceTitle = styled.h3`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 18px;
  font-weight: 700;
  line-height: 1.3;
  transition:
    color 200ms ease,
    transform 200ms ease;

  ${ServiceCard}:hover & {
    color: ${({ theme }) => theme.colors.primaryDark};
    transform: translateX(3px);
  }

  ${reducedMotion}
`;

export const ServiceDescription = styled.p`
  display: -webkit-box;
  margin-top: 10px;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 13px;
  line-height: 1.65;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
`;

export const ServiceLink = styled.a`
  display: inline-flex;
  width: 42px;
  height: 42px;
  margin-top: auto;
  margin-left: auto;
  border: 1px solid rgba(73, 170, 183, 0.15);
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.backgroundMuted};
  color: ${({ theme }) => theme.colors.primaryDark};
  align-items: center;
  justify-content: center;
  transition:
    background-color 200ms ease,
    border-color 200ms ease,
    box-shadow 200ms ease,
    color 200ms ease,
    transform 200ms ease;

  svg {
    transition: transform 200ms ease;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 12px 28px rgba(23, 80, 95, 0.22);
    color: ${({ theme }) => theme.colors.textWhite};
    transform: translateY(-3px) scale(1.04);
  }

  &:hover svg {
    transform: translateX(3px);
  }

  &:focus-visible {
    outline: 3px solid rgba(73, 170, 183, 0.24);
    outline-offset: 3px;
  }

  ${reducedMotion}
`;