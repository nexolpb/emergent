import React from 'react';
import { Star, Users, MapPin, CheckCircle2 } from 'lucide-react';

/* <!-- REPLACE with real client photo before launch --> */
const MECHANIC_IMG =
  'https://images.unsplash.com/photo-1663418397495-a7fb83ca5282?crop=entropy&cs=srgb&fm=jpg&q=85&w=800';

const FALLBACK_IMG =
  'https://images.pexels.com/photos/5276374/pexels-photo-5276374.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';

const badges = [
  { icon: Star, label: '★ 4.3 en Google', fill: true },
  { icon: Users, label: '44+ clientes satisfechos', fill: false },
  { icon: MapPin, label: 'Curridabat, San José', fill: false },
  { icon: CheckCircle2, label: 'Servicio integral en un solo lugar', fill: false },
];

const WhyUs = () => (
  <section id="nosotros" data-testid="whyus-section" className="bg-[#212121] py-24 md:py-32">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <div className="relative order-2 lg:order-1">
          <img
            src={MECHANIC_IMG}
            alt="Mecánico trabajando en vehículo en taller bien iluminado"
            loading="lazy"
            onError={(e) => { e.currentTarget.src = FALLBACK_IMG; }}
            className="w-full h-80 lg:h-[500px] object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#212121]/60 to-transparent" />
          <div className="absolute bottom-4 left-4 bg-[#C62828] px-4 py-2">
            <p className="text-white text-xs font-bold uppercase tracking-widest">
              Taller de confianza
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="order-1 lg:order-2">
          <p className="text-xs font-bold uppercase tracking-widest text-[#C62828] mb-3">
            ¿Por qué elegirnos?
          </p>
          <h2 className="font-['Barlow_Condensed'] text-4xl sm:text-5xl font-bold uppercase tracking-tight text-white mb-10 leading-tight">
            Calidad y confianza en cada servicio
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {badges.map((badge, i) => {
              const Icon = badge.icon;
              return (
                <div
                  key={i}
                  data-testid={`whyus-badge-${i}`}
                  className="bg-[#2A2A2A] border border-[#333333] p-6 flex items-start gap-4 hover:border-[#C62828]/40 transition-colors duration-300"
                >
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-[#C62828]/20">
                    <Icon
                      className={`w-5 h-5 text-[#C62828] ${badge.fill ? 'fill-[#C62828]' : ''}`}
                    />
                  </div>
                  <p className="text-white font-semibold text-sm leading-snug pt-2">
                    {badge.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WhyUs;
