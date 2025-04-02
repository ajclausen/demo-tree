import React from 'react';
import { ArrowRight, Scissors, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TreeTrimming() {
  const services = [
    'Correcting poor pruning',
    'Dead branch removal',
    'Selective cross branch removal',
    'Crown reduction',
    'Crown thinning',
    'Crown raising'
  ];

  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Hero Section */}
      <section 
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1710492873117-b790ba523fd4?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Tree Trimming and Pruning</h1>
          <p className="text-xl md:text-2xl mb-8">Professional tree maintenance for safety and aesthetics</p>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Expert Tree Trimming Services</h2>
              <div className="prose prose-lg text-gray-600">
                <p>
                  Tree trimming and pruning are vital parts of tree care. It is important to maintain the shape and function of your landscaping trees in order to promote strength, utility, safety, and also to prevent damaging wind resistance. Tree branches and foliage must also be controlled in order to preserve safety and function. Power lines, telephone poles, street signs, satellite dishes, and more can all be obstructed by overgrown trees.
                </p>
                <p>
                  Complete Tree Care is passionate about maintaining safe and healthy trees for our clients. This is why we use quality equipment in the tree service industry to skillfully trim and prune trees effectively. We have more than 30 years of experience working with trees of all shapes and sizes. We are fully-equipped to provide both residential and commercial tree services, all at the most competitive prices in Central Indiana!
                </p>
              </div>
              
              <div className="mt-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Professional Process</h3>
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
                src="https://images.unsplash.com/photo-1710492873117-b790ba523fd4?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Tree trimming process"
                className="rounded-lg shadow-lg"
              />
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Trimming Approach</h3>
                <p className="text-gray-600 mb-6">
                  When you need Complete Tree Care for tree trimming and tree pruning services, our tree professionals will provide a free estimate. We will professionally plan out a safe and efficient strategy based on your specific needs.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Scissors className="h-6 w-6 text-green-700 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Professional Equipment</h4>
                      <p className="text-gray-600">Using industry-leading tools and techniques</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-green-700 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">30+ Years Experience</h4>
                      <p className="text-gray-600">Decades of tree care expertise</p>
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
            <h2 className="text-3xl font-bold text-white">Ready to maintain your trees?</h2>
            <p className="mt-4 text-xl text-green-100">Schedule your professional tree trimming service today</p>
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