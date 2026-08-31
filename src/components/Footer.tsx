import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Gift } from "lucide-react";
import { useTranslation } from "react-i18next";
import { EMAIL_ADDRESS, PHONE_DISPLAY, PHONE_TEL } from "@/lib/contact";
import { clearMarketingConsent } from "@/lib/metaPixel";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-secondary text-secondary-foreground border-t-4 border-primary">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="brand-logo text-4xl md:text-5xl mb-4 text-primary">
              <span className="brand-word">Brico</span><span className="brand-s">s</span>
            </h3>
            <p className="text-sm mb-4">
              {t("footer.description")}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t("footer.quickLinks")}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="hover:text-primary transition-colors">
                  {t("nav.services")}
                </Link>
              </li>
              <li>
                <Link to="/sobre-nosotros" className="hover:text-primary transition-colors">
                  {t("nav.about")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t("footer.servicesTitle")}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/servicios/mantenimiento" className="hover:text-primary transition-colors">
                  {t("footer.servicesList.homeMaintenance")}
                </Link>
              </li>
              <li>
                <Link to="/servicios/montaje" className="hover:text-primary transition-colors">
                  {t("footer.servicesList.assembly")}
                </Link>
              </li>
              <li>
                <Link to="/servicios/electrodomesticos" className="hover:text-primary transition-colors">
                  {t("footer.servicesList.appliances")}
                </Link>
              </li>
              <li>
                <Link to="/servicios/exteriores" className="hover:text-primary transition-colors">
                  {t("footer.servicesList.exteriors")}
                </Link>
              </li>
              <li>
                <Link to="/servicios/pintura" className="hover:text-primary transition-colors">
                  {t("footer.servicesList.painting")}
                </Link>
              </li>
              <li>
                <Link to="/servicios/fontaneria" className="hover:text-primary transition-colors">
                  {t("footer.servicesList.plumbing")}
                </Link>
              </li>
              <li>
                <Link to="/servicios/cerrajeria" className="hover:text-primary transition-colors">
                  {t("footer.servicesList.locksmith")}
                </Link>
              </li>
              <li>
                <Link to="/servicios/electricidad" className="hover:text-primary transition-colors">
                  {t("footer.servicesList.electrical")}
                </Link>
              </li>
              <li>
                <Link to="/servicios/aire-acondicionado" className="hover:text-primary transition-colors">
                  {t("footer.servicesList.aircon")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t("footer.contactTitle")}</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <Phone className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <a href={`tel:${PHONE_TEL}`} className="hover:text-primary transition-colors">
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <a href={`mailto:${EMAIL_ADDRESS}`} className="hover:text-primary transition-colors">
                  {EMAIL_ADDRESS}
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <span>{t("footer.location")}</span>
              </li>
            </ul>
            <div className="mt-5 rounded-lg border border-primary/40 bg-primary/10 p-4 text-sm">
              <div className="flex items-start gap-2">
                <Gift className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <div>
                  <p className="font-semibold text-primary">{t("footer.promoTitle")}</p>
                  <p className="mt-1 text-secondary-foreground/85">{t("footer.promoText")}</p>
                  <Link
                    to="/reservar?promo=BRICOS20"
                    className="mt-2 inline-block font-semibold text-primary hover:underline"
                  >
                    {t("footer.promoCta")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Bricos. {t("footer.rights")}
          </p>
          <nav className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-secondary-foreground/70">
            <Link to="/aviso-legal" className="hover:text-primary hover:underline">
              {t("footer.legalNotice")}
            </Link>
            <Link to="/politica-privacidad" className="hover:text-primary hover:underline">
              {t("footer.privacyPolicy")}
            </Link>
            <Link to="/politica-cookies" className="hover:text-primary hover:underline">
              {t("footer.cookiesPolicy")}
            </Link>
          </nav>
          <button
            type="button"
            onClick={clearMarketingConsent}
            className="mt-3 text-xs text-secondary-foreground/70 underline-offset-4 transition-colors hover:text-primary hover:underline"
          >
            {t("footer.cookieSettings")}
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
