import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-2 rounded-full bg-light-200 dark:bg-dark-800 border border-light-400 dark:border-dark-600 hover:border-primary-light dark:hover:border-neon transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-light/50 dark:focus:ring-neon/50"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 90, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-center"
      >
        {theme === 'dark' ? (
          <Sun className="w-5 h-5 text-neon" />
        ) : (
          <Moon className="w-5 h-5 text-primary-light" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;