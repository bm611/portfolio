import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative flex items-center justify-center p-2 bg-transparent border-2 border-black dark:border-white text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors focus:outline-none"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase">
        {isDark ? (
          <>
            <Moon className="w-4 h-4" />
            <span className="hidden md:inline">DARK</span>
          </>
        ) : (
          <>
            <Sun className="w-4 h-4" />
            <span className="hidden md:inline">LIGHT</span>
          </>
        )}
      </div>
      
      {/* Brutalist Hard Shadow */}
      <div className="absolute top-0 left-0 w-full h-full bg-transparent -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform"></div>
    </motion.button>
  );
};

export default ThemeToggle;