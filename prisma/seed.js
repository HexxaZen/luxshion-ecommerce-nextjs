import { PrismaClient, Role } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  // Hapus data lama biar seeding tidak bentrok
  await prisma.cartItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.product.deleteMany();
  await prisma.user.deleteMany();

  const hashedPassword = await bcrypt.hash('password123', 10);

  // Buat user
  const admin = await prisma.user.create({
    data: {
      email: 'admin@example.com',
      password: hashedPassword,
      name: 'Super Admin',
      role: Role.ADMIN,
    },
  });

  const seller1 = await prisma.user.create({
    data: {
      email: 'seller1@example.com',
      password: hashedPassword,
      name: 'Seller One',
      role: Role.SELLER,
    },
  });

  const seller2 = await prisma.user.create({
    data: {
      email: 'seller2@example.com',
      password: hashedPassword,
      name: 'Seller Two',
      role: Role.SELLER,
    },
  });

  const client1 = await prisma.user.create({
    data: {
      email: 'client1@example.com',
      password: hashedPassword,
      name: 'Client One',
      role: Role.CLIENT,
    },
  });

  const client2 = await prisma.user.create({
    data: {
      email: 'client2@example.com',
      password: hashedPassword,
      name: 'Client Two',
      role: Role.CLIENT,
    },
  });

  // Buat produk fashion
  const product1 = await prisma.product.create({
    data: {
      name: 'Kaos Oversize Pria',
      description: 'Kaos oversize bahan cotton premium, nyaman dipakai sehari-hari.',
      price: 120000,
      category: 'Clothing',
      imageUrl:
        'https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=600',
      topSelling: true,
      sellerId: seller1.id,
    },
  });

  const product2 = await prisma.product.create({
    data: {
      name: 'Sepatu Sneakers Putih',
      description: 'Sneakers putih klasik, cocok dipadukan dengan berbagai outfit.',
      price: 350000,
      category: 'Footwear',
      imageUrl:
        'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600',
      sellerId: seller1.id,
    },
  });

  const product3 = await prisma.product.create({
    data: {
      name: 'Tas Tote Kulit Wanita',
      description: 'Tas tote kulit elegan untuk aktivitas sehari-hari.',
      price: 450000,
      category: 'Bags',
      imageUrl:
        'https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=600',
      topSelling: true,
      sellerId: seller2.id,
    },
  });

  const product4 = await prisma.product.create({
    data: {
      name: 'Jam Tangan Minimalis',
      description: 'Jam tangan gaya minimalis dengan strap kulit.',
      price: 280000,
      category: 'Accessories',
      imageUrl:
        'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=600',
      sellerId: seller2.id,
    },
  });

  // Buat order sample
  await prisma.order.create({
    data: {
      clientId: client1.id,
      total: product1.price + product3.price,
      items: {
        create: [
          { productId: product1.id, quantity: 1 },
          { productId: product3.id, quantity: 1 },
        ],
      },
    },
  });

  await prisma.order.create({
    data: {
      clientId: client2.id,
      total: product2.price,
      items: {
        create: [{ productId: product2.id, quantity: 1 }],
      },
    },
  });

  console.log('✅ Seeder fashion berhasil jalan!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
