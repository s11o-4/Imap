//Internal dependencies
import React from 'react';
import './Maps.css'

//React-bootstrap
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';

function Ciencia() {
    return (
        <div className='Ciencia'>
            <Title />
            <ContentTable />
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
    return (
        <div className='table'>
            <Container>
                <Table responsive="sm" >
                    <thead>
                        <tr>
                            <th>#</th>
                            <th style={{ paddingLeft: '8vw', paddingRight: '5vw' }}>Canales</th>
                            <th style={{ paddingLeft: '8vw', paddingRight: '5vw' }}>Comunidades</th>
                            <th style={{ paddingLeft: '8vw', paddingRight: '5vw' }}>Plataformas</th>
                        </tr>
                    </thead>
                    <tbody>
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

export default Ciencia