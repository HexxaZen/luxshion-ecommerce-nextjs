import { PrismaClient } from '@prisma/client';
import { execSync } from 'child_process';

const prisma = new PrismaClient();

async function main() {
  console.log('🗑️ Menghapus semua isi tabel...');

  // Truncate semua tabel (reset id + cascade relasi)
  await prisma.$executeRawUnsafe(`
    TRUNCATE TABLE "CartItem", "Order", "Product", "User" RESTART IDENTITY CASCADE
  `);

  console.log('✅ Semua tabel berhasil dikosongkan');

  // Jalankan seeder setelah truncate
  console.log('🌱 Menjalankan seeder...');
  execSync('npm run prisma:seed', { stdio: 'inherit' });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
