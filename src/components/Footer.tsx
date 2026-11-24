import { Link, useLocation } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import { CONTACT } from '../data/siteData';

export default function Footer() {
  const location = useLocation();

  const handleAnchor = (id: string) => {
    if (location.pathname === '/') {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-plum-950 text-ivory-200 border-t border-plum-900">
      <div className="max-w-screen-xl mx-auto px-5 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-plum-800/80">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-plum-800 border border-plum-700 rounded-2xl flex items-center justify-center text-champagne-200">
                <span className="font-serif text-base font-bold">DG</span>
              </div>
              <div>
                <span className="block font-serif text-lg font-bold text-white tracking-tight">
                  Daniela <span className="italic font-medium text-plum-200">Godoy</span>
                </span>
                <span className="block text-[10px] uppercase tracking-widest text-champagne-400 font-semibold">
                  Asesora Contable
                </span>
              </div>
            </Link>
            <p className="text-sm text-ivory-300 leading-relaxed max-w-xs">
              Asesoría contable, tributaria y laboral con cercanía, orden y visión estratégica para pymes y profesionales en Chile.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-bold text-champagne-400 uppercase tracking-widest mb-4">
              Explorar
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/#servicios" onClick={() => handleAnchor('servicios')} className="text-ivory-200 hover:text-white transition-colors">
                  Servicios Contables
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="text-ivory-200 hover:text-white transition-colors">
                  Sobre Daniela Godoy
                </Link>
              </li>
              <li>
                <Link to="/herramientas" className="text-ivory-200 hover:text-white transition-colors">
                  Herramientas Tributarias 2026
                </Link>
              </li>
              <li>
                <Link to="/#faq" onClick={() => handleAnchor('faq')} className="text-ivory-200 hover:text-white transition-colors">
                  Preguntas Frecuentes
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold text-champagne-400 uppercase tracking-widest mb-4">
              Contacto Directo
            </h3>
            <ul className="space-y-3 text-sm text-ivory-200">
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-champagne-400 shrink-0" aria-hidden="true" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-white transition-colors">
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
                <span>{CONTACT.phoneDisplay}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-champagne-400 shrink-0 mt-0.5" aria-hidden="true" />
                <span>{CONTACT.location} · Presencial y remoto</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 pb-14 sm:pb-0 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ivory-300 pr-0 sm:pr-16">
          <p>© {new Date().getFullYear()} {CONTACT.professionalName} — {CONTACT.brandName}. Todos los derechos reservados.</p>
          <p>asesorcontable.cl · Concepción, Chile</p>
        </div>
      </div>
    </footer>
  );
}
