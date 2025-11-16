import { Check, Home, Wrench, Paintbrush, Droplets, PanelsTopLeft, TreePine, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Exteriores = () => {
  const { t, i18n } = useTranslation();

  const tareas: Array<{ icon: React.ElementType; titulo: string; desc: string }> = [
    {
      icon: Droplets,
      titulo:
        i18n.language.startsWith("en")
          ? "Pressure washing"
          : "Lavado a Presión",
      desc:
        i18n.language.startsWith("en")
          ? "Cleaning exterior floors, façades, walls and terraces to remove dirt, moss and algae."
          : "Limpieza de suelos exteriores, fachadas, muros y terrazas para eliminar suciedad y verdín.",
    },
    {
      icon: Paintbrush,
      titulo:
        i18n.language.startsWith("en")
          ? "Exterior paint touch‑ups"
          : "Retoques de Pintura Exterior",
      desc:
        i18n.language.startsWith("en")
          ? "Touch‑ups to paint on doors, railings, gates and exterior walls."
          : "Repasos de pintura en puertas, verjas y paredes exteriores.",
    },
    {
      icon: PanelsTopLeft,
      titulo:
        i18n.language.startsWith("en")
          ? "Sealing & waterproofing"
          : "Sellados e Impermeabilización",
      desc:
        i18n.language.startsWith("en")
          ? "Sealing joints, cracks and water entry points to help prevent damp."
          : "Sellado de juntas, grietas y puntos de entrada de agua para prevenir humedades.",
    },
    {
      icon: Wrench,
      titulo:
        i18n.language.startsWith("en")
          ? "Terrace & fence repairs"
          : "Reparaciones en Terraza y Vallas",
      desc:
        i18n.language.startsWith("en")
          ? "Small adjustments and repairs on fencing, railings, decking and similar."
          : "Ajustes y reparaciones menores en vallados, barandillas, listones y tarimas.",
    },
    {
      icon: TreePine,
      titulo:
        i18n.language.startsWith("en")
          ? "Basic garden care"
          : "Cuidado de Jardín Básico",
      desc:
        i18n.language.startsWith("en")
          ? "Light pruning, clearing and simple maintenance of garden areas."
          : "Poda ligera, retirada de restos y mantenimiento sencillo de zonas ajardinadas.",
    },
    {
      icon: Home,
      titulo:
        i18n.language.startsWith("en")
          ? "Façade & exterior maintenance"
          : "Mantenimiento de Fachada y Exterior",
      desc:
        i18n.language.startsWith("en")
          ? "Fitting trims, fixings and small repairs on external parts of the property."
          : "Colocación de remates, anclajes, fijaciones y pequeños trabajos en el exterior de la vivienda.",
    },
    {
      icon: Shield,
      titulo:
        i18n.language.startsWith("en")
          ? "Protective treatments & finishes"
          : "Protecciones y Acabados",
      desc:
        i18n.language.startsWith("en")
          ? "Applying protective products on wood/metal and other finishes to extend lifespan."
          : "Aplicación de protectores en madera/metal y acabados para prolongar la vida útil.",
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
              {t("exteriorsPage.heroTitle")}
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
              {t("exteriorsPage.heroSubtitle")}
            </p>
          </div>
        </section>

        {/* Descripción y listado */}
        <section className="py-14">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <h2 className="text-2xl font-bold">
                  {t("exteriorsPage.whatIncludedTitle")}
                </h2>
                <p className="text-muted-foreground">
                  {t("exteriorsPage.whatIncludedBody")}
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
                      {t("exteriorsPage.recommendedTitle")}
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {t("exteriorsPage.recommendedItems", {
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
                      {t("exteriorsPage.benefitsTitle")}
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {t("exteriorsPage.benefitsItems", {
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
              {t("exteriorsPage.ctaBand.eyebrow")}
            </p>
            <h2 className="font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary mb-6">
              {t("exteriorsPage.ctaBand.heading")}
            </h2>
            <p className="text-lg md:text-xl opacity-90 max-w-4xl mx-auto mb-10">
              {t("exteriorsPage.ctaBand.body")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="rounded-2xl px-8">
                <Link to="/reservar">
                  {t("exteriorsPage.ctaBand.bookNow")}
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-2xl px-8 border-2 border-primary text-primary hover:bg-primary hover:text-white">
                <a href="tel:+34965000000">
                  {t("exteriorsPage.ctaBand.callLabel")}
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
                {t("exteriorsPage.satisfactionBand.heading")}
              </h3>
              <p className="text-center text-base md:text-lg opacity-90 max-w-3xl mx-auto mb-4">
                {t("exteriorsPage.satisfactionBand.body")}
              </p>
              <div className="text-center">
                <a href="tel:+34965000000" className="text-2xl md:text-3xl font-extrabold text-primary">
                  (965) 000-000
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

export default Exteriores;

