import {
  Check,
  Leaf,
  Flower2,
  Scissors,
  Sprout,
  Droplets,
  Hammer,
  Wrench,
  Home,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Jardineria = () => {
  const { t, i18n } = useTranslation();

  const tareas: Array<{ icon: React.ElementType; titulo: string; desc: string }> = [
    {
      icon: Scissors,
      titulo:
        i18n.language.startsWith("en")
          ? "Light pruning"
          : "Poda Ligera",
      desc:
        i18n.language.startsWith("en")
          ? "Shrubs, small hedges and ornamental plants shaped and kept under control."
          : "Arbustos, setos pequeños y plantas ornamentales perfilados y bajo control.",
    },
    {
      icon: Leaf,
      titulo:
        i18n.language.startsWith("en")
          ? "Garden clean-up"
          : "Limpieza de Jardín",
      desc:
        i18n.language.startsWith("en")
          ? "Leaves, branches, weeds and light green waste cleared from patios and garden areas."
          : "Hojas, ramas, malas hierbas y restos vegetales ligeros retirados de patios y jardines.",
    },
    {
      icon: Flower2,
      titulo:
        i18n.language.startsWith("en")
          ? "Pots & planters"
          : "Macetas y Jardineras",
      desc:
        i18n.language.startsWith("en")
          ? "Positioning, tidying, replacing soil and keeping planted areas looking orderly."
          : "Colocación, orden, cambio de tierra y puesta a punto de zonas plantadas.",
    },
    {
      icon: Sprout,
      titulo:
        i18n.language.startsWith("en")
          ? "Basic landscaping"
          : "Paisajismo Básico",
      desc:
        i18n.language.startsWith("en")
          ? "Simple layout improvements, plant positioning, borders and decorative details to make outdoor areas feel more finished."
          : "Mejoras sencillas de distribución, colocación de plantas, borduras y detalles decorativos para rematar zonas exteriores.",
    },
    {
      icon: Droplets,
      titulo:
        i18n.language.startsWith("en")
          ? "Basic irrigation"
          : "Riego Básico",
      desc:
        i18n.language.startsWith("en")
          ? "Checking, adjusting or replacing simple drippers, hoses and visible fittings."
          : "Revisión, ajuste o sustitución simple de goteros, mangueras y conexiones visibles.",
    },
    {
      icon: Home,
      titulo:
        i18n.language.startsWith("en")
          ? "Terraces & patios"
          : "Terrazas y Patios",
      desc:
        i18n.language.startsWith("en")
          ? "General tidying and set-up of outdoor living areas so they feel clean and usable."
          : "Limpieza y puesta a punto de zonas exteriores para que queden agradables y usables.",
    },
    {
      icon: Hammer,
      titulo:
        i18n.language.startsWith("en")
          ? "Light outdoor structures"
          : "Estructuras Ligeras de Exterior",
      desc:
        i18n.language.startsWith("en")
          ? "Raised planters, trellises, borders, simple screens, supports and small timber features."
          : "Jardineras elevadas, celosías, borduras, separadores sencillos, soportes y pequeños elementos de madera.",
    },
    {
      icon: Wrench,
      titulo:
        i18n.language.startsWith("en")
          ? "Small outdoor fixes"
          : "Pequeños Arreglos Exteriores",
      desc:
        i18n.language.startsWith("en")
          ? "Simple supports, borders, stakes, ties and light garden fittings adjusted or replaced."
          : "Soportes, bordes, tutores, bridas y elementos sencillos del jardín ajustados o sustituidos.",
    },
  ];

  const exclusiones: string[] = t("gardeningPage.exclusionsItems", {
    returnObjects: true,
  }) as string[];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero */}
        <section className="brand-hero py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t("gardeningPage.heroTitle")}
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
              {t("gardeningPage.heroSubtitle")}
            </p>
          </div>
        </section>

        {/* Descripción y listado */}
        <section className="py-14">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <h2 className="text-2xl font-bold">
                  {t("gardeningPage.whatIncludedTitle")}
                </h2>
                <p className="text-muted-foreground">
                  {t("gardeningPage.whatIncludedBody")}
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {tareas.map((tarea, i) => (
                    <Card key={i}>
                      <CardContent className="p-4 flex items-start gap-3">
                        <tarea.icon className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <div className="font-semibold">{tarea.titulo}</div>
                          <div className="text-sm text-muted-foreground">{tarea.desc}</div>
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
                      {t("gardeningPage.exclusionsTitle")}
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {exclusiones.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="w-4 h-4 text-primary mr-2 mt-0.5" /> {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">
                      {t("gardeningPage.recommendedTitle")}
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {t("gardeningPage.recommendedItems", {
                        returnObjects: true,
                      }).map((item: string, i: number) => (
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
                    <a href="tel:+34623635732">
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

        {/* CTA Section */}
        <section className="brand-hero py-20 border-t-4 border-primary/90">
          <div className="container mx-auto px-4 text-center">
            <p className="tracking-widest text-base md:text-lg opacity-90 mb-2">
              {t("gardeningPage.ctaBand.eyebrow")}
            </p>
            <h2 className="font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary mb-6">
              {t("gardeningPage.ctaBand.heading")}
            </h2>
            <p className="text-lg md:text-xl opacity-90 max-w-4xl mx-auto mb-10">
              {t("gardeningPage.ctaBand.body")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="rounded-2xl px-8">
                <Link to="/reservar">
                  {t("gardeningPage.ctaBand.bookNow")}
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-2xl px-8 border-2 border-primary text-primary hover:bg-primary hover:text-white">
                <a href="tel:+34623635732">
                  {t("gardeningPage.ctaBand.callLabel")}
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Satisfaction band */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto rounded-3xl bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] p-8 md:p-12 shadow">
              <div className="flex justify-center mb-4">
                <Sprout className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-center text-2xl md:text-3xl font-extrabold text-primary mb-4">
                {t("gardeningPage.satisfactionBand.heading")}
              </h3>
              <p className="text-center text-base md:text-lg opacity-90 max-w-3xl mx-auto mb-4">
                {t("gardeningPage.satisfactionBand.body")}
              </p>
              <div className="text-center">
                <a href="tel:+34623635732" className="text-2xl md:text-3xl font-extrabold text-primary">
                  {t("gardeningPage.ctaBand.callLabel")}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Jardineria;
