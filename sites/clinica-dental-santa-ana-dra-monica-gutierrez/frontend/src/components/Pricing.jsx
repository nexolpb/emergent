import { Check, ExternalLink } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { NEXO_WA, NEXO_WEB, NEXO_PHONE } from '../constants';

const WaIcon = () => (
  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const plans = [
  {
    id: 'lanzamiento',
    name: 'Lanzamiento',
    price: '$349',
    desc: 'El punto de partida perfecto para comenzar su presencia en línea.',
    featured: false,
  },
  {
    id: 'presencia',
    name: 'Presencia',
    price: '$649',
    desc: 'La solución más popular para clínicas que buscan crecer en internet.',
    featured: true,
  },
  {
    id: 'crecimiento',
    name: 'Crecimiento',
    price: '$999',
    desc: 'Para clínicas que quieren dominar el mercado digital en su zona.',
    featured: false,
  },
];

export default function Pricing() {
  const [headRef, headVisible] = useScrollReveal();

  return (
    <section id="pricing" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div
          ref={headRef}
          className={`text-center mb-14 fade-up ${headVisible ? 'visible' : ''}`}
        >
          <span className="inline-block text-[#1B6CA8] font-semibold text-sm uppercase tracking-widest mb-3">
            Nexo Sites
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#0F172A]"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Sitios web que generan clientes
          </h2>
          <p className="mt-4 text-[#475569] text-lg max-w-2xl mx-auto">
            Con Nexo Sites, su clínica puede tener presencia profesional en internet
            desde <strong className="text-[#1B6CA8]">$349</strong>. Páginas diseñadas para
            atraer nuevos pacientes todos los días.
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <PricingCard key={plan.id} plan={plan} delay={i} />
          ))}
        </div>

        {/* Nexo contact row */}
        <div className="mt-14 text-center space-y-3">
          <p className="text-[#475569] text-sm">
            ¿Tiene preguntas sobre los planes?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={NEXO_WA}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="pricing-whatsapp-btn"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold rounded-full px-8 py-4 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <WaIcon />
              Escríbenos por WhatsApp
            </a>
            <a
              href={NEXO_WEB}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="nexo-web-link"
              className="inline-flex items-center gap-2 text-[#1B6CA8] font-medium hover:underline"
            >
              {NEXO_WEB.replace('https://', '')}
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          <p className="text-[#475569] text-sm">WhatsApp: {NEXO_PHONE}</p>
        </div>
      </div>
    </section>
  );
}

function PricingCard({ plan, delay }) {
  const [ref, visible] = useScrollReveal();
  const delayClass = `delay-${delay * 100 + 100}`;

  return (
    <div
      ref={ref}
      data-testid={`pricing-card-${plan.id}`}
      className={`relative flex flex-col rounded-3xl p-8 border transition-all duration-300
        ${plan.featured
          ? 'bg-[#1B6CA8] border-[#1B6CA8] shadow-2xl scale-105 text-white'
          : 'bg-white border-slate-100 shadow-sm hover:shadow-md'
        }
        fade-up ${delayClass} ${visible ? 'visible' : ''}`}
    >
      {plan.featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-400 text-amber-900 text-xs font-bold px-4 py-1.5 rounded-full">
          Más popular
        </div>
      )}

      <div className="mb-5">
        <p
          className={`font-semibold text-sm uppercase tracking-widest mb-3
            ${plan.featured ? 'text-blue-200' : 'text-[#1B6CA8]'}`}
        >
          {plan.name}
        </p>
        <p
          className={`text-4xl font-bold leading-none ${plan.featured ? 'text-white' : 'text-[#0F172A]'}`}
          style={{ fontFamily: 'Outfit, sans-serif' }}
        >
          {plan.price}
        </p>
        <p className={`mt-1 text-sm ${plan.featured ? 'text-blue-100' : 'text-[#475569]'}`}>
          pago único
        </p>
      </div>

      <p className={`text-sm leading-relaxed mb-6 flex-1 ${plan.featured ? 'text-blue-100' : 'text-[#475569]'}`}>
        {plan.desc}
      </p>

      <a
        href={NEXO_WA}
        target="_blank"
        rel="noopener noreferrer"
        data-testid={`pricing-cta-${plan.id}`}
        className={`w-full text-center font-bold rounded-full px-6 py-3 text-sm transition-all duration-300 inline-flex items-center justify-center gap-2
          ${plan.featured
            ? 'bg-white text-[#1B6CA8] hover:bg-blue-50 shadow-lg'
            : 'border-2 border-[#1B6CA8] text-[#1B6CA8] hover:bg-[#1B6CA8] hover:text-white'
          }`}
      >
        Consultar precio
      </a>
    </div>
  );
}
