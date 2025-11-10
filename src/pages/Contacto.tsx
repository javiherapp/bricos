import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contacto = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Mensaje enviado",
      description: "Gracias por contactarnos. Le responderemos pronto.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="brand-hero py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
              Contacto
            </h1>
            <p className="text-xl text-center max-w-3xl mx-auto opacity-90">
              Estamos aquí para ayudarle
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <Card>
                <CardContent className="p-6 text-center">
                  <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Teléfono</h3>
                  <a href="tel:+34965000000" className="text-primary hover:underline">
                    965 000 000
                  </a>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Email</h3>
                  <a href="mailto:info@hogarpro.es" className="text-primary hover:underline">
                    info@hogarpro.es
                  </a>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Ubicación</h3>
                  <p className="text-muted-foreground">Vega Baja, Alicante</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Horario</h3>
                  <p className="text-muted-foreground">Lun-Sáb: 8AM - 6PM</p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="max-w-2xl mx-auto">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 text-center">
                    Envíenos un Mensaje
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="nombre">Nombre *</Label>
                        <Input id="nombre" placeholder="Su nombre" required />
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
                      <Label htmlFor="servicio">Servicio de Interés</Label>
                      <Input id="servicio" placeholder="Ej: Reparación de fontanería" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="mensaje">Mensaje *</Label>
                      <Textarea
                        id="mensaje"
                        placeholder="Cuéntenos qué necesita..."
                        rows={5}
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="w-full" size="lg">
                      Enviar Mensaje
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                ¿Necesita Asistencia Inmediata?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Para emergencias o consultas urgentes, no dude en llamarnos directamente. Estamos disponibles de lunes a sábado de 8AM a 6PM.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="tel:+34965000000">
                    <Phone className="w-5 h-5 mr-2" />
                    Llamar Ahora
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="mailto:info@hogarpro.es">
                    <Mail className="w-5 h-5 mr-2" />
                    Enviar Email
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contacto;
