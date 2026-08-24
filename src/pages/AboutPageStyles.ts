import styled, { css, keyframes } from 'styled-components';

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

const fadeRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(36px);
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
    transform: translateY(-9px);
  }
`;

const pulse = keyframes`
  0%,
  100% {
    box-shadow: 0 0 0 0 rgba(73, 170, 183, 0.18);
  }

  50% {
    box-shadow: 0 0 0 10px rgba(73, 170, 183, 0);
  }
`;

const imageZoom = keyframes`
  from {
    transform: scale(1.07);
  }

  to {
    transform: scale(1);
  }
`;

const shimmer = keyframes`
  from {
    transform: translateX(-150%) skewX(-18deg);
  }

  to {
    transform: translateX(260%) skewX(-18deg);
  }
`;

const reducedMotion = css`
  @media (prefers-reduced-motion: reduce) {
    animation: none;
    transition-duration: 0.01ms;
  }
`;

export const AboutSection = styled.main`
  position: relative;
  width: 100%;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.background};

  &::before {
    position: absolute;
    top: -170px;
    right: -170px;
    width: 440px;
    height: 440px;
    border-radius: 50%;
    background: rgba(73, 170, 183, 0.11);
    content: '';
    filter: blur(28px);
    pointer-events: none;
    animation: ${floating} 8s ease-in-out infinite;
  }

  &::after {
    position: absolute;
    top: 720px;
    left: -220px;
    width: 410px;
    height: 410px;
    border: 70px solid rgba(73, 170, 183, 0.035);
    border-radius: 50%;
    content: '';
    pointer-events: none;
  }

  ${reducedMotion}
`;

export const AboutContainer = styled.div`
  position: relative;
  z-index: 1;
  width: min(
    calc(100% - 48px),
    ${({ theme }) => theme.container.maxWidth}
  );
  margin: 0 auto;
  padding: 72px 0 88px;

  @media (max-width: 768px) {
    width: calc(100% - 32px);
    padding: 52px 0 64px;
  }

  @media (max-width: 480px) {
    width: calc(100% - 24px);
    padding: 40px 0 52px;
  }
`;

export const AboutHero = styled.section`
  display: grid;
  padding: 44px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 30px;
  background:
    radial-gradient(
      circle at top right,
      rgba(73, 170, 183, 0.13),
      transparent 36%
    ),
    linear-gradient(
      135deg,
      ${({ theme }) => theme.colors.background} 0%,
      ${({ theme }) => theme.colors.backgroundSoft} 100%
    );
  box-shadow: 0 22px 65px rgba(15, 61, 70, 0.07);
  grid-template-columns: minmax(0, 1fr) minmax(390px, 0.85fr);
  align-items: center;
  gap: 58px;
  animation: ${fadeUp} 700ms ease both;

  ${reducedMotion}

  @media (max-width: 1020px) {
    padding: 36px;
    grid-template-columns: 1fr;
    gap: 40px;
  }

  @media (max-width: 600px) {
    padding: 26px 22px;
    border-radius: 24px;
  }
`;

export const AboutTextContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 680px;
  animation: ${fadeUp} 700ms ease 120ms both;

  ${reducedMotion}
`;

export const AboutEyebrow = styled.span`
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

export const AboutTitle = styled.h1`
  max-width: 760px;
  margin-top: 16px;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: clamp(38px, 4.2vw, 62px);
  font-weight: 700;
  line-height: 1.07;
  letter-spacing: -0.045em;

  span {
    color: ${({ theme }) => theme.colors.primaryDark};
  }

  @media (max-width: 480px) {
    font-size: 35px;
    letter-spacing: -0.035em;
  }
`;

export const AboutDescription = styled.p`
  max-width: 650px;
  margin-top: 24px;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 16px;
  line-height: 1.8;
  animation: ${fadeUp} 700ms ease 220ms both;

  ${reducedMotion}

  @media (max-width: 480px) {
    font-size: 15px;
    line-height: 1.72;
  }
`;

export const StatisticsContainer = styled.div`
  display: grid;
  max-width: 580px;
  margin-top: 34px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;

  > * {
    opacity: 0;
    animation: ${fadeUp} 600ms ease both;
  }

  > *:nth-child(1) {
    animation-delay: 300ms;
  }

  > *:nth-child(2) {
    animation-delay: 400ms;
  }

  > *:nth-child(3) {
    animation-delay: 500ms;
  }

  ${reducedMotion}

  @media (max-width: 540px) {
    grid-template-columns: 1fr;
  }
`;

export const StatisticItem = styled.div`
  position: relative;
  padding: 20px 18px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 18px;
  background-color: rgba(255, 255, 255, 0.72);
  transition:
    background-color 240ms ease,
    border-color 240ms ease,
    box-shadow 240ms ease,
    transform 240ms ease;

  &::before {
    position: absolute;
    top: 0;
    right: 20px;
    left: 20px;
    height: 3px;
    border-radius: 0 0 999px 999px;
    background: linear-gradient(
      90deg,
      transparent,
      ${({ theme }) => theme.colors.primary},
      transparent
    );
    content: '';
    opacity: 0.55;
  }

  &:hover {
    border-color: rgba(73, 170, 183, 0.42);
    background-color: ${({ theme }) => theme.colors.background};
    box-shadow: 0 18px 38px rgba(15, 61, 70, 0.1);
    transform: translateY(-6px);
  }

  strong {
    display: block;
    color: ${({ theme }) => theme.colors.primaryDark};
    font-size: 27px;
    line-height: 1;
    transition: transform 220ms ease;
  }

  &:hover strong {
    transform: scale(1.07);
  }

  span {
    display: block;
    margin-top: 9px;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 12px;
  }

  ${reducedMotion}
`;

export const AboutImageContainer = styled.div`
  position: relative;
  animation: ${fadeRight} 800ms ease 220ms both;

  ${reducedMotion}

  @media (max-width: 1020px) {
    width: min(100%, 680px);
  }
`;

export const AboutImageFrame = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 30px;

  &::before {
    position: absolute;
    z-index: 2;
    top: -55%;
    left: -45%;
    width: 30%;
    height: 210%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.35),
      transparent
    );
    content: '';
    pointer-events: none;
    transform: skewX(-18deg);
    animation: ${shimmer} 6s ease-in-out 1.4s infinite;
  }

  &::after {
    position: absolute;
    z-index: 1;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(10, 31, 38, 0.01),
      rgba(10, 31, 38, 0.22)
    );
    content: '';
    pointer-events: none;
  }

  ${reducedMotion}

  @media (max-width: 480px) {
    border-radius: 22px;
  }
`;

export const AboutImage = styled.img`
  display: block;
  width: 100%;
  min-height: 520px;
  box-shadow: ${({ theme }) => theme.shadows.large};
  object-fit: cover;
  object-position: center;
  animation: ${imageZoom} 1.1s ease both;
  transition:
    filter 600ms ease,
    transform 700ms cubic-bezier(0.2, 0.8, 0.2, 1);

  ${AboutImageFrame}:hover & {
    filter: saturate(1.05) contrast(1.02);
    transform: scale(1.055);
  }

  ${reducedMotion}

  @media (max-width: 1020px) {
    min-height: auto;
    aspect-ratio: 4 / 3;
  }
`;

export const AboutImageBadge = styled.div`
  position: absolute;
  z-index: 3;
  top: 20px;
  left: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  @media (max-width: 480px) {
    top: 14px;
    left: 14px;
  }
`;

export const AboutImageBadgeItem = styled.span`
  display: inline-flex;
  min-height: 34px;
  padding: 0 12px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 999px;
  background-color: rgba(255, 255, 255, 0.88);
  box-shadow: 0 8px 20px rgba(15, 61, 70, 0.1);
  color: ${({ theme }) => theme.colors.textPrimary};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  align-items: center;
  gap: 7px;
  font-size: 11px;
  font-weight: 700;

  svg {
    color: ${({ theme }) => theme.colors.primaryDark};
  }
`;

export const AboutImageInfo = styled.div`
  position: absolute;
  z-index: 4;
  right: -22px;
  bottom: 28px;
  display: flex;
  min-width: 230px;
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 18px;
  background-color: rgba(255, 255, 255, 0.94);
  box-shadow: ${({ theme }) => theme.shadows.medium};
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  align-items: center;
  gap: 12px;
  animation: ${floating} 4.5s ease-in-out infinite;
  transition:
    box-shadow 250ms ease,
    transform 250ms ease;

  &:hover {
    box-shadow: 0 24px 50px rgba(15, 61, 70, 0.16);
    transform: translateY(-4px);
  }

  ${reducedMotion}

  @media (max-width: 1020px) {
    right: 18px;
  }

  @media (max-width: 480px) {
    position: relative;
    right: auto;
    bottom: auto;
    width: 100%;
    margin-top: 14px;
    animation: none;
  }
`;

export const AboutImageInfoIcon = styled.div`
  display: flex;
  width: 46px;
  height: 46px;
  flex-shrink: 0;
  border-radius: 14px;
  background-color: ${({ theme }) => theme.colors.accentSoft};
  color: ${({ theme }) => theme.colors.primaryDark};
  align-items: center;
  justify-content: center;
  animation: ${pulse} 2.8s ease-in-out infinite;

  ${reducedMotion}
`;

export const AboutImageInfoText = styled.div`
  strong {
    display: block;
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: 14px;
  }

  span {
    display: block;
    margin-top: 3px;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 11px;
  }
`;

export const MissionCards = styled.section`
  display: grid;
  margin-top: 82px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 22px;

  > * {
    opacity: 0;
    animation: ${fadeUp} 650ms ease both;
  }

  > *:nth-child(1) {
    animation-delay: 120ms;
  }

  > *:nth-child(2) {
    animation-delay: 240ms;
  }

  ${reducedMotion}

  @media (max-width: 720px) {
    margin-top: 58px;
    grid-template-columns: 1fr;
  }
`;

export const MissionCard = styled.article`
  position: relative;
  padding: 30px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 24px;
  background:
    radial-gradient(
      circle at top right,
      rgba(73, 170, 183, 0.08),
      transparent 38%
    ),
    linear-gradient(
      145deg,
      ${({ theme }) => theme.colors.backgroundSoft},
      ${({ theme }) => theme.colors.background}
    );
  transition:
    border-color 280ms ease,
    box-shadow 280ms ease,
    transform 280ms ease;

  &::after {
    position: absolute;
    right: -45px;
    bottom: -55px;
    width: 140px;
    height: 140px;
    border: 25px solid rgba(73, 170, 183, 0.05);
    border-radius: 50%;
    content: '';
    pointer-events: none;
    transition: transform 500ms ease;
  }

  &:hover {
    border-color: rgba(73, 170, 183, 0.4);
    box-shadow: 0 24px 55px rgba(15, 61, 70, 0.12);
    transform: translateY(-7px);
  }

  &:hover::after {
    transform: rotate(18deg) scale(1.1);
  }

  ${reducedMotion}
`;

export const MissionIcon = styled.div`
  display: flex;
  width: 48px;
  height: 48px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.accentSoft};
  color: ${({ theme }) => theme.colors.primaryDark};
  align-items: center;
  justify-content: center;
  transition:
    background-color 220ms ease,
    color 220ms ease,
    transform 220ms ease;

  ${MissionCard}:hover & {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.textWhite};
    transform: translateY(-3px) scale(1.08);
  }

  ${reducedMotion}
`;

export const MissionTitle = styled.h2`
  position: relative;
  z-index: 1;
  margin-top: 18px;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 23px;
  transition:
    color 200ms ease,
    transform 200ms ease;

  ${MissionCard}:hover & {
    color: ${({ theme }) => theme.colors.primaryDark};
    transform: translateX(3px);
  }
`;

export const MissionDescription = styled.p`
  position: relative;
  z-index: 1;
  margin-top: 12px;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 14px;
  line-height: 1.75;
`;

export const StorySection = styled.section`
  position: relative;
  margin-top: 82px;
  padding: 50px;
  overflow: hidden;
  border: 1px solid rgba(73, 170, 183, 0.13);
  border-radius: 28px;
  background:
    radial-gradient(
      circle at right top,
      ${({ theme }) => theme.colors.accentSoft},
      transparent 42%
    ),
    ${({ theme }) => theme.colors.backgroundMuted};
  box-shadow: 0 20px 50px rgba(15, 61, 70, 0.06);
  animation: ${scaleIn} 700ms ease both;

  &::after {
    position: absolute;
    right: -90px;
    bottom: -120px;
    width: 280px;
    height: 280px;
    border: 45px solid rgba(73, 170, 183, 0.06);
    border-radius: 50%;
    content: '';
    pointer-events: none;
  }

  ${reducedMotion}

  @media (max-width: 600px) {
    margin-top: 58px;
    padding: 30px 22px;
  }
`;

export const StoryContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 760px;
`;

export const StoryEyebrow = styled(AboutEyebrow)``;

export const StoryTitle = styled.h2`
  margin-top: 14px;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: clamp(30px, 3vw, 44px);
  line-height: 1.13;
  letter-spacing: -0.035em;
`;

export const StoryDescription = styled.p`
  margin-top: 18px;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 15px;
  line-height: 1.8;
`;

export const AboutContent = styled.section`
  margin-top: 82px;

  ${AboutTitle} {
    max-width: 780px;
    font-size: clamp(32px, 3vw, 46px);
  }

  @media (max-width: 600px) {
    margin-top: 58px;
  }
`;

export const AboutValues = styled.div`
  display: grid;
  margin-top: 32px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;

  > * {
    opacity: 0;
    animation: ${fadeUp} 620ms ease both;
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

  ${reducedMotion}

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

export const AboutValueCard = styled.article`
  position: relative;
  height: 100%;
  padding: 24px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0 8px 25px rgba(15, 61, 70, 0.035);
  transition:
    border-color 260ms ease,
    box-shadow 260ms ease,
    transform 260ms ease;

  &::before {
    position: absolute;
    top: 0;
    right: 0;
    width: 90px;
    height: 90px;
    border-radius: 0 0 0 100%;
    background-color: rgba(73, 170, 183, 0.045);
    content: '';
    transition: transform 400ms ease;
  }

  &:hover {
    border-color: rgba(73, 170, 183, 0.4);
    box-shadow: 0 24px 50px rgba(15, 61, 70, 0.12);
    transform: translateY(-7px);
  }

  &:hover::before {
    transform: scale(1.2);
  }

  ${reducedMotion}
`;

export const AboutValueIcon = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  width: 44px;
  height: 44px;
  border-radius: 14px;
  background-color: ${({ theme }) => theme.colors.accentSoft};
  color: ${({ theme }) => theme.colors.primaryDark};
  align-items: center;
  justify-content: center;
  transition:
    background-color 220ms ease,
    color 220ms ease,
    transform 220ms ease;

  ${AboutValueCard}:hover & {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.textWhite};
    transform: rotate(-5deg) scale(1.1);
  }

  ${reducedMotion}
`;

export const AboutValueTitle = styled.h3`
  position: relative;
  z-index: 1;
  margin-top: 18px;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 17px;
  transition:
    color 200ms ease,
    transform 200ms ease;

  ${AboutValueCard}:hover & {
    color: ${({ theme }) => theme.colors.primaryDark};
    transform: translateX(3px);
  }
`;

export const AboutValueText = styled.p`
  position: relative;
  z-index: 1;
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 13px;
  line-height: 1.7;
`;