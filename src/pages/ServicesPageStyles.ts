import styled, { css, keyframes } from 'styled-components';

/* Animations */

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

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(24px) scale(0.96);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

const floating = keyframes`
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }
`;

const pulseGlow = keyframes`
  0%,
  100% {
    box-shadow: 0 12px 30px rgba(45, 147, 161, 0.2);
  }

  50% {
    box-shadow: 0 16px 42px rgba(45, 147, 161, 0.34);
  }
`;

const rotateDecoration = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const shimmer = keyframes`
  from {
    transform: translateX(-160%) skewX(-18deg);
  }

  to {
    transform: translateX(260%) skewX(-18deg);
  }
`;

const titleLine = keyframes`
  from {
    transform: scaleX(0);
  }

  to {
    transform: scaleX(1);
  }
`;

const modalImageZoom = keyframes`
  from {
    opacity: 0;
    transform: scale(1.08);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const reducedMotion = css`
  @media (prefers-reduced-motion: reduce) {
    animation: none;
    transition-duration: 0.01ms;
  }
`;

/* General */

export const PageContainer = styled.main`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const SectionContainer = styled.div`
  width: min(calc(100% - 48px), 1180px);
  margin: 0 auto;

  @media (max-width: 768px) {
    width: calc(100% - 32px);
  }

  @media (max-width: 480px) {
    width: calc(100% - 24px);
  }
`;

/* Services Hero */

export const ServicesSection = styled.section`
  position: relative;
  padding: 72px 0 80px;
  overflow: hidden;

  &::before {
    position: absolute;
    top: -180px;
    right: -140px;
    width: 420px;
    height: 420px;
    border-radius: 50%;
    background: rgba(73, 170, 183, 0.11);
    content: '';
    filter: blur(18px);
    opacity: 0.85;
    pointer-events: none;
    animation: ${floating} 7s ease-in-out infinite;
  }

  &::after {
    position: absolute;
    bottom: 10%;
    left: -180px;
    width: 340px;
    height: 340px;
    border: 70px solid rgba(73, 170, 183, 0.035);
    border-radius: 50%;
    content: '';
    pointer-events: none;
    animation: ${rotateDecoration} 40s linear infinite;
  }

  ${reducedMotion}

  @media (max-width: 768px) {
    padding: 52px 0 64px;
  }

  @media (max-width: 480px) {
    padding: 40px 0 48px;
  }
`;

export const ServicesHero = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  margin-bottom: 42px;
  padding: 42px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 28px;
  background:
    radial-gradient(
      circle at top right,
      rgba(73, 170, 183, 0.14),
      transparent 38%
    ),
    linear-gradient(
      135deg,
      ${({ theme }) => theme.colors.background} 0%,
      ${({ theme }) => theme.colors.backgroundSoft} 100%
    );
  box-shadow: 0 20px 60px rgba(15, 61, 70, 0.06);
  grid-template-columns: minmax(0, 1.15fr) minmax(320px, 0.85fr);
  align-items: center;
  gap: 48px;
  animation: ${fadeUp} 700ms ease both;

  &::before {
    position: absolute;
    top: -60%;
    left: -35%;
    width: 30%;
    height: 220%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.45),
      transparent
    );
    content: '';
    pointer-events: none;
    transform: skewX(-18deg);
    animation: ${shimmer} 5.5s ease-in-out 1s infinite;
  }

  &::after {
    position: absolute;
    right: -90px;
    bottom: -120px;
    width: 280px;
    height: 280px;
    border: 50px solid rgba(73, 170, 183, 0.08);
    border-radius: 50%;
    content: '';
    pointer-events: none;
    animation: ${rotateDecoration} 34s linear infinite;
  }

  ${reducedMotion}

  @media (max-width: 980px) {
    padding: 34px;
    grid-template-columns: 1fr;
    gap: 32px;
  }

  @media (max-width: 480px) {
    margin-bottom: 28px;
    padding: 28px 22px;
    border-radius: 22px;
    gap: 26px;
  }
`;

export const SectionHeader = styled.div`
  position: relative;
  z-index: 1;
  max-width: 650px;
  animation: ${fadeUp} 700ms ease 120ms both;

  ${reducedMotion}
`;

export const SectionLabel = styled.span`
  display: inline-flex;
  margin-bottom: 14px;
  padding: 7px 12px;
  border: 1px solid rgba(73, 170, 183, 0.22);
  border-radius: ${({ theme }) => theme.borderRadius.rounded};
  background-color: rgba(73, 170, 183, 0.08);
  color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  gap: 7px;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1.3px;
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
    animation: ${floating} 2.8s ease-in-out infinite;
  }

  ${reducedMotion}
`;

export const SectionTitle = styled.h1`
  max-width: 620px;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: clamp(34px, 4.5vw, 54px);
  font-weight: 700;
  letter-spacing: -1.8px;
  line-height: 1.08;

  span {
    position: relative;
    color: ${({ theme }) => theme.colors.primary};

    &::after {
      position: absolute;
      right: 0;
      bottom: -6px;
      left: 0;
      height: 6px;
      border-radius: 999px;
      background: linear-gradient(
        90deg,
        rgba(73, 170, 183, 0.32),
        rgba(73, 170, 183, 0)
      );
      content: '';
      transform: scaleX(0);
      transform-origin: left;
      animation: ${titleLine} 700ms ease 700ms forwards;
    }
  }

  ${reducedMotion}

  @media (max-width: 480px) {
    letter-spacing: -1.1px;

    span::after {
      bottom: -3px;
      height: 4px;
    }
  }
`;

export const SectionDescription = styled.p`
  max-width: 570px;
  margin-top: 18px;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 16px;
  line-height: 1.75;
  animation: ${fadeUp} 700ms ease 240ms both;

  ${reducedMotion}

  @media (max-width: 480px) {
    font-size: 15px;
  }
`;

export const HeroActions = styled.div`
  display: flex;
  margin-top: 26px;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;

  @media (max-width: 480px) {
    align-items: stretch;
    flex-direction: column;
  }
`;

export const HeroPrimaryButton = styled.a`
  position: relative;
  display: inline-flex;
  min-height: 50px;
  padding: 0 22px;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.borderRadius.rounded};
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 12px 30px rgba(45, 147, 161, 0.2);
  color: ${({ theme }) => theme.colors.textWhite};
  align-items: center;
  justify-content: center;
  gap: 9px;
  font-size: 14px;
  font-weight: 800;
  animation:
    ${fadeUp} 700ms ease 320ms both,
    ${pulseGlow} 3s ease-in-out 1.5s infinite;
  transition:
    box-shadow 200ms ease,
    transform 200ms ease;

  &::before {
    position: absolute;
    top: -50%;
    left: -80%;
    width: 45%;
    height: 200%;
    background: rgba(255, 255, 255, 0.24);
    content: '';
    transform: rotate(20deg);
    transition: left 500ms ease;
  }

  &:hover {
    box-shadow: 0 18px 42px rgba(45, 147, 161, 0.32);
    transform: translateY(-3px);
  }

  &:hover::before {
    left: 130%;
  }

  &:hover svg {
    transform: translateX(4px);
  }

  svg {
    position: relative;
    z-index: 1;
    transition: transform 200ms ease;
  }

  &:focus-visible {
    outline: 3px solid rgba(73, 170, 183, 0.28);
    outline-offset: 4px;
  }

  ${reducedMotion}

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const HeroSecondaryButton = styled.a`
  display: inline-flex;
  min-height: 50px;
  padding: 0 22px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.rounded};
  background-color: rgba(255, 255, 255, 0.74);
  color: ${({ theme }) => theme.colors.textPrimary};
  align-items: center;
  justify-content: center;
  gap: 9px;
  font-size: 14px;
  font-weight: 700;
  animation: ${fadeUp} 700ms ease 400ms both;
  transition:
    border-color 200ms ease,
    background-color 200ms ease,
    box-shadow 200ms ease,
    color 200ms ease,
    transform 200ms ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.background};
    box-shadow: 0 12px 28px rgba(15, 61, 70, 0.1);
    color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-3px);
  }

  &:hover svg {
    transform: rotate(-8deg) scale(1.08);
  }

  svg {
    transition: transform 200ms ease;
  }

  &:focus-visible {
    outline: 3px solid rgba(73, 170, 183, 0.25);
    outline-offset: 4px;
  }

  ${reducedMotion}

  @media (max-width: 480px) {
    width: 100%;
  }
`;

/* Trust Panel */

export const HeroTrustPanel = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  padding: 26px;
  border: 1px solid rgba(73, 170, 183, 0.18);
  border-radius: 22px;
  background-color: rgba(255, 255, 255, 0.78);
  box-shadow: 0 22px 50px rgba(15, 61, 70, 0.08);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  gap: 8px;
  animation: ${scaleIn} 700ms ease 280ms both;
  transition:
    border-color 300ms ease,
    box-shadow 300ms ease,
    transform 300ms ease;

  &:hover {
    border-color: rgba(73, 170, 183, 0.32);
    box-shadow: 0 28px 70px rgba(15, 61, 70, 0.13);
    transform: translateY(-4px);
  }

  ${reducedMotion}

  @media (max-width: 480px) {
    padding: 20px;
    border-radius: 18px;
  }
`;

export const TrustPanelHeader = styled.div`
  margin-bottom: 10px;
`;

export const TrustPanelLabel = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export const TrustPanelTitle = styled.h2`
  margin-top: 7px;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.4px;
  line-height: 1.35;
`;

export const TrustItem = styled.div`
  display: grid;
  padding: 13px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  grid-template-columns: 40px 1fr;
  align-items: center;
  gap: 12px;
  transition:
    padding-left 200ms ease,
    transform 200ms ease;

  &:hover {
    padding-left: 5px;
    transform: translateX(2px);
  }

  &:last-child {
    padding-bottom: 0;
    border-bottom: 0;
  }

  &:hover > div:first-child {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.textWhite};
    transform: rotate(-5deg) scale(1.08);
  }

  ${reducedMotion}
`;

export const TrustIcon = styled.div`
  display: inline-flex;
  width: 40px;
  height: 40px;
  border-radius: 13px;
  background-color: rgba(73, 170, 183, 0.1);
  color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  justify-content: center;
  transition:
    background-color 220ms ease,
    color 220ms ease,
    transform 220ms ease;

  ${reducedMotion}
`;

export const TrustContent = styled.div`
  display: grid;
  gap: 3px;
`;

export const TrustTitle = styled.strong`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 14px;
  font-weight: 700;
`;

export const TrustDescription = styled.span`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 12px;
  line-height: 1.5;
`;

/* Services Grid */

export const ServicesGrid = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;

  > * {
    opacity: 0;
    animation: ${fadeUp} 650ms ease both;
  }

  > *:nth-child(1) {
    animation-delay: 100ms;
  }

  > *:nth-child(2) {
    animation-delay: 180ms;
  }

  > *:nth-child(3) {
    animation-delay: 260ms;
  }

  > *:nth-child(4) {
    animation-delay: 340ms;
  }

  > *:nth-child(5) {
    animation-delay: 420ms;
  }

  > *:nth-child(6) {
    animation-delay: 500ms;
  }

  > *:nth-child(7) {
    animation-delay: 580ms;
  }

  > *:nth-child(8) {
    animation-delay: 660ms;
  }

  ${reducedMotion}

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const ServiceCard = styled.button`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0 10px 30px rgba(15, 61, 70, 0.04);
  color: inherit;
  font: inherit;
  text-align: left;
  cursor: pointer;
  appearance: none;
  transition:
    border-color 250ms ease,
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
    border-color: rgba(73, 170, 183, 0.48);
    box-shadow: 0 26px 60px rgba(15, 61, 70, 0.15);
    transform: translateY(-9px);
  }

  &:hover::after {
    border-color: rgba(73, 170, 183, 0.16);
  }

  &:active {
    transform: translateY(-4px) scale(0.99);
  }

  &:focus-visible {
    outline: 3px solid rgba(73, 170, 183, 0.24);
    outline-offset: 4px;
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
    z-index: 1;
    inset: 0;
    background: linear-gradient(
      120deg,
      transparent 25%,
      rgba(255, 255, 255, 0.3) 48%,
      transparent 70%
    );
    content: '';
    pointer-events: none;
    transform: translateX(-120%);
    transition: transform 700ms ease;
  }

  &::after {
    position: absolute;
    z-index: 1;
    inset: auto 0 0;
    height: 45%;
    background: linear-gradient(
      180deg,
      rgba(10, 31, 38, 0),
      rgba(10, 31, 38, 0.2)
    );
    content: '';
    pointer-events: none;
  }

  ${ServiceCard}:hover &::before {
    transform: translateX(120%);
  }

  @media (max-width: 640px) {
    height: 220px;
  }
`;

export const ServiceImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition:
    filter 450ms ease,
    transform 600ms cubic-bezier(0.2, 0.8, 0.2, 1);

  ${ServiceCard}:hover & {
    filter: saturate(1.06) contrast(1.02);
    transform: scale(1.075);
  }

  ${reducedMotion}
`;

export const ServiceBody = styled.div`
  display: flex;
  min-height: 190px;
  padding: 22px;
  flex-direction: column;
  transition: background-color 250ms ease;

  ${ServiceCard}:hover & {
    background-color: rgba(73, 170, 183, 0.018);
  }
`;

export const ServiceTitle = styled.h2`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 19px;
  font-weight: 700;
  letter-spacing: -0.3px;
  line-height: 1.3;
  transition:
    color 200ms ease,
    transform 200ms ease;

  ${ServiceCard}:hover & {
    color: ${({ theme }) => theme.colors.primary};
    transform: translateX(3px);
  }

  ${reducedMotion}
`;

export const ServiceDescription = styled.p`
  display: -webkit-box;
  margin-top: 9px;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 14px;
  line-height: 1.65;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`;

export const ServiceFooter = styled.div`
  display: flex;
  margin-top: auto;
  padding-top: 16px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  justify-content: space-between;
  transition: border-color 200ms ease;

  ${ServiceCard}:hover & {
    border-color: rgba(73, 170, 183, 0.25);
  }
`;

export const ServiceLink = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-size: 13px;
  font-weight: 700;

  svg {
    transition:
      opacity 200ms ease,
      transform 200ms ease;
  }

  ${ServiceCard}:hover & svg {
    opacity: 1;
    transform: rotate(8deg) scale(1.15);
  }

  ${reducedMotion}
`;

/* Modal */

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 2000;
  display: flex;
  padding: 24px;
  overflow-y: auto;
  background-color: rgba(10, 31, 38, 0.68);
  backdrop-filter: blur(9px);
  -webkit-backdrop-filter: blur(9px);
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 220ms ease both;

  ${reducedMotion}

  @media (max-width: 640px) {
    padding: 12px;
    align-items: flex-start;
  }
`;

export const ExpandedCard = styled.div`
  position: relative;
  display: grid;
  width: min(100%, 880px);
  max-height: calc(100vh - 48px);
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.32);
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0 42px 110px rgba(7, 32, 39, 0.34);
  grid-template-columns: 44% 1fr;
  animation: ${scaleIn} 320ms cubic-bezier(0.2, 0.8, 0.2, 1) both;

  ${reducedMotion}

  @media (max-width: 720px) {
    margin: auto 0;
    overflow-y: auto;
    grid-template-columns: 1fr;
  }
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  z-index: 3;
  display: inline-flex;
  width: 40px;
  height: 40px;
  padding: 0;
  border: 1px solid rgba(15, 61, 70, 0.1);
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.94);
  box-shadow: 0 8px 24px rgba(15, 61, 70, 0.14);
  color: ${({ theme }) => theme.colors.textPrimary};
  font: inherit;
  cursor: pointer;
  appearance: none;
  align-items: center;
  justify-content: center;
  transition:
    background-color 200ms ease,
    box-shadow 200ms ease,
    color 200ms ease,
    transform 200ms ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 12px 28px rgba(45, 147, 161, 0.28);
    color: ${({ theme }) => theme.colors.textWhite};
    transform: rotate(90deg) scale(1.06);
  }

  &:active {
    transform: rotate(90deg) scale(0.95);
  }

  &:focus-visible {
    outline: 3px solid rgba(73, 170, 183, 0.28);
    outline-offset: 3px;
  }

  ${reducedMotion}
`;

export const ModalImageContainer = styled.div`
  position: relative;
  min-height: 440px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.backgroundSoft};

  &::after {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(10, 31, 38, 0.02),
      rgba(10, 31, 38, 0.17)
    );
    content: '';
    pointer-events: none;
  }

  @media (max-width: 720px) {
    min-height: 220px;
    height: 220px;
  }

  @media (max-width: 480px) {
    min-height: 185px;
    height: 185px;
  }
`;

export const ModalImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  animation: ${modalImageZoom} 900ms ease both;

  ${reducedMotion}
`;

export const ModalContent = styled.div`
  padding: 38px;
  overflow-y: auto;
  animation: ${fadeUp} 480ms ease 100ms both;

  ${reducedMotion}

  @media (max-width: 480px) {
    padding: 26px 22px;
  }
`;

export const ModalTitle = styled.h2`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: clamp(26px, 3vw, 34px);
  font-weight: 700;
  letter-spacing: -0.8px;
  line-height: 1.2;
`;

export const ModalDescription = styled.p`
  margin-top: 14px;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 15px;
  line-height: 1.75;
`;

export const FeatureList = styled.ul`
  display: grid;
  margin-top: 24px;
  gap: 8px;
`;

export const FeatureItem = styled.li`
  display: flex;
  padding: 10px 12px;
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.textSecondary};
  align-items: flex-start;
  gap: 10px;
  font-size: 14px;
  line-height: 1.55;
  transition:
    background-color 200ms ease,
    color 200ms ease,
    transform 200ms ease;

  &:hover {
    background-color: rgba(73, 170, 183, 0.07);
    color: ${({ theme }) => theme.colors.textPrimary};
    transform: translateX(5px);
  }

  svg {
    flex-shrink: 0;
    margin-top: 2px;
    color: ${({ theme }) => theme.colors.primary};
    transition: transform 200ms ease;
  }

  &:hover svg {
    transform: scale(1.16) rotate(-5deg);
  }

  ${reducedMotion}
`;

export const ModalActions = styled.div`
  display: flex;
  margin-top: 28px;
  flex-wrap: wrap;
  gap: 10px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const CtaPrimaryButton = styled.a`
  position: relative;
  display: inline-flex;
  min-height: 46px;
  padding: 0 20px;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.borderRadius.rounded};
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 10px 24px rgba(45, 147, 161, 0.18);
  color: ${({ theme }) => theme.colors.textWhite};
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 800;
  transition:
    box-shadow 200ms ease,
    transform 200ms ease;

  &::after {
    position: absolute;
    top: -80%;
    left: -60%;
    width: 38%;
    height: 260%;
    background: rgba(255, 255, 255, 0.2);
    content: '';
    transform: rotate(20deg);
    transition: left 500ms ease;
  }

  &:hover {
    box-shadow: 0 15px 32px rgba(45, 147, 161, 0.3);
    transform: translateY(-2px);
  }

  &:hover::after {
    left: 130%;
  }

  &:focus-visible {
    outline: 3px solid rgba(73, 170, 183, 0.28);
    outline-offset: 3px;
  }

  ${reducedMotion}
`;

export const CtaSecondaryButton = styled.a`
  display: inline-flex;
  min-height: 46px;
  padding: 0 20px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.rounded};
  color: ${({ theme }) => theme.colors.textPrimary};
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 700;
  transition:
    border-color 200ms ease,
    background-color 200ms ease,
    box-shadow 200ms ease,
    color 200ms ease,
    transform 200ms ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    background-color: rgba(73, 170, 183, 0.07);
    box-shadow: 0 10px 24px rgba(15, 61, 70, 0.08);
    color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-2px);
  }

  &:hover svg {
    transform: rotate(-8deg) scale(1.1);
  }

  svg {
    transition: transform 200ms ease;
  }

  &:focus-visible {
    outline: 3px solid rgba(73, 170, 183, 0.24);
    outline-offset: 3px;
  }

  ${reducedMotion}
`;