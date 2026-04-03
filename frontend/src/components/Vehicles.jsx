import React from 'react';
import { Car } from 'lucide-react';

const Vehicles = () => (
  <section data-testid="vehicles-section" className="bg-[#1A1A1A] py-12 border-y border-[#333333]">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
        <Car className="w-8 h-8 text-[#C62828] flex-shrink-0" />
        <p className="font-['Barlow_Condensed'] text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white">
          Autos, pickups y SUVs de{' '}
          <span className="text-[#C62828]">todas las marcas</span>
        </p>
      </div>
    </div>
  </section>
);

export default Vehicles;
