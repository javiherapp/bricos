import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceTerms from "@/components/ServiceTerms";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { useToast } from "@/hooks/use-toast";
import { CalendarIcon, Camera, Gift, ImageUp, MessageCircle, X } from "lucide-react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { EMAIL_ADDRESS, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_PHONE } from "@/lib/contact";
import { trackMetaEvent } from "@/lib/metaPixel";
import { Link, useSearchParams } from "react-router-dom";

const serviceOptions = [
  { value: "mantenimiento", label: "Mantenimiento y Reparación del Hogar" },
  { value: "montaje", label: "Montaje e Instalación" },
  { value: "fontaneria", label: "Fontanería Básica" },
  { value: "aire-acondicionado", label: "Aire Acondicionado" },
  { value: "pintura", label: "Pintura y Reformas Menores" },
  { value: "jardineria", label: "Jardinería y Paisajismo" },
  { value: "electrodomesticos", label: "Electrodomésticos" },
  { value: "exteriores", label: "Exteriores" },
  { value: "electricidad", label: "Servicios Eléctricos Menores" },
  { value: "otro", label: "Otro" },
];

const preferredTimeOptions = [
  { value: "manana", label: "Mañana (8AM - 12PM)" },
  { value: "tarde", label: "Tarde (12PM - 6PM)" },
  { value: "flexible", label: "Flexible" },
];

const getOptionLabel = (
  options: Array<{ value: string; label: string }>,
  value: string,
) => options.find((option) => option.value === value)?.label ?? value;

const Reservar = () => {
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const [date, setDate] = useState<Date>();
  const [serviceType, setServiceType] = useState<string>("");
  const [preferredTime, setPreferredTime] = useState<string>("");
  const [problemPhoto, setProblemPhoto] = useState<File | null>(null);
  const [problemPhotoPreview, setProblemPhotoPreview] = useState<string>("");
  const cameraPhotoInputRef = useRef<HTMLInputElement>(null);
  const uploadPhotoInputRef = useRef<HTMLInputElement>(null);
  const initialPromoCode = searchParams.get("promo")?.trim().toUpperCase() ?? "";
  const [promoCode, setPromoCode] = useState(initialPromoCode);
  const appliedPromoCode = promoCode.trim().toUpperCase();

  useEffect(() => {
    return () => {
      if (problemPhotoPreview) {
        URL.revokeObjectURL(problemPhotoPreview);
      }
    };
  }, [problemPhotoPreview]);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;

    if (problemPhotoPreview) {
      URL.revokeObjectURL(problemPhotoPreview);
    }

    if (!file) {
      setProblemPhoto(null);
      setProblemPhotoPreview("");
      return;
    }

    if (!file.type.startsWith("image/")) {
      e.currentTarget.value = "";
      setProblemPhoto(null);
      setProblemPhotoPreview("");
      toast({
        title: "Archivo no válido",
        description: "Por favor, suba una foto en formato imagen.",
        variant: "destructive",
      });
      return;
    }

    setProblemPhoto(file);
    setProblemPhotoPreview(URL.createObjectURL(file));
  };

  const clearProblemPhoto = () => {
    if (problemPhotoPreview) {
      URL.revokeObjectURL(problemPhotoPreview);
    }

    setProblemPhoto(null);
    setProblemPhotoPreview("");
    if (cameraPhotoInputRef.current) {
      cameraPhotoInputRef.current.value = "";
    }
    if (uploadPhotoInputRef.current) {
      uploadPhotoInputRef.current.value = "";
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const nombre = String(formData.get("nombre") ?? "");
    const telefono = String(formData.get("telefono") ?? "");
    const email = String(formData.get("email") ?? "");
    const direccion = String(formData.get("direccion") ?? "");
    const detalles = String(formData.get("detalles") ?? "");
    const humanDate = date ? format(date, "PPP", { locale: es }) : "No indicada";
    const serviceLabel = serviceType
      ? getOptionLabel(serviceOptions, serviceType)
      : "No indicado";
    const preferredTimeLabel = preferredTime
      ? getOptionLabel(preferredTimeOptions, preferredTime)
      : "No indicado";

    const msg =
      `Nueva solicitud de presupuesto:\n` +
      `• Nombre: ${nombre}\n` +
      `• Teléfono: ${telefono}\n` +
      `• Email: ${email}\n` +
      `• Dirección: ${direccion}\n` +
      `• Servicio: ${serviceLabel}\n` +
      `• Fecha: ${humanDate}\n` +
      `• Horario: ${preferredTimeLabel}\n` +
      (appliedPromoCode
        ? `• Código promocional: ${appliedPromoCode}\n` +
          `• Validación del bono: comprobar primer servicio, teléfono, email y dirección antes de aplicar el descuento.\n`
        : "") +
      (problemPhoto
        ? `• Foto del problema: seleccionada. La adjunto en este chat después de enviar el mensaje.\n`
        : `• Foto del problema: no adjuntada\n`) +
      `• Detalles: ${detalles}`;

    const waUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`;
    toast({
      title: "Solicitud lista en WhatsApp",
      description: "Revise el mensaje y pulse enviar. Le responderemos lo antes posible.",
    });
    trackMetaEvent("Lead", {
      content_category: "WhatsApp quote request",
      content_name: serviceLabel,
      preferred_time: preferredTimeLabel,
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
                            Si añade una foto, podrá adjuntarla en el chat justo después
                            de enviar el mensaje preparado.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-lg border border-primary/25 bg-primary/10 p-4">
                      <div className="flex items-start gap-3">
                        <Gift className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <div className="w-full">
                          <p className="font-semibold text-primary">
                            ¿Es su primer servicio con Bricos?
                          </p>
                          <p className="mt-1 text-sm text-foreground/70">
                            Use el código BRICOS20 y solicite 20€ de descuento.
                            Lo revisaremos antes de confirmar el presupuesto.
                          </p>
                          <div className="mt-4 space-y-2">
                            <Label htmlFor="promo">Código promocional</Label>
                            <Input
                              id="promo"
                              name="promo"
                              value={promoCode}
                              onChange={(event) => setPromoCode(event.target.value.toUpperCase())}
                              placeholder="BRICOS20"
                            />
                          </div>
                          <p className="mt-3 text-xs text-foreground/60">
                            Válido solo para nuevos clientes. Un uso por persona,
                            teléfono, email y dirección de servicio. No acumulable
                            con otras ofertas. No se aplica sobre materiales,
                            desplazamientos especiales ni trabajos de terceros.
                          </p>
                        </div>
                      </div>
                    </div>

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
                        <select
                          id="servicio"
                          name="servicio"
                          value={serviceType}
                          onChange={(event) => setServiceType(event.target.value)}
                          required
                          className={cn(
                            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                            !serviceType && "text-muted-foreground",
                          )}
                        >
                          <option value="" disabled>
                            Seleccione un servicio
                          </option>
                          {serviceOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="space-y-2">
                        <Label>Fecha Preferida *</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              type="button"
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
                      <select
                        id="horario"
                        name="horario"
                        value={preferredTime}
                        onChange={(event) => setPreferredTime(event.target.value)}
                        className={cn(
                          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                          !preferredTime && "text-muted-foreground",
                        )}
                      >
                        <option value="">Seleccione un horario</option>
                        {preferredTimeOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label>Foto del problema</Label>
                      <div className="grid gap-3 rounded-lg border border-dashed border-input bg-muted/20 p-4 sm:grid-cols-[1fr_auto] sm:items-center">
                        <div className="flex items-start gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                            <Camera className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">
                              Haga una foto o suba una imagen
                            </p>
                            <p className="mt-1 text-sm text-muted-foreground">
                              Una imagen ayuda a valorar fugas, enchufes, muebles,
                              grietas o piezas antes de visitarle.
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2 sm:flex-row">
                          <Button type="button" variant="outline" asChild>
                            <Label
                              htmlFor="foto-camara"
                              className="inline-flex cursor-pointer items-center justify-center gap-2"
                            >
                              <Camera className="h-4 w-4" />
                              Hacer foto
                            </Label>
                          </Button>
                          <Button type="button" variant="outline" asChild>
                            <Label
                              htmlFor="foto-subida"
                              className="inline-flex cursor-pointer items-center justify-center gap-2"
                            >
                              <ImageUp className="h-4 w-4" />
                              Subir foto
                            </Label>
                          </Button>
                        </div>
                        <input
                          id="foto-camara"
                          name="foto-camara"
                          type="file"
                          accept="image/*"
                          capture="environment"
                          className="sr-only"
                          ref={cameraPhotoInputRef}
                          onChange={handlePhotoChange}
                        />
                        <input
                          id="foto-subida"
                          name="foto-subida"
                          type="file"
                          accept="image/*"
                          className="sr-only"
                          ref={uploadPhotoInputRef}
                          onChange={handlePhotoChange}
                        />
                      </div>
                      {problemPhoto && problemPhotoPreview && (
                        <div className="flex items-center gap-4 rounded-lg border bg-background p-3">
                          <img
                            src={problemPhotoPreview}
                            alt="Vista previa de la foto del problema"
                            className="h-20 w-20 shrink-0 rounded-md object-cover"
                          />
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-medium">{problemPhoto.name}</p>
                            <p className="mt-1 text-sm text-muted-foreground">
                              Enviaremos el aviso en WhatsApp para que adjunte esta foto
                              en el chat.
                            </p>
                          </div>
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            onClick={clearProblemPhoto}
                            aria-label="Quitar foto"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      )}
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
                        para resolver dudas y darle un presupuesto claro. WhatsApp no
                        permite adjuntar la foto automáticamente desde el formulario; si
                        ha elegido una imagen, adjúntela en el chat que se abrirá.
                      </p>
                    </div>

                    <p className="text-xs leading-6 text-muted-foreground">
                      Al enviar sus datos, Bricos los usará para responder a su
                      solicitud, preparar el presupuesto y gestionar la comunicación
                      del servicio. Puede consultar más información en la{" "}
                      <Link
                        to="/politica-privacidad"
                        className="font-medium text-primary underline-offset-4 hover:underline"
                      >
                        Política de privacidad
                      </Link>
                      .
                    </p>

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
