import React from 'react';
import { ArrowRight, TreePine, CheckCircle2, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TreeCare() {
  const facts = [
    'Well-kept trees and shrubbery can increase property values by up to 14%',
    'Healthy mature trees can retain values up to $10,000 each',
    'Strategically-placed trees can reduce air conditioning needs by 30%',
    'Strategically-placed trees can also provide effective sound barriers',
    'Mature trees eliminate nearly 70x more air pollution than young trees',
    'One tree is capable of producing roughly 260 lbs. of oxygen per year',
    'In one lifetime, a single tree can absorb 1 ton of carbon dioxide',
    'The typical city tree has an average life expectancy of 8 years'
  ];

  const services = [
    'Tree evaluations',
    'Trimming',
    'Pruning',
    'Shaping',
    'Crown raising',
    'Crown reduction'
  ];

  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Hero Section */}
      <section 
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1591255199673-4e2b706645a2?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Central Indiana Tree Care</h1>
          <p className="text-xl md:text-2xl mb-8">Expert tree maintenance and preventative care services</p>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional Tree Care Services</h2>
              <div className="prose prose-lg text-gray-600">
                <p>
                  Complete Tree Care works hard staying up-to-date on all modern strategies and safety protocols in the tree service industry in order to expertly manage your landscaping trees. Whether residential or commercial, our licensed tree professionals retain the proper tools, training, and knowledge to care for your trees.
                </p>
                <p>
                  Tree care consists of several types of routine tree maintenance, most of which is preventative. Here at Complete Tree Care, we have more than three decades of experience as a licensed and insured tree service company in Indianapolis, IN and its surrounding areas! We offer a wide range of tree services, from small routine needs to massive commercial projects!
                </p>
              </div>
              
              <div className="mt-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Tree Care Services</h3>
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
                src="https://images.unsplash.com/photo-1591255199673-4e2b706645a2?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Professional tree care"
                className="rounded-lg shadow-lg"
              />
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Tree Care Facts</h3>
                <div className="grid grid-cols-1 gap-4">
                  {facts.map((fact, index) => (
                    <div key={index} className="flex items-start">
                      <Leaf className="h-5 w-5 text-green-700 mr-3 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">{fact}</p>
                    </div>
                  ))}
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
            <h2 className="text-3xl font-bold text-white">Need tree care advice?</h2>
            <p className="mt-4 text-xl text-green-100">We are the professionals who can help!</p>
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