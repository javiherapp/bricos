export type AirconReview = {
  name: string;
  initials: string;
  source: "Google" | "WhatsApp";
  meta: string;
  review: string;
};

// Sustituye estas entradas por el texto literal de las reseñas reales de Google o WhatsApp.
export const airconReviewsEs: AirconReview[] = [
  {
    name: "María García",
    initials: "MG",
    source: "Google",
    meta: "Reseña de cliente",
    review:
      "Excelente servicio. Muy atentos al detalle en las comunicaciones, presupuesto, programación y trabajo realizado. Recomiendo totalmente este equipo profesional.",
  },
  {
    name: "Ana Martínez",
    initials: "AM",
    source: "WhatsApp",
    meta: "Mensaje de clienta",
    review:
      "Es raro encontrar un servicio como Bricos que se destaque en trabajos de calidad. Su trabajo es minucioso, duradero y a un precio razonable. Los recomiendo altamente.",
  },
  {
    name: "Emily Johnson",
    initials: "EJ",
    source: "Google",
    meta: "Customer review",
    review:
      "Outstanding service. Clear communication, fair pricing, punctual scheduling, and excellent workmanship. Highly recommended.",
  },
];

export const airconReviewsEn: AirconReview[] = [
  {
    name: "Emily Johnson",
    initials: "EJ",
    source: "Google",
    meta: "Customer review",
    review:
      "Outstanding service. Clear communication, fair pricing, punctual scheduling, and excellent workmanship. Highly recommended.",
  },
  {
    name: "Graham Whitaker",
    initials: "GW",
    source: "Google",
    meta: "Customer review",
    review:
      "They texted ahead, arrived 10 minutes early, price exactly as quoted, and left everything tidy. Will use again.",
  },
  {
    name: "María García",
    initials: "MG",
    source: "WhatsApp",
    meta: "Client message",
    review:
      "Excelente servicio. Muy atentos al detalle en las comunicaciones, presupuesto, programación y trabajo realizado. Recomiendo totalmente este equipo profesional.",
  },
];
