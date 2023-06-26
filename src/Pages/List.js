import Row from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from '../Components/CardNoticia';

import { useEffect, useState } from 'react';

function List(nome, link) {
    
    const [lista, setLista] = useState([]);

    useEffect(() => {
        const carregarPost = async () => {
            let data = await fetch(link)
            .then((response) => response.json())
            .then((responseJSON) => setLista(responseJSON))
            .catch(error => console.error(error) );
            console.log(data)
        }

        carregarPost();
    }, []);

    useEffect(()=>{console.log('lista:',lista)}, [lista]);

  return (
    <Container>
        <h1 style={{textAlign: 'left'}}>{nome}</h1>
        <Row>
            {lista.map((element) => (<Col className='pb-4'>{Card(element.titulo, element.descricao, element.imagem)}</Col>))}
        </Row>
    </Container>
  );
}

export default List;
