import {
  Check,
  Droplets,
  Filter as FilterIcon,
  Hammer,
  Plug,
  Shield,
  ShowerHead,
  Wrench,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/contact";

const Fontaneria = () => {
  const { t, i18n } = useTranslation();

  const tareas: Array<{ icon: React.ElementType; titulo: string; desc: string }> = [
    {
      icon: Wrench,
      titulo:
        i18n.language.startsWith("en")
          ? "Tap repairs & replacement"
          : "Arreglo y Cambio de Grifos",
      desc:
        i18n.language.startsWith("en")
          ? "Replacing taps, cartridges, washers, flexi-hoses and small visible fittings."
          : "Sustitución de grifos, cartuchos, juntas, flexos y pequeños accesorios visibles.",
    },
    {
      icon: ShowerHead,
      titulo:
        i18n.language.startsWith("en")
          ? "Bathroom fittings"
          : "Instalación de Grifería y Ducha",
      desc:
        i18n.language.startsWith("en")
          ? "Fitting shower heads, hand showers, hoses, brackets and bathroom accessories."
          : "Instalación de rociadores, duchas de mano, mangueras, soportes y accesorios de baño.",
    },
    {
      icon: Droplets,
      titulo:
        i18n.language.startsWith("en")
          ? "Toilets & cisterns"
          : "Arreglo de Sanitarios y Cisternas",
      desc:
        i18n.language.startsWith("en")
          ? "Repairing cistern mechanisms, running toilets, flush buttons and small leaks."
          : "Reparación de mecanismos de cisterna, inodoros que pierden agua, pulsadores y pequeñas fugas.",
    },
    {
      icon: Hammer,
      titulo:
        i18n.language.startsWith("en")
          ? "Sanitary ware replacement"
          : "Cambio de Sanitarios",
      desc:
        i18n.language.startsWith("en")
          ? "Replacing toilets, seats, basins and visible sanitary fittings when no building work is needed."
          : "Cambio de inodoros, tapas, lavabos y piezas sanitarias visibles cuando no requiere obra.",
    },
    {
      icon: FilterIcon,
      titulo:
        i18n.language.startsWith("en")
          ? "Traps, wastes & filters"
          : "Sifones, Desagües y Filtros",
      desc:
        i18n.language.startsWith("en")
          ? "Replacing traps, wastes, flexi connectors and filters for sinks, basins and appliances."
          : "Cambio de sifones, válvulas, flexos, conexiones y filtros de fregaderos, lavabos y electrodomésticos.",
    },
    {
      icon: FilterIcon,
      titulo:
        i18n.language.startsWith("en")
          ? "Osmosis & water softeners"
          : "Ósmosis y Descalcificadoras",
      desc:
        i18n.language.startsWith("en")
          ? "Installing, maintaining and changing filters on domestic osmosis, water softener and water-treatment systems."
          : "Instalación, mantenimiento y cambio de filtros en equipos domésticos de ósmosis, descalcificadoras y tratamiento de agua.",
    },
    {
      icon: Plug,
      titulo:
        i18n.language.startsWith("en")
          ? "Electric water heaters"
          : "Termos y Calentadores Eléctricos",
      desc:
        i18n.language.startsWith("en")
          ? "Installing or replacing electric water heaters, with visible water connections and basic set-up."
          : "Instalación o sustitución de termos eléctricos, conexiones de agua visibles y puesta a punto básica.",
    },
    {
      icon: Droplets,
      titulo:
        i18n.language.startsWith("en")
          ? "Minor unblocking"
          : "Desatascos Menores",
      desc:
        i18n.language.startsWith("en")
          ? "Unblocking sinks, basins, showers and accessible drains where the issue is local."
          : "Desatascos de fregaderos, lavabos, duchas y desagües accesibles cuando el atasco es localizado.",
    },
    {
      icon: Shield,
      titulo:
        i18n.language.startsWith("en")
          ? "Sealing & leak prevention"
          : "Sellados y Prevención de Fugas",
      desc:
        i18n.language.startsWith("en")
          ? "Resealing sanitary ware, joints and wet areas to help prevent leaks and damp."
          : "Sellado de sanitarios, juntas y zonas húmedas para ayudar a prevenir fugas y humedades.",
    },
  ];

  const exclusions: string[] = t("plumbingPage.exclusionsItems", {
    returnObjects: true,
  }) as string[];

  const recommended: string[] = t("plumbingPage.recommendedItems", {
    returnObjects: true,
  }) as string[];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <section className="brand-hero py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t("plumbingPage.heroTitle")}
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
              {t("plumbingPage.heroSubtitle")}
            </p>
          </div>
        </section>

        <section className="py-14">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <h2 className="text-2xl font-bold">
                  {t("plumbingPage.whatIncludedTitle")}
                </h2>
                <p className="text-muted-foreground">
                  {t("plumbingPage.whatIncludedBody")}
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {tareas.map((task, i) => (
                    <Card key={i}>
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
                      {t("plumbingPage.exclusionsTitle")}
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {exclusions.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="w-4 h-4 text-primary mr-2 mt-0.5" />{" "}
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">
                      {t("plumbingPage.recommendedTitle")}
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {recommended.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="w-4 h-4 text-primary mr-2 mt-0.5" />{" "}
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <div className="text-center">
                  <Button asChild size="lg">
                    <a href={`tel:${PHONE_TEL}`}>
                      {i18n.language.startsWith("en")
                        ? "Request a quote"
                        : "Solicitar presupuesto"}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="brand-hero py-20 border-t-4 border-primary/90">
          <div className="container mx-auto px-4 text-center">
            <p className="tracking-widest text-base md:text-lg opacity-90 mb-2">
              {t("plumbingPage.ctaBand.eyebrow")}
            </p>
            <h2 className="font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary mb-6">
              {t("plumbingPage.ctaBand.heading")}
            </h2>
            <p className="text-lg md:text-xl opacity-90 max-w-4xl mx-auto mb-10">
              {t("plumbingPage.ctaBand.body")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="rounded-2xl px-8">
                <Link to="/reservar">
                  {t("plumbingPage.ctaBand.bookNow")}
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-2xl px-8 border-2 border-primary text-primary hover:bg-primary hover:text-white">
                <a href={`tel:${PHONE_TEL}`}>
                  {PHONE_DISPLAY}
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

export default Fontaneria;
