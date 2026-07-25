import { WHATSAPP_URL } from "@/lib/contact";
import WhatsAppIcon from "@/components/WhatsAppIcon";

const FloatingWhatsAppButton = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir chat de WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-white shadow-xl ring-1 ring-black/10 transition-transform hover:scale-105 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
    >
      <WhatsAppIcon className="h-8 w-8" />
    </a>
  );
};

export default FloatingWhatsAppButton;
