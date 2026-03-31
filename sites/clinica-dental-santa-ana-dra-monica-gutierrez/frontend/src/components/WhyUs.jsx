import { Star, Award, Clock, MessageCircle } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const signals = [
  {
    icon: Star,
    label: '★ 5.0 en Google',
    desc:  '34 reseñas de pacientes satisfechos',
    color: 'bg-amber-50',
    iconColor: 'text-amber-500',
    fill: true,
  },
  {
    icon: Award,
    label: '20+ Años de Experiencia',
    desc:  'Más de dos décadas atendiendo a familias en Santa Ana',
    color: 'bg-[#EBF3FB]',
    iconColor: 'text-[#1B6CA8]',
  },
  {
    icon: Clock,
    label: 'Lunes a Sábado',
    desc:  'Horario extendido hasta las 8:00 PM para su comodidad',
    color: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
  },
  {
    icon: MessageCircle,
    label: 'Respuesta por WhatsApp',
    desc:  'Comuníquese con nosotros de forma rápida y sencilla',
    color: 'bg-green-50',
    iconColor: 'text-green-600',
  },
];

export default function WhyUs() {
  const [headRef, headVisible] = useScrollReveal();

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div
          ref={headRef}
          className={`text-center mb-14 fade-up ${headVisible ? 'visible' : ''}`}
        >
          <span className="inline-block text-[#1B6CA8] font-semibold text-sm uppercase tracking-widest mb-3">
            ¿Por qué elegirnos?
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#0F172A]"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Confianza respaldada por resultados
          </h2>
          <p className="mt-4 text-[#475569] text-lg max-w-xl mx-auto">
            Miles de sonrisas en la zona oeste de San José nos respaldan.
          </p>
        </div>

        {/* Signals grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {signals.map((s, i) => (
            <SignalCard key={i} signal={s} delay={i} />
          ))}
        </div>

        {/* Bottom service area banner */}
        <div className="mt-16 rounded-3xl bg-[#1B6CA8] px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6 text-white">
          <div>
            <p className="text-sm font-semibold text-blue-200 uppercase tracking-widest mb-1">Área de Atención</p>
            <p className="text-xl font-bold" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Santa Ana, Pozos, Ciudad Colón y zona oeste de San José
            </p>
          </div>
          <div className="flex-shrink-0 bg-white/15 rounded-2xl px-5 py-3 text-center">
            <p className="text-2xl font-bold" style={{ fontFamily: 'Outfit, sans-serif' }}>CC Avalon Plaza</p>
            <p className="text-sm text-blue-200">Local 5A · Santa Ana</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SignalCard({ signal, delay }) {
  const [ref, visible] = useScrollReveal();
  const delayClass = `delay-${Math.min(delay * 100 + 100, 700)}`;
  return (
    <div
      ref={ref}
      data-testid={`trust-signal-${delay + 1}`}
      className={`flex flex-col items-center text-center p-7 rounded-2xl border border-slate-100 bg-[#FDFBF7]
        hover:shadow-md transition-all duration-300 fade-up ${delayClass} ${visible ? 'visible' : ''}`}
    >
      <div className={`w-14 h-14 rounded-2xl ${signal.color} flex items-center justify-center mb-4`}>
        <signal.icon className={`w-7 h-7 ${signal.iconColor} ${signal.fill ? 'fill-amber-400' : ''}`} />
      </div>
      <h3
        className="font-bold text-[#0F172A] text-base mb-2"
        style={{ fontFamily: 'Outfit, sans-serif' }}
      >
        {signal.label}
      </h3>
      <p className="text-[#475569] text-sm leading-relaxed">{signal.desc}</p>
    </div>
  );
}
