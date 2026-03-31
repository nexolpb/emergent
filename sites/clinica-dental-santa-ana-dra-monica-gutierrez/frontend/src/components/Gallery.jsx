import { useScrollReveal } from '../hooks/useScrollReveal';

/* <!-- REPLACE cada imagen con foto real de la clínica antes del lanzamiento --> */
const photos = [
  {
    src: 'https://images.pexels.com/photos/4269276/pexels-photo-4269276.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Interior moderno de la Clínica Dental Santa Ana',
    span: 'sm:col-span-2',
  },
  {
    src: 'https://images.pexels.com/photos/9957423/pexels-photo-9957423.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Sillón dental de alta tecnología en la clínica',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/3845843/pexels-photo-3845843.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Paciente satisfecha en Clínica Dental Santa Ana',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/4687341/pexels-photo-4687341.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Doctora Mónica Gutiérrez atendiendo a un paciente',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/3845727/pexels-photo-3845727.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Ambiente cálido y profesional de la clínica',
    span: '',
  },
];

export default function Gallery() {
  const [headRef, headVisible] = useScrollReveal();

  return (
    <section id="galeria" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div
          ref={headRef}
          className={`text-center mb-12 fade-up ${headVisible ? 'visible' : ''}`}
        >
          <span className="inline-block text-[#1B6CA8] font-semibold text-sm uppercase tracking-widest mb-3">
            Nuestra Clínica
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#0F172A]"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Un espacio diseñado para su comodidad
          </h2>
          <p className="mt-4 text-[#475569] text-lg max-w-lg mx-auto">
            Instalaciones modernas y ambiente cálido en CC Avalon Plaza, Santa Ana.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {photos.map((photo, i) => (
            <GalleryItem key={i} photo={photo} delay={i} />
          ))}
        </div>

        <p className="text-center text-xs text-[#94A3B8] mt-6">
          {/* Imágenes de muestra. REPLACE con fotos reales de la clínica antes del lanzamiento. */}
          Imágenes referenciales. Próximamente fotos reales de la clínica.
        </p>
      </div>
    </section>
  );
}

function GalleryItem({ photo, delay }) {
  const [ref, visible] = useScrollReveal();
  const delayClass = `delay-${Math.min(delay * 100, 500)}`;
  return (
    <div
      ref={ref}
      data-testid={`gallery-img-${delay + 1}`}
      className={`${photo.span} rounded-2xl overflow-hidden shadow-md hover:shadow-xl
        hover:scale-[1.02] transition-all duration-400 cursor-default
        fade-up ${delayClass} ${visible ? 'visible' : ''}`}
    >
      <img
        src={photo.src}
        alt={photo.alt}
        className="w-full h-56 sm:h-64 object-cover"
        loading="lazy"
      />
    </div>
  );
}
