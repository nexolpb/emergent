import {
  Stethoscope, Zap, Sparkles, Star, Droplets,
  ClipboardList, Users, ShieldCheck
} from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const services = [
  {
    id: 1,
    icon: Stethoscope,
    title: 'Odontología General',
    desc:  'Cuidado completo de su salud bucal con diagnóstico preventivo y tratamientos integrales.',
  },
  {
    id: 2,
    icon: Zap,
    title: 'Implantes Dentales',
    desc:  'Recupere su sonrisa de forma permanente con implantes de alta durabilidad.',
  },
  {
    id: 3,
    icon: Sparkles,
    title: 'Blanqueamiento Profesional',
    desc:  'Resultados visibles desde la primera sesión. Blancura natural y duradera.',
  },
  {
    id: 4,
    icon: Star,
    title: 'Estética Dental',
    desc:  'Diseño de sonrisa personalizado que realza su belleza natural.',
  },
  {
    id: 5,
    icon: Droplets,
    title: 'Limpieza Dental',
    desc:  'Profilaxis y prevención para toda la familia. Higiene a fondo.',
  },
  {
    id: 6,
    icon: ClipboardList,
    title: 'Consulta y Diagnóstico',
    desc:  'Evaluación completa con explicación detallada de cada paso.',
  },
  {
    id: 7,
    icon: Users,
    title: 'Atención Familiar',
    desc:  'Desde niños hasta adultos mayores. Un espacio seguro para toda la familia.',
  },
  {
    id: 8,
    icon: ShieldCheck,
    title: 'Tratamiento de Encías',
    desc:  'Salud periodontal para una sonrisa duradera y saludable.',
  },
];

export default function Services() {
  const [headRef, headVisible] = useScrollReveal();

  return (
    <section id="servicios" className="py-20 md:py-28 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div
          ref={headRef}
          className={`text-center mb-14 fade-up ${headVisible ? 'visible' : ''}`}
        >
          <span className="inline-block text-[#1B6CA8] font-semibold text-sm uppercase tracking-widest mb-3">
            Nuestros Tratamientos
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#0F172A]"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Todo lo que su sonrisa necesita
          </h2>
          <p className="mt-4 text-[#475569] text-lg max-w-xl mx-auto">
            Ofrecemos atención dental integral para toda la familia en Santa Ana.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((svc, i) => (
            <ServiceCard key={svc.id} svc={svc} delay={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ svc, delay }) {
  const [ref, visible] = useScrollReveal();
  const delayClass = `delay-${Math.min(delay * 100, 700)}`;

  return (
    <div
      ref={ref}
      data-testid={`service-card-${svc.id}`}
      className={`service-card bg-white p-7 rounded-2xl border border-slate-100 shadow-sm
        hover:shadow-[0_8px_30px_rgba(27,108,168,0.10)] hover:-translate-y-1 transition-all duration-300
        cursor-default flex flex-col gap-4 fade-up ${delayClass} ${visible ? 'visible' : ''}`}
    >
      <div className="icon-ring">
        <svc.icon className="w-6 h-6" />
      </div>
      <div>
        <h3
          className="font-semibold text-[#0F172A] text-base mb-1.5"
          style={{ fontFamily: 'Outfit, sans-serif' }}
        >
          {svc.title}
        </h3>
        <p className="text-[#475569] text-sm leading-relaxed">{svc.desc}</p>
      </div>
    </div>
  );
}
