import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppProvider } from './context/AppContext';
import { SidebarCart } from './clientcomponents/sidebar-cart';
import { MobileMenu } from './clientcomponents/mobile-menu';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LuxShion - Premium Fashion Store",
  description: "Discover Premium Fashion That Defines You",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProvider>
          {children}
          <Toaster position="top-right" reverseOrder={false} />
          <SidebarCart />
          <MobileMenu />
        </AppProvider>
      </body>
    </html>
  );
}