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

  // Kategori fashion
  const categories = ['Clothing', 'Footwear', 'Bags', 'Accessories'];

  // Gambar fashion contoh
  const imageUrls = [
    'https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=600', // kaos
    'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600', // sneakers
    'https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=600', // tas
    'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=600', // jam tangan
    'https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&w=600', // jaket
    'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600', // kemeja
  ];

  // Buat 100 produk fashion otomatis
  const productsData = Array.from({ length: 100 }).map((_, i) => {
    const category = categories[i % categories.length];
    const sellerId = i % 2 === 0 ? seller1.id : seller2.id;
    const price = Math.floor(Math.random() * (500000 - 80000) + 80000); // 80rb - 500rb
    const imageUrl = imageUrls[i % imageUrls.length];

    return {
      name: `${category} Fashion Item ${i + 1}`,
      description: `Produk ${category.toLowerCase()} fashion terbaru dengan kualitas premium. Cocok untuk gaya sehari-hari maupun acara khusus.`,
      price,
      category,
      imageUrl,
      topSelling: i % 10 === 0, // setiap 10 produk jadi topSelling
      sellerId,
    };
  });

  await prisma.product.createMany({
    data: productsData,
  });

  // Buat order sample
  const sampleProduct1 = await prisma.product.findFirst();
  const sampleProduct2 = await prisma.product.findFirst({ skip: 1 });

  if (sampleProduct1 && sampleProduct2) {
    await prisma.order.create({
      data: {
        clientId: client1.id,
        total: sampleProduct1.price + sampleProduct2.price,
        items: {
          create: [
            { productId: sampleProduct1.id, quantity: 1 },
            { productId: sampleProduct2.id, quantity: 1 },
          ],
        },
      },
    });
  }

  console.log('✅ Seeder 100 produk fashion berhasil dibuat!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
