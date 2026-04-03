import React from 'react';
import { MessageCircle, Search, Wrench } from 'lucide-react';

/* <!-- REPLACE with real client photo before launch --> */
const HOW_IMG =
  'https://images.pexels.com/photos/5276374/pexels-photo-5276374.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';

const steps = [
  {
    number: '01',
    icon: MessageCircle,
    title: 'Contáctenos',
    description:
      'Escríbanos por WhatsApp o llámenos para contarnos qué necesita su vehículo.',
  },
  {
    number: '02',
    icon: Search,
    title: 'Diagnóstico inicial',
    description:
      'Evaluamos su vehículo sin compromiso para identificar exactamente lo que necesita.',
  },
  {
    number: '03',
    icon: Wrench,
    title: 'Reparación garantizada',
    description:
      'Trabajamos con calidad y transparencia para dejarlo completamente satisfecho.',
  },
];

const HowItWorks = () => (
  <section data-testid="howitworks-section" className="bg-white py-24 md:py-32">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Steps */}
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-[#C62828] mb-3">
            Cómo funcionamos
          </p>
          <h2 className="font-['Barlow_Condensed'] text-4xl sm:text-5xl font-bold uppercase tracking-tight text-[#1A1A1A] mb-12">
            Simple, rápido y transparente
          </h2>

          <div className="space-y-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={i} data-testid={`step-${i}`} className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center bg-[#C62828] text-white">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#C62828] mb-1 block">
                      {step.number}
                    </span>
                    <h3 className="font-['Barlow_Condensed'] text-xl font-bold uppercase tracking-tight text-[#1A1A1A] mb-1">
                      {step.title}
                    </h3>
                    <p className="text-[#52525B] text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          <img
            src={HOW_IMG}
            alt="Técnico uniformado trabajando en vehículo en taller bien iluminado"
            loading="lazy"
            className="w-full h-80 lg:h-[500px] object-cover"
          />
          <div className="absolute top-4 right-4 bg-[#212121] text-white px-4 py-2 text-xs font-bold uppercase tracking-widest">
            Servicio Integral
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorks;
