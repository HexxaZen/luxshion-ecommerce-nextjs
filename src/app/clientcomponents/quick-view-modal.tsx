// src/components/quick-view-modal.tsx

'use client';

import { FaTimes } from 'react-icons/fa';
import clsx from 'clsx';
import { useAppContext } from '../context/AppContext';
import { Product } from '../lib/types';
import Image from 'next/image';

export const QuickViewModal = () => {
    const { quickView, cart } = useAppContext();
    const product: Product | null = quickView.data;

    const modalClasses = clsx(
        "fixed inset-0 z-50 transition-all duration-300",
        quickView.isOpen ? "visible opacity-100" : "invisible opacity-0"
    );

    if (!product) {
        return null;
    }

    const handleAddToCartAndClose = () => {
        // Panggil addToCart dengan objek produk
        cart.addToCart(product);
        quickView.closeModal();
    };

    return (
        <div className={modalClasses}>
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={quickView.closeModal}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
                <button onClick={quickView.closeModal} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                    <FaTimes className="text-xl" />
                </button>
                <div id="quick-view-content" className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <Image
                            src={product.imageUrl}
                            alt={product.name}
                            width={500}
                            height={500}
                            className="w-full h-96 object-cover rounded-lg"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">{product.name}</h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">{product.description}</p>
                        <div className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Rp.{product.price}</div>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Size</label>
                                <select className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white">
                                    <option>Small</option>
                                    <option>Medium</option>
                                    <option>Large</option>
                                    <option>X-Large</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Color</label>
                                <div className="flex space-x-2">
                                    <button className="w-8 h-8 bg-black rounded-full border-2 border-gray-300"></button>
                                    <button className="w-8 h-8 bg-gray-500 rounded-full border-2 border-gray-300"></button>
                                    <button className="w-8 h-8 bg-white rounded-full border-2 border-gray-300"></button>
                                </div>
                            </div>
                            <button
                                onClick={handleAddToCartAndClose}
                                className="w-full bg-gray-800 dark:bg-white text-white dark:text-gray-800 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300"
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};