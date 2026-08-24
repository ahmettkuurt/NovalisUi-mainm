import styled, { css, keyframes } from 'styled-components';

interface CursorStarProps {
  $isHovering: boolean;
  $isClicking: boolean;
}

const starPulse = keyframes`
  0%,
  100% {
    filter:
      drop-shadow(0 0 4px rgba(52, 126, 137, 0.45))
      drop-shadow(0 0 10px rgba(117, 173, 179, 0.18));
  }

  50% {
    filter:
      drop-shadow(0 0 7px rgba(52, 126, 137, 0.75))
      drop-shadow(0 0 16px rgba(117, 173, 179, 0.35));
  }
`;

export const CursorGlow = styled.div`
  position: fixed;
  z-index: 99998;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(52, 126, 137, 0.16) 0%,
    rgba(117, 173, 179, 0.08) 40%,
    transparent 70%
  );
  pointer-events: none;
  transform: translate(-50%, -50%);
  filter: blur(3px);

  @media (hover: none) {
    display: none;
  }
`;

export const CursorStar = styled.div<CursorStarProps>`
  position: fixed;
  z-index: 99999;
  display: flex;
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.colors.primary};
  pointer-events: none;
  align-items: center;
  justify-content: center;
  font-size: 23px;
  line-height: 1;
  transform: translate(-50%, -50%);
  transform-origin: center;
  animation: ${starPulse} 1.8s ease-in-out infinite;
  transition:
    color 180ms ease,
    font-size 180ms ease,
    transform 100ms ease;

  ${({ $isHovering }) =>
    $isHovering &&
    css`
      color: ${({ theme }) => theme.colors.primaryDark};
      font-size: 32px;
    `}

  ${({ $isClicking }) =>
    $isClicking &&
    css`
      transform:
        translate(-50%, -50%)
        scale(0.72)
        rotate(45deg);
    `}

  @media (hover: none) {
    display: none;
  }
`;