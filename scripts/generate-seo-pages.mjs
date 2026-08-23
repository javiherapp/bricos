import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const distDir = path.join(projectRoot, "dist");
const data = JSON.parse(
  await readFile(path.join(projectRoot, "src/lib/seo-data.json"), "utf8")
);
const builtIndexPath = path.join(distDir, "index.html");
const template = await readFile(builtIndexPath, "utf8");
const today = new Date().toISOString().slice(0, 10);

const normalizePath = (pathname) => {
  const pathOnly = pathname.split("?")[0].split("#")[0] || "/";
  const withSlash = pathOnly.startsWith("/") ? pathOnly : `/${pathOnly}`;
  return withSlash !== "/" ? withSlash.replace(/\/+$/, "") : "/";
};

const absoluteUrl = (urlPath) => {
  if (urlPath.startsWith("http://") || urlPath.startsWith("https://")) {
    return urlPath;
  }

  return `${data.siteUrl}${urlPath.startsWith("/") ? urlPath : `/${urlPath}`}`;
};

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

const areaServed = data.serviceArea.map((place) => ({
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
  "@id": `${data.siteUrl}/#localbusiness`,
  name: data.siteName,
  url: data.siteUrl,
  image: absoluteUrl("/hero.jpg"),
  logo: absoluteUrl(data.logo),
  telephone: data.phoneDisplay,
  email: data.email,
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
};

const webSite = {
  "@type": "WebSite",
  "@id": `${data.siteUrl}/#website`,
  name: data.siteName,
  url: data.siteUrl,
  inLanguage: ["es", "en"],
  publisher: {
    "@id": `${data.siteUrl}/#localbusiness`,
  },
};

const buildBreadcrumb = (route) => ({
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
          ? data.siteUrl
          : absoluteUrl("/servicios"),
  })),
});

const buildService = (route) => {
  if (!route.serviceType) {
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
      "@id": `${data.siteUrl}/#localbusiness`,
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

const structuredDataFor = (route) => {
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

const seoBlockFor = (route) => {
  const canonicalUrl = absoluteUrl(route.path);
  const imageUrl = absoluteUrl(data.defaultImage);
  const robots = route.robots || data.defaultRobots;
  const structuredData = JSON.stringify(structuredDataFor(route));

  return [
    `<title>${escapeHtml(route.title)}</title>`,
    `<meta name="description" content="${escapeHtml(route.description)}" />`,
    `<meta name="author" content="${escapeHtml(data.siteName)}" />`,
    `<meta name="robots" content="${escapeHtml(robots)}" />`,
    `<link rel="canonical" href="${escapeHtml(canonicalUrl)}" />`,
    `<meta property="og:title" content="${escapeHtml(route.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(route.description)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:url" content="${escapeHtml(canonicalUrl)}" />`,
    `<meta property="og:site_name" content="${escapeHtml(data.siteName)}" />`,
    `<meta property="og:locale" content="es_ES" />`,
    `<meta property="og:image" content="${escapeHtml(imageUrl)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtml(route.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(route.description)}" />`,
    `<meta name="twitter:image" content="${escapeHtml(imageUrl)}" />`,
    `<script type="application/ld+json" id="bricos-static-structured-data">${structuredData}</script>`,
  ].join("\n    ");
};

const fallbackContentFor = (route) => {
  const serviceLinks = data.routes
    .filter((item) => item.serviceType)
    .map(
      (item) =>
        `<li><a href="${escapeHtml(item.path)}">${escapeHtml(item.serviceType)}</a></li>`
    )
    .join("");
  const areas = data.serviceArea
    .slice(0, 12)
    .map((area) => `<li>${escapeHtml(area)}</li>`)
    .join("");

  return `<div id="root">
      <main style="font-family: Arial, sans-serif; max-width: 960px; margin: 0 auto; padding: 32px 20px; line-height: 1.6; color: #172033;">
        <header style="margin-bottom: 32px;">
          <a href="/" style="font-size: 40px; font-weight: 800; color: #172033; text-decoration: none;">Bricos</a>
          <p style="margin: 8px 0 0; color: #475569;">Manitas, mantenimiento y reparaciones del hogar en la Vega Baja de Alicante.</p>
        </header>
        <h1 style="font-size: 36px; line-height: 1.15; margin: 0 0 16px;">${escapeHtml(route.title)}</h1>
        <p style="font-size: 18px; margin: 0 0 28px;">${escapeHtml(route.description)}</p>
        <p>
          <a href="tel:${escapeHtml(data.phoneTel)}" style="font-weight: 700; color: #0f766e;">Llamar ${escapeHtml(data.phoneDisplay)}</a>
          <span aria-hidden="true"> · </span>
          <a href="/contacto" style="font-weight: 700; color: #0f766e;">Pedir presupuesto</a>
        </p>
        <section style="margin-top: 36px;">
          <h2 style="font-size: 24px;">Servicios principales</h2>
          <ul style="columns: 2; padding-left: 20px;">${serviceLinks}</ul>
        </section>
        <section style="margin-top: 28px;">
          <h2 style="font-size: 24px;">Zona de servicio</h2>
          <p>Atendemos viviendas, segundas residencias y propiedades gestionadas en Alicante y la Vega Baja.</p>
          <ul style="columns: 2; padding-left: 20px;">${areas}</ul>
        </section>
      </main>
    </div>`;
};

const applySeo = (route) => {
  const block = `<!-- seo:start -->\n    ${seoBlockFor(route)}\n    <!-- seo:end -->`;
  return template
    .replace(/<html\s+lang="[^"]*"/, '<html lang="es"')
    .replace(/<!-- seo:start -->[\s\S]*?<!-- seo:end -->/, block)
    .replace('<div id="root"></div>', fallbackContentFor(route));
};

const writeRouteHtml = async (route) => {
  const html = applySeo(route);
  const routePath = normalizePath(route.path);

  if (routePath === "/") {
    await writeFile(builtIndexPath, html);
    return;
  }

  const cleanPath = routePath.slice(1);
  const routeDir = path.join(distDir, cleanPath);
  await mkdir(routeDir, { recursive: true });
  await writeFile(path.join(routeDir, "index.html"), html);
  await writeFile(path.join(distDir, `${cleanPath}.html`), html);
};

const sitemapRoutes = data.routes.filter((route) => route.includeInSitemap !== false);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapRoutes
  .map(
    (route) => `  <url>
    <loc>${escapeHtml(absoluteUrl(route.path))}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changeFrequency || "monthly"}</changefreq>
    <priority>${route.priority ?? 0.6}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

const robots = `User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: *
Allow: /

Sitemap: ${data.siteUrl}/sitemap.xml
`;

await Promise.all(data.routes.map(writeRouteHtml));
await writeFile(path.join(distDir, "sitemap.xml"), sitemap);
await writeFile(path.join(distDir, "robots.txt"), robots);

console.log(`SEO pages generated for ${data.routes.length} routes.`);
