import {
  Check,
  Paintbrush,
  Hammer,
  Wrench,
  ShowerHead,
  Wind,
  Droplets,
  DoorOpen,
  PanelsTopLeft,
  Drill,
  House,
  Filter as FilterIcon,
  Phone,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Mantenimiento = () => {
  const { t, i18n } = useTranslation();

  const tareas: Array<{ icon: React.ElementType; titulo: string; desc: string }> = [
    {
      icon: Wrench,
      titulo:
        i18n.language.startsWith("en") ? "Small repairs" : "Reparaciones Menores",
      desc:
        i18n.language.startsWith("en")
          ? "Adjusting hinges, fittings, handles, catches and other small day‑to‑day issues around the home."
          : "Ajuste de bisagras, herrajes, pomos, tiradores, cierres y pequeñas incidencias del hogar.",
    },
    {
      icon: Droplets,
      titulo:
        i18n.language.startsWith("en") ? "Basic plumbing" : "Fontanería Básica",
      desc:
        i18n.language.startsWith("en")
          ? "Fixing dripping taps, replacing traps and flexi‑hoses, and resealing sanitary ware."
          : "Reparación de grifos con fugas, cambio de sifones, sustitución de flexos y sellado de sanitarios.",
    },
    {
      icon: ShowerHead,
      titulo:
        i18n.language.startsWith("en")
          ? "Bathroom changes & installs"
          : "Cambios/Instalaciones de Baño",
      desc:
        i18n.language.startsWith("en")
          ? "Replacing shower heads, taps and hand showers, and resealing joints."
          : "Sustitución de rociadores, grifos, duchas de mano y sellados de juntas.",
    },
    {
      icon: Paintbrush,
      titulo:
        i18n.language.startsWith("en") ? "Paint touch‑ups" : "Retoques de Pintura",
      desc:
        i18n.language.startsWith("en")
          ? "Interior and exterior paint touch‑ups, small patch repairs and colour matching."
          : "Repasos de pintura interior y exterior, pequeños parches y igualado de color.",
    },
    {
      icon: PanelsTopLeft,
      titulo:
        i18n.language.startsWith("en") ? "Plasterboard repair" : "Reparación de Pladur",
      desc:
        i18n.language.startsWith("en")
          ? "Repairing knocks, cracks, pulled‑out fixings and small plasterboard sections."
          : "Reparación de golpes, fisuras, anclajes arrancados y pequeños paneles de yeso laminado.",
    },
    {
      icon: Droplets,
      titulo:
        i18n.language.startsWith("en") ? "Toilets & cisterns" : "WC e Inodoros",
      desc:
        i18n.language.startsWith("en")
          ? "Fixing cistern mechanisms, leaks and minor blockages."
          : "Arreglo de cisternas, mecanismos de descarga, fugas de agua y desatascos menores.",
    },
    {
      icon: FilterIcon,
      titulo:
        i18n.language.startsWith("en")
          ? "Water filters & osmosis units"
          : "Ósmosis y Filtración",
      desc:
        i18n.language.startsWith("en")
          ? "Installing, servicing and changing filters on osmosis and water‑treatment units."
          : "Instalación, mantenimiento y cambio de filtros de equipos de ósmosis y tratamiento de agua.",
    },
    {
      icon: Drill,
      titulo:
        i18n.language.startsWith("en") ? "Carpentry jobs" : "Carpintería",
      desc:
        i18n.language.startsWith("en")
          ? "Adjusting and repairing doors, frames and locks; assembling and fixing furniture."
          : "Ajuste y reparación de puertas, marcos y cerraduras. Montaje y arreglo de muebles.",
    },
    {
      icon: Wind,
      titulo:
        i18n.language.startsWith("en")
          ? "Heating & AC cleaning"
          : "Limpieza de Climatización",
      desc:
        i18n.language.startsWith("en")
          ? "Cleaning filters and accessible units (HVAC/AC) and replacing filters when needed."
          : "Limpieza de filtros y unidades (HVAC/AA) y sustitución de filtros cuando procede.",
    },
    {
      icon: House,
      titulo:
        i18n.language.startsWith("en")
          ? "Small exterior maintenance"
          : "Mantenimiento Exterior",
      desc:
        i18n.language.startsWith("en")
          ? "Sealing, joint repairs, small waterproofing jobs and minor exterior fixes."
          : "Sellados, juntas, impermeabilizaciones puntuales y pequeños arreglos exteriores.",
    },
    {
      icon: DoorOpen,
      titulo:
        i18n.language.startsWith("en")
          ? "Doors & skirting boards"
          : "Puertas y Rodapiés",
      desc:
        i18n.language.startsWith("en")
          ? "Installing and adjusting doors, refitting frames and fitting skirting boards."
          : "Instalación/ajuste de puertas, recolocado de marcos, instalación de rodapiés y remates.",
    },
    {
      icon: Hammer,
      titulo:
        i18n.language.startsWith("en")
          ? "Small structures & framing"
          : "Pequeñas Estructuras",
      desc:
        i18n.language.startsWith("en")
          ? "Reinforcements, small timber framing, anchors and fixings."
          : "Refuerzos, minor framing en madera, anclajes y fijaciones.",
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
              {t("maintenancePage.heroTitle")}
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
              {t("maintenancePage.heroSubtitle")}
            </p>
          </div>
        </section>

        {/* Descripción y beneficios */}
        <section className="py-14">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <h2 className="text-2xl font-bold">
                  {t("maintenancePage.whatIncludedTitle")}
                </h2>
                <p className="text-muted-foreground">
                  {t("maintenancePage.whatIncludedBody")}
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
                      {t("maintenancePage.recommendedTitle")}
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {t("maintenancePage.recommendedItems", {
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
                      {t("maintenancePage.benefitsTitle")}
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {t("maintenancePage.benefitsItems", {
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
              {t("maintenancePage.ctaBand.eyebrow")}
            </p>
            <h2 className="font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary mb-6">
              {t("maintenancePage.ctaBand.heading")}
            </h2>
            <p className="text-lg md:text-xl opacity-90 max-w-4xl mx-auto mb-10">
              {t("maintenancePage.ctaBand.body")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="rounded-2xl px-8">
                <Link to="/reservar">
                  {t("maintenancePage.ctaBand.bookNow")}
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-2xl px-8 border-2 border-primary text-primary hover:bg-primary hover:text-white">
                <a href="tel:+34965000000">
                  {t("maintenancePage.ctaBand.callLabel")}
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Satisfaction/Contact band with spacing before footer */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto rounded-3xl bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] p-8 md:p-12 shadow">
              <h3 className="text-center text-2xl md:text-3xl font-extrabold text-primary mb-4">
                {t("maintenancePage.satisfactionBand.heading")}
              </h3>
              <p className="text-center text-base md:text-lg opacity-90 max-w-3xl mx-auto mb-8">
                {t("maintenancePage.satisfactionBand.body")}
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                  <Phone className="w-7 h-7 text-primary" />
                </div>
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

export default Mantenimiento;

