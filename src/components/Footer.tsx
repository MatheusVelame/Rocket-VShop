import { Store, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react"
import styles from "../styles/Footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.section}>
            <div className={styles.logo}>
              <Store size={24} />
              <span className={styles.logoText}>VShop</span>
            </div>
            <p className={styles.description}>
              Sua loja online de confiança com os melhores produtos e preços do mercado.
            </p>
            <div className={styles.socialLinks}>
              <a className={styles.socialLink}>
                <Facebook size={20} />
              </a>
              <a className={styles.socialLink}>
                <Instagram size={20} />
              </a>
              <a className={styles.socialLink}>
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Links Rápidos</h3>
            <ul className={styles.linkList}>
              <li>
                <a href="/">Início</a>
              </li>
              <li>
                <a href="/about">Sobre Nós</a>
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Atendimento</h3>
            <ul className={styles.linkList}>
              <li>
                <a >Central de Ajuda</a>
              </li>
              <li>
                <a>Entrega</a>
              </li>
              <li>
                <a>Trocas e Devoluções</a>
              </li>
              <li>
                <a>Fale Conosco</a>
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Contato</h3>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <Mail size={16} />
                <span>contato@VShop.com</span>
              </div>
              <div className={styles.contactItem}>
                <Phone size={16} />
                <span>(11) 9999-9999</span>
              </div>
              <div className={styles.contactItem}>
                <MapPin size={16} />
                <span>Pernambuco, PE</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; 2024 VShop. Todos os direitos reservados.</p>
          <div className={styles.footerLinks}>
            <a>Política de Privacidade</a>
            <a>Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
