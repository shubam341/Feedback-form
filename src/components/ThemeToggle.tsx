// src/components/ThemeToggle.tsx

import React from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { Tooltip } from 'react-tooltip';

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

export function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  return (
    <>
      <button
        onClick={onToggle}
        data-tooltip-id="theme-toggle-tooltip"
        data-tooltip-content={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        aria-label="Toggle theme"
      >
        {isDark ? (
          <SunIcon className="h-6 w-6 text-gray-800 dark:text-gray-200 transition-transform duration-300 rotate-180" />
        ) : (
          <MoonIcon className="h-6 w-6 text-gray-800 dark:text-gray-200 transition-transform duration-300 rotate-0" />
        )}
      </button>

      <Tooltip id="theme-toggle-tooltip" />
    </>
  );
}
