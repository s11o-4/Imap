import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Card, Button, Row, Col } from 'react-bootstrap';
import light_logo from './images/logo_light_theme_2.png'
import './App.css';
import Maps from './index_content/Maps'

function App() {
  return (
    <div className='App'>
      <Navbar_generator />
      <Title_description />
      <Maps_generator />
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
      <Container>
        <p id='leyend' class="text-center">
          "Una guía para todo aquel valiente que quiera empezar a
          ser autodidacta en este enorme océano llamado Internet."
        </p>
      </Container>
    </div>
  )
}

function Maps_generator() {
  return (
    <Maps />
  )
}

export default App;