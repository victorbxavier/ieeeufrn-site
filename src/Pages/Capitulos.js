import '../css/capitulos.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

import logoCs from '../Imgs/CS-IEEE UFRN Symbol.png';
import logoPels from '../Imgs/Logo PELS_IAS UFRN.png';
import logoWie from '../Imgs/LOGO WIE FUNDO TRANSPARENTE.png';
import logoInClass from '../Imgs/Logo_In_Class.png';
 
function Capitulos() {
    const lista = [{id: 0, nome: 'CS', imagem: logoCs}, {id: 1, nome: 'PELS', imagem: logoPels}, {id: 2, nome: 'Wie', imagem: logoWie}, {id: 3, nome: 'In Class', imagem: logoInClass}, {id: 4, nome: 'CS', imagem: logoCs}]

    let capitulos = [];
    lista.forEach(element => {
        capitulos.push(<Col key={element.id}><a style={{textDecoration : 'none', color : 'black'}} href='/'>
            <Image style={{marginBottom: 10}} title={element.nome} roundedCircle width={160} height={160} 
            src={element.imagem} className='shadow-lg'></Image>
        <h2 style={{textAlign: 'text-center'}}>{element.nome}</h2></a>
        </Col>)
    });

  return (
    <Container className='caps'>
        <h1 style={{textAlign: 'left', textDecoration: 'underline'}}>Capítulos</h1>
        <Row>
            {capitulos}
        </Row>
    </Container>
  );
}

export default Capitulos;