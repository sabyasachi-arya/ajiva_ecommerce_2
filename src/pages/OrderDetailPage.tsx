import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Package, Truck, CheckCircle, Clock, MapPin, ArrowLeft } from 'lucide-react';

const OrderDetailPage: React.FC = () => {
  const { orderId } = useParams<{ orderId: string }>();

  const order = {
    id: orderId || 'AJV-12345678',
    status: 'Shipped',
    estimatedDelivery: 'May 30, 2024',
    trackingNumber: 'TRK89284756',
    currentLocation: 'Los Angeles, CA Distribution Center',
    items: [
      {
        name: 'Vitamin C Brightening Serum',
        price: 45.99,
        quantity: 2,
        image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=200',
      },
      {
        name: 'Lavender Dreams Perfume',
        price: 89.99,
        quantity: 1,
        image: 'https://images.pexels.com/photos/965819/pexels-photo-965819.jpeg?auto=compress&cs=tinysrgb&w=200',
      },
    ],
    address: {
      street: '123 Beauty Lane',
      city: 'Los Angeles',
      state: 'CA',
      zipCode: '90001',
    },
  };

  const trackingSteps = [
    { status: 'Order Placed', date: 'May 25, 2024 - 2:30 PM', completed: true },
    { status: 'Payment Confirmed', date: 'May 25, 2024 - 2:35 PM', completed: true },
    { status: 'Processing', date: 'May 26, 2024 - 9:00 AM', completed: true },
    { status: 'Shipped', date: 'May 27, 2024 - 11:00 AM', completed: true },
    { status: 'Out for Delivery', date: '', completed: false },
    { status: 'Delivered', date: '', completed: false },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/account/orders"
          className="inline-flex items-center space-x-2 text-gray-600 hover:text-primary-500 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Orders</span>
        </Link>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/80 text-sm">Order Number</p>
                <h1 className="font-display text-2xl font-bold text-white">{order.id}</h1>
              </div>
              <div className="text-right">
                <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {order.status}
                </span>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-gray-500 text-sm">Estimated Delivery</p>
                <p className="font-semibold text-gray-900">{order.estimatedDelivery}</p>
              </div>
              <div className="text-right">
                <p className="text-gray-500 text-sm">Tracking Number</p>
                <p className="font-semibold text-primary-500">{order.trackingNumber}</p>
              </div>
            </div>

            {/* Tracking Timeline */}
            <div className="mb-8">
              <h2 className="font-semibold text-lg text-gray-900 mb-6">Order Tracking</h2>
              <div className="space-y-0">
                {trackingSteps.map((step, index) => (
                  <div key={index} className="flex">
                    <div className="flex flex-col items-center mr-4">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          step.completed
                            ? 'bg-primary-500 text-white'
                            : 'bg-gray-200 text-gray-400'
                        }`}
                      >
                        {step.status === 'Order Placed' && <Package className="w-5 h-5" />}
                        {step.status === 'Payment Confirmed' && <CheckCircle className="w-5 h-5" />}
                        {step.status === 'Processing' && <Clock className="w-5 h-5" />}
                        {step.status === 'Shipped' && <Truck className="w-5 h-5" />}
                        {step.status === 'Out for Delivery' && <Truck className="w-5 h-5" />}
                        {step.status === 'Delivered' && <CheckCircle className="w-5 h-5" />}
                      </div>
                      {index < trackingSteps.length - 1 && (
                        <div
                          className={`w-0.5 h-16 ${
                            step.completed ? 'bg-primary-500' : 'bg-gray-200'
                          }`}
                        />
                      )}
                    </div>
                    <div className="pb-12">
                      <p
                        className={`font-medium ${
                          step.completed ? 'text-gray-900' : 'text-gray-400'
                        }`}
                      >
                        {step.status}
                      </p>
                      {step.date && (
                        <p className="text-sm text-gray-500">{step.date}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Current Location */}
            <div className="bg-secondary-50 p-4 rounded-lg mb-8">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-secondary-500" />
                <div>
                  <p className="text-sm text-gray-600">Current Location</p>
                  <p className="font-medium text-gray-900">{order.currentLocation}</p>
                </div>
              </div>
            </div>

            {/* Order Items */}
            <div>
              <h2 className="font-semibold text-lg text-gray-900 mb-4">Order Items</h2>
              <div className="space-y-4">
                {order.items.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{item.name}</p>
                      <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                    </div>
                    <p className="font-semibold text-gray-900">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Shipping Address */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="font-semibold text-lg text-gray-900 mb-4">Shipping Address</h2>
          <div className="flex items-start space-x-3">
            <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
            <div>
              <p className="font-medium text-gray-900">{order.address.street}</p>
              <p className="text-gray-600">
                {order.address.city}, {order.address.state} {order.address.zipCode}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailPage;
