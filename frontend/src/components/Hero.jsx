import React from 'react';
import { Star, MapPin, Wrench } from 'lucide-react';

/* <!-- REPLACE with real client photo before launch --> */
const HERO_IMG =
  'https://images.pexels.com/photos/8985517/pexels-photo-8985517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';

const Hero = ({ nexoWa }) => {
  const scrollToPricing = (e) => {
    e.preventDefault();
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      data-testid="hero-section"
      className="relative min-h-screen flex items-center bg-[#212121]"
      style={{
        backgroundImage: `url(${HERO_IMG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#212121]/80" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-20 w-full">
        <div className="max-w-3xl">
          {/* Trust badge */}
          <div className="anim-fade-up inline-flex items-center gap-2 bg-[#C62828]/20 border border-[#C62828]/50 px-4 py-1.5 mb-6">
            <Star className="w-4 h-4 text-[#C62828] fill-[#C62828]" />
            <span className="text-white text-xs font-bold uppercase tracking-widest">
              4.3 en Google · 44 reseñas
            </span>
          </div>

          {/* H1 */}
          <h1
            className="anim-fade-up delay-1 font-['Barlow_Condensed'] text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-[0.95] text-white mb-3"
          >
            La Firma Automotriz
            <span className="block text-[#C62828]">Curridabat</span>
          </h1>

          {/* Headline */}
          <p className="anim-fade-up delay-2 font-['Barlow_Condensed'] text-2xl sm:text-3xl font-bold uppercase text-gray-200 mb-3 tracking-tight leading-tight">
            Taller Automotriz de Confianza en Curridabat
          </p>

          {/* Subheadline */}
          <p className="anim-fade-up delay-3 text-base sm:text-lg text-gray-300 leading-relaxed mb-8 max-w-xl">
            Enderezado, pintura, mecánica, tapicería y más — todo en un solo lugar.
          </p>

          {/* Trust bullets */}
          <div className="anim-fade-up delay-3 flex flex-wrap gap-5 mb-10">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-[#C62828] fill-[#C62828]" />
              <span className="text-white text-sm font-semibold">4.3 en Google</span>
            </div>
            <div className="flex items-center gap-2">
              <Wrench className="w-4 h-4 text-[#C62828]" />
              <span className="text-white text-sm font-semibold">Servicio integral</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#C62828]" />
              <span className="text-white text-sm font-semibold">Curridabat, San José</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="anim-fade-up delay-4 flex flex-col sm:flex-row gap-4">
            <a
              href={nexoWa}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="hero-primary-cta"
              className="inline-flex items-center justify-center gap-2 bg-[#C62828] hover:bg-[#B71C1C] text-white font-bold uppercase tracking-widest px-8 py-4 text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-red-900/40"
            >
              <WhatsAppIcon />
              Escríbenos por WhatsApp
            </a>
            <a
              href="#pricing"
              onClick={scrollToPricing}
              data-testid="hero-secondary-cta"
              className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-[#212121] font-bold uppercase tracking-widest px-8 py-4 text-sm transition-all duration-300"
            >
              Ver precios
            </a>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F5F5F5] to-transparent" />
    </section>
  );
};

const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-4 h-4"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export default Hero;
