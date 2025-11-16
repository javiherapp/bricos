import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

type LanguageToggleProps = {
  isEs: boolean;
  isEn: boolean;
  onChange: (lng: "es" | "en") => void;
  className?: string;
};

const LanguageToggle = ({ isEs, isEn, onChange, className }: LanguageToggleProps) => {
  const baseBtn =
    "inline-flex items-center px-1 py-0.5 rounded-full transition-colors";
  const active =
    "bg-primary text-white font-semibold";
  const inactive =
    "bg-transparent text-foreground opacity-80 hover:opacity-100";

  return (
    <div className={`flex items-center gap-2 text-xs font-medium ${className ?? ""}`}>
      <button
        type="button"
        onClick={() => onChange("es")}
        className={`${baseBtn} ${isEs ? active : inactive}`}
      >
        <span className="text-base mr-1" aria-hidden>
          🇪🇸
        </span>
        <span>ES</span>
      </button>
      <span className="text-foreground/50">/</span>
      <button
        type="button"
        onClick={() => onChange("en")}
        className={`${baseBtn} ${isEn ? active : inactive}`}
      >
        <span className="text-base mr-1" aria-hidden>
          🇬🇧
        </span>
        <span>EN</span>
      </button>
    </div>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: "es" | "en") => {
    i18n.changeLanguage(lng);
    localStorage.setItem("i18nextLng", lng);
  };

  const isEs = i18n.language?.startsWith("es");
  const isEn = i18n.language?.startsWith("en");

  return (
    <>
      <div className="bg-secondary text-secondary-foreground py-2 text-center text-sm">
        {t("header.bar")}
      </div>
      <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="brand-logo text-5xl md:text-6xl font-extrabold text-secondary">
              <span className="brand-word">Brico</span><span className="brand-s">s</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/" className="text-foreground hover:text-primary transition-colors font-bold">
                {t("nav.home")}
              </Link>
              <Link to="/servicios" className="text-foreground hover:text-primary transition-colors font-bold">
                {t("nav.services")}
              </Link>
              <Link to="/sobre-nosotros" className="text-foreground hover:text-primary transition-colors font-bold">
                {t("nav.about")}
              </Link>
              <Link to="/zona-de-servicio" className="text-foreground hover:text-primary transition-colors font-bold">
                {t("nav.area")}
              </Link>
              <Link to="/contacto" className="text-foreground hover:text-primary transition-colors font-bold">
                {t("nav.contact")}
              </Link>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <LanguageToggle isEs={isEs} isEn={isEn} onChange={changeLanguage} />
              <a href="tel:+34965000000" className="flex items-center text-foreground hover:text-primary">
                <Phone className="w-4 h-4 mr-2" />
                965 000 000
              </a>
              <Button asChild className="bg-blue-600 hover:bg-blue-600/90 text-white rounded-full px-6 py-3">
                <Link to="/reservar" className="text-center leading-tight uppercase tracking-wide">
                  <span className="block">{t("nav.quote")}</span>
                  <span className="block">{t("nav.quoteInstant")}</span>
                </Link>
              </Button>
            </div>

            {/* Mobile language toggle + menu button */}
            <div className="flex items-center gap-3 md:hidden">
              <LanguageToggle
                isEs={isEs}
                isEn={isEn}
                onChange={changeLanguage}
              />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden py-4 space-y-4">
              <Link
                to="/"
                className="block text-foreground hover:text-primary transition-colors font-bold"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.home")}
              </Link>
              <Link
                to="/servicios"
                className="block text-foreground hover:text-primary transition-colors font-bold"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.services")}
              </Link>
              <Link
                to="/sobre-nosotros"
                className="block text-foreground hover:text-primary transition-colors font-bold"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.about")}
              </Link>
              <Link
                to="/zona-de-servicio"
                className="block text-foreground hover:text-primary transition-colors font-bold"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.area")}
              </Link>
              <Link
                to="/contacto"
                className="block text-foreground hover:text-primary transition-colors font-bold"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.contact")}
              </Link>
              <div className="pt-4 space-y-3">
                <a href="tel:+34965000000" className="flex items-center text-foreground hover:text-primary">
                  <Phone className="w-4 h-4 mr-2" />
                  965 000 000
                </a>
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-600/90 text-white rounded-full py-4">
                  <Link to="/reservar" className="text-center leading-tight uppercase tracking-wide">
                    <span className="block">{t("nav.quote")}</span>
                    <span className="block">{t("nav.quoteInstant")}</span>
                  </Link>
                </Button>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
