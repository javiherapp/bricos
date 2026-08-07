const META_PIXEL_ID = "1039503842143802";

export const MARKETING_CONSENT_KEY = "bricosMarketingConsent";
export const MARKETING_CONSENT_EVENT = "bricos-marketing-consent-changed";
const MARKETING_CONSENT_MAX_AGE_MS = 1000 * 60 * 60 * 24 * 365 * 2;

type MarketingConsent = "granted" | "rejected" | null;

type StoredMarketingConsent = {
  value: Exclude<MarketingConsent, null>;
  updatedAt: number;
};

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

  const storedValue = window.localStorage.getItem(MARKETING_CONSENT_KEY);
  if (!storedValue) {
    return null;
  }

  if (storedValue === "granted" || storedValue === "rejected") {
    window.localStorage.setItem(
      MARKETING_CONSENT_KEY,
      JSON.stringify({ value: storedValue, updatedAt: Date.now() }),
    );
    return storedValue;
  }

  try {
    const parsed = JSON.parse(storedValue) as Partial<StoredMarketingConsent>;
    const isValidConsent =
      parsed.value === "granted" || parsed.value === "rejected";
    const isFresh =
      typeof parsed.updatedAt === "number" &&
      Date.now() - parsed.updatedAt <= MARKETING_CONSENT_MAX_AGE_MS;

    if (isValidConsent && isFresh) {
      return parsed.value ?? null;
    }
  } catch {
    // Invalid stored consent is cleared below.
  }

  window.localStorage.removeItem(MARKETING_CONSENT_KEY);
  return null;
};

export const setMarketingConsent = (value: Exclude<MarketingConsent, null>) => {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(
    MARKETING_CONSENT_KEY,
    JSON.stringify({ value, updatedAt: Date.now() }),
  );
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
