import { useState } from "react"
import { useParams, Link } from "react-router-dom"
import { products } from "../data/products"
import { useCart } from "../context/CartContext"
import { ArrowLeft, ShoppingCart, Star, CheckCircle } from "lucide-react"
import styles from "../styles/ProductDetails.module.css"

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>()
  const productId = Number(id)
  const product = products.find((p) => p.id === productId)
  const { addToCart } = useCart()
  const [showAlert, setShowAlert] = useState(false)

  const handleAddToCart = () => {
    addToCart(product!)
    setShowAlert(true)
    setTimeout(() => setShowAlert(false), 2500)
  }

  if (!product) {
    return (
      <div className={styles.notFound}>
        <h2>Produto não encontrado</h2>
        <p>O produto que você está procurando não existe ou foi removido.</p>
        <Link to="/" className={styles.backBtn}>
          <ArrowLeft size={16} />
          Voltar para Home
        </Link>
      </div>
    )
  }

  return (
    <>
      {showAlert && (
        <div className={styles.alertBanner}>
          <CheckCircle size={18} />
          Produto adicionado ao carrinho!
        </div>
      )}

      <div className={styles.container}>
        <Link to="/" className={styles.backLink}>
          <ArrowLeft size={16} />
          Voltar para loja
        </Link>

        <div className={styles.productDetail}>
          <div className={styles.imageSection}>
            <img src={product.image} alt={product.name} className={styles.image} />
          </div>

          <div className={styles.infoSection}>
            <div className={styles.productHeader}>
              <h1 className={styles.productTitle}>{product.name}</h1>
              <div className={styles.rating}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className={i < 4 ? styles.starFilled : styles.starEmpty} />
                ))}
                <span className={styles.ratingText}>(4.0) • 127 avaliações</span>
              </div>
            </div>

            <div className={styles.priceSection}>
              <span className={styles.price}>R$ {product.price.toFixed(2)}</span>
              <span className={styles.installments}>ou 12x de R$ {(product.price / 12).toFixed(2)}</span>
            </div>

            <div className={styles.description}>
              <h3>Descrição do Produto</h3>
              <p>{product.description}</p>
            </div>

            <div className={styles.features}>
              <h3>Características</h3>
              <ul>
                <li>✓ Garantia de 1 ano</li>
                <li>✓ Frete grátis para todo o Brasil</li>
                <li>✓ Entrega em até 7 dias úteis</li>
                <li>✓ Troca grátis em 30 dias</li>
              </ul>
            </div>

            <button className={styles.addToCartBtn} onClick={handleAddToCart}>
              <ShoppingCart size={20} />
              Adicionar ao carrinho
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
