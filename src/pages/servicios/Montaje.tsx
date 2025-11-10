import { Check, Package, Plug, Tv, Image, Dog, PanelsTopLeft, Wrench } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Montaje = () => {
  const tareas: Array<{ icon: React.ElementType; titulo: string; desc: string }> = [
    { icon: Package, titulo: "Montaje de Muebles (incl. IKEA)", desc: "Montaje y ajuste de muebles de salón, dormitorio y exterior; montaje cuidadoso siguiendo instrucciones." },
    { icon: Plug, titulo: "Instalación de Electrodomésticos", desc: "Ubicación, nivelado y conexión (cuando aplica) de lavadoras, lavavajillas, hornos, microondas y encimeras." },
    { icon: Tv, titulo: "Montaje y Anclaje de TV", desc: "Fijación segura en pared, ocultación básica de cables y orientación según la estancia." },
    { icon: Image, titulo: "Colgado de Cuadros y Espejos", desc: "Medición, alineado y fijación con los anclajes adecuados para la superficie." },
    { icon: PanelsTopLeft, titulo: "Instalación de Estores/Cortinas", desc: "Colocación de soportes, nivelado y ajuste de estores y barras de cortina." },
    { icon: Dog, titulo: "Instalación de Puerta para Mascotas", desc: "Apertura, encastre e instalación de puerta para mascotas en puertas adecuadas." },
    { icon: Wrench, titulo: "Montaje de BBQ y Mobiliario Exterior", desc: "Montaje de barbacoas, conjuntos de terraza y otros elementos para exterior." },
    { icon: PanelsTopLeft, titulo: "Instalación de Pladur (Puntual)", desc: "Pequeñas instalaciones o ampliaciones de placas de yeso laminado según necesidad." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero */}
        <section className="brand-hero py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Montaje e Instalación</h1>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
              Transforme su hogar sin complicaciones: montaje de muebles, instalación de electrodomésticos y
              elementos del hogar con un acabado profesional y seguro.
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
                  Nos encargamos del montaje e instalación de los elementos más comunes del hogar, cuidando la
                  estabilidad, el nivelado y la correcta fijación de cada pieza. Convertimos instrucciones complejas
                  en resultados impecables, ahorrándole tiempo y esfuerzo.
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
                      <li className="flex items-start"><Check className="w-4 h-4 text-primary mr-2 mt-0.5" /> Reapriete periódico de tornillería en muebles montados.</li>
                      <li className="flex items-start"><Check className="w-4 h-4 text-primary mr-2 mt-0.5" /> Revisión de anclajes, soportes y fijaciones en paredes.</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Beneficios</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start"><Check className="w-4 h-4 text-primary mr-2 mt-0.5" /> Ahorro de tiempo y esfuerzo.</li>
                      <li className="flex items-start"><Check className="w-4 h-4 text-primary mr-2 mt-0.5" /> Montaje seguro y profesional.</li>
                      <li className="flex items-start"><Check className="w-4 h-4 text-primary mr-2 mt-0.5" /> Mejora de la funcionalidad y estética del hogar.</li>
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
              Empiece hoy su proyecto de montaje con Bricos. Contáctenos para transformar su espacio con seguridad
              y un acabado impecable.
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

        {/* Satisfaction band */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto rounded-3xl bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] p-8 md:p-12 shadow">
              <h3 className="text-center text-2xl md:text-3xl font-extrabold text-primary mb-4">
                Nos esforzamos por mantener el 100% de satisfacción
              </h3>
              <p className="text-center text-base md:text-lg opacity-90 max-w-3xl mx-auto mb-4">
                Si tiene cualquier consulta, póngase en contacto. Le ayudaremos con rapidez y cuidado.
              </p>
              <div className="text-center">
                <a href="tel:+34965000000" className="text-2xl md:text-3xl font-extrabold text-primary">
                  (965) 000-000
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Montaje;

