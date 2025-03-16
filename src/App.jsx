import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import './style/global.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Hero />} />
        <Route path="/o-mnie" element={<About />} />
        <Route path="/uslugi" element={<Services />} />
        <Route path="/kontakt" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
