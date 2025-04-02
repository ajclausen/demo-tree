import React from 'react';
import { ArrowRight, AlertTriangle, Leaf, CheckCircle2, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TreeFungalDiseases() {
  const diseases = [
    {
      name: 'Oak Wilt',
      symptoms: [
        'Wilting and browning of leaves starting from the top',
        'Discoloration of leaf veins',
        'Rapid leaf loss, even during spring or summer'
      ],
      factors: [
        'Warm summers',
        'Trees with pruning wounds or physical injuries'
      ]
    },
    {
      name: 'Anthracnose',
      symptoms: [
        'Irregular brown spots on leaves',
        'Premature leaf drop',
        'Twigs and branches showing signs of dieback'
      ],
      factors: [
        'Cool, wet spring conditions',
        'Poor air circulation around trees'
      ]
    },
    {
      name: 'Dutch Elm Disease',
      symptoms: [
        'Yellowing and wilting of leaves (flagging)',
        'Dieback of branches starting at the crown',
        'Dark streaks under the tree bark'
      ],
      factors: [
        'Mild spring temperatures',
        'Presence of elm bark beetles'
      ]
    },
    {
      name: 'Apple Scab',
      symptoms: [
        'Olive-green or black velvety spots on leaves',
        'Premature defoliation',
        'Scabby, cork-like lesions on fruits'
      ],
      factors: [
        'Wet, humid weather in spring and early summer',
        'Trees planted too closely together'
      ]
    }
  ];

  const preventionTips = [
    {
      title: 'Choose the Right Tree Species',
      description: 'Select disease-resistant varieties suitable for Midwestern climate'
    },
    {
      title: 'Proper Spacing',
      description: 'Plant trees with adequate spacing to improve air circulation'
    },
    {
      title: 'Regular Maintenance',
      description: 'Prune dead branches and maintain proper tree health'
    },
    {
      title: 'Water Management',
      description: 'Water deeply but infrequently to prevent fungal growth'
    },
    {
      title: 'Soil Health',
      description: 'Maintain healthy, well-draining soil conditions'
    },
    {
      title: 'Professional Care',
      description: 'Regular inspections and treatments by certified arborists'
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
          <p className="text-green-400 mb-4">Posted on January 16, 2025</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Common Tree Fungal Diseases in the Midwest</h1>
          <p className="text-xl md:text-2xl mb-8">Understanding and preventing fungal threats to your trees</p>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <p className="lead text-xl text-gray-600">
              Trees are not just a part of the Midwestern landscape—they are its backbone. From shading our homes to supporting diverse wildlife, trees play a vital role in maintaining the region's environment and charm. But beneath their green canopies lurks a silent threat that often goes unnoticed until it's too late—tree fungal diseases.
            </p>

            <div className="bg-yellow-50 p-6 rounded-lg my-8">
              <h2 className="text-2xl font-bold text-yellow-800 flex items-center mb-4">
                <AlertTriangle className="h-6 w-6 mr-2" />
                Common Fungal Diseases
              </h2>
              <p className="text-gray-700 mb-4">
                The Midwest's unique climate—hot summers, wet springs, and harsh winters—creates perfect conditions for fungal diseases in trees. Here are some of the most common threats you might encounter:
              </p>
            </div>

            <div className="space-y-8">
              {diseases.map((disease) => (
                <div key={disease.name} className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{disease.name}</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Symptoms:</h4>
                      <ul className="space-y-2">
                        {disease.symptoms.map((symptom, index) => (
                          <li key={index} className="flex items-start">
                            <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2 mt-1" />
                            <span className="text-gray-700">{symptom}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Environmental Factors:</h4>
                      <ul className="space-y-2">
                        {disease.factors.map((factor, index) => (
                          <li key={index} className="flex items-start">
                            <Leaf className="h-5 w-5 text-green-600 mr-2 mt-1" />
                            <span className="text-gray-700">{factor}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Prevention and Management</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {preventionTips.map((tip) => (
                <div key={tip.title} className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="font-bold text-lg mb-2 flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2" />
                    {tip.title}
                  </h3>
                  <p className="text-gray-600">{tip.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-red-50 p-6 rounded-lg my-12">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <AlertTriangle className="h-6 w-6 text-red-600 mr-2" />
                When to Remove a Diseased Tree
              </h3>
              <p className="text-gray-800 mb-4">
                Sometimes, despite our best efforts, tree removal becomes necessary to prevent disease spread and protect other trees. Signs that indicate removal might be needed include:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-red-600 mr-2 mt-1" />
                  <span className="text-gray-800">Severe trunk decay or damage</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-red-600 mr-2 mt-1" />
                  <span className="text-gray-800">More than 50% of the crown is affected</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-red-600 mr-2 mt-1" />
                  <span className="text-gray-800">Structural instability due to disease</span>
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
            <h2 className="text-3xl font-bold text-white">Concerned about tree diseases?</h2>
            <p className="mt-4 text-xl text-green-100">Our experts can help assess and treat your trees</p>
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