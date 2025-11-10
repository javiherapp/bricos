import { Check, Home, Wrench, Paintbrush, Droplets, PanelsTopLeft, TreePine, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Exteriores = () => {
  const tareas: Array<{ icon: React.ElementType; titulo: string; desc: string }> = [
    { icon: Droplets, titulo: "Lavado a Presión", desc: "Limpieza de suelos exteriores, fachadas, muros y terrazas para eliminar suciedad y verdín." },
    { icon: Paintbrush, titulo: "Retoques de Pintura Exterior", desc: "Repasos de pintura en puertas, verjas y paredes exteriores." },
    { icon: PanelsTopLeft, titulo: "Sellados e Impermeabilización", desc: "Sellado de juntas, grietas y puntos de entrada de agua para prevenir humedades." },
    { icon: Wrench, titulo: "Reparaciones en Terraza y Vallas", desc: "Ajustes y reparaciones menores en vallados, barandillas, listones y tarimas." },
    { icon: TreePine, titulo: "Cuidado de Jardín Básico", desc: "Poda ligera, retirada de restos y mantenimiento sencillo de zonas ajardinadas." },
    { icon: Home, titulo: "Mantenimiento de Fachada y Exterior", desc: "Colocación de remates, anclajes, fijaciones y pequeños trabajos en el exterior de la vivienda." },
    { icon: Shield, titulo: "Protecciones y Acabados", desc: "Aplicación de protectores en madera/metal y acabados para prolongar la vida útil." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero */}
        <section className="brand-hero py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Exteriores</h1>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
              Reformas y mantenimiento exterior para que su vivienda luzca impecable: lavado a presión,
              sellados, pintura, pequeñas reparaciones y cuidado de jardín.
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
                  Nos ocupamos del mantenimiento exterior con tareas orientadas a proteger e incrementar la
                  durabilidad de su vivienda. Trabajamos con especial cuidado en superficies expuestas al clima
                  y en elementos que requieren fijación segura.
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
                      <li className="flex items-start"><Check className="w-4 h-4 text-primary mr-2 mt-0.5" /> Revisión estacional de sellados y puntos de agua.</li>
                      <li className="flex items-start"><Check className="w-4 h-4 text-primary mr-2 mt-0.5" /> Mantenimiento periódico de pintura y protección en madera/metal.</li>
                      <li className="flex items-start"><Check className="w-4 h-4 text-primary mr-2 mt-0.5" /> Limpieza regular para evitar acumulación de suciedad.</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Beneficios</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start"><Check className="w-4 h-4 text-primary mr-2 mt-0.5" /> Mejora del aspecto y el valor de la propiedad.</li>
                      <li className="flex items-start"><Check className="w-4 h-4 text-primary mr-2 mt-0.5" /> Prevención de humedades y deterioro.</li>
                      <li className="flex items-start"><Check className="w-4 h-4 text-primary mr-2 mt-0.5" /> Mayor seguridad y durabilidad en elementos exteriores.</li>
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
              Empiece hoy el mantenimiento exterior con Bricos. Contáctenos para un presupuesto sin compromiso.
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

export default Exteriores;

