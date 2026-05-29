import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, SlidersHorizontal, X } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';

const ProductsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  const selectedCategory = searchParams.get('category') || '';
  const priceRange = searchParams.get('price') || '';

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (selectedCategory) {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    if (priceRange) {
      const [min, max] = priceRange.split('-').map(Number);
      filtered = filtered.filter(p => p.price >= min && p.price <= max);
    }

    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return filtered;
  }, [selectedCategory, priceRange, sortBy]);

  const handleCategoryChange = (categoryId: string) => {
    const params = new URLSearchParams(searchParams);
    if (categoryId) {
      params.set('category', categoryId);
    } else {
      params.delete('category');
    }
    setSearchParams(params);
  };

  const handlePriceChange = (price: string) => {
    const params = new URLSearchParams(searchParams);
    if (price) {
      params.set('price', price);
    } else {
      params.delete('price');
    }
    setSearchParams(params);
  };

  const priceRanges = [
    { id: '', label: 'All Prices' },
    { id: '0-25', label: 'Under $25' },
    { id: '25-50', label: '$25 - $50' },
    { id: '50-100', label: '$50 - $100' },
    { id: '100-999', label: '$100+' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-bold mb-2">
            {selectedCategory
              ? categories.find(c => c.id === selectedCategory)?.name || 'Products'
              : 'All Products'}
          </h1>
          <p className="text-white/90">
            {filteredProducts.length} products available
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
              <h3 className="font-semibold text-lg mb-4 flex items-center">
                <Filter className="w-5 h-5 mr-2" />
                Filters
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-gray-700 mb-3">Category</h4>
                  <div className="space-y-2">
                    <label className="flex items-center cursor-pointer group">
                      <input
                        type="radio"
                        name="category"
                        checked={!selectedCategory}
                        onChange={() => handleCategoryChange('')}
                        className="w-4 h-4 text-primary-500 focus:ring-primary-500"
                      />
                      <span className="ml-3 text-gray-600 group-hover:text-gray-900">All Categories</span>
                    </label>
                    {categories.map(cat => (
                      <label key={cat.id} className="flex items-center cursor-pointer group">
                        <input
                          type="radio"
                          name="category"
                          checked={selectedCategory === cat.id}
                          onChange={() => handleCategoryChange(cat.id)}
                          className="w-4 h-4 text-primary-500 focus:ring-primary-500"
                        />
                        <span className="ml-3 text-gray-600 group-hover:text-gray-900">{cat.name}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h4 className="font-medium text-gray-700 mb-3">Price Range</h4>
                  <div className="space-y-2">
                    {priceRanges.map(range => (
                      <label key={range.id} className="flex items-center cursor-pointer group">
                        <input
                          type="radio"
                          name="price"
                          checked={priceRange === range.id}
                          onChange={() => handlePriceChange(range.id)}
                          className="w-4 h-4 text-primary-500 focus:ring-primary-500"
                        />
                        <span className="ml-3 text-gray-600 group-hover:text-gray-900">{range.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {(selectedCategory || priceRange) && (
                  <button
                    onClick={() => {
                      const params = new URLSearchParams();
                      setSearchParams(params);
                    }}
                    className="w-full btn-outline text-sm py-2"
                  >
                    Clear All Filters
                  </button>
                )}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6 flex items-center justify-between">
              <button
                onClick={() => setIsFilterOpen(true)}
                className="lg:hidden flex items-center space-x-2 text-gray-700"
              >
                <SlidersHorizontal className="w-5 h-5" />
                <span>Filters</span>
              </button>

              <div className="flex items-center space-x-4 ml-auto">
                <label className="text-sm text-gray-600">Sort by:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="featured">Featured</option>
                  <option value="rating">Highest Rated</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Active Filters */}
            {(selectedCategory || priceRange) && (
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedCategory && (
                  <span className="inline-flex items-center bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">
                    {categories.find(c => c.id === selectedCategory)?.name}
                    <button
                      onClick={() => handleCategoryChange('')}
                      className="ml-2 hover:text-primary-900"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </span>
                )}
                {priceRange && (
                  <span className="inline-flex items-center bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full text-sm">
                    {priceRanges.find(r => r.id === priceRange)?.label}
                    <button
                      onClick={() => handlePriceChange('')}
                      className="ml-2 hover:text-secondary-900"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </span>
                )}
              </div>
            )}

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white rounded-xl">
                <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsFilterOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-80 bg-white shadow-xl overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-lg">Filters</h3>
                <button onClick={() => setIsFilterOpen(false)}>
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-gray-700 mb-3">Category</h4>
                  <div className="space-y-2">
                    {categories.map(cat => (
                      <label key={cat.id} className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="category-mobile"
                          checked={selectedCategory === cat.id}
                          onChange={() => handleCategoryChange(cat.id)}
                          className="w-4 h-4 text-primary-500 focus:ring-primary-500"
                        />
                        <span className="ml-3 text-gray-600">{cat.name}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h4 className="font-medium text-gray-700 mb-3">Price Range</h4>
                  <div className="space-y-2">
                    {priceRanges.map(range => (
                      <label key={range.id} className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="price-mobile"
                          checked={priceRange === range.id}
                          onChange={() => handlePriceChange(range.id)}
                          className="w-4 h-4 text-primary-500 focus:ring-primary-500"
                        />
                        <span className="ml-3 text-gray-600">{range.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsFilterOpen(false)}
                className="w-full btn-primary mt-8"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
