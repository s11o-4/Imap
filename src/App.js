import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import { Container } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap';
import light_logo from './images/logo_light_theme_2.png'

function App() {
  return (
    <div>
      <Navbar_generator />
      <Title_description />
      <Maps />
    </div>
  );
}

function Navbar_generator() {
  return (
    <div className='Navbar'>
      <Navbar bg="light" expand="sm" sticky="top">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={light_logo}
              width="90"
              height="55"
            />
            <span class="text-start" id='title_navbar'>
              Imap
            </span>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

function Title_description() {
  return (
    <div>
      <h1 id='title' class="text-center">
        Imap
      </h1>
      <container>
        <p id='leyend' class="text-center">
          "Una guía para todo aquel valiente que quiera empezar a
          ser autodidacta en este enorme océano llamado Internet."
        </p>
      </container>
    </div>
  )
}

class Maps extends React.Component {
  constructor(props) {
    super(props);
    this.handleButton = this.handleButton(this);
  }
  handleButton() {
    console.log('You cliked submit');
  }
  render() {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Ver mapa</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Ver mapa</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App;