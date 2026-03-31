import { MapPin, Clock, Phone, ExternalLink } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { MAPS_URL, EMBED_MAPS, CLINIC_PHONE, CLINIC_WA_LINK, CLINIC_WA_NUM } from '../constants';

const hours = [
  { day: 'Lunes',     hours: '8:00 AM – 8:00 PM' },
  { day: 'Martes',    hours: '8:00 AM – 8:00 PM' },
  { day: 'Miércoles', hours: '8:00 AM – 8:00 PM' },
  { day: 'Jueves',    hours: '8:00 AM – 8:00 PM' },
  { day: 'Viernes',   hours: '8:00 AM – 8:00 PM' },
  { day: 'Sábado',    hours: '8:00 AM – 6:00 PM', highlight: true },
  { day: 'Domingo',   hours: 'Cerrado',            closed: true },
];

export default function LocationHours() {
  const [headRef, headVisible] = useScrollReveal();

  return (
    <section id="ubicacion" className="py-20 md:py-28 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div
          ref={headRef}
          className={`text-center mb-14 fade-up ${headVisible ? 'visible' : ''}`}
        >
          <span className="inline-block text-[#1B6CA8] font-semibold text-sm uppercase tracking-widest mb-3">
            Cómo llegarnos
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#0F172A]"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Ubicación y Horarios
          </h2>
          <p className="mt-4 text-[#475569] text-lg max-w-xl mx-auto">
            Estamos en CC Avalon Plaza, Local 5A. Fácil acceso desde toda la zona oeste de San José.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">

          {/* ── Map ── */}
          <div className="lg:col-span-3 rounded-3xl overflow-hidden shadow-lg border border-slate-100">
            <iframe
              src={EMBED_MAPS}
              title="Ubicación Clínica Dental Santa Ana"
              className="map-iframe"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              data-testid="google-maps-iframe"
            />
          </div>

          {/* ── Info panel ── */}
          <div className="lg:col-span-2 space-y-6">

            {/* Address */}
            <InfoCard>
              <div className="flex gap-4 items-start">
                <span className="w-10 h-10 rounded-xl bg-[#EBF3FB] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#1B6CA8]" />
                </span>
                <div>
                  <p className="font-semibold text-[#0F172A] mb-1" style={{ fontFamily: 'Outfit, sans-serif' }}>Dirección</p>
                  <p className="text-[#475569] text-sm leading-relaxed">
                    CC Avalon Plaza, Local 5A<br />
                    125 mts este de la Cruz Roja<br />
                    <strong>Santa Ana, San José</strong>
                  </p>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="maps-link"
                    className="inline-flex items-center gap-1 text-[#1B6CA8] text-sm font-medium mt-2 hover:underline"
                  >
                    Ver en Google Maps <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </InfoCard>

            {/* Phone */}
            <InfoCard>
              <div className="flex gap-4 items-start">
                <span className="w-10 h-10 rounded-xl bg-[#EBF3FB] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#1B6CA8]" />
                </span>
                <div>
                  <p className="font-semibold text-[#0F172A] mb-1" style={{ fontFamily: 'Outfit, sans-serif' }}>Contacto directo</p>
                  <p className="text-[#475569] text-sm">
                    Teléfono: <span className="text-[#0F172A] font-medium">{CLINIC_PHONE}</span>
                  </p>
                  <p className="text-[#475569] text-sm">
                    WhatsApp: <span className="text-[#0F172A] font-medium">{CLINIC_WA_NUM}</span>
                  </p>
                </div>
              </div>
            </InfoCard>

            {/* Hours */}
            <InfoCard>
              <div className="flex gap-4 items-start">
                <span className="w-10 h-10 rounded-xl bg-[#EBF3FB] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock className="w-5 h-5 text-[#1B6CA8]" />
                </span>
                <div className="flex-1">
                  <p className="font-semibold text-[#0F172A] mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>Horario</p>
                  <table className="w-full text-sm" data-testid="hours-table">
                    <tbody>
                      {hours.map(({ day, hours: h, highlight, closed }) => (
                        <tr
                          key={day}
                          className={`${highlight ? 'text-[#1B6CA8] font-semibold' : ''} ${closed ? 'text-[#94A3B8]' : 'text-[#475569]'}`}
                        >
                          <td className="py-0.5 pr-4 font-medium text-[#0F172A]">{day}</td>
                          <td className="py-0.5">{h}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </InfoCard>

            {/* Service area */}
            <div className="bg-[#1B6CA8]/8 border border-[#1B6CA8]/20 rounded-2xl px-5 py-4">
              <p className="text-xs text-[#1B6CA8] font-semibold uppercase tracking-wide mb-1">Área de servicio</p>
              <p className="text-[#0F172A] text-sm font-medium">
                Atendemos a pacientes de Santa Ana, Pozos, Ciudad Colón y zona oeste de San José
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ children }) {
  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
      {children}
    </div>
  );
}
