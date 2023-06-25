import Form from 'react-bootstrap/Form';

function PostForms() {
  return (
    <div>
        <h1>Postagem</h1>
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Título:</Form.Label>
                <Form.Control id="Title" size="lg" type="text"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlSelect1">
                <Form.Label>Tipo:</Form.Label>
                <Form.Select id="Type" aria-label="Default select example">
                    <option value="News">Notícia</option>
                    <option value="Project">Projeto</option>
                    <option value="Event">Evento</option>
                </Form.Select> 
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Conteúdo:</Form.Label>
                <Form.Control id="Content" as="textarea" rows={3} />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlImage1" className="mb-3">
                <Form.Label>Imagem:</Form.Label>
                <Form.Control id="Image" type="file" />
            </Form.Group>
        </Form>
    </div>
  );
}

export default PostForms;