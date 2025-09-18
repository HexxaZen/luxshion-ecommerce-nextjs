'use client';

import { createContext, useContext, ReactNode } from 'react';
import { useCart } from '../hooks/use-cart';
import { useModal } from '../hooks/use-modal';
import { useTheme } from '../hooks/use-theme';

// Definisi tipe context
interface AppContextType {
  cart: ReturnType<typeof useCart>;
  quickView: ReturnType<typeof useModal>;
  mobileMenu: ReturnType<typeof useModal>;
  theme: ReturnType<typeof useTheme>;
    cartSidebar: ReturnType<typeof useModal>; 
}

// Buat context dengan default undefined
const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const cart = useCart();
  const quickView = useModal();
  const mobileMenu = useModal();
  const theme = useTheme();
  const cartSidebar = useModal(); 

  return (
    <AppContext.Provider value={{ cart, quickView, mobileMenu, theme, cartSidebar}}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook untuk akses context
export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
