import { Link } from 'react-router-dom';


function Home() {
  return (
    <div className="hero">
      <div className="container text-center">
        <h1>Profesjonalna Fizjoterapia</h1>
        <p>Zdrowie i sprawność na pierwszym miejscu.</p>
        <Link className="btn btn-primary" to="/rezerwacja">Umów wizytę</Link>
      </div>
    </div>
  );
}

export default Home;
