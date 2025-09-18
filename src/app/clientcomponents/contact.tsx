"use client";

import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

export const Contact = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Message sent successfully!');
    };

    return (
        <section id="contact" className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">Contact Us</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Get in Touch</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-500" />
                            </div>
                            <div>
                                <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-500" />
                            </div>
                            <div>
                                <textarea placeholder="Your Message" rows={5} className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-500"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-gray-800 dark:bg-white text-white dark:text-gray-800 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300">
                                Send Message
                            </button>
                        </form>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Visit Our Store</h3>
                        <div className="space-y-4 mb-8">
                            <div className="flex items-center space-x-3">
                                <FaMapMarkerAlt className="text-gray-600 dark:text-gray-400" />
                                <span className="text-gray-600 dark:text-gray-400">123 Fashion Street, Style City, SC 12345</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <FaPhone className="text-gray-600 dark:text-gray-400" />
                                <span className="text-gray-600 dark:text-gray-400">+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <FaEnvelope className="text-gray-600 dark:text-gray-400" />
                                <span className="text-gray-600 dark:text-gray-400">hello@luxshion.com</span>
                            </div>
                        </div>
                        <div className="w-full h-64 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                            <span className="text-gray-500 dark:text-gray-400">Interactive Map</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};