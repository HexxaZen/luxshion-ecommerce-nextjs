// src/lib/data.ts

import { prisma} from './prisma';
import { Product } from './types';

export async function getProducts(): Promise<Product[]> {
  const products = await prisma.product.findMany({
    // Secara eksplisit pilih properti yang ada di tipe Product
    select: {
      id: true,
      name: true,
      description: true,
      price: true,
      category: true,
      imageUrl: true,
      topSelling: true,
    },
  });

  return products as Product[];
}

export async function getTopSellingProducts(): Promise<Product[]> {
  const topSelling = await prisma.product.findMany({
    where: { topSelling: true },
    // Pilih properti yang sama seperti di getProducts
    select: {
      id: true,
      name: true,
      description: true,
      price: true,
      category: true,
      imageUrl: true,
      topSelling: true,
    },
  });
  
  return topSelling as Product[];
}