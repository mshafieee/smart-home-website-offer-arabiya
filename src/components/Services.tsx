import React from 'react';
import { Lightbulb, Send as Sensor, Music, Blinds, Car, Thermometer, Shield, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Lightbulb,
      title: t('services.lighting.title'),
      description: t('services.lighting.desc'),
      features: [t('services.lighting.feature1'), t('services.lighting.feature2'), t('services.lighting.feature3'), t('services.lighting.feature4')]
    },
    {
      icon: Sensor,
      title: t('services.sensors.title'),
      description: t('services.sensors.desc'),
      features: [t('services.sensors.feature1'), t('services.sensors.feature2'), t('services.sensors.feature3'), t('services.sensors.feature4')]
    },
    {
      icon: Music,
      title: t('services.audio.title'),
      description: t('services.audio.desc'),
      features: [t('services.audio.feature1'), t('services.audio.feature2'), t('services.audio.feature3'), t('services.audio.feature4')]
    },
    {
      icon: Blinds,
      title: t('services.curtains.title'),
      description: t('services.curtains.desc'),
      features: [t('services.curtains.feature1'), t('services.curtains.feature2'), t('services.curtains.feature3'), t('services.curtains.feature4')]
    },
    {
      icon: Car,
      title: t('services.garage.title'),
      description: t('services.garage.desc'),
      features: [t('services.garage.feature1'), t('services.garage.feature2'), t('services.garage.feature3'), t('services.garage.feature4')]
    },
    {
      icon: Thermometer,
      title: t('services.climate.title'),
      description: t('services.climate.desc'),
      features: [t('services.climate.feature1'), t('services.climate.feature2'), t('services.climate.feature3'), t('services.climate.feature4')]
    },
    {
      icon: Shield,
      title: t('services.security.title'),
      description: t('services.security.desc'),
      features: [t('services.security.feature1'), t('services.security.feature2'), t('services.security.feature3'), t('services.security.feature4')]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-blue-100 group"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-800 transition-colors duration-300">
                  <IconComponent className="h-8 w-8 text-blue-800 group-hover:text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="text-blue-800 font-semibold flex items-center group/btn hover:text-blue-900 transition-colors">
                  {t('services.learnMore')}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-800 text-white px-8 py-4 rounded-lg hover:bg-blue-900 transition-colors duration-200 font-semibold">
            {t('services.getQuote')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;