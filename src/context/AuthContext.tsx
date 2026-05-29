import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, Address } from '../types';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  updateProfile: (updates: Partial<User>) => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('user');
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  const login = async (email: string, _password: string): Promise<boolean> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));

    // In a real app, this would validate against backend
    const newUser: User = {
      id: 'user-' + Date.now(),
      email,
      name: email.split('@')[0],
      addresses: [],
    };
    setUser(newUser);
    return true;
  };

  const register = async (name: string, email: string, _password: string): Promise<boolean> => {
    await new Promise(resolve => setTimeout(resolve, 500));

    const newUser: User = {
      id: 'user-' + Date.now(),
      email,
      name,
      addresses: [],
    };
    setUser(newUser);
    return true;
  };

  const logout = () => {
    setUser(null);
  };

  const updateProfile = (updates: Partial<User>) => {
    if (user) {
      setUser({ ...user, ...updates });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        updateProfile,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const mockAddresses: Address[] = [
  {
    id: 'addr-1',
    type: 'home',
    street: '123 Beauty Lane',
    city: 'Los Angeles',
    state: 'CA',
    zipCode: '90001',
    isDefault: true,
  },
  {
    id: 'addr-2',
    type: 'work',
    street: '456 Skincare Ave',
    city: 'Los Angeles',
    state: 'CA',
    zipCode: '90002',
    isDefault: false,
  },
];
