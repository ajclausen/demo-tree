import React from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

export default function Contact() {
  const [formStatus, setFormStatus] = React.useState<'idle' | 'submitting' | 'submitted' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');

    try {
      const form = e.currentTarget;
      const response = await fetch('https://formspree.io/f/xpwpypjj', {
        method: 'POST',
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormStatus('submitted');
        form.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Hero Section */}
      <section 
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl md:text-2xl mb-8">Get in touch for all your tree care needs</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <MapPin className="h-6 w-6 text-green-700 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Our Location</h3>
                    <p className="text-gray-600 mt-1">
                      11219 House St<br />
                      Indianapolis, IN 46259
                    </p>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <Phone className="h-6 w-6 text-green-700 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone Numbers</h3>
                    <div className="space-y-2 mt-1">
                      <a href="tel:317-783-2518" className="block text-green-700 hover:text-green-800 font-medium">
                        (317) 783-2518
                      </a>
                      <a href="tel:317-862-0444" className="block text-gray-600 hover:text-green-700">
                        (317) 862-0444
                      </a>
                      <p className="text-gray-500">Fax: (317) 862-3840</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <Clock className="h-6 w-6 text-green-700 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Office Hours</h3>
                    <p className="text-gray-600 mt-1">
                      Monday - Friday<br />
                      8:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                  <h3 className="font-semibold text-gray-900 flex items-center">
                    <Phone className="h-5 w-5 text-green-700 mr-2" />
                    24/7 Emergency Service
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Available anytime for urgent tree care needs.<br />
                    Call <a href="tel:317-783-2518" className="text-green-700 hover:text-green-800 font-semibold">
                      (317) 783-2518
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-shadow"
                      required
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="relative">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-shadow"
                      required
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="relative">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-shadow"
                    required
                    placeholder="(317) 555-0123"
                  />
                </div>

                <div className="relative">
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Service Needed
                  </label>
                  <select
                    name="service"
                    id="service"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-shadow appearance-none bg-white"
                    defaultValue=""
                  >
                    <option value="" disabled>Select a service...</option>
                    <option value="removal">Tree Removal</option>
                    <option value="trimming">Tree Trimming</option>
                    <option value="care">Tree Care</option>
                    <option value="stump">Stump Removal</option>
                    <option value="emergency">Emergency Service</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="relative">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-shadow"
                    required
                    placeholder="Please describe what you need..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full bg-green-700 text-white py-3 px-6 rounded-lg hover:bg-green-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>{formStatus === 'submitting' ? 'Sending...' : 'Send Message'}</span>
                </button>

                {formStatus === 'submitted' && (
                  <div className="p-4 bg-green-50 text-green-700 rounded-lg flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Thank you! We'll get back to you soon.
                  </div>
                )}

                {formStatus === 'error' && (
                  <div className="p-4 bg-red-50 text-red-700 rounded-lg flex items-center">
                    <XCircle className="h-5 w-5 mr-2" />
                    There was an error. Please try again later.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}