import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';
import Card from '../Components/CardNoticia';

function List(nome) {
    
    const lista = [{id: 0}, {id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}]

    let cards = [];
    lista.forEach(element => {
        cards.push(
        <Col className='p-3'>
            <Card/>
        </Col>)
    });

  return (
    <Container>
        <h1 style={{textAlign: 'left', textDecoration: 'underline'}}>{nome}</h1>
        <Row>
            {cards}
        </Row>
    </Container>
  );
}

export default List;
