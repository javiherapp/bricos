import {
  Check,
  DoorClosed,
  KeyRound,
  LockKeyhole,
  LockKeyholeOpen,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/contact";

const Cerrajeria = () => {
  const { t, i18n } = useTranslation();

  const tareas: Array<{ icon: React.ElementType; titulo: string; desc: string }> = [
    {
      icon: LockKeyholeOpen,
      titulo:
        i18n.language.startsWith("en")
          ? "Residential door opening"
          : "Apertura de Puertas Residenciales",
      desc:
        i18n.language.startsWith("en")
          ? "Opening home doors for flats, houses and apartments when access is authorised."
          : "Apertura de puertas de vivienda, pisos, casas y apartamentos cuando el acceso está autorizado.",
    },
    {
      icon: Wrench,
      titulo:
        i18n.language.startsWith("en")
          ? "Lock maintenance"
          : "Mantenimiento de Cerraduras",
      desc:
        i18n.language.startsWith("en")
          ? "Cleaning, adjustment and basic servicing for residential locks and mechanisms."
          : "Limpieza, ajuste y puesta a punto básica de cerraduras y mecanismos residenciales.",
    },
    {
      icon: KeyRound,
      titulo:
        i18n.language.startsWith("en")
          ? "Cylinder replacement"
          : "Cambio de Bombines",
      desc:
        i18n.language.startsWith("en")
          ? "Replacing worn, damaged or outdated lock cylinders with suitable domestic options."
          : "Sustitución de bombines gastados, dañados o antiguos por opciones adecuadas para el hogar.",
    },
    {
      icon: DoorClosed,
      titulo:
        i18n.language.startsWith("en")
          ? "Door alignment"
          : "Ajuste de Puertas y Cerraderos",
      desc:
        i18n.language.startsWith("en")
          ? "Adjusting doors, strike plates and catches so the lock closes smoothly."
          : "Ajuste de puertas, cerraderos y cierres para que la cerradura funcione con suavidad.",
    },
    {
      icon: LockKeyhole,
      titulo:
        i18n.language.startsWith("en")
          ? "Handles & lock hardware"
          : "Manillas y Herrajes de Cierre",
      desc:
        i18n.language.startsWith("en")
          ? "Replacing or adjusting handles, escutcheons, latches and visible lock hardware."
          : "Sustitución o ajuste de manillas, escudos, pestillos y herrajes visibles de cierre.",
    },
    {
      icon: ShieldCheck,
      titulo:
        i18n.language.startsWith("en")
          ? "Basic access check"
          : "Revisión Básica de Accesos",
      desc:
        i18n.language.startsWith("en")
          ? "Checking the main access points of the home and recommending practical improvements."
          : "Revisión de los accesos principales de la vivienda y recomendación de mejoras prácticas.",
    },
  ];

  const exclusions: string[] = t("locksmithPage.exclusionsItems", {
    returnObjects: true,
  }) as string[];

  const recommended: string[] = t("locksmithPage.recommendedItems", {
    returnObjects: true,
  }) as string[];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <section className="brand-hero py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t("locksmithPage.heroTitle")}
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
              {t("locksmithPage.heroSubtitle")}
            </p>
          </div>
        </section>

        <section className="py-14">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <h2 className="text-2xl font-bold">
                  {t("locksmithPage.whatIncludedTitle")}
                </h2>
                <p className="text-muted-foreground">
                  {t("locksmithPage.whatIncludedBody")}
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
                      {t("locksmithPage.exclusionsTitle")}
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
                      {t("locksmithPage.recommendedTitle")}
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
              {t("locksmithPage.ctaBand.eyebrow")}
            </p>
            <h2 className="font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary mb-6">
              {t("locksmithPage.ctaBand.heading")}
            </h2>
            <p className="text-lg md:text-xl opacity-90 max-w-4xl mx-auto mb-10">
              {t("locksmithPage.ctaBand.body")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="rounded-2xl px-8">
                <Link to="/reservar">
                  {t("locksmithPage.ctaBand.bookNow")}
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

export default Cerrajeria;
