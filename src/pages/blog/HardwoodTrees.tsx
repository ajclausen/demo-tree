import React from 'react';
import { ArrowRight, Trees as Tree, Leaf, Info, CheckCircle2, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TreeSpecies {
  name: string;
  uses: string[];
  pros: string[];
  cons: string[];
  image: string;
}

export default function HardwoodTrees() {
  const species: TreeSpecies[] = [
    {
      name: 'Oak',
      uses: ['Flooring', 'Cabinetry (e.g., shaker-style cabinets)', 'Furniture'],
      pros: ['Extremely durable and long-lasting', 'Resistant to moisture when sealed, particularly white oak'],
      cons: ['Heavy and harder to work with', 'Susceptible to pests like gypsy moths'],
      image: '/blog/Oaktreestock.webp'
    },
    {
      name: 'Maple',
      uses: ['Cutting boards', 'Baseball bats', 'Dance floors'],
      pros: ['Resistant to wear and tear, ideal for high-traffic areas', 'Affordable and readily available'],
      cons: ['Can scratch and dent under heavy impact', 'Susceptible to aphids and verticillium wilt'],
      image: '/blog/MapleTreeStock.webp'
    },
    {
      name: 'Cherry',
      uses: ['Fine furniture', 'Veneers', 'Musical instruments (e.g., guitar bodies)'],
      pros: ['Excellent workability', 'Ages beautifully with enhanced color tones'],
      cons: ['Prone to scratches and dents', 'Requires good air circulation to prevent fungal diseases'],
      image: '/blog/CherryTreeStock.webp'
    },
    {
      name: 'Walnut',
      uses: ['Gun stocks', 'High-end furniture', 'Decorative bowls'],
      pros: ['Strong yet lightweight', 'Stunning natural color and grain'],
      cons: ['Expensive compared to other hardwood species', 'Susceptible to walnut husk fly and anthracnose'],
      image: '/blog/WalnutTreeStock.webp'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Hero Section */}
      <section 
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/blog/Oaktreestock.webp")'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <p className="text-green-400 mb-4">Posted on March 27, 2025</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Your Guide to Hardwood Tree Species</h1>
          <p className="text-xl md:text-2xl mb-8">Characteristics, Uses, and Care</p>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <p className="lead text-xl text-gray-600">
              Hardwood trees are more than just a beautiful addition to your yard or a source of high-quality timber; they are integral to our daily lives. From the oak flooring in your living room to the walnut bowl in your kitchen, hardwood tree species have shaped functional and artistic elements in countless homes.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Popular Hardwood Species and Their Uses</h2>
            <p className="mb-8">From furniture to flooring, these hardwood species have earned their reputation for quality and versatility.</p>

            {species.map((tree, index) => (
              <div key={tree.name} className="mb-12 bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src={tree.image} 
                  alt={tree.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{index + 1}. {tree.name}</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Uses:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {tree.uses.map((use, i) => (
                          <li key={i} className="text-gray-600">{use}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Pros:</h4>
                        <ul className="space-y-2">
                          {tree.pros.map((pro, i) => (
                            <li key={i} className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-1" />
                              <span className="text-gray-600">{pro}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Cons:</h4>
                        <ul className="space-y-2">
                          {tree.cons.map((con, i) => (
                            <li key={i} className="flex items-start">
                              <Info className="h-5 w-5 text-red-500 mr-2 mt-1" />
                              <span className="text-gray-600">{con}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Identifying Hardwood Trees</h2>
            <p>Identifying hardwood trees might seem daunting, but with a few pointers, it becomes much simpler.</p>

            <div className="bg-green-50 p-6 rounded-lg my-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Tips for Tree Identification</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Tree className="h-6 w-6 text-green-700 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold">Examine the Bark</h4>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>Oak bark is rough and ridged</li>
                      <li>Maple bark is smoother and forms irregular flakes with age</li>
                      <li>Cherry bark has horizontal lines (known as lenticels)</li>
                      <li>Walnut bark is dark and furrowed</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start">
                  <Leaf className="h-6 w-6 text-green-700 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold">Study the Leaves</h4>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>Oak leaves have lobed edges with a pointed or rounded tip</li>
                      <li>Maple leaves are sharply serrated with pointed lobes</li>
                      <li>Cherry leaves are oval-shaped with finely serrated edges</li>
                      <li>Walnut leaves are compound with multiple leaflets along a central stalk</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Tree Care Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">General Care</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-1" />
                    <span>Water deeply but sparingly</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-1" />
                    <span>Add 2-3 inch layer of mulch</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-1" />
                    <span>Prune during dormant season</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-1" />
                    <span>Regular pest inspections</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Care</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-1" />
                    <span>Annual health assessments</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-1" />
                    <span>Professional pruning</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-1" />
                    <span>Disease treatment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-1" />
                    <span>Soil management</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="bg-green-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">Need help with your trees?</h2>
            <p className="mt-4 text-xl text-green-100">Contact our certified arborists for expert tree care</p>
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