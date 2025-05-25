import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import type { Product } from '../types/Product';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div style={{ border: '1px solid gray', padding: '1rem', width: '200px' }}>
      <h3>{product.name}</h3>
      <p>R$ {product.price.toFixed(2)}</p>
      <Link to={`/product/${product.id}`}>Ver detalhes</Link>
      <br />
      <button onClick={() => addToCart(product)}>Adicionar ao carrinho</button>
    </div>
  );
}
