import React from 'react'
import Map from './Map'

import ciencia_logo from '../images/ciencia.png'
import tecno_logo from '../images/tecnología.png'
import inge_logo from '../images/ingenieria.png'
import art_logo from '../images/arte.png'
import mate from '../images/mate.png'
import { Row, Container } from 'react-bootstrap'

const maps_1 = [
    {
        id: 1,
        title: "Ciencia",
        image: ciencia_logo,
        url: '#'
    },
    {
        id: 2,
        title: "Tecnología",
        image: tecno_logo,
        url: '#'
    },
]

const maps_2 = [
    {
        id: 3,
        title: "Ingeniería",
        image: inge_logo,
        url: '#'
    },
    {
        id: 4,
        title: "Arte",
        image: art_logo,
        url: '#'
    },
]

const maps_3 = [
    {
        id: 5,
        title: "Matemáticas",
        image: mate,
        url: "#"
    }
]

function Maps() {
    return (
        <div class="cards">
            <Container>
                <Row>
                    {/* Ciencia, Tecnología */}
                    {maps_1.map((id, title, image, url) => {
                        <Map id={id} title={title} image={image} url={url} />
                    })}
                </Row>
            </Container>
        </div>
    )
}

export default Maps