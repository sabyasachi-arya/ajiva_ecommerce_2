import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ShoppingBag, Heart, Share2, ChevronRight } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h1>
          <Link to="/products" className="btn-primary">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-primary-500">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/products" className="hover:text-primary-500">Products</Link>
          <ChevronRight className="w-4 h-4" />
          <Link to={`/products?category=${product.category}`} className="hover:text-primary-500 capitalize">
            {product.category}
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-800 font-medium">{product.name}</span>
        </nav>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-6 lg:p-8">
            {/* Images */}
            <div className="space-y-4">
              <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-100">
                <img
                  src={product.images[selectedImage] || product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.bestseller && (
                  <span className="absolute top-4 left-4 bg-secondary-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
                    Bestseller
                  </span>
                )}
              </div>

              {product.images.length > 1 && (
                <div className="flex gap-3">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImage === idx ? 'border-primary-500' : 'border-transparent'
                      }`}
                    >
                      <img src={img} alt={`${product.name} ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <div className="mb-4">
                <div className="flex items-center space-x-4 mb-2">
                  <span className="text-sm text-gray-500 uppercase tracking-wide capitalize">
                    {product.category}
                  </span>
                  {product.inStock ? (
                    <span className="text-sm text-green-600 font-medium">In Stock</span>
                  ) : (
                    <span className="text-sm text-red-600 font-medium">Out of Stock</span>
                  )}
                </div>
                <h1 className="font-display text-3xl font-bold text-gray-900">{product.name}</h1>
              </div>

              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-600">{product.rating}</span>
                <span className="text-gray-400">|</span>
                <span className="text-gray-600">{product.reviews} reviews</span>
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <span className="text-4xl font-bold text-primary-500">${product.price.toFixed(2)}</span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-gray-400 line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                    <span className="bg-primary-100 text-primary-600 text-sm font-semibold px-3 py-1 rounded-full">
                      Save ${(product.originalPrice - product.price).toFixed(2)}
                    </span>
                  </>
                )}
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-800 mb-3">Key Features:</h3>
                <ul className="space-y-2">
                  {product.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center space-x-3 text-gray-600">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t pt-6">
                <div className="flex items-center space-x-4 mb-6">
                  <span className="font-semibold text-gray-800">Quantity:</span>
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 hover:bg-gray-100 transition-colors"
                    >
                      <Minus className="w-5 h-5" />
                    </button>
                    <span className="w-12 text-center font-semibold">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-2 hover:bg-gray-100 transition-colors"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={handleAddToCart}
                    disabled={!product.inStock}
                    className="flex-1 btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ShoppingBag className="w-5 h-5" />
                    <span>Add to Cart</span>
                  </button>
                  <button className="flex-1 btn-secondary flex items-center justify-center space-x-2">
                    <Heart className="w-5 h-5" />
                    <span>Add to Wishlist</span>
                  </button>
                </div>

                <button className="mt-4 w-full flex items-center justify-center space-x-2 text-gray-600 hover:text-primary-500 transition-colors">
                  <Share2 className="w-5 h-5" />
                  <span>Share this product</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="section-heading mb-8">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;
