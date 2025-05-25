import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function CartSummary() {
  const { cart } = useCart();

  // Soma total de itens no carrinho
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div style={{ position: 'fixed', top: 10, right: 10, background: '#eee', padding: '0.5rem 1rem', borderRadius: '4px' }}>
      <Link to="/checkout">
        Carrinho: {totalItems} item{totalItems !== 1 ? 's' : ''}
      </Link>
    </div>
  );
}
