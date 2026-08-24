import type { ReactNode } from 'react';
import { motion } from 'motion/react';
import { useLocation } from 'react-router-dom';

import { pageTransitionVariants } from '../../services/pageTransitions';
import { getPageTransitionType } from '../../utils/getPageTransitionType';

interface PageTransitionProps {
  children: ReactNode;
}

const sparkleItems = [
  {
    id: 1,
    top: '20%',
    left: '16%',
    size: 22,
    delay: 0,
  },
  {
    id: 2,
    top: '31%',
    left: '76%',
    size: 14,
    delay: 0.08,
  },
  {
    id: 3,
    top: '52%',
    left: '40%',
    size: 18,
    delay: 0.14,
  },
  {
    id: 4,
    top: '68%',
    left: '82%',
    size: 12,
    delay: 0.2,
  },
  {
    id: 5,
    top: '76%',
    left: '22%',
    size: 14,
    delay: 0.26,
  },
];

function TransitionSparkles({
  pathname,
}: {
  pathname: string;
}) {
  return (
    <>
      {sparkleItems.map((sparkle) => (
        <motion.span
          key={`${pathname}-${sparkle.id}`}
          initial={{
            opacity: 0,
            scale: 0,
            rotate: -15,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.2, 0],
            rotate: [-15, 10, 25],
          }}
          transition={{
            duration: 0.65,
            delay: sparkle.delay,
            ease: 'easeOut',
          }}
          style={{
            position: 'fixed',
            top: sparkle.top,
            left: sparkle.left,
            zIndex: 10000,
            width: sparkle.size,
            height: sparkle.size,
            pointerEvents: 'none',
            filter:
              'drop-shadow(0 0 6px rgba(140, 201, 205, 0.7))',
          }}
        >
          <span
            style={{
              position: 'absolute',
              top: '50%',
              left: 0,
              width: '100%',
              height: '2px',
              borderRadius: '999px',
              background:
                'linear-gradient(90deg, transparent, #8CC9CD, #FFFFFF, #8CC9CD, transparent)',
              transform: 'translateY(-50%)',
            }}
          />

          <span
            style={{
              position: 'absolute',
              top: 0,
              left: '50%',
              width: '2px',
              height: '100%',
              borderRadius: '999px',
              background:
                'linear-gradient(180deg, transparent, #8CC9CD, #FFFFFF, #8CC9CD, transparent)',
              transform: 'translateX(-50%)',
            }}
          />

          <span
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '5px',
              height: '5px',
              borderRadius: '50%',
              background: '#FFFFFF',
              boxShadow:
                '0 0 10px rgba(140, 201, 205, 0.9)',
              transform: 'translate(-50%, -50%)',
            }}
          />
        </motion.span>
      ))}
    </>
  );
}

function PageTransition({
  children,
}: PageTransitionProps) {
  const location = useLocation();

  const transitionType =
    getPageTransitionType(location.pathname);

  const pageVariants =
    pageTransitionVariants[transitionType];

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
      }}
    >
      <TransitionSparkles
        pathname={location.pathname}
      />

      <motion.main
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          duration: 0.38,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{
          width: '100%',
        }}
      >
        {children}
      </motion.main>
    </div>
  );
}

export default PageTransition;