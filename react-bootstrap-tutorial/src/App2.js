
// 照著影片版本做

// import logo from './logo.svg';
// import './App.css';
import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App2() {
    return (
        <div className="App">
            <header className="App-header">


                <Container>
                    <Form>
                        <Row>
                            <Col md>
                                <Form.Group controlId="formEmail">
                                    <Form.Label>email adress</Form.Label>
                                    <Form.Control type="email" placeholder="Example@gmail.com" />
                                    <Form.Text>
                                        we will not share.
                                    </Form.Text>
                                </Form.Group>
                            </Col>
                            <Col md>
                                <Form.Group controlId="formPassword">
                                    <Form.Label>password</Form.Label>
                                    <Form.Control type="password" placeholder="password" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Button variant="success" type="submit">logiin</Button>
                    </Form>

                    <Card className="mb-3" style={{ color: "#000" }}>
                        <Card.Img src="https://picsum.photos/200/50" />
                        <Card.Body>
                            <Card.Title>card example</Card.Title>
                            <Card.Text>an example of react btscards</Card.Text>
                            <Button variant="success">read more</Button>
                        </Card.Body>
                    </Card>

                    <Breadcrumb>
                        <Breadcrumb.Item>Test</Breadcrumb.Item>
                        <Breadcrumb.Item>Test2</Breadcrumb.Item>
                        <Breadcrumb.Item active>Test3</Breadcrumb.Item>
                    </Breadcrumb>
                    <Alert variant="success"> is a button</Alert>
                    <Button>Test Button</Button>
                </Container>
            </header>
        </div>
    );
}

export default App2;




