import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartPage: React.FC = () => {
  const { items, updateQuantity, removeFromCart, totalPrice, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-6" />
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-8">
            Looks like you haven't added any products yet. Start shopping to fill your cart!
          </p>
          <Link to="/products" className="btn-primary inline-flex items-center space-x-2">
            <span>Start Shopping</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    );
  }

  const shipping = totalPrice > 50 ? 0 : 5.99;
  const tax = totalPrice * 0.08;
  const total = totalPrice + shipping + tax;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-display text-3xl font-bold text-gray-900">Shopping Cart</h1>
          <button
            onClick={clearCart}
            className="text-gray-600 hover:text-red-500 transition-colors text-sm font-medium"
          >
            Clear Cart
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map(item => (
              <div
                key={item.product.id}
                className="bg-white rounded-xl shadow-md p-6 flex flex-col sm:flex-row gap-6"
              >
                <Link to={`/product/${item.product.id}`} className="w-full sm:w-32 aspect-square flex-shrink-0">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </Link>

                <div className="flex-1 flex flex-col">
                  <div className="flex-1">
                    <Link
                      to={`/product/${item.product.id}`}
                      className="font-semibold text-gray-800 hover:text-primary-500 transition-colors"
                    >
                      {item.product.name}
                    </Link>
                    <p className="text-sm text-gray-500 mt-1 capitalize">{item.product.category}</p>
                    <div className="flex items-center mt-2">
                      {item.product.originalPrice && (
                        <span className="text-sm text-gray-400 line-through mr-2">
                          ${item.product.originalPrice.toFixed(2)}
                        </span>
                      )}
                      <span className="text-lg font-bold text-primary-500">
                        ${item.product.price.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center border border-gray-300 rounded-lg">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="p-2 hover:bg-gray-100 transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-12 text-center font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="p-2 hover:bg-gray-100 transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors p-2"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
              <h2 className="font-semibold text-xl text-gray-800 mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal ({items.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                  <span className="font-medium">${totalPrice.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="font-medium">
                    {shipping === 0 ? (
                      <span className="text-green-600">Free</span>
                    ) : (
                      `$${shipping.toFixed(2)}`
                    )}
                  </span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>Estimated Tax</span>
                  <span className="font-medium">${tax.toFixed(2)}</span>
                </div>

                {shipping > 0 && (
                  <div className="bg-secondary-50 text-secondary-700 px-4 py-3 rounded-lg text-sm">
                    Add ${(50 - totalPrice).toFixed(2)} more for free shipping!
                  </div>
                )}
              </div>

              <div className="border-t pt-6 mb-6">
                <div className="flex justify-between text-lg font-bold text-gray-900">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <Link
                to="/checkout"
                className="w-full btn-primary flex items-center justify-center space-x-2"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                to="/products"
                className="w-full mt-4 inline-flex items-center justify-center text-gray-600 hover:text-primary-500 font-medium transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
