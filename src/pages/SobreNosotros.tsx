import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const SobreNosotros = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="brand-hero py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 text-center">
              Sobre Nosotros
            </h1>
            <p className="text-center">
              <span className="mr-2">Conozca al equipo de</span>
              <span className="brand-script brand-script--primary text-3xl align-middle">Bricos</span>
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Nuestra Misión</h2>
              <p className="text-lg text-muted-foreground mb-8 text-center">
                En Bricos, estamos en una misión para redefinir la percepción de la comunidad sobre la industria del mantenimiento del hogar, mostrando el verdadero valor que brindamos a través de servicios confiables y de calidad en la Vega Baja de Alicante.
              </p>
              <p className="text-lg text-muted-foreground text-center">
                Creemos que cada hogar merece atención profesional y personalizada. Por eso, nos dedicamos a ofrecer servicios de la más alta calidad, con profesionales capacitados que tratan su hogar como si fuera el suyo propio.
              </p>
            </div>
          </div>
        </section>

        {/* (Stats section eliminado a petición del cliente) */}

        {/* Values Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Nuestros Valores</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Confiabilidad</h3>
                  <p className="text-muted-foreground">
                    Cumplimos con nuestros compromisos y llegamos a tiempo. Su confianza es nuestra prioridad.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Calidad</h3>
                  <p className="text-muted-foreground">
                    No comprometemos la calidad. Cada trabajo se realiza con los más altos estándares profesionales.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Transparencia</h3>
                  <p className="text-muted-foreground">
                    Comunicación clara y presupuestos honestos. Sin sorpresas ni costos ocultos.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Atención al Cliente</h3>
                  <p className="text-muted-foreground">
                    Estamos aquí para servirle. Su satisfacción es nuestra mayor recompensa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Nuestro Equipo</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Contamos con un equipo de profesionales altamente capacitados y experimentados en diversas áreas del mantenimiento del hogar. Cada miembro de nuestro equipo está comprometido con la excelencia y la satisfacción del cliente.
              </p>
              <p className="text-lg text-muted-foreground">
                Todos nuestros técnicos están certificados, asegurados y pasan por verificaciones de antecedentes. Puede estar seguro de que su hogar está en buenas manos.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SobreNosotros;
