import React, { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { User, Package, MapPin, Settings, LogOut, Edit2, Plus } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { mockAddresses } from '../context/AuthContext';

const AccountPage: React.FC = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const [activeTab, setActiveTab] = useState('orders');
  const [addresses, setAddresses] = useState(mockAddresses);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  const tabs = [
    { id: 'orders', label: 'My Orders', icon: Package },
    { id: 'addresses', label: 'Addresses', icon: MapPin },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const mockOrders = [
    {
      id: 'AJV-12345678',
      date: 'May 20, 2024',
      status: 'Delivered',
      total: 156.97,
      items: 4,
    },
    {
      id: 'AJV-23456789',
      date: 'May 25, 2024',
      status: 'Shipped',
      total: 89.99,
      items: 2,
    },
    {
      id: 'AJV-34567890',
      date: 'May 28, 2024',
      status: 'Processing',
      total: 45.99,
      items: 1,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="font-display text-2xl font-bold text-gray-900">{user?.name}</h1>
                <p className="text-gray-600">{user?.email}</p>
              </div>
            </div>
            <button
              onClick={logout}
              className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>

        {/* Tabs and Content */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-4">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                    activeTab === tab.id
                      ? 'bg-primary-50 text-primary-600'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  <span className="font-medium">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'orders' && (
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6 border-b">
                  <h2 className="font-semibold text-xl text-gray-900">My Orders</h2>
                </div>
                <div className="divide-y">
                  {mockOrders.map(order => (
                    <div key={order.id} className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                          <p className="font-semibold text-gray-900">Order {order.id}</p>
                          <p className="text-sm text-gray-500">{order.date}</p>
                          <p className="text-sm text-gray-500">{order.items} items</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-gray-900">${order.total.toFixed(2)}</p>
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                              order.status === 'Delivered'
                                ? 'bg-green-100 text-green-700'
                                : order.status === 'Shipped'
                                ? 'bg-blue-100 text-blue-700'
                                : 'bg-yellow-100 text-yellow-700'
                            }`}
                          >
                            {order.status}
                          </span>
                        </div>
                      </div>
                      <div className="mt-4 flex gap-4">
                        <Link
                          to={`/account/orders/${order.id}`}
                          className="text-primary-500 hover:text-primary-600 text-sm font-medium"
                        >
                          View Details
                        </Link>
                        <Link
                          to={`/account/orders/${order.id}`}
                          className="text-gray-600 hover:text-gray-800 text-sm font-medium"
                        >
                          Track Order
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'addresses' && (
              <div className="space-y-4">
                <button className="w-full bg-white rounded-xl shadow-md p-6 border-2 border-dashed border-gray-300 hover:border-primary-500 transition-colors group">
                  <div className="flex items-center justify-center space-x-3 text-gray-500 group-hover:text-primary-500">
                    <Plus className="w-6 h-6" />
                    <span className="font-medium">Add New Address</span>
                  </div>
                </button>

                {addresses.map(address => (
                  <div key={address.id} className="bg-white rounded-xl shadow-md p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="font-semibold text-gray-900 capitalize">{address.type}</span>
                          {address.isDefault && (
                            <span className="bg-primary-100 text-primary-600 text-xs px-2 py-1 rounded-full">
                              Default
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600">{address.street}</p>
                        <p className="text-gray-600">
                          {address.city}, {address.state} {address.zipCode}
                        </p>
                      </div>
                      <button className="text-gray-400 hover:text-primary-500">
                        <Edit2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="font-semibold text-xl text-gray-900 mb-6">Account Settings</h2>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      defaultValue={user?.name}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      defaultValue={user?.email}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>

                  <div className="pt-4 border-t">
                    <h3 className="font-medium text-gray-900 mb-4">Change Password</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Current Password
                        </label>
                        <input
                          type="password"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          New Password
                        </label>
                        <input
                          type="password"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button className="btn-primary">Save Changes</button>
                    <button className="btn-outline">Cancel</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
