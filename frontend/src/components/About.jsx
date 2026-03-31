import { Monitor, Tv, Award, Heart } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { NEXO_WA } from '../constants';

const WaIcon = () => (
  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const highlights = [
  { icon: Monitor, text: 'Monitor en tiempo real durante su tratamiento' },
  { icon: Tv,      text: 'Entretenimiento con lentes especiales de TV' },
  { icon: Award,   text: '20+ años de experiencia en Santa Ana' },
  { icon: Heart,   text: 'Atención personalizada y cálida' },
];

export default function About() {
  const [imgRef,  imgVisible]  = useScrollReveal();
  const [textRef, textVisible] = useScrollReveal();

  return (
    <section id="nosotros" className="py-20 md:py-28 bg-[#FDFBF7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Image side ── */}
          <div
            ref={imgRef}
            className={`relative fade-up ${imgVisible ? 'visible' : ''}`}
          >
            <div className="relative">
              {/* Decorative block behind image */}
              <div
                className="absolute -bottom-5 -right-5 w-full h-full rounded-3xl bg-[#1B6CA8]/10"
                aria-hidden="true"
              />
              <div className="relative rounded-3xl overflow-hidden shadow-xl">
                {/* <!-- REPLACE con foto real de la Dra. Mónica antes del lanzamiento --> */}
                <img
                  src="https://images.pexels.com/photos/4687341/pexels-photo-4687341.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Dra. Mónica Gutiérrez Pereira — Clínica Dental Santa Ana"
                  className="w-full h-[480px] object-cover object-top"
                  loading="lazy"
                />
              </div>

              {/* Floating credential badge */}
              <div className="absolute -top-4 -left-4 bg-white rounded-2xl px-4 py-3 shadow-lg border border-slate-100">
                <p className="text-xs text-[#475569] font-medium">Colegio de Cirujanos</p>
                <p className="text-sm text-[#1B6CA8] font-bold">Dentistas de Costa Rica</p>
              </div>
            </div>
          </div>

          {/* ── Text side ── */}
          <div
            ref={textRef}
            className={`space-y-7 fade-up delay-200 ${textVisible ? 'visible' : ''}`}
          >
            <div>
              <span className="inline-block text-[#1B6CA8] font-semibold text-sm uppercase tracking-widest mb-3">
                Nuestra Doctora
              </span>
              <h2
                className="text-3xl sm:text-4xl font-bold text-[#0F172A] leading-tight"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                Dra. Mónica Gutiérrez Pereira
              </h2>
            </div>

            <p className="text-[#475569] text-base md:text-lg leading-relaxed">
              Con más de <strong className="text-[#0F172A]">20 años de experiencia</strong> en Santa Ana,
              la Dra. Mónica Gutiérrez se ha ganado la confianza de cientos de familias en la zona
              oeste de San José. Su enfoque es sencillo: escuchar al paciente, explicar cada paso
              con claridad y brindar un trato cálido y personalizado.
            </p>

            {/* Technology differentiator — confirmed callout */}
            <div className="bg-white border-l-4 border-[#1B6CA8] rounded-r-2xl px-6 py-5 shadow-sm">
              <p className="text-sm font-semibold text-[#1B6CA8] uppercase tracking-wide mb-2">
                Transparencia en cada paso
              </p>
              <p className="text-[#0F172A] font-medium leading-relaxed">
                "Durante su tratamiento, usted puede ver en tiempo real cada paso del
                procedimiento en nuestro monitor. Además, disfrute de entretenimiento con
                lentes especiales de TV mientras le atendemos."
              </p>
              <p className="text-sm text-[#475569] mt-2">
                Confianza y comodidad desde el primer momento.
              </p>
            </div>

            {/* Highlights */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3" aria-label="Ventajas de la clínica">
              {highlights.map(({ icon: Icon, text }, i) => (
                <li key={i} className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-slate-100 shadow-sm">
                  <span className="w-8 h-8 rounded-lg bg-[#EBF3FB] flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-[#1B6CA8]" />
                  </span>
                  <span className="text-[#0F172A] text-sm font-medium">{text}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href={NEXO_WA}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="about-cta-btn"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold rounded-full px-8 py-4 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <WaIcon />
              Agendar consulta
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
