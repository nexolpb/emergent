# PRD — Clínica Dental Santa Ana · Landing Page

## Fecha de creación: 2026-03-31

---

## Problema original
Clínica Dental Santa Ana — Dra. Mónica Gutiérrez Pereira no tiene presencia web. Nexo Sites necesita una landing page profesional en español para generar nuevas citas y demostrar el valor de su servicio de sitios web.

## Arquitectura
- **Frontend**: React + Tailwind CSS (single-page, mobile-first)
- **Backend**: FastAPI + MongoDB (solo sirve la API base, no usada activamente en esta landing)
- **Deploy**: Netlify-ready (static export)

---

## Personas objetivo
- Pacientes en Santa Ana, Pozos, Ciudad Colón, zona oeste de San José
- Familias buscando atención dental completa
- Propietaria/agente de Nexo Sites revisando la vista previa

---

## Secciones implementadas

| # | Sección | Status |
|---|---------|--------|
| 1 | Header sticky con nav y CTA | ✅ |
| 2 | Hero con H1, subheadline, trust bullets, CTAs | ✅ |
| 3 | Servicios — 8 tarjetas | ✅ |
| 4 | Por qué elegirnos (4 trust signals + service area banner) | ✅ |
| 5 | Sobre la doctora + diferenciador tecnológico | ✅ |
| 6 | Galería (5 imágenes stock, reemplazables) | ✅ |
| 7 | Ubicación + Horarios + Google Maps embed | ✅ |
| 8 | Precios Nexo Sites (3 planes) | ✅ id=#pricing |
| 9 | Contacto CTA + info display-only | ✅ |
| 10 | Footer completo + redes sociales | ✅ |
| 11 | Sticky WhatsApp button (mobile) | ✅ |

---

## Reglas críticas implementadas
- Todos los CTAs primarios → Nexo Sites WhatsApp (NO el de la clínica)
- Teléfono y WA de la clínica: solo en Contact y Footer (display only)
- Sin testimonios (34 reseñas < umbral 100)
- Solo español
- SEO title + meta description + lang="es"
- data-testid en todos los elementos interactivos
- Imágenes de stock con comentarios para reemplazar con fotos reales

---

## Lo que está implementado (2026-03-31)

- Landing page completa, 1 página, 11 secciones
- Animaciones de scroll (IntersectionObserver / fade-up)
- Fuentes: Outfit (headings) + Manrope (body) via Google Fonts
- Paleta: #1B6CA8 (azul dental) + blancos + #25D366 (WhatsApp)
- Google Maps embed de la ubicación real
- Horario: Lun–Vie 8:00 AM–8:00 PM, Sáb 8:00 AM–6:00 PM
- Diferenciador tecnológico: monitor en tiempo real + TV con lentes
- Credencial: Colegio de Cirujanos Dentistas CR

---

## Backlog / Mejoras futuras

### P0 (antes del lanzamiento real)
- Reemplazar TODAS las imágenes de stock con fotos reales de la clínica y la doctora
- Verificar horario con la clínica y ajustar si es necesario
- Reemplazar placeholder del logo con logo real

### P1
- Formulario de contacto con envío de email o WhatsApp automático
- Sección FAQ (preguntas frecuentes sobre precios y tratamientos)
- Más fotos en la galería (hasta 8 como especificado en brief)

### P2
- Integración Google Analytics / Meta Pixel
- Animaciones más ricas con framer-motion
- Schema.org markup para SEO local

---

## URLs importantes
- Nexo WA: https://wa.me/50689939071?text=...
- Clínica WA: https://wa.me/50689175510
- Google Maps: https://www.google.com/maps/place/Clínica+Dental+Santa+Ana...
- Facebook: https://www.facebook.com/people/Clinica-Dental-Santa-Ana...
- Instagram: https://www.instagram.com/dental.avalon/
