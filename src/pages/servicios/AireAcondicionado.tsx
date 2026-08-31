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
  MessageCircle,
  CheckCircle2,
  Star,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import airconHeroImg from "@/assets/aircon-service-hero.jpg";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/contact";

const AireAcondicionado = () => {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language.startsWith("en");
  const bookingLink = `/reservar?servicio=aire-acondicionado${isEnglish ? "&lng=en" : ""}`;

  const coreServices = [
    {
      icon: Wrench,
      title: isEnglish ? "Repairs" : "Reparaciones",
      desc: isEnglish
        ? "Fast diagnosis and repair when your air-con leaks, smells, makes noise or stops cooling."
        : "Diagnóstico y reparación cuando el aire gotea, huele, hace ruido o no enfría bien.",
    },
    {
      icon: FilterIcon,
      title: isEnglish ? "Maintenance & cleaning" : "Mantenimiento y limpieza",
      desc: isEnglish
        ? "Filter, unit, fan drum, drain and tray cleaning to improve airflow and hygiene."
        : "Limpieza de filtros, unidades, turbina, bandeja y desagüe para mejorar aire e higiene.",
    },
    {
      icon: Settings,
      title: isEnglish ? "Installations" : "Instalaciones",
      desc: isEnglish
        ? "Installation, replacement and commissioning of domestic split air-conditioning units."
        : "Instalación, sustitución y puesta en marcha de equipos split domésticos.",
    },
    {
      icon: AirVent,
      title: isEnglish ? "Gas refills" : "Carga de gas",
      desc: isEnglish
        ? "Leak checks, pressure checks and refrigerant charging when the system needs it."
        : "Revisión de fugas, presión y carga de refrigerante cuando el sistema lo necesita.",
    },
  ];

  const heroBullets = [
    isEnglish ? "Repairs, servicing and installations" : "Reparación, mantenimiento e instalación",
    isEnglish ? "Send photos by WhatsApp for a quicker quote" : "Envíe fotos por WhatsApp para valorar antes",
    isEnglish ? "Vega Baja, Torrevieja and Orihuela Costa" : "Vega Baja, Torrevieja y Orihuela Costa",
  ];

  const benefits = [
    {
      icon: Wind,
      title: isEnglish ? "Better performance" : "Mejor rendimiento",
      desc: isEnglish
        ? "Keep the unit working at its best."
        : "Ayuda a que el equipo enfríe como debe.",
    },
    {
      icon: Droplets,
      title: isEnglish ? "Cleaner air" : "Aire más limpio",
      desc: isEnglish
        ? "Reduce dust, smells and blocked drains."
        : "Reduce polvo, olores y problemas de desagüe.",
    },
    {
      icon: Shield,
      title: isEnglish ? "Reliable service" : "Servicio fiable",
      desc: isEnglish
        ? "Local, careful work with clear quotes."
        : "Trabajo local y cuidado con presupuesto claro.",
    },
  ];

  const tareas: Array<{ icon: React.ElementType; titulo: string; desc: string }> = [
    {
      icon: Wrench,
      titulo:
        i18n.language.startsWith("en")
          ? "Diagnosis & repairs"
          : "Diagnóstico y Reparaciones",
      desc:
        i18n.language.startsWith("en")
          ? "Finding faults in domestic split units and repairing accessible parts where possible."
          : "Localización de fallos en equipos split domésticos y reparación de piezas accesibles cuando procede.",
    },
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
      icon: AirVent,
      titulo:
        i18n.language.startsWith("en")
          ? "Gas / refrigerant charging"
          : "Carga de Gas/Refrigerante",
      desc:
        i18n.language.startsWith("en")
          ? "Pressure checks, leak diagnosis and refrigerant charging when the system needs it."
          : "Revisión de presión, detección de fugas y carga de refrigerante cuando el equipo lo necesita.",
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
          ? "Replacing the fan motor and checking related system components where needed."
          : "Sustitución del motor del ventilador y revisión de los elementos necesarios del sistema.",
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
      icon: Settings,
      titulo:
        i18n.language.startsWith("en")
          ? "Installation & commissioning"
          : "Instalación y Puesta en Marcha",
      desc:
        i18n.language.startsWith("en")
          ? "Installing, replacing and commissioning domestic split units with tidy visible finishes."
          : "Instalación, sustitución y puesta en marcha de equipos split domésticos con remates visibles cuidados.",
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

  const reviewStyleCards = isEnglish
    ? [
        {
          initials: "MC",
          title: "Maintenance & cleaning",
          service: "Air-conditioning service",
          review:
            "Filters, indoor unit, accessible fan drum, tray and drain checked so the system can recover airflow and remove smells.",
        },
        {
          initials: "RD",
          title: "Repair diagnosis",
          service: "Weak cooling, leaks or noise",
          review:
            "Clear checks before replacing parts: outdoor unit, visible electrics, pressures, leaks, vibration and cooling performance.",
        },
        {
          initials: "IN",
          title: "Installations",
          service: "New split units and replacements",
          review:
            "Tidy visible finishes, commissioning, remote setup and practical guidance before leaving the air-con ready to use.",
        },
      ]
    : [
        {
          initials: "ML",
          title: "Mantenimiento y limpieza",
          service: "Servicio de aire acondicionado",
          review:
            "Filtros, unidad interior, turbina accesible, bandeja y desagüe revisados para recuperar caudal y quitar olores.",
        },
        {
          initials: "DR",
          title: "Diagnóstico y reparación",
          service: "No enfría, gotea o hace ruido",
          review:
            "Revisión clara antes de cambiar piezas: unidad exterior, electricidad visible, presión, fugas, vibraciones y rendimiento.",
        },
        {
          initials: "IN",
          title: "Instalaciones",
          service: "Equipos split nuevos o sustituciones",
          review:
            "Remates visibles cuidados, puesta en marcha, configuración del mando y comprobación final antes de dejarlo funcionando.",
        },
      ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero */}
        <section
          className="relative flex min-h-[calc(100svh-5rem)] items-end overflow-hidden bg-cover bg-center text-white md:min-h-[660px]"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(31, 19, 9, 0.08) 0%, rgba(31, 19, 9, 0.45) 42%, rgba(31, 19, 9, 0.94) 100%), linear-gradient(90deg, rgba(31, 19, 9, 0.92) 0%, rgba(31, 19, 9, 0.65) 48%, rgba(31, 19, 9, 0.05) 100%), url(${airconHeroImg})`,
          }}
        >
          <div className="container mx-auto px-4 pb-8 pt-20 md:pb-14">
            <div className="max-w-4xl">
              <p className="mb-4 inline-block max-w-full rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-black uppercase leading-5 text-white backdrop-blur-sm md:text-sm">
                {t("airconPage.heroEyebrow")}
              </p>
              <h1 className="max-w-3xl text-5xl font-black leading-none md:text-7xl">
                {t("airconPage.heroTitle")}
              </h1>
              <p className="mt-5 max-w-2xl text-lg font-medium leading-8 opacity-95 md:text-2xl">
                {t("airconPage.heroSubtitle")}
              </p>
              <div className="mt-6 grid gap-2 sm:grid-cols-3">
                {heroBullets.map((item) => (
                  <div key={item} className="flex items-start gap-2 rounded-lg border border-white/15 bg-white/10 p-3 text-sm font-semibold backdrop-blur-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="rounded-full px-8 text-base font-black">
                  <Link to={bookingLink}>
                    <MessageCircle className="mr-2 h-5 w-5" />
                    {t("airconPage.heroCta")}
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full border-2 border-white bg-white text-secondary hover:bg-primary hover:text-white">
                  <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-secondary py-5 text-secondary-foreground">
          <div className="container mx-auto px-4">
            <div className="grid gap-3 md:grid-cols-3">
              {benefits.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 p-4">
                  <Icon className="mt-1 h-6 w-6 shrink-0 text-primary" />
                  <div>
                    <h2 className="font-black uppercase leading-tight">{title}</h2>
                    <p className="mt-1 text-sm text-secondary-foreground/80">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-black md:text-5xl">
                {t("airconPage.servicesTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                {t("airconPage.servicesIntro")}
              </p>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              {coreServices.map(({ icon: Icon, title, desc }) => (
                <Card key={title} className="h-full border-t-4 border-t-primary">
                  <CardContent className="p-5">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-black">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-muted/30 py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-black uppercase text-primary">
                {isEnglish ? "Air-con work" : "Trabajos de aire acondicionado"}
              </p>
              <h2 className="mt-2 text-3xl font-black md:text-4xl">
                {isEnglish ? "What the service focuses on" : "Lo que se cuida en cada aviso"}
              </h2>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
              {reviewStyleCards.map((card) => (
                <article
                  key={card.title}
                  className="h-full rounded-lg border border-border bg-white p-5 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-black text-primary-foreground">
                        {card.initials}
                      </div>
                      <div className="min-w-0">
                        <h3 className="truncate text-base font-black">{card.title}</h3>
                        <p className="truncate text-xs font-medium text-muted-foreground">
                          {card.service}
                        </p>
                      </div>
                    </div>
                    <span className="rounded-full border border-border px-2 py-1 text-[0.65rem] font-black uppercase text-muted-foreground">
                      Bricos
                    </span>
                  </div>
                  <div
                    className="mt-4 flex gap-0.5"
                    aria-label={isEnglish ? "Five star service style" : "Estilo de servicio cinco estrellas"}
                  >
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="mt-3 text-sm leading-6 text-foreground">
                    {card.review}
                  </p>
                </article>
              ))}
            </div>
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
                    <Link to={bookingLink}>
                      {t("airconPage.ctaBand.bookNow")}
                    </Link>
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
                <Link to={bookingLink}>
                  {t("airconPage.ctaBand.bookNow")}
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-2xl px-8 border-2 border-primary text-primary hover:bg-primary hover:text-white">
                <a href={`tel:${PHONE_TEL}`}>
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
