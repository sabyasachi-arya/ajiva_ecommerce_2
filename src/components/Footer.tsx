import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Sparkles className="w-8 h-8 text-primary-400" />
              <span className="font-display text-2xl font-bold">AJIVA</span>
            </div>
            <p className="text-gray-400 mb-6">
              Discover premium skincare, perfumes, and lifestyle products crafted for your well-being.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-primary-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-primary-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-primary-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/products" className="text-gray-400 hover:text-primary-400 transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/products?category=skincare" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Skincare
                </Link>
              </li>
              <li>
                <Link to="/products?category=perfume" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Perfumes
                </Link>
              </li>
              <li>
                <Link to="/products?category=lifestyle" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Lifestyle
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Customer Care</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/account" className="text-gray-400 hover:text-primary-400 transition-colors">
                  My Account
                </Link>
              </li>
              <li>
                <Link to="/account/orders" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Track Order
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Shipping Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Returns & Refunds
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-5 h-5 text-primary-400" />
                <span>hello@ajiva.com</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-5 h-5 text-primary-400" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 text-primary-400 mt-0.5" />
                <span>123 Beauty Boulevard<br />Los Angeles, CA 90001</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} AJIVA. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-gray-400 hover:text-primary-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-primary-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
