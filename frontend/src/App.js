import "@/App.css";
import { 
  Stethoscope, 
  Heart, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  Star,
  Syringe,
  Activity,
  Scan,
  TestTube,
  Building2,
  PawPrint,
  Facebook,
  MessageCircle,
  ChevronDown,
  Users
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const WHATSAPP_CTA_URL = "https://wa.me/50689939071?text=Hola%2C+vi+la+vista+previa+del+sitio+para+Cl%C3%ADnica+Veterinaria+Machado+(Heredia).+%C2%BFMe+la+puede+compartir+y+decirme+el+precio+para+publicarla%3F";

const services = [
  { icon: Stethoscope, title: "Consulta general", desc: "Atención integral para perros y gatos" },
  { icon: Scan, title: "Radiología digital", desc: "Diagnósticos precisos con tecnología moderna" },
  { icon: Activity, title: "Cirugía veterinaria", desc: "Procedimientos seguros y profesionales" },
  { icon: Heart, title: "Ultrasonido / ecografía", desc: "Imágenes detalladas para mejor diagnóstico" },
  { icon: Heart, title: "Cardiología", desc: "Cuidado especializado del corazón" },
  { icon: TestTube, title: "Laboratorio clínico", desc: "Análisis rápidos y confiables" },
  { icon: Syringe, title: "Vacunación", desc: "Protección preventiva para su mascota" },
  { icon: Building2, title: "Hospitalización", desc: "Internamiento con monitoreo continuo" },
  { icon: PawPrint, title: "Atención integral", desc: "Cuidado completo para pequeños animales" },
];

const features = [
  {
    icon: Clock,
    title: "18 años de experiencia",
    desc: "Clínica con trayectoria comprobada en Heredia"
  },
  {
    icon: Scan,
    title: "Equipo médico moderno",
    desc: "Radiología digital para diagnósticos precisos"
  },
  {
    icon: Heart,
    title: "Atención digna y cálida",
    desc: "Trato respetuoso para su mascota y para usted"
  },
  {
    icon: PawPrint,
    title: "Especialistas en perros y gatos",
    desc: "Enfoque claro, atención de calidad"
  },
];

// Hero Section
const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-sage-50 to-white" data-testid="hero-section">
    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjAzIi8+PC9zdmc+')] opacity-50"></div>
    
    <div className="container-custom relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Content */}
        <div className="space-y-8 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-forest/10 rounded-full">
            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span className="text-sm font-medium text-forest">4.3/5 en Google · 307 reseñas</span>
          </div>
          
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
            La clínica veterinaria de confianza en{" "}
            <span className="text-forest">San Pablo, Heredia</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl">
            18 años cuidando a perros y gatos con atención profesional, cálida y equipos modernos.
          </p>
          
          {/* Trust Bullets */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm">
            <div className="flex items-center gap-2 text-slate-700">
              <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
              <span>4.3/5 en Google · 307 reseñas</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <Stethoscope className="w-5 h-5 text-forest" />
              <span>Dr. Anderson Machado Casas</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <MapPin className="w-5 h-5 text-forest" />
              <span>San Pablo, Heredia — a 150m de la UNA</span>
            </div>
          </div>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              asChild
              className="btn-primary text-base"
              data-testid="hero-whatsapp-cta"
            >
              <a href={WHATSAPP_CTA_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Escríbanos por WhatsApp
              </a>
            </Button>
            <Button 
              variant="outline"
              className="btn-secondary text-base"
              data-testid="hero-pricing-cta"
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver precios
              <ChevronDown className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
        
        {/* Right Image */}
        <div className="relative animate-fade-up animation-delay-200">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-forest/20 to-transparent z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1682448169828-039868860001?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzF8MHwxfHNlYXJjaHw0fHxjYXQlMjBhbmQlMjBkb2clMjB0b2dldGhlcnxlbnwwfHx8fDE3NzM4MDQ4MDF8MA&ixlib=rb-4.1.0&q=85&w=800"
              alt="Perro y gato descansando juntos en Clínica Veterinaria Machado"
              className="w-full h-[400px] lg:h-[500px] object-cover"
              data-testid="hero-image"
            />
          </div>
          
          {/* Floating Badge */}
          <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 animate-float">
            <div className="w-12 h-12 bg-forest/10 rounded-full flex items-center justify-center">
              <Users className="w-6 h-6 text-forest" />
            </div>
            <div>
              <p className="font-semibold text-slate-900">18 años</p>
              <p className="text-sm text-slate-500">de experiencia</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Services Section
const ServicesSection = () => (
  <section className="section-padding bg-white" data-testid="services-section">
    <div className="container-custom">
      <div className="text-center mb-16 animate-fade-up">
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 mb-4">
          Nuestros servicios
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Atención veterinaria completa para el bienestar de su mascota
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Card 
            key={index}
            className="group bg-white border border-slate-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            data-testid={`service-card-${index}`}
          >
            <CardContent className="p-8">
              <div className="w-14 h-14 bg-sage rounded-2xl flex items-center justify-center mb-6 group-hover:bg-forest group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-forest group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-slate-900 mb-2">
                {service.title}
              </h3>
              <p className="text-slate-600">
                {service.desc}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

// Why Choose Us Section
const WhyChooseSection = () => (
  <section className="section-padding bg-sage/30" data-testid="why-choose-section">
    <div className="container-custom">
      <div className="text-center mb-16 animate-fade-up">
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 mb-4">
          Por qué elegirnos
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Compromiso con la salud y el bienestar de su mascota
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="bg-white p-8 rounded-2xl border border-transparent hover:border-forest/20 hover:shadow-lg transition-all duration-300 animate-fade-up"
            style={{ animationDelay: `${index * 100}ms` }}
            data-testid={`feature-card-${index}`}
          >
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 bg-forest/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-7 h-7 text-forest" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Location Section
const LocationSection = () => (
  <section className="section-padding bg-white" data-testid="location-section">
    <div className="container-custom">
      <div className="text-center mb-12 animate-fade-up">
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 mb-4">
          Ubicación
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Encuéntrenos fácilmente en San Pablo, Heredia
        </p>
      </div>
      
      <div className="rounded-3xl overflow-hidden shadow-xl animate-fade-up">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.0!2d-84.09!3d10.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0fb2c2d2c8c8f%3A0x0!2sCl%C3%ADnica%20Veterinaria%20Machado%2C%20San%20Pablo%2C%20Heredia%2C%20Costa%20Rica!5e0!3m2!1ses!2scr!4v1700000000000!5m2!1ses!2scr"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación de Clínica Veterinaria Machado"
          data-testid="google-map"
        ></iframe>
      </div>
      
      <div className="mt-8 text-center">
        <div className="inline-flex items-center gap-2 text-slate-700">
          <MapPin className="w-5 h-5 text-forest" />
          <span className="text-lg">150 metros este de la Escuela de Topografía de la UNA, San Pablo, Heredia</span>
        </div>
      </div>
    </div>
  </section>
);

// Contact Section
const ContactSection = () => (
  <section className="section-padding bg-sage/30" data-testid="contact-section">
    <div className="container-custom">
      <div className="text-center mb-12 animate-fade-up">
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 mb-4">
          Contacto
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Estamos aquí para atenderle
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {/* Phone */}
        <div className="bg-white p-8 rounded-2xl text-center animate-fade-up" data-testid="contact-phone">
          <div className="w-16 h-16 bg-forest/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Phone className="w-8 h-8 text-forest" />
          </div>
          <h3 className="font-heading text-lg font-semibold text-slate-900 mb-2">Teléfono</h3>
          <p className="text-slate-600">+506 4070-7387</p>
          <p className="text-slate-600">+506 2262-8720</p>
        </div>
        
        {/* Email */}
        <div className="bg-white p-8 rounded-2xl text-center animate-fade-up animation-delay-100" data-testid="contact-email">
          <div className="w-16 h-16 bg-forest/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="w-8 h-8 text-forest" />
          </div>
          <h3 className="font-heading text-lg font-semibold text-slate-900 mb-2">Correo</h3>
          <p className="text-slate-600 break-all">recepcionvetmachado@gmail.com</p>
        </div>
        
        {/* Hours */}
        <div className="bg-white p-8 rounded-2xl text-center animate-fade-up animation-delay-200" data-testid="contact-hours">
          <div className="w-16 h-16 bg-forest/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Clock className="w-8 h-8 text-forest" />
          </div>
          <h3 className="font-heading text-lg font-semibold text-slate-900 mb-2">Horario</h3>
          <div className="text-slate-600 text-sm space-y-1">
            <p>Lun–Vie: 7:00 a.m. – 9:45 p.m.</p>
            <p>Sábado: 8:00 a.m. – 7:00 p.m.</p>
            <p>Domingo: 9:00 a.m. – 5:00 p.m.</p>
          </div>
        </div>
      </div>
      
      {/* Social */}
      <div className="mt-12 text-center animate-fade-up">
        <p className="text-slate-600 mb-4">Síguenos en redes sociales</p>
        <a 
          href="https://www.facebook.com/p/Clínica-Veterinaria-Machado-100083492793423/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-forest hover:text-forest/80 transition-colors"
          data-testid="facebook-link"
        >
          <Facebook className="w-6 h-6" />
          <span className="font-medium">Facebook</span>
        </a>
      </div>
    </div>
  </section>
);

// Pricing Teaser Section
const PricingSection = () => (
  <section id="pricing" className="section-padding bg-night-watch relative overflow-hidden" data-testid="pricing-section">
    {/* Decorative elements */}
    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1Ii8+PC9zdmc=')] opacity-30"></div>
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-whatsapp/5 rounded-full blur-3xl"></div>
    
    <div className="container-custom relative z-10">
      <div className="max-w-3xl mx-auto text-center animate-fade-up">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-8">
          <ShieldCheck className="w-5 h-5 text-whatsapp" />
          <span className="text-sm font-medium text-white/90">Vista previa por Nexo Sites</span>
        </div>
        
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6">
          ¿Quiere tener un sitio como este para su clínica?
        </h2>
        
        <p className="text-xl text-white/80 mb-4">
          Este es un sitio de vista previa preparado por Nexo Sites.
        </p>
        
        <p className="text-2xl md:text-3xl font-semibold text-whatsapp mb-10">
          Precios desde $349
        </p>
        
        <Button 
          asChild
          className="btn-primary text-lg px-10 py-6"
          data-testid="pricing-whatsapp-cta"
        >
          <a href={WHATSAPP_CTA_URL} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-6 h-6 mr-2" />
            Escríbanos por WhatsApp
          </a>
        </Button>
      </div>
    </div>
  </section>
);

// Footer
const Footer = () => (
  <footer className="py-8 bg-forest" data-testid="footer">
    <div className="container-custom">
      <Separator className="bg-white/20 mb-8" />
      <div className="text-center">
        <p className="text-white/70 text-sm">
          Vista previa preparada por{" "}
          <a 
            href="https://nexodigitalops.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-whatsapp transition-colors font-medium"
          >
            Nexo Sites
          </a>
          {" "}· nexodigitalops.com
        </p>
      </div>
    </div>
  </footer>
);

// Floating WhatsApp Button
const FloatingWhatsApp = () => (
  <a
    href={WHATSAPP_CTA_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-whatsapp text-white p-4 rounded-full shadow-2xl hover:scale-110 hover:shadow-whatsapp/50 transition-all duration-300 animate-bounce-slow"
    aria-label="Escríbanos por WhatsApp"
    data-testid="floating-whatsapp"
  >
    <MessageCircle className="w-7 h-7" />
  </a>
);

function App() {
  return (
    <div className="App font-body antialiased">
      <HeroSection />
      <ServicesSection />
      <WhyChooseSection />
      <LocationSection />
      <ContactSection />
      <PricingSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
