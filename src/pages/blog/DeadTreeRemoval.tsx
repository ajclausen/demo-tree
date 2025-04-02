import React from 'react';
import { ArrowRight, TreePine, AlertTriangle, Info, CheckCircle2, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DeadTreeRemoval() {
  const risks = [
    'Safety hazards from falling branches or entire trees',
    'Property damage to buildings, vehicles, or other structures',
    'Pest infestations that can spread to healthy trees',
    'Reduced property value and curb appeal',
    'Legal liability for damages caused by neglected trees',
    'Potential spread of tree diseases to nearby healthy trees'
  ];

  const signs = [
    {
      category: 'Leaf Issues',
      items: [
        'Dry, brown leaves during growing season',
        'Sparse foliage or bare branches',
        'Premature leaf drop'
      ]
    },
    {
      category: 'Bark and Trunk Problems',
      items: [
        'Peeling or cracking bark',
        'Hollow spots in the trunk',
        'Brittle, easily broken branches'
      ]
    },
    {
      category: 'Root Issues',
      items: [
        'Visible root damage or decay',
        'Leaning tree or exposed roots',
        'Fungal growth near the base'
      ]
    }
  ];

  const process = [
    {
      step: 'Assessment',
      description: 'Professional inspection to determine removal approach and safety measures'
    },
    {
      step: 'Preparation',
      description: 'Securing the area and setting up necessary equipment'
    },
    {
      step: 'Removal',
      description: 'Systematic dismantling of the tree using specialized techniques'
    },
    {
      step: 'Cleanup',
      description: 'Complete removal of debris and site restoration'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Hero Section */}
      <section 
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1473448912268-2022ce9509d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <p className="text-green-400 mb-4">Posted on March 13, 2025</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Dead Tree Removal Guide</h1>
          <p className="text-xl md:text-2xl mb-8">Everything you need to know about removing dead trees safely</p>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <p className="lead text-xl text-gray-600">
              Dead or dying trees are more than just an eyesore; they pose significant risks to safety, property, and the health of surrounding vegetation. Understanding when and how to remove a dead tree is crucial for maintaining a safe and beautiful landscape.
            </p>

            <div className="bg-red-50 p-6 rounded-lg my-8">
              <h2 className="text-2xl font-bold text-red-800 flex items-center mb-4">
                <AlertTriangle className="h-6 w-6 mr-2" />
                Risks of Ignoring Dead Trees
              </h2>
              <ul className="space-y-3">
                {risks.map((risk, index) => (
                  <li key={index} className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-red-600 mr-2 mt-1" />
                    <span className="text-gray-800">{risk}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Signs of a Dead or Dying Tree</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {signs.map((category) => (
                <div key={category.category} className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="font-bold text-lg mb-4">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <Info className="h-5 w-5 text-green-600 mr-2 mt-1" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Removal Process</h2>
            <div className="space-y-6">
              {process.map((step, index) => (
                <div key={step.step} className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold flex items-center mb-2">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-700 text-white text-sm mr-3">
                      {index + 1}
                    </span>
                    {step.step}
                  </h3>
                  <p className="text-gray-700 ml-11">{step.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-green-50 p-6 rounded-lg my-12">
              <h3 className="text-xl font-bold mb-4">Cost Factors in Indianapolis</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-1" />
                  <div>
                    <span className="font-semibold">Tree Size and Height:</span>
                    <p className="text-gray-600">Larger trees require more time and equipment</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-1" />
                  <div>
                    <span className="font-semibold">Location and Accessibility:</span>
                    <p className="text-gray-600">Trees near structures or power lines need special care</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-1" />
                  <div>
                    <span className="font-semibold">Additional Services:</span>
                    <p className="text-gray-600">Stump removal and debris cleanup may affect total cost</p>
                  </div>
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
            <h2 className="text-3xl font-bold text-white">Need dead tree removal?</h2>
            <p className="mt-4 text-xl text-green-100">Our experts are ready to help</p>
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