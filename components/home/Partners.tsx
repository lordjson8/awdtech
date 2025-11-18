"use client";

import { useRef, useEffect, useState, useCallback, useMemo } from "react";
import { motion, MotionProps } from "framer-motion";
import Container from "../shared/Container";

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

// Default stats configuration
const DEFAULT_STATS: MarqueeStats = {
  partnersCount: "15K+",
  satisfactionRate: "98%",
  supportAvailability: "24/7",
};

// Animation variants for different directions
const getMarqueeAnimation = (
  direction: "left" | "right",
  contentWidth: number
): MotionProps["animate"] => {
  const baseAnimation =
    direction === "left" ? { x: [0, -contentWidth] } : { x: [0, contentWidth] };

  return baseAnimation;
};

const PartnerMarquee: React.FC<PartnerMarqueeProps> = ({
  partners,
  speed = 50,
  pauseOnHover = true,
  direction = "left",
  variant = "default",
  className = "",
  showStats = true,
  gradientOverlay = true,
}) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [duplicatedPartners, setDuplicatedPartners] = useState<Partner[]>([]);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [contentWidth, setContentWidth] = useState<number>(1032); // Default width
  const scrollerRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Calculate content width for precise animation
  const calculateContentWidth = useCallback((): number => {
    if (!scrollerRef.current) return 1032;

    const firstChild = scrollerRef.current.firstElementChild as HTMLElement;
    return firstChild ? firstChild.offsetWidth / 2 : 1032; // Divide by 2 since we duplicate
  }, []);

  // Duplicate partners for seamless loop
  useEffect(() => {
    // Defer state updates to the next animation frame to avoid synchronous cascading renders
    let rafId: number;
    rafId = window.requestAnimationFrame(() => {
      setIsMounted(true);
      setDuplicatedPartners([...partners, ...partners]);
      // Set initial content width after mount
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
      { threshold: 0.1 }
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
            className="flex-shrink-0 grayscale opacity-60 transition-all duration-300"
          >
            <div className="h-16 w-32 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <section
      className={`relative  py-16 overflow-hidden ${className}`}
    >
      {/* Optional heading */}
      {variant !== "minimal" && (
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Join thousands of companies who trust our platform
          </p>
        </div>
      )}

      {/* Marquee Container */}
      <div ref={scrollerRef} className="relative">
        {/* Gradient overlays */}
        {gradientOverlay && (
          <>
            <div
              className={`absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10 ${
                direction === "right" ? "opacity-0" : ""
              }`}
            />
            <div
              className={`absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10 ${
                direction === "left" ? "opacity-0" : ""
              }`}
            />
          </>
        )}

        {/* Main Marquee */}
        <motion.div
          className="flex space-x-12"
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
        <div className="flex justify-center items-center space-x-12 mt-12 text-center">
          <StatItem value={DEFAULT_STATS.partnersCount} label="Partners" />
          <StatItem
            value={DEFAULT_STATS.satisfactionRate}
            label="Satisfaction"
          />
          <StatItem value={DEFAULT_STATS.supportAvailability} label="Support" />
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
    opacity-60 
    hover:grayscale-0 
    hover:opacity-100 
    transition-all 
    duration-500 
    ease-out
    transform
    hover:scale-110
    group
    ${variant === "premium" ? "p-4 bg-gray-50 dark:bg-gray-800 rounded-xl" : ""}
    ${!imageLoaded ? "animate-pulse" : ""}
  `;

  const handleImageLoad = (): void => setImageLoaded(true);
  const handleImageError = (): void => setImageError(true);

  return (
    <div className={logoClasses}>
      <div className="relative">
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
            <div className="w-6 h-6 border-2 border-gray-300 dark:border-gray-600 border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {imageError ? (
          <div className="w-32 h-16 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
            <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
              {partner.name}
            </span>
          </div>
        ) : (
          <img
            src={partner.logo}
            alt={partner.name}
            className={`
              w-32 h-16 object-contain
              transition-all duration-300
              ${variant === "premium" ? "rounded-lg" : ""}
              ${imageLoaded ? "opacity-100" : "opacity-0"}
            `}
            loading="lazy"
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
        )}

        {/* Tooltip */}
        {variant !== "minimal" && (
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs py-1 px-2 rounded whitespace-nowrap">
              {partner.name}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Stat Item Component
const StatItem: React.FC<{ value: string; label: string }> = ({
  value,
  label,
}) => {
  return (
    <div className="text-gray-900 dark:text-white">
      <div className="text-3xl font-bold">{value}</div>
      <div className="text-sm text-gray-600 dark:text-gray-400">{label}</div>
    </div>
  );
};

// CSS-based version (no framer-motion dependency)
export const CSSPartnerMarquee: React.FC<
  Omit<PartnerMarqueeProps, "speed" | "pauseOnHover">
> = ({
  partners,
  direction = "left",
  variant = "default",
  className = "",
  showStats = true,
  gradientOverlay = true,
}) => {
  const animationClass =
    direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  return (
    <div
      className={`relative bg-white dark:bg-gray-900 py-16 overflow-hidden ${className}`}
    >
      {gradientOverlay && (
        <>
          <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10" />
          <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10" />
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

      {showStats && variant !== "minimal" && (
        <div className="flex justify-center items-center space-x-12 mt-12 text-center">
          <StatItem value={DEFAULT_STATS.partnersCount} label="Partners" />
          <StatItem
            value={DEFAULT_STATS.satisfactionRate}
            label="Satisfaction"
          />
          <StatItem value={DEFAULT_STATS.supportAvailability} label="Support" />
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
          animation: marquee-left 30s linear infinite;
        }

        .animate-marquee-right {
          animation: marquee-right 30s linear infinite;
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
    [partners]
  );

  return { duplicatedPartners };
};

// Sample data with proper typing
export const SAMPLE_PARTNERS: Partner[] = [
  {
    id: "1",
    name: "Google",
    logo: "/logos/google.svg",
    website: "https://google.com",
  },
  {
    id: "2",
    name: "Microsoft",
    logo: "/logos/microsoft.svg",
    website: "https://microsoft.com",
  },
  {
    id: "3",
    name: "Apple",
    logo: "/logos/apple.svg",
    website: "https://apple.com",
  },
  {
    id: "4",
    name: "Amazon",
    logo: "/logos/amazon.svg",
    website: "https://amazon.com",
  },
  {
    id: "5",
    name: "Meta",
    logo: "/logos/meta.svg",
    website: "https://meta.com",
  },
  {
    id: "6",
    name: "Netflix",
    logo: "/logos/netflix.svg",
    website: "https://netflix.com",
  },
];

// Usage Example
const PartnersSection: React.FC = () => {
  return (
    <div>
      <Container>
        <PartnerMarquee
          partners={SAMPLE_PARTNERS}
          speed={40}
          pauseOnHover={true}
          direction="left"
          variant="premium"
          showStats={true}
          className="my-16"
        />
      </Container>
    </div>
  );
};

export default PartnersSection;

// Export types for reuse
export type { Partner, PartnerMarqueeProps, MarqueeStats };
