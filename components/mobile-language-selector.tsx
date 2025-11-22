'use client';
import { Link } from '@/i18n/navigation';
import React from 'react';
import { Globe, Check } from 'lucide-react';
import { useLocale } from 'next-intl';
import { cn } from '@/lib/utils';

interface MobileLanguageSwitcherProps {
  onLanguageChange?: () => void;
  className?: string;
}

const MobileLanguageSwitcher = ({ onLanguageChange, className }: MobileLanguageSwitcherProps) => {
  const currentLocale = useLocale();

  const languages = [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'fr', name: 'French', nativeName: 'Français' },
  ];

  const currentLanguage = languages.find(lang => lang.code === currentLocale) || languages[0];

  const handleLanguageClick = () => {
    if (onLanguageChange) {
      onLanguageChange();
    }
  };

  return (
    <div className={cn('w-full', className)}>
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-4 border-b border-border">
        <Globe className="w-5 h-5 text-muted-foreground" />
        <span className="font-semibold text-sm text-foreground">Language</span>
        <span className="text-xs text-muted-foreground ml-auto">
          {currentLanguage.nativeName}
        </span>
      </div>
      
      {/* Language Options */}
      <div className="space-y-2 p-2">
        {languages.map((language) => (
          <Link
            key={language.code}
            href="/"
            locale={language.code}
            className={cn(
              'flex items-center justify-between w-full px-4 py-4 rounded-xl text-sm transition-all duration-200',
              'hover:bg-accent hover:text-accent-foreground border border-transparent',
              'active:scale-[0.98] active:bg-accent/80',
              'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background',
              currentLocale === language.code
                ? 'bg-primary text-primary-foreground font-medium border-primary shadow-lg shadow-primary/20'
                : 'text-foreground hover:border-border'
            )}
            onClick={handleLanguageClick}
          >
            <div className="flex items-center gap-3">
              <span className="text-base font-medium">{language.nativeName}</span>
              <span className={cn(
                'text-xs',
                currentLocale === language.code ? 'text-primary-foreground/80' : 'text-muted-foreground'
              )}>
                {language.name}
              </span>
            </div>
            
            {currentLocale === language.code && (
              <Check className="w-5 h-5 text-primary-foreground" />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileLanguageSwitcher;