import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Sparkles, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Inicio', to: '/' },
  { label: 'Servicios', to: '/#servicios' },
  { label: 'Nosotros', to: '/nosotros' },
  { label: 'Herramientas', to: '/herramientas' },
  { label: 'Preguntas', to: '/#faq' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (to: string) => {
    setMenuOpen(false);
    if (to.startsWith('/#') && location.pathname === '/') {
      const id = to.slice(2);
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isActive = (to: string) => {
    if (to === '/') return location.pathname === '/' && !location.hash;
    if (to.startsWith('/#')) return false;
    return location.pathname === to;
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ivory-50/95 backdrop-blur-md border-b border-ivory-300 shadow-sm'
          : 'bg-ivory-100/90 backdrop-blur-sm border-b border-ivory-200/70'
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-5 sm:px-6 py-3.5 flex items-center justify-between">
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-plum-600 rounded-xl"
        >
          <div className="w-10 h-10 bg-plum-800 rounded-2xl flex items-center justify-center text-champagne-200 shadow-sm group-hover:bg-plum-700 group-hover:rotate-3 transition-all duration-300">
            <span className="font-serif text-lg font-bold tracking-tight">DG</span>
          </div>
          <div className="leading-tight">
            <span className="block font-serif text-lg font-bold text-ink-900 tracking-tight">
              Daniela <span className="italic font-medium text-plum-600">Godoy</span>
            </span>
            <span className="hidden sm:block text-[11px] font-semibold uppercase tracking-widest text-ink-500">
              Contadora Auditora
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav aria-label="Navegación principal" className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => handleNavClick(item.to)}
              className={`relative text-sm font-semibold transition-colors duration-200 py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-plum-600 rounded-md ${
                isActive(item.to)
                  ? 'text-plum-700'
                  : 'text-ink-600 hover:text-plum-800'
              }`}
            >
              {item.label}
              {isActive(item.to) && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-plum-500 rounded-full" />
              )}
            </Link>
          ))}
          <Link
            to="/#contacto"
            onClick={() => handleNavClick('/#contacto')}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-plum-800 hover:bg-plum-700 text-white text-sm font-bold rounded-full shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-plum-600"
          >
            <Sparkles className="w-3.5 h-3.5 text-champagne-200" aria-hidden="true" />
            <span>Agendar Asesoría</span>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
          aria-expanded={menuOpen}
          className="md:hidden w-11 h-11 flex items-center justify-center rounded-xl text-ink-800 hover:bg-ivory-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-plum-600"
        >
          {menuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <nav
          aria-label="Menú móvil"
          className="md:hidden bg-ivory-50 border-t border-ivory-200 shadow-lg px-5 py-4 flex flex-col gap-1"
        >
          {NAV_LINKS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => handleNavClick(item.to)}
              className={`px-3.5 py-3 rounded-xl text-base font-semibold transition-colors ${
                isActive(item.to)
                  ? 'bg-plum-100 text-plum-800'
                  : 'text-ink-700 hover:bg-ivory-200'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/#contacto"
            onClick={() => handleNavClick('/#contacto')}
            className="mt-2 px-4 py-3.5 bg-plum-800 text-white text-center text-base font-bold rounded-full hover:bg-plum-700 transition-colors"
          >
            Agendar Asesoría
          </Link>
        </nav>
      )}
    </header>
  );
}
