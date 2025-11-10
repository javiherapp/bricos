import { Check, AirVent, Wind, Droplets, Wrench, Shield, Filter as FilterIcon, Plug, Cpu, Settings } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AireAcondicionado = () => {
  const tareas: Array<{ icon: React.ElementType; titulo: string; desc: string }> = [
    { icon: FilterIcon, titulo: "Limpieza de Filtros", desc: "Retirada, limpieza y recolocación de filtros para mejorar el flujo de aire y la higiene." },
    { icon: Wind, titulo: "Limpieza de Unidades", desc: "Limpieza accesible de unidad interior y exterior; mejora del rendimiento y reducción de olores." },
    { icon: Settings, titulo: "Limpieza de Turbina/Rodete", desc: "Limpieza accesible de la turbina para recuperar caudal y reducir ruidos." },
    { icon: Droplets, titulo: "Bandeja y Desagüe", desc: "Limpieza de bandeja y desatasco del tubo de condensados para evitar goteos." },
    { icon: Wrench, titulo: "Tapas y Carcasas", desc: "Sustitución de cubiertas y piezas plásticas deterioradas." },
    { icon: Wrench, titulo: "Motor de Ventilador", desc: "Sustitución del motor del ventilador cuando no requiere abrir el circuito frigorífico." },
    { icon: Plug, titulo: "Condensador Eléctrico y Fusibles", desc: "Sustitución de condensadores, fusibles y otros elementos eléctricos accesibles." },
    { icon: Cpu, titulo: "Placas, Sensores y Relés", desc: "Diagnóstico básico y reparación/sustitución de electrónica accesible, receptor IR y sensores." },
    { icon: Plug, titulo: "Mandos y Configuración", desc: "Revisión de mando a distancia, pilas, sincronización y modos de funcionamiento." },
    { icon: Wrench, titulo: "Anclajes y Vibraciones", desc: "Revisión y apriete de anclajes; colocación de silentblocks cuando procede para reducir vibraciones." },
    { icon: Shield, titulo: "Sellados y Acabados", desc: "Revisión y sellado de pasamuros/canaletas y remates estéticos en pared." },
  ];

  const exclusiones: string[] = [
    "No realizamos carga de gas ni manipulación del circuito frigorífico.",
    "No intervenimos en gases fluorados ni en instalaciones que requieran certificación F-Gas.",
    "No hacemos instalaciones completas ni traslados de equipos.",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero */}
        <section className="brand-hero py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Aire Acondicionado: Reparación y Mantenimiento</h1>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
              Servicio de “manitas” para mantener y reparar su aire acondicionado: limpieza, desagües, electrónica,
              ventiladores y ajustes mecánicos/eléctricos. Sin manipular el gas ni realizar instalaciones certificadas.
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
                  Realizamos tareas de mantenimiento ligero y reparaciones menores habituales en equipos
                  domésticos split: limpieza de filtros y unidades, desatasco de desagües, reducción de ruidos
                  y vibraciones, y remates estéticos. Nuestro objetivo es que su equipo funcione mejor y con
                  menos incidencias del día a día.
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
                      <li className="flex items-start"><Check className="w-4 h-4 text-primary mr-2 mt-0.5" /> Limpieza de filtros cada 1-3 meses según uso.</li>
                      <li className="flex items-start"><Check className="w-4 h-4 text-primary mr-2 mt-0.5" /> Revisión anual de desagüe y anclajes.</li>
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
              ¿Gotea, huele o hace ruido su aire? Le ayudamos con mantenimiento y reparaciones menores.
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

export default AireAcondicionado;

