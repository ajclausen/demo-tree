import React from 'react';
import { ArrowRight, Cloud, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function StormDamage() {
  const services = [
    '24/7 emergency response',
    'Hazard assessment',
    'Fallen tree removal',
    'Branch cleanup',
    'Property protection',
    'Insurance claim assistance'
  ];

  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Hero Section */}
      <section 
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/gallery/Storm-Damage-Tree-Removal-Indianapolis-IN.jpg")'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Storm Damage Services</h1>
          <p className="text-xl md:text-2xl mb-8">24/7 emergency response for storm-damaged trees</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-700 hover:bg-green-800"
            >
              Get Emergency Service
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="tel:317-783-2518"
              className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-green-800"
            >
              Call Now: 317-783-2518
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Emergency Storm Damage Services</h2>
              <div className="prose prose-lg text-gray-600">
                <p>
                  When storms strike, our emergency response team is ready 24/7 to handle any tree-related emergency. We understand the urgency of storm damage and provide immediate response to protect your property and ensure safety.
                </p>
                <p>
                  Our experienced team is equipped to handle fallen trees, damaged limbs, and any other storm-related tree emergencies quickly and safely.
                </p>
              </div>
              
              <div className="mt-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Emergency Services</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {services.map((service, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-green-700" />
                      <span className="text-gray-700">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="space-y-8">
              <img
                src="/gallery/Storm-Damage-Tree-Removal-Indianapolis-IN.jpg"
                alt="Storm damage response"
                className="rounded-lg shadow-lg"
              />
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Emergency Response Process</h3>
                <ol className="space-y-4">
                  <li className="flex items-start">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-700 text-white text-sm mr-3 mt-1">1</span>
                    <p className="text-gray-700">Immediate response and assessment</p>
                  </li>
                  <li className="flex items-start">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-700 text-white text-sm mr-3 mt-1">2</span>
                    <p className="text-gray-700">Hazard mitigation</p>
                  </li>
                  <li className="flex items-start">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-700 text-white text-sm mr-3 mt-1">3</span>
                    <p className="text-gray-700">Damage cleanup</p>
                  </li>
                  <li className="flex items-start">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-700 text-white text-sm mr-3 mt-1">4</span>
                    <p className="text-gray-700">Property restoration</p>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">Need immediate assistance?</h2>
            <p className="mt-4 text-xl text-green-100">Our emergency team is available 24/7</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:317-783-2518"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-white hover:bg-green-50"
              >
                Call Emergency Line
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}