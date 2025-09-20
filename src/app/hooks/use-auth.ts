'use client';

import { useState } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
  role: 'ADMIN' | 'SELLER' | 'CLIENT';
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  const login = async (email: string, password: string): Promise<User> => {
    setLoading(true);
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        throw new Error('Login gagal');
      }

      const data = await res.json();
      setUser(data.user);
      localStorage.setItem('token', data.token);

      return data.user;
    } finally {
      setLoading(false);
    }
  };

  const register = async (
    name: string,
    email: string,
    password: string,
    role: string
  ): Promise<void> => {
    setLoading(true);
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password, role }),
      });

      if (!res.ok) {
        throw new Error('Registrasi gagal');
      }

      await res.json();
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  return {
    user,
    loading,
    login,
    register,
    logout,
  };
}
