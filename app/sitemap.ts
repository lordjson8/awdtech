import { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = routing.locales;
  const baseUrl = "https://awdtech.org";
  const lastModified = new Date();

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Home page
  locales.forEach((locale) => {
    sitemapEntries.push({
      url: `${baseUrl}/${locale}`,
      lastModified,
      changeFrequency: "daily",
      priority: 1.0,
      images: [`${baseUrl}/hero.png`
        // {
        //   url: `${baseUrl}/hero.png`,
        //   alt: "AWDTech Home Page",
        // },
      ],
    });
  });

  // Web development page
  locales.forEach((locale) => {
    sitemapEntries.push({
      url: `${baseUrl}/${locale}/web`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${baseUrl}/web.jpg`
        // {
        //   url: `${baseUrl}/web.jpg`,
        //   alt: "AWDTech Web Development Page",
        // },
      ],
    });
  });

  // Projects page
  locales.forEach((locale) => {
    sitemapEntries.push({
      url: `${baseUrl}/${locale}/projects`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
      images: [`${baseUrl}/projects/awd-immobilier.jpg`
        // {
        //   url: `${baseUrl}/projects/awd-immobilier.jpg`,
        //   alt: "AWDTech Projects Page",
        // },
      ],
    });
  });

  // Mobile development page
  locales.forEach((locale) => {
    sitemapEntries.push({
      url: `${baseUrl}/${locale}/mobile`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${baseUrl}/mobile.jpg`
        // {
        //   url: `${baseUrl}/mobile.jpg`,
        //   alt: "AWDTech Mobile Development Page",
        // },
      ],
    });
  });

  // Graphic design page
  locales.forEach((locale) => {
    sitemapEntries.push({
      url: `${baseUrl}/${locale}/graphic`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${baseUrl}/9.jpg`
        // {
        //   url: `${baseUrl}/9.jpg`,
        //   alt: "AWDTech Graphic Design Page",
        // },
      ],
    });
  });

  // Contact page
  locales.forEach((locale) => {
    sitemapEntries.push({
      url: `${baseUrl}/${locale}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${baseUrl}/hero.png`
        // {
        //   url: `${baseUrl}/hero.png`,
        //   alt: "AWDTech Contact Page",
        // },
      ],
    });
  });

  return sitemapEntries;
}
