import React from 'react';
import { ArrowRight, TreePine, Leaf, Wind, Home, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TreeBenefits() {
  const benefits = [
    {
      category: 'Environmental Benefits',
      items: [
        'Absorbs up to 48 pounds of CO2 annually',
        'Produces oxygen for a family of four daily',
        'Filters air pollutants like carbon monoxide',
        'Creates wildlife habitats',
        'Supports local biodiversity',
        'Reduces soil erosion'
      ],
      icon: Leaf
    },
    {
      category: 'Property Benefits',
      items: [
        'Increases property value by 7-19%',
        'Enhances curb appeal',
        'Creates natural privacy screens',
        'Reduces energy costs',
        'Provides natural shade',
        'Improves landscaping structure'
      ],
      icon: Home
    },
    {
      category: 'Cooling Benefits',
      items: [
        'Reduces temperatures by up to 10°F',
        'Cuts cooling costs by up to 25%',
        'Provides natural air conditioning',
        'Protects from intense sunlight',
        'Creates comfortable outdoor spaces',
        'Reduces urban heat island effect'
      ],
      icon: Wind
    }
  ];

  const treeCare = [
    {
      title: 'Water Wisely',
      description: 'Deep watering for new trees, less frequent for mature ones',
      tips: [
        'Water deeply and regularly during first two years',
        'Monitor soil moisture before watering',
        'Adjust watering schedule based on season'
      ]
    },
    {
      title: 'Mulch Properly',
      description: 'Add protective layer while avoiding trunk contact',
      tips: [
        'Maintain 2-3 inch mulch layer',
        'Keep mulch away from trunk',
        'Use organic materials when possible'
      ]
    },
    {
      title: 'Prune Regularly',
      description: 'Trim during late winter or early spring',
      tips: [
        'Remove dead or diseased branches',
        'Maintain proper shape',
        'Avoid over-pruning'
      ]
    },
    {
      title: 'Monitor Health',
      description: 'Watch for signs of stress or disease',
      tips: [
        'Check for pest infestations',
        'Look for unusual leaf color or loss',
        'Monitor growth patterns'
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Hero Section */}
      <section 
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <p className="text-green-400 mb-4">Posted on February 19, 2025</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">The Incredible Benefits of Planting Trees</h1>
          <p className="text-xl md:text-2xl mb-8">Transform your property while helping the environment</p>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <p className="lead text-xl text-gray-600">
              Planting trees in your yard isn't just about making your home look beautiful—it's an investment in your property, your environment, and your community. From improving air quality to enhancing curb appeal, trees are a powerhouse addition to any home landscaping plan.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Key Benefits of Trees</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {benefits.map((category) => (
                <div key={category.category} className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="font-bold text-lg mb-4 flex items-center">
                    <category.icon className="h-5 w-5 text-green-600 mr-2" />
                    {category.category}
                  </h3>
                  <ul className="space-y-2">
                    {category.items.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <TreePine className="h-5 w-5 text-green-600 mr-2 mt-1" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="bg-green-50 p-6 rounded-lg my-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Tree Care Essentials</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {treeCare.map((care) => (
                  <div key={care.title} className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-xl font-bold mb-2">{care.title}</h3>
                    <p className="text-gray-600 mb-4">{care.description}</p>
                    <ul className="space-y-2">
                      {care.tips.map((tip, index) => (
                        <li key={index} className="flex items-start">
                          <Leaf className="h-5 w-5 text-green-600 mr-2 mt-1" />
                          <span className="text-gray-700">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Professional Tree Care</h2>
            <p className="text-gray-600 mb-6">
              While planting and caring for trees can be a rewarding DIY activity, sometimes professional expertise is needed to ensure your trees thrive. Consider professional help for:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <TreePine className="h-5 w-5 text-green-600 mr-2 mt-1" />
                <span className="text-gray-700">Initial planting of large or mature trees</span>
              </li>
              <li className="flex items-start">
                <TreePine className="h-5 w-5 text-green-600 mr-2 mt-1" />
                <span className="text-gray-700">Disease diagnosis and treatment</span>
              </li>
              <li className="flex items-start">
                <TreePine className="h-5 w-5 text-green-600 mr-2 mt-1" />
                <span className="text-gray-700">Complex pruning or trimming needs</span>
              </li>
              <li className="flex items-start">
                <TreePine className="h-5 w-5 text-green-600 mr-2 mt-1" />
                <span className="text-gray-700">Emergency tree care situations</span>
              </li>
            </ul>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="bg-green-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">Ready to plant trees in your yard?</h2>
            <p className="mt-4 text-xl text-green-100">Our experts can help you choose and plant the right trees</p>
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