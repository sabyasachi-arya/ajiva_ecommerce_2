import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Truck, Shield, RefreshCw } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';

const HomePage: React.FC = () => {
  const featuredProducts = products.filter(p => p.featured);
  const bestsellers = products.filter(p => p.bestseller);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                <span>New Collection 2024</span>
              </div>

              <h1 className="font-display text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
                Discover Your
                <span className="block bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                  Natural Glow
                </span>
              </h1>

              <p className="text-xl text-gray-600 max-w-lg">
                Premium skincare and lifestyle products crafted with nature's finest ingredients for your radiant beauty.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/products" className="btn-primary inline-flex items-center justify-center space-x-2">
                  <span>Shop Now</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/products?category=skincare" className="btn-outline inline-flex items-center justify-center">
                  Explore Skincare
                </Link>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-500">50K+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
                <div className="h-12 w-px bg-gray-200" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-500">200+</div>
                  <div className="text-sm text-gray-600">Products</div>
                </div>
                <div className="h-12 w-px bg-gray-200" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-500">4.9</div>
                  <div className="text-sm text-gray-600">Average Rating</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3685523/pexels-photo-3685523.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Premium Skincare"
                className="rounded-2xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">100% Natural</div>
                    <div className="text-sm text-gray-500">Organic Ingredients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-primary-100 rounded-lg">
                <Truck className="w-6 h-6 text-primary-500" />
              </div>
              <div>
                <div className="font-semibold text-gray-800">Free Shipping</div>
                <div className="text-sm text-gray-500">On orders over $50</div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-3 bg-secondary-100 rounded-lg">
                <Shield className="w-6 h-6 text-secondary-500" />
              </div>
              <div>
                <div className="font-semibold text-gray-800">Secure Payment</div>
                <div className="text-sm text-gray-500">100% secure checkout</div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-3 bg-primary-100 rounded-lg">
              <RefreshCw className="w-6 h-6 text-primary-500" />
              </div>
              <div>
                <div className="font-semibold text-gray-800">Easy Returns</div>
                <div className="text-sm text-gray-500">30-day return policy</div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-3 bg-secondary-100 rounded-lg">
                <Sparkles className="w-6 h-6 text-secondary-500" />
              </div>
              <div>
                <div className="font-semibold text-gray-800">Premium Quality</div>
                <div className="text-sm text-gray-500">Lab-tested products</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading mb-4">Shop by Category</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our curated collection of premium beauty and lifestyle products
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map(category => (
              <Link
                key={category.id}
                to={`/products?category=${category.id}`}
                className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-square bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                  <Sparkles className="w-12 h-12 text-primary-400 group-hover:scale-110 transition-transform" />
                </div>
                <div className="p-3 text-center">
                  <div className="font-semibold text-gray-800">{category.name}</div>
                  <div className="text-sm text-gray-500">{category.count} products</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="section-heading mb-2">Featured Products</h2>
              <p className="text-gray-600">Hand-picked favorites just for you</p>
            </div>
            <Link
              to="/products"
              className="hidden md:flex items-center space-x-2 text-primary-500 hover:text-primary-600 font-semibold transition-colors"
            >
              <span>View All</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.slice(0, 4).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="md:hidden mt-8 text-center">
            <Link to="/products" className="btn-primary inline-flex items-center space-x-2">
              <span>View All Products</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="py-16 bg-gradient-to-r from-primary-500 to-secondary-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-white space-y-6">
              <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
                Limited Time Offer
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold">
                Up to 30% Off on Selected Perfumes
              </h2>
              <p className="text-white/90 text-lg max-w-lg">
                Indulge in our exclusive collection of premium fragrances. Limited stock available.
              </p>
              <Link
                to="/products?category=perfume"
                className="inline-block bg-white text-primary-500 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Shop Perfumes
              </Link>
            </div>

            <div className="hidden md:block">
              <img
                src="https://images.pexels.com/photos/965819/pexels-photo-965819.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Premium Perfumes"
                className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading mb-2">Bestsellers</h2>
            <p className="text-gray-600">Tried, tested, and loved by thousands</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestsellers.slice(0, 4).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-br from-secondary-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles className="w-12 h-12 text-primary-500 mx-auto mb-4" />
          <h2 className="section-heading mb-4">Stay Beautiful, Stay Updated</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about new products, exclusive offers, and beauty tips.
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <button type="submit" className="btn-primary">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
