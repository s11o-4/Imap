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
      <MapsClass />
    </div>
  );
}

function Navbar_generator() {
  return (
    <div id='navbar'>
      <Navbar bg="light" expand="sm" fixed="top">
        <Container>
          <Navbar.Brand href="/home">
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
    <Card border="dark">
      <Card.Img
        class="map_img"
        variant="top"
        src={props.img_scr}
      />
      <Card.Body>
        <Card.Title id='title_map'>
          {props.title}
        </Card.Title>
        <Button id='button_ver_mapa'
          variant="danger"
          onClick={props.handleClick}>
          Ver mapa
        </Button>
      </Card.Body>
    </Card>
  )
}

class MapsClass extends React.Component {
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
          <Row xs={1} md={2}>
            <Col style={{ paddingBottom: '5vh' }}>
              <Map
                img_scr={ciencia_logo}
                title="Ciencia"
                var_handleClick={this.handleClick}
              />
            </Col>
            <Col style={{ paddingBottom: '5vh' }}>
              <Map
                img_scr={tecno_logo}
                title="Tecnología"
                var_handleClick={this.handleClick}
              />
            </Col>
          </Row>
          <Row xs={1} md={2}>
            <Col style={{ paddingBottom: '5vh' }}>
              <Map
                img_scr={inge_logo}
                title="Ingeniería"
                var_handleClick={this.handleClick}
              />
            </Col>
            <Col style={{ paddingBottom: '5vh' }}>
              <Map
                img_scr={art_logo}
                title="Arte"
                var_handleClick={this.handleClick}
              />
            </Col>
          </Row>
          <Row xs={1} md={2}>
            <Col style={{ paddingBottom: '5vh' }}>
              <Map
                img_scr={mate_logo}
                title="Matemáticas"
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