import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Wrench,
  Hammer,
  X,
  TreePine,
  Shield,
  Zap,
  Clock,
  ThumbsUp,
  User,
  Plug,
  Droplets,
  AirVent,
  Home,
  Paintbrush,
  Leaf,
  Target,
  Users,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import ServiceTerms from "@/components/ServiceTerms";
import ReviewCard from "@/components/ReviewCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import electricalImg from "@/assets/specialty-electrical.jpg";
import carpentryImg from "@/assets/specialty-carpentry.jpg";
import exteriorImg from "@/assets/specialty-exterior.jpg";
import appliancesImg from "@/assets/specialty-appliances.jpg";
import mechanicalImg from "@/assets/specialty-mechanical.jpg";
import plumbingImg from "@/assets/specialty-plumbing.png";
import paintingImg from "@/assets/specialty-painting.jpg";
import gardeningImg from "@/assets/specialty-gardening.jpg";
import { useTranslation } from "react-i18next";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/contact";

const Index = () => {
  const { t } = useTranslation();
  const [isPromoOpen, setIsPromoOpen] = useState(false);
  const promoCode = "BRICOS20";

  const closePromo = useCallback(() => {
    try {
      window.sessionStorage.setItem("bricosPromoSeen", "true");
    } catch {
      // The modal should still close even if storage is blocked.
    }

    setIsPromoOpen(false);
  }, []);

  useEffect(() => {
    try {
      if (window.sessionStorage.getItem("bricosPromoSeen") === "true") {
        return;
      }
    } catch {
      // Session storage can be unavailable in strict browsing modes.
    }

    const timer = window.setTimeout(() => setIsPromoOpen(true), 2500);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isPromoOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closePromo();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closePromo, isPromoOpen]);

  const services = [
    {
      icon: Wrench,
      shortTitle: t("home.hero.serviceGlance.maintenance"),
      title: t("home.services.cards.maintenance.title"),
      description: t("home.services.cards.maintenance.description"),
      link: "/servicios/mantenimiento",
    },
    {
      icon: Hammer,
      shortTitle: t("home.hero.serviceGlance.assembly"),
      title: t("home.services.cards.assembly.title"),
      description: t("home.services.cards.assembly.description"),
      link: "/servicios/montaje",
    },
    {
      icon: Droplets,
      shortTitle: t("home.hero.serviceGlance.plumbing"),
      title: t("home.services.cards.plumbing.title"),
      description: t("home.services.cards.plumbing.description"),
      link: "/servicios/fontaneria",
    },
    {
      icon: AirVent,
      shortTitle: t("home.hero.serviceGlance.aircon"),
      title: t("home.services.cards.aircon.title"),
      description: t("home.services.cards.aircon.description"),
      link: "/servicios/aire-acondicionado",
    },
    {
      icon: Zap,
      shortTitle: t("home.hero.serviceGlance.electrical"),
      title: t("home.services.cards.electrical.title"),
      description: t("home.services.cards.electrical.description"),
      link: "/servicios/electricidad",
    },
    {
      icon: Plug,
      shortTitle: t("home.hero.serviceGlance.appliances"),
      title: t("home.services.cards.appliances.title"),
      description: t("home.services.cards.appliances.description"),
      link: "/servicios/electrodomesticos",
    },
    {
      icon: Home,
      secondaryIcon: TreePine,
      shortTitle: t("home.hero.serviceGlance.exteriors"),
      title: t("home.services.cards.exteriors.title"),
      description: t("home.services.cards.exteriors.description"),
      link: "/servicios/exteriores",
    },
    {
      icon: Paintbrush,
      shortTitle: t("home.hero.serviceGlance.painting"),
      title: t("home.services.cards.painting.title"),
      description: t("home.services.cards.painting.description"),
      link: "/servicios/pintura",
    },
    {
      icon: Leaf,
      shortTitle: t("home.hero.serviceGlance.gardening"),
      title: t("home.services.cards.gardening.title"),
      description: t("home.services.cards.gardening.description"),
      link: "/servicios/jardineria",
    },
  ];

  const specialties = [
    {
      image: electricalImg,
      name: t("home.services.cards.electrical.title"),
    },
    {
      image: mechanicalImg,
      name: t("home.services.cards.maintenance.title"),
    },
    {
      image: carpentryImg,
      name: t("home.specialties.carpentry"),
    },
    {
      image: paintingImg,
      name: t("home.services.cards.painting.title"),
    },
    {
      image: exteriorImg,
      name: t("home.services.cards.exteriors.title"),
    },
    {
      image: gardeningImg,
      name: t("home.services.cards.gardening.title"),
    },
    {
      image: appliancesImg,
      name: t("home.services.cards.appliances.title"),
    },
    {
      image: plumbingImg,
      name: t("home.specialties.plumbing"),
    },
  ];

  const reviews = [
    {
      name: "María García",
      initials: "MG",
      review: "Excelente servicio. Muy atentos al detalle en las comunicaciones, presupuesto, programación y trabajo realizado. Recomiendo totalmente este equipo profesional."
    },
    {
      name: "Emily Johnson",
      initials: "EJ",
      review: "Outstanding service. Clear communication, fair pricing, punctual scheduling, and excellent workmanship. Highly recommended."
    },
    {
      name: "Ana Martínez",
      initials: "AM",
      review: "Es raro encontrar un servicio como Bricos que se destaque en trabajos de calidad. Su trabajo es minucioso, duradero y a un precio razonable. Los recomiendo altamente."
    },
    {
      name: "Graham Whitaker",
      initials: "GW",
      review: "They fixed a dodgy light switch and put up two shelves the same afternoon. Texted ahead, arrived 10 minutes early, price exactly as quoted, and left everything tidy. Will use again."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section
          className="relative bg-cover bg-center text-white py-32 md:py-40"
          style={{
            // First image: your uploaded file in /public/hero.jpg
            // Second image: fallback Unsplash photo if the first is missing
            backgroundImage:
              "url(/hero.png), url(/hero.jpg), url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070')",
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
              <h1 className="max-w-3xl text-4xl md:text-6xl font-extrabold mb-6">
                {t("home.hero.title")}
              </h1>
              <p className="max-w-3xl text-xl mb-8 opacity-90">
                {t("home.hero.subtitle")}
              </p>
              <div className="max-w-3xl flex flex-col sm:flex-row gap-4 items-center justify-center">
                <Button size="lg" asChild className="text-lg bg-primary hover:bg-primary/90 text-white rounded-full px-8">
                  <Link to="/reservar">{t("home.hero.ctaQuote")}</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-lg border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-full px-8">
                  <a href={`tel:${PHONE_TEL}`}>
                    <Phone className="w-5 h-5 mr-2" />
                    {PHONE_DISPLAY}
                  </a>
                </Button>
              </div>
              <nav
                className="mt-8 grid max-w-4xl grid-cols-3 gap-3 sm:grid-cols-5 lg:grid-cols-9"
                aria-label={t("home.hero.serviceGlance.label")}
              >
                {services.map(({ icon: Icon, secondaryIcon: SecondaryIcon, shortTitle, title, link }) => (
                  <Link
                    key={link}
                    to={link}
                    className="group flex min-h-[5.4rem] min-w-0 flex-col items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/10 px-2.5 py-3 text-center text-white shadow-sm backdrop-blur-sm transition hover:border-primary hover:bg-primary/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black/60"
                    aria-label={title}
                  >
                    <span className="relative flex h-8 w-8 shrink-0 items-center justify-center">
                      {SecondaryIcon ? (
                        <>
                          <Icon className="h-6 w-6 translate-x-1 text-white transition-transform group-hover:scale-110" />
                          <SecondaryIcon className="absolute h-5 w-5 -translate-x-2 -translate-y-1 text-white/85 transition-transform group-hover:scale-110" />
                        </>
                      ) : (
                        <Icon className="h-7 w-7 text-white transition-transform group-hover:scale-110" />
                      )}
                    </span>
                    <span className="max-w-full break-words text-[0.68rem] font-semibold leading-tight opacity-95">
                      {shortTitle}
                    </span>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </section>

        {/* Specialties Carousel Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              {t("home.specialties.title")}
            </h2>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 3000,
                }),
              ]}
              className="w-full max-w-5xl mx-auto"
            >
              <CarouselContent>
                {specialties.map((specialty, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-2">
                      <div className="flex flex-col items-center">
                        <div className="w-40 h-40 rounded-full overflow-hidden mb-3 shadow-lg">
                          <img
                            src={specialty.image}
                            alt={specialty.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h3 className="text-base font-semibold text-center">{specialty.name}</h3>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              {t("home.services.title")}
            </h2>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
              {t("home.services.description")}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </section>

        <ServiceTerms variant="summary" />

        {/* Why Choose Us Section - Redesigned */}
        <section className="py-20 bg-[hsl(var(--light-bg))]">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-center mb-6">
              {t("home.whyPanel.headingBeforeBrand")}{" "}
              <span className="brand-script brand-script--primary align-baseline">Bricos</span>
              {t("home.whyPanel.headingAfterBrand")}
            </h2>
            <p className="text-lg md:text-xl text-center text-muted-foreground max-w-4xl mx-auto mb-12">
              {t("home.whyPanel.intro")}
            </p>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Mascot + brand panel */}
              <div className="flex flex-col items-center">
                <div className="w-72 h-72 md:w-80 md:h-80 rounded-full bg-white shadow-xl flex items-center justify-center ring-1 ring-black/5">
                  <div className="text-[4.5rem] md:text-[5rem]" aria-hidden>🛠️</div>
                </div>
              </div>

              {/* Right: bullets + call/cta */}
              <div>
                {/* Why choose label above phone number */}
                <div className="mb-2">
                  <span className="text-foreground/70">{t("home.whyPanel.whyChooseLabel")} </span>
                  <span className="brand-script brand-script--primary text-2xl align-baseline">Bricos</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-center md:gap-6 mb-8">
                  <a href={`tel:${PHONE_TEL}`} className="text-2xl md:text-3xl font-extrabold tracking-tight hover:text-[hsl(var(--primary))] transition-colors">
                    +34 623 635 732
                  </a>
                  <span className="text-muted-foreground">{t("home.whyPanel.callPrompt")}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-center gap-3">
                    <Wrench className="w-6 h-6 text-[hsl(var(--primary))]" />
                    <span className="text-lg font-medium">{t("home.whyPanel.bullets.experience")}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-6 h-6 text-[hsl(var(--primary))]" />
                    <span className="text-lg font-medium">{t("home.whyPanel.bullets.yearRound")}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="w-6 h-6 text-[hsl(var(--primary))]" />
                    <span className="text-lg font-medium">{t("home.whyPanel.bullets.coverage")}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <ThumbsUp className="w-6 h-6 text-[hsl(var(--primary))]" />
                    <span className="text-lg font-medium">{t("home.whyPanel.bullets.trustedTeam")}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Zap className="w-6 h-6 text-[hsl(var(--primary))]" />
                    <span className="text-lg font-medium">{t("home.whyPanel.bullets.value")}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Hammer className="w-6 h-6 text-[hsl(var(--primary))]" />
                    <span className="text-lg font-medium">{t("home.whyPanel.bullets.commitment")}</span>
                  </div>
                </div>

                <div className="mt-10">
                  <Button size="lg" variant="outline" asChild className="rounded-xl px-8 py-6 text-base md:text-lg">
                    <Link to="/sobre-nosotros">{t("home.whyPanel.moreAboutUs")}</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Stats Hero (before Reviews) */}
        <section className="brand-hero py-24">
          <div className="container mx-auto px-4 text-center">
            <div className="brand-script brand-script--primary text-6xl md:text-8xl mb-6">
              Bricos
            </div>
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight max-w-5xl mx-auto">
              {t("home.stats.line")}
            </h2>

            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <div className="flex flex-col items-center">
                <User className="w-16 h-16 mb-4 text-secondary-foreground/90" />
                <div className="text-6xl font-extrabold">100+</div>
                <div className="text-lg opacity-90">{t("home.stats.happyClients")}</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="relative mb-4 h-16 w-16 text-secondary-foreground/90">
                  <Wrench className="absolute inset-0 w-16 h-16 rotate-12" />
                  <Hammer className="absolute inset-0 w-16 h-16 -rotate-12" />
                </div>
                <div className="text-6xl font-extrabold">5★</div>
                <div className="text-lg opacity-90">{t("home.stats.rating")}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us - Cards Section */}
        <section className="relative py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-center mb-6">
              {t("home.whyCards.title")}
            </h2>
            <p className="text-lg md:text-xl text-center text-muted-foreground max-w-5xl mx-auto mb-12">
              {t("home.whyCards.intro")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl shadow-lg ring-1 ring-black/5 p-8 border-t-4 border-primary">
                <div className="mb-6 flex justify-center">
                  <Target className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-center mb-4">
                  {t("home.whyCards.craftTitle")}
                </h3>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {t("home.whyCards.craftText")}
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg ring-1 ring-black/5 p-8 border-t-4 border-primary">
                <div className="mb-6 flex justify-center">
                  <Wrench className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-center mb-4">
                  {t("home.whyCards.rangeTitle")}
                </h3>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {t("home.whyCards.rangeText")}
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg ring-1 ring-black/5 p-8 border-t-4 border-primary">
                <div className="mb-6 flex justify-center">
                  <Users className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-center mb-4">
                  {t("home.whyCards.familyTitle")}
                </h3>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {t("home.whyCards.familyText")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              {t("home.reviews.title")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {reviews.map((review, index) => (
                <ReviewCard key={index} {...review} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t("home.cta.title")}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {t("home.cta.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" asChild className="text-lg bg-white text-secondary hover:bg-white/90">
                <a href={`tel:${PHONE_TEL}`} className="flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  {PHONE_DISPLAY}
                </a>
              </Button>
              <Button size="lg" asChild className="text-lg">
                <Link to="/reservar">{t("home.cta.bookOnline")}</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {isPromoOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/65 px-4 py-6 backdrop-blur-sm"
          onClick={closePromo}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="bricos-promo-title"
            className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-white px-6 pb-12 pt-14 text-center text-foreground shadow-2xl sm:px-12 md:px-20 md:pb-16 md:pt-16"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-black text-white transition hover:bg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:right-6 sm:top-6 sm:h-14 sm:w-14"
              onClick={closePromo}
              aria-label={t("home.promoModal.close")}
            >
              <X className="h-7 w-7" />
            </button>

            <div className="relative z-10">
              <div className="mb-7 flex justify-center">
                <div className="brand-logo text-6xl font-extrabold text-secondary sm:text-7xl">
                  <span className="brand-word">Brico</span>
                  <span className="brand-s">s</span>
                </div>
              </div>
              <p className="mb-4 text-sm font-black uppercase text-primary">
                {t("home.promoModal.eyebrow")}
              </p>
              <h2
                id="bricos-promo-title"
                className="mx-auto max-w-3xl text-3xl font-black uppercase leading-tight text-primary sm:text-5xl md:text-6xl"
              >
                {t("home.promoModal.headline")}
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg font-semibold sm:text-2xl">
                {t("home.promoModal.codeLabel")}{" "}
                <span className="font-black text-primary">{promoCode}</span>
              </p>
              <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">
                {t("home.promoModal.note")}
              </p>

              <Button
                asChild
                size="lg"
                className="mt-8 rounded-full border-2 border-black bg-primary px-10 text-base font-black text-black hover:bg-primary/90 sm:px-16"
              >
                <Link to={`/reservar?promo=${promoCode}`} onClick={closePromo}>
                  {t("home.promoModal.cta")}
                </Link>
              </Button>
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2 bg-primary" aria-hidden="true" />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Index;
