import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { useTranslation } from "react-i18next";

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
              <li>{t("footer.servicesList.homeMaintenance")}</li>
              <li>{t("footer.servicesList.assembly")}</li>
              <li>{t("footer.servicesList.cleaning")}</li>
              <li>{t("footer.servicesList.gardening")}</li>
              <li>{t("footer.servicesList.security")}</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t("footer.contactTitle")}</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <Phone className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <a href="tel:+34965000000" className="hover:text-primary transition-colors">
                  965 000 000
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
