export interface Product {
  id: string;
  name: string;
  category: 'skincare' | 'perfume' | 'facewash' | 'bodywash' | 'soaps' | 'lifestyle';
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  description: string;
  details: string[];
  rating: number;
  reviews: number;
  inStock: boolean;
  featured?: boolean;
  bestseller?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  addresses: Address[];
}

export interface Address {
  id: string;
  type: 'home' | 'work' | 'other';
  street: string;
  city: string;
  state: string;
  zipCode: string;
  isDefault: boolean;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  status: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered';
  total: number;
  shippingAddress: Address;
  createdAt: Date;
  updatedAt: Date;
  trackingNumber?: string;
}
