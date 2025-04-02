import React from 'react';
import { ArrowRight, TreePine, AlertTriangle, Info, CheckCircle2, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TreeGirdling() {
  const causes = [
    {
      title: 'Improper Planting',
      description: 'Planting too deeply or failing to spread roots evenly can cause roots to circle the trunk'
    },
    {
      title: 'Landscape Materials',
      description: 'Stakes, wires, or tree guards left too long can dig into the tree\'s outer layers'
    },
    {
      title: 'Natural Root Growth',
      description: 'Some species naturally develop circling roots in restricted growing conditions'
    },
    {
      title: 'Animal Activity',
      description: 'Rodents or rabbits can chew through bark, creating damaging "belt-like" patterns'
    },
    {
      title: 'Equipment Damage',
      description: 'Repeated impacts from lawn equipment can create girdling-like damage over time'
    }
  ];

  const solutions = [
    {
      title: 'Address Girdling Roots',
      description: 'Carefully remove soil and cut away problematic roots without damaging healthy ones',
      icon: TreePine
    },
    {
      title: 'Remove Constrictions',
      description: 'Take out wires, stakes, or ties that may be restricting growth',
      icon: AlertTriangle
    },
    {
      title: 'Professional Grafting',
      description: 'Bridge grafting can help restore the tree\'s vascular system in severe cases',
      icon: Info
    },
    {
      title: 'Preventive Care',
      description: 'Regular inspections and proper planting techniques prevent future issues',
      icon: CheckCircle2
    }
  ];

  const preventionTips = [
    'Plant trees at appropriate depth with well-spread roots',
    'Inspect newly planted trees annually for signs of girdling',
    'Use loose ties when staking young trees',
    'Install protective guards against animal damage',
    'Maintain a safe distance when mowing near trees',
    'Remove support materials after 1-2 years'
  ];

  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Hero Section */}
      <section 
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1597685204565-207c4d9d0dd8?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <p className="text-green-400 mb-4">Posted on January 30, 2025</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Understanding Tree Girdling</h1>
          <p className="text-xl md:text-2xl mb-8">Learn how to identify, prevent, and treat this common tree problem</p>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <p className="lead text-xl text-gray-600">
              Tree girdling occurs when something creates a constriction around the tree's trunk or roots, 
              restricting the flow of water and nutrients between roots and canopy. While the concept might 
              seem simple, the consequences can be severe for your tree's health and survival.
            </p>

            <div className="bg-yellow-50 p-6 rounded-lg my-8">
              <h2 className="text-2xl font-bold text-yellow-800 flex items-center mb-4">
                <AlertTriangle className="h-6 w-6 mr-2" />
                Warning Signs of Girdling
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Info className="h-5 w-5 text-yellow-600 mr-2 mt-1" />
                  <span className="text-gray-800">Visible roots wrapping around the trunk</span>
                </li>
                <li className="flex items-start">
                  <Info className="h-5 w-5 text-yellow-600 mr-2 mt-1" />
                  <span className="text-gray-800">Indented or compressed bark</span>
                </li>
                <li className="flex items-start">
                  <Info className="h-5 w-5 text-yellow-600 mr-2 mt-1" />
                  <span className="text-gray-800">Thinning canopy or sparse leaves</span>
                </li>
                <li className="flex items-start">
                  <Info className="h-5 w-5 text-yellow-600 mr-2 mt-1" />
                  <span className="text-gray-800">Unusual leaning or structural weakness</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Common Causes of Girdling</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {causes.map((cause) => (
                <div key={cause.title} className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="font-bold text-lg mb-2">{cause.title}</h3>
                  <p className="text-gray-600">{cause.description}</p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Solutions and Treatment</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {solutions.map((solution) => (
                <div key={solution.title} className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-start">
                    <solution.icon className="h-6 w-6 text-green-600 mr-3 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">{solution.title}</h3>
                      <p className="text-gray-600">{solution.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-green-50 p-6 rounded-lg my-12">
              <h3 className="text-xl font-bold mb-4">Prevention Tips</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {preventionTips.map((tip, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-1" />
                    <p className="text-gray-700">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="bg-green-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">Concerned about tree girdling?</h2>
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