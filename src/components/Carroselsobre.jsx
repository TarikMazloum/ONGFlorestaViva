import Carousel from "react-bootstrap/Carousel";
import carrossel1 from "../assets/tucano1.jpg";

function Carrosselsobre() {
  return (
    <Carousel variant="lite">
      <Carousel.Item class="c-item">
        <img className="d-block w-100 c-img" src={carrossel1}/>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrosselsobre;