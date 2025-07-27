import React from 'react';
import { MessageCircle, PenTool, Settings, GraduationCap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const HowItWorks = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: MessageCircle,
      step: '01',
      title: t('howItWorks.step1.title'),
      description: t('howItWorks.step1.desc'),
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: PenTool,
      step: '02',
      title: t('howItWorks.step2.title'),
      description: t('howItWorks.step2.desc'),
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Settings,
      step: '03',
      title: t('howItWorks.step3.title'),
      description: t('howItWorks.step3.desc'),
      image: 'https://images.pexels.com/photos/298660/pexels-photo-298660.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: GraduationCap,
      step: '04',
      title: t('howItWorks.step4.title'),
      description: t('howItWorks.step4.desc'),
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('howItWorks.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('howItWorks.subtitle')}
          </p>
        </div>

        <div className="space-y-16">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isEven = index % 2 === 1;
            
            return (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-800 text-white text-xl font-bold w-12 h-12 rounded-full flex items-center justify-center">
                      {step.step}
                    </div>
                    <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center">
                      <IconComponent className="h-8 w-8 text-blue-800" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900">
                    {step.title}
                  </h3>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <button className="text-blue-800 font-semibold hover:text-blue-900 transition-colors">
                    {t('howItWorks.learnMore')}
                  </button>
                </div>

                {/* Image */}
                <div className="flex-1">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <button className="bg-green-500 text-white px-8 py-4 rounded-lg hover:bg-green-600 transition-colors duration-200 font-semibold">
            {t('howItWorks.startJourney')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;