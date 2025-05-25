import { useCart } from '../context/CartContext';

export default function Cart() {
  const { cart, removeFromCart, addToCart, clearCart, total } = useCart();

  if (cart.length === 0) {
    return <p>Seu carrinho está vazio.</p>;
  }

  return (
    <div style={{ border: '1px solid #ddd', padding: '1rem', maxWidth: '400px' }}>
      <h2>Carrinho de Compras</h2>

      {cart.map(item => (
        <div key={item.id} style={{ marginBottom: '1rem' }}>
          <strong>{item.name}</strong>
          <p>Quantidade: {item.quantity}</p>
          <p>Preço unitário: R$ {item.price.toFixed(2)}</p>
          <p>Subtotal: R$ {(item.price * item.quantity).toFixed(2)}</p>

          <button onClick={() => removeFromCart(item.id)}>-</button>
          <button onClick={() => addToCart(item)}>+</button>
        </div>
      ))}

      <hr />
      <h3>Total: R$ {total.toFixed(2)}</h3>

      <button onClick={clearCart}>Finalizar Compra</button>
    </div>
  );
}
