import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Complete Tree Care</h3>
            <p className="text-green-100 text-sm">
              Professional tree care services with over 25 years of experience serving our community.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-green-100 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-green-100 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-green-100 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-green-100 hover:text-white">Services</Link>
              </li>
              <li>
                <Link to="/about" className="text-green-100 hover:text-white">About Us</Link>
              </li>
              <li>
                <Link to="/blog" className="text-green-100 hover:text-white">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="text-green-100 hover:text-white">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services#trimming" className="text-green-100 hover:text-white">Tree Trimming</Link>
              </li>
              <li>
                <Link to="/services#removal" className="text-green-100 hover:text-white">Tree Removal</Link>
              </li>
              <li>
                <Link to="/services#emergency" className="text-green-100 hover:text-white">Emergency Services</Link>
              </li>
              <li>
                <Link to="/services#health" className="text-green-100 hover:text-white">Plant Health Care</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <a href="tel:317-783-2518" className="text-green-100 hover:text-white">317-783-2518</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <a href="mailto:info@completetreecare.com" className="text-green-100 hover:text-white">info@completetreecare.com</a>
              </li>
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span className="text-green-100">123 Oak Street, Anytown, USA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-800 mt-8 pt-8 text-center text-green-100">
          <p>&copy; {new Date().getFullYear()} Complete Tree Care. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}