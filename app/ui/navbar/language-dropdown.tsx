'use client';

import { LanguageSkillIcon } from 'hugeicons-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { type Locale, useLocale } from 'next-intl';
import { type KeyboardEvent, useEffect, useRef, useState } from 'react';
import { useScrolled } from '@/app/lib/hooks/use-scroll';
import { usePathname, useRouter } from '@/i18n/navigation';

type Props = {
  usFlagDescription?: string | null;
  deFlagDescription?: string | null;
  englishLabel?: string | null;
  germanLabel?: string | null;
  switchLanguageLabel?: string | null;
};

export default function LanguageDropdown({
  usFlagDescription,
  deFlagDescription,
  englishLabel,
  germanLabel,
  switchLanguageLabel,
}: Props) {
  const scrolled = useScrolled();
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>(null);

  const handleLocaleChange = (newLocale: Locale) => {
    router.replace({ pathname }, { locale: newLocale, scroll: false });
    setOpen(false);
  };

  const handleKeyDown = (
    e: KeyboardEvent<HTMLButtonElement | HTMLDivElement>,
  ) => {
    if (e.key === 'Escape') {
      setOpen(false);
    }
    if (e.key === 'Enter') {
      const target = e.target as HTMLElement;
      if (target.dataset.language) {
        handleLocaleChange(target.dataset.language as Locale);
      }
    }
  };

  const handleMouseEnter = () => {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      return;
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpen(true);
  };

  const handleMouseLeave = () => {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      return;
    }
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 200);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    // biome-ignore lint/a11y/noStaticElementInteractions: Container is only used for hover events and does not require keyboard accessibility
    <div
      className="relative"
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`rounded-2xl backdrop-blur duration-1000 ${
          scrolled ? 'bg-(--overlay-color)' : ''
        }`}
      >
        <button
          type="button"
          id="dropdownLanguageButton"
          onClick={() => setOpen((prevState) => !prevState)}
          onKeyDown={handleKeyDown}
          className="base-border hover-effect rounded-2xl p-2"
          aria-haspopup
          aria-expanded={open}
          aria-controls="dropdown"
          aria-label={switchLanguageLabel || ''}
        >
          <LanguageSkillIcon size={22} />
        </button>
      </div>
      <motion.div
        id="dropdown"
        className={`base-border absolute z-10 mt-2 w-32 rounded-2xl p-0 font-medium backdrop-blur transition-colors duration-1000 ${
          scrolled ? 'bg-(--overlay-color)' : ''
        }`}
        initial={{ opacity: 0, visibility: 'hidden' }}
        animate={
          open
            ? { opacity: 1, visibility: 'initial' }
            : { opacity: 0, visibility: 'hidden' }
        }
      >
        <div
          className="space-y-1 p-1 text-sm"
          role="menu"
          aria-labelledby="dropdownLanguageButton"
        >
          <div
            className={`flex items-center rounded-xl pl-3 ${locale === 'en' ? 'text-(--secondary)' : 'hover-effect'}`}
            role="menuitem"
            tabIndex={0}
            data-language="en"
            onClick={() => handleLocaleChange('en')}
            onKeyDown={handleKeyDown}
            aria-current={locale === 'en'}
          >
            <Image
              className={`glow-effect ${locale === 'en' ? 'grayscale-75' : ''}`}
              src="/flag-us.svg"
              alt={usFlagDescription || ''}
              width={30}
              height={30}
            />
            <span className="block px-3 py-2">{englishLabel}</span>
          </div>
          {/* Removed German option */}
        </div>
      </motion.div>
    </div>
  );
}
