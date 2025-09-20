'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import clsx from 'clsx';
import { FiMail, FiLock, FiUser, FiSun, FiMoon } from 'react-icons/fi';
import { useAppContext } from '../context/AppContext'; // Adjust the import path as needed

export const AuthComponents = () => {
    const { auth } = useAppContext();
    const router = useRouter();
    const [isLoginActive, setIsLoginActive] = useState(true);
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [signupName, setSignupName] = useState('');
    const [signupEmail, setSignupEmail] = useState('');
    const [signupPassword, setSignupPassword] = useState('');
    const [isDark, setIsDark] = useState(false);

    // Initial theme check
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
            setIsDark(true);
        }
    }, []);

    const toggleTheme = () => {
        if (isDark) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
        setIsDark(!isDark);
    };

    const handleLoginSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      try {
          const user = await auth.login(loginEmail, loginPassword);
          console.log("Login success:", user);
          const redirect = localStorage.getItem("redirectAfterLogin");
          if (redirect) {
              localStorage.removeItem("redirectAfterLogin");
              router.push(redirect);
              return;
          }
  
          // fallback berdasarkan role (ON PROCESS)
          if (user.role === 'ADMIN') {
              router.push('/');
          } else if (user.role === 'SELLER') {
              router.push('/');
          } else {
              router.push('/');
          }
      } catch (error) {
          alert('Login failed. Please check your credentials.');
      }
  };

    const handleSignupSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const role = 'CLIENT';
        try {
            await auth.register(signupName, signupEmail, signupPassword, role);
            alert('Account created successfully! Please log in.');
            setIsLoginActive(true);
        } catch (error) {
            alert('Signup failed. Please try again.');
        }
    };

    const loginTabClasses = clsx(
        'px-6 py-2 rounded-md font-medium transition-all duration-300',
        {
            'bg-blue-600 text-white': isLoginActive,
            'text-gray-600 dark:text-gray-300': !isLoginActive,
        }
    );

    const signupTabClasses = clsx(
        'px-6 py-2 rounded-md font-medium transition-all duration-300',
        {
            'bg-blue-600 text-white': !isLoginActive,
            'text-gray-600 dark:text-gray-300': isLoginActive,
        }
    );

    const formCardClasses = clsx(
        'form-card bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700'
    );

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300 font-sans">
            <div className="container mx-auto px-4 py-8">
                {/* Theme Toggle */}
                <div className="flex justify-end mb-8">
                    <div className="theme-switch flex items-center bg-white dark:bg-gray-800 rounded-full p-1 shadow-lg">
                        <button
                            onClick={toggleTheme}
                            className={clsx('p-2 rounded-full transition-all duration-300', {
                                'bg-blue-100 text-blue-600': !isDark,
                                'bg-transparent text-gray-400': isDark,
                            })}
                        >
                            <FiSun />
                        </button>
                        <button
                            onClick={toggleTheme}
                            className={clsx('p-2 rounded-full transition-all duration-300', {
                                'bg-transparent text-gray-400': !isDark,
                                'bg-blue-900 text-blue-200': isDark,
                            })}
                        >
                            <FiMoon />
                        </button>
                    </div>
                </div>

                {/* Form Container */}
                <div className="max-w-md mx-auto" data-aos="fade-up" data-aos-duration="800">
                    {/* Tabs */}
                    <div className="flex justify-center mb-8">
                        <div className="bg-white dark:bg-gray-800 rounded-lg p-1 shadow-inner">
                            <button
                                id="loginTab"
                                onClick={() => setIsLoginActive(true)}
                                className={loginTabClasses}
                            >
                                Login
                            </button>
                            <button
                                id="signupTab"
                                onClick={() => setIsLoginActive(false)}
                                className={signupTabClasses}
                            >
                                Signup
                            </button>
                        </div>
                    </div>

                    {/* Login Form */}
                    {isLoginActive ? (
                        <div id="loginForm" className={formCardClasses}>
                            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">Welcome Back</h2>
                            <form onSubmit={handleLoginSubmit}>
                                <div className="mb-4">
                                    <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="loginEmail">
                                        <FiMail className="inline mr-2 w-4 h-4" />
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="loginEmail"
                                        value={loginEmail}
                                        onChange={(e) => setLoginEmail(e.target.value)}
                                        className="input-field w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>
                                <div className="mb-6">
                                    <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="loginPassword">
                                        <FiLock className="inline mr-2 w-4 h-4" />
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        id="loginPassword"
                                        value={loginPassword}
                                        onChange={(e) => setLoginPassword(e.target.value)}
                                        className="input-field w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                                        placeholder="Enter your password"
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn-primary w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transform hover:scale-105 shadow-lg">
                                    Login
                                </button>
                            </form>
                        </div>
                    ) : (
                        <div id="signupForm" className={formCardClasses}>
                            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">Create Account</h2>
                            <form onSubmit={handleSignupSubmit}>
                                <div className="mb-4">
                                    <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="signupName">
                                        <FiUser className="inline mr-2 w-4 h-4" />
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="signupName"
                                        value={signupName}
                                        onChange={(e) => setSignupName(e.target.value)}
                                        className="input-field w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                                        placeholder="Enter your full name"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="signupEmail">
                                        <FiMail className="inline mr-2 w-4 h-4" />
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="signupEmail"
                                        value={signupEmail}
                                        onChange={(e) => setSignupEmail(e.target.value)}
                                        className="input-field w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>
                                <div className="mb-6">
                                    <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="signupPassword">
                                        <FiLock className="inline mr-2 w-4 h-4" />
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        id="signupPassword"
                                        value={signupPassword}
                                        onChange={(e) => setSignupPassword(e.target.value)}
                                        className="input-field w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                                        placeholder="Create a password"
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn-primary w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transform hover:scale-105 shadow-lg">
                                    Sign Up
                                </button>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};