import React from 'react';
import { HTMLMotionProps, motion } from 'framer-motion';
import { useMotionConfig } from '../../lib/motion';

export type CardTone = 'beige' | 'paper' | 'terracotta' | 'slate' | 'forest';

export interface PortfolioCardProps extends HTMLMotionProps<'article'> {
  tone?: CardTone;
  interactive?: boolean;
}

const toneClassMap: Record<CardTone, string> = {
  beige: 'tone-beige',
  paper: 'tone-paper',
  terracotta: 'tone-terracotta',
  slate: 'tone-slate',
  forest: 'tone-forest',
};

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  tone = 'beige',
  interactive = true,
  className = '',
  children,
  whileHover,
  whileTap,
  ...rest
}) => {
  const { hoverCard, tapCard } = useMotionConfig();

  return (
    <motion.article
      className={`e-card ${toneClassMap[tone]} ${interactive ? 'e-card-interactive' : ''} ${className}`.trim()}
      whileHover={interactive ? whileHover ?? hoverCard : whileHover}
      whileTap={interactive ? whileTap ?? tapCard : whileTap}
      {...rest}
    >
      {children}
    </motion.article>
  );
};

export default PortfolioCard;
