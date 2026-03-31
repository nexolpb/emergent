import { Star, Clock, Award } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { NEXO_WA } from '../constants';

const WaIcon = () => (
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const trustBullets = [
  { Icon: Star,  text: '★ 5.0 en Google — 34 pacientes satisfechos', fill: true },
  { Icon: Award, text: 'Más de 20 años de experiencia' },
  { Icon: Clock, text: 'Atención Lunes a Sábado hasta las 8 PM' },
];

export default function Hero() {
  const [textRef, textVisible] = useScrollReveal(0.05);
  const [imgRef, imgVisible]   = useScrollReveal(0.05);

  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] flex items-center bg-white pt-16 md:pt-20 overflow-hidden"
    >
      {/* Decorative background blob */}
      <div
        className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-[#E8F0F7]/30 md:rounded-l-[100px] -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── Left: Content ── */}
          <div
            ref={textRef}
            className={`space-y-7 fade-up ${textVisible ? 'visible' : ''}`}
          >
            {/* Tag badge */}
            <div className="inline-flex items-center gap-2 bg-[#E8F0F7] text-[#1B6CA8] rounded-full px-4 py-2 text-sm font-semibold">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              5.0 en Google — 34 pacientes satisfechos
            </div>

            {/* H1 */}
            <div>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0F172A] leading-tight"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                Clínica Dental<br />
                <span className="text-[#1B6CA8]">Santa Ana</span>
              </h1>
              <p
                className="mt-2 text-xl sm:text-2xl font-semibold text-[#475569]"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                Dra. Mónica Gutiérrez Pereira
              </p>
            </div>

            {/* Subheadline */}
            <p className="text-lg text-[#475569] leading-relaxed max-w-lg">
              20 años cuidando sonrisas en Santa Ana. Su salud dental, en las mejores manos.
            </p>

            {/* Trust bullets */}
            <ul className="space-y-3" aria-label="Razones de confianza">
              {trustBullets.map(({ Icon, text, fill }, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#E8F0F7] flex items-center justify-center flex-shrink-0">
                    <Icon className={`w-3.5 h-3.5 text-[#1B6CA8] ${fill ? 'fill-amber-400 text-amber-400' : ''}`} />
                  </span>
                  <span className="text-[#0F172A] font-medium text-sm sm:text-base">{text}</span>
                </li>
              ))}
            </ul>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href={NEXO_WA}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="hero-whatsapp-btn"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold rounded-full px-8 py-4 text-base transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <WaIcon />
                Escríbenos por WhatsApp
              </a>
              <a
                href="#pricing"
                data-testid="hero-pricing-btn"
                className="inline-flex items-center justify-center border-2 border-[#1B6CA8] text-[#1B6CA8] hover:bg-[#1B6CA8] hover:text-white font-bold rounded-full px-8 py-4 text-base text-center transition-all duration-300"
              >
                Ver precios
              </a>
            </div>
          </div>

          {/* ── Right: Image ── */}
          <div
            ref={imgRef}
            className={`relative fade-up delay-300 ${imgVisible ? 'visible' : ''}`}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              {/* <!-- REPLACE con foto real de la clínica antes del lanzamiento --> */}
              <img
                src="https://images.pexels.com/photos/3845843/pexels-photo-3845843.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Dentista con paciente en Clínica Dental Santa Ana"
                className="w-full h-[420px] sm:h-[500px] object-cover hero-img"
                loading="eager"
              />
              {/* subtle gradient on image bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" aria-hidden="true" />
            </div>

            {/* Floating rating badge */}
            <div
              className="absolute -bottom-5 -left-4 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 border border-slate-100"
              data-testid="hero-rating-badge"
            >
              <div className="w-11 h-11 rounded-full bg-amber-50 flex items-center justify-center">
                <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
              </div>
              <div>
                <div className="font-bold text-[#0F172A] text-xl leading-none">5.0</div>
                <div className="text-[#475569] text-xs mt-0.5">34 reseñas en Google</div>
              </div>
            </div>

            {/* Floating experience badge */}
            <div
              className="absolute -top-4 -right-2 bg-[#1B6CA8] text-white rounded-2xl px-5 py-3 shadow-xl"
              data-testid="hero-experience-badge"
            >
              <div className="font-bold text-2xl text-center leading-none" style={{ fontFamily: 'Outfit, sans-serif' }}>20+</div>
              <div className="text-xs text-center text-blue-200 mt-0.5">años de exp.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
