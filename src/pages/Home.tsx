import React from 'react';
import { ArrowRight, Shield, Clock, Award, Star, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const features = [
    { text: '40+ YEARS IN BUSINESS', icon: Clock },
    { text: 'LICENSED & INSURED', icon: Shield },
    { text: 'RESIDENTIAL & COMMERCIAL', icon: Award },
    { text: 'A+ BBB RATING', icon: Star },
    { text: 'CLEAN UP INCLUDED', icon: CheckCircle2 },
    { text: "ANGIE'S LIST APPROVED", icon: Award },
    { text: '24 HOUR PHONE LINE', icon: Clock },
    { text: 'FAMILY OWNED & OPERATED', icon: Shield },
    { text: 'INSURANCE CLAIM WORK', icon: CheckCircle2 },
    { text: 'HONEST & FRIENDLY SERVICE!', icon: Star },
    { text: 'NO-FEE ESTIMATES', icon: CheckCircle2 },
    { text: 'FREE ADVICE', icon: Shield }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/gallery/Complete-Tree-Care-Company-Indianapolis.jpg")'
        }}
      >
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-display text-white">Taking Tree Care Standards to the Next Level</h1>
          <p className="text-xl md:text-2xl mb-8 font-sans">Indianapolis Tree Service Providers Since 1978</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-700 hover:bg-green-800"
            >
              Get Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="tel:317-783-2518"
              className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-green-800"
            >
              Emergency Service: 317-783-2518
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 font-display">Indianapolis' Trusted Tree Care Experts</h2>
          </div>
          <div className="prose prose-lg mx-auto text-gray-600 font-sans">
            <p className="mb-6">
              For more than 40 years, Complete Tree Care has been providing the communities of Indianapolis and its surrounding areas with exceptional tree services for both <Link to="/services/residential" className="text-green-700 hover:text-green-800">residential</Link> and <Link to="/services/commercial" className="text-green-700 hover:text-green-800">commercial</Link> properties. We are a highly licensed and insured tree service company that strives to ensure superior quality service.
            </p>
            <p className="mb-6">
              Since 1978, our committed team of tree care specialists is here for all your needs regarding any type of tree service or maintenance. From <Link to="/services/tree-trimming" className="text-green-700 hover:text-green-800">tree trimming and pruning</Link> for continuous, year-round tree growth and safety, to <Link to="/services/tree-removal" className="text-green-700 hover:text-green-800">tree removal</Link> for dead, dying, or obstructive trees, and all other <Link to="/services" className="text-green-700 hover:text-green-800">tree services</Link> in between, Complete Tree Care is your one-stop shop for residential or commercial tree work.
            </p>
            <p>
              As the family-owned and operated business in Indianapolis, our professional tree care specialists have much to offer in terms of quality workmanship, dependability, and professionalism. We wholly understand the value of a dollar, as we work hard to maintain sensible rates that withstand economic inflation.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 font-display">Why Choose Complete Tree Care</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <feature.icon className="h-6 w-6 text-green-700" />
                <span className="text-sm font-semibold text-gray-900">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 font-display">Full-Service Tree Care Solutions</h2>
          </div>
          <div className="prose prose-lg mx-auto text-gray-600 mb-12 font-sans">
            <p>
              Whether your tree needs are major or minor, our skilled tree service contractors have the expertise and innovative resources to get the job done right –the first time around! Our comprehensive range of tree services includes everything from <Link to="/services/tree-removal" className="text-green-700 hover:text-green-800">tree removal</Link> and <Link to="/services/tree-care" className="text-green-700 hover:text-green-800">tree care</Link>, to tree pruning, <Link to="/services/tree-trimming" className="text-green-700 hover:text-green-800">tree trimming</Link>, <Link to="/services/stump-removal" className="text-green-700 hover:text-green-800">stump removal</Link>, stump grinding, <Link to="/services/storm-damage" className="text-green-700 hover:text-green-800">storm damage tree management</Link>, commercial lot clearing, and much more.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Tree Removal',
                description: 'Safe and efficient removal of damaged or unwanted trees',
                image: 'https://images.unsplash.com/photo-1727818899530-5a3bee908607?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                link: '/services/tree-removal'
              },
              {
                title: 'Tree Trimming',
                description: 'Professional pruning to maintain tree health and appearance',
                image: 'https://images.unsplash.com/photo-1710492873117-b790ba523fd4?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                link: '/services/tree-trimming'
              },
              {
                title: 'Emergency Services',
                description: '24/7 response for storm damage and hazardous situations',
                image: '/gallery/Storm-Damage-Tree-Removal-Indianapolis-IN.jpg',
                link: '/services/storm-damage'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 font-display">{service.title}</h3>
                  <p className="mt-2 text-gray-600 font-sans">{service.description}</p>
                  <Link
                    to={service.link}
                    className="mt-4 inline-flex items-center text-green-700 hover:text-green-800"
                  >
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white font-display">Ready to get started?</h2>
            <p className="mt-4 text-xl text-green-100 font-sans">
              Don't let your trees go another day without a professional touch
            </p>
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
                Get Your Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}