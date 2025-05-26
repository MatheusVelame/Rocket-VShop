import { Award, Truck, Shield, Heart, CheckCircle } from "lucide-react"
import styles from "../styles/AboutUs.module.css"
import logoImg from '../images/Vlogo.png';
import missaoImg from '../images/missaoImg.jpg';

export default function AboutUs() {
  const stats = [
    { number: "50K+", label: "Clientes Satisfeitos" },
    { number: "10K+", label: "Produtos Vendidos" },
    { number: "5", label: "Anos de Experiência" },
    { number: "99%", label: "Satisfação do Cliente" },
  ]

  const values = [
    {
      icon: <Heart className={styles.valueIcon} />,
      title: "Paixão pelo Cliente",
      description: "Colocamos nossos clientes no centro de tudo que fazemos, oferecendo experiências excepcionais.",
    },
    {
      icon: <Award className={styles.valueIcon} />,
      title: "Qualidade Premium",
      description: "Selecionamos cuidadosamente cada produto para garantir a melhor qualidade e durabilidade.",
    },
    {
      icon: <Truck className={styles.valueIcon} />,
      title: "Entrega Rápida",
      description: "Logística eficiente para entregar seus produtos com rapidez e segurança em todo o Brasil.",
    },
    {
      icon: <Shield className={styles.valueIcon} />,
      title: "Compra Segura",
      description: "Transações 100% seguras com as melhores tecnologias de proteção de dados.",
    },
  ]

  const milestones = [
    {
      year: "2020",
      title: "Fundação da VShop",
      description: "Iniciamos nossa jornada com o sonho de revolucionar o e-commerce brasileiro.",
    },
    {
      year: "2021",
      title: "Primeiro Milhão",
      description: "Alcançamos nossa primeira marca de 1 milhão em vendas, superando todas as expectativas.",
    },
    {
      year: "2022",
      title: "Expansão Nacional",
      description: "Expandimos nossas operações para todo o território nacional.",
    },
    {
      year: "2023",
      title: "50K Clientes",
      description: "Celebramos a marca de 50 mil clientes satisfeitos em nossa plataforma.",
    },
    {
      year: "2024",
      title: "Prêmio E-commerce",
      description:
        "Recebemos o prêmio de 'Melhor E-commerce do Ano' pela Associação Brasileira de Comércio Eletrônico.",
    },
    {
      year: "2025",
      title: "Inovação Contínua",
      description: "Lançamos nossa nova plataforma com IA para personalização de experiência do usuário.",
    },
  ]

  return (
    <div className={styles.aboutContainer}>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Sobre a VShop</h1>
          <p className={styles.heroSubtitle}>
            Conectando pessoas aos melhores produtos com qualidade, confiança e inovação desde 2020.
          </p>
        </div>
        <div className={styles.heroImage}>
            <img src={logoImg} alt="Logo VShop" className={styles.heroImg} />
        </div>
      </section>

      <section className={styles.statsSection}>
        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statCard}>
              <div className={styles.statNumber}>{stat.number}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.missionSection}>
        <div className={styles.missionContent}>
          <div className={styles.missionText}>
            <h2 className={styles.sectionTitle}>Nossa Missão</h2>
            <p className={styles.missionDescription}>
              Democratizar o acesso a produtos de qualidade, oferecendo uma experiência de compra excepcional que supera
              as expectativas dos nossos clientes. Acreditamos que cada pessoa merece ter acesso aos melhores produtos
              com preços justos e atendimento personalizado.
            </p>
            <div className={styles.missionPoints}>
              <div className={styles.missionPoint}>
                <CheckCircle className={styles.checkIcon} />
                <span>Produtos selecionados com rigor de qualidade</span>
              </div>
              <div className={styles.missionPoint}>
                <CheckCircle className={styles.checkIcon} />
                <span>Preços competitivos e promoções exclusivas</span>
              </div>
              <div className={styles.missionPoint}>
                <CheckCircle className={styles.checkIcon} />
                <span>Atendimento humanizado e personalizado</span>
              </div>
            </div>
          </div>
          <div className={styles.missionImage}>
            <img src={missaoImg} alt="missao" className={styles.missionImg} />
          </div>
        </div>
      </section>

      <section className={styles.valuesSection}>
        <h2 className={styles.sectionTitle}>Nossos Valores</h2>
        <div className={styles.valuesGrid}>
          {values.map((value, index) => (
            <div key={index} className={styles.valueCard}>
              {value.icon}
              <h3 className={styles.valueTitle}>{value.title}</h3>
              <p className={styles.valueDescription}>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.timelineSection}>
        <h2 className={styles.sectionTitle}>Nossa Jornada</h2>
        <div className={styles.timeline}>
          {milestones.map((milestone, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.timelineYear}>{milestone.year}</div>
              <div className={styles.timelineContent}>
                <h3 className={styles.timelineTitle}>{milestone.title}</h3>
                <p className={styles.timelineDescription}>{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>


    </div>
  )
}
