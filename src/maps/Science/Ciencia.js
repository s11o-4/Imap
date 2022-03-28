//Internal dependencies
import React from 'react';
import '../Maps.css'
import info_table from './info_table.json'
import info_tabbed_content from './info_tabbed_content.json'
import imagen from './science_images/top_science_1.webp'

//React-bootstrap
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ListGroupItem } from 'react-bootstrap';

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

function TableColumnGenerator(props) {
    return (
        <td>
            <span class="table_content_title">
                {props.title + " - "}
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
                        Navegar
                    </span>
                </Button>
            </span>
        </td>
    )
}

const Table_channel_content =
    info_table.info_channels.map(
        (json) =>
            <TableColumnGenerator
                title={json.title}
                description={json.description}
                link={json.link}
            />
    )

const Table_community_content =
    info_table.info_communities_accounts.map(
        (json) =>
            <TableColumnGenerator
                title={json.title}
                description={json.description}
                link={json.link}
            />
    )

const Table_platform_content =
    info_table.info_platforms_websites.map(
        (json) =>
            <TableColumnGenerator
                title={json.title}
                description={json.description}
                link={json.link}
            />
    )

let Table_channel_content_length = Object.keys(Table_channel_content)
Table_channel_content_length = Table_channel_content_length.length

let Table_community_content_length = Object.keys(Table_community_content)
Table_community_content_length = Table_community_content_length.length

let Table_platform_content_length = Object.keys(Table_platform_content)
Table_platform_content_length = Table_platform_content_length.length

const largest_content_table = Math.max
    (
        Table_channel_content_length,
        Table_community_content_length,
        Table_platform_content_length
    );

function TableRowGenerator() {
    let final_content_table = [];

    for (let i = 1; i <= largest_content_table; i++) {
        final_content_table.push(
            <tr>
                <td>
                    {i}
                </td>
                {Table_channel_content[i - 1]}
                {Table_community_content[i - 1]}
                {Table_platform_content[i - 1]}
            </tr>
        )
    }

    return (
        final_content_table
    )
}

function ContentTable() {
    const thStyle = {
        paddingLeft: '3vw',
        paddingRight: '3vw',
    }
    return (
        <div class='table'>
            <Container>
                <Table responsive="sm" hover bordered>
                    <thead class="table_title">
                        <tr>
                            <th>
                                <p id="hashtag">
                                    #
                                </p>
                            </th>
                            <th style={thStyle}>
                                <p id="single_title">
                                    <Container>
                                        Canales
                                    </Container>
                                </p>
                            </th>

                            <th style={thStyle}>
                                <p id="single_double_title">
                                    <Container>
                                        Comunidades & Cuentas
                                    </Container>
                                </p>
                            </th>
                            <th style={thStyle}>
                                <p>
                                    <Container>
                                        Plataformas & Sitios Web
                                    </Container>
                                </p>
                            </th>
                        </tr>
                    </thead>
                    <tbody class="table_content">

                        <TableRowGenerator />

                    </tbody>
                </Table>
            </Container>
        </div>
    )
}

function TabContentGenerator(props) {
    return (
        <ListGroup>
            <ListGroup.Item>
                <p class="tabbed_background">
                    <Container>
                        <span class="faq_question">
                            {props.main}
                        </span>
                        <p class="tabbed_content">
                            {props.desc}
                        </p>
                    </Container>
                </p>
            </ListGroup.Item>
        </ListGroup>
    )
}


function TabContentVideosTopGenerator() {
    //Tu mejor opcion aqui, son tarjetas <-
    return (
        <ListGroup>
            <ListGroupItem>
                <p class="tabbed_bakcground">
                    <Container>
                        <p class="tabbed_background tabbed_content_videos">
                            <img src={imagen}>
                            </img>
                            <p class="tabbed_content">
                                Esta ecuación cambiará tu modo de ver el mundo
                            </p>
                        </p>
                    </Container>
                </p>
            </ListGroupItem >
        </ListGroup >
    )
}

let Tabbed_content_faq =
    info_tabbed_content.info_faq.map(
        (json) =>
            <TabContentGenerator
                main={json.main} desc={json.desc}
            />
    )

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

                    {Tabbed_content_faq}

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

                    <TabContentVideosTopGenerator />

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