import seoData from "./seo-data.json";

export type SeoRoute = (typeof seoData.routes)[number];

export const SITE_URL = seoData.siteUrl;
export const SITE_NAME = seoData.siteName;
export const DEFAULT_IMAGE = seoData.defaultImage;
export const DEFAULT_ROBOTS = seoData.defaultRobots;
export const SEO_ROUTES = seoData.routes as SeoRoute[];

const trimTrailingSlash = (path: string) =>
  path !== "/" ? path.replace(/\/+$/, "") : path;

export const normalizePath = (pathname: string) => {
  const path = pathname.split("?")[0].split("#")[0] || "/";
  return trimTrailingSlash(path.startsWith("/") ? path : `/${path}`);
};

export const absoluteUrl = (path: string) => {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
};

export const getSeoRoute = (pathname: string): SeoRoute => {
  const normalizedPath = normalizePath(pathname);
  return (
    SEO_ROUTES.find((route) => normalizePath(route.path) === normalizedPath) ??
    ({
      path: normalizedPath,
      title: "Pagina no encontrada | Bricos",
      description:
        "La pagina solicitada no existe. Vuelva a Bricos para consultar servicios de mantenimiento del hogar en la Vega Baja de Alicante.",
      breadcrumb: ["Inicio", "Pagina no encontrada"],
      includeInSitemap: false,
      robots: "noindex,follow",
    } as SeoRoute)
  );
};

const areaServed = seoData.serviceArea.map((place) => ({
  "@type": ["City", "AdministrativeArea"],
  name: place,
  address: {
    "@type": "PostalAddress",
    addressRegion: "Alicante",
    addressCountry: "ES",
  },
}));

const localBusiness = {
  "@type": ["HomeAndConstructionBusiness", "Plumber", "Electrician", "Locksmith"],
  "@id": `${SITE_URL}/#localbusiness`,
  name: SITE_NAME,
  url: SITE_URL,
  image: absoluteUrl("/hero.jpg"),
  logo: absoluteUrl(seoData.logo),
  telephone: seoData.phoneDisplay,
  email: seoData.email,
  priceRange: "Primera hora + desplazamiento desde 70 EUR",
  description:
    "Bricos ofrece servicios locales de manitas, mantenimiento, reparaciones, montaje, fontanería básica, cerrajería residencial, aire acondicionado, electricidad, pintura, jardinería y electrodomésticos en la Vega Baja de Alicante.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Vega Baja del Segura",
    addressRegion: "Alicante",
    addressCountry: "ES",
  },
  areaServed,
  knowsLanguage: ["es", "en"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  makesOffer: [
    "Mantenimiento del hogar",
    "Montaje e instalación",
    "Fontanería básica",
    "Cerrajería residencial",
    "Aire acondicionado",
    "Servicios eléctricos menores",
    "Reparación de electrodomésticos",
    "Pintura y reformas menores",
    "Jardineria y paisajismo",
  ].map((name) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name,
      areaServed,
    },
  })),
};

const webSite = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: ["es", "en"],
  publisher: {
    "@id": `${SITE_URL}/#localbusiness`,
  },
};

const buildBreadcrumb = (route: SeoRoute) => ({
  "@type": "BreadcrumbList",
  "@id": `${absoluteUrl(route.path)}#breadcrumb`,
  itemListElement: (route.breadcrumb ?? ["Inicio"]).map((name, index, labels) => ({
    "@type": "ListItem",
    position: index + 1,
    name,
    item:
      index === labels.length - 1
        ? absoluteUrl(route.path)
        : index === 0
          ? SITE_URL
          : absoluteUrl("/servicios"),
  })),
});

const buildService = (route: SeoRoute) => {
  if (!("serviceType" in route) || !route.serviceType) {
    return null;
  }

  return {
    "@type": "Service",
    "@id": `${absoluteUrl(route.path)}#service`,
    name: route.serviceType,
    serviceType: route.serviceType,
    description: route.description,
    url: absoluteUrl(route.path),
    provider: {
      "@id": `${SITE_URL}/#localbusiness`,
    },
    areaServed,
    offers: {
      "@type": "Offer",
      url: absoluteUrl(route.path),
      priceCurrency: "EUR",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "EUR",
        minPrice: 70,
        description: "Primera hora + desplazamiento desde 70 EUR",
      },
    },
  };
};

export const buildStructuredData = (route: SeoRoute) => {
  const graph = [localBusiness, webSite, buildBreadcrumb(route)];
  const service = buildService(route);

  if (service) {
    graph.push(service);
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
};
