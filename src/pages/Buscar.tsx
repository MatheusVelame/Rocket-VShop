import { useLocation } from "react-router-dom"
import { useMemo } from "react"
import { products } from "../data/products"
import ProductCard from "../components/ProductCard"
import styles from "../styles/SearchResults.module.css"

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

export default function Buscar() {
  const query = useQuery().get("query") || ""

  const resultados = useMemo(() => {
    return products.filter((p) =>
      p.name.toLowerCase().includes(query.toLowerCase())
    )
  }, [query])

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Resultados para: "{query}"</h2>

      {resultados.length === 0 ? (
        <p className={styles.empty}>Nenhum produto encontrado.</p>
      ) : (
        <div className={styles.grid}>
          {resultados.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}
