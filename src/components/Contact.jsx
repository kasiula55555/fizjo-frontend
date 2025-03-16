import { useState } from 'react';
import styles from '../style/Contact.module.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Wysłano formularz:", formData);
    alert("Dziękujemy za wiadomość!");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className={`container ${styles.contactContainer}`}>
      <h2 className={styles.heading}>Skontaktuj się z nami</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className="mb-3">
          <label className="form-label">Imię i nazwisko</label>
          <input 
            type="text" 
            className="form-control" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Adres email</label>
          <input 
            type="email" 
            className="form-control" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Wiadomość</label>
          <textarea 
            className="form-control" 
            name="message" 
            rows="4" 
            value={formData.message} 
            onChange={handleChange} 
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary w-100">Wyślij</button>
      </form>
    </div>
  );
}

export default Contact
