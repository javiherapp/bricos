import { Check, Package, Plug, Tv, Image, Dog, PanelsTopLeft, Wrench } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Montaje = () => {
  const { t, i18n } = useTranslation();

  const tareas: Array<{ icon: React.ElementType; titulo: string; desc: string }> = [
    {
      icon: Package,
      titulo:
        i18n.language.startsWith("en")
          ? "Flat‑pack & furniture assembly (incl. IKEA)"
          : "Montaje de Muebles (incl. IKEA)",
      desc:
        i18n.language.startsWith("en")
          ? "Careful assembly and adjustment of living room, bedroom and outdoor furniture, following instructions properly."
          : "Montaje y ajuste de muebles de salón, dormitorio y exterior; montaje cuidadoso siguiendo instrucciones.",
    },
    {
      icon: Plug,
      titulo:
        i18n.language.startsWith("en")
          ? "Appliance installation"
          : "Instalación de Electrodomésticos",
      desc:
        i18n.language.startsWith("en")
          ? "Positioning, levelling and basic connection of washing machines, dishwashers, ovens, microwaves and hobs."
          : "Ubicación, nivelado y conexión (cuando aplica) de lavadoras, lavavajillas, hornos, microondas y encimeras.",
    },
    {
      icon: Tv,
      titulo:
        i18n.language.startsWith("en")
          ? "TV mounting & wall brackets"
          : "Montaje y Anclaje de TV",
      desc:
        i18n.language.startsWith("en")
          ? "Secure wall mounting, basic cable concealment and positioning for the room."
          : "Fijación segura en pared, ocultación básica de cables y orientación según la estancia.",
    },
    {
      icon: Image,
      titulo:
        i18n.language.startsWith("en")
          ? "Hanging pictures & mirrors"
          : "Colgado de Cuadros y Espejos",
      desc:
        i18n.language.startsWith("en")
          ? "Measuring, aligning and fixing with the right anchors for each surface."
          : "Medición, alineado y fijación con los anclajes adecuados para la superficie.",
    },
    {
      icon: PanelsTopLeft,
      titulo:
        i18n.language.startsWith("en")
          ? "Blinds & curtain installation"
          : "Instalación de Estores/Cortinas",
      desc:
        i18n.language.startsWith("en")
          ? "Fitting brackets, levelling and adjusting blinds and curtain poles."
          : "Colocación de soportes, nivelado y ajuste de estores y barras de cortina.",
    },
    {
      icon: Dog,
      titulo:
        i18n.language.startsWith("en")
          ? "Pet door installation"
          : "Instalación de Puerta para Mascotas",
      desc:
        i18n.language.startsWith("en")
          ? "Cutting, fitting and securing pet doors in suitable doors."
          : "Apertura, encastre e instalación de puerta para mascotas en puertas adecuadas.",
    },
    {
      icon: Wrench,
      titulo:
        i18n.language.startsWith("en")
          ? "BBQ & outdoor furniture assembly"
          : "Montaje de BBQ y Mobiliario Exterior",
      desc:
        i18n.language.startsWith("en")
          ? "Assembly of barbecues, terrace sets and other outdoor items."
          : "Montaje de barbacoas, conjuntos de terraza y otros elementos para exterior.",
    },
    {
      icon: PanelsTopLeft,
      titulo:
        i18n.language.startsWith("en")
          ? "Small plasterboard installs"
          : "Instalación de Pladur (Puntual)",
      desc:
        i18n.language.startsWith("en")
          ? "Small plasterboard installations or extensions where needed."
          : "Pequeñas instalaciones o ampliaciones de placas de yeso laminado según necesidad.",
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
              {t("assemblyPage.heroTitle")}
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
              {t("assemblyPage.heroSubtitle")}
            </p>
          </div>
        </section>

        {/* Descripción y listado */}
        <section className="py-14">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <h2 className="text-2xl font-bold">
                  {t("assemblyPage.whatIncludedTitle")}
                </h2>
                <p className="text-muted-foreground">
                  {t("assemblyPage.whatIncludedBody")}
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
                      {t("assemblyPage.recommendedTitle")}
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {t("assemblyPage.recommendedItems", {
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
                      {t("assemblyPage.benefitsTitle")}
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {t("assemblyPage.benefitsItems", {
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
              {t("assemblyPage.ctaBand.eyebrow")}
            </p>
            <h2 className="font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary mb-6">
              {t("assemblyPage.ctaBand.heading")}
            </h2>
            <p className="text-lg md:text-xl opacity-90 max-w-4xl mx-auto mb-10">
              {t("assemblyPage.ctaBand.body")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="rounded-2xl px-8">
                <Link to="/reservar">
                  {t("assemblyPage.ctaBand.bookNow")}
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-2xl px-8 border-2 border-primary text-primary hover:bg-primary hover:text-white">
                <a href="tel:+34965000000">
                  {t("assemblyPage.ctaBand.callLabel")}
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Satisfaction band */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto rounded-3xl bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] p-8 md:p-12 shadow">
              <h3 className="text-center text-2xl md:text-3xl font-extrabold text-primary mb-4">
                {t("assemblyPage.satisfactionBand.heading")}
              </h3>
              <p className="text-center text-base md:text-lg opacity-90 max-w-3xl mx-auto mb-4">
                {t("assemblyPage.satisfactionBand.body")}
              </p>
              <div className="text-center">
                <a href="tel:+34965000000" className="text-2xl md:text-3xl font-extrabold text-primary">
                  {t("assemblyPage.ctaBand.callLabel")}
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

export default Montaje;

