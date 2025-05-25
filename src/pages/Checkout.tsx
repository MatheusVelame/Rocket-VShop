import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';

export default function Checkout() {
  const { cart, total, clearCart } = useCart();
  const navigate = useNavigate();

  function handleConfirmPurchase() {
    alert('Compra finalizada com sucesso!');
    clearCart();
    navigate('/');
  }

  if (cart.length === 0) {
    return (
      <div>
        <p>Seu carrinho está vazio.</p>
        <Link to="/">Voltar para Home</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>Resumo da Compra</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} - Quantidade: {item.quantity} - R$ {(item.price * item.quantity).toFixed(2)}
          </li>
        ))}
      </ul>
      <strong>Total: R$ {total.toFixed(2)}</strong>
      <br />
      <button onClick={handleConfirmPurchase}>Confirmar Compra</button>
      <br />
      <Link to="/">Voltar para Home</Link>
    </div>
  );
}
