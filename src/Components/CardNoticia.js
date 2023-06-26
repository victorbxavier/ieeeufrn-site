import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function CardNoticia(titulo, descricao, imagem) {
    return (
      <Card style={{ width: '300px', height: 'auto' }}>
        <Card.Img variant="top" src={"http://localhost:8080/image/" + imagem} />
        <Card.Body style={{display: 'flex', justifyContent: 'space-evenly', flexDirection: 'column' }}>
          <Card.Title>{titulo}</Card.Title>
          <Card.Text style={{textAlign: 'justify'}}>
              {descricao}
          </Card.Text>
          <div>
              <Card.Link href="#">Lorem ipsum 1</Card.Link>
              <Card.Link href="#">Lorem ipsum </Card.Link>
          </div>
          <Button variant="primary" style={{ marginTop: '1rem' }}>ver mais</Button>
        </Card.Body>
      </Card>
    );
  }
  
export default CardNoticia;