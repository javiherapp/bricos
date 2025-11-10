import { Check, Plug, Lightbulb, Zap, Wrench, Shield, Cpu } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Electricidad = () => {
  const tareas: Array<{ icon: React.ElementType; titulo: string; desc: string }> = [
    { icon: Lightbulb, titulo: "Instalación de Luminarias y Plafones", desc: "Montaje y conexión de lámparas, downlights y tiras LED con transformador." },
    { icon: Plug, titulo: "Sustitución de Enchufes e Interruptores", desc: "Cambio de mecanismos, marcos, tomas USB y tapas dañadas." },
    { icon: Zap, titulo: "Colocación de Tomas con Protección (GFCI)", desc: "Sustitución por tomas con protección diferencial en zonas húmedas (si procede)." },
    { icon: Wrench, titulo: "Porteros, Timbres y Detectores", desc: "Cambio de pulsadores, zumbadores, detectores de movimiento y timbres inalámbricos." },
    { icon: Cpu, titulo: "Programadores y Termostatos Básicos", desc: "Instalación y configuración sencilla cuando no requiera intervención en caldera o 230V compleja." },
    { icon: Shield, titulo: "Revisión Visual y Remates", desc: "Ajuste de cajas, fijaciones, canaletas y remates estéticos." },
  ];

  const exclusiones: string[] = [
    "No emitimos boletines eléctricos ni modificamos cuadros generales.",
    "No realizamos ampliaciones de potencia ni nuevas líneas completas.",
    "No intervenimos en trabajos que requieran instalador autorizado.",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero */}
        <section className="brand-hero py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Servicios Eléctricos Menores</h1>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
              Pequeñas instalaciones y sustituciones eléctricas para el hogar: luminarias, enchufes, interruptores y
              remates, con seguridad y buen acabado.
            </p>
          </div>
        </section>

        {/* Descripción y listado */}
        <section className="py-14">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <h2 className="text-2xl font-bold">Qué incluye este servicio</h2>
                <p className="text-muted-foreground">
                  Nos ocupamos de pequeñas actuaciones eléctricas habituales en el hogar que no requieren
                  intervención de un instalador autorizado, priorizando la seguridad y el acabado estético.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {tareas.map((t, i) => (
                    <Card key={i}>
                      <CardContent className="p-4 flex items-start gap-3">
                        <t.icon className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <div className="font-semibold">{t.titulo}</div>
                          <div className="text-sm text-muted-foreground">{t.desc}</div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Importante</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {exclusiones.map((e, i) => (
                        <li key={i} className="flex items-start"><Check className="w-4 h-4 text-primary mr-2 mt-0.5" /> {e}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Recomendado</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start"><Check className="w-4 h-4 text-primary mr-2 mt-0.5" /> Uso de tomas con protección en cocinas y baños cuando proceda.</li>
                      <li className="flex items-start"><Check className="w-4 h-4 text-primary mr-2 mt-0.5" /> Sustituir mecanismos deteriorados para evitar falsos contactos.</li>
                    </ul>
                  </CardContent>
                </Card>
                <div className="text-center">
                  <Button asChild size="lg">
                    <a href="tel:+34965000000">Solicitar presupuesto</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="brand-hero py-20 border-t-4 border-primary/90">
          <div className="container mx-auto px-4 text-center">
            <p className="tracking-widest text-base md:text-lg opacity-90 mb-2">LA CALIDAD QUE ESPERAS</p>
            <h2 className="font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary mb-6">
              LOS SERVICIOS QUE TE MERECES
            </h2>
            <p className="text-lg md:text-xl opacity-90 max-w-4xl mx-auto mb-10">
              Haga su instalación más segura y funcional con nuestras actuaciones eléctricas menores.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="rounded-2xl px-8">
                <Link to="/reservar">Reservar Ahora</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-2xl px-8 border-2 border-primary text-primary hover:bg-primary hover:text-white">
                <a href="tel:+34965000000">(965) 000-000</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Electricidad;

