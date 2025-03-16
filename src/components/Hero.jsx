import { Link } from "react-router-dom";
import styles from "../style/Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container text-center">
        <h1 className={styles.title}>Profesjonalna Fizjoterapia</h1>
        <p className={styles.subtitle}>Zdrowie i komfort Twojego ciała na pierwszym miejscu</p>
        <Link to="/rezerwacja" className={styles.ctaButton}>
          Umów wizytę
        </Link>
      </div>
    </section>
  );
}

export default Hero;
