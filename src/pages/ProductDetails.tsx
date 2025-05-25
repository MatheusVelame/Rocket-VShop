import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const productId = Number(id);
  const product = products.find(p => p.id === productId);
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div>
        <p>Produto não encontrado.</p>
        <Link to="/">Voltar para Home</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Preço: R$ {product.price.toFixed(2)}</p>
      {/* Aqui você pode colocar mais informações do produto, imagens, descrição, etc */}
      <button onClick={() => addToCart(product)}>Adicionar ao carrinho</button>
      <br />
      <Link to="/">Voltar para Home</Link>
    </div>
  );
}
