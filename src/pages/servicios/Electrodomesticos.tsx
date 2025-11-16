import { Check, Plug, Wrench, Droplets, PanelsTopLeft, Shield, Gauge, Tv } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Electrodomesticos = () => {
  const { t, i18n } = useTranslation();

  const tareas: Array<{ icon: React.ElementType; titulo: string; desc: string }> = [
    {
      icon: Plug,
      titulo:
        i18n.language.startsWith("en")
          ? "Appliance installation"
          : "Instalación de Electrodomésticos",
      desc:
        i18n.language.startsWith("en")
          ? "Positioning, levelling and basic connection of washing machines, dishwashers, ovens, hobs and microwaves."
          : "Colocación, nivelado y conexión básica de lavadoras, lavavajillas, hornos, encimeras y microondas.",
    },
    {
      icon: Wrench,
      titulo:
        i18n.language.startsWith("en")
          ? "Light repairs & adjustments"
          : "Reparaciones Menores",
      desc:
        i18n.language.startsWith("en")
          ? "Adjustments, fixings, simple part replacements and correcting noise or vibration."
          : "Ajustes, fijaciones, sustitución de piezas simples y corrección de ruidos o vibraciones.",
    },
    {
      icon: Droplets,
      titulo:
        i18n.language.startsWith("en")
          ? "Water inlets & wastes"
          : "Tomas de Agua y Desagües",
      desc:
        i18n.language.startsWith("en")
          ? "Replacing hoses, traps and water connections to help prevent leaks."
          : "Cambio de mangueras, sifones y conexiones de entrada/salida de agua para evitar fugas.",
    },
    {
      icon: PanelsTopLeft,
      titulo:
        i18n.language.startsWith("en")
          ? "Cabinet fit & integration"
          : "Encastre y Ajustes en Mueble",
      desc:
        i18n.language.startsWith("en")
          ? "Adjusting openings, trims and edges so appliances sit neatly in your kitchen units."
          : "Ajuste de huecos, perfilería y remates para integración estética en la cocina.",
    },
    {
      icon: Gauge,
      titulo:
        i18n.language.startsWith("en")
          ? "Levelling & set‑up"
          : "Nivelado y Puesta a Punto",
      desc:
        i18n.language.startsWith("en")
          ? "Precise levelling, checking fixings and basic function tests."
          : "Nivelado preciso, verificación de anclajes y pruebas básicas de funcionamiento.",
    },
    {
      icon: Shield,
      titulo:
        i18n.language.startsWith("en")
          ? "Safety & protection"
          : "Seguridad y Protección",
      desc:
        i18n.language.startsWith("en")
          ? "Checking visible cabling, securing sockets and offering safe‑use advice."
          : "Revisión de cableado visible, fijación de enchufes y recomendaciones de uso seguro.",
    },
    {
      icon: Tv,
      titulo:
        i18n.language.startsWith("en")
          ? "Cooker hoods & other units"
          : "Campanas y Otros Equipos",
      desc:
        i18n.language.startsWith("en")
          ? "Fitting and fixing cooker hoods, extractors and other small auxiliary units."
          : "Montaje y fijación de campanas, extractores y pequeños equipos auxiliares.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero */}
        <section className="brand-hero py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t("appliancesPage.heroTitle")}
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
              {t("appliancesPage.heroSubtitle")}
            </p>
          </div>
        </section>

        {/* Descripción y listado */}
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
                  {tareas.map((t, i) => (
                    <Card key={i}>
                      <CardContent className="p-4 flex items-start gap-3">
                        <t.icon className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <div className="font-semibold">{t.titulo}</div>
                          <div className="text-sm text-muted-foreground">{t.desc}</div>
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
                      {t("appliancesPage.recommendedItems", {
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
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">
                      {t("appliancesPage.benefitsTitle")}
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {t("appliancesPage.benefitsItems", {
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
                    <a href="tel:+34965000000">
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
              {t("appliancesPage.ctaBand.eyebrow")}
            </p>
            <h2 className="font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary mb-6">
              {t("appliancesPage.ctaBand.heading")}
            </h2>
            <p className="text-lg md:text-xl opacity-90 max-w-4xl mx-auto mb-10">
              {t("appliancesPage.ctaBand.body")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="rounded-2xl px-8">
                <Link to="/reservar">
                  {t("appliancesPage.ctaBand.bookNow")}
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-2xl px-8 border-2 border-primary text-primary hover:bg-primary hover:text-white">
                <a href="tel:+34965000000">
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

