'use client';

import { Product } from '../lib/types';
import { useAppContext } from '../context/AppContext';
import Image from 'next/image';
import toast from 'react-hot-toast';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { cart, quickView } = useAppContext();

  const handleAddToCart = () => {
    cart.addToCart(product);
    toast.success(`${product.name} berhasil ditambahkan ke keranjang 🛒`, {
      style: {
        borderRadius: '12px',
        background: '#333',
        color: '#fff',
      },
      icon: '✅',
    });
  };
  return (
    <div className="product-card bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 flex flex-col">
      {/* Product Image */}
      <div className="product-image relative">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={400}
          height={400}
          className="w-full h-64 object-cover transition-transform duration-300"
        />

        {/* Overlay buttons */}
        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
          <button
            onClick={() => quickView.openModal(product)}
            className="bg-white text-gray-800 px-4 py-2 rounded-full font-semibold hover:scale-105 transition-transform duration-300 mr-2"
          >
            Quick View
          </button>
          <button
            onClick={handleAddToCart}
            className="bg-gray-800 text-white px-4 py-2 rounded-full font-semibold hover:scale-105 transition-transform duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Product Details */}
      <div className="p-6 flex flex-col flex-1">
        {/* Nama + Deskripsi */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
            {product.name}
          </h3>
          {product.description && (
            <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
              {product.description}
            </p>
          )}
        </div>

        {/* Harga + Button (selalu di bawah) */}
        <div className="mt-auto flex justify-between items-center">
          <span className="text-lg font-bold text-gray-800 dark:text-white">
            Rp {product.price.toLocaleString('id-ID')}
          </span>
          <button
            onClick={handleAddToCart}
            className="bg-gray-800 dark:bg-white text-white dark:text-gray-800 px-4 py-2 rounded-full font-semibold hover:scale-105 transition-transform duration-300 pulse-on-hover"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
