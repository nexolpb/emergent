import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import About from './components/About';
import Gallery from './components/Gallery';
import LocationHours from './components/LocationHours';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StickyButton from './components/StickyButton';

function App() {
  return (
    <div className="App bg-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <About />
        <Gallery />
        <LocationHours />
        <Pricing />
        <Contact />
      </main>
      <Footer />
      <StickyButton />
    </div>
  );
}

export default App;
