"use client";

import Link from 'next/link';
import { useAppContext } from '../context/AppContext';
import clsx from 'clsx';
import { useEffect } from 'react';

export const MobileMenu = () => {
    const { mobileMenu } = useAppContext();
    const menuClasses = clsx(
        "fixed inset-0 z-40 transition-all duration-300",
        mobileMenu.isOpen ? "visible opacity-100" : "invisible opacity-0"
    );

    useEffect(() => {
        document.body.style.overflow = mobileMenu.isOpen ? 'hidden' : 'auto';
    }, [mobileMenu.isOpen]);

    return (
        <div className={menuClasses}>
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={mobileMenu.closeModal}></div>
            <div className="absolute top-20 left-4 right-4 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl transform transition-transform duration-300">
                <div className="flex flex-col space-y-4">
                    <Link href="#home" onClick={mobileMenu.closeModal} className="mobile-nav-link">Home</Link>
                    <Link href="#products" onClick={mobileMenu.closeModal} className="mobile-nav-link">Products</Link>
                    <Link href="#about" onClick={mobileMenu.closeModal} className="mobile-nav-link">About</Link>
                    <Link href="#contact" onClick={mobileMenu.closeModal} className="mobile-nav-link">Contact</Link>
                </div>
            </div>
        </div>
    );
};