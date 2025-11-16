import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

const SobreNosotros = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="brand-hero py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 text-center">
              {t("aboutPage.heroTitle")}
            </h1>
            <p className="text-center">
              <span className="mr-2">{t("aboutPage.heroSubtitlePrefix")}</span>
              <span className="brand-script brand-script--primary text-3xl align-middle">Bricos</span>
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">
                {t("aboutPage.missionTitle")}
              </h2>
              <p className="text-lg text-muted-foreground mb-8 text-center">
                {t("aboutPage.missionBody1")}
              </p>
              <p className="text-lg text-muted-foreground text-center">
                {t("aboutPage.missionBody2")}
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">
                {t("aboutPage.valuesTitle")}
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    {t("aboutPage.values.reliabilityTitle")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("aboutPage.values.reliabilityText")}
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    {t("aboutPage.values.qualityTitle")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("aboutPage.values.qualityText")}
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    {t("aboutPage.values.transparencyTitle")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("aboutPage.values.transparencyText")}
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    {t("aboutPage.values.customerCareTitle")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("aboutPage.values.customerCareText")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                {t("aboutPage.teamTitle")}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {t("aboutPage.teamBody1")}
              </p>
              <p className="text-lg text-muted-foreground">
                {t("aboutPage.teamBody2")}
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SobreNosotros;
