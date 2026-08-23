import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  absoluteUrl,
  buildStructuredData,
  DEFAULT_IMAGE,
  DEFAULT_ROBOTS,
  getSeoRoute,
  SITE_NAME,
} from "@/lib/seo";

const setMeta = (selector: string, attribute: "content" | "href", value: string) => {
  let element = document.head.querySelector<HTMLMetaElement | HTMLLinkElement>(selector);

  if (!element) {
    element = selector.startsWith("link")
      ? document.createElement("link")
      : document.createElement("meta");

    const nameMatch = selector.match(/\[name="([^"]+)"\]/);
    const propertyMatch = selector.match(/\[property="([^"]+)"\]/);
    const relMatch = selector.match(/\[rel="([^"]+)"\]/);

    if (nameMatch) element.setAttribute("name", nameMatch[1]);
    if (propertyMatch) element.setAttribute("property", propertyMatch[1]);
    if (relMatch) element.setAttribute("rel", relMatch[1]);

    document.head.appendChild(element);
  }

  element.setAttribute(attribute, value);
};

const Seo = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const route = getSeoRoute(pathname);
    const canonicalUrl = absoluteUrl(route.path);
    const imageUrl = absoluteUrl(DEFAULT_IMAGE);
    const robots = "robots" in route && route.robots ? route.robots : DEFAULT_ROBOTS;

    document.documentElement.lang = "es";
    document.title = route.title;

    setMeta('meta[name="description"]', "content", route.description);
    setMeta('meta[name="author"]', "content", SITE_NAME);
    setMeta('meta[name="robots"]', "content", robots);
    setMeta('link[rel="canonical"]', "href", canonicalUrl);
    setMeta('meta[property="og:title"]', "content", route.title);
    setMeta('meta[property="og:description"]', "content", route.description);
    setMeta('meta[property="og:type"]', "content", "website");
    setMeta('meta[property="og:url"]', "content", canonicalUrl);
    setMeta('meta[property="og:site_name"]', "content", SITE_NAME);
    setMeta('meta[property="og:locale"]', "content", "es_ES");
    setMeta('meta[property="og:image"]', "content", imageUrl);
    setMeta('meta[name="twitter:card"]', "content", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "content", route.title);
    setMeta('meta[name="twitter:description"]', "content", route.description);
    setMeta('meta[name="twitter:image"]', "content", imageUrl);

    let structuredData = document.getElementById("bricos-static-structured-data");
    if (!structuredData) {
      structuredData = document.createElement("script");
      structuredData.id = "bricos-static-structured-data";
      structuredData.setAttribute("type", "application/ld+json");
      document.head.appendChild(structuredData);
    }

    structuredData.textContent = JSON.stringify(buildStructuredData(route));
  }, [pathname]);

  return null;
};

export default Seo;
