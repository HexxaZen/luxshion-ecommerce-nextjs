// src/app/login/page.tsx

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { LoginForm } from '../generalComponents/LoginForm';
import { RegisterForm } from '../generalComponents/RegisterForm';
import { TogglePanel } from '../generalComponents/TogglePanel';
import clsx from 'clsx';
import { useAppContext } from '../context/AppContext';

export default function LoginPage() {
  const [isActive, setIsActive] = useState(false);
  const { auth } = useAppContext();
  const router = useRouter();

  const handleLogin = async (email: string, password: string) => {
    try {
      const user = await auth.login(email, password);
      if (user.role === 'ADMIN') {
        router.push('/admin/dashboard');
      } else if (user.role === 'SELLER') {
        router.push('/seller/dashboard');
      } else {
        router.push('/order-details');
      }
    } catch (error) {
      alert('Login failed. Please check your credentials.');
    }
  };

  const handleRegister = async (name: string, email: string, password: string) => {
    const role = 'CLIENT'; 
    try {
      await auth.register(name, email, password, role);
      alert('Registration successful! Please log in.');
      setIsActive(false); 
    } catch (error) {
      alert('Registration failed. Please try again.');
    }
  };

  const containerClasses = clsx(
    'container',
    {
      active: isActive,
    }
  );

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-[#e2e2e2] to-[#c9d6ff]">
      <div className={containerClasses}>
        <div className="form-box login">
          <LoginForm onLogin={handleLogin} />
        </div>
        <div className="form-box register">
          <RegisterForm onRegister={handleRegister} />
        </div>
        <div className="toggle-box">
          <TogglePanel
            isActive={isActive}
            onToggle={() => setIsActive(!isActive)}
          />
        </div>
      </div>
    </div>
  );
}