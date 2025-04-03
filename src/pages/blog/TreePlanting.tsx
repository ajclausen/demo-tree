import React from 'react';
import { ArrowRight, Shovel, Leaf, Info, CheckCircle2, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TreePlanting() {
  const steps = [
    {
      title: 'Preparing the Site',
      items: [
        'Pick the Right Spot: Choose an area with ample room for root expansion and clear access to sunlight',
        'Avoid planting too close to structures or utilities',
        'Dig the hole twice the width of the root ball but no deeper than its height',
        'Ensure proper drainage to prevent root rot'
      ]
    },
    {
      title: 'Planting the Tree',
      items: [
        'Handle the roots with care and gently loosen if compacted',
        'Position the tree with root flare slightly above ground level',
        'Backfill with original soil mixed with compost',
        'Pack lightly to eliminate air pockets'
      ]
    },
    {
      title: 'Initial Care',
      items: [
        'Water thoroughly immediately after planting',
        'Add 2-3 inches of mulch around the base',
        'Keep mulch away from the trunk to prevent rot',
        'Protect young trees from harsh weather and equipment'
      ]
    },
    {
      title: 'Long-Term Care',
      items: [
        'Prune regularly to shape and remove damaged branches',
        'Water deeply and infrequently (1 inch per week)',
        'Monitor for signs of stress or disease',
        'Fertilize based on soil test results'
      ]
    }
  ];

  const treeTypes = [
    {
      climate: 'Cool Climate',
      trees: ['Maple', 'Birch', 'Spruce'],
      image: 'https://images.unsplash.com/photo-1507371341162-763b5e419408?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      climate: 'Temperate Zone',
      trees: ['Oak', 'Apple', 'Pear'],
      image: 'https://images.unsplash.com/photo-1599778150914-88e98e0c3a3e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      climate: 'Urban Areas',
      trees: ['Dwarf Fruit Trees', 'Japanese Maple', 'Crape Myrtle'],
      image: 'https://images.unsplash.com/photo-1598458255717-76e71f3d0bba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Hero Section */}
      <section 
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1599778150914-88e98e0c3a3e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <p className="text-green-400 mb-4">Posted on March 20, 2025</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">DIY Tree Planting Tips</h1>
          <p className="text-xl md:text-2xl mb-8">A Guide for Every Aspiring Gardener</p>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <p className="lead text-xl text-gray-600">
              Planting a tree is one of the most rewarding activities you can undertake as a home gardener or eco-conscious individual. Not only do trees beautify your space, but they also help combat climate change, purify the air, and create habitats for wildlife. Plus, they provide you and your family with a sense of accomplishment and a lasting legacy.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Choosing the Right Tree</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {treeTypes.map((type) => (
                <div key={type.climate} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={type.image}
                    alt={type.climate}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2">{type.climate}</h3>
                    <ul className="space-y-1">
                      {type.trees.map((tree) => (
                        <li key={tree} className="flex items-center">
                          <Leaf className="h-4 w-4 text-green-600 mr-2" />
                          <span>{tree}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Step-by-Step Planting Guide</h2>
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={step.title} className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold flex items-center mb-4">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-700 text-white text-sm mr-3">
                      {index + 1}
                    </span>
                    {step.title}
                  </h3>
                  <ul className="space-y-3">
                    {step.items.map((item) => (
                      <li key={item} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="bg-green-50 p-6 rounded-lg my-12">
              <h3 className="text-xl font-bold mb-4">Common Mistakes to Avoid</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Info className="h-5 w-5 text-red-500 mr-2 mt-1" />
                  <div>
                    <span className="font-semibold">Over-watering:</span>
                    <p className="text-gray-600">More isn't always better. Check soil moisture before watering.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Info className="h-5 w-5 text-red-500 mr-2 mt-1" />
                  <div>
                    <span className="font-semibold">Poor Drainage:</span>
                    <p className="text-gray-600">Ensure proper drainage to prevent root rot.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Info className="h-5 w-5 text-red-500 mr-2 mt-1" />
                  <div>
                    <span className="font-semibold">Improper Pruning:</span>
                    <p className="text-gray-600">Research proper techniques or consult professionals.</p>
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
            <h2 className="text-3xl font-bold text-white">Need help with tree planting?</h2>
            <p className="mt-4 text-xl text-green-100">Our experts are here to assist you</p>
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