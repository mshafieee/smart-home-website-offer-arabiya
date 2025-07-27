import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';

const Header = () => {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.projects'), href: '#gallery' },
    { name: t('nav.about'), href: '#why-choose-us' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-800">
              Offer<span className="text-green-500">Arabiya</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-800 transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Phone and CTA */}
          <div className="hidden lg:flex items-center space-x-4 rtl:space-x-reverse">
            <LanguageToggle />
            <div className="flex items-center text-blue-800">
              <Phone className="h-4 w-4 mr-2" />
              <span className="font-semibold">{t('header.phone')}</span>
            </div>
            <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors duration-200 font-medium">
              {t('header.consultation')}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-800 transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-2">
                <LanguageToggle />
              </div>
              <div className="flex items-center text-blue-800 pt-2">
                <Phone className="h-4 w-4 mr-2" />
                <span className="font-semibold">{t('header.phone')}</span>
              </div>
              <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors duration-200 font-medium w-fit">
                {t('header.consultation')}
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;