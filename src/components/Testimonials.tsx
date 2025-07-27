import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Ahmed Al-Rashid',
      location: 'Riyadh',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'Offer Arabiya transformed our villa into a futuristic smart home. The lighting automation alone has saved us 25% on electricity bills! The team was professional and the installation was seamless.',
      project: 'Complete Home Automation'
    },
    {
      name: 'Sarah Mohammed',
      location: 'Jeddah',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'Professional installation and excellent customer service. Everything works perfectly and the app is so easy to use. Our home theater system is absolutely incredible - movie nights have never been better.',
      project: 'Audio & Entertainment System'
    },
    {
      name: 'Khalid Al-Zahrani',
      location: 'Dammam',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'Best investment we made for our home. The security system gives us complete peace of mind. We can monitor everything from anywhere and the 24/7 support is exceptional.',
      project: 'Security & Surveillance'
    },
    {
      name: 'Fatima Al-Otaibi',
      location: 'Riyadh',
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'The smart climate control system has been amazing. Our electricity bills dropped by 30% and the house is always at the perfect temperature. Highly recommend Offer Arabiya!',
      project: 'Climate Control System'
    },
    {
      name: 'Mohammed Al-Harbi',
      location: 'Jeddah',
      image: 'https://images.pexels.com/photos/2379006/pexels-photo-2379006.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'From consultation to installation, everything was handled professionally. The smart curtains and lighting create the perfect ambiance. Our guests are always impressed.',
      project: 'Lighting & Window Automation'
    },
    {
      name: 'Aisha Al-Mansouri',
      location: 'Riyadh',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'The whole-house audio system is fantastic. We can play different music in each room or sync everything together. The quality is outstanding and setup was so easy.',
      project: 'Multi-Room Audio System'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join hundreds of satisfied customers who have transformed their homes 
            with our professional smart automation solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-blue-100"
            >
              {/* Quote Icon */}
              <div className="text-blue-200 mb-4">
                <Quote className="h-8 w-8" />
              </div>

              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Project Type */}
              <div className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4">
                {testimonial.project}
              </div>

              {/* Customer Info */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-blue-800 rounded-2xl p-8 text-white text-center">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold mb-2">4.9/5</div>
              <div className="text-blue-200">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-blue-200">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-blue-200">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-blue-200">Support Available</div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-green-500 text-white px-8 py-4 rounded-lg hover:bg-green-600 transition-colors duration-200 font-semibold">
            Join Our Happy Customers
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;