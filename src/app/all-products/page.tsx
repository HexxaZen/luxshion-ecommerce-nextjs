// src/app/all-products/page.tsx
import { prisma } from '../lib/prisma';
import { ProductCard } from '../clientcomponents/product-card';
import Link from 'next/link';
import { Product } from '../lib/types';
import { Header } from '../clientcomponents/header';
import { Footer } from '../clientcomponents/footer';

interface AllProductsPageProps {
  searchParams: { page?: string };
}

export default async function AllProductsPage({ searchParams }: AllProductsPageProps) {
  const page = parseInt(searchParams.page || '1', 10);
  const pageSize = 24;

  // Hitung total data
  const totalProducts = await prisma.product.count();

  // Ambil data dengan pagination
  const products = await prisma.product.findMany({
    skip: (page - 1) * pageSize,
    take: pageSize,
    orderBy: { createdAt: 'desc' },
  });

  const totalPages = Math.ceil(totalProducts / pageSize);

  return (
    <>
    <Header />
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 mt-7">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-12 text-center">
          🛍️ All Products
        </h1>

        {products.length === 0 ? (
          <p className="text-center text-gray-600 dark:text-gray-400">
            Belum ada produk tersedia.
          </p>
        ) : (
          <>
            {/* Grid Produk */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center space-x-4">
              {page > 1 && (
                <Link
                  href={`/all-products?page=${page - 1}`}
                  className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white font-semibold hover:bg-gray-300 dark:hover:bg-gray-600"
                >
                  ← Previous
                </Link>
              )}

              <span className="px-4 py-2 rounded-lg bg-gray-800 text-white dark:bg-white dark:text-gray-800">
                Page {page} of {totalPages}
              </span>

              {page < totalPages && (
                <Link
                  href={`/all-products?page=${page + 1}`}
                  className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white font-semibold hover:bg-gray-300 dark:hover:bg-gray-600"
                >
                  Next →
                </Link>
              )}
            </div>
          </>
        )}
      </div>
    </section>
    <Footer />
    </>
  );
}
