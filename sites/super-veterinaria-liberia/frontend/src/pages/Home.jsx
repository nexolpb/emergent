import React, { useState, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Mail, 
  Facebook, 
  MessageCircle,
  Stethoscope,
  ShoppingBag,
  Sparkles,
  Check,
  Star,
  Leaf,
  Heart,
  Zap,
  ChevronLeft,
  ChevronRight,
  X
} from 'lucide-react';

const translations = {
  es: {
    // Header
    langToggle: 'EN',
    brandName: 'Clínica Veterinaria Dra. Carvajal',
    brandSub: 'Regeneravet',
    
    // Hero
    heroHeadline: 'Más de 6 años cuidando a sus mascotas en Tamarindo',
    heroSubheadline: 'Medicina veterinaria convencional e integrativa. Cirugía, ozonoterapia, terapias regenerativas y tienda de mascotas.',
    trustBullet1: '4.0★ en Google',
    trustBullet2: '6+ años en Tamarindo',
    trustBullet3: 'Especialistas en medicina regenerativa',
    ctaPrimary: 'Solicitar información del sitio',
    ctaSecondary: 'Ver precios',
    
    // Services
    servicesHeading: 'Nuestros Servicios',
    servicesCat1: 'Medicina General',
    servicesCat2: 'Medicina Regenerativa – Regeneravet',
    servicesCat3: 'Tienda',
    service1: 'Consultas generales y preventivas',
    service2: 'Cirugía',
    service3: 'Ozonoterapia',
    service4: 'Terapia con Implantes de Oro (dolor crónico)',
    service5: 'Terapia de Autosanguis',
    service6: 'Terapia Neural y Medicina Biorreguladora',
    service7: 'Tienda de mascotas',
    
    // Gallery
    galleryHeading: 'Galería',
    
    // Trust
    trustHeading: 'Confianza y experiencia en Tamarindo',
    trustNarrative: 'Clínica Veterinaria Dra. Carvajal lleva más de 6 años brindando atención integral a mascotas en Villarreal y Tamarindo. Bajo la marca Regeneravet, ofrecemos tratamientos innovadores como ozonoterapia, terapia con implantes de oro y medicina biorreguladora. La Dra. Carvajal se especializa en animales de compañía, fauna silvestre y animales marinos, manteniéndose actualizada mediante congresos veterinarios en México.',
    trustBadge1: '6+ años de experiencia',
    trustBadge2: '4.0★ en Google',
    trustBadge3: '100% recomendado en Facebook',
    trustBadge4: 'Educación continua internacional',
    trustBadge5: 'Especialista en fauna silvestre y marina',
    
    // Location
    locationHeading: '¿Dónde estamos?',
    address: 'De Farmacia Fischel Villarreal 100–200 mtrs Norte, carretera hacia Huacas, Villarreal 50310, Guanacaste',
    hoursTitle: 'Horario de atención',
    hoursNote: 'Consulte disponibilidad',
    directionsHelper: 'Cómo llegar',
    
    // Contact
    contactHeading: 'Contacto',
    contactIntro: 'Visítenos en Villarreal o contáctenos para consultas y productos veterinarios.',
    phone: 'Teléfono',
    whatsappBusiness: 'WhatsApp',
    email: 'Correo',
    social: 'Redes sociales',
    
    // Pricing
    pricingHeading: 'Sitios web que generan clientes — desde $349',
    pricingText: 'Esta es una vista previa profesional de Nexo Sites. Ofrecemos diseño web personalizado, revisiones ilimitadas y publicación completa para tu negocio.',
    pricingCta: 'Solicitar información',
    
    // Footer
    footerTagline: 'Innovando el cuidado veterinario en el corazón de Tamarindo',
    footerRights: '© 2026 Clínica Veterinaria Dra. Carvajal. Todos los derechos reservados.',
    footerPreview: 'Vista previa creada por Nexo Sites'
  },
  en: {
    // Header
    langToggle: 'ES',
    brandName: 'Clínica Veterinaria Dra. Carvajal',
    brandSub: 'Regeneravet',
    
    // Hero
    heroHeadline: 'Over 6 years caring for your pets in Tamarindo',
    heroSubheadline: 'Conventional and integrative veterinary medicine. Surgery, ozone therapy, regenerative treatments, and pet shop.',
    trustBullet1: '4.0★ on Google',
    trustBullet2: '6+ years in Tamarindo',
    trustBullet3: 'Regenerative medicine specialists',
    ctaPrimary: 'Request site information',
    ctaSecondary: 'See pricing',
    
    // Services
    servicesHeading: 'Our Services',
    servicesCat1: 'General Medicine',
    servicesCat2: 'Regenerative Medicine – Regeneravet',
    servicesCat3: 'Shop',
    service1: 'General & preventive consultations',
    service2: 'Surgery',
    service3: 'Ozone therapy',
    service4: 'Gold implant therapy (chronic pain)',
    service5: 'Autohemotherapy',
    service6: 'Neural therapy & bioregulatory medicine',
    service7: 'Pet shop',
    
    // Gallery
    galleryHeading: 'Gallery',
    
    // Trust
    trustHeading: 'Trust and experience in Tamarindo',
    trustNarrative: 'Clínica Veterinaria Dra. Carvajal has been providing comprehensive pet care in Villarreal and Tamarindo for over 6 years. Under the Regeneravet brand, we offer innovative treatments like ozone therapy, gold implant therapy, and bioregulatory medicine. Dr. Carvajal specializes in companion animals, wildlife, and marine animals, staying current through veterinary congresses in Mexico.',
    trustBadge1: '6+ years of experience',
    trustBadge2: '4.0★ on Google',
    trustBadge3: '100% recommended on Facebook',
    trustBadge4: 'Continuing international education',
    trustBadge5: 'Wildlife and marine animal specialist',
    
    // Location
    locationHeading: 'Find us',
    address: '100–200 meters north of Farmacia Fischel Villarreal, road to Huacas, Villarreal 50310, Guanacaste',
    hoursTitle: 'Business Hours',
    hoursNote: 'Check availability',
    directionsHelper: 'Get directions',
    
    // Contact
    contactHeading: 'Contact',
    contactIntro: 'Visit us in Villarreal or reach out for consultations and veterinary products.',
    phone: 'Phone',
    whatsappBusiness: 'WhatsApp',
    email: 'Email',
    social: 'Social media',
    
    // Pricing
    pricingHeading: 'Websites that bring customers — starting at $349',
    pricingText: 'This is a professional preview by Nexo Sites. We offer custom web design, unlimited revisions, and full publishing for your business.',
    pricingCta: 'Request information',
    
    // Footer
    footerTagline: 'Innovative veterinary care in the heart of Tamarindo',
    footerRights: '© 2026 Clínica Veterinaria Dra. Carvajal. All rights reserved.',
    footerPreview: 'Preview created by Nexo Sites'
  }
};

// NEXO SITES SALES WHATSAPP - PRIMARY CTA
const SALES_WHATSAPP = 'https://wa.me/50689939071?text=Hola%2C%20vi%20la%20vista%20previa%20del%20sitio%20para%20Cl%C3%ADnica%20Veterinaria%20Dra.%20Carvajal%20(Villarreal%2C%20Tamarindo).%20%C2%BFMe%20la%20puede%20compartir%20y%20decirme%20el%20precio%20para%20publicarla%3F';

// Gallery images
const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1770836037793-95bdbf190f71?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzB8MHwxfHNlYXJjaHwxfHx2ZXRlcmluYXJpYW4lMjBleGFtaW5pbmclMjBwZXQlMjBkb2clMjBjbGluaWN8ZW58MHx8fHwxNzczNzc0ODM4fDA&ixlib=rb-4.1.0&q=85',
    alt: { es: 'Veterinaria examinando mascota', en: 'Veterinarian examining pet' }
  },
  {
    url: 'https://images.unsplash.com/photo-1674224624366-b8c6cf5ac3d2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NjV8MHwxfHNlYXJjaHwyfHxnb2xkZW4lMjByZXRyaWV2ZXIlMjBoYXBweSUyMGRvZyUyMHBvcnRyYWl0fGVufDB8fHx8MTc3Mzc3NDgzNnww&ixlib=rb-4.1.0&q=85',
    alt: { es: 'Perro feliz', en: 'Happy dog' }
  },
  {
    url: 'https://images.unsplash.com/photo-1760277554649-4dc8d92b04c2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MjJ8MHwxfHNlYXJjaHwzfHxjYXQlMjBwZXQlMjBwb3J0cmFpdCUyMGN1dGUlMjBraXR0ZW58ZW58MHx8fHwxNzczNzc0ODM3fDA&ixlib=rb-4.1.0&q=85',
    alt: { es: 'Gatito curioso', en: 'Curious kitten' }
  },
  {
    url: 'https://images.unsplash.com/photo-1770836037289-e00e5f351d11?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzB8MHwxfHNlYXJjaHwyfHx2ZXRlcmluYXJpYW4lMjBleGFtaW5pbmclMjBwZXQlMjBkb2clMjBjbGluaWN8ZW58MHx8fHwxNzczNzc0ODM4fDA&ixlib=rb-4.1.0&q=85',
    alt: { es: 'Consulta veterinaria', en: 'Veterinary consultation' }
  },
  {
    url: 'https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzV8MHwxfHNlYXJjaHwyfHx2ZXRlcmluYXJ5JTIwY2xpbmljJTIwZG9nJTIwY2F0JTIwZnJpZW5kbHklMjBwZXQlMjBjYXJlfGVufDB8fHx8MTc3Mzc3NDgzNXww&ixlib=rb-4.1.0&q=85',
    alt: { es: 'Perro y gato juntos', en: 'Dog and cat together' }
  },
  {
    url: 'https://images.unsplash.com/photo-1609348490161-a879e4327ae9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NjV8MHwxfHNlYXJjaHwxfHxnb2xkZW4lMjByZXRyaWV2ZXIlMjBoYXBweSUyMGRvZyUyMHBvcnRyYWl0fGVufDB8fHx8MTc3Mzc3NDgzNnww&ixlib=rb-4.1.0&q=85',
    alt: { es: 'Mascota feliz al aire libre', en: 'Happy pet outdoors' }
  }
];

export default function Home() {
  const [lang, setLang] = useState('es');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const t = translations[lang];

  useEffect(() => {
    const savedLang = localStorage.getItem('lang');
    if (savedLang && (savedLang === 'es' || savedLang === 'en')) {
      setLang(savedLang);
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = lang === 'es' ? 'en' : 'es';
    setLang(newLang);
    localStorage.setItem('lang', newLang);
  };

  const scrollToPricing = (e) => {
    e.preventDefault();
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const servicesGeneral = [
    { icon: <Stethoscope className="w-6 h-6" />, text: t.service1 },
    { icon: <Heart className="w-6 h-6" />, text: t.service2 }
  ];

  const servicesRegenerative = [
    { icon: <Sparkles className="w-6 h-6" />, text: t.service3 },
    { icon: <Zap className="w-6 h-6" />, text: t.service4 },
    { icon: <Leaf className="w-6 h-6" />, text: t.service5 },
    { icon: <Sparkles className="w-6 h-6" />, text: t.service6 }
  ];

  const servicesShop = [
    { icon: <ShoppingBag className="w-6 h-6" />, text: t.service7 }
  ];

  return (
    <div className="min-h-screen bg-warmWhite font-nunito">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-40">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald rounded-full flex items-center justify-center">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-bold text-emerald leading-tight">{t.brandName}</span>
              <span className="text-xs text-amber font-semibold tracking-wider">{t.brandSub}</span>
            </div>
          </div>
          <Button 
            onClick={toggleLanguage}
            variant="outline"
            data-testid="lang-toggle-btn"
            className="border-emerald text-emerald hover:bg-emerald hover:text-white transition-all font-semibold"
          >
            {t.langToggle}
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section data-testid="hero-section" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden min-h-[85vh] flex items-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(5, 102, 75, 0.9), rgba(5, 102, 75, 0.75)), url('https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzV8MHwxfHNlYXJjaHwyfHx2ZXRlcmluYXJ5JTIwY2xpbmljJTIwZG9nJTIwY2F0JTIwZnJpZW5kbHklMjBwZXQlMjBjYXJlfGVufDB8fHx8MTc3Mzc3NDgzNXww&ixlib=rb-4.1.0&q=85')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {t.heroHeadline}
            </h1>
            <p className="text-xl md:text-2xl text-white/95 mb-8 leading-relaxed">
              {t.heroSubheadline}
            </p>
            
            {/* Trust bullets */}
            <div className="flex flex-wrap gap-3 mb-10">
              {[t.trustBullet1, t.trustBullet2, t.trustBullet3].map((bullet, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2.5 rounded-full border border-white/20">
                  <Check className="w-5 h-5 text-amber" />
                  <span className="text-white font-medium text-sm md:text-base">{bullet}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild
                size="lg"
                data-testid="hero-cta-primary"
                className="bg-amber hover:bg-amber/90 text-emeraldDark font-bold text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all hover:scale-105 rounded-full"
              >
                <a href={SALES_WHATSAPP} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {t.ctaPrimary}
                </a>
              </Button>
              <Button 
                onClick={scrollToPricing}
                size="lg"
                variant="outline"
                data-testid="hero-cta-secondary"
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-emerald font-bold text-lg px-8 py-6 transition-all rounded-full"
              >
                {t.ctaSecondary}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section data-testid="services-section" className="py-20 md:py-28 bg-warmWhite">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-emerald mb-16">
            {t.servicesHeading}
          </h2>

          {/* General Medicine */}
          <div className="mb-14">
            <h3 className="text-2xl font-bold text-emerald mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald/10 rounded-full flex items-center justify-center">
                <Stethoscope className="w-6 h-6 text-emerald" />
              </div>
              {t.servicesCat1}
            </h3>
            <div className="grid md:grid-cols-2 gap-5">
              {servicesGeneral.map((service, i) => (
                <Card key={i} className="p-6 hover:shadow-lg transition-all bg-white border-0 shadow-md hover:-translate-y-1">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-emerald/10 rounded-xl flex items-center justify-center text-emerald flex-shrink-0">
                      {service.icon}
                    </div>
                    <p className="text-gray-700 font-medium text-lg">{service.text}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Regenerative Medicine */}
          <div className="mb-14">
            <h3 className="text-2xl font-bold text-emerald mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-amber/20 rounded-full flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-amber" />
              </div>
              {t.servicesCat2}
            </h3>
            <div className="grid md:grid-cols-2 gap-5">
              {servicesRegenerative.map((service, i) => (
                <Card key={i} className="p-6 hover:shadow-lg transition-all bg-white border-0 shadow-md hover:-translate-y-1 border-l-4 border-l-amber">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-amber/15 rounded-xl flex items-center justify-center text-amber flex-shrink-0">
                      {service.icon}
                    </div>
                    <p className="text-gray-700 font-medium text-lg">{service.text}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-2xl font-bold text-emerald mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald/10 rounded-full flex items-center justify-center">
                <ShoppingBag className="w-6 h-6 text-emerald" />
              </div>
              {t.servicesCat3}
            </h3>
            <div className="grid md:grid-cols-2 gap-5">
              {servicesShop.map((service, i) => (
                <Card key={i} className="p-6 hover:shadow-lg transition-all bg-white border-0 shadow-md hover:-translate-y-1">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-emerald/10 rounded-xl flex items-center justify-center text-emerald flex-shrink-0">
                      {service.icon}
                    </div>
                    <p className="text-gray-700 font-medium text-lg">{service.text}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section data-testid="gallery-section" className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-emerald mb-12">
            {t.galleryHeading}
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group shadow-md hover:shadow-xl transition-all"
                onClick={() => openLightbox(index)}
                data-testid={`gallery-image-${index}`}
              >
                <img 
                  src={image.url} 
                  alt={image.alt[lang]}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-emerald/0 group-hover:bg-emerald/30 transition-all duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Sparkles className="w-6 h-6 text-emerald" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
          data-testid="lightbox-overlay"
        >
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
            data-testid="lightbox-close-btn"
          >
            <X className="w-8 h-8" />
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 md:left-8 text-white/80 hover:text-white transition-colors"
            data-testid="lightbox-prev-btn"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <img 
            src={galleryImages[lightboxIndex].url}
            alt={galleryImages[lightboxIndex].alt[lang]}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <button 
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 md:right-8 text-white/80 hover:text-white transition-colors"
            data-testid="lightbox-next-btn"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
        </div>
      )}

      {/* Trust Section */}
      <section data-testid="trust-section" className="py-20 md:py-28 bg-warmWhite">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-emerald mb-14">
            {t.trustHeading}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            {/* Narrative */}
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {t.trustNarrative}
              </p>
              
              {/* Real ratings highlight */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-xl shadow-md">
                  <Star className="w-6 h-6 text-amber fill-amber" />
                  <span className="font-bold text-emeraldDark">4.0/5</span>
                  <span className="text-gray-600 text-sm">Google</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-xl shadow-md">
                  <Check className="w-6 h-6 text-emerald" />
                  <span className="font-bold text-emeraldDark">100%</span>
                  <span className="text-gray-600 text-sm">Facebook</span>
                </div>
              </div>
            </div>

            {/* Trust badges */}
            <div className="space-y-4">
              {[t.trustBadge1, t.trustBadge2, t.trustBadge3, t.trustBadge4, t.trustBadge5].map((badge, i) => (
                <div key={i} className="flex items-center gap-4 p-5 bg-white rounded-xl shadow-md border-l-4 border-emerald hover:shadow-lg transition-all">
                  <div className="w-10 h-10 bg-emerald/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-emerald" />
                  </div>
                  <span className="text-gray-800 font-medium">{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section data-testid="location-section" className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-emerald mb-14">
            {t.locationHeading}
          </h2>

          <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-xl h-80 md:h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.123456789!2d-85.8!3d10.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRegeneravet%20Dra%20Karla%20Carvajal!5e0!3m2!1ses!2scr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Clínica Veterinaria Dra. Carvajal Location"
              />
            </div>

            {/* Info */}
            <div className="space-y-6">
              <div className="bg-warmWhite rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-emerald" />
                  </div>
                  <div>
                    <p className="text-gray-700 leading-relaxed">{t.address}</p>
                  </div>
                </div>
              </div>

              <div className="bg-warmWhite rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber/15 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-amber" />
                  </div>
                  <div>
                    <h3 className="font-bold text-emerald mb-2">{t.hoursTitle}</h3>
                    <p className="text-gray-600 italic">{t.hoursNote}</p>
                  </div>
                </div>
              </div>

              <Button 
                asChild
                variant="outline"
                className="w-full border-2 border-emerald text-emerald hover:bg-emerald hover:text-white font-semibold py-6 rounded-xl transition-all"
                data-testid="directions-btn"
              >
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Regeneravet+Dra+Karla+Carvajal+Villarreal+Costa+Rica" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  {t.directionsHelper}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section data-testid="contact-section" className="py-20 md:py-28 bg-warmWhite">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-emerald mb-4">
            {t.contactHeading}
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
            {t.contactIntro}
          </p>

          <div className="max-w-2xl mx-auto space-y-5">
            <Card className="p-6 bg-white border-0 shadow-md hover:shadow-lg transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-emerald" />
                </div>
                <div>
                  <span className="font-semibold text-emerald block">{t.phone}</span>
                  <p className="text-gray-700 text-lg">+506 2653 0798</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white border-0 shadow-md hover:shadow-lg transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-emerald" />
                </div>
                <div>
                  <span className="font-semibold text-emerald block">{t.whatsappBusiness}</span>
                  <p className="text-gray-700 text-lg">+506 8849 2647</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white border-0 shadow-md hover:shadow-lg transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-emerald" />
                </div>
                <div>
                  <span className="font-semibold text-emerald block">{t.email}</span>
                  <p className="text-gray-700">veterinariadracarvajal@gmail.com</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white border-0 shadow-md hover:shadow-lg transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Facebook className="w-6 h-6 text-emerald" />
                </div>
                <div>
                  <span className="font-semibold text-emerald block">{t.social}</span>
                  <a 
                    href="https://www.facebook.com/p/Clinica-Veterinaria-Dra-Carvajal-100057580983750/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-emerald hover:text-emeraldDark transition-colors font-medium"
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" data-testid="pricing-section" className="py-20 md:py-28 bg-emeraldDark">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t.pricingHeading}
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              {t.pricingText}
            </p>
            <Button 
              asChild
              size="lg"
              data-testid="pricing-cta-btn"
              className="bg-amber hover:bg-amber/90 text-emeraldDark font-bold text-lg px-10 py-7 shadow-xl hover:shadow-2xl transition-all hover:scale-105 rounded-full"
            >
              <a href={SALES_WHATSAPP} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                {t.pricingCta}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald text-white py-14">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-14 h-14 bg-amber rounded-full flex items-center justify-center">
                <Leaf className="w-8 h-8 text-emeraldDark" />
              </div>
              <div className="text-left">
                <span className="text-2xl font-bold block">Dra. Carvajal</span>
                <span className="text-amber text-sm font-semibold tracking-wider">Regeneravet</span>
              </div>
            </div>
            <p className="text-white/90 mb-5 text-lg italic">{t.footerTagline}</p>
            <p className="text-white/70 text-sm mb-2">{t.footerRights}</p>
            <p className="text-white/50 text-xs">{t.footerPreview}</p>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile WhatsApp Button */}
      <a
        href={SALES_WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        data-testid="sticky-whatsapp-btn"
        className="fixed bottom-6 right-6 bg-amber hover:bg-amber/90 text-emeraldDark p-4 rounded-full shadow-2xl z-50 transition-all hover:scale-110 animate-pulse-slow"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
}
