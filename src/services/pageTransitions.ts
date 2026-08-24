import type { Variants } from 'motion/react';

import type { PageTransitionType } from './navigation';

export const pageTransitionVariants: Record<
  PageTransitionType,
  Variants
> = {
  home: {
    initial: {
      opacity: 0,
      scale: 0.985,
    },
    animate: {
      opacity: 1,
      scale: 1,
    },
    exit: {
      opacity: 0,
      scale: 1.01,
    },
  },

  services: {
    initial: {
      opacity: 0,
      y: 24,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: -12,
    },
  },

  about: {
    initial: {
      opacity: 0,
      x: -22,
    },
    animate: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      x: 16,
    },
  },

  contact: {
    initial: {
      opacity: 0,
      filter: 'blur(4px)',
    },
    animate: {
      opacity: 1,
      filter: 'blur(0px)',
    },
    exit: {
      opacity: 0,
      filter: 'blur(2px)',
    },
  },
};