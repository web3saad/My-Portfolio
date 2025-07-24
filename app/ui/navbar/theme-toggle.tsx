'use client';

import { Loading03Icon, Moon02Icon, Sun03Icon } from 'hugeicons-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { useScrolled } from '@/app/lib/hooks/use-scroll';

type Props = {
  switchThemeLabel?: string | null;
};

export default function ThemeToggle({ switchThemeLabel }: Props) {
  const [mounted, setMounted] = useState(false);
  const scrolled = useScrolled();
  const { theme, systemTheme, setTheme } = useTheme();
  const isDark =
    theme === 'dark' || (theme === 'system' && systemTheme === 'dark');

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  return !mounted ? (
    <button type="button" className="base-border rounded-2xl p-2 backdrop-blur">
      <Loading03Icon size={22} />
    </button>
  ) : (
    <div
      className={`rounded-2xl backdrop-blur duration-1000 ${
        scrolled ? 'bg-(--overlay-color)' : ''
      }`}
    >
      <button
        type="button"
        onClick={toggleTheme}
        className="hover-effect base-border rounded-2xl p-2"
        aria-label={switchThemeLabel || undefined}
      >
        {isDark ? <Sun03Icon size={22} /> : <Moon02Icon size={22} />}
      </button>
    </div>
  );
}
