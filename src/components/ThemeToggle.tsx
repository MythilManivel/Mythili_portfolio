import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

type Theme = 'light' | 'dark';

const getInitialTheme = (): Theme => {
  if (typeof window === 'undefined') return 'light';

  const stored = window.localStorage.getItem('theme');
  if (stored === 'light' || stored === 'dark') return stored;

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
};

const applyThemeClass = (theme: Theme) => {
  const root = document.documentElement;
  if (theme === 'dark') {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
};

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme());

  useEffect(() => {
    setMounted(true);
    applyThemeClass(theme);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    applyThemeClass(theme);
    window.localStorage.setItem('theme', theme);
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const label =
    theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="icon-button w-10 h-10"
      aria-label={label}
    >
      <span className="relative inline-flex items-center justify-center">
        <Sun
          className={`w-4 h-4 absolute transition-all duration-300 ${
            theme === 'dark'
              ? 'scale-0 opacity-0 rotate-90'
              : 'scale-100 opacity-100 rotate-0'
          }`}
        />
        <Moon
          className={`w-4 h-4 absolute transition-all duration-300 ${
            theme === 'dark'
              ? 'scale-100 opacity-100 rotate-0'
              : 'scale-0 opacity-0 -rotate-90'
          }`}
        />
      </span>
    </button>
  );
};

export default ThemeToggle;
