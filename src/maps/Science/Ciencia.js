//Internal dependencies
import React from 'react';
import '../Maps.css'
import info_table from './info_table.json'

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

function TableColumnGeneratorChannels(props) {
    return (
        <td>
            <span class="table_content_title">
                {props.chanel_title + " - "}
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
            <TableColumnGeneratorChannels
                chanel_title={json.chanel_title}
                description={json.description}
                link={json.link}
            />
    )

function TableColumnGeneratorCommunities(props) {
    return (
        <td>
            <span class="table_content_title">
                {props.community_title + " - "}
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

const Table_community_content =
    info_table.info_communities.map(
        (json) =>
            <TableColumnGeneratorCommunities
                community_title={json.comunity_title}
                description={json.description}
                link={json.link}
            />
    )

function TableColumnGeneratorPlatforms(props) {
    return (
        <td>
            <span class="table_content_title">
                {props.platform_title + " - "}
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

const Table_platform_content =
    info_table.info_platforms.map(
        (json) =>
            <TableColumnGeneratorPlatforms
                platform_title={json.platform_title}
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
                        content_arg=''
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