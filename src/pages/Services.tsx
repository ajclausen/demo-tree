import React from 'react';
import { ArrowRight, TreePine, Scissors, Home, Building2, Axe, Cloud, Shovel } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      id: 'tree-removal',
      title: 'Tree Removal',
      icon: TreePine,
      description: 'Safe and professional removal of dead, diseased, or unwanted trees. Our expert team ensures minimal impact to surrounding landscape.',
      image: 'https://images.unsplash.com/photo-1727818899530-5a3bee908607?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 'tree-trimming',
      title: 'Tree Trimming and Pruning',
      icon: Scissors,
      description: 'Expert pruning services to maintain tree health, improve appearance, and ensure safety. We follow proper cutting techniques to promote healthy growth.',
      image: 'https://images.unsplash.com/photo-1710492873117-b790ba523fd4?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 'tree-care',
      title: 'Tree Care',
      icon: TreePine,
      description: 'Comprehensive tree health services including disease treatment, fertilization, and preventive care to keep your trees thriving.',
      image: 'https://images.unsplash.com/photo-1591255199673-4e2b706645a2?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 'residential',
      title: 'Residential Tree Services',
      icon: Home,
      description: 'Complete tree care solutions for homeowners, including maintenance, emergency services, and landscape enhancement.',
      image: 'https://images.unsplash.com/photo-1685377734077-8d1706f4ef20?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 'commercial',
      title: 'Commercial Tree Services',
      icon: Building2,
      description: 'Professional tree management for businesses, property managers, and commercial properties. Regular maintenance and emergency response available.',
      image: 'https://images.unsplash.com/photo-1621518513848-967b867c6cc6?q=80&w=2675&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 'stump-removal',
      title: 'Stump Removal',
      icon: Shovel,
      description: 'Complete stump removal and grinding services to clear your property and prevent regrowth.',
      image: '/gallery/stump-removal.jpg'
    },
    {
      id: 'storm-damage',
      title: 'Storm Damage',
      icon: Cloud,
      description: '24/7 emergency response for storm-damaged trees. Quick and safe removal of hazardous branches and fallen trees.',
      image: '/gallery/Storm-Damage-Tree-Removal-Indianapolis-IN.jpg'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Services</h1>
          <p className="text-xl md:text-2xl mb-8">Professional tree care solutions for every need</p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-700 hover:bg-green-800"
          >
            Get Free Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={`flex flex-col md:flex-row gap-8 mb-16 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="flex-1">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <div className="flex items-center mb-4">
                  <service.icon className="h-8 w-8 text-green-700 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                </div>
                <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                <Link
                  to={`/services/${service.id}`}
                  className="inline-flex items-center text-green-700 hover:text-green-800"
                >
                  Learn more about {service.title.toLowerCase()}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">Need emergency tree service?</h2>
            <p className="mt-4 text-xl text-green-100">Available 24/7 for urgent tree care needs</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:317-783-2518"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-white hover:bg-green-50"
              >
                Call Now: 317-783-2518
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-green-700"
              >
                Request Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}