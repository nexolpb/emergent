import React from 'react';
import { MapPin, Phone, Clock, Facebook } from 'lucide-react';

const Footer = () => (
  <footer data-testid="footer-section" className="bg-[#111111] border-t border-[#333333] py-14">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
        {/* Brand */}
        <div>
          <h3 className="font-['Barlow_Condensed'] text-2xl font-black uppercase text-white tracking-tight mb-2">
            La Firma <span className="text-[#C62828]">Automotriz</span>
          </h3>
          <p className="text-gray-400 text-xs mb-1">Servicio Integral Automotriz</p>
          <p className="text-gray-500 text-xs leading-relaxed mt-3">
            Taller de confianza │ Garantía en reparaciones
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-5">Contacto</h4>
          <div className="space-y-3">
            <FooterRow icon={Phone}>8410-0000</FooterRow>
            <FooterRow icon={MapPin}>
              C. 67, Barrio María Auxiliadora,
              <br />
              Curridabat, San José, CR
            </FooterRow>
            <div className="flex items-center gap-2">
              <Facebook className="w-3.5 h-3.5 text-[#C62828] flex-shrink-0" />
              <a
                href="https://www.facebook.com/LaFirmaAutomotrizCR/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 text-xs hover:text-[#C62828] transition-colors"
              >
                /LaFirmaAutomotrizCR
              </a>
            </div>
          </div>
        </div>

        {/* Hours */}
        {/* <!-- VERIFY HOURS WITH CLIENT --> */}
        <div>
          <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-5">Horario</h4>
          <FooterRow icon={Clock}>
            Lunes–Viernes: 8AM–6PM
            <br />
            Sábados: 8AM–1PM
          </FooterRow>
          <p className="text-gray-500 text-xs mt-4 leading-relaxed">
            Curridabat · San Francisco de Dos Ríos
            <br />
            San Pedro y alrededores
          </p>
        </div>
      </div>

      <div className="border-t border-[#333333] pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-gray-500 text-xs text-center">
          © 2026 La Firma Automotriz. Todos los derechos reservados.
        </p>
        <p className="text-gray-500 text-xs text-center">
          Vista previa creada por{' '}
          <a
            href="https://sites.nexodigitalops.com/es/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C62828] hover:underline"
          >
            Nexo Sites
          </a>{' '}
          · nexodigitalops.com/es/
        </p>
      </div>
    </div>
  </footer>
);

const FooterRow = ({ icon: Icon, children }) => (
  <div className="flex items-start gap-2">
    <Icon className="w-3.5 h-3.5 text-[#C62828] flex-shrink-0 mt-0.5" />
    <span className="text-gray-400 text-xs leading-relaxed">{children}</span>
  </div>
);

export default Footer;
