import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-secondary text-secondary-foreground py-2 text-center text-sm">
        Abierto Lun-Sáb 8AM a 6PM
      </div>
      <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="brand-logo text-4xl md:text-5xl">
              <span className="brand-word">Brico</span><span className="brand-s">s</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/" className="text-foreground hover:text-primary transition-colors">
                Inicio
              </Link>
              <Link to="/servicios" className="text-foreground hover:text-primary transition-colors">
                Servicios
              </Link>
              <Link to="/sobre-nosotros" className="text-foreground hover:text-primary transition-colors">
                Sobre Nosotros
              </Link>
              <Link to="/zona-de-servicio" className="text-foreground hover:text-primary transition-colors">
                Zona de Servicio
              </Link>
              <Link to="/contacto" className="text-foreground hover:text-primary transition-colors">
                Contacto
              </Link>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <a href="tel:+34965000000" className="flex items-center text-foreground hover:text-primary">
                <Phone className="w-4 h-4 mr-2" />
                965 000 000
              </a>
              <Button asChild>
                <Link to="/reservar" className="text-center leading-tight">
                  Presupuesto
                  <span className="block">Instantáneo</span>
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden py-4 space-y-4">
              <Link
                to="/"
                className="block text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link
                to="/servicios"
                className="block text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Servicios
              </Link>
              <Link
                to="/sobre-nosotros"
                className="block text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre Nosotros
              </Link>
              <Link
                to="/zona-de-servicio"
                className="block text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Zona de Servicio
              </Link>
              <Link
                to="/contacto"
                className="block text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
              <div className="pt-4 space-y-3">
                <a href="tel:+34965000000" className="flex items-center text-foreground hover:text-primary">
                  <Phone className="w-4 h-4 mr-2" />
                  965 000 000
                </a>
                <Button asChild className="w-full">
                  <Link to="/reservar" className="text-center leading-tight">
                    Presupuesto
                    <span className="block">Instantáneo</span>
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
