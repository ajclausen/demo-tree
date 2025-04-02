import React from 'react';
import { ArrowRight, TreePine, Shield, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TreeRemoval() {
  const services = [
    'Dead Tree Removal',
    'Diseased Tree Removal',
    'Obstructive Tree Removal',
    'Aesthetic Tree Removal',
    'Trunk Removal',
    'Lot Clearing',
    'Storm Damage Tree Removal',
    'Crane Work',
    'Stump Removal'
  ];

  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Hero Section */}
      <section 
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1727818899530-5a3bee908607?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Indianapolis Tree Removal</h1>
          <p className="text-xl md:text-2xl mb-8">Professional and safe tree removal services for your property</p>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional Tree Removal Services</h2>
              <div className="prose prose-lg text-gray-600">
                <p>
                  Tree removal service is an important part of maintaining a safe and functional outdoor environment for commercial and residential properties. There are several reasons why a tree would need to be removed, from storm damage and insect infestation to power line obstruction. Trees are not only subject to health problems, they can pose safety concerns as well. Generally, trees are removed to enhance a property's safety, value, utility, and appeal.
                </p>
                <p>
                  Here at Complete Tree Care, we use quality equipment and strategic planning to safely remove trees from residential and commercial properties. Our experienced and professional tree specialists have the tools, training, and knowledge to solve your tree issues correctly, the first time around!
                </p>
              </div>
              
              <div className="mt-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Tree Removal Services</h3>
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
                src="https://images.unsplash.com/photo-1727818899530-5a3bee908607?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Tree removal process"
                className="rounded-lg shadow-lg"
              />
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Complete Tree Care</h3>
                <p className="text-gray-600 mb-6">
                  As a family owned and operated business, we understand the value of a dollar. It is for this reason, we offer the most honest and competitive prices for tree removal and tree services in and around Indianapolis.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Shield className="h-6 w-6 text-green-700 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Licensed & Insured</h4>
                      <p className="text-gray-600">Professional service with complete coverage</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <TreePine className="h-6 w-6 text-green-700 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Expert Team</h4>
                      <p className="text-gray-600">Experienced specialists with proper training</p>
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
            <h2 className="text-3xl font-bold text-white">Need a tree removed?</h2>
            <p className="mt-4 text-xl text-green-100">Call us today for a free estimate!</p>
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