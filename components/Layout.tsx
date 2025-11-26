import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Instagram, Facebook, MapPin, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '../data';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'الرئيسية', path: '/' },
    { name: 'عن WATIED', path: '/about' },
    { name: 'خدماتنا', path: '/services' },
    { name: 'أعمالنا', path: '/projects' },
    { name: 'اتصل بنا', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800 bg-watied-beige">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-watied-beige/95 backdrop-blur-md shadow-sm border-b border-watied-olive/20">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img 
              src={COMPANY_INFO.logo} 
              alt="WATIED Logo" 
              className="h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
            />
            <span className="text-xl font-extrabold text-watied-purple hidden sm:block tracking-wide">WATIED</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-lg font-medium transition-colors duration-300 ${
                  isActive(link.path) 
                    ? 'text-watied-purple font-bold border-b-2 border-watied-purple' 
                    : 'text-watied-olive hover:text-watied-purple'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-watied-purple p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-watied-beige shadow-lg border-t border-watied-olive/10 flex flex-col p-4 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`py-3 text-lg border-b border-watied-olive/10 last:border-0 ${
                  isActive(link.path) ? 'text-watied-purple font-bold' : 'text-watied-olive'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-watied-olive text-watied-beige py-12 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1: Brand */}
            <div className="text-center md:text-right space-y-4">
              <img src={COMPANY_INFO.logo} alt="Logo" className="h-16 w-auto mx-auto md:mx-0 brightness-0 invert opacity-90" />
              <p className="text-sm opacity-80 leading-relaxed max-w-xs mx-auto md:mx-0">
                نحول المشاريع من مجرد أنشطة قائمة إلى علامات تجارية راسخة وناجحة. فلسفتنا راسخة: نعالج جذور التحديات لا المظاهر.
              </p>
            </div>

            {/* Column 2: Links */}
            <div className="text-center md:text-right">
              <h3 className="text-xl font-bold mb-4 text-white border-b-2 border-watied-brown inline-block pb-1">روابط سريعة</h3>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="hover:text-watied-brown transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div className="text-center md:text-right space-y-4">
              <h3 className="text-xl font-bold mb-4 text-white border-b-2 border-watied-brown inline-block pb-1">بيانات التواصل</h3>
              <div className="flex flex-col gap-3 items-center md:items-start">
                <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center gap-2 hover:text-watied-brown transition-colors">
                  <Phone size={18} /> <span dir="ltr">{COMPANY_INFO.phone}</span>
                </a>
                <div className="flex items-center gap-2">
                  <MapPin size={18} /> <span>{COMPANY_INFO.location}</span>
                </div>
                <div className="flex gap-4 mt-2">
                  <a href={COMPANY_INFO.facebook} target="_blank" rel="noopener noreferrer" className="p-2 bg-watied-beige text-watied-purple rounded-full hover:bg-watied-brown hover:text-white transition-all">
                    <Facebook size={20} />
                  </a>
                  <a href={COMPANY_INFO.instagram} target="_blank" rel="noopener noreferrer" className="p-2 bg-watied-beige text-watied-purple rounded-full hover:bg-watied-brown hover:text-white transition-all">
                    <Instagram size={20} />
                  </a>
                  <a href={COMPANY_INFO.whatsapp} target="_blank" rel="noopener noreferrer" className="p-2 bg-watied-beige text-watied-purple rounded-full hover:bg-watied-brown hover:text-white transition-all">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-6 border-t border-white/20 text-center text-sm opacity-60">
            © {new Date().getFullYear()} {COMPANY_INFO.name}. جميع الحقوق محفوظة.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;