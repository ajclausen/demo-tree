import React from 'react';
import { ArrowRight, Shovel, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function StumpRemoval() {
  const benefits = [
    'Complete stump elimination',
    'Prevention of regrowth',
    'Future gardening preparation',
    'Tree planting preparation',
    'Landscaping preparation',
    'Construction preparation',
    'Property value improvement',
    'Enhanced property practicality'
  ];

  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Hero Section */}
      <section 
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/gallery/stump-removal.jpg")'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Stump Removal and Grinding</h1>
          <p className="text-xl md:text-2xl mb-8">Professional stump removal services at competitive prices</p>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional Stump Removal Services</h2>
              <div className="prose prose-lg text-gray-600">
                <p>
                  Stump removal is a very challenging and demanding step of the tree removal process. When it comes to removing tree stumps, your standard tool shop inventory just won't get the job done, no matter how many guys you have on hand. It requires professional equipment, training, and technique to safely and efficiently remove a tree stump.
                </p>
                <p>
                  Clearing old tree stumps is beneficial to property owners because it allows for future gardening, tree planting, landscaping, and construction plans. Not only is this advantage liberating, it is economical and potentially profitable since unsightly tree stumps diminish property value and practicality.
                </p>
                <p>
                  At Complete Tree Care, our professional tree specialists provide stump removal services, including stump grinding, at the most competitive prices in Central Indiana. We retain quality equipment and extensive training, which allows us to effectively remove tree stumps safely. Whether commercial or residential, our professional tree technicians are fully-equipped and eager to get the job done right!
                </p>
              </div>
              
              <div className="mt-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Benefits of Professional Stump Removal</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-green-700" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="space-y-8">
              <img
                src="/gallery/stump-removal.jpg"
                alt="Stump grinding service"
                className="rounded-lg shadow-lg"
              />
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Professional Approach</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Shovel className="h-6 w-6 text-green-700 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Professional Equipment</h4>
                      <p className="text-gray-600">Using specialized tools and machinery for efficient removal</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-green-700 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Experienced Team</h4>
                      <p className="text-gray-600">Trained specialists with extensive stump removal experience</p>
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
            <h2 className="text-3xl font-bold text-white">Ready to remove that stump?</h2>
            <p className="mt-4 text-xl text-green-100">Contact us today for professional stump removal services</p>
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