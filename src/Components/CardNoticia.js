import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Img from '../Imgs/img.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function CardNoticia() {
    return (
      <Card style={{ width: '300px', height: 'auto' }}>
        <Card.Img variant="top" src={Img} />
        <Card.Body style={{display: 'flex', justifyContent: 'space-evenly', flexDirection: 'column' }}>
          <Card.Title>Confraternização IEEE</Card.Title>
          <Card.Text style={{textAlign: 'justify'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Card.Text>
          <div>
              <Card.Link href="#">Lorem ipsum 1</Card.Link>
              <Card.Link href="#">Lorem ipsum 2</Card.Link>
          </div>
          <Button variant="primary" style={{ marginTop: '1rem' }}>Lorem ipsum - btn</Button>
        </Card.Body>
      </Card>
    );
  }
  
export default CardNoticia;