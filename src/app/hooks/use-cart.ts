// src/hooks/use-cart.ts

'use client';

import { useState } from 'react';
import { Product, CartItem } from '../lib/types';

export const useCart = () => {
    const [cart, setCart] = useState<CartItem[]>([]);

    // Fungsi untuk menambahkan produk ke keranjang
    const addToCart = (productToAdd: Product) => {
        setCart(prevCart => {
            // Cari apakah produk sudah ada di keranjang
            const existingItem = prevCart.find(item => item.id === productToAdd.id);

            if (existingItem) {
                // Jika sudah ada, perbarui jumlahnya
                return prevCart.map(item =>
                    item.id === productToAdd.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                // Jika belum ada, tambahkan produk baru dengan quantity 1
                return [...prevCart, { ...productToAdd, quantity: 1 }];
            }
        });
    };

    // Fungsi untuk memperbarui jumlah produk
    const updateQuantity = (productId: number, newQuantity: number) => {
        if (newQuantity <= 0) {
            // Jika jumlah 0 atau kurang, hapus item dari keranjang
            removeFromCart(productId);
            return;
        }

        setCart(prevCart =>
            prevCart.map(item =>
                item.id === productId ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    // Fungsi untuk menghapus produk dari keranjang
    const removeFromCart = (productId: number) => {
        setCart(prevCart => prevCart.filter(item => item.id !== productId));
    };

    // Menghitung jumlah total item di keranjang
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    // Menghitung total harga keranjang
    const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return {
        cart,
        totalItems,
        totalAmount,
        addToCart,
        updateQuantity,
        removeFromCart
    };
};