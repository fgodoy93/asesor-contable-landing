import { Link } from 'react-router-dom';
import { ArrowRight, Award, CheckCircle, GraduationCap, Sparkles } from 'lucide-react';
import { CONTACT, getWhatsAppUrl } from '../data/siteData';

export default function NosotrosPage() {
  return (
    <>
      <section className="relative bg-ivory-100 py-14 sm:py-20 border-b border-ivory-200 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -left-24 w-80 h-80 rounded-full bg-plum-200/40 blur-3xl animate-float-slow"
        />

        <div className="max-w-screen-xl mx-auto px-5 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center animate-fade-up">
            <div className="lg:col-span-5">
              <div className="relative max-w-sm mx-auto lg:max-w-none group">
                <div className="aspect-[3/4] overflow-hidden rounded-t-[10rem] rounded-b-[2rem] shadow-xl border-4 border-white bg-ivory-200">
                  <img
                    src="/img/header_photo.webp"
                    alt={`${CONTACT.professionalName} - ${CONTACT.title}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute -bottom-5 right-4 sm:-right-4 bg-white/95 backdrop-blur-md px-5 py-4 rounded-2xl shadow-lg border border-ivory-200 flex items-center gap-3.5">
                  <div className="w-11 h-11 bg-plum-50 rounded-xl flex items-center justify-center text-plum-700 shrink-0">
                    <Award className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-[11px] text-ink-400 font-bold uppercase tracking-wider">Experiencia</p>
                    <p className="font-serif text-lg font-bold text-ink-900">+5 Años</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-plum-200 text-plum-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-plum-500" aria-hidden="true" />
                Sobre Mí
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold text-ink-900 mb-3">
                {CONTACT.professionalName}
              </h1>
              <p className="text-xl font-bold text-plum-600 mb-6">{CONTACT.title}</p>

              <div className="space-y-4 text-base sm:text-lg text-ink-600 leading-relaxed">
                <p>
                  Soy una profesional apasionada por el orden financiero y la transparencia contable. Mi misión es brindar tranquilidad real a emprendedores y pymes mediante una asesoría experta, cercana y sin tecnicismos innecesarios.
                </p>
                <p>
                  A lo largo de mi carrera he acompañado a decenas de negocios en Chile a formalizarse, optimizar su carga tributaria y cumplir puntualmente con las normativas del Servicio de Impuestos Internos (SII) y Previred.
                </p>
                <p>
                  Entiendo que cada empresa es distinta: mi enfoque no es solo llevar los libros, sino convertirme en una aliada estratégica para que tomes mejores decisiones con números claros.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3.5 p-4 bg-white rounded-2xl border border-ivory-200 shadow-sm">
                  <div className="w-10 h-10 bg-plum-50 rounded-xl flex items-center justify-center text-plum-700 shrink-0">
                    <GraduationCap className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-ink-900">Formación</p>
                    <p className="text-xs text-ink-600">Contadora Auditora Profesional</p>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-4 bg-white rounded-2xl border border-ivory-200 shadow-sm">
                  <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 shrink-0">
                    <CheckCircle className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-ink-900">Especialidad</p>
                    <p className="text-xs text-ink-600">Tributaria, Pymes y Remuneraciones</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-5 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-plum-900 via-plum-800 to-plum-950 rounded-[2rem] p-8 sm:p-12 text-center text-white shadow-xl">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
            ¿Trabajamos <em className="italic font-medium text-champagne-200">juntos</em>?
          </h2>
          <p className="text-base sm:text-lg text-ivory-200 mb-8 max-w-xl mx-auto">
            Agenda una conversación inicial para revisar la situación contable y tributaria de tu negocio.
          </p>
          <div className="flex flex-col sm:flex-row gap-3.5 justify-center">
            <a
              href={getWhatsAppUrl('Hola Daniela, vi tu perfil y me gustaría conversar sobre asesoría contable.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-champagne-200 hover:bg-champagne-100 text-plum-950 font-bold rounded-full transition-all duration-200"
            >
              <span>Escribir por WhatsApp</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
            <Link
              to="/#contacto"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-full transition-colors"
            >
              Ir al Formulario
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
