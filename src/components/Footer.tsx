import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { useTranslation } from "react-i18next";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/contact";

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
                <Link to="/servicios/jardineria" className="hover:text-primary transition-colors">
                  {t("footer.servicesList.gardening")}
                </Link>
              </li>
              <li>
                <Link to="/servicios/fontaneria" className="hover:text-primary transition-colors">
                  {t("footer.servicesList.plumbing")}
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
                <a href="mailto:info@hogarpro.es" className="hover:text-primary transition-colors">
                  info@hogarpro.es
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <span>{t("footer.location")}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Bricos. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
