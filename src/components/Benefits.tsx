import React from 'react';
import { Shield, DollarSign, Smartphone, TrendingUp, Clock, Heart } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: '24/7 monitoring and control with smart locks, cameras, and alarm systems for complete peace of mind.',
      stat: '95% crime reduction'
    },
    {
      icon: DollarSign,
      title: 'Energy Savings',
      description: 'Reduce electricity bills by up to 30% with smart lighting, climate control, and automated systems.',
      stat: '30% bill reduction'
    },
    {
      icon: Smartphone,
      title: 'Ultimate Convenience',
      description: 'Control everything from your smartphone - lights, temperature, security, and entertainment systems.',
      stat: 'One-touch control'
    },
    {
      icon: TrendingUp,
      title: 'Increased Property Value',
      description: 'Smart homes sell for 10-15% more than traditional homes and attract more buyers.',
      stat: '15% value increase'
    },
    {
      icon: Clock,
      title: 'Time Saving',
      description: 'Automated routines and schedules save hours each week on manual home management tasks.',
      stat: '5+ hours saved weekly'
    },
    {
      icon: Heart,
      title: 'Improved Lifestyle',
      description: 'Better sleep, mood lighting, perfect temperature, and entertainment at your fingertips.',
      stat: '100% satisfaction'
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Smart Home Automation?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your lifestyle while saving money and increasing your home's value 
            with our professional automation solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="bg-gradient-to-br from-blue-100 to-green-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="h-8 w-8 text-blue-800" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {benefit.description}
                </p>
                
                <div className="bg-green-50 px-4 py-2 rounded-lg inline-block">
                  <span className="text-green-800 font-semibold text-sm">
                    {benefit.stat}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-white rounded-2xl p-12 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Experience These Benefits?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who have transformed their homes 
            with Offer Arabiya's smart automation solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-800 text-white px-8 py-4 rounded-lg hover:bg-blue-900 transition-colors duration-200 font-semibold">
              Schedule Free Consultation
            </button>
            <button className="border-2 border-blue-800 text-blue-800 px-8 py-4 rounded-lg hover:bg-blue-800 hover:text-white transition-all duration-200 font-semibold">
              Calculate Your Savings
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;