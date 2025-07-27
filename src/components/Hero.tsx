import React from 'react';
import { ArrowRight, Shield, Users, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="bg-gradient-to-br from-slate-50 to-blue-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {t('hero.title')}{' '}
                <span className="text-blue-800">{t('hero.titleHighlight')}</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {t('hero.subtitle')}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-800 text-white px-8 py-4 rounded-lg hover:bg-blue-900 transition-all duration-200 font-semibold flex items-center justify-center group">
                {t('hero.getQuote')}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-blue-800 text-blue-800 px-8 py-4 rounded-lg hover:bg-blue-800 hover:text-white transition-all duration-200 font-semibold">
                {t('hero.viewWork')}
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="h-8 w-8 text-green-500" />
                </div>
                <div className="text-2xl font-bold text-gray-900">7+</div>
                <div className="text-sm text-gray-600">{t('hero.experience')}</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-8 w-8 text-green-500" />
                </div>
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">{t('hero.homes')}</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Shield className="h-8 w-8 text-green-500" />
                </div>
                <div className="text-2xl font-bold text-gray-900">100%</div>
                <div className="text-sm text-gray-600">{t('hero.certified')}</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Modern smart home interior"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border">
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{t('hero.warranty')}</div>
                  <div className="text-sm text-gray-600">{t('hero.warrantyDesc')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;