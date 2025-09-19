'use client';

import { useState } from 'react';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';

interface RegisterFormProps {
  onRegister: (name: string, email: string, password: string) => Promise<void>;
}

export const RegisterForm = ({ onRegister }: RegisterFormProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onRegister(name, email, password);
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit}>
        <h1 className="text-4xl font-semibold mb-2">Registration</h1>
        <p className="text-gray-600 my-4">or register with social platforms</p>
        <div className="social-icons flex justify-center space-x-2 my-4">
          <a href="#" className="flex items-center justify-center p-2 border-2 border-gray-300 rounded-lg text-gray-800 text-2xl">
            <i className='bx bxl-google'></i>
          </a>
          <a href="#" className="flex items-center justify-center p-2 border-2 border-gray-300 rounded-lg text-gray-800 text-2xl">
            <i className='bx bxl-facebook'></i>
          </a>
          <a href="#" className="flex items-center justify-center p-2 border-2 border-gray-300 rounded-lg text-gray-800 text-2xl">
            <i className='bx bxl-github'></i>
          </a>
          <a href="#" className="flex items-center justify-center p-2 border-2 border-gray-300 rounded-lg text-gray-800 text-2xl">
            <i className='bx bxl-linkedin'></i>
          </a>
        </div>
        <div className="input-box relative my-4">
          <input
            type="text"
            placeholder="Username"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-4 bg-gray-200 border-none rounded-lg text-gray-800 focus:outline-none"
          />
          <FaUser className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600" />
        </div>
        <div className="input-box relative my-4">
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 bg-gray-200 border-none rounded-lg text-gray-800 focus:outline-none"
          />
          <FaEnvelope className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600" />
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
        <button
          type="submit"
          className="w-full h-12 bg-[#7494ec] border-none rounded-lg shadow-md text-white font-semibold cursor-pointer"
        >
          Register
        </button>
      </form>
    </div>
  );
};