import React, { useState, useEffect } from 'react';

const Navbar = ({ nexoWa }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Ubicación', href: '#ubicacion' },
    { label: 'Precios', href: '#pricing' },
  ];

  return (
    <nav
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#212121]/98 backdrop-blur-md shadow-lg border-b border-[#333333]'
          : 'bg-[#212121]/70 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" data-testid="navbar-logo" className="flex items-center">
          <span className="font-['Barlow_Condensed'] text-xl font-black uppercase text-white tracking-tight">
            La Firma <span className="text-[#C62828]">Automotriz</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-[#C62828] text-xs font-bold uppercase tracking-widest transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href={nexoWa}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="navbar-cta-btn"
          className="hidden md:inline-flex bg-[#C62828] hover:bg-[#B71C1C] text-white text-xs font-bold uppercase tracking-widest px-5 py-2.5 transition-colors duration-200"
        >
          WhatsApp
        </a>

        {/* Mobile menu button */}
        <button
          data-testid="mobile-menu-btn"
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <div className="w-5 h-0.5 bg-white mb-1" />
          <div className="w-5 h-0.5 bg-white mb-1" />
          <div className="w-5 h-0.5 bg-white" />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#212121] border-t border-[#333333] px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-gray-300 hover:text-[#C62828] text-xs font-bold uppercase tracking-widest py-2 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={nexoWa}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-[#C62828] text-white text-xs font-bold uppercase tracking-widest px-4 py-3 text-center transition-colors"
          >
            Escríbenos por WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
