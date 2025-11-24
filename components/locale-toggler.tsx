'use client';
import { Link } from '@/i18n/navigation';
import React from 'react';
import { Globe, Check } from 'lucide-react';
import { useLocale } from 'next-intl';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
          className={cn(
            "flex items-center gap-2",
            "bg-background border-border text-foreground",
            "hover:bg-accent hover:text-accent-foreground",
            "transition-colors duration-200"
          )}
        >
          <Globe className="w-4 h-4" />
          <span>{currentLanguage.code.toUpperCase()}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="w-48 bg-background border-border"
      >
        {languages.map((language) => {
          const isSelected = currentLocale === language.code;
          
          return (
            <DropdownMenuItem key={language.code} asChild className="p-0">
              <Link
                href="/"
                locale={language.code}
                className={cn(
                  "flex items-center justify-between w-full px-2 py-1.5 cursor-pointer",
                  "text-foreground hover:bg-accent hover:text-accent-foreground",
                  "transition-colors duration-200",
                  isSelected && "bg-accent text-accent-foreground"
                )}
              >
                <div className="flex items-center gap-2 flex-1">
                  {isSelected && (
                    <Check className="w-3 h-3 text-primary flex-shrink-0" />
                  )}
                  <span className={cn(
                    "flex-1",
                    !isSelected && "ml-5" // Offset for when checkmark isn't shown
                  )}>
                    {language.nativeName}
                  </span>
                </div>
                <span className={cn(
                  "text-xs",
                  isSelected ? "text-primary-foreground/70" : "text-muted-foreground"
                )}>
                  {language.name}
                </span>
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageButton;