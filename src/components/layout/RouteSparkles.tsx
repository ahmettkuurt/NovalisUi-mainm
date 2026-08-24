import { motion } from 'motion/react';

interface RouteSparklesProps {
  pathname: string;
}

const sparkles = [
  {
    id: 1,
    top: '16%',
    left: '12%',
    size: 28,
    delay: 0,
  },
  {
    id: 2,
    top: '24%',
    left: '34%',
    size: 16,
    delay: 0.08,
  },
  {
    id: 3,
    top: '20%',
    left: '76%',
    size: 22,
    delay: 0.14,
  },
  {
    id: 4,
    top: '38%',
    left: '18%',
    size: 14,
    delay: 0.2,
  },
  {
    id: 5,
    top: '43%',
    left: '58%',
    size: 26,
    delay: 0.27,
  },
  {
    id: 6,
    top: '50%',
    left: '84%',
    size: 12,
    delay: 0.34,
  },
  {
    id: 7,
    top: '62%',
    left: '30%',
    size: 20,
    delay: 0.4,
  },
  {
    id: 8,
    top: '68%',
    left: '66%',
    size: 15,
    delay: 0.48,
  },
  {
    id: 9,
    top: '78%',
    left: '14%',
    size: 12,
    delay: 0.54,
  },
  {
    id: 10,
    top: '76%',
    left: '82%',
    size: 24,
    delay: 0.6,
  },
];

function RouteSparkles({
  pathname,
}: RouteSparklesProps) {
  return (
    <>
      {sparkles.map((sparkle) => (
        <motion.div
          key={`${pathname}-${sparkle.id}`}
          initial={{
            opacity: 0,
            scale: 0,
            rotate: -20,
          }}
          animate={{
            opacity: [0, 1, 1, 0],
            scale: [0, 1.3, 1, 0],
            rotate: [-20, 0, 20],
          }}
          transition={{
            duration: 0.7,
            delay: sparkle.delay,
            ease: 'easeOut',
          }}
          style={{
            position: 'fixed',

            top: sparkle.top,
            left: sparkle.left,

            zIndex: 99999,

            width: sparkle.size,
            height: sparkle.size,

            pointerEvents: 'none',

            filter:
              'drop-shadow(0 0 7px rgba(140, 201, 205, 0.9))',
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

              width: '6px',
              height: '6px',

              borderRadius: '50%',

              background: '#FFFFFF',

              boxShadow:
                '0 0 12px 4px rgba(140, 201, 205, 0.75)',

              transform:
                'translate(-50%, -50%)',
            }}
          />
        </motion.div>
      ))}
    </>
  );
}

export default RouteSparkles;