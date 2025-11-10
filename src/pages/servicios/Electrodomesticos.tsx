import { Check, Plug, Wrench, Droplets, PanelsTopLeft, Shield, Gauge, Tv } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Electrodomesticos = () => {
  const tareas: Array<{ icon: React.ElementType; titulo: string; desc: string }> = [
    { icon: Plug, titulo: "Instalación de Electrodomésticos", desc: "Colocación, nivelado y conexión básica de lavadoras, lavavajillas, hornos, encimeras y microondas." },
    { icon: Wrench, titulo: "Reparaciones Menores", desc: "Ajustes, fijaciones, sustitución de piezas simples y corrección de ruidos o vibraciones." },
    { icon: Droplets, titulo: "Tomas de Agua y Desagües", desc: "Cambio de mangueras, sifones y conexiones de entrada/salida de agua para evitar fugas." },
    { icon: PanelsTopLeft, titulo: "Encastre y Ajustes en Mueble", desc: "Ajuste de huecos, perfilería y remates para integración estética en la cocina." },
    { icon: Gauge, titulo: "Nivelado y Puesta a Punto", desc: "Nivelado preciso, verificación de anclajes y pruebas básicas de funcionamiento." },
    { icon: Shield, titulo: "Seguridad y Protección", desc: "Revisión de cableado visible, fijación de enchufes y recomendaciones de uso seguro." },
    { icon: Tv, titulo: "Campanas y Otros Equipos", desc: "Montaje y fijación de campanas, extractores y pequeños equipos auxiliares." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero */}
        <section className="brand-hero py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Electrodomésticos: Instalación y Reparación</h1>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
              Instalación y reparación ligera de electrodomésticos con acabados limpios, nivelado correcto y conexiones seguras.
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
                  Nos encargamos de instalar y poner a punto sus electrodomésticos, cuidando los detalles: desde el nivelado
                  y la fijación hasta las conexiones de agua y electricidad cuando corresponda. También realizamos ajustes
                  y reparaciones menores para alargar su vida útil.
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
                    <h3 className="text-xl font-semibold mb-3">Recomendado</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start"><Check className="w-4 h-4 text-primary mr-2 mt-0.5" /> Revisar mangueras y desagües anualmente.</li>
                      <li className="flex items-start"><Check className="w-4 h-4 text-primary mr-2 mt-0.5" /> Mantener nivelado para evitar vibraciones y ruidos.</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Beneficios</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start"><Check className="w-4 h-4 text-primary mr-2 mt-0.5" /> Instalación segura y estética.</li>
                      <li className="flex items-start"><Check className="w-4 h-4 text-primary mr-2 mt-0.5" /> Mayor durabilidad y rendimiento.</li>
                      <li className="flex items-start"><Check className="w-4 h-4 text-primary mr-2 mt-0.5" /> Ahorro de tiempo y problemas futuros.</li>
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
              Empiece hoy mismo con la instalación o reparación de sus electrodomésticos con Bricos.
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

export default Electrodomesticos;

