export const CONTACT = {
  brandName: 'Asesora Contable',
  professionalName: 'Daniela Godoy',
  title: 'Contadora Auditora',
  email: 'dgodoy@it.ucsc.cl',
  phoneDisplay: '+56 9 7661 3516',
  whatsappNumber: '56976613516',
  location: 'Concepción, Región del Biobío',
  coverage: 'Atención presencial en Biobío y 100% remota para todo Chile',
};

export function getWhatsAppUrl(customText?: string): string {
  const text =
    customText ??
    'Hola Daniela, me gustaría agendar un diagnóstico contable para mi negocio.';
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export interface ProfileItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  highlights: string[];
  icon: 'store' | 'briefcase' | 'building';
}

export const PROFILES: ProfileItem[] = [
  {
    id: 'pymes',
    title: 'Pymes y Emprendedores',
    badge: 'Régimen Pro Pyme 14D N°3 / N°8',
    description:
      'Para negocios locales y empresas en crecimiento que necesitan su F29 declarado antes del día 15, conciliación bancaria ordenada y cero multas ante el SII.',
    highlights: ['F29 mensual sin atrasos', 'Conciliación bancaria', 'Asesoría Régimen 14D'],
    icon: 'store',
  },
  {
    id: 'freelancers',
    title: 'Freelancers y Honorarios',
    badge: 'Segunda Categoría',
    description:
      'Acompañamiento para profesionales independientes que emiten boletas de honorarios (retención 15,25%) y buscan optimizar su devolución en la Operación Renta.',
    highlights: ['Control retención 15,25%', 'Gastos presuntos vs efectivos', 'Previsión y Operación Renta'],
    icon: 'briefcase',
  },
  {
    id: 'startups',
    title: 'Sociedades y Startups',
    badge: 'SpA · Ltda. · EIRL',
    description:
      'Gestión contable integral para sociedades con equipo contratado: liquidaciones de sueldo, Previred al día, Declaraciones Juradas (DDJJ) de marzo y balances.',
    highlights: ['Remuneraciones y Previred', 'DDJJ de marzo y F22', 'Estados financieros claros'],
    icon: 'building',
  },
];

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: 'rocket' | 'book' | 'trending' | 'user';
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'constitucion',
    title: 'Constitución y Formalización',
    description:
      'Crea tu empresa en tiempo récord eligiendo desde el día uno el régimen tributario que mejor protege tu flujo.',
    features: ['Empresa en un Día (SpA / Ltda.)', 'Inicio de actividades y e-RUT', 'Acreditación de domicilio SII'],
    icon: 'rocket',
  },
  {
    id: 'contable',
    title: 'Contabilidad Mensual',
    description:
      'Registros contables precisos y reportes fáciles de entender para que sepas exactamente cuánto ganas y qué debes pagar.',
    features: ['Conciliación bancaria mensual', 'Balances y Estado de Resultados', 'Control de flujo de caja'],
    icon: 'book',
  },
  {
    id: 'tributaria',
    title: 'Gestión Tributaria SII',
    description:
      'Cumple puntualmente con cada obligación mensual y anual aprovechando las franquicias vigentes de la ley.',
    features: ['Declaración F29 antes del 15', 'DDJJ de marzo y Operación Renta', 'Término de Giro y rectificatorias'],
    icon: 'trending',
  },
  {
    id: 'laboral',
    title: 'Remuneraciones y Honorarios',
    description:
      'Cálculo exacto de sueldos, imposiciones y boletas para empresas con equipo o profesionales independientes.',
    features: ['Liquidaciones y contratos', 'Planillas Previred al día', 'Asesoría 2ª Categoría'],
    icon: 'user',
  },
];

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Diagnóstico inicial gratuito',
    description:
      'Conversamos 15 minutos por videollamada o WhatsApp para revisar tu régimen en el SII, tus movimientos y detectar posibles alertas.',
  },
  {
    step: '02',
    title: 'Ordenamiento y traspaso',
    description:
      'Si vienes de otro contador o estás empezando, revisamos tus declaraciones anteriores y dejamos tus libros y claves ordenados sin fricción.',
  },
  {
    step: '03',
    title: 'Gestión mensual tranquila',
    description:
      'Declaramos tu F29 y Previred a tiempo cada mes y te enviamos un resumen claro de tus números para que tomes decisiones con seguridad.',
  },
];

export interface TestimonialItem {
  quote: string;
  author: string;
  initials: string;
  serviceTag: string;
  role: string;
  location: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    quote:
      'Pasé de atrasarme con el F29 a tener todo cerrado antes de la quincena. Daniela explica cada impuesto en simple y siempre responde rápido.',
    author: 'Carolina Méndez',
    initials: 'CM',
    serviceTag: 'Plan Pyme Mensual',
    role: 'Fundadora · Estudio de Diseño',
    location: 'Concepción',
  },
  {
    quote:
      'Me ayudó a constituir mi SpA, elegir el régimen Pro Pyme y ordenar las remuneraciones de mis primeros tres trabajadores sin ningún dolor de cabeza.',
    author: 'Matías Valenzuela',
    initials: 'MV',
    serviceTag: 'Constitución SpA',
    role: 'Socio · Servicios de Ingeniería',
    location: 'San Pedro de la Paz',
  },
  {
    quote:
      'Como profesional independiente nunca entendía cuánto me retenían ni qué declarar en abril. Con su asesoría recuperé orden y tranquilidad.',
    author: 'Fernanda Soto',
    initials: 'FS',
    serviceTag: 'Operación Renta',
    role: 'Consultora Independiente',
    location: 'Santiago (Atención remota)',
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    question: '¿Cómo funciona el cambio de contador si ya tengo uno?',
    answer:
      'Es muy sencillo y no detiene tu operación. Realizamos una revisión inicial de tu carpeta tributaria en el SII, verificamos que no existan declaraciones pendientes o multas ocultas, actualizamos los accesos y asumimos tu contabilidad desde el mes siguiente.',
  },
  {
    question: '¿De qué depende el valor mensual del servicio contable?',
    answer:
      'El honorario mensual se ajusta al tamaño real de tu negocio: volumen de facturas de compra y venta, régimen tributario (Pro Pyme 14D N°3, 14D N°8 o 2ª Categoría) y cantidad de trabajadores con liquidación de sueldo. En el diagnóstico te entregamos una propuesta cerrada sin costos sorpresa.',
  },
  {
    question: '¿Cuáles son las fechas clave de la Operación Renta?',
    answer:
      'Las Declaraciones Juradas (DDJJ) se presentan principalmente en marzo y la Operación Renta (F22) en abril. Para llegar sin observaciones del SII, preparamos tu cierre contable y balances antes de finalizar diciembre.',
  },
  {
    question: '¿Qué incluye el servicio contable mensual para Pymes?',
    answer:
      'Incluye la revisión de tu Registro de Compras y Ventas, declaración de Formulario 29 antes del día 15, conciliación bancaria, liquidaciones de sueldo, cálculo de cotizaciones en Previred y un resumen financiero mensual claro.',
  },
  {
    question: '¿Atienden solo en Concepción o también de forma remota?',
    answer:
      'Atendemos presencialmente en Concepción y el Gran Biobío, y trabajamos 100% online con pymes y profesionales de todo Chile mediante videollamadas y respaldo digital.',
  },
];

export interface TaxEvent {
  badge: string;
  title: string;
  description: string;
  tone: 'trust' | 'emerald' | 'navy';
}

export const MONTHLY_TAX_EVENTS: TaxEvent[] = [
  {
    badge: 'Día 12',
    title: 'Declaración F29 (Papel / Caja)',
    description: 'Plazo para declarar y pagar IVA e impuestos mensuales en ventanilla física.',
    tone: 'trust',
  },
  {
    badge: 'Día 13',
    title: 'Pago de Imposiciones (PREVIRED)',
    description: 'Vencimiento electrónico para evitar multas e intereses previsionales.',
    tone: 'emerald',
  },
  {
    badge: 'Día 20',
    title: 'F29 por Internet (Facturador Electrónico)',
    description: 'Plazo extendido en SII.cl para contribuyentes con facturación electrónica.',
    tone: 'navy',
  },
];

export const ANNUAL_TAX_EVENTS: TaxEvent[] = [
  {
    badge: 'Marzo',
    title: 'Declaraciones Juradas (DDJJ)',
    description: 'Envío de información de sueldos, honorarios y retiros previa a Renta.',
    tone: 'trust',
  },
  {
    badge: 'Abril',
    title: 'Operación Renta Anual (F22)',
    description: 'Declaración anual de impuestos para empresas y personas naturales.',
    tone: 'emerald',
  },
  {
    badge: 'Julio / Ene',
    title: 'Patentes Municipales',
    description: 'Pago semestral obligatorio para mantener vigente tu patente comercial.',
    tone: 'navy',
  },
];
