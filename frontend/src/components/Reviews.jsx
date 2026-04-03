import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  { initials: 'C.M.' },
  { initials: 'R.A.' },
  { initials: 'M.V.' },
];

const StarRow = ({ count = 5 }) => (
  <div className="flex gap-1 mb-4">
    {[...Array(count)].map((_, i) => (
      <Star key={i} className="w-4 h-4 text-[#C62828] fill-[#C62828]" />
    ))}
  </div>
);

const Reviews = () => (
  <section data-testid="reviews-section" className="bg-[#F5F5F5] py-24 md:py-32">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      {/* Header */}
      <div className="text-center mb-16">
        {/* Google rating badge */}
        <div className="inline-flex items-center gap-4 bg-white border border-[#E5E5E5] px-6 py-4 shadow-sm mb-8">
          <div className="text-center">
            <div className="flex gap-1 justify-center mb-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < 4
                      ? 'text-[#C62828] fill-[#C62828]'
                      : 'text-[#C62828] fill-[#C62828]/25'
                  }`}
                />
              ))}
            </div>
            <p className="font-['Barlow_Condensed'] font-bold text-[#1A1A1A] text-2xl">4.3</p>
          </div>
          <div className="border-l border-[#E5E5E5] pl-4">
            <p className="text-[#1A1A1A] text-sm font-bold">44 reseñas</p>
            <p className="text-[#52525B] text-xs">en Google</p>
          </div>
        </div>

        <p className="text-xs font-bold uppercase tracking-widest text-[#C62828] mb-3">
          Testimonios
        </p>
        <h2 className="font-['Barlow_Condensed'] text-4xl sm:text-5xl font-bold uppercase tracking-tight text-[#1A1A1A]">
          Lo que dicen nuestros clientes
        </h2>
      </div>

      {/* Review cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((review, i) => (
          <div
            key={i}
            data-testid={`review-card-${i}`}
            className="bg-white border border-[#E5E5E5] p-8 hover:shadow-md transition-shadow duration-300"
          >
            <StarRow />
            <div className="flex items-center gap-3 mt-4">
              <div className="w-10 h-10 rounded-full bg-[#C62828]/10 flex items-center justify-center flex-shrink-0">
                <span className="text-[#C62828] font-bold text-sm">{review.initials}</span>
              </div>
              <div>
                <p className="text-[#1A1A1A] font-bold text-sm">{review.initials}</p>
                <p className="text-[#52525B] text-xs">Cliente verificado · Google</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Reviews;
