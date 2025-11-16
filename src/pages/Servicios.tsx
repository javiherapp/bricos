import { Wrench, Hammer, Plug, TreePine, AirVent, Zap, Home } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { useTranslation } from "react-i18next";

const Servicios = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Wrench,
      title: t("home.services.cards.maintenance.title"),
      description: t("home.services.cards.maintenance.description"),
      link: "/servicios/mantenimiento",
    },
    {
      icon: Hammer,
      title: t("home.services.cards.assembly.title"),
      description: t("home.services.cards.assembly.description"),
      link: "/servicios/montaje",
    },
    {
      icon: Plug,
      title: t("home.services.cards.appliances.title"),
      description: t("home.services.cards.appliances.description"),
      link: "/servicios/electrodomesticos",
    },
    {
      icon: Home,
      secondaryIcon: TreePine,
      title: t("home.services.cards.exteriors.title"),
      description: t("home.services.cards.exteriors.description"),
      link: "/servicios/exteriores",
    },
    {
      icon: AirVent,
      title: t("home.services.cards.aircon.title"),
      description: t("home.services.cards.aircon.description"),
      link: "/servicios/aire-acondicionado",
    },
    {
      icon: Zap,
      title: t("home.services.cards.electrical.title"),
      description: t("home.services.cards.electrical.description"),
      link: "/servicios/electricidad",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="brand-hero py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
              {t("servicesPage.heroTitle")}
            </h1>
            <p className="text-xl text-center max-w-3xl mx-auto opacity-90">
              {t("servicesPage.heroSubtitle")}
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
              {t("servicesPage.intro")}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </section>

        {/* Additional Info Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">
                {t("servicesPage.whyTitle")}
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-background p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">
                    {t("servicesPage.blocks.certifiedTitle")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("servicesPage.blocks.certifiedText")}
                  </p>
                </div>
                <div className="bg-background p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">
                    {t("servicesPage.blocks.quoteTitle")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("servicesPage.blocks.quoteText")}
                  </p>
                </div>
                <div className="bg-background p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">
                    {t("servicesPage.blocks.qualityTitle")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("servicesPage.blocks.qualityText")}
                  </p>
                </div>
                <div className="bg-background p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">
                    {t("servicesPage.blocks.personalTitle")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("servicesPage.blocks.personalText")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Servicios;
