"use client";

import { useRef, useEffect, useState, useCallback, useMemo } from "react";
import { motion, MotionProps } from "framer-motion";
import Container from "../shared/Container";
import { useTranslations } from "next-intl";

// Type definitions
interface Partner {
  id: string;
  name: string;
  logo: string;
  website?: string;
}

interface PartnerMarqueeProps {
  partners: Partner[];
  speed?: number;
  pauseOnHover?: boolean;
  direction?: "left" | "right";
  variant?: "default" | "premium" | "minimal";
  className?: string;
  showStats?: boolean;
  gradientOverlay?: boolean;
}

interface PartnerLogoProps {
  partner: Partner;
  index: number;
  variant?: "default" | "premium" | "minimal";
}

interface MarqueeStats {
  partnersCount: string;
  satisfactionRate: string;
  supportAvailability: string;
}

// Default stats configuration based on PDF
const DEFAULT_STATS: MarqueeStats = {
  partnersCount: "+15",
  satisfactionRate: "95%",
  supportAvailability: "+25",
};

// Partners data from PDF
export const AWD_PARTNERS: Partner[] = [
  {
    id: "1",
    name: "AWDPAY",
    logo: "/partners/awdpay.png",
  },
  {
    id: "2",
    name: "AWDA",
    logo: "/partners/awda.png",
  },
  {
    id: "3",
    name: "AURA",
    logo: "/partners/aura.png",
  },
  {
    id: "4",
    name: "AMNENDLE & TRADING",
    logo: "/partners/amnendle-trading.png",
  },
  {
    id: "5",
    name: "EBEN-NICOLIZE",
    logo: "/partners/eben-nicolize.png",
  },
  {
    id: "6",
    name: "CORSULITIS",
    logo: "/partners/corsulitis.png",
  },
  {
    id: "7",
    name: "ASSISTANCE COMPTABLE, AUDIT ET CONSEILS",
    logo: "/partners/assistance-comptable.png",
  },
];

// Animation variants for different directions
const getMarqueeAnimation = (
  direction: "left" | "right",
  contentWidth: number,
): MotionProps["animate"] => {
  const baseAnimation =
    direction === "left" ? { x: [0, -contentWidth] } : { x: [0, contentWidth] };

  return baseAnimation;
};

const PartnerMarquee: React.FC<PartnerMarqueeProps> = ({
  partners = AWD_PARTNERS,
  speed = 40,
  pauseOnHover = true,
  direction = "left",
  variant = "default",
  className = "",
  showStats = false,
  gradientOverlay = true,
}) => {
  const t = useTranslations("Partners");
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [duplicatedPartners, setDuplicatedPartners] = useState<Partner[]>([]);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [contentWidth, setContentWidth] = useState<number>(1032);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Calculate content width for precise animation
  const calculateContentWidth = useCallback((): number => {
    if (!scrollerRef.current) return 1032;

    const firstChild = scrollerRef.current.firstElementChild as HTMLElement;
    return firstChild ? firstChild.offsetWidth / 2 : 1032;
  }, []);

  // Duplicate partners for seamless loop
  useEffect(() => {
    let rafId: number;
    // eslint-disable-next-line prefer-const
    rafId = window.requestAnimationFrame(() => {
      setIsMounted(true);
      setDuplicatedPartners([...partners, ...partners]);
      setContentWidth(calculateContentWidth());
    });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [partners, calculateContentWidth]);

  // Intersection Observer for performance
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      ([entry]: IntersectionObserverEntry[]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    const currentScroller = scrollerRef.current;
    if (currentScroller) {
      observerRef.current.observe(currentScroller);
    }

    return () => {
      if (observerRef.current && currentScroller) {
        observerRef.current.unobserve(currentScroller);
      }
    };
  }, []);

  // Handle resize for responsive animation
  useEffect(() => {
    const handleResize = (): void => {
      setContentWidth(calculateContentWidth());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [calculateContentWidth]);

  // Loading skeleton
  if (!isMounted) {
    return (
      <div className={`flex space-x-12 opacity-50 ${className}`}>
        {partners.map((partner: Partner, index: number) => (
          <div
            key={partner.id}
            className="shrink-0 grayscale opacity-60 transition-all duration-300"
          >
            <div className="h-20 w-32 bg-linear-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-xl animate-pulse" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <section className={`relative  py-8 overflow-hidden ${className}`}>
      {/* Header Section */}
      {variant !== "minimal" && (
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t("title")}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t("description")}
          </p>
        </div>
      )}

      {/* Marquee Container */}
      <div ref={scrollerRef} className="relative">
        {/* Gradient overlays */}
        {gradientOverlay && (
          <>
            <div
              className={`absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-gray-50 dark:from-gray-900 to-transparent z-10 ${
                direction === "right" ? "opacity-0" : ""
              }`}
            />
            <div
              className={`absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-gray-50 dark:from-gray-900 to-transparent z-10 ${
                direction === "left" ? "opacity-0" : ""
              }`}
            />
          </>
        )}

        {/* Main Marquee */}
        <motion.div
          className="flex space-x-16"
          animate={getMarqueeAnimation(direction, contentWidth)}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: speed,
              ease: "linear",
            },
          }}
          whileHover={pauseOnHover ? { animationPlayState: "paused" } : {}}
        >
          {duplicatedPartners.map((partner: Partner, index: number) => (
            <PartnerLogo
              key={`${partner.id}-${index}`}
              partner={partner}
              index={index}
              variant={variant}
            />
          ))}
        </motion.div>
      </div>

      {/* Stats section */}
      {showStats && variant !== "minimal" && (
        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <StatItem
              value={DEFAULT_STATS.partnersCount}
              label={t("projectsCompleted")}
              icon="🚀"
            />
            <StatItem
              value={DEFAULT_STATS.satisfactionRate}
              label={t("clientSatisfaction")}
              icon="⭐"
            />
            <StatItem
              value={DEFAULT_STATS.supportAvailability}
              label={t("collaborators")}
              icon="👥"
            />
          </div>
        </div>
      )}
    </section>
  );
};

// Partner Logo Component
const PartnerLogo: React.FC<PartnerLogoProps> = ({
  partner,
  index,
  variant = "default",
}) => {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const [imageError, setImageError] = useState<boolean>(false);

  const logoClasses = `
    flex-shrink-0 
    grayscale 
    opacity-70 
    hover:grayscale-0 
    hover:opacity-100 
    transition-all 
    duration-500 
    ease-out
    transform
    hover:scale-105
    group
    ${variant === "premium" ? "p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700" : ""}
    ${!imageLoaded ? "animate-pulse" : ""}
  `;

  const handleImageLoad = (): void => setImageLoaded(true);
  const handleImageError = (): void => setImageError(true);

  return (
    <div className={logoClasses}>
      <div className="relative">
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0  rounded-xl flex items-center justify-center">
            <div className="w-6 h-6 border-2 border-orange-500 border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {imageError ? (
          <div className="w-40 h-20 rounded-xl flex items-center justify-center border border-orange-200 dark:border-orange-800">
            <span className="text-sm font-medium text-orange-600 dark:text-orange-400 text-center px-2">
              {partner.name}
            </span>
          </div>
        ) : (
          <div className="relative">
            <img
              src={partner.logo}
              alt={partner.name}
              className={`
                w-40 h-20 object-contain
                transition-all duration-300
                ${variant === "premium" ? "rounded-lg" : ""}
                ${imageLoaded ? "opacity-100" : "opacity-0"}
                filter drop-shadow-sm
              `}
              loading="lazy"
              onLoad={handleImageLoad}
              onError={handleImageError}
            />
          </div>
        )}

        {/* Enhanced Tooltip */}
        {variant !== "minimal" && (
          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-20">
            <div className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs py-2 px-3 rounded-lg font-medium whitespace-nowrap shadow-lg border border-gray-700 dark:border-gray-300">
              {partner.name}
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 dark:bg-white rotate-45"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Enhanced Stat Item Component
const StatItem: React.FC<{ value: string; label: string; icon: string }> = ({
  value,
  label,
  icon,
}) => {
  return (
    <div className="text-center group">
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:scale-105">
        <div className="text-3xl mb-3">{icon}</div>
        <div className="text-3xl font-bold text-orange-500 mb-2">{value}</div>
        <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
          {label}
        </div>
      </div>
    </div>
  );
};

// CSS-based version (no framer-motion dependency)
export const CSSPartnerMarquee: React.FC<
  Omit<PartnerMarqueeProps, "speed" | "pauseOnHover">
> = ({
  partners = AWD_PARTNERS,
  direction = "left",
  variant = "default",
  className = "",
  showStats = false,
  gradientOverlay = true,
}) => {
  const t = useTranslations("Partners");
  const animationClass =
    direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  return (
    <div className={`relative  py-20 overflow-hidden ${className}`}>
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {t("title")}
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {t("description")}
        </p>
      </div>

      {gradientOverlay && (
        <>
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-gray-50 dark:from-gray-900 to-transparent z-10" />
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-gray-50 dark:from-gray-900 to-transparent z-10" />
        </>
      )}

      <div
        className={`flex whitespace-nowrap ${animationClass} hover:animation-paused`}
      >
        {[...partners, ...partners].map((partner: Partner, index: number) => (
          <PartnerLogo
            key={`${partner.id}-${index}`}
            partner={partner}
            index={index}
            variant={variant}
          />
        ))}
      </div>

      {showStats && (
        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <StatItem
              value={DEFAULT_STATS.partnersCount}
              label={t("projectsCompleted")}
              icon="🚀"
            />
            <StatItem
              value={DEFAULT_STATS.satisfactionRate}
              label={t("clientSatisfaction")}
              icon="⭐"
            />
            <StatItem
              value={DEFAULT_STATS.supportAvailability}
              label={t("collaborators")}
              icon="👥"
            />
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-marquee-left {
          animation: marquee-left 40s linear infinite;
        }

        .animate-marquee-right {
          animation: marquee-right 40s linear infinite;
        }

        .hover\:animation-paused:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

// Hook for marquee logic (reusable)
export const useMarquee = (partners: Partner[]) => {
  const duplicatedPartners = useMemo(
    () => [...partners, ...partners],
    [partners],
  );

  return { duplicatedPartners };
};

// Usage Example
const PartnersSection: React.FC = () => {
  return (
    <div>
      <Container>
        <PartnerMarquee
          partners={AWD_PARTNERS}
          speed={40}
          pauseOnHover={true}
          direction="left"
          variant="premium"
          showStats={false}
          className="my-16"
        />
      </Container>
    </div>
  );
};

export default PartnersSection;

// Export types for reuse
export type { Partner, PartnerMarqueeProps, MarqueeStats };
