import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import Index from "./pages/Index";
import Servicios from "./pages/Servicios";
import SobreNosotros from "./pages/SobreNosotros";
import ZonaServicio from "./pages/ZonaServicio";
import Contacto from "./pages/Contacto";
import Reservar from "./pages/Reservar";
import NotFound from "./pages/NotFound";
import Mantenimiento from "./pages/servicios/Mantenimiento";
import Montaje from "./pages/servicios/Montaje";
import Exteriores from "./pages/servicios/Exteriores";
import Electrodomesticos from "./pages/servicios/Electrodomesticos";
import Pintura from "./pages/servicios/Pintura";
import Jardineria from "./pages/servicios/Jardineria";
import AireAcondicionado from "./pages/servicios/AireAcondicionado";
import Electricidad from "./pages/servicios/Electricidad";
import Fontaneria from "./pages/servicios/Fontaneria";

const queryClient = new QueryClient();

const AppRoutes = () => {
  const { pathname } = useLocation();
  const routeSpacing = pathname === "/reservar" ? "" : "pb-24 md:pb-0";

  return (
    <div className={routeSpacing}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/servicios/mantenimiento" element={<Mantenimiento />} />
        <Route path="/servicios/montaje" element={<Montaje />} />
        <Route path="/servicios/exteriores" element={<Exteriores />} />
        <Route path="/servicios/electrodomesticos" element={<Electrodomesticos />} />
        <Route path="/servicios/pintura" element={<Pintura />} />
        <Route path="/servicios/jardineria" element={<Jardineria />} />
        <Route path="/servicios/fontaneria" element={<Fontaneria />} />
        <Route path="/servicios/aire-acondicionado" element={<AireAcondicionado />} />
        <Route path="/servicios/electricidad" element={<Electricidad />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        <Route path="/zona-de-servicio" element={<ZonaServicio />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/reservar" element={<Reservar />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppRoutes />
        <FloatingWhatsAppButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
