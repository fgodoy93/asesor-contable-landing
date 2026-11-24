import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Briefcase,
  Building2,
  Calculator,
  Calendar,
  CheckCircle2,
  ChevronDown,
  Mail,
  MapPin,
  Phone,
  Quote,
  Receipt,
  Rocket,
  Send,
  Sparkles,
  Store,
  TrendingUp,
  UserCheck,
} from 'lucide-react';
import {
  CONTACT,
  FAQS,
  PROCESS_STEPS,
  PROFILES,
  SERVICES,
  TESTIMONIALS,
  getWhatsAppUrl,
  type ProfileItem,
  type ServiceItem,
} from '../data/siteData';
import { useReveal } from '../hooks/useReveal';

const PROFILE_ICONS: Record<ProfileItem['icon'], typeof Store> = {
  store: Store,
  briefcase: Briefcase,
  building: Building2,
};

const SERVICE_ICONS: Record<ServiceItem['icon'], typeof Rocket> = {
  rocket: Rocket,
  book: BookOpen,
  trending: TrendingUp,
  user: UserCheck,
};

const MARQUEE_ITEMS = [
  'Operación Renta',
  'Formulario 29 antes del 15',
  'Régimen Pro Pyme 14D',
  'Empresa en un Día',
  'Remuneraciones & Previred',
  'Boletas de Honorarios 15,25%',
  'Conciliación Bancaria',
];

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeProfile, setActiveProfile] = useState<string>(PROFILES[0].id);
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const profilesReveal = useReveal();
  const servicesReveal = useReveal();
  const processReveal = useReveal();
  const testimonialsReveal = useReveal();
  const toolsReveal = useReveal();
  const faqReveal = useReveal();
  const contactReveal = useReveal();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!nombre.trim() || !email.trim() || !mensaje.trim()) return;
    setSubmitted(true);
  };

  const whatsappPrefillUrl = getWhatsAppUrl(
    `Hola Daniela, soy ${nombre || 'un cliente'} (${email || 'sin correo'}). Consulta: ${
      mensaje || 'Quisiera agendar un diagnóstico contable.'
    }`
  );

  const mailtoUrl = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
    `Diagnóstico contable — ${nombre}`
  )}&body=${encodeURIComponent(
    `Nombre: ${nombre}\nCorreo: ${email}\n\nMensaje:\n${mensaje}`
  )}`;

  const selectedProfile = PROFILES.find((p) => p.id === activeProfile) ?? PROFILES[0];

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative bg-ivory-100 pt-10 pb-16 sm:pt-16 sm:pb-24 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-plum-200/45 blur-3xl animate-float-slow"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 -right-24 w-[28rem] h-[28rem] rounded-full bg-champagne-200/60 blur-3xl animate-float-slower"
        />

        <div className="max-w-screen-xl mx-auto px-5 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7 text-left animate-fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-plum-200 text-plum-800 text-xs font-bold tracking-wide mb-6 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-plum-500 shrink-0" aria-hidden="true" />
                <span>Contadora Auditora · Concepción y todo Chile</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.6rem] font-bold text-ink-900 leading-[1.08] tracking-tight mb-6">
                Contabilidad clara y{' '}
                <em className="italic font-semibold text-plum-600">sin multas</em>{' '}
                ante el SII.
              </h1>

              <p className="text-base sm:text-lg text-ink-600 leading-relaxed max-w-xl mb-8">
                F29 a tiempo antes del día 15, remuneraciones en Previred y asesoría tributaria personalizada para pymes y profesionales independientes. Más de 5 años transformando números en tranquilidad real.
              </p>

              <div className="flex flex-col sm:flex-row gap-3.5 mb-10">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-plum-800 hover:bg-plum-700 text-white font-bold rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 text-base"
                >
                  <span>Solicitar Diagnóstico</span>
                  <ArrowRight
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                    aria-hidden="true"
                  />
                </a>
                <a
                  href="#servicios"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/90 border border-ivory-300 hover:border-plum-300 hover:bg-white text-ink-900 font-bold rounded-full transition-all duration-200 text-base shadow-sm"
                >
                  Ver Servicios
                </a>
              </div>

              {/* Editorial Metrics */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-ivory-300/90 max-w-lg">
                <div>
                  <p className="font-serif text-2xl sm:text-3xl font-bold text-plum-800 tabular-nums">+5 años</p>
                  <p className="text-xs text-ink-500 font-medium mt-0.5">Experiencia tributaria</p>
                </div>
                <div>
                  <p className="font-serif text-2xl sm:text-3xl font-bold text-plum-800">Día 15</p>
                  <p className="text-xs text-ink-500 font-medium mt-0.5">Cierre mensual F29</p>
                </div>
                <div>
                  <p className="font-serif text-2xl sm:text-3xl font-bold text-plum-800">&lt; 24h</p>
                  <p className="text-xs text-ink-500 font-medium mt-0.5">Respuesta directa</p>
                </div>
              </div>
            </div>

            {/* Portrait with modern arched editorial frame */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end animate-fade-up">
              <div className="relative w-full max-w-sm lg:max-w-md group">
                <div
                  aria-hidden="true"
                  className="absolute -inset-3 rounded-t-[12rem] rounded-b-[2.5rem] bg-gradient-to-tr from-plum-200/70 via-champagne-100 to-plum-100/60 blur-sm group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="relative aspect-[4/5] overflow-hidden rounded-t-[11rem] rounded-b-[2.25rem] shadow-xl border-4 border-white bg-ivory-200">
                  <img
                    src="/img/hero_daniela.jpg"
                    alt="Daniela Godoy, Contadora Auditora en su oficina"
                    decoding="async"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-4 left-4 right-4 sm:left-6 sm:right-auto bg-white/95 backdrop-blur-md px-5 py-3.5 rounded-2xl shadow-lg border border-ivory-200 flex items-center gap-3.5">
                  <span className="relative flex h-3 w-3 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-ink-900">{CONTACT.professionalName}</p>
                    <p className="text-xs text-ink-500">Agenda abierta · Presencial y remoto</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE STRIP */}
      <div className="bg-plum-900 text-ivory-100 py-3.5 overflow-hidden border-y border-plum-800">
        <div className="flex w-max animate-marquee">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
            <div key={idx} className="flex items-center gap-6 px-4 whitespace-nowrap">
              <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-ivory-100">
                {item}
              </span>
              <span className="text-champagne-400 text-xs" aria-hidden="true">
                ◆
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* INTERACTIVE PERFILES SECTION */}
      <section className="py-20 px-5 sm:px-6 bg-white">
        <div
          ref={profilesReveal.ref}
          className={`max-w-screen-xl mx-auto reveal-block ${profilesReveal.visible ? 'is-visible' : ''}`}
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-xl">
              <p className="text-xs font-bold uppercase tracking-widest text-plum-500 mb-2">
                Acompañamiento a medida
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink-900">
                ¿En qué etapa está tu <em className="italic text-plum-600 font-medium">negocio</em>?
              </h2>
            </div>
            <p className="text-sm sm:text-base text-ink-600 max-w-md">
              Selecciona tu perfil para conocer el régimen tributario y los entregables mensuales recomendados.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-5 flex flex-col gap-3">
              {PROFILES.map((profile, idx) => {
                const Icon = PROFILE_ICONS[profile.icon];
                const isSelected = profile.id === activeProfile;
                return (
                  <button
                    key={profile.id}
                    type="button"
                    onClick={() => setActiveProfile(profile.id)}
                    className={`text-left p-5 rounded-2xl border transition-all duration-200 flex items-center gap-4 ${
                      isSelected
                        ? 'bg-plum-800 text-white border-plum-800 shadow-lg translate-x-1'
                        : 'bg-ivory-100 text-ink-900 border-ivory-200 hover:border-plum-200 hover:bg-plum-50/50'
                    }`}
                  >
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isSelected ? 'bg-plum-700 text-champagne-200' : 'bg-white text-plum-600 border border-ivory-200'
                      }`}
                    >
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div className="flex-grow">
                      <span
                        className={`block text-[10px] font-bold uppercase tracking-widest ${
                          isSelected ? 'text-champagne-200' : 'text-ink-400'
                        }`}
                      >
                        0{idx + 1} · {profile.badge}
                      </span>
                      <span className="font-bold text-base sm:text-lg">{profile.title}</span>
                    </div>
                    <ArrowRight
                      className={`w-4 h-4 shrink-0 transition-transform ${
                        isSelected ? 'text-champagne-200 translate-x-0.5' : 'text-ink-400'
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                );
              })}
            </div>

            <div className="lg:col-span-7 bg-ivory-100 rounded-3xl p-8 sm:p-10 border border-ivory-300 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-ivory-300 text-plum-700 text-xs font-bold mb-5">
                  <span>{selectedProfile.badge}</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ink-900 mb-4">
                  {selectedProfile.title}
                </h3>
                <p className="text-base text-ink-600 leading-relaxed mb-8">
                  {selectedProfile.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-8">
                  {selectedProfile.highlights.map((item) => (
                    <div
                      key={item}
                      className="bg-white p-4 rounded-2xl border border-ivory-200 flex items-start gap-2.5 shadow-sm"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-xs sm:text-sm font-semibold text-ink-800">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-ivory-300">
                <span className="text-xs font-semibold text-ink-500">
                  Diagnóstico inicial sin costo · Cotización cerrada en 24h
                </span>
                <a
                  href={getWhatsAppUrl(`Hola Daniela, mi perfil es "${selectedProfile.title}" y me gustaría asesoría.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-plum-800 hover:bg-plum-700 text-white text-sm font-bold rounded-full transition-all duration-200"
                >
                  Consultar para este perfil
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="py-20 px-5 sm:px-6 bg-ivory-100 border-y border-ivory-200">
        <div
          ref={servicesReveal.ref}
          className={`max-w-screen-xl mx-auto reveal-block ${servicesReveal.visible ? 'is-visible' : ''}`}
        >
          <div className="max-w-2xl mx-auto text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-plum-500 mb-2">
              Servicios Profesionales
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink-900 mb-4">
              Claridad contable en cada <em className="italic text-plum-600 font-medium">etapa</em>
            </h2>
            <p className="text-base text-ink-600">
              Nos encargamos de tus declaraciones, balances y remuneraciones para que puedas enfocarte en hacer crecer tu proyecto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, idx) => {
              const Icon = SERVICE_ICONS[service.icon];
              return (
                <article
                  key={service.id}
                  className="group bg-white rounded-3xl p-7 border border-ivory-200 hover:border-plum-300 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-plum-50 text-plum-700 group-hover:bg-plum-800 group-hover:text-champagne-200 flex items-center justify-center transition-colors duration-300">
                      <Icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <span className="font-serif text-sm font-semibold text-ink-400">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-ink-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-ink-600 leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>

                  <ul className="space-y-2.5 mb-6 pt-4 border-t border-ivory-200">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-sm text-ink-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contacto"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-plum-700 hover:text-plum-500 transition-colors"
                  >
                    <span>Solicitar información</span>
                    <ArrowRight
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      aria-hidden="true"
                    />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* COMO TRABAJAMOS (3 PASOS) */}
      <section className="py-20 px-5 sm:px-6 bg-white">
        <div
          ref={processReveal.ref}
          className={`max-w-screen-xl mx-auto reveal-block ${processReveal.visible ? 'is-visible' : ''}`}
        >
          <div className="max-w-2xl mx-auto text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-plum-500 mb-2">
              Proceso simple y sin fricción
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink-900 mb-3">
              Cómo empezamos a trabajar <em className="italic text-plum-600 font-medium">juntos</em>
            </h2>
            <p className="text-base text-ink-600">
              Ya sea que estés partiendo o cambiando de contador, te acompañamos paso a paso.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROCESS_STEPS.map((item) => (
              <div
                key={item.step}
                className="relative bg-ivory-100 rounded-3xl p-8 border border-ivory-200 hover:border-plum-200 transition-colors"
              >
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-plum-800 text-champagne-200 font-serif font-bold text-lg mb-5">
                  {item.step}
                </span>
                <h3 className="font-serif text-xl font-bold text-ink-900 mb-3">{item.title}</h3>
                <p className="text-sm text-ink-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HERRAMIENTAS TEASER */}
      <section className="py-12 px-5 sm:px-6 bg-white">
        <div
          ref={toolsReveal.ref}
          className={`max-w-screen-xl mx-auto reveal-block ${toolsReveal.visible ? 'is-visible' : ''}`}
        >
          <div className="relative overflow-hidden bg-gradient-to-br from-plum-900 via-plum-800 to-plum-950 rounded-[2rem] p-8 sm:p-12 lg:p-14 text-white shadow-xl">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-plum-400/20 blur-3xl"
            />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5">
                <span className="inline-block px-3.5 py-1 rounded-full bg-white/10 border border-champagne-400/40 text-champagne-200 text-xs font-bold uppercase tracking-wider mb-4">
                  Recursos Gratuitos 2026
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
                  Calculadoras <em className="italic font-medium text-champagne-200">Tributarias</em>
                </h2>
                <p className="text-ivory-200 text-base leading-relaxed mb-7">
                  Simula tus boletas de honorarios con la retención del 15,25%, desglosa el IVA (19%) y ten siempre a mano el calendario del SII y Previred.
                </p>
                <Link
                  to="/herramientas"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-champagne-200 hover:bg-champagne-100 text-plum-950 font-bold rounded-full transition-all duration-200 hover:-translate-y-0.5 shadow-md"
                >
                  <span>Abrir Herramientas</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Link
                  to="/herramientas"
                  className="group bg-white/10 hover:bg-white/15 border border-white/15 rounded-2xl p-5 transition-all duration-200 hover:-translate-y-1 flex flex-col"
                >
                  <Calendar className="w-7 h-7 text-champagne-200 mb-3 group-hover:scale-110 transition-transform" aria-hidden="true" />
                  <h3 className="font-bold text-base mb-1.5">Calendario 2026</h3>
                  <p className="text-xs text-ivory-200/80 leading-relaxed">
                    Fechas de F29, Previred, DDJJ y Operación Renta.
                  </p>
                </Link>
                <Link
                  to="/herramientas"
                  className="group bg-white/10 hover:bg-white/15 border border-white/15 rounded-2xl p-5 transition-all duration-200 hover:-translate-y-1 flex flex-col"
                >
                  <Calculator className="w-7 h-7 text-emerald-300 mb-3 group-hover:scale-110 transition-transform" aria-hidden="true" />
                  <h3 className="font-bold text-base mb-1.5">Honorarios 15,25%</h3>
                  <p className="text-xs text-ivory-200/80 leading-relaxed">
                    Simulador Bruto a Líquido y Líquido a Bruto al instante.
                  </p>
                </Link>
                <Link
                  to="/herramientas"
                  className="group bg-white/10 hover:bg-white/15 border border-white/15 rounded-2xl p-5 transition-all duration-200 hover:-translate-y-1 flex flex-col"
                >
                  <Receipt className="w-7 h-7 text-champagne-200 mb-3 group-hover:scale-110 transition-transform" aria-hidden="true" />
                  <h3 className="font-bold text-base mb-1.5">Calculadora IVA 19%</h3>
                  <p className="text-xs text-ivory-200/80 leading-relaxed">
                    Desglose rápido de monto neto, IVA y total de factura.
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="py-20 px-5 sm:px-6 bg-white">
        <div
          ref={testimonialsReveal.ref}
          className={`max-w-screen-xl mx-auto reveal-block ${testimonialsReveal.visible ? 'is-visible' : ''}`}
        >
          <div className="max-w-2xl mx-auto text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-plum-500 mb-2">
              Experiencias reales
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink-900 mb-3">
              Lo que valoran nuestros <em className="italic text-plum-600 font-medium">clientes</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <blockquote
                key={t.author}
                className="bg-ivory-100 rounded-3xl p-8 border border-ivory-200 hover:border-plum-200 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <Quote className="w-6 h-6 text-plum-400 shrink-0" aria-hidden="true" />
                    <span className="px-3 py-1 rounded-full bg-white border border-ivory-300 text-[11px] font-bold text-plum-700">
                      {t.serviceTag}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-ink-700 leading-relaxed mb-6">
                    “{t.quote}”
                  </p>
                </div>
                <footer className="pt-4 border-t border-ivory-300 flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-plum-800 text-champagne-200 font-serif font-bold text-sm flex items-center justify-center shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-bold text-sm text-ink-900">{t.author}</p>
                    <p className="text-xs text-ink-500">
                      {t.role} · {t.location}
                    </p>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-20 px-5 sm:px-6 bg-ivory-100 border-t border-ivory-200">
        <div
          ref={faqReveal.ref}
          className={`max-w-3xl mx-auto reveal-block ${faqReveal.visible ? 'is-visible' : ''}`}
        >
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-plum-500 mb-2">
              Resuelve tus dudas
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink-900 mb-3">
              Preguntas Frecuentes
            </h2>
            <p className="text-base text-ink-600">
              Todo lo que necesitas saber sobre honorarios, cambio de contador y el SII.
            </p>
          </div>

          <div className="space-y-3.5">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.question}
                  className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen ? 'border-plum-300 shadow-md' : 'border-ivory-200 shadow-sm'
                  }`}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left font-bold text-ink-900 hover:bg-plum-50/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-plum-600"
                  >
                    <span className="text-base sm:text-lg">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-plum-600 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-2 text-sm sm:text-base text-ink-600 leading-relaxed border-t border-ivory-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACTO SECTION */}
      <section id="contacto" className="py-20 px-5 sm:px-6 bg-white border-t border-ivory-200">
        <div
          ref={contactReveal.ref}
          className={`max-w-5xl mx-auto reveal-block ${contactReveal.visible ? 'is-visible' : ''}`}
        >
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-plum-500 mb-2">
              Hablemos hoy
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink-900 mb-3">
              Pongamos orden a tus <em className="italic text-plum-600 font-medium">finanzas</em>
            </h2>
            <p className="text-base text-ink-600">
              Escríbeme para agendar tu diagnóstico inicial y revisar la situación tributaria de tu empresa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-start">
            <div className="md:col-span-2 space-y-5">
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-ivory-100 border border-ivory-200">
                <div className="w-11 h-11 bg-plum-800 rounded-xl flex items-center justify-center text-champagne-200 shrink-0">
                  <Mail className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-ink-900">Correo Electrónico</h3>
                  <a href={`mailto:${CONTACT.email}`} className="text-sm text-ink-600 hover:text-plum-700">
                    {CONTACT.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-ivory-100 border border-ivory-200">
                <div className="w-11 h-11 bg-emerald-600 rounded-xl flex items-center justify-center text-white shrink-0">
                  <Phone className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-ink-900">WhatsApp Directo</h3>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-ink-600 hover:text-emerald-700"
                  >
                    {CONTACT.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-ivory-100 border border-ivory-200">
                <div className="w-11 h-11 bg-plum-600 rounded-xl flex items-center justify-center text-white shrink-0">
                  <MapPin className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-ink-900">Cobertura</h3>
                  <p className="text-sm text-ink-600">{CONTACT.coverage}</p>
                </div>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="md:col-span-3 bg-ivory-50 p-7 sm:p-9 rounded-3xl border border-ivory-300 shadow-sm space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-bold text-ink-900 mb-2">
                    Nombre completo
                  </label>
                  <input
                    id="nombre"
                    type="text"
                    required
                    value={nombre}
                    onChange={(e) => {
                      setNombre(e.target.value);
                      setSubmitted(false);
                    }}
                    placeholder="Ej: Camila Rojas"
                    className="w-full px-4 py-3.5 bg-white border border-ivory-300 rounded-xl text-ink-900 placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-plum-600 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-ink-900 mb-2">
                    Correo electrónico
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setSubmitted(false);
                    }}
                    placeholder="correo@empresa.cl"
                    className="w-full px-4 py-3.5 bg-white border border-ivory-300 rounded-xl text-ink-900 placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-plum-600 transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-bold text-ink-900 mb-2">
                  ¿En qué podemos ayudarte?
                </label>
                <textarea
                  id="mensaje"
                  rows={4}
                  required
                  value={mensaje}
                  onChange={(e) => {
                    setMensaje(e.target.value);
                    setSubmitted(false);
                  }}
                  placeholder="Cuéntanos sobre tu pyme, cambio de contador o declaración de renta..."
                  className="w-full px-4 py-3.5 bg-white border border-ivory-300 rounded-xl text-ink-900 placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-plum-600 transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-plum-800 hover:bg-plum-700 text-white font-bold rounded-full shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span>Solicitar Diagnóstico</span>
                <Send className="w-4 h-4" aria-hidden="true" />
              </button>

              {submitted && (
                <div
                  role="status"
                  className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-ink-900 space-y-3"
                >
                  <p className="text-sm font-bold text-emerald-800">
                    ¡Consulta lista para enviar! Elige tu canal preferido:
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={whatsappPrefillUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold rounded-full transition-colors"
                    >
                      Enviar por WhatsApp
                    </a>
                    <a
                      href={mailtoUrl}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-ivory-300 hover:bg-ivory-100 text-ink-900 text-sm font-bold rounded-full transition-colors"
                    >
                      Enviar por Correo
                    </a>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
