import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, User, Menu, X, Search, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { totalItems } = useCart();
  const { isAuthenticated, user } = useAuth();
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Skincare', path: '/products?category=skincare' },
    { name: 'Perfumes', path: '/products?category=perfume' },
    { name: 'About', path: '/about' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-center py-2 text-sm">
        Free shipping on orders over $50 | Use code AJIVA10 for 10% off
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Sparkles className="w-8 h-8 text-primary-500" />
              <span className="font-display text-2xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                AJIVA
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'text-primary-500'
                    : 'text-gray-700 hover:text-primary-500'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-700 hover:text-primary-500 transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            <Link
              to={isAuthenticated ? '/account' : '/login'}
              className="p-2 text-gray-700 hover:text-primary-500 transition-colors relative"
              aria-label="Account"
            >
              <User className="w-5 h-5" />
              {isAuthenticated && user && (
                <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-secondary-500 text-white text-xs rounded-full flex items-center justify-center">
                  {user.name.charAt(0).toUpperCase()}
                </span>
              )}
            </Link>

            <Link
              to="/cart"
              className="p-2 text-gray-700 hover:text-primary-500 transition-colors relative"
              aria-label="Cart"
            >
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary-500 text-white text-xs rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700"
              aria-label="Menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isSearchOpen && (
          <div className="py-4 border-t animate-fade-in">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>
        )}

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-medium transition-colors duration-200 ${
                    location.pathname === link.path
                      ? 'text-primary-500'
                      : 'text-gray-700 hover:text-primary-500'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
