import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  MARKETING_CONSENT_EVENT,
  getMarketingConsent,
  trackMetaEvent,
} from "@/lib/metaPixel";

const serviceContentNames: Record<string, string> = {
  "/servicios/mantenimiento": "Mantenimiento y Reparación del Hogar",
  "/servicios/montaje": "Montaje e Instalación",
  "/servicios/exteriores": "Exteriores",
  "/servicios/electrodomesticos": "Electrodomésticos",
  "/servicios/pintura": "Pintura y Reformas Menores",
  "/servicios/jardineria": "Jardinería y Paisajismo",
  "/servicios/fontaneria": "Fontanería Básica",
  "/servicios/aire-acondicionado": "Aire Acondicionado",
  "/servicios/electricidad": "Servicios Eléctricos Menores",
};

const MetaPixelRouteTracker = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    const trackCurrentPage = () => {
      if (getMarketingConsent() !== "granted") {
        return;
      }

      trackMetaEvent("PageView");

      const contentName = serviceContentNames[pathname];
      if (contentName) {
        trackMetaEvent("ViewContent", {
          content_category: "Service",
          content_name: contentName,
          page_path: pathname,
        });
      }
    };

    trackCurrentPage();
    window.addEventListener(MARKETING_CONSENT_EVENT, trackCurrentPage);

    return () => {
      window.removeEventListener(MARKETING_CONSENT_EVENT, trackCurrentPage);
    };
  }, [pathname, search]);

  return null;
};

export default MetaPixelRouteTracker;
