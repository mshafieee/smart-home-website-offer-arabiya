import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Gallery from './components/Gallery';
import Benefits from './components/Benefits';
import CostCalculator from './components/CostCalculator';
import Testimonials from './components/Testimonials';
import WhyChooseUs from './components/WhyChooseUs';
import ServiceAreas from './components/ServiceAreas';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <HowItWorks />
      <Gallery />
      <Benefits />
      <CostCalculator />
      <Testimonials />
      <WhyChooseUs />
      <ServiceAreas />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;