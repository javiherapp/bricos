const META_PIXEL_ID = "1039503842143802";

export const MARKETING_CONSENT_KEY = "bricosMarketingConsent";
export const MARKETING_CONSENT_EVENT = "bricos-marketing-consent-changed";

type MarketingConsent = "granted" | "rejected" | null;

type FbqFunction = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  loaded?: boolean;
  push?: FbqFunction;
  queue?: unknown[];
  version?: string;
};

declare global {
  interface Window {
    fbq?: FbqFunction;
    _fbq?: FbqFunction;
  }
}

let isPixelInitialized = false;

export const getMarketingConsent = (): MarketingConsent => {
  if (typeof window === "undefined") {
    return null;
  }

  const value = window.localStorage.getItem(MARKETING_CONSENT_KEY);
  return value === "granted" || value === "rejected" ? value : null;
};

export const setMarketingConsent = (value: Exclude<MarketingConsent, null>) => {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(MARKETING_CONSENT_KEY, value);
  window.dispatchEvent(
    new CustomEvent(MARKETING_CONSENT_EVENT, { detail: value }),
  );
};

export const clearMarketingConsent = () => {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.removeItem(MARKETING_CONSENT_KEY);
  window.dispatchEvent(new CustomEvent(MARKETING_CONSENT_EVENT));
};

export const loadMetaPixel = () => {
  if (
    typeof window === "undefined" ||
    typeof document === "undefined" ||
    getMarketingConsent() !== "granted"
  ) {
    return false;
  }

  if (!window.fbq) {
    const fbq = function (...args: unknown[]) {
      if (fbq.callMethod) {
        fbq.callMethod(...args);
      } else {
        fbq.queue?.push(args);
      }
    } as FbqFunction;

    fbq.push = fbq;
    fbq.loaded = true;
    fbq.version = "2.0";
    fbq.queue = [];

    window.fbq = fbq;
    window._fbq = fbq;

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://connect.facebook.net/en_US/fbevents.js";
    document.head.appendChild(script);
  }

  if (!isPixelInitialized) {
    window.fbq("init", META_PIXEL_ID);
    isPixelInitialized = true;
  }

  return true;
};

export const trackMetaEvent = (
  eventName: string,
  parameters?: Record<string, string | number | boolean>,
) => {
  if (!loadMetaPixel()) {
    return;
  }

  window.fbq?.("track", eventName, parameters);
};
