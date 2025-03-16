import styles from '../style/Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles['hero-content']}>
        <h1 className={styles['hero-title']}>Profesjonalna Fizjoterapia</h1>
        <p>Pomagamy wrócić do pełnej sprawności.</p>
        <a href="#contact" className={styles['hero-btn']}>Umów wizytę</a>
      </div>
    </section>
  );
};

export default Hero;
