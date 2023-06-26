import React, { useState, useEffect } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

import '../css/capitulos.css';

function Capitulos() {
    const [lista, setLista] = useState([]);

    useEffect(() => {
        const carregarCapitulos = async () => {
            let data = await fetch("http://localhost:8080/capitulo/")
            .then((response) => response.json())
            .then((responseJSON) => setLista(responseJSON))
            .catch(error => console.error(error) );
            console.log(data)
        }

        carregarCapitulos();
    }, []);

    useEffect(()=>{console.log('lista:',lista)}, [lista]);

  return (
    <Container className='caps'>
        <h1 style={{textAlign: 'left'}}>Capítulos</h1>
        <Row>
            {
                lista.map( (element) => (
                    <Col key={element.id}>
                        <a style={{textDecoration : 'none', color : 'black'}} href={element.path}>
                            <Image 
                                style={{marginBottom: 10}} 
                                title={element.nome} 
                                roundedCircle 
                                width={160} 
                                height={160} 
                                src={"http://localhost:8080/image/" + element.logo} 
                                className='shadow-lg'
                            />
                            <h2 style={{textAlign: 'text-center'}}>
                                {element.nome}
                            </h2>
                        </a>
                    </Col>
                ) )
            }
        </Row>
    </Container>
  );
}

export default Capitulos;