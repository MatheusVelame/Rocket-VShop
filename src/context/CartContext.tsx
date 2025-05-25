import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { Product } from '../types/Product';

interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
  total: number;
}

// Criando o contexto
const CartContext = createContext<CartContextType | undefined>(undefined);

// Provedor do contexto
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Adicionar produto ao carrinho
  const addToCart = (product: Product) => {
    const existing = cart.find(item => item.id === product.id);

    if (existing) {
      const updatedCart = cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Remover produto do carrinho
  const removeFromCart = (productId: number) => {
    const updatedCart = cart
      .map(item =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter(item => item.quantity > 0);

    setCart(updatedCart);
  };

  // Limpar carrinho
  const clearCart = () => {
    setCart([]);
  };

  // Calcular total
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, total }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook personalizado para usar o carrinho
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart precisa estar dentro de um CartProvider');
  }
  return context;
};
