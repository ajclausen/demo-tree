import React from 'react';
import { ArrowRight, Building2, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CommercialServices() {
  const services = [
    'Tree removal',
    'Lot clearing',
    'Land clearing',
    'Tree trimming and pruning',
    'Stump removal',
    'Stump grinding',
    'Storm damage clean up',
    'Tree cabling and bracing',
    'Government contracting'
  ];

  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Hero Section */}
      <section 
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1621518513848-967b867c6cc6?q=80&w=2675&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Commercial Tree Services</h1>
          <p className="text-xl md:text-2xl mb-8">Professional tree management for businesses and properties</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-700 hover:bg-green-800"
            >
              Get Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="tel:317-783-2518"
              className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-green-800"
            >
              Emergency Service: 317-783-2518
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Commercial Tree Management Solutions</h2>
              <div className="prose prose-lg text-gray-600">
                <p>
                  It is important for commercial properties and complexes to preserve a safe and healthy indoor and outdoor environment for the general public, including employees, visitors, customers, and guests. One important part of this initiative is tree care. Trees can be a liability if not maintained properly.
                </p>
                <p>
                  Overgrown foliage and branches can be hazardous for drivers and pedestrians and can even jeopardize the structural integrity of buildings, vehicles, and more. With responsible routine tree service, commercial properties will not only look professional but also provide a safe and functional environment for all.
                </p>
                <p>
                  Complete Tree Care offers commercial tree services for all industries and property sizes in Indianapolis and its surrounding locations. Our professional tree experts have enough experience in the tree care industry to assist with your tree needs.
                </p>
              </div>
              
              <div className="mt-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Commercial Services</h3>
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
                src="https://images.unsplash.com/photo-1621518513848-967b867c6cc6?q=80&w=2675&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Commercial tree services"
                className="rounded-lg shadow-lg"
              />
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Us</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Building2 className="h-6 w-6 text-green-700 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Fully Insured</h4>
                      <p className="text-gray-600">No liability on your part for injuries or accidents</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-green-700 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Professional Expertise</h4>
                      <p className="text-gray-600">Experienced team for all industries and property sizes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">Ready to maintain your commercial property?</h2>
            <p className="mt-4 text-xl text-green-100">Contact our professional tree specialists today!</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:317-783-2518"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-white hover:bg-green-50"
              >
                Call 317-783-2518
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}