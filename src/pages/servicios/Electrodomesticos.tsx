import {
  Check,
  CookingPot,
  Droplets,
  Fan,
  Flame,
  MessageCircle,
  Phone,
  Plug,
  Refrigerator,
  WashingMachine,
  Wrench,
  Zap,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import applianceRepairHero from "@/assets/appliance-repair-hero-mobile.jpg";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "@/lib/contact";

const Electrodomesticos = () => {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language.startsWith("en");

  const quickItems = t("appliancesPage.quickItems", {
    returnObjects: true,
  }) as string[];

  const recommended = t("appliancesPage.recommendedItems", {
    returnObjects: true,
  }) as string[];

  const benefits = t("appliancesPage.benefitsItems", {
    returnObjects: true,
  }) as string[];

  const tareas: Array<{ icon: React.ElementType; titulo: string; desc: string }> = [
    {
      icon: Wrench,
      titulo: isEn ? "Appliance repairs" : "Reparaciones de Electrodomésticos",
      desc: isEn
        ? "Fault diagnosis and repair for domestic appliances that do not cool, drain, heat, wash, spin or work correctly."
        : "Diagnóstico y reparación de electrodomésticos que no enfrían, no desaguan, no calientan, no lavan, no centrifugan o fallan.",
    },
    {
      icon: Refrigerator,
      titulo: isEn ? "Fridges & freezers" : "Frigoríficos y Congeladores",
      desc: isEn
        ? "Help with cooling issues, ice build-up, unusual noises, seals, thermostats and general faults."
        : "Ayuda con fallos de frío, hielo, ruidos, juntas, termostatos y averías habituales.",
    },
    {
      icon: WashingMachine,
      titulo: isEn ? "Washing machines & dryers" : "Lavadoras y Secadoras",
      desc: isEn
        ? "Repairs for drainage, spin, vibration, door, drum, noise and drying problems."
        : "Reparación de fallos de desagüe, centrifugado, vibración, puerta, tambor, ruidos y secado.",
    },
    {
      icon: Droplets,
      titulo: isEn ? "Dishwashers" : "Lavavajillas",
      desc: isEn
        ? "Faults with washing, draining, leaks, blockages, door closure, programmes and error codes."
        : "Averías de lavado, desagüe, fugas, atascos, cierre de puerta, programas y códigos de error.",
    },
    {
      icon: Fan,
      titulo: isEn ? "Extractors & cooker hoods" : "Extractores y Campanas",
      desc: isEn
        ? "Repair and replacement of extractor fans, cooker hoods, switches, lighting and ventilation faults."
        : "Reparación y sustitución de extractores, campanas, interruptores, iluminación y fallos de ventilación.",
    },
    {
      icon: Zap,
      titulo: isEn ? "Ceramic & induction hobs" : "Vitrocerámicas e Inducción",
      desc: isEn
        ? "Diagnosis and repair of hobs that do not heat, switch on, respond or show error codes."
        : "Diagnóstico y reparación de placas que no calientan, no encienden, no responden o marcan error.",
    },
    {
      icon: Flame,
      titulo: isEn ? "Ovens" : "Hornos",
      desc: isEn
        ? "Help with heating faults, thermostats, door issues, controls, resistance elements and general failures."
        : "Reparación de fallos de calor, termostatos, puertas, mandos, resistencias y averías generales.",
    },
    {
      icon: Plug,
      titulo: isEn ? "New appliance installation" : "Instalación de Electrodomésticos",
      desc: isEn
        ? "Installation of new domestic appliances after checking the space, visible connections and operation."
        : "Instalación de electrodomésticos nuevos revisando hueco, conexiones visibles y funcionamiento.",
    },
    {
      icon: CookingPot,
      titulo: isEn ? "Other kitchen appliances" : "Otros Equipos de Cocina",
      desc: isEn
        ? "Support for common household kitchen appliances when the repair is practical and parts are available."
        : "Ayuda con otros electrodomésticos habituales de cocina cuando la reparación es viable y hay recambio.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <section className="relative isolate overflow-hidden bg-secondary pb-28 pt-16 text-secondary-foreground md:py-16">
          <img
            src={applianceRepairHero}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 -z-20 h-full w-full object-cover object-[58%_68%] md:object-[50%_72%]"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-secondary/95 via-secondary/78 to-secondary/42 md:bg-gradient-to-r md:from-secondary md:via-secondary/86 md:to-secondary/28" />

          <div className="container mx-auto px-4">
            <div className="grid items-start gap-6 lg:grid-cols-[1fr_360px] lg:items-center">
              <div className="pt-4 md:pt-0">
                <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">
                  {t("appliancesPage.heroEyebrow")}
                </p>
                <h1 className="mb-4 max-w-3xl text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
                  {t("appliancesPage.heroTitle")}
                </h1>
                <p className="max-w-3xl text-base leading-7 opacity-90 md:text-xl md:leading-8">
                  {t("appliancesPage.heroSubtitle")}
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button asChild size="lg" className="h-12 rounded-lg px-6 font-bold sm:w-auto">
                    <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                      <MessageCircle className="h-5 w-5" />
                      {t("appliancesPage.quotePanel.primaryCta")}
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="h-12 rounded-lg border-2 border-white/70 bg-transparent px-6 font-bold text-white hover:bg-white hover:text-secondary sm:w-auto"
                  >
                    <a href={`tel:${PHONE_TEL}`}>
                      <Phone className="h-5 w-5" />
                      {PHONE_DISPLAY}
                    </a>
                  </Button>
                </div>
              </div>

              <div className="rounded-lg border border-white/20 bg-secondary/35 p-4 text-white shadow-xl backdrop-blur-sm sm:p-5">
                  <h2 className="text-xl font-black sm:text-2xl">
                    {t("appliancesPage.quickTitle")}
                  </h2>
                  <ul className="mt-4 grid gap-2">
                    {quickItems.map((item) => (
                      <li key={item} className="flex items-center gap-3 rounded-md bg-white/10 px-3 py-2 text-base font-bold">
                        <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white">
                          <Check className="h-4 w-4" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <h2 className="text-2xl font-bold">
                  {t("appliancesPage.whatIncludedTitle")}
                </h2>
                <p className="text-muted-foreground">
                  {t("appliancesPage.whatIncludedBody")}
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {tareas.map((task) => (
                    <Card key={task.titulo}>
                      <CardContent className="p-4 flex items-start gap-3">
                        <task.icon className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <div className="font-semibold">{task.titulo}</div>
                          <div className="text-sm text-muted-foreground">{task.desc}</div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">
                      {t("appliancesPage.recommendedTitle")}
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {recommended.map((item) => (
                        <li key={item} className="flex items-start">
                          <Check className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">
                      {t("appliancesPage.benefitsTitle")}
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {benefits.map((item) => (
                        <li key={item} className="flex items-start">
                          <Check className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Button asChild size="lg" className="w-full">
                  <Link to="/reservar">
                    {t("appliancesPage.ctaBand.bookNow")}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="brand-hero py-16 border-t-4 border-primary/90">
          <div className="container mx-auto px-4 text-center">
            <p className="tracking-widest text-base md:text-lg opacity-90 mb-2">
              {t("appliancesPage.ctaBand.eyebrow")}
            </p>
            <h2 className="font-black text-4xl sm:text-5xl md:text-6xl text-primary mb-6">
              {t("appliancesPage.ctaBand.heading")}
            </h2>
            <p className="text-lg md:text-xl opacity-90 max-w-4xl mx-auto mb-10">
              {t("appliancesPage.ctaBand.body")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="rounded-lg px-8 font-bold">
                <Link to="/reservar">
                  {t("appliancesPage.ctaBand.bookNow")}
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-lg px-8 border-2 border-primary text-primary hover:bg-primary hover:text-white"
              >
                <a href={`tel:${PHONE_TEL}`}>
                  {t("appliancesPage.ctaBand.callLabel")}
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Electrodomesticos;
