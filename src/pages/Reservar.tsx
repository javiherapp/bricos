import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { useToast } from "@/hooks/use-toast";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const Reservar = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Reserva enviada",
      description: "Gracias por su reserva. Le contactaremos pronto para confirmar.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-secondary to-secondary/90 text-secondary-foreground py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
              Reservar Servicio
            </h1>
            <p className="text-xl text-center max-w-3xl mx-auto opacity-90">
              Complete el formulario y nos pondremos en contacto con usted
            </p>
          </div>
        </section>

        {/* Booking Form */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Card>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="nombre">Nombre Completo *</Label>
                        <Input id="nombre" placeholder="Juan Pérez" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="telefono">Teléfono *</Label>
                        <Input id="telefono" type="tel" placeholder="965 000 000" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" placeholder="su@email.com" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="direccion">Dirección del Servicio *</Label>
                      <Input id="direccion" placeholder="Calle, número, ciudad" required />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="servicio">Tipo de Servicio *</Label>
                        <Select required>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccione un servicio" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="mantenimiento">Mantenimiento y Reparación</SelectItem>
                            <SelectItem value="montaje">Montaje e Instalación</SelectItem>
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
                      <Select>
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
                        placeholder="Por favor, describa detalladamente el trabajo que necesita..."
                        rows={6}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="presupuesto">Presupuesto Estimado (Opcional)</Label>
                      <Input id="presupuesto" placeholder="Ej: 200-300€" />
                    </div>

                    <div className="bg-muted p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        * Al enviar este formulario, uno de nuestros profesionales se pondrá en contacto con usted en un plazo de 24 horas para confirmar los detalles y proporcionar un presupuesto detallado.
                      </p>
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      Enviar Solicitud de Reserva
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
                    <a href="tel:+34965000000">Llamar: 965 000 000</a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="mailto:info@hogarpro.es">Email: info@hogarpro.es</a>
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
