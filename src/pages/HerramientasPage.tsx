import { useState } from 'react';
import { Calculator, Calendar, Check, Copy, Receipt, ArrowRight, Sparkles } from 'lucide-react';
import {
  ANNUAL_TAX_EVENTS,
  MONTHLY_TAX_EVENTS,
  getWhatsAppUrl,
  type TaxEvent,
} from '../data/siteData';

const RETENTION_RATE = 0.1525; // 15.25% año comercial 2026 en Chile
const IVA_RATE = 0.19;

function formatCLP(value: number): string {
  if (!Number.isFinite(value) || value <= 0) return '$ 0';
  return '$ ' + Math.round(value).toLocaleString('es-CL');
}

const PRESETS = [500000, 1000000, 2000000];

export default function HerramientasPage() {
  const [calendarTab, setCalendarTab] = useState<'mensual' | 'anual'>('mensual');

  const [honMode, setHonMode] = useState<'bruto' | 'liquido'>('bruto');
  const [honInput, setHonInput] = useState<string>('1000000');
  const [copiedHon, setCopiedHon] = useState(false);

  const [ivaMode, setIvaMode] = useState<'neto' | 'total'>('neto');
  const [ivaInput, setIvaInput] = useState<string>('100000');
  const [copiedIva, setCopiedIva] = useState(false);

  const honAmount = Math.max(0, Number(honInput) || 0);
  const honBruto =
    honMode === 'bruto' ? honAmount : honAmount / (1 - RETENTION_RATE);
  const honRetencion = honBruto * RETENTION_RATE;
  const honLiquido = honBruto - honRetencion;

  const ivaAmount = Math.max(0, Number(ivaInput) || 0);
  const ivaNeto = ivaMode === 'neto' ? ivaAmount : ivaAmount / (1 + IVA_RATE);
  const ivaTax = ivaNeto * IVA_RATE;
  const ivaTotal = ivaNeto + ivaTax;

  const events: TaxEvent[] =
    calendarTab === 'mensual' ? MONTHLY_TAX_EVENTS : ANNUAL_TAX_EVENTS;

  const currentDay = new Date().getDate();
  const nextMonthlyBadge =
    currentDay <= 12 ? 'Día 12' : currentDay <= 13 ? 'Día 13' : currentDay <= 20 ? 'Día 20' : 'Día 12';

  const copySummary = async (text: string, type: 'hon' | 'iva') => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === 'hon') {
        setCopiedHon(true);
        setTimeout(() => setCopiedHon(false), 1800);
      } else {
        setCopiedIva(true);
        setTimeout(() => setCopiedIva(false), 1800);
      }
    } catch {
      // Clipboard API unavailable
    }
  };

  return (
    <>
      {/* HERO */}
      <section className="bg-white py-12 sm:py-16 border-b border-ivory-200">
        <div className="max-w-screen-xl mx-auto px-5 sm:px-6 text-center animate-fade-up">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-plum-50 border border-plum-200 text-plum-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-plum-500" aria-hidden="true" />
            Recursos Gratuitos 2026
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-ink-900 mb-4">
            Herramientas <em className="italic font-medium text-plum-600">Tributarias</em>
          </h1>
          <p className="text-base sm:text-lg text-ink-600 max-w-2xl mx-auto">
            Simuladores y calendario SII diseñados para facilitar la gestión diaria de emprendedores y profesionales en Chile.
          </p>
        </div>
      </section>

      {/* TOOLS GRID (Equal height cards) */}
      <section className="py-14 sm:py-20 px-5 sm:px-6 bg-ivory-100">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* 1. CALENDARIO TRIBUTARIO */}
            <article className="bg-white rounded-3xl border border-ivory-200 shadow-sm hover:shadow-lg transition-shadow p-7 sm:p-8 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-11 h-11 rounded-2xl bg-plum-50 text-plum-700 flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="font-serif text-xl font-bold text-ink-900">Calendario Tributario 2026</h2>
                  <p className="text-xs text-ink-500">Fechas clave SII y Previred</p>
                </div>
              </div>

              {/* Segmented Control */}
              <div className="grid grid-cols-2 gap-1.5 p-1 bg-ivory-200 rounded-xl my-5">
                <button
                  type="button"
                  onClick={() => setCalendarTab('mensual')}
                  className={`py-2.5 px-3 text-xs sm:text-sm font-bold rounded-lg transition-all ${
                    calendarTab === 'mensual'
                      ? 'bg-white text-plum-800 shadow-sm'
                      : 'text-ink-600 hover:text-ink-900'
                  }`}
                >
                  Impuestos Mensuales
                </button>
                <button
                  type="button"
                  onClick={() => setCalendarTab('anual')}
                  className={`py-2.5 px-3 text-xs sm:text-sm font-bold rounded-lg transition-all ${
                    calendarTab === 'anual'
                      ? 'bg-white text-plum-800 shadow-sm'
                      : 'text-ink-600 hover:text-ink-900'
                  }`}
                >
                  Eventos Anuales
                </button>
              </div>

              <div className="space-y-4 flex-grow">
                {events.map((ev) => {
                  const isUpcoming = calendarTab === 'mensual' && ev.badge === nextMonthlyBadge;
                  return (
                    <div
                      key={ev.title}
                      className={`p-4 rounded-2xl border flex items-start gap-3.5 transition-colors ${
                        isUpcoming
                          ? 'bg-plum-50/70 border-plum-300 shadow-sm'
                          : 'bg-ivory-100 border-ivory-200'
                      }`}
                    >
                      <span
                        className={`px-2.5 py-1 rounded-lg text-xs font-bold shrink-0 ${
                          ev.tone === 'emerald'
                            ? 'bg-emerald-100 text-emerald-700'
                            : ev.tone === 'trust'
                            ? 'bg-plum-100 text-plum-800'
                            : 'bg-champagne-200 text-ink-900'
                        }`}
                      >
                        {ev.badge}
                      </span>
                      <div className="flex-grow">
                        <div className="flex items-center justify-between gap-2">
                          <h3 className="text-sm font-bold text-ink-900">{ev.title}</h3>
                          {isUpcoming && (
                            <span className="px-2 py-0.5 rounded-full bg-plum-800 text-champagne-200 text-[10px] font-bold uppercase tracking-wide shrink-0">
                              Próximo
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-ink-600 mt-1 leading-relaxed">{ev.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <p className="text-[11px] text-ink-500 mt-6 pt-4 border-t border-ivory-200">
                * Si el vencimiento cae fin de semana o festivo, el SII suele prorrogar al día hábil siguiente.
              </p>
            </article>

            {/* 2. SIMULADOR HONORARIOS 2026 */}
            <article className="bg-white rounded-3xl border border-ivory-200 shadow-sm hover:shadow-lg transition-shadow p-7 sm:p-8 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-11 h-11 rounded-2xl bg-plum-50 text-plum-700 flex items-center justify-center shrink-0">
                  <Calculator className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="font-serif text-xl font-bold text-ink-900">Simulador Honorarios 2026</h2>
                  <p className="text-xs text-ink-500">Retención legal vigente: 15,25%</p>
                </div>
              </div>

              {/* Segmented Mode */}
              <div className="grid grid-cols-2 gap-1.5 p-1 bg-ivory-200 rounded-xl my-5">
                <button
                  type="button"
                  onClick={() => setHonMode('bruto')}
                  className={`py-2.5 px-3 text-xs sm:text-sm font-bold rounded-lg transition-all ${
                    honMode === 'bruto'
                      ? 'bg-white text-plum-800 shadow-sm'
                      : 'text-ink-600 hover:text-ink-900'
                  }`}
                >
                  Ingresar Bruto
                </button>
                <button
                  type="button"
                  onClick={() => setHonMode('liquido')}
                  className={`py-2.5 px-3 text-xs sm:text-sm font-bold rounded-lg transition-all ${
                    honMode === 'liquido'
                      ? 'bg-white text-plum-800 shadow-sm'
                      : 'text-ink-600 hover:text-ink-900'
                  }`}
                >
                  Ingresar Líquido
                </button>
              </div>

              <div className="space-y-4 flex-grow flex flex-col">
                <div>
                  <label htmlFor="hon-amount" className="block text-xs font-bold text-ink-700 mb-1.5">
                    {honMode === 'bruto' ? 'Monto Bruto de la Boleta (CLP)' : 'Monto Líquido Deseado (CLP)'}
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-400 font-bold">$</span>
                    <input
                      id="hon-amount"
                      type="number"
                      min="0"
                      value={honInput}
                      onChange={(e) => setHonInput(e.target.value)}
                      className="w-full pl-9 pr-4 py-3.5 bg-ivory-100 border border-ivory-300 rounded-xl text-lg font-bold text-ink-900 tabular-nums focus:outline-none focus:ring-2 focus:ring-plum-600 focus:bg-white"
                    />
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2.5">
                    {PRESETS.map((p) => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => setHonInput(String(p))}
                        className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-ivory-200 hover:bg-plum-100 text-ink-700 hover:text-plum-800 transition-colors tabular-nums"
                      >
                        {formatCLP(p)}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-4 rounded-2xl bg-ivory-100 border border-ivory-200">
                    <span className="block text-xs font-semibold text-ink-600 mb-1">Monto Bruto</span>
                    <span className="text-lg font-extrabold text-ink-900 tabular-nums">
                      {formatCLP(honBruto)}
                    </span>
                  </div>
                  <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200/70">
                    <span className="block text-xs font-semibold text-emerald-700 mb-1">Retención (15,25%)</span>
                    <span className="text-lg font-extrabold text-emerald-700 tabular-nums">
                      {formatCLP(honRetencion)}
                    </span>
                  </div>
                </div>

                <div className="mt-auto space-y-3">
                  <div className="bg-plum-800 rounded-2xl p-5 text-white flex items-center justify-between gap-3">
                    <div>
                      <span className="block text-xs font-semibold text-champagne-200 uppercase tracking-wider">
                        Total Líquido a Recibir
                      </span>
                      <span className="text-2xl sm:text-3xl font-extrabold tabular-nums">
                        {formatCLP(honLiquido)}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        copySummary(
                          `Boleta Honorarios (15,25%): Bruto ${formatCLP(honBruto)} | Retención ${formatCLP(honRetencion)} | Líquido ${formatCLP(honLiquido)}`,
                          'hon'
                        )
                      }
                      aria-label="Copiar cálculo de honorarios"
                      className="p-2.5 rounded-xl bg-plum-700 hover:bg-plum-600 text-ivory-100 transition-colors shrink-0"
                    >
                      {copiedHon ? <Check className="w-5 h-5 text-emerald-300" /> : <Copy className="w-5 h-5" />}
                    </button>
                  </div>
                  <a
                    href={getWhatsAppUrl(
                      `Hola Daniela, simulé una boleta de honorarios por ${formatCLP(honBruto)} bruto (líquido ${formatCLP(honLiquido)}) y tengo una duda.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center text-xs font-bold text-plum-700 hover:text-plum-500 transition-colors"
                  >
                    ¿Dudas con este cálculo? Consúltame por WhatsApp →
                  </a>
                </div>
              </div>
            </article>

            {/* 3. CALCULADORA IVA 19% */}
            <article className="bg-white rounded-3xl border border-ivory-200 shadow-sm hover:shadow-lg transition-shadow p-7 sm:p-8 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Receipt className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="font-serif text-xl font-bold text-ink-900">Calculadora IVA 19%</h2>
                  <p className="text-xs text-ink-500">Desglose rápido de facturas</p>
                </div>
              </div>

              {/* Segmented Mode */}
              <div className="grid grid-cols-2 gap-1.5 p-1 bg-ivory-200 rounded-xl my-5">
                <button
                  type="button"
                  onClick={() => setIvaMode('neto')}
                  className={`py-2.5 px-3 text-xs sm:text-sm font-bold rounded-lg transition-all ${
                    ivaMode === 'neto'
                      ? 'bg-white text-plum-800 shadow-sm'
                      : 'text-ink-600 hover:text-ink-900'
                  }`}
                >
                  Desde Monto Neto
                </button>
                <button
                  type="button"
                  onClick={() => setIvaMode('total')}
                  className={`py-2.5 px-3 text-xs sm:text-sm font-bold rounded-lg transition-all ${
                    ivaMode === 'total'
                      ? 'bg-white text-plum-800 shadow-sm'
                      : 'text-ink-600 hover:text-ink-900'
                  }`}
                >
                  Desde Monto Total
                </button>
              </div>

              <div className="space-y-4 flex-grow flex flex-col">
                <div>
                  <label htmlFor="iva-amount" className="block text-xs font-bold text-ink-700 mb-1.5">
                    {ivaMode === 'neto' ? 'Monto Neto Ingresado (CLP)' : 'Monto Total Ingresado (IVA incl.)'}
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-400 font-bold">$</span>
                    <input
                      id="iva-amount"
                      type="number"
                      min="0"
                      value={ivaInput}
                      onChange={(e) => setIvaInput(e.target.value)}
                      className="w-full pl-9 pr-4 py-3.5 bg-ivory-100 border border-ivory-300 rounded-xl text-lg font-bold text-ink-900 tabular-nums focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                    />
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2.5">
                    {[100000, 500000, 1000000].map((p) => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => setIvaInput(String(p))}
                        className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-ivory-200 hover:bg-plum-100 text-ink-700 hover:text-plum-800 transition-colors tabular-nums"
                      >
                        {formatCLP(p)}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-4 rounded-2xl bg-ivory-100 border border-ivory-200">
                    <span className="block text-xs font-semibold text-ink-600 mb-1">Monto Neto</span>
                    <span className="text-lg font-extrabold text-ink-900 tabular-nums">
                      {formatCLP(ivaNeto)}
                    </span>
                  </div>
                  <div className="p-4 rounded-2xl bg-plum-50 border border-plum-200/70">
                    <span className="block text-xs font-semibold text-plum-800 mb-1">IVA (19%)</span>
                    <span className="text-lg font-extrabold text-plum-800 tabular-nums">
                      {formatCLP(ivaTax)}
                    </span>
                  </div>
                </div>

                <div className="mt-auto space-y-3">
                  <div className="bg-emerald-700 rounded-2xl p-5 text-white flex items-center justify-between gap-3">
                    <div>
                      <span className="block text-xs font-semibold text-emerald-100 uppercase tracking-wider">
                        Total Factura
                      </span>
                      <span className="text-2xl sm:text-3xl font-extrabold tabular-nums">
                        {formatCLP(ivaTotal)}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        copySummary(
                          `Cálculo IVA (19%): Neto ${formatCLP(ivaNeto)} | IVA ${formatCLP(ivaTax)} | Total ${formatCLP(ivaTotal)}`,
                          'iva'
                        )
                      }
                      aria-label="Copiar cálculo de IVA"
                      className="p-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white transition-colors shrink-0"
                    >
                      {copiedIva ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                    </button>
                  </div>
                  <a
                    href={getWhatsAppUrl(
                      `Hola Daniela, calculé una factura con IVA (Neto ${formatCLP(ivaNeto)} / Total ${formatCLP(ivaTotal)}) y necesito asesoría.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center text-xs font-bold text-emerald-700 hover:text-emerald-600 transition-colors"
                  >
                    ¿Dudas con tu F29 o facturas? Consúltame →
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-5 sm:px-6 bg-white border-t border-ivory-200">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-plum-900 via-plum-800 to-plum-950 rounded-[2rem] p-8 sm:p-12 text-center text-white shadow-xl">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
            ¿Necesitas una asesoría <em className="italic font-medium text-champagne-200">personalizada</em>?
          </h2>
          <p className="text-base sm:text-lg text-ivory-200 mb-8 max-w-xl mx-auto">
            Si tienes dudas sobre cómo declarar tu F29, emitir boletas o elegir el régimen tributario ideal para tu pyme, conversemos.
          </p>
          <a
            href={getWhatsAppUrl('Hola Daniela, usé las herramientas tributarias y necesito asesoría personalizada.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-champagne-200 hover:bg-champagne-100 text-plum-950 font-bold rounded-full transition-all duration-200"
          >
            <span>Agendar Asesoría por WhatsApp</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </section>
    </>
  );
}
