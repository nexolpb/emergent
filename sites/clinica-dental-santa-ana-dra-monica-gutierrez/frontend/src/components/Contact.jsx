import { Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { NEXO_WA, CLINIC_PHONE, CLINIC_WA_LINK, CLINIC_WA_NUM } from '../constants';

const WaIcon = () => (
  <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export default function Contact() {
  const [ref, visible] = useScrollReveal();

  return (
    <section
      id="contacto"
      className="py-20 md:py-28 bg-gradient-to-br from-[#1B6CA8] to-[#155A8C] text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-12 items-center fade-up ${visible ? 'visible' : ''}`}
        >
          {/* ── Left: CTA copy ── */}
          <div className="space-y-6">
            <span className="inline-block text-blue-200 font-semibold text-sm uppercase tracking-widest">
              Contáctenos
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold leading-tight"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              ¿Listo para mejorar su sonrisa?
            </h2>
            <p className="text-blue-100 text-lg leading-relaxed">
              Agendemos una consulta hoy. Estamos en CC Avalon Plaza, Santa Ana,
              con horario extendido de lunes a sábado.
            </p>

            <a
              href={NEXO_WA}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="contact-whatsapp-btn"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold rounded-full px-8 py-4 text-base transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 wa-pulse"
            >
              <WaIcon />
              Escríbenos por WhatsApp
            </a>

            <p className="text-blue-200 text-xs">
              Respuesta rápida. Sin compromisos.
            </p>
          </div>

          {/* ── Right: Contact info (display only) ── */}
          <div className="space-y-4" data-testid="contact-info-panel">
            <h3
              className="text-xl font-semibold text-blue-100 mb-5"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Información de contacto
            </h3>

            {[
              {
                icon: Phone,
                label: 'Teléfono',
                value: CLINIC_PHONE,
                href: `tel:${CLINIC_PHONE.replace(/-/g, '')}`,
                testId: 'contact-phone',
              },
              {
                icon: MessageCircle,
                label: 'WhatsApp',
                value: CLINIC_WA_NUM,
                href: CLINIC_WA_LINK,
                testId: 'contact-whatsapp-num',
              },
              {
                icon: MapPin,
                label: 'Dirección',
                value: 'CC Avalon Plaza, Local 5A, Santa Ana',
                testId: 'contact-address',
              },
              {
                icon: Clock,
                label: 'Horario',
                value: 'Lun–Vie 8:00 AM – 8:00 PM · Sáb 8:00 AM – 6:00 PM',
                testId: 'contact-hours',
              },
            ].map(({ icon: Icon, label, value, href, testId }) => (
              <div key={label} className="flex items-start gap-4 bg-white/10 rounded-2xl px-5 py-4">
                <span className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-white" />
                </span>
                <div>
                  <p className="text-blue-200 text-xs font-medium uppercase tracking-wide">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      data-testid={testId}
                      className="text-white font-semibold text-sm hover:underline"
                    >
                      {value}
                    </a>
                  ) : (
                    <p data-testid={testId} className="text-white font-semibold text-sm">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
