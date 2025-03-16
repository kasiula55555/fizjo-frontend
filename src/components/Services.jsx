import styles from "../style/Services.module.css";

const services = [
  { title: "Terapia manualna", desc: "Profesjonalne zabiegi na mięśnie i stawy." },
  { title: "Masaż leczniczy", desc: "Pomoc w redukcji bólu i napięcia." },
  { title: "Rehabilitacja pourazowa", desc: "Indywidualnie dopasowane programy terapii." }
];

function Services() {
  return (
    <section className={styles.services} id="uslugi">
      <div className="container">
        <h2 className="text-center">Nasze Usługi</h2>
        <div className={styles.serviceGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
