// src/lib/types.ts

export interface Product {
  id: number;
  name: string;
  description: string | null;
  price: number;
  category: string;
  imageUrl: string;
  topSelling: boolean;
  createdAt: Date;
  updatedAt: Date;
  sellerId: number;
}
  
  export interface CartItem extends Product {
    quantity: number;
  }