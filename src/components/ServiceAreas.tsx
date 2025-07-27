import React from 'react';
import { MapPin, CheckCircle, Phone } from 'lucide-react';

const ServiceAreas = () => {
  const cities = [
    {
      name: 'Riyadh',
      description: 'Complete coverage including surrounding areas',
      projects: '200+',
      popular: true
    },
    {
      name: 'Jeddah',
      description: 'Western Province headquarters',
      projects: '150+',
      popular: true
    },
    {
      name: 'Dammam',
      description: 'Eastern Province coverage',
      projects: '100+',
      popular: true
    },
    {
      name: 'Khobar',
      description: 'Full installation services',
      projects: '75+'
    },
    {
      name: 'Dhahran',
      description: 'Residential and commercial',
      projects: '50+'
    },
    {
      name: 'Mecca',
      description: 'Holy city smart homes',
      projects: '40+'
    },
    {
      name: 'Medina',
      description: 'Professional installations',
      projects: '35+'
    },
    {
      name: 'Taif',
      description: 'Mountain region coverage',
      projects: '25+'
    }
  ];

  const serviceFeatures = [
    'Free consultation and site survey',
    'Same-day emergency support',
    'Local technician teams',
    'Arabic and English support',
    'Government project experience',
    'Commercial and residential'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
            <MapPin className="h-8 w-8 text-blue-800" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Service Areas Across Saudi Arabia
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide professional smart home installation services across major cities 
            in Saudi Arabia with local teams and same-day support.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Cities Grid */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Cities We Serve
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {cities.map((city, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl border-2 transition-all duration-200 hover:shadow-lg ${
                    city.popular
                      ? 'border-blue-200 bg-blue-50 hover:border-blue-300'
                      : 'border-gray-200 bg-gray-50 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-bold text-gray-900">
                      {city.name}
                    </h4>
                    {city.popular && (
                      <span className="bg-blue-800 text-white text-xs font-semibold px-2 py-1 rounded-full">
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    {city.description}
                  </p>
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    <span className="text-sm font-semibold">
                      {city.projects} completed projects
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Service Features & Map */}
          <div className="space-y-8">
            {/* Service Features */}
            <div className="bg-slate-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                What We Offer in Each City
              </h3>
              <div className="space-y-4">
                {serviceFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl p-8 text-center">
              <MapPin className="h-16 w-16 text-blue-800 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                Interactive Service Map
              </h4>
              <p className="text-gray-600 mb-6">
                View our coverage areas and find the nearest service team to your location.
              </p>
              <button className="bg-blue-800 text-white px-6 py-3 rounded-lg hover:bg-blue-900 transition-colors duration-200 font-semibold">
                View Full Map
              </button>
            </div>

            {/* Contact CTA */}
            <div className="bg-green-500 rounded-2xl p-8 text-white text-center">
              <Phone className="h-12 w-12 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-4">
                Don't See Your City?
              </h4>
              <p className="mb-6 opacity-90">
                We're expanding our services! Contact us to discuss coverage in your area.
              </p>
              <div className="space-y-3">
                <div className="text-lg font-semibold">
                  📞 +966 50 XXX XXXX
                </div>
                <button className="bg-white text-green-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold">
                  Request Service in My Area
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;