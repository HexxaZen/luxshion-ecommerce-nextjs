import { getProducts, getTopSellingProducts } from "./lib/data";
import { Header } from "./clientcomponents/header";
import { Hero } from "./clientcomponents/hero";
import { ProductList } from "./clientcomponents/product-list";
import { About } from "./clientcomponents/about";
import { Contact } from "./clientcomponents/contact";
import { Footer } from "./clientcomponents/footer";
import { QuickViewModal } from "./clientcomponents/quick-view-modal";
import { MobileMenu } from "./clientcomponents/mobile-menu";
import { SidebarCart } from "./clientcomponents/sidebar-cart";

export default async function HomePage() {
  // Ambil data produk dari database via prisma
  // Ini terjadi di sisi server, jadi kode ini aman dan efisien
  const products = await getProducts();
  const topSellingProducts = await getTopSellingProducts();

  return (
    <div className="bg-gray-50 dark:bg-gray-900 transition-colors duration-300 min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <ProductList
          initialProducts={products}
          initialTopSelling={topSellingProducts}
        />
        <About />
        <Contact />
      </main>
      <Footer />
      <QuickViewModal />
      <MobileMenu />
      <SidebarCart />
    </div>
  );
}