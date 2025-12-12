"use client";
import React from "react";
import { Sun, Moon, Monitor, Check } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

interface MobileThemeSwitcherProps {
  onThemeChange?: () => void;
  className?: string;
}

const MobileThemeSwitcher = ({
  onThemeChange,
  className,
}: MobileThemeSwitcherProps) => {
  const { theme, setTheme, systemTheme } = useTheme();

  const themes = [
    { value: "light", label: "Light", icon: Sun, description: "Light mode" },
    { value: "dark", label: "Dark", icon: Moon, description: "Dark mode" },
    {
      value: "system",
      label: "System",
      icon: Monitor,
      description: "Follow device",
    },
  ] as const;

  const currentTheme = themes.find((t) => t.value === theme) || themes[2];

  const handleThemeClick = (themeValue: string) => {
    setTheme(themeValue);
    if (onThemeChange) {
      onThemeChange();
    }
  };

  return (
    <div className={cn("w-full", className)}>
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-4 border-b border-border">
        <currentTheme.icon className="w-5 h-5 text-muted-foreground" />
        <span className="font-semibold text-sm text-foreground">Theme</span>
        <span className="text-xs text-muted-foreground ml-auto capitalize">
          {theme === "system" ? `System (${systemTheme})` : theme}
        </span>
      </div>

      {/* Theme Options */}
      <div className="space-y-2 p-2">
        {themes.map((themeOption) => {
          const Icon = themeOption.icon;
          const isSelected = theme === themeOption.value;

          return (
            <button
              key={themeOption.value}
              onClick={() => handleThemeClick(themeOption.value)}
              className={cn(
                "flex items-center justify-between w-full px-4 py-4 rounded-xl text-sm transition-all duration-200",
                "hover:bg-accent hover:text-accent-foreground border border-transparent",
                "active:scale-[0.98] active:bg-accent/80",
                "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background",
                isSelected
                  ? "bg-primary text-primary-foreground font-medium border-primary shadow-lg shadow-primary/20"
                  : "text-foreground hover:border-border",
              )}
            >
              <div className="flex items-center gap-4 flex-1">
                <div
                  className={cn(
                    "p-2 rounded-lg transition-colors",
                    isSelected ? "bg-primary-foreground/20" : "bg-muted",
                  )}
                >
                  <Icon
                    className={cn(
                      "w-4 h-4 transition-colors",
                      isSelected
                        ? "text-primary-foreground"
                        : "text-muted-foreground",
                    )}
                  />
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-base font-medium">
                    {themeOption.label}
                  </span>
                  <span
                    className={cn(
                      "text-xs text-left mt-0.5",
                      isSelected
                        ? "text-primary-foreground/80"
                        : "text-muted-foreground",
                    )}
                  >
                    {themeOption.description}
                  </span>
                </div>
              </div>

              {isSelected && (
                <Check className="w-5 h-5 text-primary-foreground flex-shrink-0" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default MobileThemeSwitcher;
