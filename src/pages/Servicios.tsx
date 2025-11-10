import { Wrench, Hammer, Plug, TreePine, AirVent, Zap, Home } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";

const Servicios = () => {
  const services = [
    {
      icon: Wrench,
      title: "Mantenimiento y Reparación del Hogar",
      description: "Soluciones expertas para todo tipo de mantenimiento y reparaciones domésticas. Desde reparaciones de puertas y ventanas hasta trabajos de fontanería y carpintería.",
      link: "/servicios/mantenimiento"
    },
    {
      icon: Hammer,
      title: "Montaje e Instalación",
      description: "Montaje profesional de muebles, instalación de estanterías, montaje de electrodomésticos y mucho más. Sin complicaciones para usted.",
      link: "/servicios/montaje"
    },
    {
      icon: Plug,
      title: "Electrodomésticos: Instalación y Reparación",
      description: "Instalación y reparación de lavadoras, lavavajillas, hornos, encimeras y otros electrodomésticos del hogar.",
      link: "/servicios/electrodomesticos"
    },
    {
      icon: Home,
      secondaryIcon: TreePine,
      title: "Exteriores",
      description: "Reformas exteriores, lavados a presión, cuidado de jardines y mejoras de espacios exteriores.",
      link: "/servicios/exteriores"
    },
    {
      icon: AirVent,
      title: "Aire Acondicionado: Reparación de Aires",
      description: "Reparación y mantenimiento de aires acondicionados domésticos para mantener su hogar cómodo todo el año.",
      link: "/servicios/aire-acondicionado"
    },
    {
      icon: Zap,
      title: "Servicios Eléctricos Menores",
      description: "Instalación de lámparas, reparación de enchufes, cambio de interruptores y otros trabajos eléctricos menores.",
      link: "/servicios/electricidad"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="brand-hero py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
              Nuestros Servicios
            </h1>
            <p className="text-xl text-center max-w-3xl mx-auto opacity-90">
              Ofrecemos una amplia gama de servicios profesionales para el mantenimiento y mejora de su hogar en la Vega Baja de Alicante
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
              En Bricos, somos más que simples profesionales del mantenimiento; somos una parte vital de su comunidad local. Nuestros servicios van desde el mantenimiento de puertas y ventanas hasta instalaciones de seguridad, todo entregado con una artesanía excepcional. Nos enorgullecemos no solo de reparar hogares, sino de mejorarlos, asegurando que cada trabajo, ya sea montaje de muebles o mantenimiento de jardines, se realice con un toque personal.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </section>

        {/* Additional Info Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">
                ¿Por Qué Elegir Bricos?
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-background p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Profesionales Certificados</h3>
                  <p className="text-muted-foreground">
                    Todos nuestros técnicos están certificados y cuentan con amplia experiencia en sus respectivas áreas.
                  </p>
                </div>
                <div className="bg-background p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Presupuesto Sin Compromiso</h3>
                  <p className="text-muted-foreground">
                    Le ofrecemos un presupuesto detallado y transparente antes de comenzar cualquier trabajo.
                  </p>
                </div>
                <div className="bg-background p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Garantía de Calidad</h3>
                  <p className="text-muted-foreground">
                    Garantizamos la calidad de todos nuestros trabajos y materiales utilizados.
                  </p>
                </div>
                <div className="bg-background p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Atención Personalizada</h3>
                  <p className="text-muted-foreground">
                    Cada cliente es único y adaptamos nuestros servicios a sus necesidades específicas.
                  </p>
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

export default Servicios;
