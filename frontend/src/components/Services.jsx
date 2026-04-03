import React from 'react';
import { Palette, Wrench, Layers, Sparkles, ClipboardList, Shield } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Enderezado y Pintura',
    benefit: 'Dejamos su vehículo como nuevo',
  },
  {
    icon: Wrench,
    title: 'Mecánica General',
    benefit: 'Diagnóstico y reparación para todas las marcas',
  },
  {
    icon: Layers,
    title: 'Tapicería',
    benefit: 'Interiores restaurados con materiales de calidad',
  },
  {
    icon: Sparkles,
    title: 'Detallado',
    benefit: 'Limpieza profunda interior y exterior',
  },
  {
    icon: ClipboardList,
    title: 'Revisión Técnica (RTV)',
    benefit: 'Preparamos su vehículo para pasar el RTV',
  },
  {
    icon: Shield,
    title: 'Sanitización Vehicular',
    benefit: 'Eliminamos bacterias y malos olores',
  },
];

const Services = () => (
  <section id="servicios" data-testid="services-section" className="bg-[#F5F5F5] py-24 md:py-32">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="text-center mb-16">
        <p className="text-xs font-bold uppercase tracking-widest text-[#C62828] mb-3">
          Nuestros Servicios
        </p>
        <h2 className="font-['Barlow_Condensed'] text-4xl sm:text-5xl font-bold uppercase tracking-tight text-[#1A1A1A]">
          Todo lo que su vehículo necesita
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <div
              key={i}
              data-testid={`service-card-${i}`}
              className="bg-white border border-[#E5E5E5] p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-[#C62828]/10 mb-5 group-hover:bg-[#C62828] transition-colors duration-300">
                <Icon className="w-6 h-6 text-[#C62828] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-['Barlow_Condensed'] text-xl font-bold uppercase tracking-tight text-[#1A1A1A] mb-2">
                {service.title}
              </h3>
              <p className="text-[#52525B] text-sm leading-relaxed">{service.benefit}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Services;
