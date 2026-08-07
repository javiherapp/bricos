import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { EMAIL_ADDRESS, PHONE_DISPLAY } from "@/lib/contact";
import { LEGAL_OWNER, LEGAL_UPDATED_AT } from "@/lib/legal";

type LegalPageKind = "legal" | "privacy" | "cookies";

type LegalSection = {
  title: string;
  body?: string[];
  items?: string[];
};

type LegalContent = {
  title: string;
  intro: string;
  sections: LegalSection[];
};

const legalContent: Record<LegalPageKind, LegalContent> = {
  legal: {
    title: "Aviso legal",
    intro:
      "Información general sobre el titular de este sitio web y las condiciones básicas de uso.",
    sections: [
      {
        title: "Datos identificativos",
        items: [
          `Nombre comercial: ${LEGAL_OWNER.tradeName}`,
          `NIF/CIF: ${LEGAL_OWNER.taxId}`,
          `Domicilio: ${LEGAL_OWNER.address}`,
          `Email: ${LEGAL_OWNER.email}`,
          `Teléfono: ${LEGAL_OWNER.phone}`,
          `Sitio web: ${LEGAL_OWNER.website}`,
        ],
      },
      {
        title: "Actividad",
        body: [
          "Bricos ofrece información y vías de contacto para solicitar presupuestos de mantenimiento, reparaciones, instalaciones y servicios del hogar en la Vega Baja de Alicante.",
          "La información publicada en la web tiene carácter orientativo. Las condiciones finales de cada trabajo se confirman de forma individual antes de iniciar el servicio.",
        ],
      },
      {
        title: "Uso de la web",
        body: [
          "El usuario se compromete a utilizar este sitio de forma lícita, correcta y respetuosa, sin dañar la web, su disponibilidad, sus contenidos o los derechos de terceros.",
          "Bricos puede actualizar, modificar o retirar contenidos de la web cuando lo considere necesario para mantener la información correcta y actualizada.",
        ],
      },
      {
        title: "Precios, promociones y presupuestos",
        body: [
          "Las tarifas o referencias económicas publicadas no sustituyen un presupuesto personalizado. El precio final puede variar según desplazamiento, materiales, urgencia, dificultad, número de operarios o intervención de terceros.",
          "Las promociones, como el descuento para nuevos clientes, están sujetas a las condiciones indicadas en la web y se revisan antes de confirmar el presupuesto.",
        ],
      },
      {
        title: "Propiedad intelectual",
        body: [
          "Los textos, imágenes, logotipos, diseño y demás elementos de esta web pertenecen a Bricos o se usan con autorización, salvo indicación contraria.",
          "No se permite copiar, reproducir o explotar los contenidos de la web con fines comerciales sin autorización previa.",
        ],
      },
      {
        title: "Enlaces y servicios externos",
        body: [
          "La web puede enlazar o integrar servicios de terceros, como WhatsApp, Google Maps o Meta. Al utilizar esos servicios, el usuario queda sujeto también a sus propias condiciones y políticas.",
          "Bricos no controla el contenido, funcionamiento o tratamiento de datos realizado por plataformas externas ajenas a este sitio web.",
        ],
      },
      {
        title: "Legislación aplicable",
        body: [
          "Este sitio se dirige principalmente a usuarios en España. Para cualquier controversia se aplicará la normativa española que resulte vigente.",
        ],
      },
    ],
  },
  privacy: {
    title: "Política de privacidad",
    intro:
      "Información sobre cómo Bricos trata los datos personales recibidos a través de la web, email, teléfono y WhatsApp.",
    sections: [
      {
        title: "Responsable del tratamiento",
        items: [
          `Responsable: ${LEGAL_OWNER.tradeName}`,
          `NIF/CIF: ${LEGAL_OWNER.taxId}`,
          `Domicilio: ${LEGAL_OWNER.address}`,
          `Email de contacto: ${LEGAL_OWNER.email}`,
          `Teléfono: ${LEGAL_OWNER.phone}`,
        ],
      },
      {
        title: "Datos que podemos tratar",
        items: [
          "Nombre y apellidos.",
          "Teléfono y email.",
          "Dirección del servicio o localidad.",
          "Información sobre el trabajo solicitado.",
          "Fotos, vídeos o documentos que el usuario envíe voluntariamente por WhatsApp, email o formulario.",
          "Datos técnicos y de navegación cuando el usuario acepta cookies de marketing.",
        ],
      },
      {
        title: "Finalidades",
        items: [
          "Responder consultas y solicitudes de presupuesto.",
          "Coordinar visitas, trabajos, materiales y comunicaciones relacionadas con el servicio.",
          "Gestionar clientes, incidencias, garantías, pagos y obligaciones legales.",
          "Mejorar la medición de la web y campañas publicitarias mediante Meta Pixel solo cuando el usuario acepta cookies de marketing.",
        ],
      },
      {
        title: "Base legal",
        items: [
          "Consentimiento del usuario al enviar una consulta, escribir por WhatsApp o aceptar cookies de marketing.",
          "Aplicación de medidas precontractuales o ejecución de un servicio solicitado.",
          "Interés legítimo en atender comunicaciones, mantener la seguridad de la web y gestionar la relación con clientes.",
          "Cumplimiento de obligaciones legales cuando corresponda.",
        ],
      },
      {
        title: "Destinatarios",
        body: [
          "Los datos pueden ser tratados por proveedores necesarios para prestar el servicio, como hosting, email, herramientas de comunicación, WhatsApp/Meta cuando el usuario contacta por esa vía, Google Maps cuando el usuario carga el mapa y Meta Pixel si acepta cookies de marketing.",
          "No vendemos datos personales. Solo se comunicarán a terceros cuando sea necesario para atender la solicitud, prestar el servicio o cumplir una obligación legal.",
        ],
      },
      {
        title: "Transferencias internacionales",
        body: [
          "Algunos proveedores tecnológicos pueden tratar datos fuera del Espacio Económico Europeo. En esos casos, el tratamiento dependerá de sus políticas, contratos y garantías aplicables.",
        ],
      },
      {
        title: "Conservación",
        body: [
          "Los datos se conservarán durante el tiempo necesario para responder la solicitud, prestar el servicio y atender posibles responsabilidades legales.",
          "Los datos derivados de cookies de marketing se tratan solo si el usuario acepta esas cookies y pueden gestionarse desde las preferencias de cookies.",
        ],
      },
      {
        title: "Derechos",
        body: [
          `El usuario puede solicitar acceso, rectificación, supresión, oposición, limitación, portabilidad o retirada del consentimiento escribiendo a ${EMAIL_ADDRESS}.`,
          "También puede presentar una reclamación ante la Agencia Española de Protección de Datos si considera que el tratamiento no se ajusta a la normativa.",
        ],
      },
      {
        title: "Menores",
        body: [
          "Los servicios de Bricos no están dirigidos a menores. Si un menor facilita datos personales, su padre, madre o tutor puede contactar con nosotros para solicitar su eliminación.",
        ],
      },
    ],
  },
  cookies: {
    title: "Política de cookies",
    intro:
      "Información sobre cookies, almacenamiento local y servicios externos utilizados en este sitio web.",
    sections: [
      {
        title: "Qué son las cookies",
        body: [
          "Las cookies y tecnologías similares permiten guardar o recuperar información del navegador o dispositivo. Pueden ser necesarias para que una web funcione, recordar preferencias o medir actividad.",
        ],
      },
      {
        title: "Cookies y almacenamiento necesarios",
        items: [
          "i18nextLng: recuerda el idioma elegido por el usuario. Es una preferencia técnica.",
          "bricosMarketingConsent: guarda si el usuario ha aceptado o rechazado cookies de marketing para no pedir la elección en cada visita. Se conserva hasta dos años o hasta que el usuario cambie sus preferencias.",
        ],
      },
      {
        title: "Cookies de marketing",
        body: [
          "Usamos Meta Pixel únicamente cuando el usuario acepta cookies de marketing. Sirve para medir visitas, páginas vistas, solicitudes de presupuesto y contacto por WhatsApp, y para mejorar campañas publicitarias.",
          "Meta puede establecer cookies o identificadores como _fbp o _fbc y tratar datos de navegación conforme a sus propias condiciones y políticas.",
        ],
      },
      {
        title: "Servicios externos",
        body: [
          "La página de zona de servicio incluye Google Maps, pero el mapa no se carga automáticamente. El usuario debe pulsar el botón de cargar mapa antes de conectar con Google.",
          "Los enlaces a WhatsApp, email, teléfono o redes sociales pueden abrir servicios externos con sus propias políticas.",
        ],
      },
      {
        title: "Cómo aceptar, rechazar o cambiar la elección",
        body: [
          "El banner de cookies permite aceptar o rechazar las cookies de marketing al mismo nivel.",
          "El usuario puede cambiar su decisión desde el enlace “Preferencias de cookies” situado en el footer de la web.",
          "También puede borrar cookies y datos del sitio desde la configuración de su navegador.",
        ],
      },
      {
        title: "Relación de tecnologías",
        items: [
          "Bricos - almacenamiento local técnico: idioma y elección de cookies.",
          "Meta Pixel - marketing y medición publicitaria: solo tras consentimiento.",
          "Google Maps - visualización de mapa: solo cuando el usuario pulsa cargar mapa.",
        ],
      },
      {
        title: "Actualizaciones",
        body: [
          "Esta política puede actualizarse si cambian las tecnologías utilizadas o los servicios externos integrados en la web.",
        ],
      },
    ],
  },
};

const legalLinks = [
  { to: "/aviso-legal", label: "Aviso legal" },
  { to: "/politica-privacidad", label: "Política de privacidad" },
  { to: "/politica-cookies", label: "Política de cookies" },
];

type LegalPageProps = {
  kind: LegalPageKind;
};

const LegalPage = ({ kind }: LegalPageProps) => {
  const content = legalContent[kind];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-grow">
        <section className="brand-hero py-14">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">
                Información legal
              </p>
              <h1 className="text-4xl font-bold md:text-5xl">{content.title}</h1>
              <p className="mt-4 max-w-3xl text-lg opacity-90">{content.intro}</p>
              <p className="mt-3 text-sm opacity-75">
                Última actualización: {LEGAL_UPDATED_AT}
              </p>
            </div>
          </div>
        </section>

        <section className="py-14">
          <div className="container mx-auto px-4">
            <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[260px_1fr]">
              <aside className="lg:sticky lg:top-28 lg:self-start">
                <nav className="rounded-lg border bg-background p-4 text-sm shadow-sm">
                  <p className="mb-3 font-semibold">Páginas legales</p>
                  <div className="space-y-2">
                    {legalLinks.map((link) => (
                      <Link
                        key={link.to}
                        to={link.to}
                        className={`block rounded-md px-3 py-2 transition-colors ${
                          content.title === link.label
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-muted"
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                  <div className="mt-5 rounded-md bg-muted p-3 text-muted-foreground">
                    <p className="font-medium text-foreground">Contacto legal</p>
                    <a
                      href={`mailto:${EMAIL_ADDRESS}`}
                      className="mt-1 block break-words text-primary hover:underline"
                    >
                      {EMAIL_ADDRESS}
                    </a>
                    <p className="mt-1">{PHONE_DISPLAY}</p>
                  </div>
                </nav>
              </aside>

              <div className="space-y-8">
                {content.sections.map((section) => (
                  <section key={section.title} className="border-b pb-8 last:border-b-0">
                    <h2 className="text-2xl font-bold">{section.title}</h2>
                    {section.body?.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="mt-4 leading-7 text-muted-foreground"
                      >
                        {paragraph}
                      </p>
                    ))}
                    {section.items && (
                      <ul className="mt-4 space-y-3 text-muted-foreground">
                        {section.items.map((item) => (
                          <li key={item} className="flex gap-3 leading-7">
                            <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}

                <div className="rounded-lg border border-primary/30 bg-primary/10 p-5 text-sm text-foreground/80">
                  <p className="font-semibold text-primary">
                    Dato pendiente importante
                  </p>
                  <p className="mt-2">
                    El NIF/CIF aparece como pendiente porque todavía no se ha
                    facilitado. Para completar el aviso legal conforme a la
                    información general exigible, conviene añadir el NIF/CIF real
                    del titular.
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

export default LegalPage;
