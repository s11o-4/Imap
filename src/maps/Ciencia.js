//Internal dependencies
import React from 'react';
import './Maps.css'

//React-bootstrap
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

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

function TableRowGenerator(props) {
    return (
        <tr>
            <td>
                {props.id}
            </td>
            <td>
                <span class="table_content_title">
                    {props.chanel_title + " ~ "}
                </span>
                {props.description}
                <br />
                <span class="btn_table">
                    <Button
                        variant="outline-dark"
                        target='blank'
                        href={props.link}
                    >
                        <span class="content_title">
                            Ver canal
                        </span>
                    </Button>
                </span>
            </td>
            <td>
                {props.comunity}
            </td>
            <td>
                {props.platforms}
            </td>
        </tr>
    )
}

function ContentTable() {
    const thStyle = {
        paddingLeft: '6vw',
        paddingRight: '6vw'
    }
    return (
        <div className='table'>
            <Container>
                <Table responsive="sm" hover bordered>
                    <thead class="table_title">
                        <tr>
                            <th>#</th>
                            <th
                                style={thStyle}>
                                Canales</th>
                            <th
                                style={thStyle}>
                                Comunidades</th>
                            <th
                                style={thStyle}>
                                Plataformas</th>
                        </tr>
                    </thead>
                    <tbody class="table_content">
                        <TableRowGenerator
                            id='1'
                            chanel_title='QuantumFracture'
                            description='¡Ciencia! ¡y con animaciones! El lado más loco (y real) del Universo.'
                            link='https://www.youtube.com/channel/UCbdSYaPD-lr1kW27UJuk8Pw'
                        />
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}

function TabContentGenerator(props) {
    return (
        <p class="tabbed_content">
            <ListGroup>
                <ListGroup.Item>
                    <p class="tabbed_background">
                        <Container>
                            <span>
                                {props.content_arg}
                            </span>
                        </Container>
                    </p>
                </ListGroup.Item>
            </ListGroup>
        </p>
    )
}

function ContentTabbed() {
    return (
        <Container>
            <Tabs
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                className="mb-3"
            >
                <Tab
                    eventKey='faq'
                    title=
                    {
                        <span class="tabbed_title">
                            FAQ
                        </span>
                    }
                >
                    <TabContentGenerator
                        content_arg='contenido'
                    />
                </Tab>

                <Tab
                    eventKey="videos"
                    title=
                    {
                        <span class="tabbed_title">
                            Videos Top
                        </span>
                    }
                >
                    <TabContentGenerator
                        content_arg='contenido'
                    />
                </Tab>
                
                <Tab
                    eventKey="libros"
                    title=
                    {
                        <span class="tabbed_title">
                            Libros
                        </span>
                    }
                >
                    <TabContentGenerator
                        content_arg='contenido'
                    />
                </Tab>
                
                <Tab
                    eventKey="podcasts"
                    title=
                    {
                        <span class="tabbed_title">
                            Podcasts
                        </span>
                    }
                >
                    <TabContentGenerator
                        content_arg='contenido'
                    />
                </Tab>
            
            </Tabs>
        </Container>
    )
}

export default Ciencia