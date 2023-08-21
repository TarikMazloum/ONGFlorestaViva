import Carousel from "react-bootstrap/Carousel";
import carrossel1 from "../assets/carrossel1.jpg";
import carrossel2 from "../assets/carrossel2.jpg";
import carrossel3 from "../assets/carrossel3.jpg";

function Carrossel() {
  return (
    <Carousel variant="lite">
      <Carousel.Item class="c-item">
        <img className="d-block w-100 c-img" src={carrossel1} alt="First slide" />
        <Carousel.Caption>
          <h4 class="info">Mais de 140 especies de região cultivadas</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item class="c-item">
        <img className="d-block w-100 c-img" src={carrossel2} alt="Second slide" />
        <Carousel.Caption>
          <h4 class="info">Desenvolvento pessoas e preservando nosso bioma</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item class="c-item">
        <img className="d-block w-100 c-img" src={carrossel3} alt="Third slide" />
        <Carousel.Caption>
          <h4 class="info">Ciência, Pesquisa e a Mata Atlântica</h4>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrossel;