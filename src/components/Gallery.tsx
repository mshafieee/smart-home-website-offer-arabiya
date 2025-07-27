import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Gallery = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      title: 'Modern Villa Smart Lighting',
      location: 'Riyadh',
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete lighting automation with mood scenes',
      testimonial: 'The lighting system has completely transformed our living experience.',
      client: 'Ahmed Al-Rashid'
    },
    {
      title: 'Luxury Home Theater System',
      location: 'Jeddah',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Multi-room audio with integrated home theater',
      testimonial: 'Movie nights have never been better. The sound quality is incredible.',
      client: 'Sarah Mohammed'
    },
    {
      title: 'Smart Security Integration',
      location: 'Dammam',
      image: 'https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'CCTV, smart locks, and comprehensive security',
      testimonial: 'We feel completely secure knowing our home is protected 24/7.',
      client: 'Khalid Al-Zahrani'
    },
    {
      title: 'Climate Control System',
      location: 'Riyadh',
      image: 'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Smart thermostats with zone control',
      testimonial: 'Our electricity bills dropped by 30% after the installation.',
      client: 'Fatima Al-Otaibi'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('gallery.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('gallery.subtitle')}
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative mb-12">
          <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={projects[currentSlide].image}
              alt={projects[currentSlide].title}
              className="w-full h-full object-cover"
            />
            
            {/* Overlay Content */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-8 text-white">
                <h3 className="text-3xl font-bold mb-2">
                  {projects[currentSlide].title}
                </h3>
                <p className="text-lg mb-4 opacity-90">
                  {projects[currentSlide].description} • {projects[currentSlide].location}
                </p>
                
                {/* Testimonial */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 max-w-md">
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm italic mb-2">
                    "{projects[currentSlide].testimonial}"
                  </p>
                  <p className="text-xs font-semibold">
                    - {projects[currentSlide].client}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex justify-center space-x-4 mb-12">
          {projects.map((project, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                index === currentSlide
                  ? 'border-blue-800 scale-110'
                  : 'border-transparent hover:border-gray-300'
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-blue-800 text-white px-8 py-4 rounded-lg hover:bg-blue-900 transition-colors duration-200 font-semibold">
            {t('gallery.viewAll')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;