import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/o-mnie" element={<About />} />
        <Route path="/uslugi" element={<Services />} />
        <Route path="/opinie" element={<Testimonials />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/rezerwacja" element={<Booking />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
