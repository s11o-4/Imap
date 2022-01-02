//Internal dependencies
import React from 'react';
import './Maps.css'

//React-bootstrap
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import ListGroup from 'react-bootstrap/ListGroup'
import 'bootstrap/dist/css/bootstrap.min.css';

function Ciencia() {
    return (
        <div className='Ciencia'>
            <Title />
            <ContentTable />
            <ContentTabbed />
        </div>
    )
}

function Title() {
    return (
        <div>
            <h2 id='sub_title' class="text-center">
                Ciencia
            </h2>
        </div>
    )
}

function ContentTable() {
    const thStyle = {
        paddingLeft: '6vw',
        paddingRight: '5vw'
    }
    return (
        <div className='table'>
            <Container>
                <Table responsive="sm" hover bordered>
                    <thead class="table_title">
                        <tr>
                            <th>#</th>
                            <th
                                style={thStyle}
                            >Canales</th>
                            <th
                                style={thStyle}>
                                Comunidades</th>
                            <th
                                style={thStyle}>
                                Plataformas</th>
                        </tr>
                    </thead>
                    <tbody class="table_content">
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td colSpan={2}>Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}

function ContentTabbed() {
    return (
        <Container>
            <Tabs
                defaultActiveKey="profile" 
                id="uncontrolled-tab-example"
                className="mb-2"
                class="tabbed_content_title"
            >
                <Tab eventKey="libros" title="Libros">
                    <ListGroup>
                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                    </ListGroup>
                </Tab>
                <Tab eventKey="podcasts" title="Podcasts">
                    <ListGroup>
                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                    </ListGroup>
                </Tab>
            </Tabs>
        </Container>
    )
}

export default Ciencia