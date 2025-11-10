import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Wrench, Hammer, Sparkles, TreePine, Shield, Zap, Clock, ThumbsUp, User, Plug, AirVent, Home, Target, Users, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import ReviewCard from "@/components/ReviewCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import electricalImg from "@/assets/specialty-electrical.jpg";
import carpentryImg from "@/assets/specialty-carpentry.jpg";
import exteriorImg from "@/assets/specialty-exterior.jpg";
import appliancesImg from "@/assets/specialty-appliances.jpg";
import mechanicalImg from "@/assets/specialty-mechanical.jpg";
import plumbingImg from "@/assets/specialty-plumbing.png";

const Index = () => {
  const services = [
    {
      icon: Wrench,
      title: "Mantenimiento y Reparación del Hogar",
      description: "Soluciones expertas para todo tipo de mantenimiento y reparaciones.",
      link: "/servicios/mantenimiento"
    },
    {
      icon: Hammer,
      title: "Montaje e Instalación",
      description: "Montaje e instalación sin esfuerzo para su comodidad.",
      link: "/servicios/montaje"
    },
    {
      icon: Plug,
      title: "Electrodomésticos: Instalación y Reparación",
      description: "Instalación y reparación de electrodomésticos: lavadoras, lavavajillas, hornos, encimeras y más.",
      link: "/servicios/electrodomesticos"
    },
    {
      icon: Home,
      secondaryIcon: TreePine,
      title: "Exteriores",
      description: "Reformas exteriores, lavados a presión, cuidado de jardines y más.",
      link: "/servicios/exteriores"
    },
    {
      icon: AirVent,
      title: "Aire Acondicionado: Reparación de Aires",
      description: "Reparación y mantenimiento de aires acondicionados domésticos para un hogar cómodo todo el año.",
      link: "/servicios/aire-acondicionado"
    },
    {
      icon: Zap,
      title: "Servicios Eléctricos Menores",
      description: "Soluciones eléctricas menores eficientes y seguras para su hogar.",
      link: "/servicios/electricidad"
    }
  ];

  const specialties = [
    {
      image: electricalImg,
      name: "Reparaciones Eléctricas"
    },
    {
      image: mechanicalImg,
      name: "Reparaciones Mecánicas"
    },
    {
      image: carpentryImg,
      name: "Carpintería"
    },
    {
      image: exteriorImg,
      name: "Exteriores"
    },
    {
      image: appliancesImg,
      name: "Instalación y Reparación de Electrodomésticos"
    },
    {
      image: plumbingImg,
      name: "Fontanería"
    }
  ];

  const reviews = [
    {
      name: "María García",
      initials: "MG",
      review: "Excelente servicio. Muy atentos al detalle en las comunicaciones, presupuesto, programación y trabajo realizado. Recomiendo totalmente este equipo profesional."
    },
    {
      name: "Juan Pérez",
      initials: "JP",
      review: "Tuve varios proyectos con Bricos. La comunicación fue excelente, los proyectos se completaron a tiempo y el trabajo fue de primera calidad. Definitivamente los recomendaría."
    },
    {
      name: "Ana Martínez",
      initials: "AM",
      review: "Es raro encontrar un servicio como Bricos que se destaque en trabajos de calidad. Su trabajo es minucioso, duradero y a un precio razonable. Los recomiendo altamente."
    },
    {
      name: "Carlos López",
      initials: "CL",
      review: "Equipo de primera categoría. Amables, puntuales y conocedores. 10/10 recomendaré a otros y usaré sus servicios nuevamente."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section
          className="relative bg-cover bg-center text-white py-32 md:py-40"
          style={{
            // First image: your uploaded file in /public/hero.jpg
            // Second image: fallback Unsplash photo if the first is missing
            backgroundImage:
              "url(/hero.png), url(/hero.jpg), url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070')",
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                Tu equipo de mantenimiento del hogar de confianza en la Vega Baja
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Profesionales puntuales y amables para arreglos, instalaciones y mejoras en casa.
                Trabajo bien hecho, sin complicaciones y con precios claros.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <Button size="lg" asChild className="text-lg bg-primary hover:bg-primary/90 text-white rounded-full px-8">
                  <Link to="/reservar">Presupuesto Instantáneo</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-lg border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-full px-8">
                  <a href="tel:+34965000000">
                    <Phone className="w-5 h-5 mr-2" />
                    965 000 000
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Specialties Carousel Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Nuestras Especialidades
            </h2>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 3000,
                }),
              ]}
              className="w-full max-w-5xl mx-auto"
            >
              <CarouselContent>
                {specialties.map((specialty, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-2">
                      <div className="flex flex-col items-center">
                        <div className="w-40 h-40 rounded-full overflow-hidden mb-3 shadow-lg">
                          <img
                            src={specialty.image}
                            alt={specialty.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h3 className="text-base font-semibold text-center">{specialty.name}</h3>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              Nuestros Servicios
            </h2>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
              En Bricos, somos más que simples manitas; somos una parte vital de su comunidad local. Nuestros servicios van desde el mantenimiento de puertas y ventanas hasta instalaciones de seguridad, todo entregado con una artesanía excepcional.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section - Redesigned */}
        <section className="py-20 bg-[hsl(var(--light-bg))]">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-center mb-6">
              En <span className="brand-script brand-script--primary align-baseline">Bricos</span>, Lo Entendemos
            </h2>
            <p className="text-lg md:text-xl text-center text-muted-foreground max-w-4xl mx-auto mb-12">
              No todos tienen tiempo o habilidades para el bricolaje. En lugar de preocuparse, llámenos.
              Llegamos puntuales, equipados con herramientas y habilidades profesionales, listos para rescatar
              sus proyectos y mantener su hogar en forma impecable.
            </p>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Mascot + brand panel */}
              <div className="flex flex-col items-center">
                <div className="w-72 h-72 md:w-80 md:h-80 rounded-full bg-white shadow-xl flex items-center justify-center ring-1 ring-black/5">
                  <div className="text-[4.5rem] md:text-[5rem]" aria-hidden>🛠️</div>
                </div>
              </div>

              {/* Right: bullets + call/cta */}
              <div>
                {/* Why choose label above phone number */}
                <div className="mb-2">
                  <span className="text-foreground/70">¿Por qué elegir </span>
                  <span className="brand-script brand-script--primary text-2xl align-baseline">Bricos</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-center md:gap-6 mb-8">
                  <a href="tel:+34965000000" className="text-2xl md:text-3xl font-extrabold tracking-tight hover:text-[hsl(var(--primary))] transition-colors">
                    (965) 000-000
                  </a>
                  <span className="text-muted-foreground">Llame para una reparación rápida</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-center gap-3">
                    <Wrench className="w-6 h-6 text-[hsl(var(--primary))]" />
                    <span className="text-lg font-medium">Experiencia Comprobada</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-6 h-6 text-[hsl(var(--primary))]" />
                    <span className="text-lg font-medium">Servicio Todo el Año</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="w-6 h-6 text-[hsl(var(--primary))]" />
                    <span className="text-lg font-medium">Cobertura Adaptada</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <ThumbsUp className="w-6 h-6 text-[hsl(var(--primary))]" />
                    <span className="text-lg font-medium">Equipo de Confianza</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Zap className="w-6 h-6 text-[hsl(var(--primary))]" />
                    <span className="text-lg font-medium">Valor Excepcional</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Hammer className="w-6 h-6 text-[hsl(var(--primary))]" />
                    <span className="text-lg font-medium">Compromiso con el Cliente</span>
                  </div>
                </div>

                <div className="mt-10">
                  <Button size="lg" variant="outline" asChild className="rounded-xl px-8 py-6 text-base md:text-lg">
                    <Link to="/sobre-nosotros">Más Sobre Nosotros</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Stats Hero (before Reviews) */}
        <section className="brand-hero py-24">
          <div className="container mx-auto px-4 text-center">
            <div className="brand-script brand-script--primary text-6xl md:text-8xl mb-6">
              Bricos
            </div>
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight max-w-5xl mx-auto">
              ofrece un servicio experto, asequible y amigable.
            </h2>

            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <div className="flex flex-col items-center">
                <User className="w-16 h-16 mb-4 text-secondary-foreground/90" />
                <div className="text-6xl font-extrabold">100+</div>
                <div className="text-lg opacity-90">clientes felices</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="relative mb-4 h-16 w-16 text-secondary-foreground/90">
                  <Wrench className="absolute inset-0 w-16 h-16 rotate-12" />
                  <Hammer className="absolute inset-0 w-16 h-16 -rotate-12" />
                </div>
                <div className="text-6xl font-extrabold">5★</div>
                <div className="text-lg opacity-90">valoración media</div>
              </div>
            </div>
          </div>
          <div className="fixed bottom-6 right-6 z-40">
            <Button asChild className="rounded-2xl px-6 py-6 text-lg bg-primary hover:bg-primary/90 text-white shadow-xl">
              <Link to="/contacto" className="flex items-center gap-2" aria-label="Abrir chat de contacto">
                <MessageCircle className="w-5 h-5" />
                Escríbenos
              </Link>
            </Button>
          </div>
        </section>

        {/* Why Choose Us - Cards Section */}
        <section className="relative py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-center mb-6">
              ¿Por Qué Elegirnos?
            </h2>
            <p className="text-lg md:text-xl text-center text-muted-foreground max-w-5xl mx-auto mb-12">
              Bienvenido a Bricos, donde tus ideas de mejora del hogar se hacen realidad.
              Como negocio local y confiable, profundamente arraigado en la comunidad, nos enorgullece
              ofrecer una amplia gama de servicios expertos con un toque personal.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl shadow-lg ring-1 ring-black/5 p-8 border-t-4 border-primary">
                <div className="mb-6 flex justify-center">
                  <Target className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-center mb-4">
                  Buen oficio y atención al detalle
                </h3>
                <p className="text-muted-foreground text-center leading-relaxed">
                  En Bricos hacemos las cosas bien. Contamos con oficio, herramientas y cuidado
                  para que el resultado sea el que toca: limpio, seguro y duradero.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg ring-1 ring-black/5 p-8 border-t-4 border-primary">
                <div className="mb-6 flex justify-center">
                  <Wrench className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-center mb-4">
                  Amplia Gama de Servicios
                </h3>
                <p className="text-muted-foreground text-center leading-relaxed">
                  Nuestros principales: mantenimiento y reparación, montaje e instalación, exteriores,
                  electrodomésticos, aire acondicionado (reparación) y eléctricos menores.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg ring-1 ring-black/5 p-8 border-t-4 border-primary">
                <div className="mb-6 flex justify-center">
                  <Users className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-center mb-4">
                  Negocio Familiar
                </h3>
                <p className="text-muted-foreground text-center leading-relaxed">
                  Como empresa familiar, aportamos un nivel de cuidado y dedicación profundamente personal.
                  Entendemos el valor del hogar y la importancia de la confianza.
                </p>
              </div>
            </div>
          </div>

          <div className="hidden md:block absolute -bottom-6 right-6">
            <Button asChild className="rounded-3xl px-8 py-6 text-lg bg-primary hover:bg-primary/90 text-white shadow-[0_10px_20px_rgba(0,0,0,0.15)] ring-1 ring-black/10">
              <Link to="/contacto" className="flex items-center gap-2" aria-label="Abrir chat de contacto">
                <MessageCircle className="w-5 h-5" />
                Escríbenos
              </Link>
            </Button>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Reseñas de Cinco Estrellas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {reviews.map((review, index) => (
                <ReviewCard key={index} {...review} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para Mejorar Su Hogar?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Llame para una reparación rápida
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="text-lg bg-white text-secondary hover:bg-white/90">
                <a href="tel:+34965000000" className="flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  965 000 000
                </a>
              </Button>
              <Button size="lg" asChild className="text-lg">
                <Link to="/reservar">Reservar en Línea</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
