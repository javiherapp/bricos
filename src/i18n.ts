import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  es: {
    translation: {
      header: {
        bar: "Abierto Lun-Sáb 8AM a 6PM",
      },
      nav: {
        home: "Inicio",
        services: "Servicios",
        about: "Sobre Nosotros",
        area: "Zona de Servicio",
        contact: "Contacto",
        quote: "Presupuesto",
        quoteInstant: "Instantáneo",
        quoteInstantFull: "Presupuesto Instantáneo",
      },
      footer: {
        description: "Servicio de mantenimiento y reparación del hogar de confianza en la Vega Baja de Alicante.",
        quickLinks: "Enlaces Rápidos",
        servicesTitle: "Servicios",
        servicesList: {
          homeMaintenance: "Mantenimiento del Hogar",
          assembly: "Montaje e Instalación",
          appliances: "Electrodomésticos",
          exteriors: "Exteriores",
          painting: "Pintura y Reformas menores",
          gardening: "Jardinería y Paisajismo",
          plumbing: "Fontanería Básica",
          aircon: "Aire Acondicionado",
          electrical: "Servicios Eléctricos",
        },
        contactTitle: "Contacto",
        location: "Vega Baja, Alicante, España",
        rights: "Todos los derechos reservados.",
      },
      serviceTerms: {
        summaryEyebrow: "Tarifa de referencia",
        summaryTitle: "Primera hora + desplazamiento desde 70€",
        summaryBody:
          "Una referencia clara para pequeñas reparaciones, ajustes, montajes o varias tareas sencillas en una misma visita. Para trabajos mayores o especiales, preparamos un presupuesto a medida antes de empezar.",
        fullEyebrow: "Professional service terms",
        fullTitle: "Tarifas claras para pequeñas tareas",
        fullIntro:
          "La visita básica sirve como referencia cuando tiene una o varias pequeñas cosas que hacer en casa. Mantiene el coste bajo control y, si el trabajo necesita más tiempo, materiales o coordinación especial, lo confirmamos antes.",
        priceLabel: "Primera hora + desplazamiento",
        price: "Desde 70€",
        priceDescription:
          "Incluye la visita dentro de nuestra zona de servicio, la valoración, la coordinación y la primera hora para pequeñas tareas cuando sea posible.",
        cta: "Pedir presupuesto",
        items: [
          {
            title: "Presupuesto rápido y claro",
            text: "Muchas solicitudes se pueden valorar con fotos o vídeo por WhatsApp.",
          },
          {
            title: "Aprobación antes de superar lo acordado",
            text: "No añadimos costes extra sin avisar y recibir confirmación.",
          },
          {
            title: "Operario adicional si hace falta",
            text: "+25€/h, siempre recomendado y aprobado previamente.",
          },
          {
            title: "Materiales, retirada y especialistas",
            text: "Se presupuestan aparte cuando corresponda.",
          },
          {
            title: "Colaboraciones recurrentes",
            text: "Condiciones a medida para property managers, varias viviendas o mantenimiento continuo.",
          },
        ],
        footer:
          "Para trabajos más grandes, intervenciones especiales, materiales, retirada de residuos o varias propiedades, le preparamos un presupuesto a medida antes de empezar.",
      },
      home: {
        hero: {
          title: "Tu equipo de mantenimiento del hogar de confianza en la Vega Baja",
          subtitle:
            "Profesionales puntuales y amables para arreglos, instalaciones y mejoras en casa. Trabajo bien hecho, sin complicaciones y con precios claros.",
          ctaQuote: "Presupuesto Instantáneo",
          call: "Llámanos",
          serviceGlance: {
            label: "Servicios principales",
            maintenance: "Mantenimiento",
            assembly: "Montaje",
            appliances: "Electrodomésticos",
            exteriors: "Exteriores",
            painting: "Pintura",
            gardening: "Jardín",
            plumbing: "Fontanería",
            electrical: "Electricidad",
            aircon: "Aire acondicionado",
          },
        },
        promoModal: {
          close: "Cerrar promoción",
          eyebrow: "Promoción de bienvenida",
          headline: "20€ de descuento en tu primer servicio",
          codeLabel: "Código promocional:",
          note: "Válido para nuevos clientes en servicios de mantenimiento del hogar en la Vega Baja.",
          cta: "Pedir presupuesto",
        },
        specialties: {
          title: "Nuestras Especialidades",
          carpentry: "Carpintería",
          plumbing: "Fontanería",
        },
        services: {
          title: "Nuestros Servicios",
          description:
            "En Bricos, somos más que simples manitas; somos una parte vital de su comunidad local. Nuestros servicios van desde el mantenimiento de puertas y ventanas hasta instalaciones de seguridad, todo entregado con una artesanía excepcional.",
          cards: {
            maintenance: {
              title: "Mantenimiento y Reparación del Hogar",
              description: "Soluciones expertas para todo tipo de mantenimiento y reparaciones.",
            },
            assembly: {
              title: "Montaje e Instalación",
              description: "Montaje e instalación sin esfuerzo para su comodidad.",
            },
            appliances: {
              title: "Electrodomésticos: Instalación y Reparación",
              description:
                "Instalación y reparación de electrodomésticos: lavadoras, lavavajillas, hornos, encimeras y más.",
            },
            exteriors: {
              title: "Exteriores",
              description: "Fachadas, terrazas, vallas, lavados a presión, sellados y remates exteriores.",
            },
            painting: {
              title: "Pintura y Reformas menores",
              description:
                "Retoques, parches y pequeños trabajos de acabado para renovar su vivienda sin una reforma grande.",
            },
            gardening: {
              title: "Jardinería y Paisajismo",
              description:
                "Mantenimiento de jardín, paisajismo básico, estructuras ligeras y pequeños ajustes de riego.",
            },
            plumbing: {
              title: "Fontanería Básica",
              description:
                "Sanitarios, grifería, cambios de grifos, cisternas, sifones, sellados y desatascos menores.",
            },
            aircon: {
              title: "Aire Acondicionado: Reparación de Aires",
              description:
                "Reparación y mantenimiento de aires acondicionados domésticos para un hogar cómodo todo el año.",
            },
            electrical: {
              title: "Servicios Eléctricos Menores",
              description: "Soluciones eléctricas menores eficientes y seguras para su hogar.",
            },
          },
        },
        whyPanel: {
          heading: "En Bricos, Lo Entendemos",
          headingBeforeBrand: "En",
          headingAfterBrand: ", Lo Entendemos",
          intro:
            "No todos tienen tiempo o habilidades para el bricolaje. En lugar de preocuparse, llámenos. Llegamos puntuales, equipados con herramientas y habilidades profesionales, listos para rescatar sus proyectos y mantener su hogar en forma impecable.",
          whyChooseLabel: "¿Por qué elegir",
          callPrompt: "Llame para una reparación rápida",
          bullets: {
            experience: "Experiencia Comprobada",
            yearRound: "Servicio Todo el Año",
            coverage: "Cobertura Adaptada",
            trustedTeam: "Equipo de Confianza",
            value: "Valor Excepcional",
            commitment: "Compromiso con el Cliente",
          },
          moreAboutUs: "Más Sobre Nosotros",
        },
        stats: {
          line: "ofrece un servicio experto, asequible y amigable.",
          happyClients: "clientes felices",
          rating: "valoración media",
          writeToUs: "Escríbenos",
        },
        whyCards: {
          title: "¿Por Qué Elegirnos?",
          intro:
            "Bienvenido a Bricos, donde tus ideas de mejora del hogar se hacen realidad. Como negocio local y confiable, profundamente arraigado en la comunidad, nos enorgullece ofrecer una amplia gama de servicios expertos con un toque personal.",
          craftTitle: "Buen oficio y atención al detalle",
          craftText:
            "En Bricos hacemos las cosas bien. Contamos con oficio, herramientas y cuidado para que el resultado sea el que toca: limpio, seguro y duradero.",
          rangeTitle: "Amplia Gama de Servicios",
          rangeText:
            "Nuestros principales: mantenimiento y reparación, montaje e instalación, exteriores, pintura, jardinería y paisajismo, fontanería básica, electrodomésticos, aire acondicionado y eléctricos menores.",
          familyTitle: "Negocio Familiar",
          familyText:
            "Como empresa familiar, aportamos un nivel de cuidado y dedicación profundamente personal. Entendemos el valor del hogar y la importancia de la confianza.",
        },
        reviews: {
          title: "Reseñas de Cinco Estrellas",
        },
        cta: {
          title: "¿Listo para Mejorar Su Hogar?",
          subtitle: "Llame para una reparación rápida",
          bookOnline: "Reservar en Línea",
        },
      },
      servicesPage: {
        heroTitle: "Nuestros Servicios",
        heroSubtitle:
          "Ofrecemos una amplia gama de servicios profesionales para el mantenimiento y mejora de su hogar en la Vega Baja de Alicante.",
        intro:
          "En Bricos, somos más que simples profesionales del mantenimiento; somos una parte vital de su comunidad local. Nuestros servicios van desde el mantenimiento de puertas y ventanas hasta instalaciones de seguridad, todo entregado con una artesanía excepcional. Nos enorgullecemos no solo de reparar hogares, sino de mejorarlos, asegurando que cada trabajo, ya sea montaje de muebles o mantenimiento de jardines, se realice con un toque personal.",
        whyTitle: "¿Por Qué Elegir Bricos?",
        blocks: {
          certifiedTitle: "Profesionales Certificados",
          certifiedText:
            "Todos nuestros técnicos están certificados y cuentan con amplia experiencia en sus respectivas áreas.",
          quoteTitle: "Presupuesto Sin Compromiso",
          quoteText:
            "Le ofrecemos un presupuesto detallado y transparente antes de comenzar cualquier trabajo.",
          qualityTitle: "Garantía de Calidad",
          qualityText:
            "Garantizamos la calidad de todos nuestros trabajos y materiales utilizados.",
          personalTitle: "Atención Personalizada",
          personalText:
            "Cada cliente es único y adaptamos nuestros servicios a sus necesidades específicas.",
        },
      },
      exteriorsPage: {
        heroTitle: "Exteriores",
        heroSubtitle:
          "Mantenimiento exterior para que su vivienda luzca cuidada: lavado a presión, sellados, fachadas, terrazas, vallas y protecciones.",
        whatIncludedTitle: "Qué incluye este servicio",
        whatIncludedBody:
          "Nos ocupamos del mantenimiento exterior con tareas orientadas a proteger e incrementar la durabilidad de su vivienda. Trabajamos con especial cuidado en superficies expuestas al clima, juntas, vallas, terrazas y elementos que requieren fijación segura.",
        recommendedTitle: "Recomendado",
        recommendedItems: [
          "Revisión estacional de sellados y puntos de agua.",
          "Mantenimiento periódico de pintura y protección en madera/metal.",
          "Limpieza regular para evitar acumulación de suciedad.",
        ],
        benefitsTitle: "Beneficios",
        benefitsItems: [
          "Mejora del aspecto y el valor de la propiedad.",
          "Prevención de humedades y deterioro.",
          "Mayor seguridad y durabilidad en elementos exteriores.",
        ],
        ctaBand: {
          eyebrow: "LA CALIDAD QUE ESPERAS",
          heading: "LOS SERVICIOS QUE TE MERECES",
          body:
            "Empiece hoy el mantenimiento exterior con Bricos. Contáctenos para un presupuesto sin compromiso.",
          bookNow: "Reservar Ahora",
          callLabel: "+34 623 635 732",
        },
        satisfactionBand: {
          heading: "Nos esforzamos por mantener el 100% de satisfacción",
          body:
            "Si tiene cualquier consulta, póngase en contacto. Le ayudaremos con rapidez y cuidado.",
        },
      },
      paintingPage: {
        heroTitle: "Pintura y Reformas menores",
        heroSubtitle:
          "Retoques, parches y pequeños trabajos de acabado para renovar su vivienda sin meterse en una reforma grande.",
        whatIncludedTitle: "Qué incluye este servicio",
        whatIncludedBody:
          "Nos ocupamos de trabajos puntuales de pintura, reparación y acabado: paredes marcadas, pequeñas grietas, golpes, humedades ya resueltas, puertas, rodapiés y remates después de instalaciones o arreglos.",
        exclusionsTitle: "Importante",
        exclusionsItems: [
          "No realizamos reformas integrales ni obra mayor.",
          "No asumimos trabajos complejos en altura o sin acceso seguro.",
          "No tratamos humedades activas sin solucionar primero el origen del problema.",
        ],
        recommendedTitle: "Recomendado",
        recommendedItems: [
          "Agrupar varios retoques en una misma visita para ahorrar tiempo.",
          "Guardar la referencia del color si ya existe una pintura previa.",
          "Revisar golpes, grietas y sellados antes de pintar.",
        ],
        ctaBand: {
          eyebrow: "LA CALIDAD QUE ESPERAS",
          heading: "LOS SERVICIOS QUE TE MERECES",
          body:
            "Dé un nuevo acabado a su vivienda con retoques, parches y pintura puntual hechos con cuidado.",
          bookNow: "Reservar Ahora",
          callLabel: "+34 623 635 732",
        },
        satisfactionBand: {
          heading: "Acabados limpios, sin complicaciones",
          body:
            "Cuidamos la preparación, el remate y la limpieza para que el resultado se note por lo bien integrado que queda.",
        },
      },
      gardeningPage: {
        heroTitle: "Jardinería y Paisajismo",
        heroSubtitle:
          "Mantenimiento de jardín, paisajismo básico y estructuras ligeras para que su terraza, patio o parcela se vea cuidada, funcional y agradable.",
        whatIncludedTitle: "Qué incluye este servicio",
        whatIncludedBody:
          "Realizamos tareas de jardinería y mejora exterior: poda ligera, limpieza de hojas y restos, preparación de zonas verdes, paisajismo básico, revisión de riego sencillo y pequeñas estructuras como jardineras, celosías, borduras o soportes.",
        exclusionsTitle: "Importante",
        exclusionsItems: [
          "No realizamos tala de árboles grandes.",
          "No asumimos grandes obras de paisajismo integral o movimientos importantes de terreno.",
          "No instalamos sistemas de riego complejos desde cero.",
        ],
        recommendedTitle: "Recomendado",
        recommendedItems: [
          "Hacer mantenimiento antes de temporadas de calor o lluvias.",
          "Mantener despejadas terrazas, desagües y zonas de paso.",
          "Revisar goteros y mangueras al inicio de cada temporada.",
        ],
        ctaBand: {
          eyebrow: "LA CALIDAD QUE ESPERAS",
          heading: "LOS SERVICIOS QUE TE MERECES",
          body:
            "Ponga su jardín o terraza al día con mantenimiento, paisajismo práctico y estructuras exteriores bien rematadas.",
          bookNow: "Reservar Ahora",
          callLabel: "+34 623 635 732",
        },
        satisfactionBand: {
          heading: "Exteriores listos para disfrutar",
          body:
            "Nos encargamos de las tareas y mejoras que marcan la diferencia para que su zona exterior se vea cuidada, ordenada y con intención.",
        },
      },
      plumbingPage: {
        heroTitle: "Fontanería Básica",
        heroSubtitle:
          "Arreglos de sanitarios, cambio de grifos, instalación de grifería, cisternas, sifones, sellados y desatascos menores sin meterse en obra.",
        whatIncludedTitle: "Qué incluye este servicio",
        whatIncludedBody:
          "Realizamos trabajos de fontanería ligera para solucionar problemas habituales del hogar: sanitarios que pierden agua, grifos deteriorados, flexos y sifones en mal estado, sellados de baño/cocina y atascos localizados. Nos centramos en reparaciones visibles, sustituciones y mantenimiento práctico, siempre con acabado limpio y presupuesto claro.",
        exclusionsTitle: "Lo que no hacemos",
        exclusionsItems: [
          "No hacemos obra, rozas, reformas de baño ni albañilería.",
          "No modificamos tuberías empotradas, bajantes, montantes ni instalaciones comunitarias.",
          "No realizamos trabajos de gas, calderas o instalaciones que requieran técnico certificado específico.",
        ],
        recommendedTitle: "Recomendado",
        recommendedItems: [
          "Enviar fotos por WhatsApp del sanitario, grifo, fuga o atasco para valorar el trabajo antes de ir.",
          "Agrupar varios arreglos de baño/cocina en una misma visita.",
          "Cambiar flexos, juntas y sifones antiguos antes de que provoquen fugas mayores.",
        ],
        ctaBand: {
          eyebrow: "ARREGLOS DE FONTANERÍA SIN OBRA",
          heading: "SANITARIOS, GRIFOS Y DESATASCOS",
          body:
            "Cuéntenos qué necesita o envíenos fotos por WhatsApp. Le ayudamos con trabajos de fontanería básica en la Vega Baja.",
          bookNow: "Reservar Ahora",
          callLabel: "+34 623 635 732",
        },
      },
      appliancesPage: {
        heroTitle: "Electrodomésticos: Instalación y Reparación",
        heroSubtitle:
          "Instalación y reparación ligera de electrodomésticos con acabados limpios, nivelado correcto y conexiones seguras.",
        whatIncludedTitle: "Qué incluye este servicio",
        whatIncludedBody:
          "Nos encargamos de instalar y poner a punto sus electrodomésticos, cuidando los detalles: desde el nivelado y la fijación hasta las conexiones de agua y electricidad cuando corresponda. También realizamos ajustes y reparaciones menores para alargar su vida útil.",
        recommendedTitle: "Recomendado",
        recommendedItems: [
          "Revisar mangueras y desagües anualmente.",
          "Mantener nivelado para evitar vibraciones y ruidos.",
        ],
        benefitsTitle: "Beneficios",
        benefitsItems: [
          "Instalación segura y estética.",
          "Mayor durabilidad y rendimiento.",
          "Ahorro de tiempo y problemas futuros.",
        ],
        ctaBand: {
          eyebrow: "LA CALIDAD QUE ESPERAS",
          heading: "LOS SERVICIOS QUE TE MERECES",
          body:
            "Empiece hoy mismo con la instalación o reparación de sus electrodomésticos con Bricos.",
          bookNow: "Reservar Ahora",
          callLabel: "+34 623 635 732",
        },
      },
      airconPage: {
        heroTitle: "Aire Acondicionado: Reparación y Mantenimiento",
        heroSubtitle:
          "Servicio de “manitas” para mantener y reparar su aire acondicionado: limpieza, desagües, electrónica, ventiladores y ajustes mecánicos/eléctricos. Sin manipular el gas ni realizar instalaciones certificadas.",
        whatIncludedTitle: "Qué incluye este servicio",
        whatIncludedBody:
          "Realizamos tareas de mantenimiento ligero y reparaciones menores habituales en equipos domésticos split: limpieza de filtros y unidades, desatasco de desagües, reducción de ruidos y vibraciones, y remates estéticos. Nuestro objetivo es que su equipo funcione mejor y con menos incidencias del día a día.",
        exclusionsTitle: "Importante",
        exclusionsItems: [
          "No realizamos carga de gas ni manipulación del circuito frigorífico.",
          "No intervenimos en gases fluorados ni en instalaciones que requieran certificación F-Gas.",
          "No hacemos instalaciones completas ni traslados de equipos.",
        ],
        recommendedTitle: "Recomendado",
        recommendedItems: [
          "Limpieza de filtros cada 1-3 meses según uso.",
          "Revisión anual de desagüe y anclajes.",
        ],
        ctaBand: {
          eyebrow: "LA CALIDAD QUE ESPERAS",
          heading: "LOS SERVICIOS QUE TE MERECES",
          body: "¿Gotea, huele o hace ruido su aire? Le ayudamos con mantenimiento y reparaciones menores.",
          bookNow: "Reservar Ahora",
          callLabel: "+34 623 635 732",
        },
      },
      electricPage: {
        heroTitle: "Servicios Eléctricos Menores",
        heroSubtitle:
          "Pequeñas instalaciones y sustituciones eléctricas para el hogar: luminarias, enchufes, interruptores y remates, con seguridad y buen acabado.",
        whatIncludedTitle: "Qué incluye este servicio",
        whatIncludedBody:
          "Nos ocupamos de pequeñas actuaciones eléctricas habituales en el hogar que no requieren intervención de un instalador autorizado, priorizando la seguridad y el acabado estético.",
        exclusionsTitle: "Importante",
        exclusionsItems: [
          "No emitimos boletines eléctricos ni modificamos cuadros generales.",
          "No realizamos ampliaciones de potencia ni nuevas líneas completas.",
          "No intervenimos en trabajos que requieran instalador autorizado.",
        ],
        recommendedTitle: "Recomendado",
        recommendedItems: [
          "Uso de tomas con protección en cocinas y baños cuando proceda.",
          "Sustituir mecanismos deteriorados para evitar falsos contactos.",
        ],
        ctaBand: {
          eyebrow: "LA CALIDAD QUE ESPERAS",
          heading: "LOS SERVICIOS QUE TE MERECES",
          body: "Haga su instalación más segura y funcional con nuestras actuaciones eléctricas menores.",
          bookNow: "Reservar Ahora",
          callLabel: "+34 623 635 732",
        },
      },
      aboutPage: {
        heroTitle: "Sobre Nosotros",
        heroSubtitlePrefix: "Conozca al equipo de",
        missionTitle: "Nuestra Misión",
        missionBody1:
          "En Bricos, estamos en una misión para redefinir la percepción de la comunidad sobre la industria del mantenimiento del hogar, mostrando el verdadero valor que brindamos a través de servicios confiables y de calidad en la Vega Baja de Alicante.",
        missionBody2:
          "Creemos que cada hogar merece atención profesional y personalizada. Por eso, nos dedicamos a ofrecer servicios de la más alta calidad, con profesionales capacitados que tratan su hogar como si fuera el suyo propio.",
        valuesTitle: "Nuestros Valores",
        values: {
          reliabilityTitle: "Confiabilidad",
          reliabilityText:
            "Cumplimos con nuestros compromisos y llegamos a tiempo. Su confianza es nuestra prioridad.",
          qualityTitle: "Calidad",
          qualityText:
            "No comprometemos la calidad. Cada trabajo se realiza con los más altos estándares profesionales.",
          transparencyTitle: "Transparencia",
          transparencyText:
            "Comunicación clara y presupuestos honestos. Sin sorpresas ni costos ocultos.",
          customerCareTitle: "Atención al Cliente",
          customerCareText:
            "Estamos aquí para servirle. Su satisfacción es nuestra mayor recompensa.",
        },
        teamTitle: "Nuestro Equipo",
        teamBody1:
          "Contamos con un equipo de profesionales altamente capacitados y experimentados en diversas áreas del mantenimiento del hogar. Cada miembro de nuestro equipo está comprometido con la excelencia y la satisfacción del cliente.",
        teamBody2:
          "Todos nuestros técnicos están certificados, asegurados y pasan por verificaciones de antecedentes. Puede estar seguro de que su hogar está en buenas manos.",
      },
      assemblyPage: {
        heroTitle: "Montaje e Instalación",
        heroSubtitle:
          "Transforme su hogar sin complicaciones: montaje de muebles, instalación de electrodomésticos y elementos del hogar con un acabado profesional y seguro.",
        whatIncludedTitle: "Qué incluye este servicio",
        whatIncludedBody:
          "Nos encargamos del montaje e instalación de los elementos más comunes del hogar, cuidando la estabilidad, el nivelado y la correcta fijación de cada pieza. Convertimos instrucciones complejas en resultados impecables, ahorrándole tiempo y esfuerzo.",
        recommendedTitle: "Recomendado",
        recommendedItems: [
          "Reapriete periódico de tornillería en muebles montados.",
          "Revisión de anclajes, soportes y fijaciones en paredes.",
        ],
        benefitsTitle: "Beneficios",
        benefitsItems: [
          "Ahorro de tiempo y esfuerzo.",
          "Montaje seguro y profesional.",
          "Mejora de la funcionalidad y estética del hogar.",
        ],
        ctaBand: {
          eyebrow: "LA CALIDAD QUE ESPERAS",
          heading: "LOS SERVICIOS QUE TE MERECES",
          body:
            "Empiece hoy su proyecto de montaje con Bricos. Contáctenos para transformar su espacio con seguridad y un acabado impecable.",
          bookNow: "Reservar Ahora",
          callLabel: "+34 623 635 732",
        },
        satisfactionBand: {
          heading: "Nos esforzamos por mantener el 100% de satisfacción",
          body:
            "Si tiene cualquier consulta, póngase en contacto. Le ayudaremos con rapidez y cuidado para que todo quede como debe.",
        },
      },
      maintenancePage: {
        heroTitle: "Mantenimiento y Reparación del Hogar",
        heroSubtitle:
          "Soluciones profesionales para mantener su vivienda en perfecto estado: arreglos rápidos, mantenimiento preventivo y mejora estética.",
        whatIncludedTitle: "Qué incluye este servicio",
        whatIncludedBody:
          "Atendemos una amplia variedad de tareas de mantenimiento y reparación doméstica, desde pequeños arreglos y sellados hasta retoques de pintura y reparación de pladur. Nuestro objetivo es prolongar la vida útil de su hogar, mejorar la seguridad, la estética y evitar que incidencias pequeñas se conviertan en problemas mayores.",
        recommendedTitle: "Recomendado",
        recommendedItems: [
          "Inspecciones periódicas y reparaciones a tiempo.",
          "Sellados de juntas y rejuntados para evitar humedades.",
          "Cambio de filtros de climatización y agua.",
        ],
        benefitsTitle: "Beneficios",
        benefitsItems: [
          "Aumenta la vida útil de su vivienda.",
          "Mejora la seguridad y el confort.",
          "Evita averías mayores y gastos imprevistos.",
        ],
        ctaBand: {
          eyebrow: "LA CALIDAD QUE ESPERAS",
          heading: "LOS SERVICIOS QUE TE MERECES",
          body:
            "Empiece hoy su mejora del hogar con Bricos. Contáctenos para transformar su espacio. Use nuestro formulario o llámenos para obtener un presupuesto de su proyecto.",
          bookNow: "Reservar Ahora",
          callLabel: "+34 623 635 732",
        },
        satisfactionBand: {
          heading: "Nos esforzamos por mantener el 100% de satisfacción",
          body:
            "Nuestro compromiso con la satisfacción del cliente es total. Si tiene cualquier consulta, no dude en ponerse en contacto. Un miembro de nuestro equipo le atenderá con rapidez y con el máximo cuidado.",
        },
      },
    },
  },
  en: {
    translation: {
      header: {
        bar: "Open Mon–Sat 8am to 6pm",
      },
      nav: {
        home: "Home",
        services: "Services",
        about: "About Us",
        area: "Service Area",
        contact: "Contact",
        quote: "Instant quote",
        quoteInstant: "Instant",
        quoteInstantFull: "Instant Quote",
      },
      footer: {
        description:
          "A trusted home maintenance and repair service for the Vega Baja area of Alicante.",
        quickLinks: "Quick links",
        servicesTitle: "Services",
        servicesList: {
          homeMaintenance: "Home maintenance",
          assembly: "Assembly & installation",
          appliances: "Appliances",
          exteriors: "Outdoor & exterior work",
          painting: "Painting & small improvements",
          gardening: "Gardening & landscaping",
          plumbing: "Basic plumbing",
          aircon: "Air conditioning",
          electrical: "Small electrical jobs",
        },
        contactTitle: "Get in touch",
        location: "Vega Baja, Alicante, Spain",
        rights: "All rights reserved.",
      },
      serviceTerms: {
        summaryEyebrow: "Reference rate",
        summaryTitle: "First hour + travel from €70",
        summaryBody:
          "A clear reference for small repairs, adjustments, assembly jobs or several simple tasks in one visit. For larger or specialist work, we prepare a tailored quote before we start.",
        fullEyebrow: "Professional service terms",
        fullTitle: "Clear rates for small jobs",
        fullIntro:
          "The basic visit is a useful reference when you have one or several small jobs to take care of at home. It keeps costs under control and, if the work needs more time, materials or specialist coordination, we confirm that first.",
        priceLabel: "First hour + travel",
        price: "From €70",
        priceDescription:
          "Includes the visit within our service area, assessment, coordination and the first hour for small tasks where possible.",
        cta: "Request a quote",
        items: [
          {
            title: "Fast, clear quotations",
            text: "Many jobs can be assessed from photos or video via WhatsApp.",
          },
          {
            title: "Approval before exceeding the agreed amount",
            text: "Extra costs are not added without notice and confirmation.",
          },
          {
            title: "Additional operative where required",
            text: "+€25/h, always advised and approved in advance.",
          },
          {
            title: "Materials, disposal and specialist work",
            text: "Quoted separately where applicable.",
          },
          {
            title: "Recurring partnerships",
            text: "Tailored terms for property managers, multiple homes or ongoing maintenance.",
          },
        ],
        footer:
          "For larger jobs, specialist work, materials, waste disposal or multiple properties, we prepare a tailored quote before work begins.",
      },
      home: {
        hero: {
          title: "Your trusted home maintenance team in the Vega Baja",
          subtitle:
            "Punctual, friendly tradespeople for repairs, installations and home improvements. Quality work, no hassle, and clear, upfront pricing.",
          ctaQuote: "Get an instant quote",
          call: "Call us",
          serviceGlance: {
            label: "Main services",
            maintenance: "Maintenance",
            assembly: "Assembly",
            appliances: "Appliances",
            exteriors: "Exteriors",
            painting: "Painting",
            gardening: "Garden",
            plumbing: "Plumbing",
            electrical: "Electrical",
            aircon: "Air conditioning",
          },
        },
        promoModal: {
          close: "Close promotion",
          eyebrow: "Welcome offer",
          headline: "€20 off your first service",
          codeLabel: "Promo code:",
          note: "Valid for new customers on home maintenance services in the Vega Baja.",
          cta: "Get a quote",
        },
        specialties: {
          title: "Our specialities",
          carpentry: "Carpentry",
          plumbing: "Plumbing",
        },
        services: {
          title: "Our services",
          description:
            "At Bricos, we’re more than just handymen; we’re part of your local community. From fixing doors and windows to fitting security equipment, we deliver careful, reliable workmanship in every job.",
          cards: {
            maintenance: {
              title: "Home maintenance & repairs",
              description: "Expert solutions for all kinds of home maintenance and repair jobs.",
            },
            assembly: {
              title: "Assembly & installation",
              description: "Stress-free assembly and installation to make your home work better for you.",
            },
            appliances: {
              title: "Appliances: install & repair",
              description:
                "Installation and repair of appliances including washing machines, dishwashers, ovens, hobs and more.",
            },
            exteriors: {
              title: "Outdoor & exterior work",
              description: "Facades, terraces, fencing, pressure washing, sealing and exterior finishing.",
            },
            painting: {
              title: "Painting & small improvements",
              description:
                "Touch-ups, patches and small finishing jobs to refresh your home without a full renovation.",
            },
            gardening: {
              title: "Gardening & landscaping",
              description:
                "Garden maintenance, basic landscaping, light outdoor structures and simple irrigation adjustments.",
            },
            plumbing: {
              title: "Basic plumbing",
              description:
                "Toilet repairs, sanitary ware, tap replacement, cisterns, traps, sealing and minor unblocking.",
            },
            aircon: {
              title: "Air conditioning repairs",
              description:
                "Repairs and servicing for domestic air conditioning to keep your home comfortable all year round.",
            },
            electrical: {
              title: "Small electrical jobs",
              description: "Safe, efficient electrical help for smaller jobs around the home.",
            },
          },
        },
        whyPanel: {
          heading: "At Bricos, we get it",
          headingBeforeBrand: "At",
          headingAfterBrand: ", we get it",
          intro:
            "Not everyone has the time, tools or confidence for DIY. Instead of worrying about that list of jobs, just call us. We turn up on time, properly equipped and ready to get your home back in great shape.",
          whyChooseLabel: "Why choose",
          callPrompt: "Call for quick repairs",
          bullets: {
            experience: "Proven experience",
            yearRound: "All-year-round service",
            coverage: "Flexible cover",
            trustedTeam: "Trusted, friendly team",
            value: "Excellent value",
            commitment: "Customer-first attitude",
          },
          moreAboutUs: "More about us",
        },
        stats: {
          line: "offers expert, affordable and friendly service.",
          happyClients: "happy clients",
          rating: "average rating",
          writeToUs: "Message us",
        },
        whyCards: {
          title: "Why choose us?",
          intro:
            "Welcome to Bricos, where your home improvement ideas actually get finished. As a trusted local family business, we’re proud to offer a wide range of expert services with a personal touch.",
          craftTitle: "Good workmanship & attention to detail",
          craftText:
            "At Bricos, we believe in doing things properly. The right tools, the right skills and the care to leave your home safe, tidy and looking how it should.",
          rangeTitle: "Wide range of services",
          rangeText:
            "Our core services include home maintenance and repair, assembly and installation, exterior work, painting, gardening and landscaping, basic plumbing, appliances, air conditioning repairs and small electrical jobs.",
          familyTitle: "Family-run business",
          familyText:
            "As a family business, we bring a personal level of care and responsibility. We understand how important your home is and we work hard to earn your trust.",
        },
        reviews: {
          title: "Five-star reviews",
        },
        cta: {
          title: "Ready to improve your home?",
          subtitle: "Call now for quick repairs",
          bookOnline: "Book online",
        },
      },
      servicesPage: {
        heroTitle: "Our services",
        heroSubtitle:
          "We offer a wide range of professional home maintenance services across the Vega Baja area.",
        intro:
          "At Bricos, we’re more than just repair people – we’re part of your local community. Our work ranges from looking after doors and windows to fitting security equipment, all delivered with genuine craftsmanship. We’re proud not just to fix homes but to improve them, making sure every job – from furniture assembly to garden care – is finished with a personal touch.",
        whyTitle: "Why choose Bricos?",
        blocks: {
          certifiedTitle: "Qualified professionals",
          certifiedText:
            "All of our technicians are properly trained, certified and experienced in their trade.",
          quoteTitle: "Clear, no‑obligation quotes",
          quoteText:
            "We provide detailed, transparent quotes before any work starts, so you know exactly what to expect.",
          qualityTitle: "Quality you can rely on",
          qualityText:
            "We stand by the quality of our workmanship and the materials we use on every job.",
          personalTitle: "Personal, friendly service",
          personalText:
            "Every home is different, so we tailor our work to your needs and keep communication clear throughout.",
        },
      },
      exteriorsPage: {
        heroTitle: "Outdoor & exterior work",
        heroSubtitle:
          "Exterior maintenance to keep your home looking cared for: pressure washing, sealing, facades, terraces, fencing and protective finishes.",
        whatIncludedTitle: "What this service covers",
        whatIncludedBody:
          "We look after exterior maintenance jobs that help protect and extend the life of your property. We pay special attention to weather-exposed surfaces, joints, fencing, terraces and anything that needs secure, long-lasting fixings.",
        recommendedTitle: "Recommended",
        recommendedItems: [
          "Seasonal checks on sealants and points where water can get in.",
          "Regular paint and protective treatments for wood and metal.",
          "Frequent cleaning to avoid a build‑up of dirt, moss and algae.",
        ],
        benefitsTitle: "Benefits",
        benefitsItems: [
          "Improves kerb appeal and property value.",
          "Helps prevent damp issues and structural damage.",
          "Keeps exterior areas safer and more durable.",
        ],
        ctaBand: {
          eyebrow: "QUALITY YOU CAN EXPECT",
          heading: "THE SERVICE YOUR HOME DESERVES",
          body:
            "Start taking care of the outside of your home with Bricos today. Ask us for a clear, no‑obligation quote.",
          bookNow: "Book now",
          callLabel: "+34 623 635 732",
        },
        satisfactionBand: {
          heading: "We work hard to keep every client happy",
          body:
            "If you have any questions at all, just get in touch and we’ll respond quickly and helpfully.",
        },
      },
      paintingPage: {
        heroTitle: "Painting & small improvements",
        heroSubtitle:
          "Touch-ups, patches and small finishing jobs to refresh your home without getting into a full renovation.",
        whatIncludedTitle: "What this service covers",
        whatIncludedBody:
          "We take care of small painting, repair and finishing jobs: marked walls, small cracks, dents, already-resolved damp marks, doors, skirting boards and finishing touches after installations or repairs.",
        exclusionsTitle: "Important",
        exclusionsItems: [
          "We do not carry out full renovations or major building work.",
          "We do not take on complex work at height without safe access.",
          "We do not paint over active damp before the source has been fixed.",
        ],
        recommendedTitle: "Recommended",
        recommendedItems: [
          "Grouping several touch-ups in one visit to save time.",
          "Keeping the paint colour reference if an existing colour is being matched.",
          "Checking knocks, cracks and sealant lines before painting.",
        ],
        ctaBand: {
          eyebrow: "QUALITY YOU CAN EXPECT",
          heading: "THE SERVICE YOUR HOME DESERVES",
          body:
            "Give your home a cleaner finish with careful touch-ups, patches and small paint jobs.",
          bookNow: "Book now",
          callLabel: "+34 623 635 732",
        },
        satisfactionBand: {
          heading: "Clean finishes, no fuss",
          body:
            "We look after the preparation, finishing and clean-up so the result blends in properly.",
        },
      },
      gardeningPage: {
        heroTitle: "Gardening & landscaping",
        heroSubtitle:
          "Garden maintenance, basic landscaping and light outdoor structures to keep your terrace, patio or plot tidy, practical and pleasant.",
        whatIncludedTitle: "What this service covers",
        whatIncludedBody:
          "We carry out gardening and outdoor improvement tasks: light pruning, clearing leaves and green waste, preparing planted areas, basic landscaping, simple irrigation checks and small structures such as planters, trellises, borders or supports.",
        exclusionsTitle: "Important",
        exclusionsItems: [
          "We do not fell large trees.",
          "We do not take on major landscaping works or significant groundworks.",
          "We do not install complex irrigation systems from scratch.",
        ],
        recommendedTitle: "Recommended",
        recommendedItems: [
          "Scheduling maintenance before hot or rainy seasons.",
          "Keeping terraces, drains and walkways clear.",
          "Checking drippers and hoses at the start of each season.",
        ],
        ctaBand: {
          eyebrow: "QUALITY YOU CAN EXPECT",
          heading: "THE SERVICE YOUR HOME DESERVES",
          body:
            "Bring your garden or terrace back into shape with maintenance, practical landscaping and well-finished outdoor structures.",
          bookNow: "Book now",
          callLabel: "+34 623 635 732",
        },
        satisfactionBand: {
          heading: "Outdoor areas ready to enjoy",
          body:
            "We handle the jobs and improvements that make your outside space feel cared for, ordered and intentional.",
        },
      },
      plumbingPage: {
        heroTitle: "Basic plumbing",
        heroSubtitle:
          "Toilet repairs, sanitary ware replacement, tap installation, tap replacement, cisterns, traps, sealing and minor unblocking without building work.",
        whatIncludedTitle: "What this service covers",
        whatIncludedBody:
          "We handle light plumbing jobs around the home: leaking toilets, worn taps, damaged flexi-hoses and traps, bathroom/kitchen sealing and local blockages. The focus is visible repairs, replacements and practical maintenance, with tidy workmanship and clear quotes.",
        exclusionsTitle: "What we do not do",
        exclusionsItems: [
          "We do not carry out building work, chasing walls, bathroom renovations or masonry.",
          "We do not alter hidden pipework, soil stacks, rising mains or communal plumbing systems.",
          "We do not work on gas, boilers or installations that require a specific certified technician.",
        ],
        recommendedTitle: "Recommended",
        recommendedItems: [
          "Send photos by WhatsApp of the toilet, tap, leak or blockage so we can assess the job before visiting.",
          "Group several bathroom or kitchen fixes into one visit.",
          "Replace old flexi-hoses, seals and traps before they cause larger leaks.",
        ],
        ctaBand: {
          eyebrow: "PLUMBING FIXES WITHOUT BUILDING WORK",
          heading: "TOILETS, TAPS AND UNBLOCKING",
          body:
            "Tell us what you need or send photos by WhatsApp. We help with basic plumbing jobs across the Vega Baja.",
          bookNow: "Book now",
          callLabel: "+34 623 635 732",
        },
      },
      appliancesPage: {
        heroTitle: "Appliances: install & light repair",
        heroSubtitle:
          "Appliance installation and light repair with neat finishes, correct levelling and safe connections.",
        whatIncludedTitle: "What this service covers",
        whatIncludedBody:
          "We install and set up your appliances, taking care of the details: from levelling and fixing in place through to water and power connections where appropriate. We also carry out small adjustments and light repairs to help extend their working life.",
        recommendedTitle: "Recommended",
        recommendedItems: [
          "Checking hoses and waste pipes at least once a year.",
          "Keeping appliances level to reduce noise and vibration.",
        ],
        benefitsTitle: "Benefits",
        benefitsItems: [
          "Safe, tidy installation that looks right in your kitchen.",
          "Helps appliances last longer and work better.",
          "Saves you time, effort and future headaches.",
        ],
        ctaBand: {
          eyebrow: "QUALITY YOU CAN EXPECT",
          heading: "THE SERVICE YOUR HOME DESERVES",
          body:
            "Start your appliance installation or light repair with Bricos today.",
          bookNow: "Book now",
          callLabel: "+34 623 635 732",
        },
      },
      airconPage: {
        heroTitle: "Air conditioning: repair & servicing",
        heroSubtitle:
          "Handyman‑style support to keep your air‑con running: cleaning, drains, electrics, fans and mechanical adjustments – without touching the gas circuit or doing certified installations.",
        whatIncludedTitle: "What this service covers",
        whatIncludedBody:
          "We carry out light maintenance and common small repairs on domestic split units: cleaning filters and indoor/outdoor units, clearing blocked drains, reducing noise and vibration and tidying up visible finishes. The aim is to help your system run better with fewer everyday issues.",
        exclusionsTitle: "Important",
        exclusionsItems: [
          "We do not carry out gas charging or work on the sealed refrigeration circuit.",
          "We do not work with fluorinated gases or systems that require F‑Gas certification.",
          "We do not install complete new systems or relocate existing units.",
        ],
        recommendedTitle: "Recommended",
        recommendedItems: [
          "Cleaning filters every 1–3 months depending on use.",
          "An annual check of the condensate drain and fixings.",
        ],
        ctaBand: {
          eyebrow: "QUALITY YOU CAN EXPECT",
          heading: "THE SERVICE YOUR HOME DESERVES",
          body: "Leaking, smelly or noisy air‑con? We can help with cleaning and light repairs.",
          bookNow: "Book now",
          callLabel: "+34 623 635 732",
        },
      },
      electricPage: {
        heroTitle: "Small electrical jobs",
        heroSubtitle:
          "Smaller electrical installs and replacements around the home – lights, sockets, switches and tidy finishing – carried out safely and neatly.",
        whatIncludedTitle: "What this service covers",
        whatIncludedBody:
          "We take care of common small electrical tasks that don’t require a fully certified electrician, always prioritising safety and a clean finish.",
        exclusionsTitle: "Important",
        exclusionsItems: [
          "We do not issue electrical certificates or alter main consumer units.",
          "We do not increase supply capacity or install full new circuits.",
          "We do not take on work that legally requires a certified electrician.",
        ],
        recommendedTitle: "Recommended",
        recommendedItems: [
          "Using protected sockets (RCD/GFCI‑type) in kitchens and bathrooms where appropriate.",
          "Replacing worn or damaged switches and sockets to avoid bad connections.",
        ],
        ctaBand: {
          eyebrow: "QUALITY YOU CAN EXPECT",
          heading: "THE SERVICE YOUR HOME DESERVES",
          body: "Make your installation safer and more practical with our small electrical jobs service.",
          bookNow: "Book now",
          callLabel: "+34 623 635 732",
        },
      },
      aboutPage: {
        heroTitle: "About us",
        heroSubtitlePrefix: "Meet the team at",
        missionTitle: "Our mission",
        missionBody1:
          "At Bricos, our mission is to change how people think about home maintenance – showing the real value we bring through reliable, high‑quality services across the Vega Baja.",
        missionBody2:
          "We believe every home deserves professional, personal attention. That’s why we focus on quality workmanship, clear communication and treating your home with the same care as our own.",
        valuesTitle: "Our values",
        values: {
          reliabilityTitle: "Reliability",
          reliabilityText:
            "We do what we say we’ll do and we turn up on time. Your trust really matters to us.",
          qualityTitle: "Quality",
          qualityText:
            "We don’t cut corners. Every job is carried out to a professional standard.",
          transparencyTitle: "Transparency",
          transparencyText:
            "Clear communication and honest quotes – no surprises, no hidden extras.",
          customerCareTitle: "Customer care",
          customerCareText:
            "We’re here to help. Your satisfaction is what we measure ourselves against.",
        },
        teamTitle: "Our team",
        teamBody1:
          "We’re a skilled, multi‑trade team with experience across many areas of home maintenance. Everyone at Bricos is committed to doing a thorough job and looking after our customers.",
        teamBody2:
          "Our technicians are properly trained, insured and background‑checked, so you can feel comfortable having us in your home.",
      },
      assemblyPage: {
        heroTitle: "Assembly & installation",
        heroSubtitle:
          "Get your home set up without the stress: furniture assembly, appliance installation and home fittings, all properly aligned and safely fixed.",
        whatIncludedTitle: "What this service covers",
        whatIncludedBody:
          "We take care of assembling and installing the most common items in your home, paying attention to stability, level and secure fixings. We turn flat‑pack instructions and tricky fittings into neat, professional results, saving you time and hassle.",
        recommendedTitle: "Recommended",
        recommendedItems: [
          "Tightening screws and fixings on assembled furniture from time to time.",
          "Checking wall brackets, mounts and fixings regularly.",
        ],
        benefitsTitle: "Benefits",
        benefitsItems: [
          "Saves you time, effort and frustration.",
          "Safe, professional assembly that you can trust.",
          "Helps your home look better and work better day‑to‑day.",
        ],
        ctaBand: {
          eyebrow: "QUALITY YOU CAN EXPECT",
          heading: "THE SERVICE YOUR HOME DESERVES",
          body:
            "Start your assembly project with Bricos today. We’ll help you get everything installed safely, neatly and ready to use.",
          bookNow: "Book now",
          callLabel: "+34 623 635 732",
        },
        satisfactionBand: {
          heading: "We work hard to keep every client happy",
          body:
            "If you have any questions at all, just get in touch and we’ll respond quickly and helpfully.",
        },
      },
      maintenancePage: {
        heroTitle: "Home maintenance & repairs",
        heroSubtitle:
          "Professional help to keep your home in great condition: quick fixes, preventative maintenance and tidy finishing work.",
        whatIncludedTitle: "What this service covers",
        whatIncludedBody:
          "We look after a wide range of everyday repair and maintenance jobs, from small fixes and sealing work through to paint touch‑ups and plasterboard repairs. The aim is to extend the life of your home, improve safety and appearance, and stop little issues turning into big, expensive problems.",
        recommendedTitle: "Recommended",
        recommendedItems: [
          "Regular check‑ups and repairs before things get worse.",
          "Sealing joints and tiles to prevent damp.",
          "Cleaning and changing filters on heating and water systems.",
        ],
        benefitsTitle: "Benefits",
        benefitsItems: [
          "Helps your property last longer and stay in better condition.",
          "Improves comfort and safety around the home.",
          "Reduces the risk of major breakdowns and surprise costs.",
        ],
        ctaBand: {
          eyebrow: "QUALITY YOU CAN EXPECT",
          heading: "THE SERVICE YOUR HOME DESERVES",
          body:
            "Start looking after your home with Bricos today. Get in touch and we’ll help you improve your space. Use our online form or give us a call for a clear, fair quote.",
          bookNow: "Book now",
          callLabel: "+34 623 635 732",
        },
        satisfactionBand: {
          heading: "We work hard to keep every client happy",
          body:
            "Customer satisfaction really matters to us. If you have any questions at all, just get in touch and one of our team will respond quickly and helpfully.",
        },
      },
    },
  },
} as const;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "es",
    supportedLngs: ["es", "en"],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },
  });

export default i18n;
