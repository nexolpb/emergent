import React, { useState } from 'react';
import {
  Stethoscope, Scissors, Building2, Syringe, Heart,
  Pill, Sparkles, Activity, Smile, HeartPulse,
  ShoppingBag, Tag, Phone, MessageCircle, Mail,
  Clock, MapPin, CheckCircle, AlertCircle,
  Facebook, Instagram, Menu, X
} from 'lucide-react';

// ===== CONSTANTS =====
const SALES_WA =
  'https://wa.me/50689939071?text=Hola%2C%20vi%20la%20vista%20previa%20del%20sitio%20para%20Solera%20Animal%20Center.%20%C2%BFMe%20la%20puedes%20compartir%20y%20decirme%20el%20precio%20para%20publicarla%3F';

const C = {
  green: '#4a7c59',
  greenDark: '#3d6349',
  greenDeep: '#2a4133',
  cream: '#fbf9f6',
  creamMid: '#f5f0e8',
  creamDark: '#ebe0d1',
  accent: '#d4a373',
  textPrimary: '#1c1917',
  textSecondary: '#57534e',
  border: '#e7e5e4',
  greenLight: '#f2f7f4',
  greenMuted: '#9bbead',
};

// IMAGES: replace with real client photos after approval
const GALLERY_IMAGES = [
  { url: 'https://images.unsplash.com/photo-1770836037793-95bdbf190f71?auto=format&fit=crop&w=600&q=70', alt: 'Veterinarian examining dachshund' },
  { url: 'https://images.unsplash.com/photo-1770836037289-e00e5f351d11?auto=format&fit=crop&w=600&q=70', alt: 'Veterinarian examining dog' },
  { url: 'https://images.unsplash.com/photo-1563460716037-460a3ad24ba9?auto=format&fit=crop&w=600&q=70', alt: 'Dog and cat together' },
  { url: 'https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&w=600&q=70', alt: 'Pet grooming' },
  { url: 'https://images.unsplash.com/photo-1624956578877-4948166c5dcb?auto=format&fit=crop&w=600&q=70', alt: 'Dog outdoors' },
  { url: 'https://images.unsplash.com/photo-1700665537650-1bf37979aae0?auto=format&fit=crop&w=600&q=70', alt: 'Veterinarian with small dog' },
];

const SERVICE_ICONS = [
  Stethoscope, Scissors, Building2, Syringe, Heart,
  Pill, Sparkles, Activity, Smile, HeartPulse,
  ShoppingBag, Tag,
];

// ===== I18N =====
const i18n = {
  es: {
    nav: { services: 'Servicios', gallery: 'Galería', location: 'Ubicación', contact: 'Contacto', cta: 'Escríbenos por WhatsApp' },
    hero: {
      eyebrow: 'Hospital Veterinario · Liberia, Guanacaste',
      headline: 'Tu mascota, bien atendida — en Liberia y cuando más lo necesitas',
      subheadline: 'Hospital veterinario con más de 10 servicios. Emergencias 24/7. Especialistas visitantes. Servicio express.',
      trustBullets: ['Emergencias 24/7', 'Más de 10 servicios distintos', 'Cardiólogo especialista visitante', 'Servicio express'],
      primaryCta: 'Escríbenos por WhatsApp',
      secondaryCta: 'Ver precios',
    },
    emergencyStrip: 'Emergencias 24/7 — Liberia, Guanacaste',
    emergencyStripSub: 'Siempre disponibles cuando tu mascota lo necesita',
    trustStats: [
      { value: '24/7', label: 'Emergencias' },
      { value: '+10', label: 'Servicios' },
      { value: '9,290+', label: 'Seguidores en Facebook' },
      { value: 'Express', label: 'Servicio' },
    ],
    services: {
      eyebrow: 'Lo que ofrecemos',
      title: 'Nuestros Servicios',
      subtitle: 'Más de 10 servicios para el cuidado integral de tu mascota',
      list: [
        { name: 'Consulta Veterinaria', desc: 'Atención general y preventiva para tu mascota' },
        { name: 'Cirugía', desc: 'Incluye cirugía ortopédica especializada' },
        { name: 'Hospitalización', desc: 'Internamiento y cuidados continuos' },
        { name: 'Vacunación', desc: 'Vacunas y desparasitación completa' },
        { name: 'Castración', desc: 'Esterilización segura y responsable' },
        { name: 'Farmacia', desc: 'Farmacia veterinaria y agropecuaria' },
        { name: 'Grooming', desc: 'Estética y arreglo profesional' },
        { name: 'Fisioterapia', desc: 'Rehabilitación y terapia física' },
        { name: 'Odontología', desc: 'Limpieza dental y cuidado bucal' },
        { name: 'Cardiología', desc: 'Consultas con cardiólogo especialista visitante' },
        { name: 'Accesorios', desc: 'Alimentos y accesorios para mascotas' },
        { name: 'Placas ID', desc: 'Placas de identificación personalizadas' },
      ],
    },
    gallery: { eyebrow: 'Nuestro espacio', title: 'Galería', subtitle: 'Conoce a los pacientes de nuestra familia' },
    location: {
      eyebrow: '¿Dónde estamos?',
      title: 'Cómo Llegarnos',
      address: '350 metros norte de la Ermita de la Agonía, Calle 9, 50101 Liberia, Guanacaste, Costa Rica',
    },
    contact: {
      eyebrow: 'Comunícate con nosotros',
      title: 'Información de Contacto',
      phone: 'Teléfono', whatsapp: 'WhatsApp', email: 'Correo electrónico', hours: 'Horarios de atención',
      schedule: [
        { days: 'Lunes – Viernes', hours: '7:00 a.m. – 6:00 p.m.' },
        { days: 'Sábado', hours: '7:00 a.m. – 5:00 p.m.' },
        { days: 'Domingo', hours: '7:00 a.m. – 12:00 m.d.' },
        { days: 'Emergencias', hours: '24 / 7' },
      ],
      note: '* Los datos de contacto son solo informativos.',
    },
    pricing: {
      eyebrow: '¿Por qué tener un sitio web?',
      title: 'Sitios web que generan clientes',
      price: 'Precios desde $349 para una página de inicio completa con WhatsApp, mapa, servicios y diseño mobile.',
      description: 'Esta es una vista previa profesional de Nexo Sites. Ofrecemos diseño web personalizado, revisiones ilimitadas y publicación completa para tu negocio.',
      cta: 'Solicitar información',
      features: ['Diseño mobile-first', 'WhatsApp integrado', 'Mapa de Google', 'SEO básico', 'Revisiones ilimitadas', 'Publicación completa'],
    },
    footer: {
      warm: 'Cuidando a tu mascota con atención profesional y un trato cálido en Liberia, Guanacaste',
      rights: '© 2026 Solera Animal Center. Todos los derechos reservados.',
      preview: 'Vista previa creada por Nexo Sites',
    },
  },
  en: {
    nav: { services: 'Services', gallery: 'Gallery', location: 'Location', contact: 'Contact', cta: 'WhatsApp us' },
    hero: {
      eyebrow: 'Veterinary Hospital · Liberia, Guanacaste',
      headline: 'Expert pet care — in Liberia, whenever you need it',
      subheadline: 'Veterinary hospital with 10+ services. 24/7 emergency care. Visiting specialists. Express service.',
      trustBullets: ['24/7 emergency care', '10+ services', 'Visiting cardiologist', 'Express service'],
      primaryCta: 'WhatsApp us',
      secondaryCta: 'See pricing',
    },
    emergencyStrip: '24/7 Emergency Care — Liberia, Guanacaste',
    emergencyStripSub: 'Always available when your pet needs us most',
    trustStats: [
      { value: '24/7', label: 'Emergencies' },
      { value: '10+', label: 'Services' },
      { value: '9,290+', label: 'Facebook followers' },
      { value: 'Express', label: 'Service' },
    ],
    services: {
      eyebrow: 'What we offer',
      title: 'Our Services',
      subtitle: '10+ services for comprehensive pet care',
      list: [
        { name: 'General Consultation', desc: 'General and preventive care for your pet' },
        { name: 'Surgery', desc: 'Includes specialized orthopedic surgery' },
        { name: 'Hospitalization', desc: 'Inpatient care and continuous monitoring' },
        { name: 'Vaccination', desc: 'Full vaccines and deworming' },
        { name: 'Neutering', desc: 'Safe and responsible sterilization' },
        { name: 'Pharmacy', desc: 'Veterinary and agricultural pharmacy' },
        { name: 'Grooming', desc: 'Professional pet grooming and styling' },
        { name: 'Physiotherapy', desc: 'Rehabilitation and physical therapy' },
        { name: 'Dentistry', desc: 'Dental cleaning and oral care' },
        { name: 'Cardiology', desc: 'Consultations with visiting cardiologist' },
        { name: 'Accessories', desc: 'Pet food and accessories' },
        { name: 'ID Tags', desc: 'Custom identification tags' },
      ],
    },
    gallery: { eyebrow: 'Our space', title: 'Gallery', subtitle: 'Meet our furry patients' },
    location: {
      eyebrow: 'Where are we?',
      title: 'How to Find Us',
      address: '350 meters north of Ermita de la Agonía, Calle 9, 50101 Liberia, Guanacaste, Costa Rica',
    },
    contact: {
      eyebrow: 'Get in touch',
      title: 'Contact Information',
      phone: 'Phone', whatsapp: 'WhatsApp', email: 'Email', hours: 'Business Hours',
      schedule: [
        { days: 'Monday – Friday', hours: '7:00 a.m. – 6:00 p.m.' },
        { days: 'Saturday', hours: '7:00 a.m. – 5:00 p.m.' },
        { days: 'Sunday', hours: '7:00 a.m. – 12:00 p.m.' },
        { days: 'Emergencies', hours: '24 / 7' },
      ],
      note: '* Contact details are for display purposes only.',
    },
    pricing: {
      eyebrow: 'Why have a website?',
      title: 'Websites that generate clients',
      price: 'Pricing starts at $349 for a complete homepage with WhatsApp, map, services, and mobile-first design.',
      description: 'This is a professional preview by Nexo Sites. We offer custom web design, unlimited revisions, and full publishing for your business.',
      cta: 'Request information',
      features: ['Mobile-first design', 'WhatsApp integrated', 'Google Maps', 'Basic SEO', 'Unlimited revisions', 'Full publishing'],
    },
    footer: {
      warm: 'Professional, warm pet care in Liberia, Guanacaste',
      rights: '© 2026 Solera Animal Center. All rights reserved.',
      preview: 'Preview created by Nexo Sites',
    },
  },
};

// ===== SECTION HEADING HELPER =====
function SectionHeading({ eyebrow, title, subtitle, light = false }) {
  return (
    <div className="text-center mb-14">
      <span className="text-xs font-bold tracking-widest uppercase block mb-3" style={{ color: light ? C.greenMuted : C.green, fontFamily: "'Outfit', sans-serif" }}>
        {eyebrow}
      </span>
      <h2 className="mb-3" style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(1.75rem,4vw,2.5rem)', fontWeight: 700, color: light ? 'white' : C.textPrimary }}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-base" style={{ color: light ? 'rgba(255,255,255,0.7)' : C.textSecondary, fontFamily: "'Outfit', sans-serif" }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

// ===== HEADER =====
function Header({ t, lang, toggleLang, scrollTo, menuOpen, setMenuOpen }) {
  const navLinks = [
    { key: 'services', id: 'servicios' },
    { key: 'gallery', id: 'galeria' },
    { key: 'location', id: 'ubicacion' },
    { key: 'contact', id: 'contacto' },
  ];

  return (
    <header
      data-testid="site-header"
      className="fixed top-0 left-0 right-0 z-50"
      style={{ backgroundColor: 'rgba(251,249,246,0.95)', backdropFilter: 'blur(16px)', borderBottom: `1px solid ${C.border}` }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a
            href="#hero"
            onClick={e => { e.preventDefault(); scrollTo('hero'); }}
            data-testid="site-logo"
            className="flex items-center gap-2 no-underline"
          >
            <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: C.green }}>
              <Heart size={16} color="white" strokeWidth={2} />
            </div>
            <span className="font-bold text-base leading-tight hidden sm:block" style={{ fontFamily: "'Fraunces', serif", color: C.textPrimary }}>
              Solera Animal Center
            </span>
            <span className="font-bold text-sm leading-tight sm:hidden" style={{ fontFamily: "'Fraunces', serif", color: C.textPrimary }}>
              Solera
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map(link => (
              <a
                key={link.key}
                href={`#${link.id}`}
                onClick={e => { e.preventDefault(); scrollTo(link.id); }}
                data-testid={`nav-${link.id}`}
                className="text-sm font-medium no-underline transition-colors duration-200 hover:text-green-700"
                style={{ color: C.textSecondary, fontFamily: "'Outfit', sans-serif" }}
                onMouseEnter={e => { e.currentTarget.style.color = C.green; }}
                onMouseLeave={e => { e.currentTarget.style.color = C.textSecondary; }}
              >
                {t.nav[link.key]}
              </a>
            ))}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            {/* Lang toggle */}
            <button
              onClick={toggleLang}
              data-testid="lang-toggle"
              className="flex items-center px-3 py-1.5 rounded-full border text-xs font-bold cursor-pointer transition-all hover:shadow-sm"
              style={{ borderColor: C.border, backgroundColor: 'white', fontFamily: "'Outfit', sans-serif", color: C.textSecondary }}
            >
              <span style={{ color: lang === 'es' ? C.green : C.textSecondary }}>ES</span>
              <span className="mx-1" style={{ color: C.border }}>|</span>
              <span style={{ color: lang === 'en' ? C.green : C.textSecondary }}>EN</span>
            </button>

            {/* Desktop CTA */}
            <a
              href={SALES_WA}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="header-cta-btn"
              className="hidden md:inline-flex items-center gap-2 text-sm font-semibold no-underline rounded-full px-5 py-2.5 transition-all duration-200"
              style={{ backgroundColor: C.green, color: 'white', fontFamily: "'Outfit', sans-serif" }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = C.greenDark; e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = C.green; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <MessageCircle size={15} strokeWidth={2} />
              {t.nav.cta}
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              data-testid="mobile-menu-btn"
              className="md:hidden p-1 rounded-lg border"
              style={{ borderColor: C.border, backgroundColor: 'white', color: C.textPrimary, cursor: 'pointer' }}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          data-testid="mobile-menu"
          className="md:hidden border-t px-6 pb-6 pt-2"
          style={{ backgroundColor: 'white', borderColor: C.border }}
        >
          {navLinks.map(link => (
            <a
              key={link.key}
              href={`#${link.id}`}
              onClick={e => { e.preventDefault(); scrollTo(link.id); }}
              data-testid={`mobile-nav-${link.id}`}
              className="block py-3 text-base font-medium no-underline border-b"
              style={{ color: C.textPrimary, borderColor: C.creamMid, fontFamily: "'Outfit', sans-serif" }}
            >
              {t.nav[link.key]}
            </a>
          ))}
          <a
            href={SALES_WA}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="mobile-cta-btn"
            className="flex items-center justify-center gap-2 mt-4 py-3.5 px-6 rounded-xl text-base font-semibold no-underline"
            style={{ backgroundColor: C.green, color: 'white', fontFamily: "'Outfit', sans-serif" }}
          >
            <MessageCircle size={18} strokeWidth={2} />
            {t.nav.cta}
          </a>
        </div>
      )}
    </header>
  );
}

// ===== HERO =====
function HeroSection({ t, scrollTo }) {
  return (
    <section id="hero" data-testid="hero-section" className="pt-16" style={{ backgroundColor: C.cream, minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="max-w-6xl mx-auto px-6 py-16 w-full">

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: Text */}
          <div>
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6" style={{ backgroundColor: C.creamMid }}>
              <MapPin size={13} color={C.green} strokeWidth={2} />
              <span className="text-xs font-bold tracking-wide" style={{ color: C.green, fontFamily: "'Outfit', sans-serif" }}>
                {t.hero.eyebrow}
              </span>
            </div>

            {/* Headline */}
            <h1 className="mb-5 leading-tight" style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(2rem,5vw,3.25rem)', fontWeight: 700, color: C.textPrimary, letterSpacing: '-0.02em' }}>
              {t.hero.headline}
            </h1>

            {/* Sub */}
            <p className="mb-8 leading-relaxed text-base md:text-lg" style={{ color: C.textSecondary, fontFamily: "'Outfit', sans-serif", maxWidth: '500px' }}>
              {t.hero.subheadline}
            </p>

            {/* Trust bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {t.hero.trustBullets.map((bullet, i) => (
                <div key={i} className="flex items-center gap-2.5" data-testid={`trust-bullet-${i}`}>
                  <CheckCircle size={17} color={C.green} strokeWidth={2.5} className="flex-shrink-0" />
                  <span className="text-sm font-medium" style={{ color: C.textPrimary, fontFamily: "'Outfit', sans-serif" }}>{bullet}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href={SALES_WA}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="hero-primary-cta"
                className="inline-flex items-center gap-2 no-underline rounded-full px-8 py-4 text-base font-semibold transition-all duration-300"
                style={{ backgroundColor: C.green, color: 'white', boxShadow: '0 4px 20px rgba(74,124,89,0.3)', fontFamily: "'Outfit', sans-serif" }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = C.greenDark; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(74,124,89,0.4)'; }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = C.green; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(74,124,89,0.3)'; }}
              >
                <MessageCircle size={18} strokeWidth={2} />
                {t.hero.primaryCta}
              </a>
              <a
                href="#pricing"
                onClick={e => { e.preventDefault(); scrollTo('pricing'); }}
                data-testid="hero-secondary-cta"
                className="inline-flex items-center gap-2 no-underline rounded-full px-8 py-4 text-base font-semibold transition-all duration-300"
                style={{ backgroundColor: C.creamMid, color: C.green, fontFamily: "'Outfit', sans-serif" }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = C.creamDark; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = C.creamMid; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                {t.hero.secondaryCta}
              </a>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden" style={{ boxShadow: '0 20px 60px rgba(74,124,89,0.15)', aspectRatio: '4/3' }}>
              <img
                src="https://images.unsplash.com/photo-1548699897-26df6901ca69?auto=format&fit=crop&w=800&q=80"
                alt="Veterinarian with puppy"
                className="w-full h-full object-cover block"
              />
            </div>
            {/* Badge */}
            <div
              className="absolute flex items-center gap-3 rounded-2xl p-4"
              style={{ bottom: '-12px', left: '-12px', backgroundColor: 'white', boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}
            >
              <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#fee2e2' }}>
                <AlertCircle size={20} color="#dc2626" strokeWidth={2} />
              </div>
              <div>
                <div className="text-sm font-bold" style={{ color: C.textPrimary, fontFamily: "'Outfit', sans-serif" }}>Emergencias</div>
                <div className="text-sm font-bold" style={{ color: C.green, fontFamily: "'Outfit', sans-serif" }}>24 / 7</div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 pt-12" style={{ borderTop: `1px solid ${C.border}` }}>
          {t.trustStats.map((stat, i) => (
            <div key={i} className="text-center" data-testid={`trust-stat-${i}`}>
              <div className="mb-1" style={{ fontFamily: "'Fraunces', serif", fontSize: '1.875rem', fontWeight: 700, color: C.green }}>
                {stat.value}
              </div>
              <div className="text-sm" style={{ color: C.textSecondary, fontFamily: "'Outfit', sans-serif" }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== EMERGENCY STRIP =====
function EmergencyStrip({ t }) {
  return (
    <div data-testid="emergency-strip" className="text-center py-6 px-6" style={{ backgroundColor: '#991b1b' }}>
      <div className="flex items-center justify-center gap-3 mb-1">
        <AlertCircle size={20} color="white" strokeWidth={2.5} />
        <span className="font-bold text-white" style={{ fontSize: 'clamp(1rem,3vw,1.3rem)', fontFamily: "'Outfit', sans-serif", letterSpacing: '0.01em' }}>
          {t.emergencyStrip}
        </span>
      </div>
      <p className="text-sm m-0" style={{ color: 'rgba(255,255,255,0.8)', fontFamily: "'Outfit', sans-serif" }}>
        {t.emergencyStripSub}
      </p>
    </div>
  );
}

// ===== SERVICES =====
function ServicesSection({ t }) {
  return (
    <section id="servicios" data-testid="services-section" className="py-20" style={{ backgroundColor: C.creamMid }}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading eyebrow={t.services.eyebrow} title={t.services.title} subtitle={t.services.subtitle} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.services.list.map((service, i) => {
            const Icon = SERVICE_ICONS[i];
            return (
              <div
                key={i}
                data-testid={`service-card-${i}`}
                className="rounded-2xl p-7 transition-all duration-300 cursor-default"
                style={{ backgroundColor: 'white', border: `1px solid ${C.border}`, boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 28px rgba(74,124,89,0.12)'; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.borderColor = 'rgba(74,124,89,0.25)'; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 1px 4px rgba(0,0,0,0.04)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = C.border; }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: C.greenLight }}>
                  <Icon size={22} color={C.green} strokeWidth={1.5} />
                </div>
                <h3 className="mb-2" style={{ fontFamily: "'Fraunces', serif", fontSize: '16px', fontWeight: 600, color: C.textPrimary }}>
                  {service.name}
                </h3>
                <p className="text-sm leading-relaxed m-0" style={{ color: C.textSecondary, fontFamily: "'Outfit', sans-serif" }}>
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ===== GALLERY =====
function GallerySection({ t }) {
  return (
    <section id="galeria" data-testid="gallery-section" className="py-20" style={{ backgroundColor: 'white' }}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading eyebrow={t.gallery.eyebrow} title={t.gallery.title} subtitle={t.gallery.subtitle} />
        {/* IMAGES: replace with real client photos after approval */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {GALLERY_IMAGES.map((img, i) => (
            <div
              key={i}
              data-testid={`gallery-img-${i}`}
              className="rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-105"
              style={{ aspectRatio: '4/3', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}
            >
              <img
                src={img.url}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover block"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== LOCATION =====
function LocationSection({ t }) {
  return (
    <section id="ubicacion" data-testid="location-section" className="py-20" style={{ backgroundColor: C.cream }}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading eyebrow={t.location.eyebrow} title={t.location.title} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.1)', minHeight: '380px' }}>
            <iframe
              title="Solera Animal Center Map"
              src="https://maps.google.com/maps?q=Solera+Animal+Center%2C+Liberia%2C+Guanacaste%2C+Costa+Rica&output=embed"
              width="100%"
              height="100%"
              style={{ border: 'none', display: 'block', minHeight: '380px' }}
              loading="lazy"
              data-testid="map-embed"
            />
          </div>
          {/* Address */}
          <div className="rounded-2xl p-10 flex flex-col justify-center" style={{ backgroundColor: 'white', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: C.greenLight }}>
                <MapPin size={22} color={C.green} strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: C.green, fontFamily: "'Outfit', sans-serif" }}>Dirección</div>
                <p className="text-base leading-relaxed m-0" style={{ color: C.textPrimary, fontFamily: "'Outfit', sans-serif" }}>
                  {t.location.address}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ===== CONTACT =====
function ContactSection({ t }) {
  const isEmergency = (days) => days.toLowerCase().includes('emergenc');
  return (
    <section id="contacto" data-testid="contact-section" className="py-20" style={{ backgroundColor: C.creamMid }}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading eyebrow={t.contact.eyebrow} title={t.contact.title} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Info */}
          <div className="rounded-2xl p-8" style={{ backgroundColor: 'white', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
            <div className="flex flex-col gap-5">
              {[
                { icon: Phone, label: t.contact.phone, value: '2665-0606', testid: 'contact-phone' },
                { icon: MessageCircle, label: t.contact.whatsapp, value: '+506 8532-0606', testid: 'contact-whatsapp' },
                { icon: Mail, label: t.contact.email, value: 'info@soleraanimalcenter.com', testid: 'contact-email' },
              ].map(({ icon: Icon, label, value, testid }) => (
                <div key={testid} className="flex items-center gap-4" data-testid={testid}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: C.greenLight }}>
                    <Icon size={19} color={C.green} strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-xs font-medium mb-0.5" style={{ color: C.textSecondary, fontFamily: "'Outfit', sans-serif" }}>{label}</div>
                    <div className="font-semibold text-base" style={{ color: C.textPrimary, fontFamily: "'Outfit', sans-serif" }}>{value}</div>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs leading-relaxed m-0" style={{ color: '#9ca3af', fontFamily: "'Outfit', sans-serif" }}>
              {t.contact.note}
            </p>
          </div>

          {/* Hours */}
          <div className="rounded-2xl p-8" style={{ backgroundColor: 'white', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ backgroundColor: C.greenLight }}>
                <Clock size={19} color={C.green} strokeWidth={1.5} />
              </div>
              <h3 className="m-0" style={{ fontFamily: "'Fraunces', serif", fontSize: '20px', fontWeight: 600, color: C.textPrimary }}>
                {t.contact.hours}
              </h3>
            </div>
            <div>
              {t.contact.schedule.map((item, i) => (
                <div
                  key={i}
                  data-testid={`schedule-row-${i}`}
                  className="flex justify-between items-center py-3"
                  style={{ borderBottom: i < t.contact.schedule.length - 1 ? `1px solid ${C.creamMid}` : 'none' }}
                >
                  <span className="text-sm font-medium" style={{ color: C.textPrimary, fontFamily: "'Outfit', sans-serif" }}>{item.days}</span>
                  <span className="text-sm font-bold" style={{ color: isEmergency(item.days) ? '#dc2626' : C.green, fontFamily: "'Outfit', sans-serif" }}>
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ===== PRICING =====
function PricingSection({ t }) {
  return (
    <section id="pricing" data-testid="pricing-section" className="py-20" style={{ backgroundColor: C.greenDeep }}>
      <div className="max-w-3xl mx-auto px-6 text-center">
        <SectionHeading eyebrow={t.pricing.eyebrow} title={t.pricing.title} light />
        <p className="font-bold text-lg mb-5" style={{ color: C.greenMuted, fontFamily: "'Outfit', sans-serif", lineHeight: 1.5 }}>
          {t.pricing.price}
        </p>
        <p className="text-base leading-relaxed mb-10" style={{ color: 'rgba(255,255,255,0.72)', fontFamily: "'Outfit', sans-serif" }}>
          {t.pricing.description}
        </p>

        {/* Features */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-12">
          {t.pricing.features.map((f, i) => (
            <div
              key={i}
              data-testid={`pricing-feature-${i}`}
              className="flex items-center gap-2 rounded-xl px-4 py-2.5 justify-center"
              style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}
            >
              <CheckCircle size={15} color={C.greenMuted} strokeWidth={2} />
              <span className="text-sm font-medium text-white" style={{ fontFamily: "'Outfit', sans-serif" }}>{f}</span>
            </div>
          ))}
        </div>

        <a
          href={SALES_WA}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="pricing-cta-btn"
          className="inline-flex items-center gap-3 no-underline rounded-full px-12 py-5 text-lg font-bold transition-all duration-300"
          style={{ backgroundColor: 'white', color: C.greenDeep, fontFamily: "'Outfit', sans-serif", boxShadow: '0 8px 32px rgba(0,0,0,0.3)' }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.4)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.3)'; }}
        >
          <MessageCircle size={20} strokeWidth={2} />
          {t.pricing.cta}
        </a>
      </div>
    </section>
  );
}

// ===== FOOTER =====
function Footer({ t }) {
  return (
    <footer data-testid="site-footer" className="pt-16 pb-8" style={{ backgroundColor: '#1c1917' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ backgroundColor: C.green }}>
                <Heart size={16} color="white" strokeWidth={2} />
              </div>
              <span className="font-bold text-base text-white" style={{ fontFamily: "'Fraunces', serif" }}>Solera Animal Center</span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: "'Outfit', sans-serif" }}>
              {t.footer.warm}
            </p>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: "'Outfit', sans-serif" }}>
              Liberia, Guanacaste
            </h4>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: "'Outfit', sans-serif" }}>
              350m norte de la Ermita de la Agonía<br />
              Calle 9, 50101 Liberia<br />
              Guanacaste, Costa Rica
            </p>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: "'Outfit', sans-serif" }}>
              Redes Sociales
            </h4>
            <div className="flex gap-3">
              {[
                { href: 'https://www.facebook.com/soleraanimalcenter/', Icon: Facebook, testid: 'footer-facebook' },
                { href: 'https://www.instagram.com/soleraanimalcenter/', Icon: Instagram, testid: 'footer-instagram' },
              ].map(({ href, Icon, testid }) => (
                <a
                  key={testid}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={testid}
                  className="w-10 h-10 rounded-xl flex items-center justify-center no-underline transition-all duration-200"
                  style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)'; }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'; }}
                >
                  <Icon size={17} color="white" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 text-center flex flex-col gap-1">
          <p className="text-xs m-0" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: "'Outfit', sans-serif" }}>
            {t.footer.rights}
          </p>
          <p className="text-xs m-0" style={{ color: 'rgba(255,255,255,0.25)', fontFamily: "'Outfit', sans-serif" }}>
            {t.footer.preview}
          </p>
        </div>
      </div>
    </footer>
  );
}

// ===== FLOATING WHATSAPP =====
function FloatingWhatsApp() {
  return (
    <a
      href={SALES_WA}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="floating-whatsapp"
      className="fixed z-40 flex items-center gap-2 rounded-full no-underline font-semibold transition-all duration-300"
      style={{
        bottom: '80px', right: '20px',
        backgroundColor: '#25D366', color: 'white',
        padding: '12px 20px',
        boxShadow: '0 4px 20px rgba(37,211,102,0.45)',
        fontFamily: "'Outfit', sans-serif", fontSize: '14px',
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.06)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(37,211,102,0.55)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,211,102,0.45)'; }}
    >
      <MessageCircle size={20} strokeWidth={2} />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}

// ===== MAIN EXPORT =====
export default function SoleraLanding() {
  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem('lang') || 'es'; } catch { return 'es'; }
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const t = i18n[lang];

  const toggleLang = () => {
    const next = lang === 'es' ? 'en' : 'es';
    setLang(next);
    try { localStorage.setItem('lang', next); } catch {}
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", backgroundColor: C.cream }}>
      <Header t={t} lang={lang} toggleLang={toggleLang} scrollTo={scrollTo} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <HeroSection t={t} scrollTo={scrollTo} />
        <EmergencyStrip t={t} />
        <ServicesSection t={t} />
        <GallerySection t={t} />
        <LocationSection t={t} />
        <ContactSection t={t} />
        <PricingSection t={t} />
      </main>
      <Footer t={t} />
      <FloatingWhatsApp />
    </div>
  );
}
