import React from 'react';
import { MapPin, Clock, Phone, Facebook } from 'lucide-react';

const Location = () => (
  <section id="ubicacion" data-testid="location-section" className="bg-white py-24 md:py-32">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="text-center mb-14">
        <p className="text-xs font-bold uppercase tracking-widest text-[#C62828] mb-3">
          Dónde estamos
        </p>
        <h2 className="font-['Barlow_Condensed'] text-4xl sm:text-5xl font-bold uppercase tracking-tight text-[#1A1A1A]">
          Ubicación y contacto
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Info */}
        <div className="space-y-7">
          <InfoRow icon={MapPin} title="Dirección">
            <p className="text-[#52525B] text-sm leading-relaxed">
              C. 67, Barrio María Auxiliadora
              <br />
              Curridabat, San José, Costa Rica
            </p>
          </InfoRow>

          {/* <!-- VERIFY HOURS WITH CLIENT --> */}
          <InfoRow icon={Clock} title="Horario">
            <p className="text-[#52525B] text-sm leading-relaxed">
              Lunes–Viernes: 8AM–6PM
              <br />
              Sábados: 8AM–1PM
            </p>
          </InfoRow>

          <InfoRow icon={Phone} title="Teléfono">
            <p className="text-[#52525B] text-sm">8410-0000 (solo consultas)</p>
          </InfoRow>

          <InfoRow icon={Facebook} title="Facebook">
            <a
              href="https://www.facebook.com/LaFirmaAutomotrizCR/"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="facebook-link"
              className="text-[#C62828] text-sm hover:underline"
            >
              /LaFirmaAutomotrizCR
            </a>
          </InfoRow>

          {/* Service area */}
          <div className="bg-[#F5F5F5] p-5 border-l-4 border-[#C62828]">
            <p className="text-[#52525B] text-sm leading-relaxed">
              Atendemos clientes de{' '}
              <strong className="text-[#1A1A1A]">
                Curridabat, San Francisco de Dos Ríos, San Pedro y alrededores
              </strong>
            </p>
          </div>
        </div>

        {/* Google Map embed */}
        <div className="w-full h-80 lg:h-[420px] bg-[#E5E5E5] overflow-hidden shadow-sm">
          <iframe
            src="https://maps.google.com/maps?q=La+Firma+Automotriz,+Curridabat,+Costa+Rica&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, display: 'block', minHeight: '100%' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación La Firma Automotriz"
            data-testid="map-iframe"
          />
        </div>
      </div>
    </div>
  </section>
);

const InfoRow = ({ icon: Icon, title, children }) => (
  <div className="flex items-start gap-4">
    <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-[#C62828]/10">
      <Icon className="w-5 h-5 text-[#C62828]" />
    </div>
    <div>
      <p className="font-bold text-[#1A1A1A] text-xs uppercase tracking-widest mb-1">{title}</p>
      {children}
    </div>
  </div>
);

export default Location;
