import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Forms() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Contatos: + 55 (73) 3634.3526 / +55 (73) 99950.4453</Form.Label>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Endereço: RODOVIA SERRA GRANDE - KM 1 URUÇUCA – BA - CEP 45680-000</Form.Label>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>E-mail: FlorestaViva@ORG.com.br</Form.Label>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Instagram: @institutoflorestaviva</Form.Label>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Youtube: Instituto Floresta Viva IFV:</Form.Label>
      </Form.Group>
    </Form>
  );
}

export default Forms;