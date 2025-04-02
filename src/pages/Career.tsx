import React from 'react';
import { ArrowRight, Mail, Phone, MapPin, CheckCircle2, Send, CheckCircle, XCircle } from 'lucide-react';

export default function Career() {
  const [formStatus, setFormStatus] = React.useState<'idle' | 'submitting' | 'submitted' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');

    try {
      const form = e.currentTarget;
      const response = await fetch('https://formspree.io/f/xnnpgpby', {
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
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/gallery/Complete-Tree-Care-Staff.jpg")'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Join Our Team</h1>
          <p className="text-xl md:text-2xl mb-8">Career Opportunities at Complete Tree Care</p>
        </div>
      </section>

      {/* Job Description */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Climber / Bucket Operator</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Job Summary</h3>
                  <p className="text-gray-600">Perform tree work (climb and operate bucket) as necessary to complete jobs; Supervise crew</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Requirements</h3>
                  <p className="text-gray-600">Certified Arborist with current license</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Compensation & Benefits</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-2" />
                      Salary Range: $18 to $24 per hour
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-2" />
                      Health Insurance after 90 days
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-2" />
                      Quarterly Incentive Payout
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-2" />
                      Paid-Time-Off after one-year
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-2" />
                      Paid Holidays after 90 days
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Major Duties</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Perform specifics as described on work orders ensuring customer satisfaction and following ISA Certified Arborist standards and OSHA safety standards.</li>
                    <li>Daily communication on work orders with Managing Coordinator and Owner.</li>
                    <li>Ensure all proper equipment is on trucks that are needed for those orders.</li>
                    <li>Check in and go over work order with customer before job starts and check in with customer after job is done, when applicable.</li>
                    <li>Collect payment from customer when applicable.</li>
                    <li>Other duties as assigned by supervisor.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Job Application Form</h2>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-shadow"
                      required
                      placeholder="John"
                    />
                  </div>
                  <div className="relative">
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-shadow"
                      required
                      placeholder="Doe"
                    />
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                </div>
              </div>

              {/* Address */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Address</h3>
                <div className="space-y-4">
                  <div className="relative">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                      Street Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      id="address"
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-shadow"
                      required
                      placeholder="123 Main St"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="relative">
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-shadow"
                        required
                        placeholder="Indianapolis"
                      />
                    </div>
                    <div className="relative">
                      <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                        State
                      </label>
                      <input
                        type="text"
                        name="state"
                        id="state"
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-shadow"
                        required
                        placeholder="IN"
                      />
                    </div>
                    <div className="relative">
                      <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-1">
                        ZIP Code
                      </label>
                      <input
                        type="text"
                        name="zip"
                        id="zip"
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-shadow"
                        required
                        placeholder="46259"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Qualifications */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Qualifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label htmlFor="isOver18" className="block text-sm font-medium text-gray-700 mb-1">
                      Are you at least 18 years old?
                    </label>
                    <select
                      name="isOver18"
                      id="isOver18"
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-shadow"
                      required
                    >
                      <option value="">Please select...</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                  <div className="relative">
                    <label htmlFor="hasDriversLicense" className="block text-sm font-medium text-gray-700 mb-1">
                      Do you have a valid driver's license?
                    </label>
                    <select
                      name="hasDriversLicense"
                      id="hasDriversLicense"
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-shadow"
                      required
                    >
                      <option value="">Please select...</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Experience</h3>
                <div className="relative">
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                    Tell us about your relevant experience
                  </label>
                  <textarea
                    name="experience"
                    id="experience"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-shadow"
                    required
                    placeholder="Please describe your experience in tree care, including any certifications or relevant training..."
                  ></textarea>
                </div>
              </div>

              {/* References */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">References</h3>
                <div className="space-y-6">
                  {[1, 2].map((index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-4">Reference {index}</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="relative">
                          <label htmlFor={`ref${index}Name`} className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name
                          </label>
                          <input
                            type="text"
                            name={`ref${index}Name`}
                            id={`ref${index}Name`}
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-shadow"
                            required
                          />
                        </div>
                        <div className="relative">
                          <label htmlFor={`ref${index}Phone`} className="block text-sm font-medium text-gray-700 mb-1">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name={`ref${index}Phone`}
                            id={`ref${index}Phone`}
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-shadow"
                            required
                          />
                        </div>
                        <div className="relative">
                          <label htmlFor={`ref${index}Relationship`} className="block text-sm font-medium text-gray-700 mb-1">
                            Relationship
                          </label>
                          <input
                            type="text"
                            name={`ref${index}Relationship`}
                            id={`ref${index}Relationship`}
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-shadow"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="w-full bg-green-700 text-white py-3 px-6 rounded-lg hover:bg-green-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>{formStatus === 'submitting' ? 'Submitting...' : 'Submit Application'}</span>
              </button>

              {formStatus === 'submitted' && (
                <div className="p-4 bg-green-50 text-green-700 rounded-lg flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Thank you for your application! We'll review it and get back to you soon.
                </div>
              )}

              {formStatus === 'error' && (
                <div className="p-4 bg-red-50 text-red-700 rounded-lg flex items-center">
                  <XCircle className="h-5 w-5 mr-2" />
                  There was an error submitting your application. Please try again later.
                </div>
              )}
            </form>
          </div>

          <div className="mt-8 text-sm text-gray-500">
            <p>
              Complete Tree Care is an equal opportunity employer. We do not discriminate based on race, color, religion, sex, sexual orientation, gender identity, national origin, disability, veteran status, or other protected characteristics.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}