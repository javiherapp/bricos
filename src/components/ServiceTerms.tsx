import { Link } from "react-router-dom";
import {
  Clock,
  FileText,
  Handshake,
  Package,
  ShieldCheck,
  Users,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ServiceTermsProps = {
  variant?: "summary" | "full";
  className?: string;
};

type ServiceTermItem = {
  title: string;
  text: string;
};

const termIcons = [FileText, ShieldCheck, Users, Package, Handshake];

const ServiceTerms = ({ variant = "full", className }: ServiceTermsProps) => {
  const { t } = useTranslation();
  const isFull = variant === "full";
  const items = t("serviceTerms.items", {
    returnObjects: true,
  }) as ServiceTermItem[];

  if (!isFull) {
    return (
      <section className={cn("py-12 bg-muted/30", className)}>
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-center">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-primary">
                {t("serviceTerms.summaryEyebrow")}
              </p>
              <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                {t("serviceTerms.summaryTitle")}
              </h2>
              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                {t("serviceTerms.summaryBody")}
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="rounded-lg border border-primary/30 bg-background p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  {t("serviceTerms.priceLabel")}
                </p>
                <p className="mt-2 text-4xl font-black text-primary">
                  {t("serviceTerms.price")}
                </p>
              </div>
              <Button asChild size="lg" className="w-full">
                <Link to="/reservar">{t("serviceTerms.cta")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={cn("py-14 bg-muted/30", className)}>
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-primary">
                {t("serviceTerms.fullEyebrow")}
              </p>
              <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                {t("serviceTerms.fullTitle")}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                {t("serviceTerms.fullIntro")}
              </p>
            </div>

            <div className="rounded-lg border border-primary/30 bg-background p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    {t("serviceTerms.priceLabel")}
                  </p>
                  <p className="mt-2 text-4xl font-black text-primary">
                    {t("serviceTerms.price")}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {t("serviceTerms.priceDescription")}
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {items.map((item, index) => {
              const Icon = termIcons[index] ?? FileText;

              return (
                <div
                  key={item.title}
                  className="rounded-lg border bg-background p-5 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold leading-tight">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="mt-6 border-t pt-6 text-sm leading-relaxed text-muted-foreground">
            {t("serviceTerms.footer")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceTerms;
