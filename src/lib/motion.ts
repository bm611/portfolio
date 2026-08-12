import { Variants, useReducedMotion } from 'framer-motion';

export const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export const cardReveal: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

export const menuPanel: Variants = {
  hidden: { opacity: 0, y: -10, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 280, damping: 24 },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.2 },
  },
};

export const stagger = (staggerChildren = 0.1, delayChildren = 0): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const hoverSpring = {
  type: 'spring',
  stiffness: 300,
  damping: 24,
  mass: 0.65,
};

export const iconSpring = {
  type: 'spring',
  stiffness: 360,
  damping: 18,
};

export const useMotionConfig = () => {
  const prefersReducedMotion = useReducedMotion();
  const reduced = Boolean(prefersReducedMotion);

  return {
    reduced,
    hoverCard: reduced
      ? { y: -2 }
      : {
          y: -4,
          transition: hoverSpring,
        },
    tapCard: reduced ? { scale: 0.995 } : { scale: 0.98 },
    hoverMedia: reduced
      ? { scale: 1.01 }
      : {
          scale: 1.03,
          transition: { type: 'spring', stiffness: 250, damping: 22 },
        },
    hoverIcon: reduced
      ? { scale: 1.01 }
      : {
          x: 2,
          transition: iconSpring,
        },
  };
};
