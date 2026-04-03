import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Vehicles from './components/Vehicles';
import WhyUs from './components/WhyUs';
import HowItWorks from './components/HowItWorks';
import Reviews from './components/Reviews';
import Location from './components/Location';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import StickyWhatsApp from './components/StickyWhatsApp';

const NEXO_WA =
  'https://wa.me/50689939071?text=Hola%2C+vi+la+vista+previa+del+sitio+para+La+Firma+Automotriz.+%C2%BFMe+la+puede+compartir+y+decirme+el+precio+para+publicarla%3F';

const LandingPage = () => (
  <>
    <Navbar nexoWa={NEXO_WA} />
    <Hero nexoWa={NEXO_WA} />
    <Services />
    <Vehicles />
    <WhyUs />
    <HowItWorks />
    <Reviews />
    <Location />
    <Pricing nexoWa={NEXO_WA} />
    <Footer />
    <StickyWhatsApp nexoWa={NEXO_WA} />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
