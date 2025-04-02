import React from 'react';
import { ArrowRight, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Hero Section */}
      <section 
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1680701514995-46b1749b30ea?q=80&w=2673&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About Complete Tree Care</h1>
          <p className="text-xl md:text-2xl mb-8">Serving Indianapolis with Excellence Since 1978</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <p className="lead text-xl text-gray-600 mb-8">
              Complete Tree Care is licensed and insured, family owned and operated, tree service Company based out of Indianapolis, Indiana. Owners, Doug and Monica McKinney, opened the business in 1978, despite still working separate full-time jobs! And after earning a reputation for honest customer service and skilled tree work, the McKinney's were finally in a position to quit their full-time jobs and dedicate 100% of their time to their real passion: tree care.
            </p>
            
            <div className="mb-8">
              <img 
                src="/gallery/Complete-Tree-Care-Service-Indianapolis-IN.jpg" 
                alt="Complete Tree Care service in Indianapolis" 
                className="w-full rounded-lg shadow-md" 
              />
              <p className="text-sm text-gray-500 mt-2 text-center">Our dedicated team of tree care professionals</p>
            </div>
            
            <p className="text-gray-600 mb-8">
              From there, they continued to excel in the tree care industry, and have now provided skilled and honest tree removal and tree service for residential and commercial properties all across the city for more than 30 years. Doug and his team were even part of the New Orleans Hurricane Katrina clean up initiative!
            </p>

            <div className="bg-green-50 p-8 rounded-lg my-12 text-center">
              <p className="text-gray-600 mb-4">
                Monica lost her battle with cancer in 2006. She will always be a part of Complete Tree Care. She is greatly missed by us and by all her family and friends. Our long-time customers still admire her wonderful spirit, bright smile, and exceptional energy to this very day.
              </p>
              <p className="text-gray-600 italic">
                We miss you, Monica. Rest in Peace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">Continue the Legacy</h2>
            <p className="mt-4 text-xl text-green-100">Let us help you with your tree care needs</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-white hover:bg-green-50"
              >
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}