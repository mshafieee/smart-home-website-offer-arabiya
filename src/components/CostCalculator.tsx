import React, { useState } from 'react';
import { Calculator, Home, Settings, DollarSign, ArrowRight } from 'lucide-react';

const CostCalculator = () => {
  const [formData, setFormData] = useState({
    homeSize: '200',
    rooms: '4',
    services: [],
    budget: '50000'
  });
  
  const [estimate, setEstimate] = useState(null);

  const serviceOptions = [
    { id: 'lighting', name: 'Smart Lighting Control', basePrice: 5000 },
    { id: 'security', name: 'Security Systems', basePrice: 8000 },
    { id: 'audio', name: 'Audio & Sound Systems', basePrice: 12000 },
    { id: 'climate', name: 'Climate Control', basePrice: 6000 },
    { id: 'sensors', name: 'Sensors & Automation', basePrice: 4000 },
    { id: 'curtains', name: 'Smart Curtains', basePrice: 3000 },
    { id: 'garage', name: 'Garage Door Control', basePrice: 2500 }
  ];

  const handleServiceChange = (serviceId) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter(id => id !== serviceId)
        : [...prev.services, serviceId]
    }));
  };

  const calculateEstimate = () => {
    const sizeMultiplier = parseInt(formData.homeSize) / 200;
    const roomMultiplier = parseInt(formData.rooms) / 4;
    
    let total = 0;
    formData.services.forEach(serviceId => {
      const service = serviceOptions.find(s => s.id === serviceId);
      if (service) {
        total += service.basePrice * sizeMultiplier * roomMultiplier;
      }
    });

    setEstimate({
      total: Math.round(total),
      monthly: Math.round(total / 24), // 24 month financing
      savings: Math.round(total * 0.25) // 25% annual savings estimate
    });
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
            <Calculator className="h-8 w-8 text-blue-800" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Smart Home Cost Calculator
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get an instant estimate for your smart home automation project. 
            Customize based on your home size and desired features.
          </p>
        </div>

        <div className="bg-slate-50 rounded-2xl p-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <div className="space-y-6">
              {/* Home Size */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  <Home className="inline h-4 w-4 mr-2" />
                  Home Size (Square Meters)
                </label>
                <select
                  value={formData.homeSize}
                  onChange={(e) => setFormData(prev => ({ ...prev, homeSize: e.target.value }))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="150">150 sqm - Small apartment</option>
                  <option value="200">200 sqm - Medium house</option>
                  <option value="300">300 sqm - Large house</option>
                  <option value="500">500 sqm - Villa</option>
                  <option value="800">800+ sqm - Large villa</option>
                </select>
              </div>

              {/* Number of Rooms */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  <Settings className="inline h-4 w-4 mr-2" />
                  Number of Rooms
                </label>
                <select
                  value={formData.rooms}
                  onChange={(e) => setFormData(prev => ({ ...prev, rooms: e.target.value }))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="2">2 rooms</option>
                  <option value="3">3 rooms</option>
                  <option value="4">4 rooms</option>
                  <option value="5">5 rooms</option>
                  <option value="6">6+ rooms</option>
                </select>
              </div>

              {/* Services */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Desired Services (Select all that apply)
                </label>
                <div className="space-y-2">
                  {serviceOptions.map((service) => (
                    <label key={service.id} className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-gray-200 hover:border-blue-300 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.services.includes(service.id)}
                        onChange={() => handleServiceChange(service.id)}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="flex-1 text-sm font-medium text-gray-900">
                        {service.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        from SAR {service.basePrice.toLocaleString()}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Budget Range */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  <DollarSign className="inline h-4 w-4 mr-2" />
                  Budget Range (SAR)
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData(prev => ({ ...prev, budget: e.target.value }))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="25000">SAR 25,000 - 50,000</option>
                  <option value="50000">SAR 50,000 - 100,000</option>
                  <option value="100000">SAR 100,000 - 200,000</option>
                  <option value="200000">SAR 200,000+</option>
                </select>
              </div>

              <button
                onClick={calculateEstimate}
                disabled={formData.services.length === 0}
                className="w-full bg-blue-800 text-white px-6 py-4 rounded-lg hover:bg-blue-900 transition-colors duration-200 font-semibold flex items-center justify-center disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                Calculate Estimate
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>

            {/* Results */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              {estimate ? (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Your Estimate
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                      <span className="text-gray-700 font-medium">Total Investment</span>
                      <span className="text-2xl font-bold text-blue-800">
                        SAR {estimate.total.toLocaleString()}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                      <span className="text-gray-700 font-medium">Monthly Payment (24 months)</span>
                      <span className="text-xl font-bold text-green-600">
                        SAR {estimate.monthly.toLocaleString()}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center p-4 bg-yellow-50 rounded-lg">
                      <span className="text-gray-700 font-medium">Annual Energy Savings</span>
                      <span className="text-xl font-bold text-yellow-600">
                        SAR {estimate.savings.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                        Professional installation & setup
                      </li>
                      <li className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                        2-year warranty on all equipment
                      </li>
                      <li className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                        Mobile app configuration
                      </li>
                      <li className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                        Training & 24/7 support
                      </li>
                    </ul>
                  </div>

                  <button className="w-full bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors duration-200 font-semibold">
                    Get Detailed Quote
                  </button>
                </div>
              ) : (
                <div className="text-center py-12">
                  <Calculator className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-500 mb-2">
                    Ready to Calculate?
                  </h3>
                  <p className="text-gray-400">
                    Select your desired services and click calculate to see your personalized estimate.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CostCalculator;