'use client';

import { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import { FaGoogle, FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import clsx from 'clsx';

// Definisikan props yang diharapkan oleh komponen
interface LoginFormProps {
  onLogin: (email: string, password: string) => void;
}

export const LoginForm = ({ onLogin }: LoginFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <div className="form-box-container w-full">
      <form onSubmit={handleSubmit} className="text-center">
        <h1 className="text-4xl font-semibold mb-2">Login</h1>
        <p className="text-gray-600 my-4">or login with social platforms</p>
        <div className="social-icons flex justify-center space-x-2 my-4">
          <a href="#" className="flex items-center justify-center p-2 border-2 border-gray-300 rounded-lg text-gray-800 text-2xl">
            <FaGoogle />
          </a>
          <a href="#" className="flex items-center justify-center p-2 border-2 border-gray-300 rounded-lg text-gray-800 text-2xl">
            <FaFacebookF />
          </a>
          <a href="#" className="flex items-center justify-center p-2 border-2 border-gray-300 rounded-lg text-gray-800 text-2xl">
            <FaGithub />
          </a>
          <a href="#" className="flex items-center justify-center p-2 border-2 border-gray-300 rounded-lg text-gray-800 text-2xl">
            <FaLinkedinIn />
          </a>
        </div>
        <div className="input-box relative my-4">
          <input
            type="text"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 bg-gray-200 border-none rounded-lg text-gray-800 focus:outline-none"
          />
          <FaUser className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600" />
        </div>
        <div className="input-box relative my-4">
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-4 bg-gray-200 border-none rounded-lg text-gray-800 focus:outline-none"
          />
          <FaLock className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600" />
        </div>
        <div className="forgot-link text-sm my-4">
          <a href="#" className="text-gray-800 hover:underline">Forgot Password?</a>
        </div>
        <button
          type="submit"
          className="w-full h-12 bg-[#7494ec] border-none rounded-lg shadow-md text-white font-semibold cursor-pointer"
        >
          Login
        </button>
      </form>
    </div>
  );
};