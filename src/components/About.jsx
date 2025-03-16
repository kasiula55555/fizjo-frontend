import styles from "../style/About.module.css";
import profilePic from "../assets/fizjo.jpg";

function About() {
  return (
    <section className={styles.about} id="o-mnie">
      <div className="container d-flex align-items-center">
        <div className={styles.text}>
          <h2>O mnie</h2>
          <p>
            Nazywam się Jan Kowalski i jestem doświadczonym fizjoterapeutą z wieloletnim stażem. Moim celem jest
            poprawa jakości życia pacjentów poprzez profesjonalne terapie manualne i nowoczesne metody leczenia.
          </p>
        </div>
        <img src={profilePic} alt="Fizjoterapeuta" className={styles.image} />
      </div>
    </section>
  );
}

export default About;
