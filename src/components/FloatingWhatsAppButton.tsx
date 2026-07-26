import { useLocation } from "react-router-dom";
import { WHATSAPP_URL } from "@/lib/contact";
import WhatsAppIcon from "@/components/WhatsAppIcon";

const FloatingWhatsAppButton = () => {
  const { pathname } = useLocation();

  if (pathname === "/reservar") {
    return null;
  }

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Pedir presupuesto por WhatsApp"
      className="fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] left-4 right-4 z-50 flex min-h-14 items-center justify-center gap-2 rounded-full bg-green-600 px-5 py-3 text-sm font-bold text-white shadow-xl ring-1 ring-black/10 transition-transform hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 md:bottom-6 md:left-auto md:right-6 md:h-16 md:w-16 md:min-h-0 md:p-0 md:hover:scale-105"
    >
      <WhatsAppIcon className="h-6 w-6 shrink-0 md:h-8 md:w-8" />
      <span className="whitespace-nowrap md:hidden">Presupuesto por WhatsApp</span>
    </a>
  );
};

export default FloatingWhatsAppButton;
