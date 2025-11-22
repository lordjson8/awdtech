'use client';
import { Link } from '@/i18n/navigation';
import React from 'react';
import { Globe } from 'lucide-react';
import { useLocale } from 'next-intl';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const LanguageButton = () => {
  const currentLocale = useLocale();

  const languages = [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'fr', name: 'French', nativeName: 'Français' },
  ];

  const currentLanguage = languages.find(lang => lang.code === currentLocale) || languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="sm"
          className="flex items-center gap-2 bg-black border-gray-600 text-white hover:text-white hover:bg-gray-900"
        >
          <Globe className="w-4 h-4" />
          <span>{currentLanguage.code.toUpperCase()}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="w-48 bg-black border-gray-600 text-white"
      >
        {languages.map((language) => (
          <DropdownMenuItem key={language.code} asChild>
            <Link
              href="/"
              locale={language.code}
              className={`flex items-center justify-between cursor-pointer ${
                currentLocale === language.code ? 'text-blue-400 bg-gray-800' : ''
              }`}
            >
              <span>{language.nativeName}</span>
              <span className="text-xs text-gray-400">{language.name}</span>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageButton;