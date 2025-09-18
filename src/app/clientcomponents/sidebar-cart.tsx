"use client";

import { FaTimes, FaPlus, FaMinus, FaTrash } from 'react-icons/fa';
import clsx from 'clsx';
import { useAppContext } from '../context/AppContext';

export const SidebarCart = () => {
    const { cart, cartSidebar } = useAppContext();

    const sidebarClasses = clsx(
        "fixed right-0 top-0 h-full w-96 max-w-[90vw] bg-white dark:bg-gray-800 shadow-xl z-50 transition-transform duration-300",
        cartSidebar.isOpen ? 'translate-x-0' : 'translate-x-full' // ✅ dibalik biar logis
    );

    return (
        <div id="cart-sidebar" className={sidebarClasses}>
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Shopping Cart</h3>
                    <button onClick={cartSidebar.closeModal} className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                        <FaTimes className="text-xl" />
                    </button>
                </div>
            </div>

            <div id="cart-items" className="flex-1 overflow-y-auto p-6">
                {cart.cart.length === 0 ? (
                    <p className="text-gray-500 dark:text-gray-400 text-center">Your cart is empty</p>
                ) : (
                    cart.cart.map(item => (
                        <div key={item.id} className="flex items-center space-x-4 mb-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                            <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
                            <div className="flex-1">
                                <h4 className="font-semibold text-gray-800 dark:text-white">{item.name}</h4>
                                <p className="text-gray-600 dark:text-gray-400">Rp{item.price}</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <button onClick={() => cart.updateQuantity(item.id, item.quantity - 1)} className="w-8 h-8 bg-gray-200 dark:bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors">
                                    <FaMinus className="text-xs" />
                                </button>
                                <span className="w-8 text-center font-semibold text-gray-800 dark:text-white">{item.quantity}</span>
                                <button onClick={() => cart.updateQuantity(item.id, item.quantity + 1)} className="w-8 h-8 bg-gray-200 dark:bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors">
                                    <FaPlus className="text-xs" />
                                </button>
                            </div>
                            <button onClick={() => cart.removeFromCart(item.id)} className="text-red-500 hover:text-red-700 transition-colors">
                                <FaTrash />
                            </button>
                        </div>
                    ))
                )}
            </div>

            <div className="p-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-semibold text-gray-800 dark:text-white">Total:</span>
                    <span id="cart-total" className="text-lg font-bold text-gray-800 dark:text-white">Rp.{cart.totalAmount.toFixed(2)}</span>
                </div>
                <button className="w-full bg-gray-800 dark:bg-white text-white dark:text-gray-800 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300">
                    Checkout
                </button>
            </div>
        </div>
    );
};
