import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+966 50 XXX XXXX', '+966 50 XXX XXXY'],
      description: '24/7 Emergency Support'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@offerarabiya.sa', 'support@offerarabiya.sa'],
      description: 'Response within 2 hours'
    },
    {
      icon: MapPin,
      title: 'Office',
      details: ['Riyadh Head Office', 'King Fahd Road, Riyadh 12345'],
      description: 'Visit our showroom'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Sunday - Thursday: 8AM - 8PM', 'Friday - Saturday: 10AM - 6PM'],
      description: 'Extended hours available'
    }
  ];

  const services = [
    'Smart Lighting Control',
    'Security Systems',
    'Audio & Sound Systems',
    'Climate Control',
    'Sensors & Automation',
    'Smart Curtains',
    'Garage Door Control',
    'Complete Home Automation'
  ];

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get Your Free Consultation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your home? Contact us today for a free consultation 
            and personalized smart home solution designed just for you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Schedule Your Free Consultation
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+966 5X XXX XXXX"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-gray-900 mb-2">
                  Service Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select a service...</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Tell us about your project, home size, specific requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitted}
                className="w-full bg-blue-800 text-white px-6 py-4 rounded-lg hover:bg-blue-900 transition-all duration-200 font-semibold flex items-center justify-center disabled:bg-green-500"
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="mr-2 h-5 w-5" />
                    Message Sent Successfully!
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>

            {/* Quick Contact */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Need immediate assistance?
                  </h4>
                  <p className="text-sm text-gray-600">
                    Call us now for instant support
                  </p>
                </div>
                <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors duration-200 font-semibold flex items-center">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp
                </button>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-blue-800" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">
                        {info.title}
                      </h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-700 mb-1">
                          {detail}
                        </p>
                      ))}
                      <p className="text-sm text-gray-500 mt-2">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Emergency Support */}
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
              <h4 className="text-lg font-bold text-red-800 mb-2">
                🚨 Emergency Support
              </h4>
              <p className="text-red-700 mb-4">
                System down? Security issue? We provide 24/7 emergency support 
                for all our customers with guaranteed response times.
              </p>
              <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200 font-semibold">
                Emergency Hotline: +966 50 XXX XXXX
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;