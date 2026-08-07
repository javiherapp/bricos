import { useState } from "react";
import { MapPin, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ZonaServicio = () => {
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  const ciudades = [
    "Orihuela",
    "Torrevieja",
    "Pilar de la Horadada",
    "San Miguel de Salinas",
    "Guardamar del Segura",
    "Rojales",
    "San Fulgencio",
    "Algorfa",
    "Formentera del Segura",
    "Jacarilla",
    "Redován",
    "Callosa de Segura",
    "Cox",
    "Granja de Rocamora",
    "Almoradí",
    "Benejúzar",
    "Rafal",
    "Bigastro",
    "Daya Nueva",
    "Daya Vieja"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="brand-hero py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
              Zona de Servicio
            </h1>
            <p className="text-xl text-center max-w-3xl mx-auto opacity-90">
              Atendemos toda la Vega Baja de Alicante
            </p>
          </div>
        </section>

        {/* Service Area Info */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <MapPin className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-6">Servimos la Vega Baja de Alicante</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Bricos ofrece servicios profesionales de mantenimiento del hogar en toda la comarca de la Vega Baja del Segura. Nuestro equipo está listo para atender su hogar con la calidad y profesionalidad que merece.
              </p>
              <p className="text-lg text-muted-foreground">
                Si su localidad no aparece en la lista, no dude en contactarnos. Evaluamos cada solicitud y hacemos todo lo posible por atender a nuestros clientes en toda la provincia de Alicante.
              </p>
            </div>

            <div className="max-w-5xl mx-auto mb-12">
              <div className="overflow-hidden rounded-lg border bg-background shadow-sm">
                {isMapLoaded ? (
                  <iframe
                    title="Mapa de zona de servicio Bricos en la Vega Baja de Alicante"
                    src="https://www.google.com/maps?q=Vega%20Baja%20del%20Segura%2C%20Alicante%2C%20Espa%C3%B1a&output=embed"
                    className="h-[360px] w-full"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                ) : (
                  <div className="flex min-h-[360px] flex-col items-center justify-center gap-4 bg-muted/30 p-6 text-center">
                    <MapPin className="h-12 w-12 text-primary" />
                    <div>
                      <p className="text-lg font-semibold">
                        Mapa de cobertura en la Vega Baja
                      </p>
                      <p className="mt-2 max-w-xl text-sm text-muted-foreground">
                        El mapa se carga desde Google Maps. Al pulsar el botón,
                        Google puede tratar datos técnicos de navegación conforme
                        a sus propias políticas.
                      </p>
                    </div>
                    <Button type="button" onClick={() => setIsMapLoaded(true)}>
                      Cargar mapa
                    </Button>
                  </div>
                )}
              </div>
              <p className="mt-4 text-center text-sm text-muted-foreground">
                Servicio local de mantenimiento del hogar, aire acondicionado, fontanería, carpintería, pintura y jardinería en la Vega Baja de Alicante, incluyendo Torrevieja, Orihuela, Guardamar del Segura, Rojales y Pilar de la Horadada.
              </p>
            </div>

            {/* Cities Grid */}
            <div className="max-w-5xl mx-auto">
              <h3 className="text-2xl font-semibold mb-8 text-center">
                Principales Ciudades y Municipios que Atendemos
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {ciudades.map((ciudad, index) => (
                  <Card key={index}>
                    <CardContent className="p-4 flex items-center">
                      <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                      <span className="font-medium">{ciudad}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Info */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Cobertura Completa en la Vega Baja
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-background p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Zona Costera</h3>
                  <p className="text-muted-foreground">
                    Atendemos todas las localidades costeras de la Vega Baja, incluyendo Torrevieja, Guardamar del Segura, y Pilar de la Horadada.
                  </p>
                </div>
                <div className="bg-background p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Zona Interior</h3>
                  <p className="text-muted-foreground">
                    Nuestros servicios también cubren las poblaciones del interior como Orihuela, Callosa de Segura, Almoradí y todas sus pedanías.
                  </p>
                </div>
                <div className="bg-background p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Urbanizaciones</h3>
                  <p className="text-muted-foreground">
                    Prestamos servicio en todas las urbanizaciones de la comarca, tanto en la costa como en el interior.
                  </p>
                </div>
                <div className="bg-background p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Zonas Rurales</h3>
                  <p className="text-muted-foreground">
                    También atendemos viviendas en zonas rurales y pedanías de todos los municipios de la Vega Baja.
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

export default ZonaServicio;
