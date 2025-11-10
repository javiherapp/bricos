import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="brand-logo text-4xl md:text-5xl mb-4">
              <span className="brand-word">Brico</span><span className="brand-s">s</span>
            </h3>
            <p className="text-sm mb-4">
              Servicio de mantenimiento y reparación del hogar de confianza en la Vega Baja de Alicante.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="hover:text-primary transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/sobre-nosotros" className="hover:text-primary transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm">
              <li>Mantenimiento del Hogar</li>
              <li>Montaje e Instalación</li>
              <li>Limpieza y Mantenimiento</li>
              <li>Jardinería</li>
              <li>Seguridad</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
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
                <span>Vega Baja, Alicante, España</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Bricos. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
