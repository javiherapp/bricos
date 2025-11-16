import {
  Check,
  AirVent,
  Wind,
  Droplets,
  Wrench,
  Shield,
  Filter as FilterIcon,
  Plug,
  Cpu,
  Settings,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const AireAcondicionado = () => {
  const { t, i18n } = useTranslation();

  const tareas: Array<{ icon: React.ElementType; titulo: string; desc: string }> = [
    {
      icon: FilterIcon,
      titulo:
        i18n.language.startsWith("en")
          ? "Filter cleaning"
          : "Limpieza de Filtros",
      desc:
        i18n.language.startsWith("en")
          ? "Removing, cleaning and refitting filters to improve airflow and hygiene."
          : "Retirada, limpieza y recolocación de filtros para mejorar el flujo de aire y la higiene.",
    },
    {
      icon: Wind,
      titulo:
        i18n.language.startsWith("en")
          ? "Indoor & outdoor unit cleaning"
          : "Limpieza de Unidades",
      desc:
        i18n.language.startsWith("en")
          ? "Accessible cleaning of indoor and outdoor units to improve performance and reduce smells."
          : "Limpieza accesible de unidad interior y exterior; mejora del rendimiento y reducción de olores.",
    },
    {
      icon: Settings,
      titulo:
        i18n.language.startsWith("en")
          ? "Fan drum / blower cleaning"
          : "Limpieza de Turbina/Rodete",
      desc:
        i18n.language.startsWith("en")
          ? "Cleaning the accessible fan drum to recover airflow and reduce noise."
          : "Limpieza accesible de la turbina para recuperar caudal y reducir ruidos.",
    },
    {
      icon: Droplets,
      titulo:
        i18n.language.startsWith("en")
          ? "Drip tray & drain"
          : "Bandeja y Desagüe",
      desc:
        i18n.language.startsWith("en")
          ? "Cleaning the condensate tray and unblocking the drain pipe to avoid drips."
          : "Limpieza de bandeja y desatasco del tubo de condensados para evitar goteos.",
    },
    {
      icon: Wrench,
      titulo:
        i18n.language.startsWith("en")
          ? "Covers & casings"
          : "Tapas y Carcasas",
      desc:
        i18n.language.startsWith("en")
          ? "Replacing damaged covers and plastic parts."
          : "Sustitución de cubiertas y piezas plásticas deterioradas.",
    },
    {
      icon: Wrench,
      titulo:
        i18n.language.startsWith("en")
          ? "Fan motor replacement"
          : "Motor de Ventilador",
      desc:
        i18n.language.startsWith("en")
          ? "Replacing the fan motor when this can be done without opening the gas circuit."
          : "Sustitución del motor del ventilador cuando no requiere abrir el circuito frigorífico.",
    },
    {
      icon: Plug,
      titulo:
        i18n.language.startsWith("en")
          ? "Capacitors & fuses"
          : "Condensador Eléctrico y Fusibles",
      desc:
        i18n.language.startsWith("en")
          ? "Replacing accessible capacitors, fuses and similar electrical parts."
          : "Sustitución de condensadores, fusibles y otros elementos eléctricos accesibles.",
    },
    {
      icon: Cpu,
      titulo:
        i18n.language.startsWith("en")
          ? "Boards, sensors & relays"
          : "Placas, Sensores y Relés",
      desc:
        i18n.language.startsWith("en")
          ? "Basic diagnosis and replacement of accessible electronics, IR receivers and sensors."
          : "Diagnóstico básico y reparación/sustitución de electrónica accesible, receptor IR y sensores.",
    },
    {
      icon: Plug,
      titulo:
        i18n.language.startsWith("en")
          ? "Remotes & settings"
          : "Mandos y Configuración",
      desc:
        i18n.language.startsWith("en")
          ? "Checking the remote, batteries, pairing and operating modes."
          : "Revisión de mando a distancia, pilas, sincronización y modos de funcionamiento.",
    },
    {
      icon: Wrench,
      titulo:
        i18n.language.startsWith("en")
          ? "Mounts & vibration"
          : "Anclajes y Vibraciones",
      desc:
        i18n.language.startsWith("en")
          ? "Checking and tightening fixings; fitting anti‑vibration pads where appropriate."
          : "Revisión y apriete de anclajes; colocación de silentblocks cuando procede para reducir vibraciones.",
    },
    {
      icon: Shield,
      titulo:
        i18n.language.startsWith("en")
          ? "Sealing & cosmetic finishing"
          : "Sellados y Acabados",
      desc:
        i18n.language.startsWith("en")
          ? "Checking and sealing wall penetrations/ducting and tidying visible finishes."
          : "Revisión y sellado de pasamuros/canaletas y remates estéticos en pared.",
    },
  ];

  const exclusiones: string[] = t("airconPage.exclusionsItems", {
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
              {t("airconPage.heroTitle")}
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
              {t("airconPage.heroSubtitle")}
            </p>
          </div>
        </section>

        {/* Descripción y listado */}
        <section className="py-14">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <h2 className="text-2xl font-bold">
                  {t("airconPage.whatIncludedTitle")}
                </h2>
                <p className="text-muted-foreground">
                  {t("airconPage.whatIncludedBody")}
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
                      {t("airconPage.exclusionsTitle")}
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {exclusiones.map((e, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="w-4 h-4 text-primary mr-2 mt-0.5" /> {e}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">
                      {t("airconPage.recommendedTitle")}
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {t("airconPage.recommendedItems", {
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
                    <a href="tel:+34965000000">Solicitar presupuesto</a>
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
              {t("airconPage.ctaBand.eyebrow")}
            </p>
            <h2 className="font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary mb-6">
              {t("airconPage.ctaBand.heading")}
            </h2>
            <p className="text-lg md:text-xl opacity-90 max-w-4xl mx-auto mb-10">
              {t("airconPage.ctaBand.body")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="rounded-2xl px-8">
                <Link to="/reservar">
                  {t("airconPage.ctaBand.bookNow")}
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-2xl px-8 border-2 border-primary text-primary hover:bg-primary hover:text-white">
                <a href="tel:+34965000000">
                  {t("airconPage.ctaBand.callLabel")}
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

export default AireAcondicionado;

