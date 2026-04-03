# PRD — La Firma Automotriz Landing Page
**Proyecto:** Vista previa de sitio web creada por Nexo Sites  
**Fecha de creación:** 2026-04-03  
**Stack:** React 19 + Tailwind CSS + FastAPI + MongoDB

---

## Descripción del proyecto
Landing page de una sola página (single-page) para La Firma Automotriz, taller automotriz en Curridabat, San José, Costa Rica. Es una **vista previa de ventas** construida por Nexo Sites — NO el sitio propio del negocio.

---

## Personas objetivo
- **Comprador:** Nexo Sites (agencia digital) que vende el sitio al taller
- **Usuario final:** Dueños de vehículos en Curridabat, San Francisco de Dos Ríos, San Pedro y alrededores

---

## Requisitos estáticos (no cambian)
- Todos los CTA primarios deben apuntar al WhatsApp de ventas de Nexo Sites
- Teléfono 8410-0000 = solo display (nunca como CTA)
- Solo español, sin toggle de idioma
- Sin logos de marcas, sin EV/Hybrid, sin garantía ni certificaciones declaradas
- Sección de precios con id="pricing" (destino del CTA "Ver precios")
- Copyright 2026, crédito "Nexo Sites"

---

## Nexo Sites WA URL
```
https://wa.me/50689939071?text=Hola%2C+vi+la+vista+previa+del+sitio+para+La+Firma+Automotriz.+%C2%BFMe+la+puede+compartir+y+decirme+el+precio+para+publicarla%3F
```

---

## Arquitectura implementada

### Frontend (`/app/frontend/src/`)
- `App.js` — Ensamblaje de todos los componentes + BrowserRouter con catch-all route
- `components/Navbar.jsx` — Navbar sticky con scroll effect + menú mobile
- `components/Hero.jsx` — Hero section con imagen de fondo, H1, CTAs duales
- `components/Services.jsx` — 6 tarjetas de servicios con iconos lucide-react
- `components/Vehicles.jsx` — Banner oscuro "Autos, pickups y SUVs de todas las marcas"
- `components/WhyUs.jsx` — Sección dark con imagen + 4 badges de confianza
- `components/HowItWorks.jsx` — 3 pasos + imagen de mecánico
- `components/Reviews.jsx` — Badge Google + 3 tarjetas placeholder (C.M., R.A., M.V.)
- `components/Location.jsx` — Dirección, horario, teléfono, mapa Google embed
- `components/Pricing.jsx` — Sección roja #C62828 con teaser de precios Nexo Sites
- `components/Footer.jsx` — Footer oscuro con info completa + crédito Nexo Sites
- `components/StickyWhatsApp.jsx` — Botón flotante verde único

### Backend (`/app/backend/server.py`)
- FastAPI con endpoints básicos (no se usa activamente — landing page es estática)

---

## Configuración de diseño
- **Colores:** `#212121` (dark base), `#C62828` (red accent), `#F5F5F5` (light bg), `#25D366` (WhatsApp)
- **Tipografía:** Barlow Condensed (headings, bold/black/uppercase) + Inter (body)
- **Ritmo de secciones:** Dark hero → Light services → Dark vehicles strip → Dark why us → Light how it works → Light reviews → Light location → Red pricing (#C62828) → Dark footer
- **Mobile-first:** Grids responsivos, menú hamburger, sticky button thumb-friendly en 390px
- `package.json` tiene `"homepage": "."` para export seguro a Netlify

---

## Lo implementado (2026-04-03)
- [x] Sección Hero con imagen de fondo de mecánico, H1, bullets de confianza, 2 CTAs
- [x] Sección Servicios (6 tarjetas con iconos)
- [x] Banner Vehículos (todas las marcas)
- [x] Sección ¿Por qué elegirnos? (4 badges + imagen)
- [x] Sección Cómo Funciona (3 pasos + imagen)
- [x] Sección Reseñas (rating badge Google 4.3/5 + 3 tarjetas placeholder)
- [x] Sección Ubicación/Contacto (mapa embed, dirección, horario, Facebook)
- [x] Sección Precios (#pricing) — teaser Nexo Sites $349
- [x] Footer completo con copyright 2026 y crédito Nexo Sites
- [x] Botón WhatsApp sticky flotante (único)
- [x] Meta tags SEO (title, description, og:*)
- [x] Google Fonts: Barlow Condensed + Inter
- [x] homepage: "." en package.json (Netlify-ready)
- [x] Catch-all route React (path="*")
- [x] Tests: 19/20 PASS (1 PARTIAL = título en preview platform, no es bug de código)

---

## Backlog priorizado

### P0 — Antes del lanzamiento (acción del cliente)
- [ ] Verificar horarios con cliente (marcado con `<!-- VERIFY HOURS WITH CLIENT -->`)
- [ ] Reemplazar imágenes de stock con fotos reales del taller (marcadas con `<!-- REPLACE with real client photo before launch -->`)
- [ ] Confirmar o conseguir WhatsApp del negocio

### P1 — Mejoras opcionales
- [ ] Agregar WhatsApp del negocio si el cliente lo confirma (en sección Contacto, NO como CTA)
- [ ] Sección de galería de trabajos (antes/después)
- [ ] Formulario de contacto alternativo al WhatsApp

### P2 — Extras
- [ ] Animaciones scroll-triggered con Intersection Observer
- [ ] Open Graph image (og:image) real del taller
- [ ] Sitemap.xml para SEO

---

## Comandos útiles
```bash
# Frontend
cd /app/frontend && yarn start

# Backend
cd /app/backend && uvicorn server:app --reload --port 8001

# Supervisor
sudo supervisorctl restart frontend
sudo supervisorctl restart backend
```

---

## URL de preview
`https://mecanica-curridabat.preview.emergentagent.com`
