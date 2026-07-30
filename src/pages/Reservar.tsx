import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceTerms from "@/components/ServiceTerms";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { useToast } from "@/hooks/use-toast";
import { CalendarIcon, MessageCircle } from "lucide-react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { EMAIL_ADDRESS, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_PHONE } from "@/lib/contact";
import { useSearchParams } from "react-router-dom";

const Reservar = () => {
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const [date, setDate] = useState<Date>();
  const [serviceType, setServiceType] = useState<string>("");
  const [preferredTime, setPreferredTime] = useState<string>("");
  const promoCode = searchParams.get("promo")?.trim() ?? "";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const nombre = String(formData.get("nombre") ?? "");
    const telefono = String(formData.get("telefono") ?? "");
    const email = String(formData.get("email") ?? "");
    const direccion = String(formData.get("direccion") ?? "");
    const detalles = String(formData.get("detalles") ?? "");
    const humanDate = date ? format(date, "PPP", { locale: es }) : "No indicada";

    const msg =
      `Nueva solicitud de presupuesto:\n` +
      `• Nombre: ${nombre}\n` +
      `• Teléfono: ${telefono}\n` +
      `• Email: ${email}\n` +
      `• Dirección: ${direccion}\n` +
      `• Servicio: ${serviceType || "No indicado"}\n` +
      `• Fecha: ${humanDate}\n` +
      `• Horario: ${preferredTime || "No indicado"}\n` +
      (promoCode ? `• Código promocional: ${promoCode}\n` : "") +
      `• Detalles: ${detalles}`;

    const waUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`;
    toast({
      title: "Solicitud lista en WhatsApp",
      description: "Revise el mensaje y pulse enviar. Le responderemos lo antes posible.",
    });
    window.open(waUrl, "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-secondary to-secondary/90 text-secondary-foreground py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
              Presupuesto inmediato por WhatsApp
            </h1>
            <p className="text-xl text-center max-w-3xl mx-auto opacity-90">
              Complete el formulario y se abrirá WhatsApp con su solicitud preparada.
              Le responderemos lo antes posible para confirmar detalles y precio.
            </p>
          </div>
        </section>

        <ServiceTerms variant="full" />

        {/* Booking Form */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Card>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="rounded-lg border border-green-200 bg-green-50 p-4 text-green-950">
                      <div className="flex items-start gap-3">
                        <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                        <div>
                          <p className="font-semibold">
                            Su presupuesto se enviará a nuestro WhatsApp.
                          </p>
                          <p className="mt-1 text-sm text-green-900">
                            Al terminar, WhatsApp se abrirá con todos los datos listos.
                            Solo tendrá que pulsar enviar y priorizaremos su solicitud
                            para responder cuanto antes.
                          </p>
                        </div>
                      </div>
                    </div>

                    {promoCode && (
                      <div className="rounded-lg border border-primary/25 bg-primary/10 p-4 text-primary">
                        <p className="font-semibold">
                          Código promocional aplicado: {promoCode}
                        </p>
                        <p className="mt-1 text-sm text-foreground/70">
                          Lo incluiremos en el mensaje de WhatsApp para aplicar
                          el descuento correspondiente.
                        </p>
                      </div>
                    )}

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="nombre">Nombre Completo *</Label>
                        <Input id="nombre" name="nombre" placeholder="Juan Pérez" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="telefono">Teléfono *</Label>
                        <Input id="telefono" name="telefono" type="tel" placeholder="Ej: 600 123 123" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" name="email" type="email" placeholder="su@email.com" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="direccion">Dirección del Servicio *</Label>
                      <Input id="direccion" name="direccion" placeholder="Calle, número, ciudad" required />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="servicio">Tipo de Servicio *</Label>
                        <Select value={serviceType} onValueChange={setServiceType} required>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccione un servicio" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="mantenimiento">Mantenimiento y Reparación</SelectItem>
                            <SelectItem value="montaje">Montaje e Instalación</SelectItem>
                            <SelectItem value="fontaneria">Fontanería Básica</SelectItem>
                            <SelectItem value="limpieza">Limpieza y Mantenimiento</SelectItem>
                            <SelectItem value="jardin">Cuidado de Jardín</SelectItem>
                            <SelectItem value="seguridad">Seguridad</SelectItem>
                            <SelectItem value="electricidad">Servicios Eléctricos</SelectItem>
                            <SelectItem value="otro">Otro</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label>Fecha Preferida *</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full justify-start text-left font-normal",
                                !date && "text-muted-foreground"
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {date ? format(date, "PPP", { locale: es }) : "Seleccione una fecha"}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={date}
                              onSelect={setDate}
                              locale={es}
                              disabled={(date) => date < new Date()}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="horario">Horario Preferido</Label>
                      <Select value={preferredTime} onValueChange={setPreferredTime}>
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccione un horario" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="manana">Mañana (8AM - 12PM)</SelectItem>
                          <SelectItem value="tarde">Tarde (12PM - 6PM)</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="detalles">Detalles del Trabajo *</Label>
                      <Textarea
                        id="detalles"
                        name="detalles"
                        placeholder="Por favor, describa detalladamente el trabajo que necesita..."
                        rows={6}
                        required
                      />
                    </div>

                    

                    <div className="bg-muted p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        * Al enviar este formulario se abrirá WhatsApp con la solicitud
                        preparada para nuestro equipo. Le contestaremos lo antes posible
                        para resolver dudas y darle un presupuesto claro.
                      </p>
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      Enviar por WhatsApp
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="mt-8 text-center">
                <p className="text-muted-foreground mb-4">
                  ¿Prefiere hablar con nosotros directamente?
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="outline" asChild>
                    <a href={`tel:${PHONE_TEL}`}>Llamar: {PHONE_DISPLAY}</a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href={`mailto:${EMAIL_ADDRESS}`}>Email: {EMAIL_ADDRESS}</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Reservar;
