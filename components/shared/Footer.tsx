import Link from "next/link";
import React from "react";
import { useTranslations } from "next-intl";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const t = useTranslations("Footer");

  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-700 dark:text-white transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Company Info */}
          <div>
            <div className="flex justify-center sm:justify-start">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">{t("brandName")}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="127"
                  height="30"
                  viewBox="0 0 127 30"
                  fill="none"
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
                    <clipPath id="clip0_9616_17482">
                      <rect width="127" height="30" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </div>

            <p className="mt-6 max-w-md text-center leading-relaxed text-gray-600 dark:text-gray-300 sm:max-w-xs sm:text-left">
              {t("tagline")}
            </p>

            {/* Contact Email */}
            <div className="mt-6 text-center sm:text-left">
              <a
                href="mailto:support.cm@awdpay.com"
                className="text-orange-500 hover:text-orange-600 dark:hover:text-orange-400 font-medium transition-colors"
              >
                support.cm@awdpay.com
              </a>
            </div>

            {/* Social Links */}
            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-500 dark:text-gray-300 transition hover:text-orange-500"
                >
                  <span className="sr-only">{t("social.facebook")}</span>
                  <svg
                    className="size-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-500 dark:text-gray-300 transition hover:text-orange-500"
                >
                  <span className="sr-only">{t("social.linkedin")}</span>
                  <svg
                    className="size-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-500 dark:text-gray-300 transition hover:text-orange-500"
                >
                  <span className="sr-only">{t("social.twitter")}</span>
                  <svg
                    className="size-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:col-span-2">
            {/* Services */}
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-gray-900 dark:text-white">
                {t("services.title")}
              </p>

              <ul className="mt-6 space-y-3 text-sm text-gray-600 dark:text-gray-300">
                <li>
                  <a
                    className="transition hover:text-orange-500"
                    href="#"
                  >
                    {t("services.web")}
                  </a>
                </li>
                <li>
                  <a
                    className="transition hover:text-orange-500"
                    href="#"
                  >
                    {t("services.mobile")}
                  </a>
                </li>
                <li>
                  <a
                    className="transition hover:text-orange-500"
                    href="#"
                  >
                    {t("services.design")}
                  </a>
                </li>
                <li>
                  <a
                    className="transition hover:text-orange-500"
                    href="#"
                  >
                    {t("services.management")}
                  </a>
                </li>
                <li>
                  <a
                    className="transition hover:text-orange-500"
                    href="#"
                  >
                    {t("services.ecommerce")}
                  </a>
                </li>
              </ul>
            </div>

            {/* Produits */}
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-gray-900 dark:text-white">
                {t("products.title")}
              </p>

              <ul className="mt-6 space-y-3 text-sm text-gray-600 dark:text-gray-300">
                <li>
                  <a
                    className="transition hover:text-orange-500"
                    href="#"
                  >
                    {t("products.awdpay")}
                  </a>
                </li>
                <li>
                  <a
                    className="transition hover:text-orange-500"
                    href="#"
                  >
                    {t("products.realEstate")}
                  </a>
                </li>
                <li>
                  <a
                    className="transition hover:text-orange-500"
                    href="#"
                  >
                    {t("products.education")}
                  </a>
                </li>
                <li>
                  <a
                    className="transition hover:text-orange-500"
                    href="#"
                  >
                    {t("products.ecommerce")}
                  </a>
                </li>
                <li>
                  <a
                    className="transition hover:text-orange-500"
                    href="#"
                  >
                    {t("products.transport")}
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-gray-900 dark:text-white">
                {t("contact.title")}
              </p>

              <ul className="mt-6 space-y-4 text-sm text-gray-600 dark:text-gray-300">
                <li>
                  <a
                    className="flex items-center justify-center gap-2 sm:justify-start transition hover:text-orange-500"
                    href="mailto:support.cm@awdpay.com"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                    support.cm@awdpay.com
                  </a>
                </li>

                {/* Cameroon */}
                <li className="flex items-center justify-center gap-2 sm:justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                  <span>+237 656 849 690</span>
                </li>

                {/* Gabon */}
                <li className="flex items-center justify-center gap-2 sm:justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                  <span>+241 66 50 39 99</span>
                </li>

                {/* Côte d'Ivoire */}
                <li className="flex items-center justify-center gap-2 sm:justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                  <span>+225 27 24 3 73010</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <span className="block sm:inline">{t("legal.allRightsReserved")}</span>

              <a
                className="inline-block text-orange-500 underline transition hover:text-orange-600 dark:hover:text-orange-400 mx-2"
                href="#"
              >
                {t("legal.termsOfUse")}
              </a>

              <span>·</span>

              <a
                className="inline-block text-orange-500 underline transition hover:text-orange-600 dark:hover:text-orange-400 mx-2"
                href="#"
              >
                {t("legal.privacyPolicy")}
              </a>
            </p>

            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 sm:order-first sm:mt-0">
              {t("copyright", { currentYear })}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}