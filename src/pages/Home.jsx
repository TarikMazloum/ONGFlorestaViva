import NavProjeto from "../components/NavProjeto";
import Carrossel from "../components/Carrossel";
import Card from "../components/Descubra";
import Footer from "../components/Footer";
import Button from 'react-bootstrap/Button';


import "../App.css";

function Home() {
  return (
    <div>
      <div>
        <NavProjeto />
        <div>
          <Carrossel />
          <div className="home">
            <h2 class="h2-2">O Instituto Floresta Viva é uma organização que atua pela preservação da Mata Atlântica no Litoral Sul da Bahia e acredita na convivência harmoniosa entre o ser humano e o meio ambiente.</h2>
          </div>
          <div className="mb-4"><Button variant="primary" size="lg">
          Descubra mais sobre nós
        </Button>
          </div>
        <section className="section">
            <div>
              <h2 class="h2-2">Noticias</h2>
            < Card/>
            </div>
        </section>
          
          <div><br />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
