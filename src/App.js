import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import light_logo from './images/logo_light_theme_2.png'

import ciencia_logo from './images/ciencia.png'
import tecno_logo from './images/tecnología.png'
import inge_logo from './images/ingenieria.png'
import art_logo from './images/arte.png'
import mate_logo from './images/mate.png'

function App() {
  return (
    <div className='App'>
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
              alt="Logo"
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
      <Container>
        <p id='leyend' class="text-center">
          "Una guía para todo aquel valiente que quiera empezar a
          ser autodidacta en este enorme océano llamado Internet."
        </p>
      </Container>
    </div>
  )
}

function Map(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img
        variant="top" src={props.img_scr} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.desc}
        </Card.Text>
        <Button
          variant="primary" onClick={props.handleClick}>
          Ver mapa
        </Button>
      </Card.Body>
    </Card>
  )
}

class Maps extends React.Component{
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {

  }

  render() {
    return (
      <div class="cards">
        <Container>
          <Row>
            <Col>
              <Map
                img_scr={ciencia_logo}
                title="Ciencia"
                desc="Aprende ciencia"
                var_handleClick={this.handleClick}
              />
            </Col>
            <Col>
              <Map
                img_scr={tecno_logo}
                title="Tecnología"
                desc="Aprende tecnología"
                var_handleClick={this.handleClick}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Map
                img_scr={inge_logo}
                title="Ingeniería"
                desc="Aprende ingeniería"
                var_handleClick={this.handleClick}
              />
            </Col>
            <Col>
              <Map
                img_scr={art_logo}
                title="Arte"
                desc="Aprende arte"
                var_handleClick={this.handleClick}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Map
                img_scr={mate_logo}
                title="Mate"
                desc="Aprende mate"
                var_handleClick={this.handleClick}
              />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default App;