import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function PostForms() {
  return (
    <div>
        <h1>Postagem</h1>
        <Form className="p-4" action="http://localhost:8080/post/" encType='multipart/form-data' method='post' >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Título:</Form.Label>
                <Form.Control id="titulo" name="titulo" size="lg" type="text"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlSelect1">
                <Form.Label>Tipo:</Form.Label>
                <Form.Select id="tipo" name='tipo' aria-label="Default select example">
                    <option value="1">Notícia</option>
                    <option value="3">Projeto</option>
                    <option value="2">Evento</option>
                </Form.Select> 
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Conteúdo:</Form.Label>
                <Form.Control id="descricao" name='descricao' as="textarea" rows={3} />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlImage1" className="mb-3">
                <Form.Label>Imagem:</Form.Label>
                <Form.Control id="imagem" name='imagem' type="file" />
            </Form.Group>
            <Button onClick="window.location.href = '/';" variant="secondary" type="submit">
                Enviar
            </Button>
        </Form>
    </div>
  );
}

export default PostForms;