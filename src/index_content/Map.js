import React from 'react'
import { Col, Card, Button } from 'react-bootstrap'

function Map(id, title, image, url) {
    return (
        <Col key={id}>
            <Card style={{ width: '18rem' }}>
                <Card.img variant="top" src={image}>
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary" onClick={url}>Ver mapa</Button>
                    </Card.Body>
                </Card.img>
            </Card>
        </Col>
    )
}

export default Map