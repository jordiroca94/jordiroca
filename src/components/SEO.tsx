import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { localizedRoutes } from "../i18n/routes";

const BASE_URL = "https://www.jordirocasoler.com";

const supportedLanguages = ["en", "es", "de"] as const;

type PageKey = "home" | "projects" | "volunteering";

interface SEOProps {
  page: PageKey;
}

export default function SEO({ page }: SEOProps) {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const lang = i18n.language as (typeof supportedLanguages)[number];
  const title = t(`seo.${page}.title`);
  const description = t(`seo.${page}.description`);

  const currentPath = location.pathname;
  const canonicalUrl = `${BASE_URL}${currentPath}`;

  const getAlternateUrl = (
    targetLang: (typeof supportedLanguages)[number],
  ): string => {
    const routes = localizedRoutes[targetLang];
    const path = routes[page];
    return path
      ? `${BASE_URL}/${targetLang}/${path}`
      : `${BASE_URL}/${targetLang}`;
  };

  return (
    <Helmet>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {supportedLanguages.map((lng) => (
        <link
          key={lng}
          rel="alternate"
          hrefLang={lng}
          href={getAlternateUrl(lng)}
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href={getAlternateUrl("en")} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Jordi Roca" />
      <meta property="og:locale" content={lang} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
