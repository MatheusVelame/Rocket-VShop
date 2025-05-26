import ProductCard from "../components/ProductCard"
import { products } from "../data/products"
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <header className={styles.header}>
        <h1 className={styles.title}>Nossa Loja</h1>
        <p className={styles.subtitle}>Descubra produtos incríveis com os melhores preços</p>
      </header>

      <div className={styles.productsGrid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
