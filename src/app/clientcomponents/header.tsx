"use client";

import Link from 'next/link';
import { FaShoppingCart, FaMoon, FaSun, FaBars } from 'react-icons/fa';
import clsx from 'clsx';
import { useAppContext } from '../context/AppContext';
import { useEffect, useState } from 'react';

export const Header = () => {
    const { theme, cart, mobileMenu, cartSidebar } = useAppContext(); 
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navClasses = clsx(
        'glass-nav px-8 py-4 rounded-full backdrop-blur-md',
        'border transition-all duration-300',
        isScrolled
            ? 'bg-white/90 dark:bg-gray-800/90 border-white/70 dark:border-gray-700/70 shadow-xl'
            : 'bg-white/20 dark:bg-gray-800/20 border-white/30 dark:border-gray-700/30 shadow-lg'
    );

    return (
        <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300">
            <div className={navClasses}>
                <div className="flex items-center justify-between space-x-8">
                    <Link href="/">
                        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">LuxShion</h1>
                    </Link>

                    {/* Menu Desktop */}
                    <div className="hidden md:flex items-center space-x-6">
                        <Link href="#home" className="nav-link">Home</Link>
                        <Link href="#products" className="nav-link">Products</Link>
                        <Link href="#about" className="nav-link">About</Link>
                        <Link href="#contact" className="nav-link">Contact</Link>
                    </div>

                    {/* Aksi Header */}
                    <div className="flex items-center space-x-4">
                        {/* Toggle Theme */}
                        <button
                            onClick={theme.toggleTheme}
                            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        >
                            {theme.isDark
                                ? <FaSun className="text-gray-700 dark:text-gray-300" />
                                : <FaMoon className="text-gray-700 dark:text-gray-300" />}
                        </button>

                        {/* Cart Button */}
                        <button
                            onClick={cartSidebar.openModal} // ✅ gunakan cart.openModal, bukan cartSidebar
                            className="relative p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        >
                            <FaShoppingCart className="text-gray-700 dark:text-gray-300" />
                            {cart.totalItems > 0 && (
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                    {cart.totalItems}
                                </span>
                            )}
                        </button>

                        {/* Mobile Menu */}
                        <button
                            onClick={mobileMenu.openModal}
                            className="md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        >
                            <FaBars className="text-gray-700 dark:text-gray-300" />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};
