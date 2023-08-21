import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import imagem1 from '../assets/floresta1.jpg';
import imagem2 from '../assets/floresta2.jpg';
import imagem3 from '../assets/floresta3.jpg';
import imagem4 from '../assets/floresta4.jpg';


function Descubra() {
  return (
    <CardGroup>
      <Card>
        <Card.Img className="c-img" variant="top" src={imagem1} />
        <Card.Body>
          <Card.Title>Prefeito de Itacaré busca parceria com Floresta Viva</Card.Title>
          <Card.Text>
          O prefeito de Itacaré, Antônio de Anízio, visitou o Instituto Floresta Viva com o objetivo de firmar parcerias com a Prefeitura
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img className="c-img" variant="top" src={imagem2} />
        <Card.Body>
          <Card.Title>HNG e Floresta Viva lançam projeto para Jardim Botânico</Card.Title>
          <Card.Text>
          A Human Network do Brasil e o Instituto Floresta Viva realizarão no dia 31 de maio o anúncio de lançamento do projeto Jardim Botânico Serra Grande 
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img className="c-img" variant="top" src={imagem3} />
        <Card.Body>
          <Card.Title>Estudo traça panorama da Cacauicultura no litoral do Sul da Bahia</Card.Title>
          <Card.Text>
          A região sul da Bahia é conhecida por sua beleza natural, riqueza litorânea e também pela atividade cacaueira que, por mais de 200 anos vem atribuindo uma identidade ao território
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img className="c-img" variant="top" src={imagem4} />
        <Card.Body>
          <Card.Title>SOS inaugura viveiro de mudas na Bahia</Card.Title>
          <Card.Text>
          Objetivo da organização é produzir 100 mil mudas por safra de espécies da Mata Atlântica
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

export default Descubra;
