import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#gallery' },
    { name: 'About Us', href: '#why-choose-us' },
    { name: 'Contact', href: '#contact' },
    { name: 'Free Quote', href: '#contact' }
  ];

  const services = [
    'Smart Lighting Control',
    'Security Systems',
    'Audio & Sound Systems',
    'Climate Control',
    'Sensors & Automation',
    'Smart Curtains'
  ];

  const locations = [
    'Riyadh',
    'Jeddah',
    'Dammam',
    'Khobar',
    'Dhahran',
    'Mecca'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-4">
                Offer<span className="text-green-500">Arabiya</span>
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Saudi Arabia's premier smart home automation company. 
                Transforming homes with cutting-edge technology and 
                professional installation services since 2017.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-3 text-green-500" />
                <span>+966 50 XXX XXXX</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-3 text-green-500" />
                <span>info@offerarabiya.sa</span>
              </div>
              <div className="flex items-start text-gray-300">
                <MapPin className="h-4 w-4 mr-3 mt-1 text-green-500" />
                <span>King Fahd Road, Riyadh 12345<br />Saudi Arabia</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-green-500 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-gray-300 hover:text-green-500 transition-colors duration-200"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">
              Service Areas
            </h4>
            <ul className="space-y-3 mb-6">
              {locations.map((location, index) => (
                <li key={index}>
                  <span className="text-gray-300">{location}</span>
                </li>
              ))}
            </ul>
            
            {/* Social Media */}
            <div>
              <h5 className="text-sm font-semibold text-white mb-4">
                Follow Us
              </h5>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-500 transition-colors duration-200"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-500 transition-colors duration-200"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-500 transition-colors duration-200"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-500 transition-colors duration-200"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Offer Arabiya. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;