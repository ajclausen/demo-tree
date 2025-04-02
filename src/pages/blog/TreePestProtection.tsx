import React from 'react';
import { ArrowRight, Bird, AlertTriangle, Info, CheckCircle2, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TreePestProtection() {
  const deterrents = [
    {
      category: 'Visual Deterrents',
      items: [
        'Reflective bird scare tape',
        'Modern motion-activated scarecrows',
        'Owl or hawk decoys',
        'Light-reflecting mobiles and spinners'
      ],
      tip: 'Move visual deterrents every few days to prevent birds from becoming accustomed to them'
    },
    {
      category: 'Auditory Deterrents',
      items: [
        'Ultrasonic devices (Bird-X)',
        'Wind chimes',
        'Motion-activated sound devices',
        'Recorded predator calls'
      ],
      tip: 'Check local noise regulations before using sound-based deterrents'
    },
    {
      category: 'Physical Barriers',
      items: [
        'High-quality bird netting',
        'Tree wraps for trunk protection',
        'Mesh barriers',
        'Anti-perching spikes'
      ],
      tip: 'Ensure proper installation to prevent bird entrapment'
    }
  ];

  const naturalSolutions = [
    {
      title: 'Bird-Repelling Plants',
      description: 'Plant holly bushes and other prickly vegetation around trees',
      image: 'https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Natural Repellents',
      description: 'Use chili pepper spray or vinegar-based solutions',
      image: 'https://images.unsplash.com/photo-1518006959904-02088f5d9349?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Predator Attraction',
      description: 'Install owl nesting boxes to encourage natural bird control',
      image: 'https://images.unsplash.com/photo-1579591370500-a4a0c5621106?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const otherPests = [
    {
      pest: 'Squirrels',
      solutions: [
        'Motion-activated sprinklers',
        'Squirrel-proof bird feeders',
        'Physical barriers around tree trunks'
      ]
    },
    {
      pest: 'Insects',
      solutions: [
        'Regular tree inspection',
        'Eco-friendly insecticides',
        'Proper pruning of affected areas'
      ]
    },
    {
      pest: 'Deer',
      solutions: [
        'Deer-resistant plants',
        'Physical barriers',
        'Motion-activated deterrents'
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Hero Section */}
      <section 
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1444464666168-49d633b86797?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <p className="text-green-400 mb-4">Posted on March 5, 2025</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Tree Pest Protection</h1>
          <p className="text-xl md:text-2xl mb-8">How to Keep Nuisance Birds Out of Your Trees</p>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <p className="lead text-xl text-gray-600">
              Birds bring charm and life to gardens, but not all feathered visitors are welcome. From their relentless noise to the mess they leave behind, nuisance birds can cause significant disruption, and in some cases, even damage your beautiful trees and garden.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Effective Bird Deterrent Methods</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {deterrents.map((method) => (
                <div key={method.category} className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="font-bold text-lg mb-4 flex items-center">
                    <Bird className="h-5 w-5 text-green-600 mr-2" />
                    {method.category}
                  </h3>
                  <ul className="space-y-2 mb-4">
                    {method.items.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-1" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-gray-600 italic">
                    <Info className="h-4 w-4 inline mr-1" />
                    {method.tip}
                  </p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Natural and Eco-Friendly Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {naturalSolutions.map((solution) => (
                <div key={solution.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2">{solution.title}</h3>
                    <p className="text-gray-600">{solution.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Other Common Tree Pests</h2>
            <div className="space-y-6">
              {otherPests.map((pest) => (
                <div key={pest.pest} className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold mb-4">{pest.pest}</h3>
                  <ul className="space-y-2">
                    {pest.solutions.map((solution, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-1" />
                        <span className="text-gray-700">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg my-12">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <AlertTriangle className="h-6 w-6 text-yellow-600 mr-2" />
                When to Call Professional Help
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Info className="h-5 w-5 text-yellow-600 mr-2 mt-1" />
                  <span className="text-gray-800">When dealing with protected bird species</span>
                </li>
                <li className="flex items-start">
                  <Info className="h-5 w-5 text-yellow-600 mr-2 mt-1" />
                  <span className="text-gray-800">For large-scale bird infestations</span>
                </li>
                <li className="flex items-start">
                  <Info className="h-5 w-5 text-yellow-600 mr-2 mt-1" />
                  <span className="text-gray-800">If birds are causing structural damage to trees</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="bg-green-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">Need help with pest control?</h2>
            <p className="mt-4 text-xl text-green-100">Our experts can help protect your trees</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:317-783-2518"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-white hover:bg-green-50"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call 317-783-2518
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-green-700"
              >
                Request Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}