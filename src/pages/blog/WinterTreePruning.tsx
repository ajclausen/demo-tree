import React from 'react';
import { ArrowRight, Scissors, AlertTriangle, Info, CheckCircle2, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WinterTreePruning() {
  const treeSpecies = [
    {
      name: 'Oak Trees',
      benefits: [
        'Prevents oak wilt spread',
        'Improves structure',
        'Promotes spring growth'
      ],
      focus: 'Remove dead, diseased, or weak branches'
    },
    {
      name: 'Maple Trees',
      benefits: [
        'Enhances air circulation',
        'Reduces disease risk',
        'Promotes balanced growth'
      ],
      focus: 'Remove overcrowded branches'
    },
    {
      name: 'Fruit Trees',
      benefits: [
        'Encourages fruit production',
        'Improves sunlight penetration',
        'Stimulates new growth'
      ],
      focus: 'Remove old and non-producing branches'
    },
    {
      name: 'Dogwood Trees',
      benefits: [
        'Prevents branch rubbing',
        'Improves shape',
        'Enhances flowering'
      ],
      focus: 'Remove crossing branches'
    },
    {
      name: 'Birch Trees',
      benefits: [
        'Minimizes sap loss',
        'Improves structure',
        'Promotes health'
      ],
      focus: 'Remove diseased or damaged branches'
    }
  ];

  const tools = [
    {
      name: 'Pruning Shears',
      description: 'For small branches less than ¾ inch in diameter',
      tip: 'Look for bypass shears for clean cuts'
    },
    {
      name: 'Loppers',
      description: 'For cutting larger branches up to 2 inches thick',
      tip: 'Choose models with extended handles for better reach'
    },
    {
      name: 'Pruning Saw',
      description: 'For thicker branches on mature trees',
      tip: 'Keep blade sharp for clean cuts'
    },
    {
      name: 'Pole Pruner',
      description: 'For reaching higher branches safely',
      tip: 'Inspect rope and pulley system before use'
    }
  ];

  const safetyTips = [
    'Assess the tree for hazards before starting',
    'Watch for ice on surfaces and branches',
    'Use proper protective gear (gloves, eye protection)',
    'Never prune near power lines',
    'Avoid overreaching while pruning',
    'Work with a partner when possible'
  ];

  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Hero Section */}
      <section 
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1611469182571-507c05e03c9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <p className="text-green-400 mb-4">Posted on February 26, 2025</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Winter Tree Pruning Guide</h1>
          <p className="text-xl md:text-2xl mb-8">Which Species of Indiana Trees Need to Be Pruned in Winter?</p>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <p className="lead text-xl text-gray-600">
              Winter pruning offers several advantages for trees in Indiana. When trees are dormant, growth slows, and energy is conserved, making it an ideal time to remove unnecessary or harmful branches without causing stress.
            </p>

            <div className="bg-green-50 p-6 rounded-lg my-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Benefits of Winter Pruning</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-1" />
                  <span>Better visibility of tree structure without leaves</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-1" />
                  <span>Reduced risk of disease transmission</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-1" />
                  <span>Promotes healthy spring growth</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-1" />
                  <span>Minimizes stress on the tree</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Trees That Benefit from Winter Pruning</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {treeSpecies.map((species) => (
                <div key={species.name} className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="font-bold text-lg mb-4 flex items-center">
                    <Scissors className="h-5 w-5 text-green-600 mr-2" />
                    {species.name}
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Benefits:</h4>
                      <ul className="space-y-2">
                        {species.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-1" />
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Focus Areas:</h4>
                      <p className="text-gray-700">{species.focus}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Essential Pruning Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {tools.map((tool) => (
                <div key={tool.name} className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold mb-2">{tool.name}</h3>
                  <p className="text-gray-700 mb-2">{tool.description}</p>
                  <p className="text-sm text-gray-600 italic">
                    <Info className="h-4 w-4 inline mr-1" />
                    Tip: {tool.tip}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg my-12">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <AlertTriangle className="h-6 w-6 text-yellow-600 mr-2" />
                Safety Precautions
              </h3>
              <ul className="space-y-3">
                {safetyTips.map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <Info className="h-5 w-5 text-yellow-600 mr-2 mt-1" />
                    <span className="text-gray-800">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="bg-green-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">Need professional tree pruning?</h2>
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