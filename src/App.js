//Scripts and internal dependencies
import React from 'react';
import './App.css';
import Ciencia from './maps/Science/Ciencia'
import Error from './ErrorPage'

//React-router-dom 
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate
} from "react-router-dom";

//React-boostrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//Images
import dark_logo from './images/logo_dark_theme_3.png'
import ciencia_logo from './images/ciencia.png'
import inge_tecno_logo from './images/ingenieria.png'
import art_logo from './images/arte.png'
import mate_logo from './images/mate.png'
import finanzas from './images/finanzas.png'

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/"
            element={
              <div>
                <NavbarGenerator />
                <TitleDescription />
                <MapsClass />
                <Footer />
              </div>
            }
          />
          <Route path="/Ciencia"
            element={
              <div>
                <NavbarGenerator />
                <Ciencia />
              </div>
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router >
    </div>
  );
}

function NavbarGenerator() {
  return (
    <div id='navbar'>
      <Navbar className="navbar" expand="sm" fixed="top">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt="Logo"
              src={dark_logo}
              width="100"
              height="55"
            />
            <span className="text-start" id='title_navbar'>
              Imap
            </span>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

function TitleDescription() {
  return (
    <div>
      <h1 id='title' className="text-center">
        Imap
      </h1>
      <Container>
        <p id='leyend' className="text-center">
          "Un mapa para todo aquel valiente que quiera comenzar a
          ser autodidacta en este enorme océano llamado Internet."
        </p>
      </Container>
    </div>
  )
}

function Map(props) {
  let navigate = useNavigate();
  return (
    <div class="card">
      <Card border="dark">
        <Card.Img
          class="map_img"
          alt={props.title}
          variant="top"
          src={props.img_scr}
        />
        <Card.Body>
          <Card.Title id='title_map'>
            {props.title}
          </Card.Title>
          <Button
            variant="outline-dark"
            onClick={() => {
              navigate(props.id)
            }}>
            <span class="content_title">
              Ver mapa
            </span>
          </Button>
        </Card.Body>
      </Card>

    </div>
  )
}

class MapsClass extends React.Component {
  constructor(props) {
    super(props);
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
                id="/Ciencia"
              />
            </Col>
            <Col style={{ paddingBottom: '5vh' }}>
              <Map
                img_scr={inge_tecno_logo}
                title="Ingeniería y Tecnología"
                id="/IngTec"
              />
            </Col>
          </Row>
          <Row xs={1} md={2}>
            <Col style={{ paddingBottom: '5vh' }}>
              <Map
                img_scr={finanzas}
                title="Finanzas"
                id="/Finanzas"
              />
            </Col>
            <Col style={{ paddingBottom: '5vh' }}>
              <Map
                img_scr={art_logo}
                title="Arte"
                id="/Arte"
              />
            </Col>
          </Row>
          <Row xs={1} md={2}>
            <Col style={{ paddingBottom: '5vh' }}>
              <Map
                img_scr={mate_logo}
                title="Matemáticas"
                id="/Matematicas"
              />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

function Footer() {
  return (
    <div class="footer">
      <Container>
        <Row className="row_navbar">
          <span id="footer_img">
            <img
              alt="Logo"
              src={dark_logo}
              width="100"
              height="55"
            />
          </span>
          <span id="footer_content" class="d-flex justify-content-end">
            <Col>
              <p>
                Acerca de nosotros
              </p>
            </Col>
            <Col>
              <p>
                Contactanos!
              </p>
            </Col>
            <Col>
              <p>
                Copyright © 2022 - 2100
              </p>
            </Col>
          </span>
        </Row>
      </Container>
    </div>
  )
}

export default App;