import { Check, Paintbrush, Hammer, Wrench, ShowerHead, Wind, Droplets, DoorOpen, PanelsTopLeft, Drill, House, Filter as FilterIcon, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Mantenimiento = () => {
  const tareas: Array<{ icon: React.ElementType; titulo: string; desc: string }> = [
    { icon: Wrench, titulo: "Reparaciones Menores", desc: "Ajuste de bisagras, herrajes, pomos, tiradores, cierres y pequeñas incidencias del hogar." },
    { icon: Droplets, titulo: "Fontanería Básica", desc: "Reparación de grifos con fugas, cambio de sifones, sustitución de flexos y sellado de sanitarios." },
    { icon: ShowerHead, titulo: "Cambios/Instalaciones de Baño", desc: "Sustitución de rociadores, grifos, duchas de mano y sellados de juntas." },
    { icon: Paintbrush, titulo: "Retoques de Pintura", desc: "Repasos de pintura interior y exterior, pequeños parches y igualado de color." },
    { icon: PanelsTopLeft, titulo: "Reparación de Pladur", desc: "Reparación de golpes, fisuras, anclajes arrancados y pequeños paneles de yeso laminado." },
    { icon: Droplets, titulo: "WC e Inodoros", desc: "Arreglo de cisternas, mecanismos de descarga, fugas de agua y desatascos menores." },
    { icon: FilterIcon, titulo: "Ósmosis y Filtración", desc: "Instalación, mantenimiento y cambio de filtros de equipos de ósmosis y tratamiento de agua." },
    { icon: Drill, titulo: "Carpintería", desc: "Ajuste y reparación de puertas, marcos y cerraduras. Montaje y arreglo de muebles." },
    { icon: Wind, titulo: "Limpieza de Climatización", desc: "Limpieza de filtros y unidades (HVAC/AA) y sustitución de filtros cuando procede." },
    { icon: House, titulo: "Mantenimiento Exterior", desc: "Sellados, juntas, impermeabilizaciones puntuales y pequeños arreglos exteriores." },
    { icon: DoorOpen, titulo: "Puertas y Rodapiés", desc: "Instalación/ajuste de puertas, recolocado de marcos, instalación de rodapiés y remates." },
    { icon: Hammer, titulo: "Pequeñas Estructuras", desc: "Refuerzos, minor framing en madera, anclajes y fijaciones." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero */}
        <section className="brand-hero py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Mantenimiento y Reparación del Hogar</h1>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
              Soluciones profesionales para mantener su vivienda en perfecto estado: arreglos rápidos, mantenimiento preventivo y mejora estética.
            </p>
          </div>
        </section>

        {/* Descripción y beneficios */}
        <section className="py-14">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <h2 className="text-2xl font-bold">Qué incluye este servicio</h2>
                <p className="text-muted-foreground">
                  Atendemos una amplia variedad de tareas de mantenimiento y reparación doméstica, desde pequeños arreglos y
                  sellados hasta retoques de pintura y reparación de pladur. Nuestro objetivo es prolongar la vida útil de su hogar,
                  mejorar la seguridad, la estética y evitar que incidencias pequeñas se conviertan en problemas mayores.
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
                      <li className="flex items-start"><Check className="w-4 h-4 text-primary mr-2 mt-0.5" /> Inspecciones periódicas y reparaciones a tiempo.</li>
                      <li className="flex items-start"><Check className="w-4 h-4 text-primary mr-2 mt-0.5" /> Sellados de juntas y rejuntados para evitar humedades.</li>
                      <li className="flex items-start"><Check className="w-4 h-4 text-primary mr-2 mt-0.5" /> Cambio de filtros de climatización y agua.</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Beneficios</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start"><Check className="w-4 h-4 text-primary mr-2 mt-0.5" /> Aumenta la vida útil de su vivienda.</li>
                      <li className="flex items-start"><Check className="w-4 h-4 text-primary mr-2 mt-0.5" /> Mejora la seguridad y el confort.</li>
                      <li className="flex items-start"><Check className="w-4 h-4 text-primary mr-2 mt-0.5" /> Evita averías mayores y gastos imprevistos.</li>
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
              Empiece hoy su mejora del hogar con Bricos. Contáctenos para transformar su espacio.
              Use nuestro formulario o llámenos para obtener un presupuesto de su proyecto.
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

        {/* Satisfaction/Contact band with spacing before footer */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto rounded-3xl bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] p-8 md:p-12 shadow">
              <h3 className="text-center text-2xl md:text-3xl font-extrabold text-primary mb-4">
                Nos esforzamos por mantener el 100% de satisfacción
              </h3>
              <p className="text-center text-base md:text-lg opacity-90 max-w-3xl mx-auto mb-8">
                Nuestro compromiso con la satisfacción del cliente es total. Si tiene cualquier consulta, no
                dude en ponerse en contacto. Un miembro de nuestro equipo le atenderá con rapidez y con el
                máximo cuidado.
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                  <Phone className="w-7 h-7 text-primary" />
                </div>
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

export default Mantenimiento;

