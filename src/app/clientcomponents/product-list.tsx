// src/components/product-list.tsx

'use client';

import { useState } from 'react';
import { ProductCard } from './product-card';
import { Product } from '../lib/types';

type Category = "all" | "clothing" | "accessories" | "shoes" | "Coffee" | "Tea";
type SortBy = "default" | "price-low" | "price-high" | "name";

interface ProductListProps {
  initialProducts: Product[];
  initialTopSelling: Product[];
}

export const ProductList = ({ initialProducts, initialTopSelling }: ProductListProps) => {
  const [category, setCategory] = useState<Category>("all");
  const [sortBy, setSortBy] = useState<SortBy>("default");

  const filteredProducts = initialProducts.filter(p => category === "all" || p.category.toLowerCase() === category.toLowerCase());
  
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    return 0;
  });

  return (
    <>
      <section id="top-selling" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">🔥 Top Selling</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {initialTopSelling.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 space-y-4 md:space-y-0">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white">OUR PRODUCTS</h2>
            <div className="flex space-x-4">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as Category)}
                className="px-4 py-2 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white"
              >
                <option value="all">All Categories</option>
                <option value="Coffee">Coffee</option>
                <option value="Tea">Tea</option>
              </select>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortBy)}
                className="px-4 py-2 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white"
              >
                <option value="default">Sort By</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sortedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};