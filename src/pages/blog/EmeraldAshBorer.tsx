import React from 'react';
import { ArrowRight, Bug, AlertTriangle, Info, CheckCircle2, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function EmeraldAshBorer() {
  const signs = [
    {
      category: 'Visual Indicators',
      items: [
        'D-shaped exit holes in bark',
        'Splitting or cracking bark',
        'S-shaped tunnels under bark',
        'Canopy dieback starting at top',
        'Unusual woodpecker activity'
      ]
    },
    {
      category: 'Tree Response',
      items: [
        'Sprouting from tree base',
        'Leaf loss and thinning',
        'Yellowing foliage',
        'Branch death',
        'Increased sucker growth'
      ]
    }
  ];

  const impacts = [
    {
      category: 'Environmental Impact',
      items: [
        'Increased soil erosion',
        'Reduced biodiversity',
        'Disrupted ecosystems',
        'Loss of wildlife habitat',
        'Changed forest composition'
      ]
    },
    {
      category: 'Economic Impact',
      items: [
        'Removal costs ($500-$3,000 per tree)',
        'Property value reduction',
        'Municipal budget strain',
        'Treatment expenses',
        'Infrastructure damage risks'
      ]
    }
  ];

  const solutions = [
    {
      title: 'Prevention',
      steps: [
        'Regular tree inspections',
        'Proper tree maintenance',
        'Early intervention',
        'Monitoring for signs',
        'Professional assessments'
      ]
    },
    {
      title: 'Treatment',
      steps: [
        'Systemic insecticides',
        'Professional EAB treatments',
        'Trunk injections',
        'Soil treatments',
        'Preventive applications'
      ]
    },
    {
      title: 'Management',
      steps: [
        'Remove infected trees',
        'Replace with resistant species',
        'Dispose of wood properly',
        'Monitor surrounding trees',
        'Community coordination'
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Hero Section */}
      <section 
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1635405074683-96d6921a2a68?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <p className="text-green-400 mb-4">Posted on February 13, 2025</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Battling Bark and Beyond</h1>
          <p className="text-xl md:text-2xl mb-8">Emerald Ash Borer Problems in Indiana</p>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <p className="lead text-xl text-gray-600">
              The trees of Indiana are under threat, and it's not from storms or drought. This silent predator, the Emerald Ash Borer (EAB), is wreaking havoc on ash trees—one of Indiana's significant native tree species. Understanding and combating this invasive pest is crucial to preserving our landscapes and the ecosystems they support.
            </p>

            <div className="bg-red-50 p-6 rounded-lg my-8">
              <h2 className="text-2xl font-bold text-red-800 flex items-center mb-4">
                <Bug className="h-6 w-6 mr-2" />
                Understanding the Threat
              </h2>
              <p className="text-gray-800 mb-4">
                The Emerald Ash Borer (EAB) is a small, metallic green beetle native to Asia that has devastated North American ash trees. Female beetles lay eggs on ash tree bark, and the larvae bore into the tree, disrupting water and nutrient transport.
              </p>
              <div className="flex items-center bg-red-100 p-4 rounded-lg">
                <AlertTriangle className="h-6 w-6 text-red-600 mr-3" />
                <p className="text-red-800">
                  Over 30 million ash trees have already been lost to EAB infestations across North America.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Signs of Infestation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {signs.map((category) => (
                <div key={category.category} className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="font-bold text-lg mb-4">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <Bug className="h-5 w-5 text-green-600 mr-2 mt-1" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Impact Assessment</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {impacts.map((category) => (
                <div key={category.category} className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="font-bold text-lg mb-4">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2 mt-1" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Solutions and Prevention</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {solutions.map((solution) => (
                <div key={solution.title} className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="font-bold text-lg mb-4">{solution.title}</h3>
                  <ul className="space-y-2">
                    {solution.steps.map((step, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-1" />
                        <span className="text-gray-700">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="bg-green-50 p-6 rounded-lg my-12">
              <h3 className="text-xl font-bold mb-4">Community Action Steps</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Info className="h-5 w-5 text-green-600 mr-2 mt-1" />
                  <div>
                    <span className="font-semibold">Report Infestations:</span>
                    <p className="text-gray-600">Contact the Indiana Department of Natural Resources if you spot signs of EAB.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Info className="h-5 w-5 text-green-600 mr-2 mt-1" />
                  <div>
                    <span className="font-semibold">Join Local Efforts:</span>
                    <p className="text-gray-600">Participate in community tree planting and monitoring programs.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Info className="h-5 w-5 text-green-600 mr-2 mt-1" />
                  <div>
                    <span className="font-semibold">Practice Prevention:</span>
                    <p className="text-gray-600">Don't transport firewood across county lines to prevent EAB spread.</p>
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
            <h2 className="text-3xl font-bold text-white">Concerned about EAB in your trees?</h2>
            <p className="mt-4 text-xl text-green-100">Get professional help to protect your ash trees</p>
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