import React, { useState, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Mail, 
  Facebook, 
  Instagram,
  MessageCircle,
  Stethoscope,
  ShoppingBag,
  Sprout,
  Check,
  Star
} from 'lucide-react';

const translations = {
  es: {
    // Header
    langToggle: 'EN',
    
    // Hero
    heroHeadline: 'Tu veterinaria de confianza en el corazón de Guanacaste',
    heroSubheadline: 'Más de 30 años cuidando a tus mascotas y animales de campo en Liberia.',
    heroGrounding: 'Clínica veterinaria + pet shop + agroinsumos + equipos: todo en un mismo lugar.',
    trustBullet1: 'Más de 30 años de experiencia',
    trustBullet2: '4.3⭐ en Google (324 reseñas)',
    trustBullet3: 'Atención bilingüe ES/EN',
    ctaPrimary: 'Escríbenos por WhatsApp',
    ctaSecondary: 'Ver precios',
    
    // Services
    servicesHeading: 'Servicios y Tienda',
    servicesCat1: 'Mascotas',
    servicesCat2: 'Agropecuaria y animales de granja',
    servicesCat3: 'Tienda y Equipos',
    service1: 'Consultas veterinarias generales',
    service2: 'Vacunaciones y desparasitaciones',
    service3: 'Cirugías veterinarias',
    service4: 'Análisis de laboratorio clínico',
    service5: 'Farmacia veterinaria',
    service6: 'Pet shop — alimentos y accesorios',
    service7: 'Acuario y tienda de animales',
    service8: 'Atención a animales de granja y agropecuaria',
    service9: 'Asesoría veterinaria personalizada',
    service10: 'Equipos de jardín y campo (Husqvarna dealer)',
    
    // Local reassurance
    localReassurance: 'Para familias, productores y visitantes de Guanacaste — soluciones veterinarias y agropecuarias en un solo lugar en Liberia.',
    
    // Cattle banner caption
    cattleBannerCaption: 'Mascotas y animales de granja — soluciones veterinarias y agropecuarias en un solo lugar.',
    
    // Trust
    trustHeading: 'Más de 30 años de confianza en Liberia',
    trustNarrative: 'Super Veterinaria Liberia es parte de la vida de muchas familias en Guanacaste. Con más de 30 años de trayectoria en Liberia, combinamos atención veterinaria cercana y profesional con una tienda completa para que encuentres soluciones en un solo lugar. Atendemos mascotas y también animales de granja, además de ofrecer farmacia veterinaria, pet shop, acuario e insumos agropecuarios. Aquí te ayudamos a cuidar lo que más quieres con experiencia, honestidad y trato humano.',
    trustBadge1: '30+ años de experiencia',
    trustBadge2: '4.3⭐ en Google (324 reseñas)',
    trustBadge3: 'Atención bilingüe ES/EN',
    trustBadge4: 'Acepta tarjetas',
    trustBadge5: 'Accesible',
    
    // Location
    locationHeading: '¿Dónde estamos?',
    address: '50 metros sur de la antigua Gobernación, Liberia, Guanacaste, Costa Rica',
    hoursTitle: 'Horario de atención',
    hoursWeekday: 'Lunes a Viernes',
    hoursWeekdayTime: '7:00 AM – 6:00 PM',
    hoursSaturday: 'Sábados',
    hoursSaturdayTime: '7:00 AM – 5:00 PM',
    hoursSunday: 'Domingos',
    hoursSundayTime: 'Cerrado',
    directionsHelper: 'Cómo llegar',
    
    // Contact
    contactHeading: 'Contacto',
    contactIntro: 'Visítanos en Liberia o escríbenos para consultas, productos veterinarios y apoyo agropecuario.',
    phone: 'Teléfono',
    whatsappBusiness: 'WhatsApp (negocios)',
    whatsappPets: 'WhatsApp (mascotas)',
    email: 'Correo',
    social: 'Redes sociales',
    
    // Pricing
    pricingHeading: 'Sitios web que convierten — desde $349',
    pricingText: 'Esta es una vista previa profesional de Nexo Sites. Ofrecemos diseño web personalizado, revisiones ilimitadas y publicación completa para tu negocio. Contáctanos para conocer más sobre cómo podemos crear tu sitio web perfecto.',
    pricingCta: 'Solicitar información',
    
    // Footer
    footerTagline: 'Más de 30 años brindándote lo mejor',
    footerRights: '© 2026 Super Veterinaria Liberia S.A. Todos los derechos reservados.',
    footerPreview: 'Vista previa creada por Nexo Sites'
  },
  en: {
    // Header
    langToggle: 'ES',
    
    // Hero
    heroHeadline: 'Your trusted vet clinic in the heart of Guanacaste',
    heroSubheadline: 'Over 30 years caring for your pets and farm animals in Liberia, Costa Rica.',
    heroGrounding: 'Vet clinic + pet shop + agri supplies + equipment: all in one place.',
    trustBullet1: '30+ years of experience',
    trustBullet2: '4.3⭐ on Google (324 reviews)',
    trustBullet3: 'Bilingual service ES/EN',
    ctaPrimary: 'Message us on WhatsApp',
    ctaSecondary: 'See pricing',
    
    // Services
    servicesHeading: 'Services & Shop',
    servicesCat1: 'Pets',
    servicesCat2: 'Farm & Livestock',
    servicesCat3: 'Shop & Equipment',
    service1: 'General veterinary consultations',
    service2: 'Vaccinations and deworming',
    service3: 'Veterinary surgeries',
    service4: 'Clinical laboratory analysis',
    service5: 'Veterinary pharmacy',
    service6: 'Pet shop — food and accessories',
    service7: 'Aquarium and animal store',
    service8: 'Farm animal and agricultural care',
    service9: 'Personalized veterinary advice',
    service10: 'Garden and field equipment (Husqvarna dealer)',
    
    // Local reassurance
    localReassurance: 'For families, ranchers, and visitors in Guanacaste — vet care and agri solutions in one place in Liberia.',
    
    // Cattle banner caption
    cattleBannerCaption: 'Pets and farm animals — vet care and agri solutions in one place.',
    
    // Trust
    trustHeading: 'Over 30 years of trusted care in Liberia',
    trustNarrative: 'Super Veterinaria Liberia has been a trusted part of the Guanacaste community for over 30 years. We combine caring veterinary attention with a fully stocked shop—so you can find solutions in one place. We support pets and farm animals, and we also offer a veterinary pharmacy, pet shop, aquarium supplies, and agricultural products. Our focus is simple: experienced care, honest guidance, and friendly service.',
    trustBadge1: '30+ years of experience',
    trustBadge2: '4.3⭐ on Google (324 reviews)',
    trustBadge3: 'Bilingual ES/EN',
    trustBadge4: 'Credit cards accepted',
    trustBadge5: 'Wheelchair accessible',
    
    // Location
    locationHeading: 'Find us',
    address: '50 meters south of the old Government building, Liberia, Guanacaste, Costa Rica',
    hoursTitle: 'Business Hours',
    hoursWeekday: 'Monday to Friday',
    hoursWeekdayTime: '7:00 AM – 6:00 PM',
    hoursSaturday: 'Saturdays',
    hoursSaturdayTime: '7:00 AM – 5:00 PM',
    hoursSunday: 'Sundays',
    hoursSundayTime: 'Closed',
    directionsHelper: 'Get directions',
    
    // Contact
    contactHeading: 'Contact',
    contactIntro: 'Visit us in Liberia or reach out for consultations, veterinary products, and agricultural support.',
    phone: 'Phone',
    whatsappBusiness: 'WhatsApp (business)',
    whatsappPets: 'WhatsApp (pets)',
    email: 'Email',
    social: 'Social media',
    
    // Pricing
    pricingHeading: 'Websites that convert — starting at $349',
    pricingText: 'This is a professional preview by Nexo Sites. We offer custom web design, unlimited revisions, and full publishing for your business. Contact us to learn more about how we can create your perfect website.',
    pricingCta: 'Request information',
    
    // Footer
    footerTagline: 'Over 30 years giving you the best',
    footerRights: '© 2026 Super Veterinaria Liberia S.A. All rights reserved.',
    footerPreview: 'Preview created by Nexo Sites'
  }
};

const SALES_WHATSAPP = 'https://wa.me/50689939071?text=Hola%2C%20vi%20la%20vista%20previa%20del%20sitio%20para%20Super%20Veterinaria%20Liberia.%20%C2%BFMe%20la%20puedes%20compartir%20y%20decirme%20el%20precio%20para%20publicarla%3F';

export default function Home() {
  const [lang, setLang] = useState('es');
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

  const services = {
    pets: [
      { icon: <Stethoscope className="w-6 h-6" />, text: t.service1 },
      { icon: <Stethoscope className="w-6 h-6" />, text: t.service2 },
      { icon: <Stethoscope className="w-6 h-6" />, text: t.service3 },
      { icon: <Stethoscope className="w-6 h-6" />, text: t.service4 },
      { icon: <Stethoscope className="w-6 h-6" />, text: t.service9 }
    ],
    farm: [
      { icon: <Sprout className="w-6 h-6" />, text: t.service8 }
    ],
    shop: [
      { icon: <ShoppingBag className="w-6 h-6" />, text: t.service5 },
      { icon: <ShoppingBag className="w-6 h-6" />, text: t.service6 },
      { icon: <ShoppingBag className="w-6 h-6" />, text: t.service7 },
      { icon: <ShoppingBag className="w-6 h-6" />, text: t.service10 }
    ]
  };

  return (
    <div className="min-h-screen bg-warmWhite">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-vetGreen rounded-full flex items-center justify-center">
              <Stethoscope className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-vetGreen">Super Veterinaria Liberia</span>
          </div>
          <Button 
            onClick={toggleLanguage}
            variant="outline"
            className="border-vetGreen text-vetGreen hover:bg-vetGreen hover:text-white transition-all"
          >
            {t.langToggle}
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(45, 106, 79, 0.85), rgba(45, 106, 79, 0.75)), url('https://images.unsplash.com/photo-1770836037793-95bdbf190f71?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwxfHx2ZXRlcmluYXJ5JTIwY2xpbmljJTIwZG9nJTIwZnJpZW5kbHl8ZW58MHx8fHwxNzczNjE4NTkzfDA&ixlib=rb-4.1.0&q=85')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              {t.heroHeadline}
            </h1>
            <p className="text-xl md:text-2xl text-white/95 mb-3">
              {t.heroSubheadline}
            </p>
            <p className="text-lg text-white/90 mb-8">
              {t.heroGrounding}
            </p>
            
            {/* Trust bullets */}
            <div className="flex flex-wrap gap-4 mb-8">
              {[t.trustBullet1, t.trustBullet2, t.trustBullet3].map((bullet, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Check className="w-5 h-5 text-warmAmber" />
                  <span className="text-white font-medium">{bullet}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild
                size="lg"
                className="bg-warmAmber hover:bg-warmAmber/90 text-vetGreen font-bold text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all hover:scale-105"
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
                className="bg-white/20 backdrop-blur-sm border-white text-white hover:bg-white hover:text-vetGreen font-bold text-lg px-8 py-6 transition-all"
              >
                {t.ctaSecondary}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cattle Banner - Guanacaste Culture */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 cattle-banner-bg"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1577756113290-7f03c7dc2fb3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwyfHxjYXR0bGUlMjBjb3clMjBwYXN0dXJlJTIwdHJvcGljYWwlMjBncmVlbnxlbnwwfHx8fDE3NzM2MTg1OTR8MA&ixlib=rb-4.1.0&q=85')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 70%',
            backgroundColor: '#2D6A4F'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-vetGreen/85 to-vetGreen/70 z-10" />
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-20">
          <div className="max-w-4xl text-center">
            <p className="text-2xl md:text-4xl text-white font-bold leading-relaxed">
              {t.cattleBannerCaption}
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-warmWhite">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-vetGreen mb-12">
            {t.servicesHeading}
          </h2>

          {/* Pets */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-vetGreen mb-6 flex items-center gap-2">
              <Stethoscope className="w-7 h-7" />
              {t.servicesCat1}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.pets.map((service, i) => (
                <Card key={i} className="p-6 hover:shadow-lg transition-shadow bg-white border-vetGreen/20">
                  <div className="flex items-start gap-3">
                    <div className="text-vetGreen mt-1">{service.icon}</div>
                    <p className="text-gray-700">{service.text}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Farm */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-vetGreen mb-6 flex items-center gap-2">
              <Sprout className="w-7 h-7" />
              {t.servicesCat2}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.farm.map((service, i) => (
                <Card key={i} className="p-6 hover:shadow-lg transition-shadow bg-white border-vetGreen/20">
                  <div className="flex items-start gap-3">
                    <div className="text-vetGreen mt-1">{service.icon}</div>
                    <p className="text-gray-700">{service.text}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-2xl font-bold text-vetGreen mb-6 flex items-center gap-2">
              <ShoppingBag className="w-7 h-7" />
              {t.servicesCat3}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.shop.map((service, i) => (
                <Card key={i} className="p-6 hover:shadow-lg transition-shadow bg-white border-vetGreen/20">
                  <div className="flex items-start gap-3">
                    <div className="text-vetGreen mt-1">{service.icon}</div>
                    <p className="text-gray-700">{service.text}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Trust / About Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-vetGreen mb-12">
            {t.trustHeading}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Narrative */}
            <div>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t.trustNarrative}
              </p>
            </div>

            {/* Trust badges */}
            <div className="space-y-4">
              {[t.trustBadge1, t.trustBadge2, t.trustBadge3, t.trustBadge4, t.trustBadge5].map((badge, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-warmWhite rounded-lg border-l-4 border-warmAmber">
                  <Check className="w-6 h-6 text-warmAmber flex-shrink-0" />
                  <span className="text-gray-800 font-medium">{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 md:py-24 bg-warmWhite">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-vetGreen mb-12">
            {t.locationHeading}
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Map */}
            <div className="rounded-lg overflow-hidden shadow-lg h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.0123456789!2d-85.4372!3d10.6345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f757e7a1234abcd%3A0x1234567890abcdef!2sSuper%20Veterinaria%20Liberia!5e0!3m2!1sen!2scr!4v1234567890123!5m2!1sen!2scr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Super Veterinaria Liberia Location"
              />
            </div>

            {/* Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-start gap-3 mb-2">
                  <MapPin className="w-6 h-6 text-warmAmber flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{t.address}</p>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-vetGreen mb-3 flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  {t.hoursTitle}
                </h3>
                <div className="space-y-2 ml-7">
                  <div className="flex justify-between">
                    <span className="text-gray-700 font-medium">{t.hoursWeekday}</span>
                    <span className="text-gray-600">{t.hoursWeekdayTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700 font-medium">{t.hoursSaturday}</span>
                    <span className="text-gray-600">{t.hoursSaturdayTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700 font-medium">{t.hoursSunday}</span>
                    <span className="text-gray-600">{t.hoursSundayTime}</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Phone className="w-5 h-5 text-warmAmber" />
                  <span className="text-gray-800 font-medium">+506 2666-2432</span>
                </div>
              </div>

              <Button 
                asChild
                variant="outline"
                className="w-full border-vetGreen text-vetGreen hover:bg-vetGreen hover:text-white"
              >
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Super+Veterinaria+Liberia+Liberia+Guanacaste+Costa+Rica" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  {t.directionsHelper}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-vetGreen mb-6">
            {t.contactHeading}
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            {t.contactIntro}
          </p>

          <div className="max-w-2xl mx-auto space-y-6">
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <Phone className="w-5 h-5 text-warmAmber" />
                <span className="font-medium text-vetGreen">{t.phone}</span>
              </div>
              <p className="text-gray-700 ml-8">+506 2666-2432</p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <MessageCircle className="w-5 h-5 text-warmAmber" />
                <span className="font-medium text-vetGreen">{t.whatsappBusiness}</span>
              </div>
              <p className="text-gray-700 ml-8">+506 8379-5628</p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <MessageCircle className="w-5 h-5 text-warmAmber" />
                <span className="font-medium text-vetGreen">{t.whatsappPets}</span>
              </div>
              <p className="text-gray-700 ml-8">+506 6068-4532</p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <Mail className="w-5 h-5 text-warmAmber" />
                <span className="font-medium text-vetGreen">{t.email}</span>
              </div>
              <p className="text-gray-700 ml-8">veterinarialiberia@yahoo.com</p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="font-medium text-vetGreen">{t.social}</span>
              </div>
              <div className="flex gap-4 ml-0">
                <a 
                  href="https://www.facebook.com/acuarioypetshopliberiacr/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-700 hover:text-vetGreen transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                  <span>Facebook</span>
                </a>
                <a 
                  href="https://www.instagram.com/supervet__/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-700 hover:text-vetGreen transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  <span>Instagram</span>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 md:py-24 bg-[#2D6A4F]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t.pricingHeading}
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              {t.pricingText}
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-warmAmber hover:bg-warmAmber/90 text-vetGreen font-bold text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all hover:scale-105"
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
      <footer className="bg-vetGreen text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-warmAmber rounded-full flex items-center justify-center">
                <Stethoscope className="w-7 h-7 text-vetGreen" />
              </div>
              <span className="text-2xl font-bold">Super Veterinaria Liberia</span>
            </div>
            <p className="text-white/90 mb-4 text-lg">{t.footerTagline}</p>
            <p className="text-white/70 text-sm mb-2">{t.footerRights}</p>
            <p className="text-white/60 text-xs">{t.footerPreview}</p>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile WhatsApp Button */}
      <a
        href={SALES_WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-warmAmber hover:bg-warmAmber/90 text-vetGreen p-4 rounded-full shadow-2xl z-50 transition-all hover:scale-110 md:hidden"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}
