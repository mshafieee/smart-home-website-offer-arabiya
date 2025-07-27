import React from 'react';
import { Award, Users, Shield, Clock, HeadphonesIcon, Star } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Award,
      title: '7+ Years Experience',
      description: 'Extensive experience in home automation with hundreds of successful installations across Saudi Arabia.',
      highlight: 'Industry Leader'
    },
    {
      icon: Users,
      title: '500+ Satisfied Customers',
      description: 'Join our growing family of happy customers who trust us with their smart home needs.',
      highlight: 'Proven Track Record'
    },
    {
      icon: Shield,
      title: 'Certified Technicians',
      description: 'Our team consists of certified professionals with ongoing training in the latest smart home technologies.',
      highlight: 'Expert Installation'
    },
    {
      icon: Clock,
      title: '2-Year Warranty',
      description: 'Comprehensive warranty coverage on all installations with free maintenance and support.',
      highlight: 'Peace of Mind'
    },
    {
      icon: HeadphonesIcon,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and maintenance services to keep your smart home running perfectly.',
      highlight: 'Always Available'
    },
    {
      icon: Star,
      title: 'Free Consultation',
      description: 'Complimentary home assessment and system design consultation with no obligation.',
      highlight: 'No Hidden Costs'
    }
  ];

  const certifications = [
    'Control4 Certified',
    'KNX Certified',
    'Lutron Certified',
    'Sonos Certified',
    'Hikvision Partner',
    'ISO 9001 Certified'
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Offer Arabiya?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With over 7 years of experience and 500+ successful installations, 
            we're Saudi Arabia's trusted smart home automation experts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group relative overflow-hidden"
              >
                {/* Highlight Badge */}
                <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {reason.highlight}
                </div>

                <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-800 transition-colors duration-300">
                  <IconComponent className="h-8 w-8 text-blue-800 group-hover:text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {reason.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Certifications */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Our Certifications & Partnerships
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-lg p-4 text-center hover:bg-blue-50 transition-colors duration-200"
              >
                <div className="text-sm font-semibold text-gray-800">
                  {cert}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Promise */}
        <div className="bg-gradient-to-r from-blue-800 to-blue-900 rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-6">
            Our Promise to You
          </h3>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold mb-2">100%</div>
              <div className="text-blue-200">Quality Guarantee</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">On-Time</div>
              <div className="text-blue-200">Project Delivery</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">Zero</div>
              <div className="text-blue-200">Hidden Costs</div>
            </div>
          </div>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            We stand behind our work with comprehensive warranties, transparent pricing, 
            and a commitment to delivering exactly what we promise, on time and on budget.
          </p>
          <button className="bg-green-500 text-white px-8 py-4 rounded-lg hover:bg-green-600 transition-colors duration-200 font-semibold">
            Start Your Project Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;