import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import {
  getMarketingConsent,
  MARKETING_CONSENT_EVENT,
  setMarketingConsent,
} from "@/lib/metaPixel";

const MarketingConsentBanner = () => {
  const { t } = useTranslation();
  const [consent, setConsent] = useState<ReturnType<typeof getMarketingConsent>>(
    null,
  );

  useEffect(() => {
    const syncConsent = () => setConsent(getMarketingConsent());

    syncConsent();
    window.addEventListener(MARKETING_CONSENT_EVENT, syncConsent);

    return () => {
      window.removeEventListener(MARKETING_CONSENT_EVENT, syncConsent);
    };
  }, []);

  if (consent) {
    return null;
  }

  const handleChoice = (value: "granted" | "rejected") => {
    setMarketingConsent(value);
    setConsent(value);
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-[70] border-t bg-background/95 px-4 py-4 shadow-2xl backdrop-blur">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold">{t("privacy.cookieBanner.title")}</p>
          <p className="mt-1 max-w-3xl text-sm text-muted-foreground">
            {t("privacy.cookieBanner.body")}
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row">
          <Button
            type="button"
            variant="outline"
            onClick={() => handleChoice("rejected")}
          >
            {t("privacy.cookieBanner.reject")}
          </Button>
          <Button type="button" onClick={() => handleChoice("granted")}>
            {t("privacy.cookieBanner.accept")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MarketingConsentBanner;
