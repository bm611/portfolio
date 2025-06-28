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
      className="relative w-16 h-8 rounded-full bg-gradient-to-r from-light-300 to-light-400 dark:from-dark-700 dark:to-dark-600 border border-light-400 dark:border-dark-500 hover:border-primary-light dark:hover:border-neon transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-light/50 dark:focus:ring-neon/50 shadow-inner"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {/* Background gradient overlay */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-400/20 via-purple-400/20 to-indigo-500/20 dark:from-blue-500/20 dark:via-purple-500/20 dark:to-indigo-500/20"
        animate={{
          opacity: isDark ? 1 : 0.7,
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Sliding toggle circle */}
      <motion.div
        className="absolute top-0.5 w-7 h-7 rounded-full bg-gradient-to-br from-white to-light-100 dark:from-dark-800 dark:to-dark-900 border border-light-300 dark:border-dark-600 shadow-lg flex items-center justify-center"
        animate={{
          x: isDark ? 32 : 2,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      >
        {/* Icon container with rotation animation */}
        <motion.div
          animate={{
            rotate: isDark ? 180 : 0,
            scale: isDark ? 1.1 : 1,
          }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
          }}
          className="flex items-center justify-center"
        >
          {isDark ? (
            <Moon className="w-4 h-4 text-indigo-600 dark:text-neon" />
          ) : (
            <Sun className="w-4 h-4 text-indigo-600" />
          )}
        </motion.div>
      </motion.div>

      {/* Background icons */}
      <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none">
        <motion.div
          animate={{
            opacity: isDark ? 0.3 : 0.6,
            scale: isDark ? 0.8 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          <Sun className="w-3 h-3 text-indigo-500" />
        </motion.div>
        <motion.div
          animate={{
            opacity: isDark ? 0.6 : 0.3,
            scale: isDark ? 1 : 0.8,
          }}
          transition={{ duration: 0.3 }}
        >
          <Moon className="w-3 h-3 text-indigo-400 dark:text-neon" />
        </motion.div>
      </div>

      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          boxShadow: isDark 
            ? "0 0 20px rgba(180, 254, 59, 0.3), inset 0 0 20px rgba(180, 254, 59, 0.1)"
            : "0 0 20px rgba(99, 102, 241, 0.3), inset 0 0 20px rgba(99, 102, 241, 0.1)",
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
};

export default ThemeToggle;