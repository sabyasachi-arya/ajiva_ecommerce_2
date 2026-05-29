import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Heart, Leaf, Shield, Users, Award } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-display text-5xl font-bold text-gray-900 mb-6">
              Our Story
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              At AJIVA, we believe that beauty should be simple, natural, and accessible to everyone. Our journey began with a passion for creating premium skincare and lifestyle products that enhance your natural radiance.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-heading mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything we do is guided by our commitment to quality, sustainability, and your well-being.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="w-8 h-8 text-primary-500" />
              </div>
              <h3 className="font-semibold text-xl text-gray-900 mb-4">Natural Ingredients</h3>
              <p className="text-gray-600">
                We source the finest natural ingredients from sustainable farms around the world, ensuring purity and potency in every product.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-secondary-500" />
              </div>
              <h3 className="font-semibold text-xl text-gray-900 mb-4">Cruelty-Free</h3>
              <p className="text-gray-600">
                We never test on animals. Our commitment to ethical practices extends to every aspect of our production process.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-primary-500" />
              </div>
              <h3 className="font-semibold text-xl text-gray-900 mb-4">Customer First</h3>
              <p className="text-gray-600">
                Your satisfaction is our priority. We stand behind every product with our happiness guarantee and responsive support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-secondary-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="font-display text-5xl font-bold mb-2">50K+</div>
              <div className="text-white/80">Happy Customers</div>
            </div>
            <div>
              <div className="font-display text-5xl font-bold mb-2">200+</div>
              <div className="text-white/80">Products</div>
            </div>
            <div>
              <div className="font-display text-5xl font-bold mb-2">15+</div>
              <div className="text-white/80">Countries</div>
            </div>
            <div>
              <div className="font-display text-5xl font-bold mb-2">4.9</div>
              <div className="text-white/80">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-heading mb-4">Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the passionate people behind AJIVA who work tirelessly to bring you the best.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: 'Sarah Johnson', role: 'Founder & CEO', image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300' },
              { name: 'Michael Chen', role: 'Head of R&D', image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300' },
              { name: 'Amanda White', role: 'Product Manager', image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=300' },
              { name: 'David Kim', role: 'Marketing Director', image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=300' },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 object-cover rounded-full mx-auto mb-4 shadow-lg"
                />
                <h3 className="font-semibold text-gray-900">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles className="w-12 h-12 text-primary-500 mx-auto mb-4" />
          <h2 className="section-heading mb-4">Ready to Experience AJIVA?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of happy customers who have transformed their skincare routine with our premium products.
          </p>
          <Link to="/products" className="btn-primary inline-flex items-center space-x-2">
            <span>Shop Now</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
