"use client";

import { useEffect, useRef, useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, PieChart, MousePointer, Fingerprint, X } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { ThemeToggler } from "../theme-toggler";
import { useTranslations } from "next-intl";
import Link from "next/link";
import MobileLanguageSwitcher from "../mobile-language-selector";
import MobileThemeSwitcher from "../mobile-theme-switcher";
import { cn } from "@/lib/utils";
import LanguageButton from "../locale-toggler";
import { usePathname } from "next/navigation";
 import { 
  Globe, 
  Smartphone, 
  Palette,
  Cloud,
  Server,
  Cpu,
  ShoppingCart,
  BarChart,
} from 'lucide-react';

export default function Header({
  scrolledBg = "bg-white/95 dark:bg-black shadow-lg backdrop-blur-sm",
  defaultBg = "bg-transparent",
  threshold = 50,
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = useTranslations("Header");
  const pathname  = usePathname();


const services = [
  {
    name: t("webDevelopment"),
    description: t("webDevelopmentDescription"),
    href: "web",
    icon: Globe, // or Code, Layout
  },
  {
    name: t("mobileDevelopment"),
    description: t("mobileDevelopmentDescription"),
    href: "mobile",
    icon: Smartphone, // or Gamepad2 for mobile gaming apps
  },
  {
    name: t("graphicDesign"),
    description: t("graphicDesignDescription"),
    href: "graphic",
    icon: Palette, // or PenTool, Image
  },
  // {
  //   name: t("infogerance"), // From your PDF
  //   description: t("infogeranceDescription"),
  //   href: "infogerance",
  //   icon: Server, // or Shield for security, Database for data management
  // },
  // {
  //   name: t("aiSolutions"), // From your PDF
  //   description: t("aiSolutionsDescription"),
  //   href: "ai",
  //   icon: Cpu, // or Zap for AI/ML
  // },
  // {
  //   name: t("ecommerce"),
  //   description: t("ecommerceDescription"),
  //   href: "ecommerce",
  //   icon: ShoppingCart,
  // },
  // {
  //   name: t("cloudServices"),
  //   description: t("cloudServicesDescription"),
  //   href: "cloud",
  //   icon: Cloud,
  // },
  // {
  //   name: t("dataAnalytics"), // From your PDF page 10
  //   description: t("dataAnalyticsDescription"),
  //   href: "analytics",
  //   icon: BarChart, // or Database
  // },
];
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = (): void => {
      const currentScrollY = window.scrollY;

      if (!ticking) {
        requestAnimationFrame(() => {
          // Change background when scrolled past threshold
          setIsScrolled(currentScrollY > threshold);

          // Hide/show header based on scroll direction
          if (currentScrollY > lastScrollY && currentScrollY > 100) {
            // Scrolling down & past 100px - hide header
            setIsVisible(true);
          } else {
            // Scrolling up - show header
            setIsVisible(true);
          }

          setLastScrollY(currentScrollY);
          ticking = false;
        });

        ticking = true;
      }
    };

    // Add scroll event listener with passive for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, threshold]);

  return (
    <header
      ref={headerRef}
      className={cn(
        "z-50 fixed w-screen top-0 left-0 transition-all duration-300",
        "border-b",
        isScrolled 
          ? "border-gray-200  dark:border-gray-800" 
          : "border-transparent",
        isVisible ? "translate-y-0" : "-translate-y-full",
        isScrolled ? scrolledBg : defaultBg
      )}
    >
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">AWDTECH</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="127"
              height="30"
              viewBox="0 0 127 30"
              fill="none"
              className="text-foreground"
            >
              <g clipPath="url(#clip0_9616_17482)">
                <text
                  x="75"
                  y="23"
                  fontFamily="Inter, sans-serif"
                  fontSize="19"
                  fontWeight="1000"
                  fill="currentColor"
                >
                  TECH
                </text>

                <path
                  d="M0 14.6576C0 9.93396 2.7615 6.51025 6.71472 6.51025C9.82185 6.51025 11.3592 8.44977 11.3592 10.4762C11.3592 12.3219 10.4483 13.1422 9.54102 13.2916C9.63463 13.0483 9.66704 12.8085 9.66704 12.5652C9.66704 11.9291 9.3214 11.0497 8.50771 11.0497C7.40959 11.0497 6.75072 12.5026 6.75072 13.9555C6.75072 16.3191 7.81644 17.772 9.41861 17.772C11.1108 17.772 12.5257 15.9263 12.5257 12.7146V6.96211H19.2693V22.7112H13.433C12.5869 22.7112 12.5221 22.4991 12.5221 22.1064C12.5221 21.0775 15.0316 19.5933 15.0316 15.9576H14.2791C14.2791 18.1369 12.2089 23.0136 7.18997 23.0136C1.75699 23.017 0 18.5332 0 14.6576Z"
                  fill="#FF6600"
                ></path>
                <path
                  d="M50.4126 14.6576C50.4126 9.93396 53.1741 6.51025 57.1273 6.51025C60.2344 6.51025 61.7718 8.44977 61.7718 10.4762C61.7718 12.3219 60.8609 13.1422 59.9536 13.2916C60.0472 13.0483 60.0796 12.8085 60.0796 12.5652C60.0796 11.9291 59.734 11.0497 58.9203 11.0497C57.8222 11.0497 57.1633 12.5339 57.1633 14.2892C57.1633 16.6528 58.229 17.772 59.8312 17.772C61.6818 17.772 63.0932 15.8637 63.0932 12.7146V0H69.6819V22.7146H63.8456C62.9995 22.7146 62.9347 22.5026 62.9347 22.1098C62.9347 21.081 65.4442 19.5968 65.4442 15.9611H64.6917C64.6917 18.1404 62.6215 23.017 57.6026 23.017C52.1768 23.017 50.4198 18.4741 50.4198 14.6576H50.4126Z"
                  fill="#FF6600"
                ></path>
                <path
                  d="M46.5529 6.6632C39.9138 6.6632 39.255 12.6625 40.7527 16.9482C40.9759 16.7397 41.0696 16.5902 41.0696 16.5902C41.1524 17.3862 41.3072 18.203 41.3072 18.203C40.3819 18.1821 39.7338 17.6191 39.7338 17.6191C39.8742 17.553 40.0002 17.4835 40.1155 17.4175L37.0191 6.9656C30.7436 6.93432 29.7427 12.659 31.2477 17.4453H30.4304L27.4817 6.9656H21.145L25.5375 22.9545H33.7896C34.6357 22.9545 34.7005 22.8641 34.7005 22.4991C34.7005 19.781 33.3647 17.9041 34.3944 14.0528C33.6888 13.9347 33.2711 14.0007 33.2711 14.0007C34.4412 12.7529 35.4998 12.2385 35.4998 12.2385C35.831 13.3194 35.9714 14.5256 35.9714 14.5256C35.7014 14.4109 35.4494 14.3205 35.2117 14.2475C35.2009 19.1832 38.5421 22.951 40.5295 22.951H45.4224C46.2073 22.951 46.3333 22.5582 46.3333 22.1342C46.3333 21.015 44.6375 17.772 44.6087 15.3215C44.5763 13.6844 45.2352 12.5965 46.6466 12.5965C47.2118 12.5965 47.8995 12.8085 47.8995 12.8085L49.6565 6.90304C49.6565 6.90304 48.3711 6.65973 46.5493 6.65973L46.5529 6.6632Z"
                  fill="#FF6600"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_9616_17482)">
                  <rect width="127" height="30" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className={cn(
              
              "-m-2.5 inline-flex items-center justify-center rounded-md p-2.5",
              (!isScrolled && !['/fr', '/en', '/es'].includes(pathname))? 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100' : isScrolled ? 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100' : 'text-white',
              "transition-colors duration-200"
            )}
          >
            <span className="sr-only">{t("openMainMenu")}</span>
            <Menu aria-hidden="true" className="size-6" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          <Link
            href="/"
            className={`text-sm/6 ${(!isScrolled && (pathname !=='/fr' && pathname !=='/en'))? 'text-black dark:text-white' : isScrolled ? 'dark:text-white text-black' : 'text-white'}   font-semibold  hover:text-primary transition-colors duration-200`}
          >
            {t("home")}
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className={cn(
                "flex items-center gap-x-1 text-sm/6 font-semibold",
                "text-foreground hover:text-primary transition-colors duration-200",
                "focus:outline-none focus:text-primary"
              )}>
               <span className={`${(!isScrolled && (pathname !=='/fr' && pathname !=='/en'))? 'text-black dark:text-white' : isScrolled ? 'dark:text-white text-black' : 'text-white'}`}> {t("services")}</span>
                <ChevronDown
                  aria-hidden="true"
                  className="size-5 flex-none dark:text-gray-500"
                />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="center"
              className="w-80 rounded-3xl bg-background border border-border shadow-xl"
            >
              {services.map((item) => (
                <DropdownMenuItem
                  key={item.name}
                  className="flex items-center gap-x-6 rounded-3xl p-4 text-sm/6 hover:bg-accent focus:bg-accent cursor-pointer transition-colors duration-200"
                  asChild
                >
                  <Link href={item.href}>
                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-muted group-hover:bg-primary/10 transition-colors duration-200">
                      <item.icon
                        aria-hidden="true"
                        className="size-6 text-muted-foreground group-hover:text-primary transition-colors duration-200"
                      />
                    </div>
                    <div className="flex-auto">
                      <span className="block font-semibold text-foreground">
                        {item.name}
                      </span>
                      <p className="mt-1 text-muted-foreground">{item.description}</p>
                    </div>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href="/projects"
            className={`${(!isScrolled && (pathname !=='/fr' && pathname !=='/en'))? 'text-black dark:text-white' : isScrolled ? 'dark:text-white text-black' : 'text-white'} text-sm/6 font-semibold  hover:text-primary transition-colors duration-200`}
          >
            {t("projects")}
          </Link>
          <Link
            href="/contact"
            className={`${(!isScrolled && (pathname !=='/fr' && pathname !=='/en'))? 'text-black dark:text-white' : isScrolled ? 'dark:text-white text-black' : 'text-white'} text-sm/6 font-semibold  hover:text-primary transition-colors duration-200`}
          >
            {t("contact")}
          </Link>
        </div>
        <div className="hidden gap-3 lg:flex lg:flex-1 lg:justify-end">
          <LanguageButton />
          <ThemeToggler />
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background p-6 sm:max-w-sm sm:ring-1 sm:ring-border">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">AWDTECH</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="127"
                height="30"
                viewBox="0 0 127 30"
                fill="none"
                className="text-foreground"
              >
                <g clipPath="url(#clip0_9616_17482)">
                  <path
                    d="M79.2157 7.86586C80.177 7.38272 81.2608 7.14288 82.4705 7.14288C83.853 7.14288 85.1168 7.47309 86.2581 8.13002C87.3994 8.78696 88.2995 9.71153 88.9512 10.8968C89.6028 12.0821 89.9305 13.4446 89.9305 14.9844C89.9305 16.5242 89.6028 17.9006 88.9512 19.1137C88.2995 20.3268 86.2581 21.95 82.4705 22.9649C81.2608 22.9649 80.1842 22.7286 79.2445 22.2558C78.3048 21.7831 77.5344 21.1957 76.9403 20.4901V30H73.6567V7.39314H76.9403V9.64549C77.4947 8.93989 78.2544 8.349 79.2157 7.86586ZM85.9124 12.2454C85.4624 11.4773 84.8647 10.8933 84.1267 10.4936C83.3886 10.0939 82.5965 9.89575 81.7504 9.89575C80.9043 9.89575 80.141 10.1008 79.403 10.5075C78.6649 10.9142 78.0672 11.5085 77.6172 12.2871C77.1671 13.0657 76.9403 13.9833 76.9403 15.04C76.9403 16.0967 77.1635 17.0178 77.6172 17.8068C78.0672 18.5958 78.6649 19.1936 79.403 19.6003C80.141 20.007 80.9259 20.2121 81.7504 20.2121C82.5749 20.2121 83.3886 20.0035 84.1267 19.5864C84.8647 19.1693 85.4624 18.561 85.9124 17.7651C86.3625 16.9691 86.5893 16.041 86.5893 14.9844C86.5893 13.9277 86.3625 13.0136 85.9124 12.2454Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M93.0845 10.8968C93.747 9.71153 94.6507 8.78696 95.792 8.13002C96.9333 7.47309 98.1971 7.14288 99.5796 7.14288C100.829 7.14288 101.916 7.37924 102.849 7.85196C103.781 8.32467 104.523 8.91209 105.081 9.61768V7.39314H108.393V22.7147H105.081V20.4345C104.523 21.1575 103.767 21.7588 102.806 22.2419C101.844 22.7251 100.75 22.9649 99.522 22.9649C98.1575 22.9649 96.9117 22.6278 95.7776 21.95C94.6435 21.2722 93.747 20.3268 93.0845 19.1137C92.4221 17.9006 92.0908 16.5242 92.0908 14.9844C92.0908 13.4446 92.4221 12.0821 93.0845 10.8968ZM104.404 12.2871C103.954 11.5085 103.364 10.9142 102.633 10.5075C101.902 10.1008 101.117 9.89575 100.271 9.89575C99.4248 9.89575 98.6399 10.0939 97.909 10.4936C97.1782 10.8933 96.5877 11.4773 96.1377 12.2454C95.6876 13.0136 95.4608 13.9277 95.4608 14.9844C95.4608 16.041 95.6876 16.9691 96.1377 17.7651C96.5877 18.561 97.1854 19.1693 97.9234 19.5864C98.6615 20.0035 99.4464 20.2121 100.271 20.2121C101.095 20.2121 101.902 20.007 102.633 19.6003C103.364 19.1936 103.954 18.5958 104.404 17.8068C104.854 17.0178 105.081 16.0967 105.081 15.04C105.081 13.9833 104.854 13.0657 104.404 12.2871Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M127 7.39313L117.264 29.9166H113.866L117.092 22.4644L110.841 7.39313H114.499L118.964 19.072L123.601 7.39313H127Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M0 14.6576C0 9.93396 2.7615 6.51025 6.71472 6.51025C9.82185 6.51025 11.3592 8.44977 11.3592 10.4762C11.3592 12.3219 10.4483 13.1422 9.54102 13.2916C9.63463 13.0483 9.66704 12.8085 9.66704 12.5652C9.66704 11.9291 9.3214 11.0497 8.50771 11.0497C7.40959 11.0497 6.75072 12.5026 6.75072 13.9555C6.75072 16.3191 7.81644 17.772 9.41861 17.772C11.1108 17.772 12.5257 15.9263 12.5257 12.7146V6.96211H19.2693V22.7112H13.433C12.5869 22.7112 12.5221 22.4991 12.5221 22.1064C12.5221 21.0775 15.0316 19.5933 15.0316 15.9576H14.2791C14.2791 18.1369 12.2089 23.0136 7.18997 23.0136C1.75699 23.017 0 18.5332 0 14.6576Z"
                    fill="#FF6600"
                  ></path>
                  <path
                    d="M50.4126 14.6576C50.4126 9.93396 53.1741 6.51025 57.1273 6.51025C60.2344 6.51025 61.7718 8.44977 61.7718 10.4762C61.7718 12.3219 60.8609 13.1422 59.9536 13.2916C60.0472 13.0483 60.0796 12.8085 60.0796 12.5652C60.0796 11.9291 59.734 11.0497 58.9203 11.0497C57.8222 11.0497 57.1633 12.5339 57.1633 14.2892C57.1633 16.6528 58.229 17.772 59.8312 17.772C61.6818 17.772 63.0932 15.8637 63.0932 12.7146V0H69.6819V22.7146H63.8456C62.9995 22.7146 62.9347 22.5026 62.9347 22.1098C62.9347 21.081 65.4442 19.5968 65.4442 15.9611H64.6917C64.6917 18.1404 62.6215 23.017 57.6026 23.017C52.1768 23.017 50.4198 18.4741 50.4198 14.6576H50.4126Z"
                    fill="#FF6600"
                  ></path>
                  <path
                    d="M46.5529 6.6632C39.9138 6.6632 39.255 12.6625 40.7527 16.9482C40.9759 16.7397 41.0696 16.5902 41.0696 16.5902C41.1524 17.3862 41.3072 18.203 41.3072 18.203C40.3819 18.1821 39.7338 17.6191 39.7338 17.6191C39.8742 17.553 40.0002 17.4835 40.1155 17.4175L37.0191 6.9656C30.7436 6.93432 29.7427 12.659 31.2477 17.4453H30.4304L27.4817 6.9656H21.145L25.5375 22.9545H33.7896C34.6357 22.9545 34.7005 22.8641 34.7005 22.4991C34.7005 19.781 33.3647 17.9041 34.3944 14.0528C33.6888 13.9347 33.2711 14.0007 33.2711 14.0007C34.4412 12.7529 35.4998 12.2385 35.4998 12.2385C35.831 13.3194 35.9714 14.5256 35.9714 14.5256C35.7014 14.4109 35.4494 14.3205 35.2117 14.2475C35.2009 19.1832 38.5421 22.951 40.5295 22.951H45.4224C46.2073 22.951 46.3333 22.5582 46.3333 22.1342C46.3333 21.015 44.6375 17.772 44.6087 15.3215C44.5763 13.6844 45.2352 12.5965 46.6466 12.5965C47.2118 12.5965 47.8995 12.8085 47.8995 12.8085L49.6565 6.90304C49.6565 6.90304 48.3711 6.65973 46.5493 6.65973L46.5529 6.6632Z"
                    fill="#FF6600"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_9616_17482)">
                    <rect width="127" height="30" fill="white"></rect>
                </clipPath>
                </defs>
              </svg>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "-m-2.5 rounded-md p-2.5",
                "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100",
                "transition-colors duration-200"
              )}
            >
              <span className="sr-only">{t("closeMenu")}</span>
              <X aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-border">
              <div className="space-y-2 py-6">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-foreground hover:bg-accent transition-colors duration-200"
                >
                  {t("home")}
                </Link>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-foreground hover:bg-accent transition-colors duration-200">
                    {t("services")}
                    <ChevronDown
                      aria-hidden="true"
                      className="size-5 flex-none group-data-open:rotate-180 text-muted-foreground transition-transform duration-200"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {services.map((item) => (
                      <Link
                        onClick={() => setMobileMenuOpen(false)}
                        key={item.name}
                        href={item.href}
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-foreground hover:bg-accent transition-colors duration-200"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Link
                  href="/projects"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-foreground hover:bg-accent transition-colors duration-200"
                >
                  {t("projects")}
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-foreground hover:bg-accent transition-colors duration-200"
                >
                  {t("contact")}
                </Link>
                <MobileLanguageSwitcher />
                <MobileThemeSwitcher />
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}